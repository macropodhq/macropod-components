# React Playground

This is a library of components that we use at BugHerd.

It includes a debug server so that changes made to the components are reflected instantly in your browser. This shortens the development cycle for new components and makes debugging existing components easier.

## Requirements

### [Node.js](http://nodejs.org/download/)

On OS X, we recommend installing via [Homebrew](https://brew.sh) using `brew install nodejs`.

To check you have it installed, you can run `node -v` and `npm -v`. Both should output a version number.

## Usage

To use the Playground packages in a Node.js-based project, you can do the following;

_**Note**: at this point, it is expected that you have [SSH access to GitHub configured](https://help.github.com/articles/generating-ssh-keys/) and access to the repository._

```sh
npm install --save-dev "git+ssh://git@github.com/BugHerd/react-playground.git#d8f3545"
```

_**Note**: You can substitute `d8f3545` in this command for the commit sha1 of any version of the project you want to use._

You can then import the modules into your project by name using `require`;

```javascript
var Avatar = require('react-playground/packages/avatar');
var Button = require('react-playground/packages/button');
```

## Running the Playground

To install the playground's dependencies, run `npm install` from the root directory of this repository.

If that completes without showing any errors, `npm start` will run the development server, and you can then access the playground in your browser at <http://localhost:3000>.

Port 3000 is shared with some other projects and services, so if you get an error about the port being taken, you can prepend `PORT=` and a different port number to the `npm start` command to change it. For example, `PORT=8080 npm start` will launch it on port 8000, meaning the playground would be accessible in your browser at <http://localhost:8080>.

## Contributing Packages

Creating a new package is easy, simply create a directory within `packages` with the name you want to use for your component, within it, you should create at least two files;

* `index.jsx`, the main, re-usable package code.
* `example.jsx`, an example to display from the development server, and to serve as an implementation suggestion.

`index.jsx` within the main `packages` directory will automatically find any new `example.jsx` files within the package and import them into the demo page.

If your package includes stylesheets, it is recommended that they are implemented as `[package-name].scss` within the package's directory.

The package name should be explicitly set as the `displayName` property on React components;

```javascript
module.exports = React.createClass({
  displayName: 'MyPackage'
});
```
