# Dictionary library for React App

## Installation

```sh
yarn add @gazzati/react-dictionary
```

## Usage

1. Wrap your root component in Dictionary from lib
2. Apply useDictionary hook where you need a translate

## Docs

Dictionary props

* `locales` - Array of locales(strings)
* `localStorageKey` - Browser storage key for save locale. Optional parameter

useDictionary methods

```js
const [locale, setNextLocale] = useDictionary()
```

## Example
https://github.com/gazzati/mysite




