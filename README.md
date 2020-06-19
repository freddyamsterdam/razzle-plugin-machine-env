razzle-plugin-machine-env
===

This plugin enables the usage of machine environment variables in the client side of your Razzle powered isomorphic (React) applications.

This is particularly useful when passing environment variables to Docker containers.

## Get started :rocket::rocket::rocket:

### 1. Installation
```
yarn add razzle-plugin-machine-env
```

### 2. Implementation
If you don't have one already, create a ```razzle.config.js```file in the root directory of your project and add the following code:

```javascript
'use strict';

module.exports = {
  plugins: ['machine-env']
};
```
