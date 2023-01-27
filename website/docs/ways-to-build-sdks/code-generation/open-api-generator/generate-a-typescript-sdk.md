---
sidebar_position: 4
---

# Generate a Typescript SDK

There are many [langage templates](https://openapi-generator.tech/docs/generators/) to choose from. Typescript offers templates to generate either server-side or front-end SDKs that run in the browser.

Front-end
* typescript-angular
* typescript-aurelia
* typescript-jquery
* typescript-redux-query
* typescript-rxjs

Server-side
* typescript (experimental)
* typescript-axios
* typescript-fetch
* typescript-inversify
* typescript-nestjs (experimental)
* typescript-node

For our exercise, let’s build our SDK with the **[Typescript Fetch](https://openapi-generator.tech/docs/generators/typescript-fetch)** template. 

Start in an empty folder and run this command in your terminal.

``` bash
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v6.2.1 generate \
    -i https://raw.githubusercontent.com/apimatic/petstore/main/oas/petstore.yaml \
    -g typescript-fetch \
    -o /local/petstore_ts_fetch
```

We add ${PWD}:/local to our command so output can use a relative path. This is also useful when pointing to a local API specification file. 

Below are the arguments we pass.

* (-i) Input value is the petstore.json file on GitHub.
* (-g) Generator value determines the template to use
* (-o) Output value is where to write the new SDK locally.

There are [many more arguments](https://openapi-generator.tech/docs/usage) you can pass to customize the output from OpenAPI generator CLI.

Browse to the subfolder typescript/petstore_ts_fetch and sadly there isn’t a README. Lack of documentation around how to use generated SDKs can be a challenge when using OpenAPI Generator. 

Experienced developers will notice **package.json** and **tsconfig.json** are also missing. Not sure why these are omitted, but the steps below will help install dependencies and configure Typescript in order to build your SDK.

> ![Type of developers](/img/oas-typescript-folder.png)

Here is how I prepared the SDK to be compiled.

1. In a terminal app, change to the typescript/petstore_ts_fetch directory.

``` bash
cd typescript/petstore_ts_fetch
```

2. Create a new package.json with this command
``` bash
npm init -y
```

3. Install the fetch library
``` bash
npm install fetch --save
```

4. Install the node types library
``` bash
​​npm install @types/node --save
```

5. Create a new tsconfig.json file 
``` bash
tsc --init
```

1. Compile TypeScript to JavaScript 
``` bash
tsc --build
```

The SDK should build successfully and be ready for use in our Sample App.
