---
sidebar_position: 3
image: /covers/introduction/how-sdks-help-developers.png
sidebar_label: How SDKs help developers
title: 7 Ways SDKs Help Developers
description: SDKs give dev teams an edge by providing code libraries, tools, documentation & sample code to help them save time and make even complex tasks easier.
keywords: 
    - SDKs
    - Software Development Kits
    - APIs
    - Code Libraries
    - Developer Tools
---

<p>
<div class="sharethis-inline-share-buttons"></div>
</p>

In order to understand how SDKs help developers, it might help to contrast it with how developers come up to speed in a new job. 

Imagine, you’ve just joined Pied Piper's engineering team and it’s your first day. You’ll have a team supporting you from configuring your laptop to gaining access to systems and a lot of documentation around how engineering is done at Pied Piper. Most importantly, you spend time with your manager and your new team. Their job is to get you up and running so you can start contributing as soon as possible.

![Welcome to MegaCorp](/img/introduction-megacorp.webp)

Companies offering APIs to external developers want to help them get up and running quickly as well. This is challenging as the developer community has diverse experiences, different use cases and preferred programming languages. It’s impossible to offer one on one support as number of developers using your product increases. SDKs help companies scale self-service onboarding by providing [code libraries](/docs/introduction/what-is-an-sdk#code-libraries), [sdk documentation](/docs/introduction/what-is-an-sdk#sdk-documentation), [getting started guides](/docs/introduction/what-is-an-sdk#getting-started-guides), [code examples](/docs/introduction/what-is-an-sdk#code-examples) and specific [use case guides](/docs/introduction/what-is-an-sdk#use-case-guides), and more.

Let’s dive into the many ways SDKs help developers. 

1. APIs typically have some form of secuity. Developers not familiar with how you have secured your APIs may struggle writing this code themselves. SDKs save developers time by providing the methods and classes as well as instructions to securely access API endpoints.
   
2. APIs typically have several endpoints that accept requests and return responses with data. SDKs save developers time writing lots of boilerplate code that every developer needs and varies only slightly from endpoint to endpoint. 

3. Complexity can be abstracted away for developers so they can focus on the task at hand. For example, raw http requests leave developers to decide how to serialize and deserialize JSON into  objects. SDKs handle turning JSON into the expected data object and returning them for use by developers. 

4. Authorization signatures and token renewal when included in a SDK means developers don’t need to build a mechanism to check token expiration and perform token renewal before continuing with the intended action. 

5. Not to mention logging, retry logic and error handling. Don't forget as your API changes, you can update your SDKs and easily distribute those updates to developers.

6. SDKs provide an opportunity to enhance documentation. Code samples are great for showing how  each endpoint works in the programming language(s) your developers use everyday. These code samples help developers make their first API call and explore your API further by copying and pasting runnable code samples from your documentation.

7. SDKs can be the foundation for getting started guides reducing questions about authentication, token renewal and other standard operations. Sharing a common codebase between support teams and end users means validating and solving problems is easier.

8. Lastly, for many developers the availability of quality SDKs can influence which service provider they select.

Let us know if we missed anything. Head over to [GitHub discussions](https://github.com/apimatic/apimatic-sdks-io/discussions) to share your thoughts on the topic.
