# E-Commerce-Back-End

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## DESCRIPTION

The back end for an e-commerce site that creates routes for viewing, creating, updating and deleting JSON data of e-tail products, categories, and tags.

The application configures a Express.js API to use Sequelize to interact with a MySQL database.
## TABLE OF CONTENTS

- [DESCRIPTION](#description)
- [DEVELOPMENT CRITERIA](#development-criteria)
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [TESTS](#tests)
- [TECHNOLOGIES USED](#technologies-used)
- [LINKS](#links)
- [QUESTIONS](#questions)

## DEVELOPMENT CRITERIA

The following acceptance criteria was used to guide the development of this project:

- [x] AS A manager at an internet retail company
- [x] I WANT a back end for my e-commerce website that uses the latest technologies
- [x] SO THAT my company can compete with other e-commerce companies

- [x] GIVEN a functional Express.js API
- [x] WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- [x] THEN I am able to connect to a database using Sequelize
- [x] WHEN I enter schema and seed commands
- [x] THEN a development database is created and is seeded with test data
- [x] WHEN I enter the command to invoke the application
- [x] THEN my server is started and the Sequelize models are synced to the MySQL database
- [x] WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- [x] THEN the data for each of these routes is displayed in a formatted JSON
- [x] WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- [x] THEN I am able to successfully create, update, and delete data in my database
## INSTALLATION

1. Fork the [repository](https://github.com/merewall/E-Commerce-Back-end) from [GitHub](https://github.com/) to your profile.
2. Clone the repository down to your local machine in command-line using: `git clone`.
3. Node.js is required to run this application. Click [here](#installing-nodejs) for instructions on installing Node.js.
4. Install the required dependices to your cloned directory in command-line using: `npm install`
    * Or install the packages individually...
        * Install [express](https://www.npmjs.com/package/express) to your cloned directory in command-line using: `npm install express`.
        * Install [mysql2](https://www.npmjs.com/package/mysql2) to your cloned directory in command-line using: `npm install --save mysql2`
        * Install [dotenv](https://www.npmjs.com/package/dotenv) to your cloned directory in command-line using: `npm install dotenv`
        * Install [sequelize](https://www.npmjs.com/package/sequelize) to your cloned directory in command-line using: `npm install sequelize`
        * Install [nodemon](https://www.npmjs.com/package/nodemon) to your cloned directory in command-line using: `npm install --save-dev nodemon`
    ###### Installing Nodejs

    1. Check if you already have Node.js in command-line by typing `node`.
    2. If you have Node.js on  your machine, a message similar to `Welcome to Node.js` will appear.
    3. If you do not have Node.js, an error message will appear and you need to download it.
    4. To download Node.js, click [here](https://nodejs.org/en/download/).
    5. After download and installation is complete, restart your command-line terminal and redo step 1 to confirm a successful installation.
    6. After Node.js is on your local machine, return to the [installation](#installation) instructions for this project's application above.

## USAGE

1. Update the .env file with your MySQL username and MySQL password.
2. Navigate to the directory of the application in your terminal using `cd`, if not already there.
3. If you haven't already, be sure you followed all [installation](#installation) instructions to install node, express, dotenv, nodemon, sequelize and mysql2 dependencies.
4. Create your database by running the schema.sql file (right-clicking on the schema file and selecting Run MySQL Query).
5. Seed your database in CLI using: `npm run seed`.
6. Initialize the application in CLI using: `npm start`.
7. Use Postmon or equivalent to run GET, POST, PUT, and DELETE requests for the product, category, and tag routes.

_Creating the database using the schema and MySQL shell:_

![Database creation](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/db-create.PNG)

_Seeding the database._

![Seeding the database command](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/seed-command.PNG)

![CLI response to seeding](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/tables-seeded.PNG)

_Initializing the application in the CLI._

![Initializing the application](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/start-server.PNG)

_GET request for all products & response._  

![GET request for all products](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/get-all-products.PNG)

![JSON data response for all products](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/all-products.PNG)

_GET request for product by id & response._  

![GET request for one product by id](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/get-product-by-id.PNG)

![JSON response for one product by id](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/product-by-id.PNG)

_POST request to create a product & response._  

![POST request to create a new product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/post-product.PNG)

![JSON body for POST request to create a new product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/post-body-product.PNG)

![JSON response for a new product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/post-response.PNG)

![GET request to view new product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/get-afterwards.PNG)

![JSON response of new product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/new-product.PNG)

_PUT request to update a product & response._  

![PUT request to update an existing product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/product-update.PNG)

![JSON body for PUT request to update a product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/put-body-product.PNG)

![JSON response for an update to product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/put-response.PNG)

![GET request to view updated product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/get-afterwards.PNG)

![JSON response of updated product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/updated-product.PNG)

_DELETE request to delete a product & response._  

![DELETE request to delete an existing product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/delete-product.PNG)

![GET request to view updated product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/get-afterwards.PNG)

![JSON response of updated product](https://github.com/merewall/E-Commerce-Back-End/blob/main/assets/product-deleted.PNG)

## LICENSE

This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).
## CONTRIBUTING

If you'd like to contribute to the project, please create a pull request on a new branch of the [repository](https://github.com/merewall/E-Commerce-Back-End) for review.
## TESTS

No current tests for this application.
## TECHNOLOGIES USED

- [X] JavaScript
- [X] [Node.js](https://nodejs.org/en/)
- [X] [mysql2](https://www.npmjs.com/package/mysql2)
- [X] [express](https://www.npmjs.com/package/express)
- [X] [dotenv](https://www.npmjs.com/package/dotenv)
- [X] [nodemon](https://www.npmjs.com/package/nodemon)
- [X] [sequelize](https://www.npmjs.com/package/sequelize)
## LINKS

* The [repository](https://github.com/merewall/E-Commerce-Back-End) for this application.
* A [demo video](https://drive.google.com/file/d/1D6vVmJrsDx9k0M9eUXegnXmzFvD7QQej/view) on how to use the application.

## QUESTIONS

For any questions, please check out my GitHub profile or send me an email:
* GitHub: [merewall](https://github.com/merewall)
* Email: mlwall@alumni.princeton.edu
