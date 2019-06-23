# cypress-kv-storage-demo [![CircleCI](https://circleci.com/gh/bahmutov/cypress-kv-storage-demo/tree/master.svg?style=svg&circle-token=667cdb7f76b3229190e67df2f992e428f2d8d1b8)](https://circleci.com/gh/bahmutov/cypress-kv-storage-demo/tree/master)

- [KV Storage: the Web's First Built-in Module](https://developers.google.com/web/updates/2019/03/kv-storage)

## Demo

Need to use Chrome 74+ to run these tests

```shell
npm install
npm run dev
```

Starts application at `localhost:8080` and opens Cypress GUI

## Tests

- checks that we are running Chrome browser in [cypress/support/index.js](cypress/support/index.js)
- shows simple counter tests in [cypress/integration/first-spec.js](cypress/integration/first-spec.js)
- shows how to pass reference to the loaded `std:kv-storage` instance from application to the spec code in [cypress/integration/set-counter-spec.js](cypress/integration/set-counter-spec.js)
