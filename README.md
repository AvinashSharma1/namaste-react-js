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
