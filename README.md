# HTTP / AJAX II React Module Project: Movie CRUD

This module explored HTTP methods, REST interfaces, CRUD apps and using put and delete to allow editing and deleting functionality. We also dug into how to pass props to Route connected components and using URL params to get values from an api. In this project, you will practice each of these skills by implement various pieces of functionality in a movie database CRUD app.

## Objectives
- Understand how to use the post, put and delete HTTP methods to interact with server data.
- Understand how to sync server data with an applications internal state.
- Understand how to pass values into a Route component to allow for the updating of state.

## Introduction
CRUD applications are the foundation of most web applications. Being able to manage creating, edit and deleting data from an external source is as key a skill as it gets. In this project, you will complete the code nessisary to allow all of these fundmental actions.

![Movie DB Example](project-goals.gif)

***Make sure to complete your tasks one at a time and complete test each task before proceeding forward.***

## Instructions
### Task 1: Project Set Up
* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-HTTP`
* [ ] Download server dependencies by running `npm install`
* [ ] Run the local web server by running `node server.js`
* [ ] Open a new terminal window and cd into the client code `cd client`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`

### Task 2: Project Requirements
#### Editing a Movie
> *Let's start by walking through the process of adding the routing, component and service calls need for resource updating*

* [ ] First, we need to be able to navigate to the edit movie component. In App.js, add in the `<EditMovieForm> `component to the supplied edit route.

* [ ] Next, we need to grab the id being passed into the component through the url. Use the `useParams` hook to get the id value.

* [ ] We need to be able to load in the current movie's attributes into our local form state. When `EditMovieForm` mount, retrieve our current id's movie from the api and save the data returned to local state.

* [ ] At this point, nothing happens when the edit form is submitted. Add in the api call needed to update the server with our updated movie data.

* [ ] Don't forget to make sure that your server data and your local state are in sync! Make any changes the edit route needed to give the edit form access to App's `setMovies` method.

* [ ] Now that we have access to `setMovies`, made sure the updated list of movies is saved to our global state.

* [ ] Redirect the user to the currently edited movie's individual info page.

#### Deleting a Movie
> *You added in a CRUD feature! Good job! Now let's get deleted squared away...*

* [ ] Identify the component that holds the "button" needed for deletion. Add an event handler to that button.

* [ ] Build an event handler that makes a request to delete the currently viewed movie. Observe what is returned from the request.

* [ ] You will once again need to keep the server and state data in sync. In `App.js`, complete the `deleteMovie` method so that it receives an id, filters out any movie with that id and sets state to that resultant movie list.

* [ ] Pass `deleteMovie` into the approprate component.

* [ ] Run `deleteMovie` on the currently selected movie when your delete request is complete and redirect the user to the `/movies` route.

#### Adding a Movie
> *Alright! You ready! Let's see you use the skills of the previous steps to build a crud function from start to finish.*

* [ ] Use `EditMovieForm.js` as a model to build an `AddMovieForm` component from scratch. The component should hold all the attributes of a new movie in local state.

* [ ] Add in a route that allows access to `AddMovieForm`.

* [ ] Locate the part of the ui that should redirect to your new `AddMovieForm`. Make that button works as expected.

* [ ] In `AddMovieForm,` add an event handler for form submission. When the form is submitted, run the approprate request for adding a movie with the component's state values.

* [ ] Make sure your component has access to and runs and modifications needed to global state and redirects to `/movies` after creation.

### Stretch goals
- Make the added DeleteMovieModal appear and be reacted to before deletion occurs.
- Add in `addToFavorites` functionality. When the favorite button is pushed in the `Movie` component, make sure that when the favorite button is pushed, the id and name of the currently viewed into the favorite state slice in `App.js.`
- For extra credit, ensure that only unique movies can be added as favorites. Consider the `.find` method for arrays.
- Add in some Style!

### Resource: API documentation 

#### GET `http://localhost:5000/api/movies`
- Retrieves all the Movies with the following formatting:
```
[{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  genre: "Drama",
  description: : "A successful lawman's plans to retire anonymously in Tombstone, Arizona are disrupted by the kind of outlaws he was famous for eliminating."
}]
```
#### GET `http://localhost:5000/api/movies`
- Retrieves all movies on the server.

#### GET `http://localhost:5000/api/movies/:id`
- Retrieves a movie with the passed value as id.

#### POST `http://localhost:5000/api/movies`
- Adds the movie passed in through body to the server movies list. Returns updated movies list.

#### PUT `http://localhost:5000/api/movies/:id`
- Replaced the movie with the passed in id with data passed in through body. Returns update movies list.

#### DELETE `http://localhost:5000/api/movies/:id`
- Removed movie with the passed in id. Returns the deleted movie's id.

_______________

# Module Project: Redux - Car Sales

In this project you are given the skeleton/structure/styling of a React app. There is even some state built in for you. Your job will be to implement React-Redux as the state management system for this application.

## Introduction

---

Read these instructions carefully. Understand exactly what is expected before starting this project.

## Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

## Description

In this project you will implement Redux to manage the state for this React application.

# _Project - Car Sales_

- This is a really fun project, and one to show your family and friends when you've finished.
- You will be starting with a structured and styled app
- You have been commissioned to implement Redux as the state management system in this app
- You have the freedom to manage the state how you would like - ie, connecting multiple components to pass data directly to them, or maybe connecting one component, and then putting the data into a context object.

## Instructions

### Task 1: Project Setup

## Project Set Up

This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal.
- [ ] Download project dependencies by running `npm install`.
- [ ] Add the dependencies you will need to implement Redux, using **npm**.
- [ ] Start up the app using `npm start`.
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
      Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2a:  _MVP Requirements:_

**Step 1 - Planning 📝**

- Take a good amount of time to familiarize yourself with the project structure. Figure out what data you have and where it's being used (Pen and paper or a whiteboard will be your best friend here!)
- Plan out your state management structure as mentioned above. The only requirment is that you _must_ use Redux
- Write out the steps you think you'll need to complete this project. It seems silly, but doing this with every project will help you grow into a better developer a lot faster.
- Take note of the few comments throughout the app. They are there as little guides to nudge you in the right direction. You're welcome 😉

**Step 2 - And... Action! 🎬**

- Time to get your hands on your keyboard. Look at the first step you wrote down and start implementing!
- As you work through setting up redux, you can do it however you'd like. This is the flow that works for me:

```text
Set up "empty" reducer and initial state 👉 Set up store and Provider 👉
Connect components 👉 Add events and event handlers in UI 👉 Build action creators 👉
write the reducer logic for the actions 👉 Rinse and repeat
```

#### _MVP Requirements:_

- Move the given state to the reducer as the initial state for the Redux store.
- Set up the Redux flow
- User should be able to add features to their car
- User should be able to remove added features from their car
- Total should update as user adds and removes features from their car

### Task 3: Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

- Use Redux hooks instead of HOCs
- Implement React-Router and add a starter page where the user can choose a car. Each car should have different features that have different pricing. Have fun with this! It could end up being really cool.
- Look into the docs for Bulma and change up the styling.
- Implement an API from one of these sites [here](https://www.google.com/search?q=car+sales+api&rlz=1C5CHFA_enUS809US809&oq=car+sales+api&aqs=chrome..69i57j0l5.3580j0j1&sourceid=chrome&ie=UTF-8). I don't know if there are any good open APIs for this, so explore around. Check out what data these APIs return, and what you think would be fun to work with. The sky is the limit here!

## Submission Format
* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
