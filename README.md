# Property-Quester

1. Install nextjs
   1. npx create-next-app@latest
2. Install material ui
   1. npm install @material-ui/core
3. Setup the stylesheets
   1. create \_document.js file inside pages folder
   2. \_app.js edited
4. Create Layout and material ui styles
   1. create styles.js inside util folder created root of the project
   2. create Layout.js inside components folder created root of the project
5. Create data
   1. create data.js inside utils folder
   2. install bcryptjs
6. Connect with mongodb
   1. install mongoose
   2. create User.js inside models folder created at the root of the project
   3. create Property.js inside models folder created at the root of the project
7. Connect project with mongodb
   1. create database inside mongodb online
   2. create the username and get the password
   3. connect the mongodb atlas with mongodb compass
   4. create db.js inside utils folder
8. Seed the Dummy Data
   1. create the .env file and set the local variable inside it
   2. create the seed.js inside pages/api folder
   3. create images folder inside public and put all the images for seeding
   4. install next-connect
   5. restart the server
   6. run the http://localhost:3000/api/seed in browser to seed
9. Install Carousel
   1. npm i react-material-ui-carousel
