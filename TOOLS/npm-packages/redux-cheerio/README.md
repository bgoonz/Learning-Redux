# redux-cheerio
Cheerio [middleware](http://rackt.github.io/redux/docs/advanced/Middleware.html) for Redux

## Motivation

#### Dispatch a Redux action and get back pretty JSON response.

Cheerio works under the hood for parsing the HTML or XML document of HTTP requests. Cheerio uses a very simple, consistent DOM model. As a result parsing, manipulating, and rendering are incredibly efficient.

Click [here](https://github.com/cheeriojs/cheerio) for more info on Cheerio

## Installation

```
npm install redux-cheerio --save
```

## Guide

#### Configure your store with the middleware

Insert redux-cheerio into the middleware chain like you would with any other piece of middleware.

```js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import cheerioMiddleware from 'redux-cheerio';
import reducers from './reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(cheerioMiddleware)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}

const store = configureStore(initialState);
```

Go to the end of this readme for a full self-contained example of using redux-cheerio

## Usage

Dispatch actions to your Redux store that have a type of CHEERIO_TASK and a payload consisting of a url to make the request to and a task function whose job is to parse the HTML using jQuery selectors.




To use the middleware, dispatch an action takes the following form:
```js
const whateverNameWeLike = {
    type: 'CHEERIO_TASK',
    payload: { 
        url: // a string
        task: // a function
    }
};
```

#Example

Here is an example action that returns the HTML body of a response as a JSON object. 

Define the first Cheerio action which makes the request

```js
const getBodyOfHTML = {
    type: 'CHEERIO_TASK',
    payload: {  // the payload properties are customised by you 
        url: 'http://www.example.com',
        task: function yourCheerioFuncHere($){ return $('body') }
    }
};
```

Note that in this example we set the following custom payload properties:

#### A url 
Where the HTTP request will be made to.

#### A function that allows us to use Jquery selectors such as '$(div).text()'

Under the hood our middleware takes the HTML from the response and calls the Cheerio.load function like so

```js
let $ = cheerio.load(response)
```

Now we can use jQuery selectors to extract the the data we want from the HTML. This is especially useful for webscraping. We must remember to return the result of this selection.

## Dispatch the first action

Lets dispatch the action to make the request and parse the response with the task function in our action.

```js
// note that a promise is returned
store.dispatch(cheerioAction)
```

Now watch as redux-cheerio handles the dispatching of one further action depending on the success of the HTTP request.

## redux-cheerio middleware dispatches an additional fulfilled action if the request was successful

When our task function returns something a CHEERIO_TASK_FULFILLED action will be dispatched as long as no errors have occured. The payload of this new action will consist of the thing we returned in our task function that was in the first CHEERIO_TASK action.  

```js
{
  type: 'CHEERIO_TASK_FULFILLED'
  payload: {
    'whatever was the result of our $('div').text() jquery selector'
  }
}
```

## redux-cheerio middleware dispatches an additional rejected action if the request was not successful

If there was an error during the request such as a timeout or 404 status code then redux-cheerio middleware will dispatch a rejected action instead of a fulfilled one.

```js
{
  type: 'CHEERIO_TASK_REJECTED'
  payload: {
    err: { // error defined here} 
  }
}
```

## Full example

```js
import { createStore, applyMiddleware } from 'redux';
import cheerioMiddleware from 'redux-cheerio'

// simplest reducer possible - just returns the next state
const reducer = (state, action) => state

const middleware = [cheerioMiddleware]

const store = createStore(reducer, applyMiddleware(...middleware))); 

// Create a action that follows the redux-cheerio signature
const cheerioAction = {
    type: 'CHEERIO_TASK',
    payload: {  // the payload properties are customised by you 
        url: 'http://www.example.com',
        task: function yourCheerioFuncHere($){ return $('body') }
    }
};  

// dispatch our action which returns a promise that we can chain with other logic
store.dispatch(cheerioAction).then(() => {
  console.log('request successsful')
}).catch(() => {
    console.log('request unsuccessful')
})
```



## An aside - Webscraping

Flux implementation is a useful mental model for webscraping.

The webscraping model using cheerio middleware

1. Actions are attempts to extract data from the outside world
2. These actions return raw information about the outside world to the reducers
3. Reducers then extract the valueable information from this raw data and place it in the store
4. We can now dispatch more informed actions based on the data we extracted in the previous round


Scrape in a declarative manner in Redux. Just create a cheerio action with a url and a function representing a scraping task.

Decompose complex web scraping workflows into discrete redux actions that represent small scraping tasks.

Dispatch an action with a jquery selector and a url and the resulting data or error will be sent
through the rest of your middleware and end up in your reducer.

Therefore the state of your app can be modified according to the state of other websites.

#### Example uses for webscraping

1. logging other websites and tracking given selectors over time
2. keeping your app in sync with data from websites that do not have an api

