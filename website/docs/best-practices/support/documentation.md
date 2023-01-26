---
sidebar_position: 1
---

# Documentation

It’s easy to think that your method and object names are so intuitive that documentation is unnecessary. Don’t make the mistake of releasing your SDK without comprehensive documentation. Developers want details around the functionality of your SDKs. Here are types of documentation you should consider.

## SDK Reference
You’ll start with an overview of the SDK. Share some background on how the SDK was built, if it’s open source, link to the GitHub repository, any requirements like minimum language version and authentication supported and where to go for support. 

Group methods based on the endpoint. For example, all methods for interacting with Contacts (get, list, create, delete, etc) should be grouped together. Describe each method and include details around parameters, request bodies, example success and error responses.

Document models with each property and the data type, enums, a good description and example value. Don’t skip the details which help developers understand the purpose of each property.

For SDKs with a large number of methods and models, search functionality is a great addition for developers.

## Code Samples
It’s important to you include code demonstrating authentication as this will be the first hurdle developers encounter after installing your SDK. Include a runnable code sample with each method in your SDK reference. This allows developers to copy and paste code from our documentation into their project while learning about your APIs.

You can create these code samples by generating them from an API specification. Be sure to test them and confirm they are runnable. Alternatively, you could manually build the code samples and store them in a code repository like GitHub where they can be maintained and pulled into your documentation during a build process. 

## Getting Started
A well written getting started takes developers step by step through setting up a new project, installing your SDK, obtaining API credentials, importing classes, authenticating and initializing the SDK client in order to perform a first API call.

## Guided Walkthrough
Go beyond getting started. Developers have problem(s) and want to know which APIs will help them solve them. Developer guides start with a business problem and breaks down the steps a developer should follow to solve it using their APIs. For example, Lob’s developers needed a guide to explain how to [mass delete a mail campaign](https://help.lob.com/developer-docs/use-case-guides/mass-deletion-setup) should an error be discovered.
