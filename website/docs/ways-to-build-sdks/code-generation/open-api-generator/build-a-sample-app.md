---
sidebar_position: 5
---

# Build a sample app

The complete code for our sample app can be found on GitHub.

**Tips when building your own sample app**

## How to install local copy of SDK
Typically we run a command like `npm install [x]` to add dependicies to a project. Since we haven't published our SDK to a package management repository (npm, maven, pypi, etc), we need to point to our local copy. 

Figure out the full path to your local copy of the pet store SDK and add it to package.json.

The name should be **petstorelib**
```
"petstorelib": "/FULL_PATH_TO/typescript/petstore_ts_fetch
```

Your package.json will look something like this.

``` json
{
  "name": "petstore_oa_generator_ts_fetch",
  "version": "1.0.0",
  "description": "",
  "main": "dist/app.js",
  "type": "module",
  "devDependencies": {
    "@types/express": "^4.17.1",
    "typescript": "^4.9.3",
    "petstorelib": "/FULL_PATH_TO/typescript/petstore_ts_fetch"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```


Create a directory in your app root called typing add a new file called index.d.ts 
Open index.d.ts in an editor and add declare module ‘petstore’;




Build and run your sample app

Without a README, some trial and error was needed to retrieve a list of pets. This code  illustrates how it was done.

``` javascript
import express from 'express';
import { PetsApi, Configuration} from 'petstore';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
      
      try {
        const configuration = new Configuration({accessToken: '1234'});
        const petsApi = new PetsApi(configuration);

        const result = await petsApi.listPets();

        if(result?.length) {
          res.send('Hello ' + result[0].name);
        }
        
      } catch(error) {
        console.log(error);
        res.send('Oops');
       }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
```
