![npm](https://img.shields.io/npm/v/joi-password)
![npm](https://img.shields.io/npm/dw/joi-password)
![npm bundle size](https://img.shields.io/bundlephobia/min/joi-password)

[![NPM](https://nodei.co/npm/joi-password.png)](https://nodei.co/npm/joi-password/)

# joi-password

A Joi extension that help to validate a complex password

## Requirement

Joi version: 17.x.x

## Installation

### Npm

```sh
npm install joi joi-password
```

### Yarn

```sh
yarn add joi joi-password
```

### CDN

```html
<script src="https://unpkg.com/joi@17.4.2/dist/joi-browser.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/heaty566/joi-password@4.2.0/cdn/joi-password.min.js"></script>
```

## Joi extend function

- minOfUppercase(min: number): Specifies the minimum number of uppercase string characters.
- minOfLowercase(min: number): Specifies the minimum number of lowercase string characters.
- minOfSpecialCharacters(min: number): Specifies the minimum number of special string characters.
- minOfNumeric(min: number): Specifies the minimum number of numeric characters.
- noWhiteSpaces(): Verifies that a schema has no white spaces, Please do not combine trim() function to make this function works perfectly.
- onlyLatinCharacters(): Verifies that a schema has only latin characters.
- doesNotInclude(patterns: string[]): Verifies that a schema does not include any of the given patterns.

## Usage

```js
// example/usage.js

const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);

const schema = (input) =>
      joi
            .object({
                  username: joi.string().min(5).max(200).required(),
                  password: joiPassword
                        .string()
                        .minOfSpecialCharacters(2)
                        .minOfLowercase(2)
                        .minOfUppercase(2)
                        .minOfNumeric(2)
                        .noWhiteSpaces()
                        .onlyLatinCharacters()
                        .doesNotInclude(['password'])
                        .required(),
            })
            .validate(input);

const { error } = schema({ username: 'hello', password: 'AAaa@@00' });
console.log(error); // undefined
```

## Custom error message

```js
// example/custom.js

const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);

const schema = (input) =>
      joi
            .object({
                  username: joi.string().required(),
                  password: joiPassword
                        .string()
                        .minOfSpecialCharacters(3)
                        .minOfLowercase(4)
                        .minOfUppercase(5)
                        .minOfNumeric(6)
                        .noWhiteSpaces()
                        .onlyLatinCharacters()
                        .doesNotInclude(['password'])
                        .messages({
                              'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
                              'password.minOfSpecialCharacters':
                                    '{#label} should contain at least {#min} special character',
                              'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
                              'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
                              'password.noWhiteSpaces': '{#label} should not contain white spaces',
                              'password.onlyLatinCharacters': '{#label} should contain only latin characters',
                              'password.doesNotInclude': '{#label} is too common',
                        }),
            })
            .validate(input, { abortEarly: false });

const { error } = schema({ username: 'aA', password: 'aA@0は password' });

console.log(error);
// 'password' should contain at least 3 special character
// 'password' should contain at least 4 lowercase character
// 'password' should contain at least 5 uppercase character
// 'password'  should contain at least 6 numeric character
// 'password' should not contain white spaces
// 'password' should contain only latin characters
// 'password' is too common
```

## @hapi/joi supports

https://www.npmjs.com/package/hapi-joi-password

hapi-joi-password package is archived and no longer maintained, please use joi and joi-password instead.

## License

MIT
