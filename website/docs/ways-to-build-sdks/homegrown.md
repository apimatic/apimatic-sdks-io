---
sidebar_position: 3
sidebar_label: Homegrown
title: Homegrown SDKs vs Code Generators
description: Making the right decision on how to build your SDKs can be a daunting task. Weigh the pros and cons of code generators and homegrown SDKs to determine which one is right for you in 2023.
keywords:
    - SDKs
    - Code Generators
    - Homegrown Solutions
    - API Specifications
    - CI/CD Pipeline

---

It’s hard to compare a homegrown SDK to other ways of building SDKs. There is no checklist of features in a homegrown SDK, it’s a blank canvas for your team. 

Let’s tackle the first question. 

In 2023 should you start SDK development with a homegrown solution? 

I would argue if you have the option to use a [code generator](/docs/ways-to-build-sdks/code-generation/), you should explore that. 

## Benefits of code generators
There are many benefits.

* Your API specification is the source of truth for building your SDKs and other artifacts.
* Updates to your API specification can be quickly rolled out in multiple SDKs.
* Building SDKs and documentation can become part of your CI/CD pipeline.
* SDK and documentation updates are more accurate and less time consuming.
* You can focus engineering resources on building new features, not SDKs.

## Homegrown FTW!
What are some reasons you might choose the homegrown approach?

* Your API is SOAP, GraphQL, gRPC or another architecture not supported by code generators.
* Your target developers use specific frameworks, platforms or technologies like React, WordPress, Salesforce, etc. They want SDKs designed for them but code generators typically target languages not frameworks.
* Don’t trust the quality of code generators and want full control of the SDK codebase.

You might need a homegrown solution, but code generation may still be an option

* Your API doesn’t follow REST standards and has uncommon data types or patterns.
* Security requirements are very complex and need to be written by your team.

If you've chosen the homegrown path, checkout our [best practices section](/docs/best-practices/overview), for tips on what to include in your homegrown SDKs.

:::tip Building or maintaining homegrown SDKs?

If your team is taking this approach, [reach out](mailto:sid.maestre@apimatic.io) and share your story. What factored into your decision, how many SDKs are you supporting, what is the composition of the team and how is it going.

:::

For teams with existing homegrown SDKs, you might be wondering should we continue down this path. I recommend revisiting your SDK strategy (or lack of one).

* How did we get here? Under what circumstances did we choose this approach?
* Is our community happy with our current SDK offering?
* What build approaches are available today?
* If you could start all over again, which approach would you pick?
* What’s the current cost to maintain?
* Do we have the resources to execute a change?

:::danger SDKs as a side project
 
When I joined Xero, we offered “wrappers”, which was our way of saying here is some code to help you authenticate and you write the rest. Our .NET library was the most robust and closest to a real SDK. It had started as a side project for one of Xero’s API engineers. Maintenance wasn’t always factored into the engineer’s workload and he’d spend his weekends reviewing PRs from the community and responding to issues. 

By the time I proposed using a code generator the engineer responsible for our .NET library was completely burnt out. As a result, we almost lost a valuable member of the team. After some time away from SDKs, he was happy to share his expertise with code reviews and testing our new generated .NET SDK.

Be careful when an engineer raises their hand and says they can knock out an SDK for you. It's a long term commitment to your developer community.
:::