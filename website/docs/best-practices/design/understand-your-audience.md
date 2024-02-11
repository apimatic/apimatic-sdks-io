---
sidebar_position: 1
image: /covers/best-practices/design/understand-your-audience.png
sidebar_label: Prepare to build SDKs
title: Prepare to build SDKs
description: To build SDKs, consider your developer audience and their use cases, which programming languages to support, frameworks to target, and whether to use code generation. Additionally, decide whether to make the SDKs open source or proprietary, support asynchronous programming paradigms, and evaluate security for server-side vs client-side usage.
keywords: 
    - SDK journey
    - programming languages
    - APIs
    - server-side
    - client-side.
---

Your SDK journey starts by knowing your developer audience and how they will utilize your APIs. You've built APIs to solve specific problems for developers. These use cases inform the context in which developers may use them. Keep in mind new use cases may emerge as developers adopt your APIs, so revisiting assumption periodically and adjusting the design of your SDK program is important.

## 6 considerations for those building SDKs 

### What programming languages will your SDKs support?
This is a critical to establish as each language you add to your SDK program requires additional effort. Let you customers guide this decision by looking for signals of demand.

Evidence may be visible in your support tickets, developer forums or sites like StackOverflow. If you've created developer personas based on customer interviews, this may include language and technology preferences. Search GitHub for your company name to discover libraries created by your community. This alone doesn't mean you should add the language, but a library with a lot of activity may be the signal you need to target that language for SDK development.

Once you've settled on a short list of languages, evaluate your team's skills in each language. You may need to hire additional engineers or outsource some SDK development to experts in a language. The data collected can be used to support a business case for additional head count or budget.  

### Are there frameworks that would be most attracted to your solution?
Instead of targeting all Python developers, your API may be very attractive those using Django, a popular Python framework. Do your homework and validate your assumptions before placing big bets on specific developer communities. The "build it and they will come" approach risks investing valuable engineering time to build a solution that doesn't catch on.

Depending on demand you may evaluate your SDK for compatibility and add or modify it to better support specific frameworks. Sometimes, a starter project that demonstrates how to use your SDK with that framework in enough. A small time investment could bring big returns.

### Are your APIs more likely to be used server-side or client-side? 
One way to answer this question is from the security angle. Can a developer connect to your API directly from a mobile app or code that runs in the browser WITHOUT compromising security by revealing sensitive API keys or secrets? If the answer is no, then client-side SDKs are a non starter.

If security is not an issue, then use cases should be considered. Are there clear advantages to developers using your APIs directly from the client-side or will use cases depend on business logic that is server-side?

### Will you utilize code generation and to what degree?
If your API follows RESTful standards, you are well positioned to realize the productivity gains of code generation. 

API specifications like OpenAPI and modern code generators do a good job creating code that follows predictible patterns (i.e. RESTful standards). Of course the quality of the code is dependent on the quality of the templates used to generate code. You'll want to review the output and see the code meets your developer's needs.

You'll want to decide if hand crafted code needs to be included in your SDK. If so, you'll need to develop a strategy for merging code during the generation process so hand crafted code isn't overwritten.

One concession you'll make with code generation is the inability to accept pull requests which modify generated code. Instead, input from your developer community that affect generated classes will need to be evaluated and implemented by your team at the template level.

### Will the SDKs be open source or proprietary?
Open sourcing libraries on GitHub is a common practice for SDK programs. It provides developers a way to inspect the code base to better understand how it works or troubleshoot issues they encounter using your SDK. With access to GitHub issues and pull requests developers can contribute to your SDK program. Depending on [how you license your project](https://www.freecodecamp.org/news/how-open-source-licenses-work-and-how-to-add-them-to-your-projects-34310c3cf94/), developers can fork your repository and solve their own problems should your SDK fall short of their needs.

There may be concerns about losing a competitive advantage by open sourcing your SDKs. If that is the case, look for ways to mitigate risk through a more restrictive license.

There is a cost to all the benefits listed above and that is the time your team will devote to managing the community engagement, responding to issues and reviewing pull requests. 

### Will the SDKs support asynchronous programming paradigms?

SDKs often perform API calls in a synchronous manner, which executes tasks in a sequential and blocking manner, meaning that each task must wait for the previous one to complete before starting. Synchronous methods benefit developers by controlling the order of execution. You have the choice to create additional methods which perform the same functions as your synchronous calls but in an asynchronous manner. 

Asynchronous programming paradigms can be beneficial in certain situations, but there are potential drawbacks to consider. Supporting asynchronous programming paradigms can improve the performance and scalability of an application, provide flexibility for developers to choose the best approach for their use case, and optimize resource utilization. At the same time, asynchronous programming can increase complexity, require higher memory usage and make debugging more difficult.
