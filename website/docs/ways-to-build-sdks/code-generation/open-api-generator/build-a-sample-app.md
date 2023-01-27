---
sidebar_position: 5
---

# Build a sample app

The complete code for our sample app can be found on GitHub.

## Tips for building a sample app

### Local code as dependency
Typically we run a command like `npm install [x]` to add dependicies to a project. Since we haven't published our SDK to a package manager (npm, maven, pypi, etc), we need to point to our local copy. 

Figure out the full path to your local copy of a generated SDK and add it to package.json.

```
"petstore": "/FULL_PATH_TO/petstore_ts_fetch
```

Your package.json will look something like this.

``` json
{
  "name": "node_project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "petstore": "/Users/sidneymaestre/Documents/GitHub/petstore/typescript/openapi-generator/petstore_ts_fetch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

With your petstore dependency sorted, you can install it with the command.

``` bash
npm install
```

Without a README,  trial and error was needed. Below is some sample code.

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

This should display "Hello X" in the terminal.

Let's look at generating documentation with OpenAPI generator