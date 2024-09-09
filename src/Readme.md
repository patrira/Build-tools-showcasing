
## Build Tool Showcase
A web application demonstrating the use of modern build tools, package managers, and best practices in web development.

## Project Overview

The Build Tool Showcase is a simple web application built to demonstrate various build tools, such as Webpack, Babel, and Sass. It showcases a list of popular build tools dynamically loaded from a JSON file, styled with Sass, and bundled with Webpack. The project implements ES6+ JavaScript features, Babel for browser compatibility, and Jest for unit testing, adhering to best practices in modern web development.

## Features 

Dynamic Data Loading: Displays a list of popular build tools (like Webpack, Gulp) from a JSON file.
Modern JavaScript (ES6+): Utilizes async/await, template literals, arrow functions, and modules.
Sass Styling: Clean and modular CSS with Sass variables, nesting, and partials.
Webpack: Efficient bundling for both development and production environments.
Babel: Ensures compatibility with older browsers by transpiling ES6+ code to ES5.
Hot Module Replacement: Instant updates in development without page reloads.
Code Splitting: Separate bundles for external libraries (like lodash) to improve performance.
Unit Testing: Thorough testing with Jest to ensure code correctness.
ESLint: Enforces code quality and best practices.

## Technologies Used

JavaScript (ES6+)
Sass (CSS Preprocessing)
Webpack (Module Bundler)
Babel (JavaScript Transpiler)
Jest (Unit Testing)
ESLint (Code Linting)

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

Node.js (version 14 or higher)
npm (comes with Node.js)

## Available NPM Scripts

npm start: Starts the local development server with hot-reloading and source maps enabled for debugging.

npm run build: Creates an optimized production build, including minified JavaScript and CSS, and generates cache-busting filenames.

npm run lint: Runs ESLint to enforce code quality and checks for syntax or style errors.

npm run test: Runs the Jest test suite, executing all unit tests and generating a code coverage report.

npm run test-watch: Runs Jest in watch mode, re-running tests when files change.

## Testing & Code Quality

Unit Testing: The project uses Jest for unit testing. Each function is tested to ensure correctness, and a code coverage report is generated after each test run.

Linting: ESLint ensures the code follows best practices and common style guidelines. Linting is integrated into the workflow to catch issues early in development.