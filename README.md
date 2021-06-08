


[Introduction](#introduction "Direct link to heading")
-------------------------------------------------------

Welcome to the Redux Essentials tutorial! **This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices**. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here.

In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in [Part 2: Redux App Structure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/essentials/part-2-app-structure) we'll examine a basic React + Redux app to see how the pieces fit together.

Starting in [Part 3: Basic Redux Data Flow](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/essentials/part-3-data-flow), we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux.

### [How to Read This Tutorial](#how-to-read-this-tutorial "Direct link to heading")

This page will focus on showing you _how_ to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly.

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already:

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

You should make sure that you have the React and Redux DevTools extensions installed in your browser:

*   React DevTools Extension:
    *   [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
    *   [React DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
*   Redux DevTools Extension:
    *   [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
    *   [Redux DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

[What is Redux?](#what-is-redux "Direct link to heading")
----------------------------------------------------------

It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### Why Should I Use Redux?[#](#why-should-i-use-redux "Direct link to heading")

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

### When Should I Use Redux?[#](#when-should-i-use-redux "Direct link to heading")

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

*   You have large amounts of application state that are needed in many places in the app
*   The app state is updated frequently over time
*   The logic to update that state may be complex
*   The app has a medium or large-sized codebase, and might be worked on by many people

**Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.**

### Redux Libraries and Tools[#](#redux-libraries-and-tools "Direct link to heading")

Redux is a small standalone JS library. However, it is commonly used with several other packages:

#### React-Redux[#](#react-redux "Direct link to heading")

Redux can integrate with any UI framework, and is most frequently used with React. [**React-Redux**](https://react-redux.js.org/) is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

#### Redux Toolkit[#](#redux-toolkit "Direct link to heading")

[**Redux Toolkit**](https://redux-toolkit.js.org/) is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

#### Redux DevTools Extension[#](#redux-devtools-extension "Direct link to heading")

The [**Redux DevTools Extension**](https://github.com/zalmoxisus/redux-devtools-extension) shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".

Redux Terms and Concepts[#](#redux-terms-and-concepts "Direct link to heading")
-------------------------------------------------------------------------------

Before we dive into some actual code, let's talk about some of the terms and concepts you'll need to know to use Redux.

### State Management[#](#state-management "Direct link to heading")

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

It is a self-contained app with the following parts:

*   The **state**, the source of truth that drives our app;
*   The **view**, a declarative description of the UI based on the current state
*   The **actions**, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of **"one-way data flow"**:

*   State describes the condition of the app at a specific point in time
*   The UI is rendered based on that state
*   When something happens (such as a user clicking a button), the state is updated based on what occurred
*   The UI re-renders based on the new state

![One-way data flow](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

However, the simplicity can break down when we have **multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

### Immutability[#](#immutability "Direct link to heading")

"Mutable" means "changeable". If something is "immutable", it can never be changed.

JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:

This is called _mutating_ the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed.

**In order to update values immutably, your code must make _copies_ of existing objects/arrays, and then modify the copies**.

We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:

**Redux expects that all state updates are done immutably**. We'll look at where and how this is important a bit later, as well as some easier ways to write immutable update logic.

### Terminology[#](#terminology "Direct link to heading")

There are some important Redux terms that you'll need to be familiar with before we continue:

#### Actions[#](#actions "Direct link to heading")

An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application**.

The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

A typical action object might look like this:

#### Action Creators[#](#action-creators "Direct link to heading")

An **action creator** is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

#### Reducers[#](#reducers "Direct link to heading")

A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**

##### info

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method.

Reducers must _always_ follow some specific rules:

*   They should only calculate the new state value based on the `state` and `action` arguments
*   They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
*   They must not do any asynchronous logic, calculate random values, or cause other "side effects"

We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly.

The logic inside reducer functions typically follows the same series of steps:

*   Check to see if the reducer cares about this action
    *   If so, make a copy of the state, update the copy with new values, and return it
*   Otherwise, return the existing state unchanged

Here's a small example of a reducer, showing the steps that each reducer should follow:

Reducers can use any kind of logic inside to decide what the new state should be: `if/else`, `switch`, loops, and so on.

#### Detailed Explanation: Why Are They Called 'Reducers?'

The [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

`Array.reduce()` takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:

*   `previousResult`, the value that your callback returned last time
*   `currentItem`, the current item in the array

The first time that the callback runs, there isn't a `previousResult` available, so we need to also pass in an initial value that will be used as the first `previousResult`.

If we wanted to add together an array of numbers to find out what the total is, we could write a reduce callback that looks like this:

Notice that this `addNumbers` "reduce callback" function doesn't need to keep track of anything itself. It takes the `previousResult` and `currentItem` arguments, does something with them, and returns a new result value.

**A Redux reducer function is exactly the same idea as this "reduce callback" function!** It takes a "previous result" (the `state`), and the "current item" (the `action` object), decides a new state value based on those arguments, and returns that new state.

If we were to create an array of Redux actions, call `reduce()`, and pass in a reducer function, we'd get a final result the same way:

We can say that **Redux reducers reduce a set of actions (over time) into a single state**. The difference is that with `Array.reduce()` it happens all at once, and with Redux, it happens over the lifetime of your running app.

#### Store[#](#store "Direct link to heading")

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

#### Dispatch[#](#dispatch "Direct link to heading")

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

**You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

We typically call action creators to dispatch the right action:

#### Selectors[#](#selectors "Direct link to heading")

**Selectors** are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

### Redux Application Data Flow[#](#redux-application-data-flow "Direct link to heading")

Earlier, we talked about "one-way data flow", which describes this sequence of steps to update the app:

*   State describes the condition of the app at a specific point in time
*   The UI is rendered based on that state
*   When something happens (such as a user clicking a button), the state is updated based on what occurred
*   The UI re-renders based on the new state

For Redux specifically, we can break these steps into more detail:

*   Initial setup:
    *   A Redux store is created using a root reducer function
    *   The store calls the root reducer once, and saves the return value as its initial `state`
    *   When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
*   Updates:
    *   Something happens in the app, such as a user clicking a button
    *   The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/increment'})`
    *   The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
    *   The store notifies all parts of the UI that are subscribed that the store has been updated
    *   Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
    *   Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

What You've Learned[#](#what-youve-learned "Direct link to heading")
--------------------------------------------------------------------

Redux does have a number of new terms and concepts to remember. As a reminder, here's what we just covered:

##### Summary

*   **Redux is a library for managing global application state**
    *   Redux is typically used with the React-Redux library for integrating Redux and React together
    *   Redux Toolkit is the recommended way to write Redux logic
*   **Redux uses a "one-way data flow" app structure**
    *   State describes the condition of the app at a point in time, and UI renders based on that state
    *   When something happens in the app:
        *   The UI dispatches an action
        *   The store runs the reducers, and the state is updated based on what occurred
        *   The store notifies the UI that the state has changed
    *   The UI re-renders based on the new state
*   **Redux uses several types of code**
    *   _Actions_ are plain objects with a `type` field, and describe "what happened" in the app
    *   _Reducers_ are functions that calculate a new state value based on previous state + an action
    *   A Redux _store_ runs the root reducer whenever an action is _dispatched_

What's Next?[#](#whats-next "Direct link to heading")
-----------------------------------------------------

We've seen each of the individual pieces of a Redux app. Next, continue on to [Part 2: Redux App Structure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/essentials/part-2-app-structure), where we'll look at a full working example to see how the pieces fit together.


[Source](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)





---
---


## When to use Redux

Lately one of the biggest debates in the frontend world has been about Redux. Not long after its release, Redux became one of the hottest topics of discussion. Many favored it while others pointed out issues. 

Redux allows you to manage your app’s state in a single place and keep changes in your app more predictable and traceable. It makes it easier to reason about changes occurring in your app. But all of these benefits come with tradeoffs and constraints. One might feel it adds up boilerplate code, making simple things a little overwhelming; but that depends upon the architecture decisions.

One simple answer to this question is you will realize for yourself when you need Redux. If you’re still confused as to whether you need it, you don’t. This usually happens when your app grows to the scale where managing app state becomes a hassle; and you start looking out for making it easy and simple.

## What is state management in Redux?

State management is essentially a way to facilitate communication and sharing of data across components. It creates a tangible data structure to represent the state of your app that you can read from and write to. That way, you can see otherwise invisible states while you’re working with them.

Most libraries, such as React, Angular, etc. are built with a way for components to internally manage their state without any need for an external library or tool. It does well for applications with few components, but as the application grows bigger, managing states shared across components becomes a chore.

In an app where data is shared among components, it might be confusing to actually know where a state should live. Ideally, the data in a component should live in just one component, so sharing data among sibling components becomes difficult.

For instance, in React, to share data among siblings, a state has to live in the parent component. A method for updating this state is provided by the parent component and passed as props to these sibling components.

Here’s a simple example of a login component in React. The input of the login component affects what is displayed by its sibling component, the status component:

class App extends React.Component { constructor(props) { super(props);  this.state \= { userStatus: "NOT LOGGED IN"} this.setStatus \= this.setStatus.bind(this); }   setStatus(username, password) { const newUsers \= users; newUsers.map(user \=> { if (user.username \== username && user.password \=== password) { this.setState({ userStatus: "LOGGED IN" }) } }); } render() { return ( <div>   <Status status\={this.state.userStatus} />   <Login handleSubmit\={this.setStatus} /> </div\> ); } });

> ![💡](https://s.w.org/images/core/emoji/13.0.1/svg/1f4a1.svg) Remember, this data is not needed by the parent component, but because its children need to share data, it has to provide a state.

Now imagine what happens when a state has to be shared between components that are far apart in the component tree. The state has to be passed from one component to another until it gets to where it is needed.

Basically, the state will have to be lifted up to the nearest parent component and to the next until it gets to an ancestor that is common to both components that need the state, and then it is passed down. This makes the state difficult to maintain and less predictable. It also means passing data to components that do not need it.

It’s clear that state management gets messy as the app gets complex. This is why you need a state management tool like Redux that makes it easier to maintain these states. Let’s get a good overview of Redux concepts before considering its benefits.

## How Redux works

The way Redux works is simple. There is a central store that holds the entire state of the application. Each component can access the stored state without having to send down props from one component to another.

There are three building parts: actions, store, and reducers. Let’s briefly discuss what each of them does. This is important because they help you understand the benefits of Redux and how it’s to be used. We’ll be implementing a similar example to the login component above but this time in Redux.

### Actions in Redux

Simply put, actions are events. They are the only way you can send data from your application to your Redux store. The data can be from user interactions, API calls, or even form submissions.

Actions are sent using the `store.dispatch()` method. Actions are plain JavaScript objects, and they must have a type property to indicate the type of action to be carried out. They must also have a payload that contains the information that should be worked on by the action. Actions are created via an action creator.

Here’s an example of an action that can be carried out during login in an app:

{ type: "LOGIN", payload: { username: "foo", password: "bar" } }

Here is an example of its action creator:

const setLoginStatus \= (name, password) \=> { return { type: "LOGIN", payload: { username: "foo", password: "bar" } } }

As explained earlier, the action must contain the type property and then the other payload to be stored.

### Reducers in Redux

Reducers are pure functions that take the current state of an application, perform an action, and return a new state. These states are stored as objects, and they specify how the state of an application changes in response to an action sent to the store.

It is based on the `reduce` function in JavaScript, where a single value is calculated from multiple values after a callback function has been carried out.

Here is an example of how reducers work in Redux:

const LoginComponent \= (state \= initialState, action) \=> { switch (action.type) {  case "LOGIN": return state.map(user \=> { if (user.username !== action.username) { return user; } if (user.password \== action.password) { return { ...user, login\_status: "LOGGED IN" } } }); default: return state; } };

> ![💡](https://s.w.org/images/core/emoji/13.0.1/svg/1f4a1.svg) Reducers take the previous state of the app and return a new state based on the action passed to it.

As pure functions, they do not change the data in the object passed to them or perform any side effect in the application. Given the same object, they should always produce the same result.

### Store in Redux

The store holds the application state. It is highly recommended to keep only one store in any Redux application. You can access the state stored, update the state, and register or unregister listeners via helper methods.

Let’s create a store for our login app:

const store \= createStore(LoginComponent);

Actions performed on the state always return a new state. Thus, the state is very easy and predictable.

Now that we know a little more about Redux, let’s go back to our login component example that was implemented earlier and see how Redux can improve the component.

class App extends React.Component { render() { return ( <div> <Status user\={this.props.user.name}/> <Login login\={this.props.setLoginStatus}/> </div\> ) } }

With Redux, there’s one general state in the store, and each component has access to the state. This eliminates the need to continuously pass state from one component to another. You can also select the slice from the store for a particular component; this makes your app more optimized.

## Redux middleware

Redux allows developers to intercept all actions dispatched from components before they are passed to the reducer function. This interception is done via middlewares.

Building on the example Login component discussed in the last section, we might want to sanitize the user’s input before it reaches our store for further processing. This can be achieved via [Redux middleware](https://redux.js.org/understanding/history-and-design/middleware).

Technically, middlewares are functions that call the next method received in an argument after processing the current action. These are called after every dispatch.

Here’s what a simple middleware looks like:

function simpleMiddleware({ getState, dispatch }) { return function(next){ return function(action){  const nextAction \= next(action);  const state \= getState();  return nextAction; } } }

This might look a little overwhelming, but in most cases, you might not need to create your own middleware since the huge Redux community has already made a number of them available. If you feel middleware is required, you will enjoy it because it gives you a lot of power to do tons of great work with the best abstraction.

## Why use Redux?

When using Redux with React, states will no longer need to be lifted up. This makes it easier for you to trace which action causes any change.

As you can see in the example above, the component does not need to provide any state or method for its children components to share data among themselves. Everything is handled by Redux. This greatly simplifies the app and makes it easier to maintain.

This is the primary reason why you should use Redux, but it’s not the only benefit. Take a look at the list below for a summary of what you stand to gain by using Redux for state management.

### Redux makes the state predictable

In Redux, the state is always predictable. If the same state and action are passed to a reducer, the same result is always produced because reducers are pure functions. The state is also immutable and is never changed. This makes it possible to implement arduous tasks like infinite undo and redo. It is also possible to implement time travel — that is, the ability to move back and forth among the previous states and view the results in real time.

### Redux is maintainable

Redux is strict about how code should be organized, which makes it easier for someone with knowledge of Redux to understand the structure of any Redux application. This generally makes it easier to maintain. This also helps you segregate your business logic from your component tree. For large scale apps, it’s critical to [keep your app more predictable and maintainable.](https://buttercms.com/blog/react-best-practices-maintaining-large-scale-projects)

### Debugging is easy in Redux

Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors, network errors, and other forms of bugs that might come up during production.

Besides logging, it has [great DevTools that allow you to time-travel actions](https://blog.logrocket.com/redux-devtools-tips-tricks-for-faster-debugging/), persist actions on page refresh, etc. For medium- and large-scale apps, debugging takes more time then actually developing features. Redux DevTools makes it easy to taker advantage of all Redux has to offer.

### **Performance Benefits**

You might assume that keeping the app’s state global would result in some performance degradation. To a large extent, that’s not the case.

React Redux implements many performance optimizations internally so that your own connected component only rerenders when it actually needs to.

### Ease of testing

It is easy to test Redux apps since functions used to change the state of pure functions.

### State persistence

You can persist some of the app’s state to local storage and restore it after a refresh. This can be really nifty.

### Server-side rendering

Redux can also be used for server-side rendering. With it, you can handle the initial render of the app by sending the state of an app to the server along with its response to the server request. The required components are then rendered in HTML and sent to the clients.

The LogRocket Redux middleware package adds an extra layer of visibility into your user sessions. LogRocket logs all actions and state from your Redux stores.

## Conclusion

We have discussed the major features of Redux and why Redux is beneficial to your app. While Redux has its benefits, that does not mean you should go about adding Redux in all of your apps. Your application [might still work well without Redux](https://blog.logrocket.com/when-and-when-not-to-use-redux-41807f29a7fb/).

One major benefit of Redux is to add direction to decouple “what happened” from “how things change.” However, you should only implement Redux if you determine your project needs a state management tool.
