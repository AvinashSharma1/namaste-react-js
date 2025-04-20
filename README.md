# Namaste React

This repository contains the code for learning React.js from the ground up.

## Getting Started

## Parcel

-   Dev Build
-   Local server
-   HMR - Hot Module Replacement
-   File wathcing Alorithm - written in C++
-   Caching - Faster Builds
-   Image Optimiztion
-   Minification
-   Bundling
-   Compressing
-   Consistent Hashing
-   Code Splitting
-   Diffferential Bunding - support older browsers
-   Diagnostic
-   Error handling
-   HTTPS
-   Tree Shaking - remove unused code

## NPM Run command

-   npm run start / npm start
-   npm run build / npm build

## JSX

-   JSX like HTML or JSX Like XML

-   JSX (transpiled before it reaches the JS engine) => PARCEL -> Babel

-   JSX => (Babel) Transpiles to React.createElement => ReactElement -> JS Object => Render => HTML Element

-   If you have to give attributes in jsx, have to use camelCase.

## Vs code settings.json

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "prettier.singleQuote": true,
    "prettier.semi": false,
    "prettier.tabWidth": 2
}
```

## Each project can have its own Prettier configuration by creating a .prettierrc.js file in the root of the project.

```json
module.exports = {
    singleQuote: true,
    semi: false,
    tabWidth: 4,
}
```

## Component

-   Functional Component - a normal javascript function return piece of some react element or jsx code

## Props

-   prop is a object.
-   when need to pass dynamic data to in component for that use props.
-   Passing propes to the component same as function arguments.
-

## Config driven UI

## Food App

-   npm install -d parcel
-   npm i react@18 react-dom@18
-   for CORS issue resolve install chrome extension

## Two type of Export / Import

-   ### Default Export/Import
    -   export default component
    -   import component from "path"
-   ### Named Export/Import
    -   export const Component
    -   import {Component} from "path"

# React Hooks

(Normal JS utility function)

-   useState() -
    -   It's return 2 things, first is variable name, second is setVariableName
    -   whever states variable updated/changes react render component
    -   Don't create useStates variable inside if else condition, for loop, or function, always outside of if/else conditional statement and top of component.
    -
-   useEffect()
    -   it accepting 2 arugements, first is callback function and second is dependancy.
    -   this callback function call when, render cycle finish or component render done.
    -   If no dependancy array array => useEffect is called on every render.
    -   If dependacny array is empty = [] => useEffect is called only initial render (just once).
    -   If dependacny array is [stateVaribaleName] => It's only called everytime stateVariable is updated
-   useParams
    use for get resId (path)
-   ## useContext()

## Reconciliation Algorithm-> React Fiber

-   whenever state variable update , react trigres a reconciliation cycle (re-renders the component)

# React Router Dom

-   npm i react-router-dom -> it will latest and current is 7.4.1 so instead of this use
-   npm install react-router-dom@6
-   useRouteError hooks

# 2 types Routing in web

-   Client side routing
-   Server side routing

# Class Based Component

-   In Constructor only set props and super props as well state
-   class based component have render method
-   React components are based on ES6 classes, and when you create a class-based component, you're inheriting from `React.Component`. The `super` keyword is used to call the constructor of the parent class (in this case, `React.Component`) to initialize the component's state and lifecycle methods.
-   Calling `super(props)` ensures that the props are properly passed to the `React.Component` constructor. If you don’t pass `props` to `super()`, the `this.props` will be undefined in your component. This can lead to bugs when trying to access the `props` in the component.

```
class MyComponent extends React.Component {
  constructor(props) {
    // Required to initialize 'this.props'
    super(props);
    this.state = {
      // Component state initialization
    };
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

```

-   `super(props)` allows the component to properly inherit from `React.Component` and ensures that the props are initialized correctly.
-   If you omit `super(props)`, you won't be able to access `this.props` in your component.
-   **First constructor is called than render method**

# React Class Based Component Lifecycle

-   First Construcor => Render => componentDidMount
-   First Parent Construcor => Parent Render => (if Child => Child constructor => Child Render => ChildComponentDidMount ) => Parnet componentDidMount
-   componentDidMount - is use for API Calls.

```
-   Parent constructor
-   Parent render

  -   First constructor
  -   First render

  -   Second constructor
  -   Second render

  -   First componentDidMount
  -   Second componentDidMount

-   Parent componentDidMount
```

-   Render phase -> [Mounting -> Constructor -> Render]
-   Commit phase -> [ Mounting -> componentDidMount]
-   Render phase - > [Updating -> (new props | setState | forceUpdate) -> Render]
-   Commit phase -> [Updating -> componentDidUpdate ]
-   Render phase -> [Unmounting -> nothing]
-   Commit phase -> [Unmounting -> componentWillUnmount]

1. Constructor
2. Render
3. componentDidMount
4. componentDidUpdate
5. componentWillUnmount

# Terms of lazy loading

-   Dynamic Bundlings
-   chunking
-   code spliting
-   lazy loading
-   on demand loading
-   dynamic importing

# Optimization and Performance

-   custome hooks
-   Lazy -
-   Suspense - is component

## Lazy Loading

-   `const SomeComponent = lazy(load)`
-   lazy(load) - Call `lazy` outside your components to declare a lazy-loaded React component:

    ```
    import { lazy } from 'react';
    const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

    <Suspense fallback={<Loading />}>
      <h2>Preview</h2>
      <MarkdownPreview />
    </Suspense>
    ```

    -   #### Parameters
        -   `load`: A function that returns a `Promise` or another thenable (a Promise-like object with a `then` method). React will not call `load` until the first time you attempt to render the returned component. After React first calls `load`, it will wait for it to resolve, and then render the resolved value’s `.default` as a React component. Both the returned Promise and the Promise’s resolved value will be cached, so React will not call `load` more than once. If the Promise rejects, React will `throw` the rejection reason for the nearest Error Boundary to handle.
    -   ### Returns
        -   `lazy` returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use `<Suspense>` to display a loading indicator while it’s loading.
    -   load function
        -   **Parameters** - load receives no parameters.

## CSS Design

-   Normal CSS
-   SASS and SCSS design
-   syled component
-   Library framework - tailwindcss, Material UI, Bootstrap, chakara

# Higher Order Component

-   HOC fucntion is it takes component inside and return components

# React Developer tools

-   Components
-   Profiler - Profiling Components with the DevTools Profiler

# Controll component & Uncontroll component

# Sharing State Between Components

-   Lifting state

# prop drilling

# react context

-   global data can access anywhere in the component
-   so keep data in centeral palce
-   createContext
-   useContext - hooks
-   in Class based components
    ```<UserContext.Consumer>
        {(data) => console.log(data)}
      </UserContext.Consumer>
    ```
    ```
    {/*Default will take default username*/}
    <UserContext.Provider value={{ loggedInuser: "anonymous" }}>
      <div className="App">
         {/*App component will take anonymous username*/}
        <UserContext.Provider value={{ loggedInuser: "anonymous2" }}>
         {/*App component will take anonymous2 username*/}
            <Header />
        </UserContext.Provider>
        <Body />
      </div>
    </UserContext.Provider>
    ```

## Context

-   userContextProvider

# Redux

## Redux Key Terminology and Concepts

-   **Redux**:  
    A predictable state management library for JavaScript apps, often used with React to manage application state in a single store.

-   **React-Redux**:  
    Official bindings for using Redux with React. It provides hooks and components to connect React components to the Redux store.

-   **Redux Toolkit (RTK)**:  
    The official, recommended way to write Redux logic. It simplifies Redux setup and reduces boilerplate by providing utilities for creating slices, reducers, and actions.

### Core Redux Concepts

-   **Slice**:  
    A slice is a collection of Redux reducer logic and actions for a single feature of the app, created using `createSlice` from Redux Toolkit. Each slice manages its own part of the Redux state.

-   **Dispatch**:  
    The method used to send actions to the Redux store. When you dispatch an action, Redux runs the reducers to update the state.

-   **Action**:  
    An object that describes a change or event in the application. Actions have a `type` property and may include additional data (payload).

-   **Reducer**:  
    A pure function that takes the current state and an action, and returns a new state. Reducers specify how the application's state changes in response to actions.

#### Work flow

-   **for write data**

    -   click to add to cart button -> Dispatch (action ) -> reducer -> update slice of redux store

-   **for read data**

    -   Selector - read data from slice using subscribe component using useSelector hook
    -   subscribing

### Redux Toolkit seup steps

-   Install @reduxjs/toolkit and react-redux
-   Build our store
-   Connect our store our app
-   create slice (cartSlice)
-   dispatch(action)
-   Selector

#### Some key terms

-   **createSlice({ name, initialState, reducers })**:  
     A utility from Redux Toolkit that simplifies the process of creating a Redux slice. It automatically generates action creators and action types based on the reducers you define. Each slice manages its own part of the Redux state and contains the reducer logic and actions for a specific feature.

    -   **name**:  
        A string that defines the name of the slice. This name is used as a prefix for the generated action types and helps identify the slice in the Redux store.

    -   **initialState**:  
        The initial state object for the slice. It defines the default values for the state managed by this slice (e.g., an empty `items` array for a cart).

    -   **reducers**:  
        An object containing reducer functions that specify how the slice's state should change in response to actions. Each key becomes an action creator and action type. For example, `addItem`, `removeItem`, and `clearCart` update the cart's state accordingly.

-   **configureStore({ reducer, middleware, devTools, preloadedState })**:  
    Simplifies store setup with sensible defaults.

    -   `reducer`: Root reducer or an object of slice reducers.
    -   `middleware`: (Optional) Array or function to customize middleware.
    -   `devTools`: (Optional) Enable/disable Redux DevTools.
    -   `preloadedState`: (Optional) Initial state.

-   **Selector**:  
    A function that extracts specific data from the Redux store state. Selectors help you efficiently read only the data you need from the store, improving performance and code clarity.

-   **Provider**:  
    A React component from `react-redux` that wraps your app and makes the Redux store available to all nested components. It enables components to access the store using hooks like `useSelector` and `useDispatch`.

    -   Provider store - `<Provider store={appStore}><app></Provider>`

-   **useSelector**:  
    A React-Redux hook that allows you to access and subscribe to specific parts of the Redux store state in your functional components. It re-renders the component when the selected state changes.

    -   example 1 `const cartItems = useSelector((store) => store.cart.items)`
    -   exmaple 2 **Show cart lenth in heading component**
        `const cart = useSelector((store) => store.cart.items); const cartItems = cart.length`

-   **useDispatch**:  
    A React-Redux hook that gives you access to the `dispatch` function, allowing you to send actions to the Redux store from your components.

    -   example - `const dispatch = useDispatch(); dispatch(addItem(item))`

---

**Summary:**  
These concepts are essential for connecting React components to the Redux store. `Provider` sets up the store context, `useSelector` reads state, `useDispatch` sends actions, and selectors help efficiently extract data. Mastery of these shows you can manage and interact with global state in modern React apps.

### Redux DevTools

## immer

# types of testing ()

-   Unit testing
-   Integration testing
-   End to end E2E testing

### Test Library

-   React Testing Library
-   React testing Library is on top od DOM Testing Library
-

## Setting up testing in our app

-   Install React Testing Library
-   Install Jest
-   Intall Babel dependencies
-   Configure Babel
-   Configure parcel config file to disable default babel transpilation
-   Jest configure
-   Install jsdom - If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately. npm install --save-dev jest-environment-jsdom
-   Install - npm install -D @babel/preset-react - to make JSX work in test cases
-   Include @babel/preset-react inside babel configuration
-   Install @testing-library/jest-dom

```
npm install --save-dev @testing-library/react @testing-library/dom
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Configure Babel - babel.config.js

```
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
}
```

-   parcel configure - .parcelrc

    ```
    {
    "extends": "@parcel/config-default",
    "transformers": {
      "*.{js,mjs,jsx,cjs,ts,tsx}": [
        "@parcel/transformer-js",
        "@parcel/transformer-react-refresh-wrap"
      ]
    }
    }
    ```

    -   npx jest --init
    -   npm install --save-dev jest-environment-jsdom
    -   npm i -D @babel/preset-react
    -   npm i -D @testing-library/jest-dom
    -   render and screen laod from @testing-library/react

    # Test case run

    -   npx jest --clearCache
    -   npx jest --config=jest.config.js --no-cache
    -   npm run test

### Key Terminology Used

-   **describe**: Groups related test cases for better organization.
-   **test / it**: Defines individual test cases.
-   **render**: Renders the React component into a virtual DOM for testing.
-   **screen**: Provides access to queries for selecting elements.
-   **getByRole / getAllByRole**: Selects elements by their ARIA role (e.g., 'heading', 'textbox', 'button').
-   **expect**: Used for assertions in Jest.
-   **toBeInTheDocument**: Checks if an element exists in the DOM.
-   **toHaveTextContent**: Checks if an element contains specific text.
-   **toHaveLength**: Checks the number of elements in an array (e.g., number of textboxes).
