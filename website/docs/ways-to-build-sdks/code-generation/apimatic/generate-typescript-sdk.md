---
sidebar_position: 3
---

# Generate a Portal & SDK

After successfully importing an API specification, you are returned to the dashboard and you have the option to edit docs, edit API or generate artifacts.  Click the **generate** button. You API specification will be validated, then click **proceed**.

In the dialog box shown, your choice is to create a complete developer portal with SDKs or a single SDK.

You could generate a single SDK, but we want the runnable code samples from the developer portal to build our sample app. So, click **Preview API Portal**

## Generate Dev Portal

![Generate options](/img/apimatic-generate-options.png)


The developer portal will open in a new browser window with logos of each language SDK available.

![Developer Portal Homepage](/img/apimatic-devportal-homepage.png)

Click on the TypeScript logo to see documentation designed for the TypeScript developers.

## Download the SDK

The SDK is a zip file and clicking **Get SDK** will start the download. After you publish your SDKs to various package management systems, you can add those details to APIMatic and the step by step tutorial will update with dependency installation instructions. 

![Developer Portal Homepage](/img/apimatic-devportal-typescript.png)

## Install Dependencies

To resolve all dependencies, go to the SDK root directory and run the following command with npm:

```
npm install
```

The SDK should build successfully and be ready for use in our Sample App.