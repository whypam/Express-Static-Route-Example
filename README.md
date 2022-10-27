# Project: Serving Images and Videos on Express Server

In this project, you'll build a gallery to showcase images and videos that may be similar to what you've done before. But this time you'll run an Express server to serve the image gallery that means you can provide an URL to your friends, and they can browse the gallery on their computers or smartphones.

## Your Task

1. Install NPM and Node.
2. Install your favourite code editor.
3. Set up an Express server.
4. Configure the server to serve static files (images and videos in this project).
5. Design and build a webpage with HTML and CSS for the gallery.
6. Use JavaScript to make the gallery interactive.

## Starter Code

This repo ([Express-Static-Route-Starter](https://github.com/whypam/Express-Static-Route-Starter.git)) provides a basic Express setup for you to start with. `package.json` contains metadata about this project is required before publishing to npm, and also defines functional attributes of the project that npm uses to install dependencies, run scripts, and identify the entry point to the package. As you see in `package.json`, the entry point for this project is `index.js` defined to `main` attribute. You can have any name you want for the entry point, just make sure the file name matches with it.

## Steps

### Install NPM and Node

1. [Go to Nodejs download site](https://nodejs.org/en/download/).
2. Make sure select `LTS` version.
3. Download the installer package for you system.
4. Follow the instructions to install the Nodejs

#### Vertify Successful Installation

1. Open a `Terminal`.
2. Run `npm -v`, you should see a version #, e.g. 8.19.2
3. Run `node -v`, you should see a version #, e.g. v16.18.0

### Install Express and Other NPM Packages

1. Open a `Terminal` and clone `Express-Static-Route-Starter` repo from [GitHub](https://github.com/whypam/Express-Static-Route-Starter.git).
2. Navigate to the root folder of the repo where you should see `package.json`.
3. Run `npm install`, then you'll see `node_modules` folder and `package-lock.json` created.

### Install Code Editor

You may choose any code editor you like. [Visual Studio Code](https://code.visualstudio.com/download) is one of the popular ones.

### Set up Express Static Routes

1. Open `Express-Static-Route-Starter` repo in the editor you installed.
2. You'll see hints in `index.js` for setting up static routes to serve index.html, images and videos on Express. `app` is defined for you to use Express methods.
3. You'll need these Express methods to set up routes and a port to listen to:

- `app.use()`
- `app.listen()`

#### Verfity Port Listener

1. Navigate to root folder of the repo where you should see `package.json`.
2. Run `npm start`.
3. You should see `The server is running on port [the port you set to listen to]`.
4. Open a browser and enter `localhost:[the port you set to listen to]`.
5. Then you should see a blank page if you set up the Express static routes correctly.

### Choose Content

1. Gather a few images and videos for your gallery.
2. You may need to create a folder for images and another one for videos if you definded separate static routes and folders for serving images and videos in `index.js`.
3. Make sure the folder names match with Express static route setting in `index.js`.

### Add the content as HTML elements

1. Add the content you picked above as plain HTML elements in `index.html`.
2. Use external CSS (`style.css`) to style `index.html`.
3. Make sure `index.html` is placed in the root folder you defined in `index.js` (Notes: This root folder is the static route folder defined in `index.js` for Express to serve `index.html`. It could be different the root folder of the repo.)
4. Make sure `index.html` references to `style.css` correcly.
5. For each of the items, add text content labeling the items, like titles, tags, and descriptions. You will probably find it helpful to group the item with the text in an enclosing `<div>` or `<section>`.
6. For videos, you'll need to use `<iframe>`
7. Add a site title, a page description, and any other text content you want to include on the page.

### Add JavaScript for User Interaction

Be creative and apply what you learned about JavaScript to make the page interactive.

1. You may define `id` or `class` to HTML elements and reference them using `document.querySelector("")`.
2. Add an listener for click events to an element with `element.addEventListener('click', () => {})`
3. Then you can modify the elements style and/or the elements content in the arrow function (`() => {}` - the 2nd parameter of `addEventListener` method).

## Expected Results

This project focuses on serving images and videos on Express. After you finish, restart your project:

- Run `ctrl c` to kill the server if it's running.
- Run `npm start`.
- Open a browser and enter `localhost:[the port you set to listen to]`.
- You should see `index.html`.
- Look up your computer WiFi IP from network configuration.
- On a smarthphone or another computer, browse to the WiFi IP with the port #, your `index.html ` should pop up.
- Make sure other devices share the same WiFi.
- If your computer is set up for a static IP, other devices should be able to browse your site from anywhere with Internet connection.

- An [example of Express Static Route](https://github.com/whypam/Express-Static-Route-Example.git) from GitHub.

## Bonus Task

We only look at Express static route. Express provides a routing system that can do many things. Research on it and see whatelse you can enhance your project to serve better for your audience.

[Express Routing](https://expressjs.com/en/guide/routing.html)
