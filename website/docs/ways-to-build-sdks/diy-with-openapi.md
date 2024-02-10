---
sidebar_position: 4
image: /covers/ways-to-build-sdks/diy-with-openapi.png
sidebar_label: DIY with OpenAPI
title: Having Developers Generate Their Own SDKs
descirption: Companies are allowing developers to generate their own SDKs from their API specs. This has advantages such as reducing time spent building SDKs, but also introduces friction and potential issues for developers. Companies should carefully consider this approach before taking it.
keywords:
    - API-first strategies
    - SDKs
    - Developers
    - Pros & Cons
    - API Specifications
---

Some companies are providing an API specification and asking developers to generate their own SDKs. This is a new trend and it will be interesting to see how it plays out. I am most interested to hear what developers think. 

[Marqueta](https://www.marqeta.com/docs/core-api/sdks-landing) is an example of a company who has taken this approach.

There are obvious advantages and disadvantages.

## Advantages

The big advantage is your company won't need to build, test and maintain multiple SDKs. This extends to documentation, code samples and other support materials specific to SDKs. Instead you'll focus on creating high quality API specifications and keeping them up to date as your API evolves.

## Disadvantages

An overall disadvantage is friction introduced into the developer journey. Developers won't see any code libraries in their preferred language or documentation with code samples showing how to interact with the API. Quick start or guided walkthroughs will be provided with generic code samples and not an SDK. This code would be discarded once the developer generated their own SDK.

Issues building or using the generated code would be the developers responsibility and could end up being repeated by each developer. Tech support inquires would shift away from how do I use your SDK to achieve this outcome, to how do generate a client SDK in language X. Once I generate it, how do I add it to my project and use it. 

Upon successfully generated and working with their own SDK, it's up to developers to stay up to date with changes in your API and generate a new SDK. They'll also manage any security updates to dependencies in their generated code.

As mentioned in the [OpenAPI generator section](/docs/ways-to-build-sdks/code-generation/open-api-generator/generate-documentation), no README was generated and documentation had to be generated separately with incomplete results. 

## Final thoughts

As someone who's built developer programs, I know this stuff is hard. Asking every developer to build their own SDK feels like punting the problem instead of solving it for your community. If you've chosen this path and want to share your experience, start a conversation on [GitHub discussions](https://github.com/apimatic/apimatic-sdks-io/discussions), we'd love to hear how it was recieved by your developers.


 
