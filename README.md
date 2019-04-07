### Tools used for this project

1. React.js for front end development.
2. Mobx and Mobx State Tree is used for state management;
3. styled-component for creating and apply theme as well as edit component's css style.
4. prettier for codying style regulation.
5. React Router for app navigation.

### System design decisions

1. Completely separate business logic and UI, all logic is in mobxCore. Doing so enhances the
   maintenance when the application grows larger and state shape getting more complicated.Because all business logic is handled by mobx, only in very rare case a UI component will have state
   , simple logic is handled using hooks, thus all react components are Stateless functional components. Doing so increases performance.

2. whenever the state changed, a snapshot of the current state is stored in localStorage as JSON string. When store object is recreated, the previous state snapshot is applied to the state if available.
   Doing so increase user experience, because the state of user interaction is kept even user refresh their page. For example, the user searched for the movie and navigate to the detail page to view more information.
   If he/ she accident refreshed the page, the movie he was viewing will still show the same info. He doesn't have to navigate back to the main page to search again.

3. There are three kinds of mobx models with in the state.

   1. Data model, such as MovieModel, defines data types.
   2. App models stores main state data and basic actions to update state.
   3. View models act as a middle part communicate between app models and user interface. It data and actions needed for certain pages

4. The app is build responsively to ensure the user experience consistent on web browser, tablets and major mobile phones.

5. theme is defined and provided by styled-components' theme provider. It is consumable among the entire app.
   doing so ensure style consistence.

6. small components such Typography is designed in a highly flexible and reusable manner. It has a default style. but the style can be easily overridden by
   simply passing in a customized style prop. It can be easily reused in other projects.

7. several unit test and React component test case are conducted. but the test coverage is not 100% at the moment due to the strict deadline.

### future improvements

1. most of the spacing css values are not defined in the theme, it is beneficial to work with designer to regulate spacing values to further improve style consistency
2. image size config value is hard coded. Will develop api helper functions to get configs from Movie DB api
3. error handling for all API calls.
4. Will discuss with designers to adjust UI styles for movie that has very long name. Not much details are provided from Figma.

### Installation

1. down load the package, or run `git clone https://github.com/Xiaochi-Li/the-movie-db.git`
1. run `yarn` to install packages.
1. run `yarn start` to run the-movie-db app on Local server

### Build

run `yarn build` to build the product.

### Testing

run `yarn test` to run all test case in watch mode.
If test can't the run in watch mode, one main reason can be something with watchman package.
Try `brew install watchman`.
