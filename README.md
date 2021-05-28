# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Objectives

1. Pull together all the front-end skills, technologies and best practices you have learnt.
2. Make asynchronous API calls to your own server.
3. Use HTTP request types to interact with your backend, and HTTP response codes to update your UI accordingly.

## What to do

Follow the [planning process](https://notes.northcoders.com/courses/js-front-end/planning-react-apps) for building a React app. You should create wire-frames for each route as well planning the component tree with associated state. Here are some project-specific things to bear in mind:

1. Have a look at your API endpoints. Think about what data you have available, and how you will structure your application. What routes will your application have? What articles will you choose to display on the main page?
2. Think how you will isolate the concerns of your project - the structure of your components, the sourcing of your data, the styling.
3. What sort of routing will your App use? What sort of specificity do you think you will need? Remember, your urls don't have to directly correspond to your api endpoints, but they will provide some guidance.
4. Think about what data each component will need. Where will it come from? When should components find their own data and when should they load it themselves? Focus on the simplest functionality first.
5. Consider more complex functionality: how do you want to allow changes to your database? Think about how you will attribute users to posted comments etc. How will you know what comments/articles a user should be allowed to delete? How about sorting data, or paginating responses? A good starting point would be to pick a single user and assuming that all new articles and comments are being posted by that user.
6. How are you going to make this a fluid and engaging experience for users, so they want to come back for more?

## User Stories

You should implement the following functionality in your website. Check the lecture calendar to see when any new topics will be covered, but feel free to have a go at them beforehand as well!

**Before moving onto the 'if time' and 'extra credit' sections of this readme, follow go to the Deployment section bellow, and then submit your code for review! Please send a link to both your GitHub project repository and your hosted website to your reviewer** 😀

**As a user, I should be able to...**

1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. vote on an article and immediately see the change.
6. post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
7. sort articles by:
   - date created
   - comment_count
   - votes

**Error-handling: As a user, I should...**

8. see an appropriate error if I go on a non-existent path / a path for a non-existent article / topic.
9. not be allowed to post a comment if I have not filled in all of the form boxes.

**As a hiring partner, I should be able to...**

10. use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
11. follow the readme instructions to easily run the project locally.
12. find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)
13. find a link to the back-end repository of the project in the readme.
14. find a link to the hosted version of the back-end project in the readme.

## _If time, and if you have implemented it in your back-end API..._

**As a user, I should be able to...**

15. delete my own comments (as a default logged in user. e.g. 'jessjelly').
16. vote on a comment and immediately see the change.
17. navigate over pages of articles (e.g. using pagination or infinite scroll).
18. navigate over pages of comments (e.g. using pagination or infinite scroll).
19. view a list of all articles written by any specific user.
20. post a new article to an existing topic.
21. delete my own articles.

## Deployment

There are many ways to deploy a React application. The `create-react-app` docs go into detail on some of the options: https://facebook.github.io/create-react-app/docs/deployment

We recommend Netlify. Check out the deployment notes for a step-by-step guide!

## Extra credit - what else do you think would be good for a user to be able to do, here are a couple of suggestions:

1. As a user, I should be able to see which users have been most active adding articles and comments
2. As a user, I should be able to sort the users by how popular they are based on an aggregation of their article and comment vote counts

## Important

This sprint is among the ones we'll ask you to complete in order to put you forward for jobs. Put a little bit of love into it! :) <3

# My README

# Shmeddit - Reddit Style Message Board

Live app: https://shmeddit.netlify.app/
Hosted back-end: https://rweardens-nc-news.herokuapp.com/api

Front-end repo: https://github.com/rwearden/nc-news
Back-end repo: https://github.com/rwearden/be-nc-news

## General Information

This is a front-end CRUD application built with JSX, Node.js, React and Material UI.

It functions as a message board where users can read, vote and comment on articles.

## Running the App locally

1. Use the following URL to clone the project (https://github.com/rwearden/nc-news)
2. Make a directory in your terminal using command `mkdir`
3. Enter the directory and clone using command `git clone https://github.com/rwearden/be-nc-news`
4. Run command `npm install`
5. Run command `npm start`

## Minimum Requirements

To run this project you will need: - Node.js version v15.12.0
