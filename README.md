# Portfolio

## Run the project

Create your `.env` file based on `.env.example`.

```sh
pnpm install
pnpm run dev
```

## Deploy the project

```sh
pnpm run build && pnpm run deploy
```

## FEATURE IDEAS

- Make scroll down indicator color dynamic in View0.
- Add a part for skills in View1.
- Add more details for each carousel slide with a modal.

## CODE IMPROVMENTS

- Replace writable stores to match with Svelte 5.

## BUGS

- Likes decrease to 0 sometimes plus display number latency, solved?

- Bug when the modal is opened and you open/close the browser inspector.
- The 3D coin model rotates weirdly.
- Freeze 0.1s when transitioning on the View0 with the 3D coin model.
