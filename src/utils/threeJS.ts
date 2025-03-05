import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

type Create3DScene = {
  width: number;
  height: number;
  modelPaths: string[];
  texturePaths: string[];
  alpha: boolean;
};

export class ThreeHelper {
  private static async _getModels(modelPaths: string[]) {
    const loader = new GLTFLoader();
    let models: THREE.Group[] = [];

    try {
      models = await Promise.all(
        modelPaths.map(async (path) => {
          return new Promise((resolve, reject) => {
            loader.load(
              path,
              (gltf) => resolve(gltf.scene),
              undefined,
              (error) => reject(error)
            );
          });
        })
      );
    } catch (error) {
      console.error("Loading ThreeJS models error.", error);
      throw error;
    }

    return models;
  }

  private static _getTextures(texturePaths: string[]) {
    const textureLoader = new THREE.TextureLoader();

    return texturePaths.map((path) =>
      textureLoader.load(path, (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
      })
    );
  }

  static async create3DScene({
    width,
    height,
    modelPaths,
    texturePaths,
    alpha,
  }: Create3DScene) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha });
    const models = await ThreeHelper._getModels(modelPaths);
    const textures = ThreeHelper._getTextures(texturePaths);

    renderer.setSize(width, height);

    return { scene, camera, renderer, models, textures };
  }
}
