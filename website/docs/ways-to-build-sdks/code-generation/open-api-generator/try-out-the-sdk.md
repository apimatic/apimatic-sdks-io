---
sidebar_position: 5
image: /covers/ways-to-build-sdks/code-generation/open-api-generator/try-out-the-sdk.png
sidebar_label: Try out the SDK
title: Build a Sample App with a Generated SDK
description: Learn how to build a sample app using local code as a dependency and tips for adding a local dependency to your project. Discover how to get a list of pets and generate documentation with OpenAPI generator. 
keywords:
  - Sample app
  - Local code dependency
  - TypeScript
  - OpenAPI generator
  - Pets API.
---

The complete code for our sample app can be found on [GitHub](https://github.com/apimatic/petstore/blob/main/typescript/openapi-generator/).

## Tips for building a sample app

### Local code as dependency
Typically we run a command like `npm install [x]` to add dependicies to a project. Since we haven't published our SDK to a package manager (npm), we need to point to our local copy. 

Determine the relative path to your local generated SDK and add it to package.json.

```
"petstore": "file:../petstore_ts_fetch"
```

Your package.json will look something like this.

``` json
{
  "name": "openapi-generator-sample-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "petstore":  "file:../petstore_ts_fetch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

### Install dependencies

With your petstore dependency sorted, you can install it with the command.

``` bash
npm install
```

### Get list of pets

Without a README,  trial and error was needed. Below is the code for our app.

``` javascript
import { PetsApi, Configuration } from 'petstore';

try {
  const configuration = new Configuration({accessToken: '1234'});
  const petsApi = new PetsApi(configuration);

  const result = await petsApi.listPets();
  
  if(result?.length) {
    console.log('Hello ' + result[0].name);
  }
  
} catch(error) {
  console.log(error);
}
```

Next, compile your Typescript to JavaScript.

``` bash
tsc --build
```

Run the code.

``` bash
node index.js
```

This should display "Hello X" in the terminal. (X is randomly generated by our mock API server.)

Let's look at generating documentation with OpenAPI generator
