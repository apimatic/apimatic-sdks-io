---
sidebar_position: 2
---

# How SDKs help developers

In order to understand how SDKs help developers, it might help to contrast it with how developers are on boarded to a new company. 

You’ve just joined the MegaCorp engineering team and it’s your first day. You’ll have a team supporting you from configuring your laptop to gaining access to systems and a lot of documentation around how engineering is done at MegaCorp. Most importantly, you spend time with your manager and your new team. Their job is to get you up and running so you can start contributing as soon as possible.

Companies offering APIs to external developers want to help them get up and running quickly as well. This is challenging as the developer community has diverse experiences, different use cases and preferred programming languages. It’s impossible to offer one on one support as you scale up the number of developers using your product. SDKs help companies scale up by providing code libraries, quick start guides, code samples and specific use case guides to help with self-serve onboarding.

Let’s dive into the many ways SDKs help developers. APIs typically have some form of  authentication, several endpoints accepting requests and returning responses with data. SDKs save developers time writing lots of boilerplate code that every developer needs and varies only slightly from endpoint to endpoint. Complexity can be abstracted away for developers so they can focus on the task at hand. For example, raw http requests leave developers to decide how to serialize and deserialize JSON into native objects. SDKs handle turning JSON into the expected data object and returning them for use by developers. Authorization signatures and token renewal when included in a SDK means developers don’t need to build a mechanism to check token expiration and perform token renewal before continuing with the intended action.

SDKs provide an opportunity to enhance documentation. You can include code samples for each endpoint in the programming language(s) developers use everyday. These code samples help developers make their first API call and explore your API further by copying and pasting runnable code samples from your documentation.

SDKs can be the foundation for getting started guides reducing questions about authentication, token renewal and other standard operations. Sharing a common codebase between support teams and end users means validating and solving problems is easier.

Lastly, for many developers the availability and quality of SDKs are a factor that influences which service provider they select.