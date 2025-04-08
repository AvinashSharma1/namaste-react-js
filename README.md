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

-   Render phase -> Constructor -> Render
-   Commit phase -> componentDidMount

1. Constructor
2. Render
3. componentDidMount
