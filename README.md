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

- Improve the scroll down UI in View0. (https://blog.stackfindover.com/html-css-scroll-down-arrow-examples/)
- Add a part for skills in View1.
- Don't allow click on current slide in the carousel.
- Should add more project details for each carousel slide with a modal.
- Improve the stars.
- Make a mobile version.
- AI first question should always be in English.
- Make buttons more visible.
- Add a constellation minimap.
- Contact section should be a View3, not a modal.
- Add 2D planets.
- Add a real coin.
- Add referencing.
- Add default picture when link sent in social networks.

## CODE IMPROVMENTS

- Replace writable stores to match with Svelte 5.

## BUGS

- Languages bug again?
- Likes decrease to 0 sometimes plus display number latency.
- Can edit the likes variable in firebase.
- Bug when the modal is opened and you resize the browser window.
- The 3D coin model rotates weirdly.
- Freeze 0.1s when transitioning on the View0 with the 3D coin model.
