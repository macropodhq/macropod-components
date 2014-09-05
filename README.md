# React Playground

This is a staging area and will be a library of components that we use at
BugHerd. It's put together so that changes made to the components contained
therein are reflected instantly in your browser. This shortens the development
cycle for new components and makes debugging existing components easier.

## Installation

First off, make sure you have node installed. This is easy on MacOS X; just
use homebrew and do `brew install nodejs`. Ensure that it's working by running
`node -v` and `npm -v`. Both of these commands should output a version number.
If you get an error, node isn't isntalled properly and you should cry deeply
until someone takes pity on you and your poor life decisions.

Now that you've got node working, and you're all pumped up on endorphins from
the crying, you're going to want to run `npm install` in the directory you
cloned this repository into.

If that finished correctly, you should be able to run `npm start` and open
[localhost:3000](http://localhost:3000/) in your browser. If you already have
something else running on port 3000 (as this is the default rails development
port), try doing `PORT=8080 npm start` (or any other port you like). You'll
have to amend the port in the URL you use in your browser to match the one you
specified.

## Usage

TODO
