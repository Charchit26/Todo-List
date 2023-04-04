# ToDo list webapp

This is a react based web app to function as a todo list.
It has got the following features:

1. add a todo task item (user should be able to type the text and pick a date from a date picker)
2. delete a todo task
3. edit a todo task by double-clicking on the item
4. mark a todo task as 'completed', the completed task should have a strikethrough text and in gray color
5. urgent tasks should be shown on top of the list (tasks that due in 3 days) in red color
6. be able to click one of 3 buttons ALL, REMAINING, COMPLETED to filter tasks accordingly
7. a search field to filter tasks by the content.
8. a save button to save all the content to json server

This app comprises 2 parts - a UI and a backend using `json-server`

To start the app:
1. Run `npm start` to boot up the UI on `http://localhost:3000/`
2. Run `npm run start-api` to boot up an instance of `json-server` on the port `http://localhost:3001/`. This helps save the todo items in a json file inside the repository.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run start-api`

Runs the json-server in the development mode.\
More about it on [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Troubleshooting guide

### Reset json-server database

Backend is designed using `json-server` which enables us to make RESTful API calls without having a separate backend deployed.

In the case we need to reset the database then replace the contents of `db.json` file in the root of this repo with this:
```
{
    "data": {}
}
```

## Scope of improvements

1. Enable editing due date for the existing todo list items.
2. Make the "urgency" of tasks configurable by adding the due date threshold in an env var.
3. Evaluate and improve the web app performance by using chrome dev tools profiler and reducing the component re-renders.
4. Clear the text field after a todo item is added.
5. Make the UI more intuitive as to show the meaning of `Save` button and provide feedback on success and error of the API call.
6. Add unit tests.