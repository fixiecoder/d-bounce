# d-bounce
Simple javascript debounce tool

## Getting started

```shell
npm install d-bounce
```

```javascript
// import d-bounce
const dBounce = require('d-bounce');

// callback function to be invoked after delay
function sayWord(word) {
    console.log(word);
}

// list of arguments to be passed to the callback function on invocation
const arguments = ['bounced'];

// this will console.log the word 'bounced' after 3 seconds
dBounce(sayWord, 'say-word-debounce', 3000, arguments);

/*
 * if dBounce is called again within 3 seconds 
 * with the same identifier string 'say-word-debounce' 
 * the clock will reset and another 3 seconds will be 
 * waited before the callback is invoked. 
 */
```

## API

d-bounce accepts 4 arguments although only one is necessary.

dBounce(`callback` [, `identifier` [, `delay` [, `arguments`]]])

1. `callback` (`Function` or `null` or `undefined`) required

The function that you wish to be invoked after the delay provided dBounce is not called again with the same `identifier`.

Passing either `null` or `undefined` will cancel the debounce for the given identifier.

```javascript
function exampleCallback() {
    console.log('I am an example');
}
dBounce(exampleCallback, 'example-debounce', 3000, arguments);

dBounce(null, 'example-debounce');
// debounce will be cancelled before it invokes the callback
```

2. `identifier` (`String`) optional default: `'default'`

A string identifier used to associate each attempted invocation with other attempted invocations. calls to d-bounce are linked to each other by the `identifier`. This means that you could pass a different callback function every time you call dBounce, using the same `identifier`, and dBounce will reset the clock on the `delay`.

```javascript
// create a debpunced function with the identifier 'example-debounce-1'
dBounce(() => console.log('callback 1'), 'example-debounce-1');

// create a second debpunced function with the identifier 'example-debounce-2'
dBounce(() => console.log('callback 2'), 'example-debounce-2');

// both callbacks will be invoked as they have different identifiers.
// one has no effect on the other
```

The last callback function that dBounce is called with when the `delay` is satisfied will be the function that gets invoked.

```javascript
dBounce(() => console.log('callback 1'), 'example-debounce');
dBounce(() => console.log('callback 2'), 'example-debounce');
// the the second callback that logs out 'callback 2' will be the only one that is invoked.
```

3. `delay` (`Number`) optional - default: `300`
default: `300`

The amount of time waited by dBounce before invoking the callback, provided debounce is not called again with the same `identifier`.

4. `arguments` (`Array`) optional - default: `[]`

An array of arguments to be passed to the callback upon invocation.

```javascript
function callback(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

const arguments = ['first arg', 'second arg', 'third arg'];

dBounce(callback, 'example-debounce', 1000, arguments);

/*
 *  After 1 second the callback will be invoked and 
 *  the console will log out the following
 *
 *  first arg
 *  second arg
 *  third arg
 */
```
