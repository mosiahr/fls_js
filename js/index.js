import hljs  from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/es/highlight.min.js';
import javascript from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/es/languages/javascript.min.js';
// import javascript from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/javascript.min.js';
hljs.registerLanguage('javascript', javascript);


import App from "./App.js"
import { routes } from "./routes/routes.conf.js"
import data from "../data.json" with { type: "json" }
import Data from "./data/data.js"

// export const objD = new Data(data).getObjectData()
// console.log(objD);

const app = new App(document.getElementById("root"), routes, data)

app.initRoute()
app.initLoadPage()
// app.initClick()
// export const objData = data.getObjectData()

// Explanation: Let’s break down what each folder and file is used for.
// /assets: This folder holds all the static files for your project, like images, logos, fonts, and favicons.
// /components: This is where you store reusable UI elements like buttons, forms, cards, and navigation bars. Think of it as a collection of smaller building blocks for your app.
// /views: This folder contains the main pages of your application, like the Home, About, and Contact pages. These are the larger screens users see.
// /services: Here, you write code to handle interactions with external APIs, like fetching data from a server or sending form submissions.
// /utils: This folder is for helper functions or snippets that can be reused throughout your project, like formatting text or validating data.
// /hooks: Store your custom hooks here—these are reusable pieces of logic that can be shared between components. For example, a hook to handle API calls or manage form inputs.
// /store: If your app uses state management tools like Redux, this folder contains the files for managing global state and making variables and functions accessible throughout the app.
// App.js: The main component of your application. It acts as the central hub that connects all your components and pages.
// index.js: The entry point of your React app. It initializes the app and mounts it to the root element in your HTML file.
// index.css: The global stylesheet for your app. Any styles you write here will apply across the entire project.
export { hljs }