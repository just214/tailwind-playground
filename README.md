# TailwindCSS Playground

**A React/TypeScript app configured for TailwindCSS, Tailwind UI, and Headless UI.**


- Configured for out-of-the-box usage with [TailwindCSS](https://tailwindcss.com/), [Tailwind UI](https://tailwindui.com/), [Headless UI](https://github.com/tailwindlabs/headlessui/tree/develop/packages/%40headlessui-react), and [Storybook](https://storybook.js.org/).
- Blazing-fast (~50ms) WASM-powered development server with [Snowpack](https://www.snowpack.dev/).
- Example components, tests, and stories.
- Basic, optimized build configuration with Webpack.
- Testing with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Chai](https://www.chaijs.com/). Why not Jest? [https://www.snowpack.dev/#testing](https://www.snowpack.dev/#testing)
- Functional, React/TypeScript ESLint configuration.
- ✨ Bootstrapped with Create Snowpack App (CSA).

> 💡 Check out my [TailwindCSS Cheatsheet](https://github.com/gojutin/tailwindcss-cheatsheet).

## Getting Started

**Step 1:**

Clone this repo or click the **Use this template** button in GitHub:

```sh
git clone git@github.com:gojutin/tailwindcss-playground.git
```

**Step 2:**

Navigate to project and install the dependencies:

```
cd tailwindcss-playground
yarn
````

**Step 3:**

Run one of the scripts below

## Available Scripts

| Script                 | Description                                                                                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn start`           | Runs the app in the development mode. Open http://localhost:8080 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.                                                                        |
| `yarn dev`             | Alias for `yarn start`.                                                                                                                                                                                                                                      |
| `yarn storybook`       | Runs Storybook in the development mode. (uses Webpack). Open http://localhost:6006 to view it in the browser.                                                                                                                                                |
| `yarn prettier`        | Runs a Prettier check.                                                                                                                                                                                                                                       |
| `yarn lint`            | Runs ESLint using [eslint-config-gojutin](https://github.com/gojutin/eslint-config-gojutin).                                                                                                                                                                 |
| `yarn test`            | Launches the application test runner. Run with the `--watch`flag (`yarn test -- --watch`) to run in interactive watch mode.                                                                                                                                  |
| `yarn build-storybook` | Builds a static copy of your Storybook to the `storybook-static/` folder.                                                                                                                                                                                    |
| `yarn build`           | Builds a static copy of your site to the `build/` folder using a minimal Webpack set up. (*@snowpack/plugin-webpack* & *@snowpack/plugin-optimize*). Learn more at [https://www.snowpack.dev/#optimized-builds](https://www.snowpack.dev/#optimized-builds). |

## Useful Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)
- [TailwindCSS Default Configuration](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js)
- [Tailwind UI Documentation](https://tailwindui.com/documentation)
- [Headless UI Documentation](https://github.com/tailwindlabs/headlessui/tree/develop/packages/%40headlessui-react)
