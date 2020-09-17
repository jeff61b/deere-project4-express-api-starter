## Project 4 Trivia Database Backend Application

## Application Description

This application is the back-end interface to the Trivia Database. It is used by the front-end application to enable a user to create trivia questions along with 4 possible answers, including a field to indicate the correct answer. It also enables the user to assign each trivia question to a specific trivia category.

This app serves JSON data only. It is the backend application that will be used to interface between the front end app and the database to view, add, update or delete data in the triva database.

The React app will interface between the user and this back end application.

This application uses an express node.js backend framework to interface with the database.

During development, it was necessary to use Postman to test that the endpoints are working before writing the React code.

### User Stories

1. The application needs to give users access to the Trivia database which can be used in a multiple choice trivia game.
2. The application needs to enable the user to view a list of trivia questions.
3. While viewing the list of trivia questions, the user should be able to click on a question to view all the possible answers regarding that specific trivia question.
4. While viewing the trivia question, the user should have the option to edit and update the question.
5. Users also need to be able to add a new trivia question.
6. All trivia questions can be assigned to a trivia category.
7. The user should have the ability to delete a specified trivia question.
8. User needs to be able to see the list of Categories to which the trivia questions can be assigned.

### Technical Requirements

1. This application uses React to create the components for the frontend to be used by the users to interface with the backend application.
2. The backend application uses an express node.js backend framework and RESTful routes to interface with the database.
3. Both applications work together as a full stack application to enable the full range of activities for the user.
4. The trivia data is stored on a relational database.
5. The programs are primarily written in Javascript using XML and CSS code to create the views for the user.
6. It is deployed on Heroku.
7. There is a many-to-one relationship between the trivia questions and the categories.
8. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**The application is hosted on https://dashboard.heroku.com/apps/trivia-react-frontend and saved to https://github.com/jeff61b/Project4**

More detailed information is located in the READme file of the frontend application.

Note - this app has no views and each endpoint is prefaced with `/api`.

```js
// server.js
app.use("/api/auth", require("./controllers/authController.js"));
app.use("/api/users", require("./controllers/usersController.js"));
app.use("/api/trivia", require("./controllers/triviaController.js"));
app.use("/api/category", require("./controllers/categoryController.js"));
```

## To Deploy

- [Heroku Node Express Deployment](https://git.generalassemb.ly/jdr-0622/node-express-heroku-deployment)
- [Heroku React Deployment](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes)
- [Project 4 Starter Code Heroku Deployment Link](https://deere-project4-express.herokuapp.com/)

  ![](https://i.imgur.com/hy2jymA.png)

<br>

## Additional Resources

- [Sequelize Docs](https://sequelize.org/master/)
- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)
