This Project is a clone of Reddit build to demonstrate its use of List APIs.
This project demonstrates how infinite scroll can be combined with react-virtualized's masonry view. A list of features include:

1. A Tiled View with infinite scrolling similar to pinterest.
2. Page routing and redirects based off of subreddit and view
3. Type ahead reddit subreddit searching
4. Refresh notification if there are new posts that you have not been displayed yet
5. Integration of responsive iconography using Font Awesome
6. Integration with Semantic UI Framework
7. Global state management with Redux. With Dev Tools support.

Documentation - This project is fully documented with use of prop-types for each react component. Look at a component to find out a description of what it can do.

Testing - This project uses jest and enzyme for unit testing and storybook for visual and interation testing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Installs all dependencies and runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook`

Launches the storybook portal.<br>
Storybook(https://github.com/storybooks/storybook) is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

Use the knobs and actions panels to configure the React Components

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds and deploys the app to github hosted site (https://chrisrink.github.io/reddit-lite)

## Known Issues

1. This app uses the public version of reddit's apis and the apis get rate limited after a point. When this happens the infinate scrolling and updating will stop working.
2. The subreddit picker is not keyboard accessible

## RoadMap

1. Better handle Post content and using "post_hint" to identify type of post.
2. Add video support
3. Test out using the preformated html (selftext_html) instead of formatting different. This is more applicable for other content like images and videos. Where I could use high resolution formats instead of the thumbnail.
4. Post Page
5. Authentication
6. A webdriver integration testing

## Technologies Used

#### Reddit APIs

Official API (API https://www.reddit.com/dev/api/)

JSON Data Structures (https://github.com/reddit-archive/reddit/wiki/JSON)

#### UI Frameworks

Masonry View (https://bvaughn.github.io/react-virtualized/#/components/Masonry)

Redux (https://redux.js.org/)

React Router (https://reacttraining.com/react-router/)

Semantic UI (https://react.semantic-ui.com)

Font Awesome (https://fontawesome.com/how-to-use/on-the-web/using-with/react)

Moment (http://momentjs.com/)

#### Project Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Jest](https://jestjs.io/) unit tests with [Enzyme](https://airbnb.io/enzyme/) support.

[Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) - Once you go auto formatting, you never go back
