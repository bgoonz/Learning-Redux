# redux-sync-promise

[![Build Status](https://travis-ci.org/shanhaichik/redux-sync-promise.svg?branch=master)](https://travis-ci.org/shanhaichik/redux-sync-promise)
[![NPM version](http://img.shields.io/npm/v/redux-sync-promise.svg)](https://npmjs.org/package/redux-sync-promise) [![Downloads](http://img.shields.io/npm/dm/redux-sync-promise.svg)](https://npmjs.org/package/redux-sync-promise)

> Middleware for writing asynchronous actions in synchronous style

# Installation

```sh
$ npm install --save redux-sync-promise
```

# Usage
## Add middleware
```javascript
import { APISync } from 'redux-sync-promise';

const api = APISync({/* options */});
const createMiddleware = applyMiddleware(thunk, api);
const store = createMiddleware(createStore)(reducer);
```
## Action Examples
Every action will dispatch type name from types plus postfix.
```javascript
// This example will dispatch PEOPLE_PENDING, PEOPLE_SUCCESS or PEOPLE_FAILURE
/*
 * Full example
 * */
export function getPeopleList(country, age) {
  return {
    types: 'PEOPLE',
    // this data will add in all functions like arguments
    data: {country, age},
    // disable dispatch PENDING event in this action
    off: {
      pending: true
    },
    name: getPeopleName,
    work: getPeopleWork
    food: getPeopleFood
  }
}

/*
 * Get people info
 * @param {object} state - store state
 * @param {function} dispatch - action dispatch function
 * @param {array} props - props in the data key in the action
 * */
async function getPeopleName(state, dispatch, props) {
  let {people: {entriesOnPage}} = state;
  let requestString = `people/?rows=${entriesOnPage}`;

  const {data: {people, total}} = await fetch(requestString);
  return {people, total};
}
// and so on ...

/*
 * Simple examples
 * */
 export function getUnicornList(data) {
   return {
     types: 'UNICORN',
     list: request.post('food/', data)
   }
 }

 export function getUnicornList(data) {
   return {
     types: 'UNICORN',
     list: request.post('list/', data),
     food: request.post('food/', data),
   }
 }

 export function getUnicornList() {
   return {
     types: 'UNICORN',
     list: async (state, dispatch, props) => {
       let rainbow = await getRainbow();
       return rainbow.data.colors
     }
   }
 }

 export function getUnicornList(data) {
   return {
     types: 'UNICORN',
     data: {...data},
     list: async (state, dispatch, props) => {
       let rainbow = await getRainbow();
       return rainbow.data.colors
     },
     food: async (state, dispatch, props) => {
       let rainbow = await getFood();
       return rainbow.data.colors
     }
   }
 }

 export function getUnicornList(data1, data2) {
   return {
     types: 'UNICORN',
     list: Promise.all([
      request.post('food/', data1),
      request.post('rainbow/',data2)
    ])
   }
 }

```


## API
APISync exposes single constructor function for creating middleware.
> APISync( options: Object )

```javascript
// Full example
APISync({
	postfix: {
		pending: 'IS_PENDING',
		success: 'IS_SUCCESS'
		failure: 'IS_FAILURE'
	},
  // global enable/disable dispatching event
  off: {
    pending: false,
    success: false,
    failure: false,
  }
	onPending: (dispatch, data) => {
		console.log('some action api pending');
	},
	onSuccess: (dispatch, result, data) => {
		console.log('some action api success');
	},
	onError: (dispatch, error, data) => {
		// example use on errors
		if(err.status === 401)
	        dispatch({type: 'LOGOUT_SUCCESS'});

		console.log('some action api error');
	}
})
```
## postfix
Add your custom action type postfix for API call.
> Default: PENDING, SUCCESS, FAILURE

## onPending
Callback when actions in progress
```javascript
/*
 * @param {function} dispatch - action dispatch function
 * @param {object} data -  an array of props in the data key in the action
 */
onPending = (dispatch, data) => {}
```

## onSuccess
Callback on success
```javascript
/*
 * @param {function} dispatch - action dispatch function
 * @param {object} result - total result object
 * @param {object} data -  an array of props in the data key in the action
 */
onSuccess = (dispatch, result, data) => {}
```

## onError
Callback on error
```javascript
/*
 * @param {function} dispatch - action dispatch function
 * @param {object|string} error - total error
 * @param {object} data -  an array of props in the data key in the action
 */
onError = (dispatch, error, data) => {}
```

## off
Global disable dispatching SUCCESS, PENDING or FAULURE event
```javascript
off: {
  pending: false,
  success: false,
  failure: false,
}
```

## Reducer create helper
Standart wrapper for create reducers.
I use it on some projects , for this reason, he added to the package

```javascript
import { createReducer } from 'redux-sync-promise';

export default createReducer(initialState, {
  [PEOPLE_SUCCESS](state, action) {
     return {...state}
  }
})
```


## License

Copyright © 2016 [Alexander Dukhovnyak](https://github.com/shanhaichik)

Released under the MIT license. See [license](license) for details.
