# Omamori finder
Omamori (Japanese talisman) finder is an app where people can pin there Omamori on location.

# Project Description
The omamori finder is made for pinning omamori on a map of Japan. This app can only be used by people who create an account. After you create an account, you can log in and be able to see the map with other people's pins on it. By clicking on the pin, a pop-up will show up with a picture of the Omamori and the name of the shrine. In the header, you can find an upload button where you can upload your own Omamori. The app uses your location to create a pin, so this means that you have to upload from the shrine itself for it to work as it's meant to be. In the header, you can also find a sign-out link.

The primary language I used for this app is JavaScript.

For the backend, I used `Node.js` as the runtime environment and `Express.js` as the framework to build my server-side. For the database, I used `Postgres` and `Knex.js` as the query builder.
The frontend was created with `React`, a JavaScript library used to build reusable UI components. `HTML` and `CSS` were used for structuring and styling the application. The libraries I used to create the map component were Leaflet and React Leaflet.

The challenges I faced were deploying, passing props in React, creating handle functions in React, and getting the location from the user after logging in.

This project was created in a three-day challenge, so if I had more time, I would have done things differently. In the future, I would like to implement a blob to store pictures and location tags, so people can pin their omamori on the right shrine at any time.

# How to use the project
1. Clone the repository: git clone `https://github.com/Anissa3005/omamori-app.git`
2. Install the dependencies:
    Backend: `cd back-end && npm install`
    Frontend: `cd front-end && npm install`
3. Start the server:
    Backend: `cd back-end && npm start`
    Frontend: `cd front-end && npm start`
Access the application in your web browser at `http://localhost:3000`



 
