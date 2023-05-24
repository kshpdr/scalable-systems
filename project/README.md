# CO2 Footprint

## Introduction

This project is a web application that uses React for the frontend, Node.js and Express.js for the backend, and MySQL for the database.

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime that allows you to run JavaScript on your server.
- **Express.js**: A fast minimalist web framework for Node.js.
- **MySQL**: An relational database management system.
- **TypeScript**: A strict syntactical superset of JavaScript which adds static typing.
- **Vite**: A build tool that is designed to be faster and leaner, serving as a more modern alternative to webpack.

## Project Structure

The project is divided into two main directories:

- **client**: This directory contains the React application (frontend).
- **server**: This directory contains the Node.js and Express.js server (backend).

Each directory has its own `node_modules` directory and `package.json` file.

In the `client` directory, you'll find the React components in the `src` directory. The `App.tsx` file is the main component, and it imports and uses other components.

In the `server` directory, you'll find `index.ts` which is the entry point to the Express.js application.

## Setup

To get this project running on your local machine, follow these steps:

1. **Install Node.js**: Make sure you have Node.js and npm installed on your machine. You can download Node.js [here](https://nodejs.org/) and npm is included in the installation.

2. **Clone the Repository**: Clone this repository to your local machine.

3. **Install Dependencies**: Navigate to both the `client` and `server` directories in separate terminal windows and run `npm install` to install the dependencies for each.

4. **Start the Servers**: 

    - In the `server` directory, run `npm start` to start the Express.js server.
    - In the `client` directory, run `npm run dev` to start the React development server.

5. **Visit the App**: Open your web browser and visit `http://localhost:3001` to see the running server. For the frontend you are gonna see in the console which port is used and also can directly access it.