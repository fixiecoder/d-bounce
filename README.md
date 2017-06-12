# d-bounce
Simple javascript debounce tool

## Getting started

```shell
npm install d-bounce
```

```javascript
// import d-bounce
const dBounce = require('d-bounce');

// callback function to be invoked ater delay
function sayWord(word) {
    console.log(word);
}

// list of arguments to be passed to the callback function on invocation
const arguments = ['bounced'];

// this will console.log the word 'bounced' after 3 seconds
dBounce(sayWord, 'say-word-debounce', 3000, arguments);

/*
 * if dBounce is called again within 3 seconds 
 * with the same identifier string'say-word-debounce' 
 * the clock will reset and another 3 seconds will be 
 * waited before the callback is invoked. 
 */
```

## API

d-bounce accepts 4 arguments although only one is necessary.

dBounce(`callback` [, `identifier` [, `delay` [, `arguments`]]])

1. `callback` (Function) required

The function that you wish to be invoked after the delay provided dBounce is not called again with the same `identifier`.

2. `identifier` (String) optional default: `'default'`

A string identifier used to associate each attempted invocation with other attemped invocations. calls to d-bounce are linked to each other by the `identifier`. This means that you could pass a different callback function every time you call dBounce, using the same `identifier`, and dBounce will reset the clock on the `delay`.

The last callback function that dBounce is called with when the `delay` is satisfied will be the function that gets invoked.

3. `delay` (number) optional - default: `300`
default: `300`

The amount of time waited by dBounce before invoking the callback, provided debounce is not called again with the same `identifier`.

4. `arguments` (Array) optional - default: `[]`

An array of arguments to be passed to the callback upon invokation.
