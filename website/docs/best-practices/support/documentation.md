---
sidebar_position: 1
sidebar_label: Documentation
title: Create Comprehensive SDK Documention
description: Writing comprehensive documentation for your software development kit (SDK) is critical for developers to understand your product and get the most out of it. Include an overview, SDK reference, code samples, getting started guide, and guided walkthroughs.
keywords:
    - SDK
    - documentation
    - reference
    - code samples
    - walkthroughs
---

It’s easy to think that your method and object names are so intuitive that documentation is unnecessary. Don’t make the mistake of releasing your SDK without comprehensive documentation. Developers want details around the functionality of your SDKs. Here are types of documentation you should consider.

## Getting Started
A well written getting started takes developers step by step through setting up a new project, installing your SDK, obtaining API credentials, importing classes, authenticating and initializing the SDK client in order to perform a first API call.

Auth0 does a nice job with Quick Start guides for each of their [server-side SDKs](https://auth0.com/docs/quickstart/backend/php). I especially like the option to integrate with my app (est. 15 min) or explore the sample app (est. 2 min).

![Auth0 Quick Start for PHP](/img/support-docs-auth0-quickstart.png)

## Guided Walkthrough
Go beyond getting started. Developers have problem(s) and want to know which APIs will help them solve them. Developer guides start with a business problem and breaks down the steps a developer should follow to solve it using their APIs. 

Algolia provides guides for common search scenerios like [including multiple result types](https://www.algolia.com/doc/ui-libraries/autocomplete/guides/including-multiple-result-types/)

![Algolia Guides](/img/support-docs-algolia-guides.png)

## Code Samples
It’s important to you include code demonstrating authentication as this will be the first hurdle developers encounter after installing your SDK. Include a runnable code sample with each method in your SDK reference. This allows developers to copy and paste code from our documentation into their project while learning about your APIs.

You can create these code samples by generating them from an API specification. Be sure to test them and confirm they are runnable. Alternatively, you could manually build the code samples and store them in a code repository like GitHub where they can be maintained and pulled into your documentation during a build process. 

Contentful sufaces code samples for each of their SDKs inside their API reference docs. I especially like the [deep linking](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-types/content-model/get-the-content-model-of-a-space/console/js) that takes you directly to the code sample in the language you want.

![Contentful docs code samples](/img/support-docs-contentful-code-samples.png)

## SDK Reference
You’ll start with an overview of the SDK. Share some background on how the SDK was built, if it’s open source, link to the GitHub repository, any requirements like minimum language version and authentication supported and where to go for support. 

Group methods based on the endpoint. For example, all methods for interacting with Contacts (get, list, create, delete, etc) should be grouped together. Describe each method and include details around parameters, request bodies, example success and error responses.

Document models with each property and the data type, enums, a good description and example value. Don’t skip the details which help developers understand the purpose of each property.

For SDKs with a large number of methods and models, search functionality is a great addition for developers. 

We discussed annotating code in our section on [code hinting](/docs/best-practices/design/code-hinting). These annotation can be used to build SDK reference docs in the format for that language. 

![Ring Central SDK reference](/img/support-docs-ringcentral-javadoc.png)


One of the challenges is making all this documentation easy to navigate so developers can  discover what they need.