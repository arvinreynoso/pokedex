## Installation Instructions

1. Install Node v14.17.0 (LTS) using manual installation or [Node Version Manager](https://github.com/nvm-sh/nvm).
2. Install Yarn v1.22.11 using `npm install -g yarn`.
3. Install node packages using `yarn install`.
4. For development, run using `yarn start`.
5. For production, run using `yarn build` and serve using static server like [serve](https://www.npmjs.com/package/serve/v/11.3.0) and [http-server](https://www.npmjs.com/package/http-server).

## Libraries
- ReactJS
- TailwindCSS
- Eslint
- Prettier
- Jest

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Identify and report patterns found in ECMAScript/JavaScript/TypeScript code, with the goal of making code more consistent and avoiding bugs.

### `yarn format`

Improves the code readability and makes the coding style consistent for teams. Developers are more likely to adopt a standard rather than writing their own code style from scratch, so tools like Prettier will make your code look good without you ever having to dabble in the formatting.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
