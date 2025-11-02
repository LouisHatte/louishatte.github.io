# Portfolio

## Run the project

Create your `.env` file based on `.env.example` in `./` and `./functions/` folders.

```sh
pnpm install
pnpm run dev # runs the frontend

cd functions/
pnpm install
pnpm add -g firebase-tools
pnpm run serve # emulates the backend
```

## Deploy the project

```sh
pnpm run build && pnpm run deploy # deploys the frontend

cd functions/
pnpm run deploy # deploys the backend
```

## V2 IDEAS

- Make a mobile version.
- Add a constellation minimap.
- Turn everything in 3D.
- Add 3D custom planets/coins.
- Add a background with the stars
- Add a page loader.
