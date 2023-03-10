# Welcome to SDKs.io

SDKs.io aims to improve the state of SDK development by offering a compilation of recommended practices for creating and utilizing SDKs. This resource covers subjects such as design and support, as well as guidelines for constructing top-notch SDKs, offering developers the knowledge they need to make well-informed choices and produce exceptional software

## Why did we create SDKS.io
Our team at [APIMatic](https://www.apimatic.io/?utm_source=sdksio&utm_medium=referral) have a lot of expereince building SDKs for APIs and want to share it with you. Throughout the site we share our opinions on a range of topics informed by our experiences building SDKs used by thousands of developers.

## Contributing
We don't have all the answers and invite you to contribute your stories and experiences building SDKs. What challenges have you faced and how did you solve them.

Head over to discussions to start the conversation with our team and tell us how you'd like to contribute. If you find an error and want to submit an issue or a pull request, we appreciate your help.

This page show how to work on the APIMatic SDKs.io website project.

## Prerequisites

You will need to setup these prerequisites before you can contribute to the APIMatic documentation site:

1. Download and install Git: https://git-scm.com/download/win
2. Download and install VSCode: https://code.visualstudio.com/docs/?dv=win
3. Make an account on GitHub with the APIMatic team (your team lead will help you with this).
4. Login into GitHub and setup an SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
5. [Clone (click for VSCode instructions)](https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository) this repository to your computer.
6. Download and install Node.js **version 16**: https://nodejs.org/download/release/v16.19.0/node-v16.19.0-x64.msi
7. Setup the project locally by running `npm install` in the terminal. This may take a while to complete.

_Note: Cloudflare Pages which is used to deploy this website is not yet compatbile with Node.js 18 or later. So please use Node.js v16 for now._


## View Website Locally

To view the website locally with your changes, run the given command from the command-line with the current working directory as this repository. Command-line can be accessed from the VSCode by the `Ctrl + backtick` shortcut. When the development server is running, open http://localhost:3000 in your browser to view the website.

```bash
npm start
```

When you update the content, you do not need to restart the server as the pages are updated automatically.

## Build/Host the Website

Once you're ready to publish your changes, you should first check whether the website build okay by running this command:

```bash
npm run build
```

If it was successful, you should commit and push your changes. You must create a pull request for review before your changes can be published.

Changes pushed to `main` branch will be deployed automatically at https://apimatic-sdks-io.pages.dev/. If you create a pull request, you will get a preview link for your branch on the pull request page.
