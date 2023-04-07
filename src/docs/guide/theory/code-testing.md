# Code testing

## Unique array members


```js
const uniqueArr = (arr) => [...new Set(arr)];
```

Using a set is slow. On an array of 1,000,000 randomly generated numbers between 1–100, the original source code only performs at 12% of the speed that the rewritten version does.

```js
const removeDuplicateStrings = (array) => {
  const uniqueValues = [];
  const seenMap = {};

  for (const item of array) {
    if (seenMap[item]) continue;
    seenMap[item] = true;
    uniqueValues.push(item);
  }

  return uniqueValues;
};
```
## Extract URL search params

Returns the provided URLs search parameters as a set of key-value pairs.

```js
const getURLParameters = (url) => {
  const { searchParams } = new URL(url);
  return Object.fromEntries(searchParams);
};
``

## Check is object empty

```js
const isObjectEmpty = (object) => {
  if (object.constructor !== Object) return false;
  // Iterates over the keys of an object, if
  // any exist, return false.
  for (_ in object) return false;
  return true;
};
```

## Reverse string

```js
const reverse = str => str.split('').reverse().join('');
```

More performant version

```js
const reverseString = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--)
    reversedString += string[i];

  return reversedString;
};
```

## Generate Random Hex

```js
const getRandomHexColor = () => {
  const randomValue = Math.floor(Math.random() * 0xffffff);
  const hexValue = randomValue.toString(16);
  return hexValue.padStart(6, "0");
};```
