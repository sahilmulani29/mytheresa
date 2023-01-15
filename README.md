# Getting started with application

1. Once cloned the main repository, Hit the npm install command (It will download all dependency)

2. To run the application hit -> npm start

3. Runs the app in the development mode.
Open http://localhost:9500 to view it in the browser.

4. To Run Test cases hit -> npm test

5. To Check the Test coverage Hit -> npm run test -- --coverage --watchAll=false

6. Builds the app for production to the build folder -> npm run build

7. Start liniting with command -> npm run lint

*** Improvement ***
Below are points which we can still impove

1. Design and Animation  (CSS/SCSS)
i. Due to lack of time, did not focused on SCSS and responsive design, but surely it we can make responsive design, icons in the header section.
ii. Right use of SCSS -> Creating variables and Mixin which will improve quality of SCSS
iii. Layout for wish list and movie detail page.
iv. More attractive fonts
v. UI experience

2. Right API integration for movies based on categories

3. We can split the SCSS bundle for different components 

4. Centralized store
i. We can convert Context to Redux state & Import Saga

5. Error Handling
i. Currently it showing simple text if API fail, We can add layout for same.
ii. We can also add error boundary

6. Test Cases
i. We can create snapshots of the components & write more cases for context

9. We can add Accessibility Identification for Screen reading tools


# Configuration steps for this Project

1. npm init -> to create a package.json file inside the folder

2. npm i --save-dev webpack webpack-cli webpack-dev-server -> To add all webpack dependencies

3. npm i --save-dev babel-loader @babel/preset-env @babel/core 
@babel/plugin-transform-runtime 
@babel/preset-react 
@babel/eslint-parser 
@babel/runtime
@babel/cli
Installed the Babel dependencies

4. npm i react react-dom -> Install react and react-dom

5. Created index.html and provided root id to load application

6. Created index.js file to include react app 

7. Created Root file i.e. app.js for react app

8. Web Pack configured by webpack.config.js

9. Babel configured .babelrc

10. installed HtmlWebpackPlugin to link index.html and build file.


**************** decisions and shortcuts ****************************

# *** FLow & Logic ***

1. As soon as app components get loaded, Called the fetchHook which custom hook to get the categories and movie items.
2. Created context to store the data from API, Same context will also hold loading state to show spinner and wishlist API list
3. Refer Router component to navigate home, moviedetails & wish list section.
4. Wrapped all components under Container component which has header and Spinner component
5. Created Carousel component to show the movie list
6. Once clicked on movie image it will redirect to movie details component and the it has add to wish list button
7. Created Wishlist component to show wish list items.

*** API Data & Custom hooks ***

1. Used Custom hook to call the API, As soon as App component will get load it will call the API & request component will be endpoint for this.

*** Centralized Data Structure ***

1. Used Context to Store & Organized data at central level
2. Reason behind using React Context was, We'd only single Data set & Two main component otherwise would have been gone for React Saga and React Redux
3. Wrapped App component into context to pass data all over the application

*** Constant Module ***

1. It includes key constant which has been used in the application and API points with types.
2. Created constant values for categories

*** Utils Module ***

1. Organized common code in util file.

*** Test Module ***

1. Mocked the API and set the data to context thorugh mock.js

*** Other Packages ***
Below are third party packages are used.

1. ES lint - for linting code
2. Jest - to ececute test cased
