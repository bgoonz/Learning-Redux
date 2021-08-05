# Redux Libraries & Learning Material [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://rawgit.com/brillout/awesome-redux/master/redux-logo.svg" align="right" width="110">](http://redux.js.org/)

![picture 1](images/9c1b589ffe03e4cf849563c863e828652e1add56ef051a3130356cf287f28a9d.png)

> Redux is a state container for JavaScript apps.

- Official website: [`devarchy.com/redux`](https://devarchy.com/redux)
- Use devarchy to add a library to the catalog

 <br/>

#### Contents

- [Code Architecture](#code-architecture)
- [Utilities](#utilities)
- [Code Style](#code-style)
- [Dev tools / Inspection tools](#dev-tools--inspection-tools)
- [React Integration](#react-integration)
- [Other Integrations](#other-integrations)
- [Boilerplate](#boilerplate)
- [Miscellaneous](#miscellaneous)
- [Learning Material](#learning-material)
- [Community](#community)

<br/>

## Code Architecture

_Aims to improve the overall structure of the source code. Makes reasoning about the code easier._

- [redux-schema](https://github.com/ddsol/redux-schema) - Automatic actions, reducers and validation for Redux.
- [redux-tcomb](https://github.com/gcanti/redux-tcomb) - Immutable and type-checked state and actions for Redux.
- [redux-action-tree](https://github.com/cerebral/redux-action-tree) - The Cerebral signals running with Redux.
- [redux-elm](https://github.com/salsita/redux-elm) - The Elm Architecture in JavaScript.

## Utilities

- [redux-orm](https://github.com/tommikaikkonen/redux-orm) - Small, simple and immutable ORM to manage relational data in your Redux store.
- [redux-api-middleware](https://github.com/agraboso/redux-api-middleware) - Redux middleware for calling an API.
- [redux-ignore](https://github.com/omnidan/redux-ignore) - Higher-order reducer to ignore Redux actions.
- [redux-modifiers](https://github.com/calvinfroedge/redux-modifiers) - Collection of generic functions for writing Redux reducers to operate on various data structures.
- [rereduce](https://github.com/slorber/rereduce) - Reducer library for Redux.
- [redux-search](https://github.com/treasure-data/redux-search) - Redux bindings for client-side search.
- [redux-logger](https://github.com/evgenyrodionov/redux-logger) - Logger middleware for Redux.
- [redux-immutable](https://github.com/gajus/redux-immutable) - Redux-immutable is used to create an equivalent function of Redux combineReducers that works with Immutable.js state.
- [reselect](https://github.com/reactjs/reselect) - Selector library for Redux.
- [redux-requests](https://github.com/idolize/redux-requests) - Manages in-flight requests with a Redux reducer to avoid issuing duplicate requests.
- [redux-undo](https://github.com/omnidan/redux-undo) - Higher order reducer to add undo/redo functionality to Redux state containers.
- [redux-bug-reporter](https://github.com/dtschust/redux-bug-reporter) - Bug reporter and bug playback tool for Redux.
- [redux-transducers](https://github.com/acdlite/redux-transducers) - Transducer utilities for Redux.

### Store Persistence

- [redux-storage](https://github.com/michaelcontento/redux-storage) - Persistence layer for Redux with flexible backends.
- [redux-persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a Redux store.

### Side Effects

_Side Effects / Asynchronous Actions_

- [redux-saga](https://github.com/yelouafi/redux-saga) - Alternative side effect model for Redux apps.
- [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) - Redux middleware for resolving and rejecting promises with conditional optimistic updates.
- [redux-effects](https://github.com/redux-effects/redux-effects) - You write pure functions, redux-effects handles the rest.
- [redux-thunk](https://github.com/gaearon/redux-thunk) - Thunk middleware for Redux.
- [redux-connect](https://github.com/makeomatic/redux-connect) - Provides decorator for resolving async props in react-router, extremely useful for handling server-side rendering in React.
- [redux-loop](https://github.com/redux-loop/redux-loop) - Port of elm-effects and the Elm Architecture to Redux that allows you to sequence your effects naturally and purely by returning them from your reducers.
- [redux-side-effects](https://github.com/salsita/redux-side-effects) - Redux toolset for keeping all the side effects inside your reducers while maintaining their purity.
- [redux-logic](https://github.com/jeffbski/redux-logic) - Redux middleware for organizing business logic and action side effects.
- [redux-observable](https://github.com/redux-observable/redux-observable) - RxJS middleware for action side effects in Redux using &quot;Epics&quot;.
- [redux-ship](https://github.com/clarus/redux-ship) - Composable, testable and typable side effects.

## Code Style

_Aims to make parts of the source code easier to read/write._

- [redux-act](https://github.com/pauldijou/redux-act) - Opinionated lib to create actions and reducers for Redux.
- [redux-crud](https://github.com/Versent/redux-crud) - Set of standard actions and reducers for Redux CRUD Applications.

## Dev tools / Inspection tools

- [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - Another Redux DevTools Monitor.
- [redux-diff-logger](https://github.com/fcomb/redux-diff-logger) - Diff logger between states for Redux.
- [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - Chart monitor for Redux DevTools.
- [redux-devtools](https://github.com/gaearon/redux-devtools) - DevTools for Redux with hot reloading, action replay, and customizable UI.
- [redux-devtools-dispatch](https://github.com/YoruNoHikage/redux-devtools-dispatch) - Dispatch your actions manually to test if your app Reacts well.
- [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - Resizable and movable dock for Redux DevTools monitors.
- [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - Filterable tree view monitor for Redux DevTools.
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - The default monitor for Redux DevTools with a tree view.
- [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevTools remotely.

## React Integration

- [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - Redux middleware to automatically generate tests for reducers through ui interaction.
- [react-redux](https://github.com/reactjs/react-redux) - Official React bindings for Redux.
- [react-easy-universal](https://github.com/keystonejs/react-easy-universal) - Universal Routing &amp; Rendering with React &amp; Redux was too hard. Now it&#39;s easy.
- [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui) - Set of wrapper components to facilitate using Material UI with Redux Form.

### Routing

- [redux-async-connect](https://github.com/Rezonans/redux-async-connect) - It allows you to request async data, store them in Redux state and connect them to your React component.
- [redux-tiny-router](https://github.com/Agamennon/redux-tiny-router) - Router made for Redux and made for universal apps. Stop using the router as a controller, it's just state.
- [redux-router](https://github.com/acdlite/redux-router) - Redux bindings for React Router &ndash; keep your router state inside your Redux store.
- [react-router-redux](https://github.com/reactjs/react-router-redux) - Ruthlessly simple bindings to keep react-router and Redux in sync.
- [ground-control](https://github.com/raisemarketplace/ground-control) - Scalable reducer management &amp; powerful data fetching for React Router &amp; Redux.

### Forms

- [redux-form](https://github.com/erikras/redux-form) - Higher Order Component using react-redux to keep form state in a Redux store.
- [react-redux-form](https://github.com/davidkpiano/react-redux-form) - Create forms easily in React with Redux.

### Component State

- [redux-react-local](https://github.com/threepointone/redux-react-local) - Local component state via Redux.
- [redux-ui](https://github.com/tonyhb/redux-ui) - Easy UI state management for React Redux.

## Other Integrations

### Flux

- [redux-actions](https://github.com/acdlite/redux-actions) - Flux Standard Action utilities for Redux.
- [redux-promise](https://github.com/acdlite/redux-promise) - FSA-compliant promise middleware for Redux.

### Backbone

- [backbone-redux](https://github.com/redbooth/backbone-redux) - Easy way to keep your backbone collections and Redux store in sync.

### Falcor

- [redux-falcor](https://github.com/ekosz/redux-falcor) - Connect your Redux front-end to your falcor back-end.

### RxJS

- [redux-observable](https://github.com/redux-observable/redux-observable) - RxJS middleware for action side effects in Redux using &quot;Epics&quot;.
- [rx-redux](https://github.com/jas-chen/rx-redux) - Reimplementation of Redux using RxJS.
- [redux-rx](https://github.com/acdlite/redux-rx) - RxJS utilities for Redux.
- [redurx](https://github.com/shiftyp/redurx) - Redux&#39;ish Functional State Management using RxJS.

### Electron

- [redux-electron-store](https://github.com/samiskin/redux-electron-store) - Redux store enhancer that allows automatic synchronization between electron processes.

### Deku

- [deku-redux](https://github.com/troch/deku-redux) - Bindings for Redux in deku &lt; v2.

### Other

- [redux-rollbar-middleware](https://github.com/netguru/redux-rollbar-middleware) - Redux middleware that wraps exceptions in actions and sends them to Rollbar with current state.
- [kasia](https://github.com/outlandishideas/kasia) - React Redux toolset for the WordPress API.

## Boilerplate

_Boilerplates / Scaffolds / Starter Kits / Generators / Stack Ensembles_

- [redux-cli](https://github.com/SpencerCDixon/redux-cli) - Opinionated CLI for building Redux/React apps quicker.
- [reactuate](https://github.com/reactuate/reactuate) - React/Redux stack (not a boilerplate kit).
- [react-chrome-extension-boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate) - Boilerplate for Chrome Extension React.js project.
- [universal-redux](https://github.com/bdefore/universal-redux) - Npm package that lets you jump right into coding React and Redux with universal (isomorphic) rendering. Only manage Express setups or Webpack configurations if you want to.
- [generator-react-aspnet-boilerplate](https://github.com/pauldotknopf/react-aspnet-boilerplate) - Starting point for building isomorphic React applications with ASP.NET Core 1, leveraging existing techniques.
- [generator-redux](https://github.com/banderson/generator-redux) - CLI tools for Redux: next-gen functional Flux/React with devtools.
- [generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux) - React Webpack Generator including Redux support.
- [socrates](https://github.com/matthewmueller/socrates) - Small (8kb), batteries-included Redux store to reduce boilerplate and promote good habits.

## Miscellaneous

- [redux-core](https://github.com/jas-chen/redux-core) - Minimal Redux.






# Update:




### Resources

* [Many tools and middlewares](https://github.com/redux-effects)
* [Redux offline docs](https://github.com/paulwittmann/redux-offline-docs)
* [Flux challenge](https://github.com/staltz/flux-challenge)
* [Sound Redux - a simple Soundcloud client](https://github.com/andrewngu/sound-redux)
* [Favesound Redux - SoundCloud Client for Artists](https://github.com/rwieruch/favesound-redux)
* [Structor - a user interface builder for React](https://github.com/ipselon/structor)
* [generator-redux - CLI tools for Redux: next-gen functional Flux/React with devtools](https://github.com/banderson/generator-redux)
* [generator-reactapp - Yeoman generator for react app with redux](https://github.com/Jackong/generator-reactapp)
* [Rekit - Toolkit for building scalable web apps with React, Redux and React-router](http://rekit.js.org)
* [Spectacle - ReactJS based Presentation Library](https://github.com/FormidableLabs/spectacle)
* [Notes (and partial transcription) of Dan Abramov's Redux course videos on http://egghead.io](https://github.com/tayiorbeii/egghead.io_redux_course_notes)
* [Comprehensive Notes for Learning (how to use) Redux to manage state in your Web/Mobile Apps](https://github.com/dwyl/learn-redux)
* [React Redux [RU tutorial]](https://maxfarseer.gitbooks.io/redux-course-ru/content/)
* [Redux without profanity](https://tonyhb.gitbooks.io/redux-without-profanity/content/index.html)
* [React and Redux Single Page Applications Resources](https://medium.com/@sapegin/react-and-redux-single-page-applications-resources-22cd859b0c1d#.o66rolp0p)
* [A categorized list of Redux-related addons, libraries, and utilities](https://github.com/markerikson/redux-ecosystem-links)
* [Building the F8 2016 App (Redux, GraphQL, React Native)](http://makeitopen.com/tutorials/building-the-f8-app/planning/)
* [The Elm Architecture in JavaScript](https://github.com/salsita/redux-elm)
* [React Redux Workflow - Graphical Cheat Sheet](https://github.com/uanders/react-redux-cheatsheet)

---

### Articles And Tutorials
* [Building Applications with React and Redux in ES6 on Pluralsight](https://app.pluralsight.com/library/courses/react-redux-react-router-es6)
* [Writing a Basic App in Redux](http://davidandsuzi.com/writing-a-basic-app-in-redux)
* [Learn how to use Redux step by step](https://github.com/happypoulp/redux-tutorial)
* [Tutorial: Handcrafting an Isomorphic Redux Application (With Love)](https://medium.com/@bananaoomarang/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4)
* [0 to 1 : Getting started with Redux](http://www.jchapron.com/2015/08/14/getting-started-with-redux)
* [Redux Chinese Document](https://github.com/camsong/redux-in-chinese)
* [Redux Document (Traditional Chinese)](https://github.com/chentsulin/redux)
* [Relay and Routing](https://medium.com/@cpojer/relay-and-routing-36b5439bad9)
* [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a)
* [Several videos about Redux + Falcor](https://www.livecoding.tv/ekosz/videos) and [Example code](https://github.com/ekosz/postcard-sender)
* [Redux Middleware: Behind the Scenes](http://briantroncone.com/?p=529)
* [A proposal for bundling reducers, action types and actions when using Redux](https://github.com/erikras/ducks-modular-redux)
* [Full-Stack Redux Tutorial - A Comprehensive Guide to Test-First Development with Redux, React, and Immutable](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) Source [Server](https://github.com/teropa/redux-voting-server) + [Client](https://github.com/teropa/redux-voting-client)
* [Redux best practices](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e)
* [The 3REE Stack: React + Redux + RethinkDB + Express.js](http://blog.workshape.io/the-3ree-stack-react-redux-rethinkdb-express-js)
* [React Tutorial - Converting Reflux to Redux](http://engineering.wework.com/process/2015/10/01/react-reflux-to-redux)
* [Redux example using 500px API (with ES6)](https://github.com/yildizberkay/redux-example)
* [Building a boilerplate for a Koa, Redux, React application including Webpack, Mocha and SASS](http://blog.joanboixados.com/building-a-boilerplate-for-a-koa-redux-react-application-including-webpack-mocha-and-sass/) - This article explains in detail how [this koa-redux-react-boilerplate](https://github.com/mezod/boilerplate-koa-redux-react) was built and the technologies it uses.
* [Typed React and Redux](http://jaysoo.ca/2015/09/26/typed-react-and-redux)
* [A cartoon intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.8k7536uqu)
* [Join The Dark Side Of The Flux: Responding to Actions with Actors](http://jamesknelson.com/join-the-dark-side-of-the-flux-responding-to-actions-with-actors)
* [Can I dispatch multiple actions from Redux action creators?](http://jamesknelson.com/can-i-dispatch-multiple-actions-from-redux-action-creators)
* [Understanding Redux (or, How I Fell in Love with a JavaScript State Container)](http://www.youhavetolearncomputers.com/blog/2015/9/15/a-conceptual-overview-of-redux-or-how-i-fell-in-love-with-a-javascript-state-container)
* [Your First Immutable React & Redux App](http://reactjsnews.com/your-first-redux-app)
* [Getting Started with Redux - Egghead's video lessons from Dan Abramov](https://egghead.io/series/getting-started-with-redux)
* [Redux Testing Video Lessons - a few short Egghead video lessons (some free, some require a subscription)](https://egghead.io/series/react-testing-cookbook)
* [Implementing a smart Login Modal with Redux, reselect and ReactJS](https://medium.com/@dorsha/implement-login-modal-with-redux-reselect-and-reactjs-668c468bcbe3#.lnwisap8c)
* [How to Build a Todo App Using React, Redux, and Immutable.js](http://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js)
* [Rethinking Redux](https://voice.kadira.io/rethinking-redux-f1e96daba60c#.hp5v516ie)
* [Managing Side Effects In React + Redux Using Sagas](http://jaysoo.ca/2016/01/03/managing-processes-in-redux-using-sagas)
* [Secure Your React and Redux App with JWT Authentication](https://auth0.com/blog/2016/01/04/secure-your-react-and-redux-app-with-jwt-authentication)
* [Getting started with Redux and GraphQL](https://medium.com/@thisbejim/getting-started-with-redux-and-graphql-8384b3b25c56#.3anuh1m7x)
* [Data Flows with Angular 2 and Redux](http://www.sitepoint.com/data-flows-angular-2-redux)
* [Simple Routing with Redux and React](http://jamesknelson.com/simple-routing-redux-react)
* [Redux nowadays : From actions creators to sagas](https://riadbenguella.com/2015/12/28/redux-nowadays-from-actions-creators-to-sagas/)
* [Master Complex Redux Workflows with Sagas](http://konkle.us/master-complex-redux-workflows-with-sagas)
* [Angular 2 Application Architecture - Building Flux Apps with Redux and Immutable.js](http://blog.jhades.org/angular-2-application-architecture-building-flux-like-apps-using-redux-and-immutable-js-js)
* [React, Redux and Immutable.js: Ingredients for Efficient Web Applications](http://www.toptal.com/react/react-redux-and-immutablejs)
* [An Introduction to React Redux (Part 1)](https://shellmonger.com/2016/02/16/an-introduction-to-react-redux-part-1)
* [An Introduction to React Redux (Part 2)](https://shellmonger.com/2016/02/19/an-introduction-to-react-redux-part-2)
* [Rules For Structuring (Redux) Applications](http://jaysoo.ca/2016/02/28/organizing-redux-application)
* [Redux for the very beginner](http://toranbillups.com/blog/archive/2016/01/22/redux-for-the-very-beginner)
* [Redux - Calling web service asynchronously](http://www.zohaib.me/redux-call-service-async/)
* [Animating with React, Redux, and d3](http://swizec.com/blog/animating-with-react-redux-and-d3/swizec/6775)
* [Build an Image Gallery Using React, Redux and redux-saga](http://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga/)
* [Introducing redux-operations](https://medium.com/@matt.krick/introducing-redux-operations-332ab56e468b#.7e30nsxne)
* [Solving Redux’s shortcoming in 150 LOCs](https://medium.com/@matt.krick/solving-redux-s-shortcoming-in-150-locs-540979ce6cf9#.sw0s478j6)
* [The Anatomy Of A React Redux App](https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.h05vq2uaj)
* [Getting Started with React, Redux and Immutable: a Test-Driven Tutorial (Part 2)](http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-2/)
* [Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/)
* [Complete intro to react](http://btholt.github.io/complete-intro-to-react/)
* [Recreating Redux — Behind the magic curtain](https://medium.com/@nicktho/recreating-redux-behind-the-magic-curtain-c21edd542c9c#.a93sgufyi)
* [Let's Build a Redux Powered React Application](https://stormpath.com/blog/build-a-redux-powered-react-application/)
* [Deep Introduction to Redux - Seriese 1/3](https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros)
* [Universal Rendering with Redux and React-Router - Seriese 2/3](https://www.codementor.io/reactjs/tutorial/redux-server-rendering-react-router-universal-web-app)
* [Unit Testing Redux Apps - Seriese 3/3](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)
* [Using Aurelia and Redux together for good times all around](https://zen.id.au/using-aurelia-and-redux-together-for-good-times-all-around/)
* [Comparing Redux and Relay](https://www.reindex.io/blog/redux-and-relay/)
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
* [The SoundCloud Client in React + Redux](http://www.robinwieruch.de/the-soundcloud-client-in-react-redux)
* [深入浅出 Redux](https://github.com/berwin/Blog/issues/4)
* [Building Angular 2 applications with Immutable.js and Redux](http://houssein.me/redux/immutablejs/angular2/2016/07/04/angular2-with-immutablejs-and-redux.html)
* [Tutorial: Building Redux in TypeScript with Angular 2](http://blog.ng-book.com/introduction-to-redux-with-typescript-and-angular-2/)
* [Improving React and Redux performance with Reselect](http://blog.rangle.io/react-and-redux-performance-with-reselect/)
* [Recipes for Redux](http://blog.rangle.io/recipes-for-redux/)
* [Getting Started with Redux & Angular 2](http://blog.rangle.io/getting-started-with-redux-and-angular-2/)
* [Universal/Isomorphic React+Redux on a Swift Web Backend](https://el-tramo.be/blog/react-swift/)
* [Creating Reusable React-Redux Components Through Scoping](http://engineering.datadoghq.com/redux-doghouse--creating-reusable-react-redux-components-through-scoping/)
* [React+Redux系列教程](https://github.com/lewis617/react-redux-tutorial)
* [书籍：《React 与 Redux 开发实例精解》](https://lewis617.github.io/2016/11/20/r2-book/)
* [How to use Redux on highly scalable javascript applications?](https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38#.irwibmm9a)
* [Angular to React/Redux, a Guide for Angular v1 Experts Looking to Learn React/Redux](https://github.com/GoTeamEpsilon/angular-to-react-redux)
---

### Boilerplate
* [**redux-minimal** - Minimalist react-redux starter kit which let's you build rich real world apps](http://redux-minimal.js.org/)
* [**Modern and Scalable React/Redux Boilerplate** - Flexible starter kit using Webpack 2 (tree-shaking) / React Hot Loader v3 / Code Splitting for React Router / PostCSS / CSS Modules / custom *Ducks pattern* app architecture / best practices / Sentry error tracking / Enzyme test environment](https://github.com/nicksp/redux-webpack-es6-boilerplate) :rocket:
* [**react-production-starter** - React boilerplate with isomorphic rendering, async react-router routes, async redux reducers, async data fetching, and code-splitting.](https://github.com/jaredpalmer/react-production-starter) :metal: :fire:
* [**mern.io** - Simple full-stack boilerplate to get started with building isomorphic/universal apps, handles api part and also offers a cli to generate the boilerplate](https://github.com/hashnode/mern-starter) :metal: :fire:
* [**universal-react-redux** - Opinionated Universal React/Redux/Webpack with HMR. Continually updated.](https://github.com/combine/universal-react-redux) :metal: :fire:
* [**react-slingshot** - React Redux Starter Kit with hot reloading, tests and example app](https://github.com/coryhouse/react-slingshot)
* [**react-redux-boilerplate** - React Redux Boilerplate](https://github.com/knowbody/react-redux-boilerplate)
* [**react-boilerplate** - React + Typescript + Sass boilerplate](https://github.com/Keats/react-boilerplate)
* [**react-redux-scaffold** - Combination of redux, react-router and ES6+ support](https://github.com/lcjnil/react-redux-scaffold)
* [**simple-redux-boilerplate** - Simple and guided React, Redux boilerplate w/ Transform HMR! :fire:](https://github.com/tsaiDavid/simple-redux-boilerplate)
* [**reactv** - React Redux example](https://github.com/Amorino/reactv)
* [**redux-boilerplate** - Boilerplate for Redux](https://github.com/ellbee/redux-boilerplate)
* [**react-redux-starter-kit** - Get started with React, Redux, and React-Router.](https://github.com/davezuko/react-redux-starter-kit)
* [**simplest-redux-example** - Simplest Redux + React example for beginners](https://github.com/jackielii/simplest-redux-example)
* [**redux-easy-boilerplate** - React Redux easy boilerplate](https://github.com/anorudes/redux-easy-boilerplate)
* [**dicty-redux** - Starter kit to bootstrap React and Redux (Flux) based web application](https://github.com/dictyBase/dicty-redux)
* [**3ree** - Boilerplate & Demo for Universal Realtime Apps built with React + Redux + RethinkDB + Express](https://github.com/GordyD/3ree)
* [**react_scaffolding** - React + React Router 1.0 + Redux + Webpack & Hot Module Replacement](https://github.com/rafaelchiti/react_scaffolding)
* [**express-redux-sample** - Express-Redux-PassportJs-MySQL Boilerplate](https://github.com/aybmab/express-redux-sample)
* [**redux-blog-example** - Redux-Webpack-Babel Blog Platform boilerplate](https://github.com/GetExpert/redux-blog-example)
* [**redux-undo-boilerplate** - a magical boilerplate with hot reloading and awesome error handling](https://github.com/omnidan/redux-undo-boilerplate)
* [**redux500** - The Redux version of isomorphic500](https://github.com/gpbl/redux500)
* [**redux-demo** - Redux port of SurviveJS - Webpack and React Kanban app](https://github.com/survivejs/redux-demo)
* [**react-redux-universal-hot-example** - A starter boilerplate for a universal webapp using express, react, redux, webpack, and react-hot-loader](https://github.com/erikras/react-redux-universal-hot-example) :metal:
* [**rde** - Reactive Live Programming Environment](https://github.com/levjj/rde)
* [**React Redux Starter Kit** - Yet another React and Redux based web application starter kit](https://github.com/cloudmu/react-redux-starter-kit)
* [**skeleton** - A simple project-stub to show the basic ideas. Also serves you as a quick start for your project (Mori + Redux)](https://github.com/sullenor/skeleton)
* [**browser-redux** - Building Chrome apps and cross-browser extensions with Redux and Webpack](https://github.com/zalmoxisus/browser-redux)
* [**react-for-hipsters-boilerplate** - Fresh boilerplate with brand new hot reloading confing and other hipster stuff](https://github.com/chicoxyzzy/react-for-hipsters-boilerplate)
* [**Documented Koa Redux React Webpack boilerplate**](https://github.com/mezod/boilerplate-koa-redux-react)- The building process of this boilerplate is deeply documented from 0 for learning purposes. [You can find the docs here](http://blog.joanboixados.com/building-a-boilerplate-for-a-koa-redux-react-application-including-webpack-mocha-and-sass/).
* [**err** - Electron, React, Redux-devtools boilerplate for building cross-platform apps.](https://github.com/tuommii/err)
* [**friends-app-redux** - React Redux Universal Hot Example](https://github.com/banzay/friends-app-redux)
* [**isomorphic-redux-app** - Redux Isomorphic App (with async content)](https://github.com/caljrimmer/isomorphic-redux-app)
* [**starter-kit** - Project boilerplate using React, Redux and Uniloc http://unicornstandard.com/packages/boilerplate.html](https://github.com/unicorn-standard/starter-kit)
* [**loopback-redux-react-boilerplate** - A boilerplate for a Redux-React application using LoopBack](https://github.com/tngan/loopback-redux-react-boilerplate)
* [**breko-hub** - **B**abel **Rea**ct **Ko**a **H**ot **U**niversal **B**oilerplate -- A simple, clean and consistent boilerplate for creating universal webapps with universal data fetching and SocketIO integration](https://github.com/tomatau/breko-hub)
* [**React Redux Cordova Boilerplate**](https://github.com/inderps/react-redux-cordova-boilerplate)
* [**react-boilerplate** - Performance orientated, offline-first boilerplate feat. hot-reloading, PostCSS and the best developer experience.](https://github.com/mxstbr/react-boilerplate)
* [**react-webpack-node** - Boilerplate for an universal React + Redux/alt Flux application using Webpack running on a node express server](https://github.com/choonkending/react-webpack-node)
* [**Hapi React Starter Kit** - Universal, Redux, Redis, Socket.io, Intl](https://github.com/Dindaleon/hapi-react-starter-kit)
* [**Universal Redux Template** - A clean, extensible react + redux boilerplate with universal rendering, testing and more](https://github.com/mz026/universal-redux-template)
* [**universal-js** - A universal Javascript starter kit inc. React, Redux, Redux Dev Tools, Universal Redux Router, CSS Modules, hot module reloading, Babel for ES2015+ and ESLint](https://github.com/colinmeinke/universal-js)
* [**redux-react-material-boilerplate** - Simple boilerplate inc. React, Redux, Hot reload and Material-ui](https://github.com/WapGeaR/redux-react-material-boilerplate)
* [**react-redux-starter** - React Redux Starter](https://github.com/exeto/react-redux-starter)
* [**Reduxible** - The Fast and Easy way to make a React + Redux apps](https://github.com/Pitzcarraldo/reduxible)
* [**react-workflow** - A large SPA boilerplate for web development built on top of Facebook's React library,use redux architecture](https://github.com/chen844033231/react-workflow)
* [**ReacToGo** - A simple ES6 boilerplate with Redux architecture and ImmutableJS: Hot Reload, React UI Comp, Firebase, Router](https://github.com/PBRT/reactogo)
* [**React/Redux simple CRUD** with persistent state and local async actions (add a manifest file and you get an offline webapp) ](https://github.com/cristianszwarc/react_crud_localStorage)
* [**StarHackIt** - An React/Redux Node full-stack starter kit with authentication and authorization code](https://github.com/FredericHeem/starhackit)
* [**React Seed** - A barebones scalable directory structure and package.json for facilitating new React + Redux projects. No fat to trim here!](https://github.com/andrewcoelho/react-seed)
* [**React/Redux with Auth boilerplate** - Very simple boilerplate, good for fast creating admin panels / dashboard. Included: React, Redux, ReduxForm, React-Router, Simple Authenticate, Hot Reload and Webpack (with babel) :fire:](https://github.com/WapGeaR/react-redux-boilerplate-auth)
* [**Docker + React/Redux + Node + PostgreSQL** - full stack boilerplate with fully dockerized workflows for development, deployment, testing](https://github.com/Producters/docker-node-react-starter)
* [**Redux universal boilerplate** - boilerplate for react universal application building on flux architecture based on redux implementation.](https://github.com/ufocoder/redux-universal-boilerplate)
* [**React Redux Universal Boilerplate** - An Universal ReactJS/Redux Boilerplate.](https://github.com/kiki-le-singe/react-redux-universal-boilerplate)
* [**react-hot-redux-firebase-starter** - Starter boilerplate for using React/Redux with Firebase 3.0 API, include the new React Hot Loader 3.0 :fire:](https://github.com/douglascorrea/react-hot-redux-firebase-starter)
* [**React Redux Firebase Boilerplate** - Designed for quickly spin up your apps with Firebase, using bunch of awesome new front-end technologies includes webpack build system, hot reloading, routing & sass support. :fire:](https://github.com/btomashvili/react-redux-firebase-boilerplate)
* [**React Universal Saga** - Universal React Starter Kit ft. Redux Saga](https://github.com/xkawi/react-universal-saga)
* [**React Redux SoundCloud Client** - Seed Project for a SoundCloud Client with working Login + Extension Seed Projects](https://github.com/rwieruch/react-redux-soundcloud)
* [**vortigern** - A universal boilerplate for building web applications w/ TypeScript, React, Redux and more.](https://github.com/barbar/vortigern)
* [**angular2-redux-contact-list** - Simple contact list built with Angular 2, Immutable.js and Redux](https://github.com/hdjirdeh/angular2-redux-contact-list)
* [**react-redux-seed** - 使用 React 与 Redux 实现 Universal 渲染的种子工程](https://github.com/lewis617/react-redux-seed)
* [**ARc** - A progressive React starter kit based on Atomic Design with redux, redux-saga and redux-form](https://arc.js.org)
* [**edux** - fast Redux without constants and switches. Actions and reducers are generated from single source.](https://github.com/dogada/edux)
* [**fast-redux** - Redux extension with O(1) speed and dynamic importing of reducers/actions.](https://github.com/dogada/fast-redux)

---

### [React Native - A framework for building native apps using React](https://facebook.github.io/react-native)
* Examples
    * [CarteJaune - An open source Redux/ExponentJS (React Native) app leveraging redux-saga to keep track of your vaccinations](https://github.com/nikgraf/CarteJaune)
    * [noder-react-native - The mobile app of cnodejs.org written in React Native](https://github.com/soliury/noder-react-native)
    * [react-native-redux-counter](https://github.com/hzyIO/react-native-redux-counter)
    * [react-native-counter-ios-android](https://github.com/chentsulin/react-native-counter-ios-android)
    * [react-native-redux-groceries - An example app using React Native, Redux, Firebase, and AsyncStorage for offline data](https://github.com/bruz/react-native-redux-groceries)
    * [react-native-sound-cloud](https://github.com/fraserxu/soundredux-native)
    * [snowflake - mobile app starter: Login, Logout, Reset Password, Update Profile, Hot Reload](https://github.com/bartonhammond/snowflake)
    * [uestc-bbs-react-native - An iOS client for http://bbs.uestc.edu.cn/ written in React Native with Redux](https://github.com/just4fun/uestc-bbs-react-native)
    * [movies-redux - redux implementation of react-native movies example that is included in react-native source](https://github.com/nara/movies-redux)
    * [react-native-redux-todo-list - A sample todo list app developed by using react-native and redux](https://github.com/uiheros/react-native-redux-todo-list)

---

### [React - A JavaScript library for building user interfaces](http://facebook.github.io/react)
* Containers
    * [**reapop** - A React & Redux notifications system](https://github.com/LouisBarranqueiro/reapop)
    * [**react-redux-modal-provider** - Redux-powered abstract React modal state manager](https://github.com/myaskevich/react-redux-modal-provider)
    * [**react-redux-modal-flex** - Accessible modal dialog component for React, easy to install and use with Redux](https://github.com/tronghiep92/react-redux-modal-flex)

* Middlewares

   * [**redux-cheerio** - Make HTTP requests and then parse the responses with jQuery selectors using Cheerio](https://github.com/therewillbecode/redux-cheerio)
    * [**redux-reporter** - Report actions & metadata to 3rd party providers, extremely useful for analytics and error handling (New Relic, Sentry, Adobe DTM, Keen, etc.)](https://github.com/ezekielchentnik/redux-reporter)
    * [**redux-transduce** - Transducer utilities for Redux](https://github.com/acdlite/redux-transduce)
    * [**redux-actions** - Flux Standard Action utilities for Redux](https://github.com/acdlite/redux-actions)
    * [**redux-promise** - FSA-compliant promise middleware for Redux](https://github.com/acdlite/redux-promise)
    * [**redux-sync-promise** - Middleware for writing asynchronous actions in synchronous style](https://github.com/shanhaichik/redux-sync-promise)
    * [**redux-simple-promise** - FSA-compliant promise middleware for Redux with simple behaviour with minimal boilerplate declarations](https://github.com/alanrubin/redux-simple-promise)
    * [**redux-async** - FSA-compliant promise property middleware for Redux](https://github.com/symbiont-io/redux-async)
    * [**redux-async-queue** - Manage queues of thunk actions](https://github.com/zackargyle/redux-async-queue)
    * [**redux-async-initial-state** - Set initial Redux state asynchronously](https://github.com/KELiON/redux-async-initial-state)
    * [**redux-await** - Manage async redux actions sanely](https://github.com/kolodny/redux-await)
    * [**redux-rx** - RxJS utilities for Redux](https://github.com/acdlite/redux-rx)
    * [**reselect** - Selector library for Redux like in NuclearJS](https://github.com/faassen/reselect)
    * [**react-redux** - React bindings for Redux](https://github.com/rackt/react-redux)
    * [**redux-react-router** - Redux bindings for React Router – keep your router state inside your Redux store](https://github.com/acdlite/redux-react-router)
    * [**redux-promise-middleware** - Redux middleware for resolving and rejecting promises](https://github.com/pburtchaell/redux-promise-middleware)
    * [**redux-thunk** - Thunk middleware for Redux](https://github.com/gaearon/redux-thunk)
    * [**redux-batched-updates** - Batch React updates that occur as a result of Redux dispatches, to prevent cascading renders.](https://github.com/acdlite/redux-batched-updates)
    * [**redux-combine-actions** - Redux middleware that allows you to easy combine actions and dispatch them sequentially](https://github.com/itsmepetrov/redux-combine-actions)
    * [**redux-catch-promise** - Extended replacement of redux-thunk middleware to supporting async-await functions and implement server-side rendering for React components with async state](https://github.com/DenisIzmaylov/redux-catch-promise)
    * [**redux-delegator** - Compose redux reducers in a structured way](https://github.com/lapanoid/redux-delegator)
    * [**routex** - Simple router for Redux universal applications. Can be used with React too](https://github.com/michalkvasnicak/routex)
    * [**redux-persist-store** - Persist and rehydrate a redux store](https://github.com/rt2zz/redux-persist-store)
    * [**adrenaline** - React bindings for Redux with Relay in mind](https://github.com/gyzerok/adrenaline)
    * [**redux-localstorage** - Store enhancer that syncs (a subset) of your Redux store state to localstorage.](https://github.com/elgerlambert/redux-localstorage)
    * [**redux-storage** - Persistence layer for redux with flexible backends](https://github.com/michaelcontento/redux-storage)
    * [**redux-pouchdb** - sync store state to pouchdb](https://github.com/vicentedealencar/redux-pouchdb)
    * [**redux-vstack-router** - Helpers to bind vstack-router to redux](https://github.com/vslinko/redux-vstack-router)
    * [**redux-create-store**](https://github.com/phated/redux-create-store)
    * [**redux-batched-subscribe** - Batch calls to subscribe handlers with a custom function, including debouncing or React batched updates.](https://github.com/tappleby/redux-batched-subscribe)
    * [**redux-logger** - Logger middleware for Redux](https://github.com/fcomb/redux-logger)
    * [**redux-node-logger** - A Redux Logger for Node Environments](https://github.com/low-ghost/redux-node-logger)
    * [**redux-diff-logger** - Diff logger between states for Redux](https://github.com/fcomb/redux-diff-logger)
    * [**redux-debug** - debug(...) middleware for Redux](https://github.com/lapwinglabs/redux-debug)
    * [**redux-requests** - Avoid issuing duplicate HTTP requests](https://github.com/idolize/redux-requests)
    * [**redux-owl** - Redux One Way Linking](https://github.com/rt2zz/redux-owl)
    * [**redux-act** - An opinionated lib to create actions and reducers for Redux](https://github.com/pauldijou/redux-act)
    * [**redux-act-async** - Reducing boilerplate when creating asynchronous actions in Redux](https://github.com/FredericHeem/redux-act-async)
    * [**redux-raven-middleware** - Redux middleware for sending error reports to Sentry through raven-js](https://github.com/ngokevin/redux-raven-middleware)
    * [**react-redux-persist-sentry-middleware** - Redux middleware for sending error reports along with persisted data as payload to Sentry through raven-js](https://github.com/rishantagarwal/react-redux-persist-sentry-middleware)
    * [**redux-routing** - Universal routing built on top of redux](https://github.com/callum/redux-routing)
    * [**redux-undo** - Simple undo/redo functionality for redux state containers](https://github.com/omnidan/redux-undo)
    * [**rn-redux-mixpanel** - Configurable Redux middleware that sends your actions & user profile data to Mixpanel](https://github.com/danscan/rn-redux-mixpanel)
    * [**redux-falcor** - Connect your redux front-end to your falcor back-end](https://github.com/ekosz/redux-falcor)
    * [**redux-analytics** - Trigger analytics events based on your event metadata](https://github.com/markdalgleish/redux-analytics)
    * [**redux-ignore** - Ignore redux actions by array or filter function](https://github.com/omnidan/redux-ignore)
    * [**redux-recycle** - Reset the redux state on certain actions](https://github.com/omnidan/redux-recycle)
    * [**re-notif**](https://github.com/indexiatech/re-notif) A notification center based on React & Redux.
    * [**redux-lunr** - Make your redux store searchable with Lunr.js](https://github.com/swennemans/redux-lunr)
    * [**redux-ensure-fsa** - Development middleware to check for FSA-compliant actions](https://github.com/meadow/redux-ensure-fsa)
    * [**redux-pagan** - internationalization via redux](https://github.com/alexkuz/redux-pagan)
    * [**redux-debounce**](//github.com/wyze/redux-debounce) - Debounce your actions!
    * [**redux-future** - FSA-compliant future monad middleware for redux](https://github.com/stoeffel/redux-future)
    * [**redux-io** - FSA-compliant io monad middleware for redux](https://github.com/stoeffel/redux-io)
    * [**redux-either** - FSA-compliant either monad middleware for redux](https://github.com/stoeffel/redux-either)
    * [**redux-timeout** - Trigger actions based on timeouts](https://github.com/gpfunk/redux-timeout)
    * [**redux-observable-middleware** - Redux middleware for subscribing to observables](https://github.com/d6u/redux-observable-middleware)
    * [**redux-observable** - RxJS 5-based middleware for Redux. Compose and cancel actions as epics.](https://github.com/redux-observable/redux-observable)
    * [**redux-deferred** - Redux middleware for jQuery Deferred Object](https://github.com/wyvernnot/redux-deferred)
    * [**redux-task** - A simple Side Effects manager for redux](https://github.com/sskyy/redux-task)
    * [**redux-gen** - Generator based middleware for redux](https://github.com/weo-edu/redux-gen)
    * [**redux-authentication** - Authentication component for Redux](https://github.com/Jackong/redux-authentication)
    * [**socket.io-redux** - Redux middleware to emit action via socket.io](https://github.com/sergiodxa/socket.io-redux)
    * [**redux-catch** - Error catcher middleware for Redux reducers and middlewares](https://github.com/sergiodxa/redux-catch)
    * [**redux-elm-middleware** - Elm middleware for redux](https://github.com/stoeffel/redux-elm-middleware)
    * [**redux-api-middleware** - Redux API middleware based on the real-world example](https://github.com/agraboso/redux-api-middleware)
    * [**redux-mediaquery** - Redux ActionCreator to put responsive-design breakpoints in your store](https://github.com/Yaska/redux-mediaquery)
    * [**redux-amrc** - Redux async middleware and reducer creator](https://github.com/lewis617/redux-amrc)
    * [**redux-fetch-middleware** - Redux middleware that help user to treat simple request via fetch api](https://github.com/zslucky/redux-fetch-middleware)
    * [**redux-url** - A Redux middleware for synchronizing the URL with the state](https://github.com/jedirandy/redux-url)
    * [**redux-most** - Most.js based middleware for Redux. Handle async actions with monadic streams & reactive programming.](https://github.com/joshburgess/redux-most)
    * [**redux-cookies-middleware** - a Redux middleware which syncs a subset of your Redux store state with cookies.](https://github.com/grofers/redux-cookies-middleware/)
    * [**redux-cycles** - Handle async actions with functional and reactive programming.](
    https://github.com/cyclejs-community/redux-cycles)

* Tools
    * [**actionware** - Redux with less boilerplate + error/busy status for every action](https://github.com/wellguimaraes/actionware)
    * [**reactotron** - Control, monitor, and instrument your React Native apps from the comfort of your TTY](https://github.com/skellock/reactotron)
    * [**redux-test-recorder** - Redux test recorder is a redux middleware + included component for automagically generating tests for your reducers based on the actions in your app](https://github.com/conorhastings/redux-test-recorder)
    * [**redux-devtools** - DevTools for Redux with hot reloading, action replay, and customizable UI](https://github.com/gaearon/redux-devtools)
    * [**react-router-redux** - Ruthlessly simple bindings to keep react-router and redux in sync](https://github.com/rackt/react-router-redux)
    * [**redux-tiny-router** - A Router made for Redux, stop using the router as a controller it's just state!](https://github.com/Agamennon/redux-tiny-router)
    * [**redux-devtools-gentest-plugin** - Generate mocha like tests from redux-devtools session](https://github.com/lapanoid/redux-devtools-gentest-plugin)
    * [**generator-redux** - CLI tools for Redux: next-gen functional Flux/React with devtools](https://github.com/banderson/generator-redux)
    * [**generator-reactapp** - Yeoman generator for react app with redux](https://github.com/Jackong/generator-reactapp)
    * [**generator-redux-app** - Scaffold out a redux app with counter example and react-router](https://github.com/chentsulin/generator-redux-app)
    * [**redux-loader** - A high order component for Redux. This components loads resources and passes them to the child components via props](https://github.com/sporto/redux-loader)
    * [**asyncdataloader-react** -AsyncDataLoader is a React Higher Order Component which takes responsibility of fetching data of the Wrapped Component and offers many options like showing an interface preview of the Wrapped Component while data is being fetched, refetch data after specified time.](https://github.com/harshitkumar31/asyncdataloader-react)
    * [**redux-rest** - Automatically create Flux action constants, action creators and Redux reducers for your REST API](https://github.com/Kvoti/redux-rest)
    * [**react-reach** - A library to communicate with Graphql through Redux](https://github.com/kennetpostigo/react-reach)
    * [**redux-api** - Flux REST API for redux infrastructure](https://github.com/lexich/redux-api)
    * [**redux-store-validator** - Add validation to your Redux reducers](https://github.com/alixander/redux-store-validator)
    * [**firedux** - Firebase + Redux for ReactJS](https://github.com/adjohnson916/firedux)
    * [**vstack-router** - Universal router](https://github.com/vslinko/vstack-router)
    * [**redux-ecommerce** - E-commerce flux with redux](https://github.com/Tom-Alexander/redux-ecommerce)
    * [**redux-form** - An ES7 decorator for forms using Redux and React](https://github.com/erikras/redux-form)
    * [**redux-form-validation** - Form validation for controlled & uncontrolled inputs](https://github.com/posabsolute/redux-form-validator)
    * [**simple-redux-form** - A tiny redux-form alternative Higher Order Component for forms](https://github.com/mihirsoni/simple-redux-form).
    * [**redux-slider-monitor** - A custom monitor for Redux DevTools to replay recorded Redux actions](https://github.com/calesce/redux-slider-monitor)
    * [**updeep** - Easily update nested frozen objects and arrays in a declarative and immutable manner](https://github.com/substantial/updeep)
    * [**redux-immutable** - Streamlines use of Immutable.js with Redux reducers.](https://github.com/gajus/redux-immutable)
    * [**redux-import-export-monitor** - A monitor for copying your serialized action log to the clipboard, as well as pasting it in from somewhere else](https://github.com/lapanoid/redux-import-export-monitor)
    * [**icedam** - Just-in-time immutability: freezes data sent to views.](https://github.com/winkler1/icedam)
    * [**react-inline-grid** - Predictable flexbox based grid for React using Redux and Immutable-js.](https://github.com/broucz/react-inline-grid)
    * [**redux-easy-actions** - Sugar library for creating Redux or Flux actions](https://github.com/grigory-leonenko/redux-easy-actions)
    * [**redux-mount** - Mount state data and change its state values on the fly](https://github.com/popc0rn/redux-mount)
    * [**redux-multi** - Dispatch multiple actions from one action creator](https://github.com/ashaffer/redux-multi)
    * [**immu** - A tiny, fail-fast, lazy, immutable Javascript objects library](https://github.com/scottcorgan/immu)
    * [**Generate standard action creators and reducers for CRUD applications**](https://github.com/Versent/redux-crud)
    * [**Redux & ImmutableJs** - Integration of Redux & ImmutableJs that 100% conforms Redux standards](https://github.com/indexiatech/redux-immutablejs)
    * [**redux-tcomb** - Immutable and type-checked state and actions for Redux](https://github.com/gcanti/redux-tcomb)
    * [**redux-react-router-transitions** - Attach react-router transitions to arbitrary actions](https://github.com/johanneslumpe/redux-react-router-transitions)
    * [**redux-optimist** - Optimistically apply actions that can be later commited or reverted.](https://github.com/ForbesLindesay/redux-optimist)
    * [**redux-devtools-diff-monitor** - Redux DevTools – Diff Monitor](https://github.com/whetstone/redux-devtools-diff-monitor)
    * [**redux-store-visualizer** - Visualize Redux store in real time](https://github.com/romseguy/redux-store-visualizer)
    * [**generator-redux** - CLI tools for Redux: next-gen functional Flux/React with devtools](https://github.com/banderson/generator-redux)
    * [**generator-reactapp** - Yeoman generator for react app with redux](https://github.com/Jackong/generator-reactapp)
    * [**redux-viewmodel** - ViewModel wrapping for Redux & React](https://github.com/tdzl2003/redux-viewmodel)
    * [**redux-utils** - Utility functions for Redux](https://github.com/newtack/redux-utils)
    * [**multireducer** - A utility to wrap many copies of a single Redux reducer into a single key-based reducer](https://github.com/erikras/multireducer)
    * [**subdivide** - User defined UI layout: Every pane can be subdivided and any widget assigned to any pane](https://github.com/philholden/subdivide)
    * [**replux** - Self contained components and enhancements for Redux](https://github.com/gregthebusker/replux)
    * [**redux-immutable-utils** - Utilities for using Immutable with Redux](https://github.com/aparticka/redux-immutable-utils)
    * [**recompose** - A microcomponentization toolkit for React](https://github.com/acdlite/recompose)
    * [**redux-lift** - Lifting for Redux](https://github.com/izaakschroeder/redux-lift)
    * [**redux-router5** - router5 integration with Redux](https://github.com/router5/redux-router5)
    * [**redux-devtools-extension** - Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
    * [**universal-redux-router** - A very simple router for Redux and React that works on both server and client](https://github.com/colinmeinke/universal-redux-router)
    * [**redux-watch** - Watch/monitor for state changes on an object path](https://github.com/jprichardson/redux-watch)
    * [**redux-devtools-filterable-log-monitor** - Filterable tree view monitor for Redux DevTools](https://github.com/bvaughn/redux-devtools-filterable-log-monitor)
    * [**redux-flash-notification** -  A flash notification component for Redux](https://github.com/posabsolute/redux-flash-notification)
    * [**redux-saga** - An alternative side effect model for Redux apps](https://github.com/yelouafi/redux-saga)
    * [**remote-redux-devtools** - Use Redux DevTools remotely for React Native, hybrid, desktop and server side Redux apps](https://github.com/zalmoxisus/remote-redux-devtools)
    * [**redux-devtools-dispatch** - Dispatch your actions manually to test if your app reacts well](https://github.com/YoruNoHikage/redux-devtools-dispatch)
    * [**redux-loop** - Sequence your effects naturally and purely by returning them from your reducers](https://github.com/raisemarketplace/redux-loop)
    * [**redux-orm** - A small, simple and immutable ORM to manage data in your Redux store](https://github.com/tommikaikkonen/redux-orm)
    * [**redux-bacon** - Utilities for attaching Bacon.js to Redux](https://github.com/aparticka/redux-bacon)
    * [**rereduce** - Reducer library for Redux](https://github.com/slorber/rereduce)
    * [**redux-decorators** - A ridiculously good syntax for working with Redux and TypeScript. Currently limited to Angular 2 but could potentially be used elsewhere](https://github.com/KarlPurk/redux-decorators)
    * [**redux-test-reducer** - Simple and clean testing mechanism for Redux reducers](https://github.com/amsardesai/redux-test-reducer)
    * [**redux-devtools-inspector** - Another Redux DevTools Monitor](https://github.com/alexkuz/redux-devtools-inspector)
    * [**redux-ava** - Helpers for writing Redux tests in AVA](https://github.com/sotojuan/redux-ava)
    * [**redux-cli** - An opinionated CLI for building redux/react apps quicker](https://github.com/SpencerCDixon/redux-cli)
    * [**redux-saga-rxjs** - RxJS implementation of Saga pattern for redux](https://github.com/salsita/redux-saga-rxjs)
    * [**redux-actions-assertions** - Assertions for redux actions testing](https://github.com/dmitry-zaets/redux-actions-assertions)
    * [**redux-duck** - Helper function to create Redux modules using the ducks-modular-redux proposal](https://github.com/sergiodxa/redux-duck)
    * [**redux-dispatch-cli** - A CLI tool for Redux remote dispatch. Used in remote-redux-devtools](https://github.com/jhen0409/redux-dispatch-cli)
    * [**redux-immutable-reducer** - Immutable reducer states with Redux](https://github.com/zackargyle/redux-immutable-reducer)
    * [**redux-bootstrap** - configure React + React-Router + Redux + Immutable.js with one function!](https://github.com/redux-bootstrap/redux-bootstrap)
    * [**redux-director** - Redux bindings to director router](https://github.com/mandeepbrar/redux-director)
    * [**redux-q** - Provides a way to queue callbacks until an action is dispatched](https://github.com/ConciergeAuctions/redux-q)
    * [**redux-apist** - Creator API actions for redux-thunk](https://github.com/exeto/redux-apist)
    * [**reswitch** — Write reducers with less boilerplate](https://github.com/chiefGui/reswitch)
    * [**redux-autoform** - Create Redux-Forms dynamically out of metadata](https://github.com/redux-autoform/redux-autoform)
    * [**redux-ship** - Composable, testable and typable side effects](https://github.com/clarus/redux-ship)
    * [**entman** - A simple library to manage normalizr entities in a Redux store](https://github.com/Drawbotics/entman)
    * [**yax** - Yet another store using redux and inspired by vuex](https://github.com/d-band/yax)
    * [**listate** - Library to listen/observe/watch changes of Redux store state](https://github.com/gamtiq/listate)
    * [**redux-reducer-async** - Create redux reducers for async behaviors of multiple actions.](https://github.com/AndersDJohnson/redux-reducer-async)
    * [**redux-autoreducers** - Redux Auto reducers generator.](https://github.com/oxyno-zeta/redux-autoreducers)


* Frameworks
    * [**Jumpsuit** - A powerful & efficient React framework. Jump in. Zip up. Build great apps.](https://github.com/jumpsuit/jumpsuit)
    * [**Jumpstate** - Simple and powerful state management for Redux](https://github.com/jumpsuit/jumpstate)
    * [**dva** - Front-end framework based on react, redux, react-redux, react-router and redux-saga.](https://github.com/sorrycc/dva)
    * [**Vdux** - World's smallest framework.  Stateless Virtual DOM <-> Redux](https://github.com/ashaffer/vdux)
    * [**Esex** - Full-stack Universal JavaScript Framework (Redux+RxJs)](https://github.com/esex/esex)
    * [**Ripster**](https://github.com/vslinko/ripster)
    * [**Este** - The most complete minimal dev stack / boilerplate for React & Redux universal web apps](https://github.com/este/este)
    * [**stardux** - Functional DOM containers based on starplate, IncrementalDOM, and redux](https://github.com/littlstar/stardux)
    * [**nux** - A Push-Based Functional Reactive Web Application Framework](https://github.com/marknutter/nux)
    * [**Keo** - Plain functions for a more functional Deku approach to creating React components, with functional goodies such as compose, memoize, etc... for free](https://github.com/Wildhoney/Keo)
    * [**plait** - A minimal JavaScript framework for building reactive web components](https://github.com/wildlyinaccurate/plait)
    * [**reactuate** — A React/Redux stack (not a boilerplate!) with a focus on Domain-Driven Design](https://github.com/reactuate/reactuate)
    * [**meatier** - Like meteor, but meatier](https://github.com/mattkrick/meatier)
    * [**relax** - New generation CMS on top of React, Redux and GraphQL](https://github.com/relax/relax)
    * [**lovli.js** - A boilerplate for developing react+redux applications with rethinkdb/horizon as realtime database and express for the server](https://github.com/flipace/lovli.js)
    * [**kea** - Well-readable, self-documenting and easily refactorable framework that brings your data to life! Comes with scaffolding tools](https://github.com/mariusandra/kea-logic) :bird:
    * [**Feeble** - A framework built on top of React/Redux/redux-saga which aims to make building React/Redux applications easier and better.](https://github.com/tianche/feeble)
    * [**Conventional-Redux** - A wrapper for react-redux which provides API based on convention over configuration pattern.](https://github.com/mjaneczek/conventional-redux)
    * [**redux-react-i18n** - An i18n solution for redux/react✌🏿✊🏽🤘🏻](https://github.com/derzunov/redux-react-i18n)
    * [**redux-action-host** - Redux middleware to add the hostname of the originating computer to action metadata](https://github.com/sabrehagen/redux-action-host)
    * [**Mirror** - A simple and powerful React framework with minimal API and zero boilerplate](https://github.com/mirrorjs/mirror)

---

### [Examples](examples/README.md)

---

### Similar libraries
   * [**flux-ts** - A small flux implementation heavily inspired by redux](https://github.com/BobBuehler/flux-ts)
   * [**chopped-redux** - A very small Flux implementation based on Redux](https://github.com/acstll/chopped-redux)
   * [**fluxette** - Minimalist, functional, and concise Flux](https://github.com/edge/fluxette)
   * [**rx-redux** - A reimplementation of redux using RxJS](https://github.com/jas-chen/rx-redux)
   * [**understate** - A simple state manager](https://github.com/johnhenry/understate)
   * [**refer** - Redux-like library for handling global state on functional style](https://github.com/Lucifier129/refer)
   * [**bobflux** - Bobflux is pure functional implementation of FLUX pattern and is fitted to Bobril](https://github.com/karelsteinmetz/bobflux)
   * [**mobx** - Simple, scalable state management](https://github.com/mobxjs/mobx)

---

### [Deku - Functional view library for building UI components as an alternative to React](https://github.com/dekujs/deku)
* Examples
    * [Deku + Express + Redux + Crossroads Router](https://github.com/nivanson/deku-redux-universal-hot-example)
    * [deku-redux - Bindings for redux in deku (Standalone plugin)](https://github.com/troch/deku-redux)
)

---

### [Incremental DOM - Incremental DOM is a library for building up DOM trees and updating them in-place when data changes](http://google.github.io/incremental-dom)
* Examples
    * [Incremental DOM + Redux Flux = Todo App](https://github.com/joshthecoder/idom-redux-todomvc-app)

---

### [WinJS - Windows Library for JavaScript](http://try.buildwinjs.com)
* Examples
    * [react-redux-winjs-example](https://github.com/unindented/react-redux-winjs-example)

---

### [Angular - HTML enhanced for web apps](https://angularjs.org)
* Examples
    * [Angular + Typescript + Redux](https://github.com/wbuchwalter/tsRedux)
    * [ng-redux - Standalone plugin](https://github.com/wbuchwalter/ng-redux)
    * [redux-ui-router - ngRedux middleware for Angular UI Router](https://github.com/neilff/redux-ui-router)
    * [Todo app with ng-redux • ES6 • Webpack](https://github.com/r-park/todo-angular-redux)
    * [https://github.com/InfomediaLtd/angular2-redux-example](https://github.com/InfomediaLtd/angular2-redux-example)
    * [https://github.com/tomusdrw/angular2-redux-example](https://github.com/tomusdrw/angular2-redux-example)

---

### [Angular 2 - One framework. Mobile and desktop](https://angular.io/)
* Examples
    * [angular2-redux-example - Example project for using pure Redux with Angular 2 and TypeScript](https://github.com/InfomediaLtd/angular2-redux-example)
    * [@angular-redux/store - Angular 2 bindings for Redux](https://github.com/angular-redux/store)
    * [angular2-redux - Wrapper components for using Redux in an Angular2 application](https://github.com/InfomediaLtd/angular2-redux)
    * [ng2redux - Angular 2 bindings for Redux implemented with TypeScript and decorators](https://github.com/forforeach/ng2redux)

---

### [Vue - A library for building modern web interfaces](http://vuejs.org)
* Examples
    * [Revue - Redux binding for Vue](https://github.com/revue/revue)
    * [Vue + Redux](https://github.com/yang-wei/vue-flux)
    * [Meteor + Vue + Redux](https://github.com/zhongqf/meteor-vue-redux-example)

---

### [Polymer - Build modern apps using web components](https://www.polymer-project.org)
* Examples
    * [polymer-redux](https://github.com/tur-nr/polymer-redux)
    * [redux-store-element](https://github.com/lastmjs/redux-store-element)

---

### [Ember - A framework for creating ambitious web applications](http://emberjs.com)
* Examples

---

### [Meteor - Build apps that are a delight to use, faster than you ever thought possible](https://www.meteor.com)
* Examples
   * [meteor-react-redux-example](https://github.com/zhongqf/meteor-react-redux-example)
   * [meteor-flux-leaderboard](https://github.com/AdamBrodzinski/meteor-flux-leaderboard/tree/redux)

---

### [Mithril - A Javascript Framework for Building Brilliant Applications](http://mithril.js.org/)
* Examples
    * [mithril-redux-starter-hmr](https://github.com/mijime/mithril-redux-starter-hmr)

---


### [Backbone - Give your JS App some Backbone with Models, Views, Collections, and Events](http://backbonejs.org/)
* Tools
    * [backbone-redux — The easy way to keep your backbone collections and redux store in sync](https://github.com/redbooth/backbone-redux)

---

### [Aurelia - is a next gen JavaScript client framework for mobile, desktop and web that leverages simple conventions to empower your creativity](http://aurelia.io)
* Examples
    * [aurelia-redux-todo - An implementation of the Redux todo demo app using Aurelia](https://github.com/voidberg/aurelia-redux-todo)
    * [Managing State in Aurelia: How to Use Aurelia with Redux](https://www.sitepoint.com/managing-state-aurelia-with-redux/)

___

### [Riot - A React-like user interface micro-library](http://riotjs.com)
* Examples
    * [riotredux-budget](https://github.com/remyhonig/riotredux-budget)
    * [app-skeleton](https://github.com/zesty-io/app-skeleton)

___

### [Electron - Build cross platform desktop apps with web technologies](http://electron.atom.io/)
* [electron-react-boilerplate (Electron + Redux + Hot Reload)](https://github.com/chentsulin/electron-react-boilerplate)

___

### [A-Frame - A web framework for building VR experiences](https://aframe.io)
* [aframe-redux-component](https://github.com/ngokevin/kframe/tree/master/components/redux)

___

### Chrome Extensions
* [Redux Chrome Extension](https://github.com/Dharmoslap/redux-chrome-extension)
* [React Chrome Extension Boilerplate (Webpack + Redux + Babel and etc](https://github.com/jhen0409/react-chrome-extension-boilerplate)

* Examples
    * [Pumgrana Plugin](https://github.com/Pumgrana/plugin)

## Ruby on Rails Resources
* [React Webpack Rails Tutorial Using Redux](https://github.com/shakacode/react-webpack-rails-tutorial)
* [react_on_rails gem](https://github.com/shakacode/react_on_rails)

## Other languages

* .NET
    * [https://github.com/GuillaumeSalles/redux.NET](https://github.com/GuillaumeSalles/redux.NET)
    * [https://github.com/pshomov/reducto](https://github.com/pshomov/reducto)

* Java
    * [https://github.com/glung/redux-java](https://github.com/glung/redux-java)
    * [https://github.com/trikita/jedux](https://github.com/trikita/jedux)
    * [https://github.com/izumin5210/Droidux](https://github.com/izumin5210/Droidux)

* Swift
    * [https://github.com/ReSwift/reduxSwift](https://github.com/ReSwift/reduxSwift)
    * [https://github.com/Swift-Flow/Swift-Flow](https://github.com/Swift-Flow/Swift-Flow)
    * [https://github.com/ReSwift/ReSwift](https://github.com/ReSwift/ReSwift) and [docs](http://reswift.github.io/ReSwift/master)

* Purescript
    * [https://github.com/brakmic/purescript-redux](https://github.com/brakmic/purescript-redux)
    * [https://github.com/faber/purescript-purdux](https://github.com/faber/purescript-purdux)





## Learning Material

- **Redux's concepts**

  [Redux official documentation](http://redux.js.org/) does a great job at explaining Redux's core principles.

- **Why immutable data structures**

  The [guide on performance](https://facebook.github.io/react/docs/advanced-performance.html) of React's official documentation explains well what immutable data structures are and why they play an important role.

- **Side Effects**

  [Redux Loop's readme](https://github.com/redux-loop/redux-loop) gives a good insight on Side Effects in the context of Redux.

Reading the aforementioned material will get you a good start for writing apps with Redux.
If you are curious for more, check out following resources.

- **Functional Programming - Basics**

  This [post](http://jaysoo.ca/2016/01/13/functional-programming-little-ideas/) goes over basic concepts of functional programming while building a YouTube instant search demo app.

- **Reactive Programming**

  This [introduction to Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) explains Reactive Programming with clarity.

- **Functional Programming - Going beyond**

  Well written [article](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504) that talks about interesting computer science concepts implemented in functional languages and how these apply to JavaScript.

- **Monads**

  Curious about monads? Wikipedia gives a good [overview on monads](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) and [this article](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html) explains monads in more details with graphics and simple examples.

## Community

- [Reddit](https://www.reddit.com/r/reduxjs/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/redux)
- [Discord](https://discord.gg/0ZcbPKXt5bZ6au5t)
- [Slack](http://slack.redux.io/)
- [Gitter](https://gitter.im/reactjs/redux)
- [`#rackt` on freenode](https://webchat.freenode.net/)

# Getting Started with React Redux | React Redux

> Introduction > Getting Started: First steps with React Redux

[React Redux](https://github.com/reduxjs/react-redux) is the official [React](https://reactjs.org/) UI bindings layer for [Redux](https://redux.js.org/). It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

## Installation[#](#installation "Direct link to heading")

React Redux 7.1+ requires **React 16.8.3 or later**, in order to make use of React Hooks.

### Using Create React App[#](#using-create-react-app "Direct link to heading")

The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of **[Redux Toolkit](https://redux-toolkit.js.org/)** and React Redux's integration with React components.

### An Existing React App[#](#an-existing-react-app "Direct link to heading")

To use React Redux with your React app, install it as a dependency:

You'll also need to [install Redux](https://redux.js.org/introduction/installation) and [set up a Redux store](https://redux.js.org/recipes/configuring-your-store/) in your app.

If you are using TypeScript, the React Redux types are maintained separately in DefinitelyTyped, but included as a dependency of the `react-redux` package, so they should be installed automatically. If you still need to install them manually, run:

## API Overview[#](#api-overview "Direct link to heading")

### `Provider`[#](#provider "Direct link to heading")

React Redux includes a `<Provider />` component, which makes the Redux store available to the rest of your app:

### Hooks[#](#hooks "Direct link to heading")

React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store.

`useSelector` reads a value from the store state and subscribes to updates, while `useDispatch` returns the store's `dispatch` method to let you dispatch actions.

## Learning React Redux[#](#learning-react-redux "Direct link to heading")

### Learn Modern Redux Livestream[#](#learn-modern-redux-livestream "Direct link to heading")

Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.

See [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) for a transcript and links to the example app source.

## Help and Discussion[#](#help-and-discussion "Direct link to heading")

The **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** of the **[Reactiflux Discord community](http://www.reactiflux.com/)** is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!

You can also ask questions on [Stack Overflow](https://stackoverflow.com/) using the **[#redux tag](https://stackoverflow.com/questions/tagged/redux)**.

## Docs Translations[#](#docs-translations "Direct link to heading")

- [Portuguese](https://fernandobelotto.github.io/react-redux)

[Source](https://react-redux.js.org/introduction/getting-started)

## [Introduction](#introduction "Direct link to heading")

Welcome to the Redux Essentials tutorial! **This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices**. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here.

In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in [Part 2: Redux App Structure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/essentials/part-2-app-structure) we'll examine a basic React + Redux app to see how the pieces fit together.

Starting in [Part 3: Basic Redux Data Flow](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/tutorials/essentials/part-3-data-flow), we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux.

### [How to Read This Tutorial](#how-to-read-this-tutorial "Direct link to heading")

This page will focus on showing you _how_ to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly.

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already:

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

You should make sure that you have the React and Redux DevTools extensions installed in your browser:

- React DevTools Extension:
  - [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [React DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- Redux DevTools Extension:
  - [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - [Redux DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

## [What is Redux?](#what-is-redux "Direct link to heading")

It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### Why Should I Use Redux?[#](#why-should-i-use-redux "Direct link to heading")

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

### When Should I Use Redux?[#](#when-should-i-use-redux "Direct link to heading")

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

**Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.**

### Redux Libraries and Tools[#](#redux-libraries-and-tools "Direct link to heading")

Redux is a small standalone JS library. However, it is commonly used with several other packages:

#### React-Redux[#](#react-redux "Direct link to heading")

Redux can integrate with any UI framework, and is most frequently used with React. [**React-Redux**](https://react-redux.js.org/) is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

#### Redux Toolkit[#](#redux-toolkit "Direct link to heading")

[**Redux Toolkit**](https://redux-toolkit.js.org/) is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

#### Redux DevTools Extension[#](#redux-devtools-extension "Direct link to heading")

The [**Redux DevTools Extension**](https://github.com/zalmoxisus/redux-devtools-extension) shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".

## Redux Terms and Concepts[#](#redux-terms-and-concepts "Direct link to heading")

Before we dive into some actual code, let's talk about some of the terms and concepts you'll need to know to use Redux.

### State Management[#](#state-management "Direct link to heading")

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

It is a self-contained app with the following parts:

- The **state**, the source of truth that drives our app;
- The **view**, a declarative description of the UI based on the current state
- The **actions**, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of **"one-way data flow"**:

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

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

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly.

The logic inside reducer functions typically follows the same series of steps:

- Check to see if the reducer cares about this action
  - If so, make a copy of the state, update the copy with new values, and return it
- Otherwise, return the existing state unchanged

Here's a small example of a reducer, showing the steps that each reducer should follow:

Reducers can use any kind of logic inside to decide what the new state should be: `if/else`, `switch`, loops, and so on.

#### Detailed Explanation: Why Are They Called 'Reducers?'

The [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

`Array.reduce()` takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:

- `previousResult`, the value that your callback returned last time
- `currentItem`, the current item in the array

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

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

For Redux specifically, we can break these steps into more detail:

- Initial setup:
  - A Redux store is created using a root reducer function
  - The store calls the root reducer once, and saves the return value as its initial `state`
  - When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
- Updates:
  - Something happens in the app, such as a user clicking a button
  - The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/increment'})`
  - The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
  - The store notifies all parts of the UI that are subscribed that the store has been updated
  - Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
  - Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## What You've Learned[#](#what-youve-learned "Direct link to heading")

Redux does have a number of new terms and concepts to remember. As a reminder, here's what we just covered:

##### Summary

- **Redux is a library for managing global application state**
  - Redux is typically used with the React-Redux library for integrating Redux and React together
  - Redux Toolkit is the recommended way to write Redux logic
- **Redux uses a "one-way data flow" app structure**
  - State describes the condition of the app at a point in time, and UI renders based on that state
  - When something happens in the app:
    - The UI dispatches an action
    - The store runs the reducers, and the state is updated based on what occurred
    - The store notifies the UI that the state has changed
  - The UI re-renders based on the new state
- **Redux uses several types of code**
  - _Actions_ are plain objects with a `type` field, and describe "what happened" in the app
  - _Reducers_ are functions that calculate a new state value based on previous state + an action
  - A Redux _store_ runs the root reducer whenever an action is _dispatched_

## What's Next?[#](#whats-next "Direct link to heading")

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

class App extends React.Component { constructor(props) { super(props); this.state \= { userStatus: "NOT LOGGED IN"} this.setStatus \= this.setStatus.bind(this); } setStatus(username, password) { const newUsers \= users; newUsers.map(user \=> { if (user.username \== username && user.password \=== password) { this.setState({ userStatus: "LOGGED IN" }) } }); } render() { return ( <div> <Status status\={this.state.userStatus} /> <Login handleSubmit\={this.setStatus} /> </div\> ); } });

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

const LoginComponent \= (state \= initialState, action) \=> { switch (action.type) { case "LOGIN": return state.map(user \=> { if (user.username !== action.username) { return user; } if (user.password \== action.password) { return { ...user, login_status: "LOGGED IN" } } }); default: return state; } };

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

function simpleMiddleware({ getState, dispatch }) { return function(next){ return function(action){ const nextAction \= next(action); const state \= getState(); return nextAction; } } }

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
