# Manipulate

Manipulate exposes standard array manipulation functions (`filter`, `map`, `reduce` and `forEach`) on your JS objects.

# Installation

Using npm:

```
$ npm i --save manipulate
```

# Usage

Example Input Object

```javascript
const usersById = {
  ltm: {
    name: 'Luke Millar',
    isAdmin: true,
    followers: 2496
  },
  dshankar: {
    name: 'Darshan Shankar',
    isAdmin: true,
    followers: 8472
  },
  jazzychad: {
    name: 'Chad Etzel',
    isAdmin: false,
    followers: 4759
  }
}
```

## Filter

```javascript
const Manipulate = require('manipulate')

Manipulate(usersById)
  .filter(({ value }, index, usersById) => value.isAdmin)
  .value()

/*
RESULT
{
  ltm: {
    name: 'Luke Millar',
    isAdmin: true,
    followers: 2496
  },
  dshankar: {
    name: 'Darshan Shankar',
    isAdmin: true,
    followers: 8472
  }
}
*/
```

## Map

```javascript
const Manipulate = require('manipulate')

Manipulate(usersById)
  .map(({ key, value }, index, usersById) => value.name)
  .value()

/*
RESULT
{
    ltm: 'Luke Millar',
    dshankar: 'Darshan Shankar',
    jazzychad: 'Chad Etzel'
}
*/
```

## Reduce

```javascript
const Manipulate = require('manipulate')

Manipulate(usersById)
  .reduce((totalFollowers, { key, value }, index, usersById) => totalFollowers + value.followers, 0)
  .value()

/*
RESULT
15727
*/
```

## ForEach

```javascript
const Manipulate = require('manipulate')

Manipulate(usersById).forEach(({ key, value }) => {
  console.log(key)
})
```

## Chaining

```javascript
const Manipulate = require('manipulate')

Manipulate(usersById)
  .filter(({ value }) => value.isAdmin)
  .map(({ value }) => value.followers)
  .reduce((totalFollowers, { value: followers }) => totalFollowers + followers, 0)
  .value()

/*
RESULT
10968
*/
```
