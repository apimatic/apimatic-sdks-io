---
sidebar_position: 6
image: /covers/ways-to-build-sdks/code-generation/build-vs-buy.png
sidebar_label: Build vs Buy
title: Build vs Buy SDKs and Key Aspects of the Decision
description: Comparing building or buying a code generator presents different advantages in terms of specification quality, SDK features, documentation and cost of ownership. Learn about the pros and cons for each option and plan accordingly for time to market.
keywords:
    - Build
    - Buy
    - Code Generation
    - Specifications
    - Time to Market
---

Using a code generator presents the choice between building tooling  in house that rely upon opensource projects or leveraging a paid service. Open source solutions feel free, but let's look at key aspects of the build vs. buy decision.

## Specification Quality

**TLDR;** 
* *Build* you're responsible for solving issues with your API specifications. 
* *Buy* you get access to additional validation tools and a support team to help with issues.

The quality of your generated code depends on a complete and accurate API specification. Depending on the condition of your API specification, you may struggle to generate your first client SDK. We've provided some good [API specification tips](/docs/ways-to-build-sdks/code-generation/api-specification-tips) and linters are important to ensure valid specifications. A service like APIMatic offers additional validation and actionable feedback when importing your API specification. Missing descriptions, inline components and issues with naming are surfaced in validation reports so they can be addressed. APIMatic also has an onboarding team that supports customers to solve complex challenges like converting between different specification formats or merging multiple specifications to create a unified developer experience.

## SDK Features
**TLDR;** 
* *Build* if you want features beyond the basics, you'll need to implement them. 
* *Buy* you'll get most of the features mentioned in the [best practices](/docs/category/build) section.

Building your SDKs give you control over the feature set. This is definitely a plus, but keep in mind the base features you can expect are limited to the following:
* Translate schema to concrete classes
* Implementing API calls with validation for parameters
* Authorization headers

Your team will need to build additional features like the following:

* OAuth 2 authorization codeflow interface
* Token expiry checks and token refresh
* Cancellation of API calls
* Fix any shortcoming in the schema to concrete class conversions (like  nullable)
* Find solutions to unsupported specification standards (like oneOf and anyOf)
* Catch API/transient errors and recover gracefully (timeout, retries)
* Concurrency via thread-safe calls or chaining
* Response caching
* API throttling
* Logging important events (integrate into system logging)
* Testing parts of the SDK code

Buying a solution typically includes all the above functionality is multiple languages.

## Documentation
**TLDR;** 
* *Build* more work for your team getting static documentation and code samples generated
* *Buy* language specific, interactive docs with complete code samples out of the box.

Code annotations is a great way to generate detailed documentation for each method in your SDK. Depending on the open source tool, your team may need to modify templates to include annotations in each language. For [SDK documentation with code samples](/docs/ways-to-build-sdks/code-generation/open-api-generator/generate-documentation), your team may be required to build a solution to generate runnable code samples. 

APIMatic provides language specific documentation for each SDK. Developers can play with code samples right from the documentation and then try an API call to see the results. Generated docs can be embedded in existing portal software.

## Cost of Ownership

**TLDR;** 
* *Build* low or no cost for tools with dedicated engineers to maintain tools.
* *Buy* cost can vary based on desired features, annual subscription costs.

Be honest with yourself about the costs when building SDKs in house. The project requires a lot of engineering resources to build SDKs. Building isn’t where most of the expense lies. A large cost comes with running and maintaining complicated processes and tools behind the SDK program. There is also the opportunity cost of engineers not working on other areas in your API program. 

Buying your code generation solution doesn't mean you don't need any engineers to run the program. You still need staff to manage API governance and maintain a high quality API specification. You'll also want technical writers or developer advocates to educate developers about your SDKs and create content.

## Time to market
**TLDR;** 
* *Build* budget 9 to 12 months.
* *Buy* budget 4 to 8 weeks.

It’s easy to be overly optimistic about how long it will take to generate SDKs in-house. I've been at two companies with teams working to ship SDKs in six languages and both projects took 12 months. At one company we released five SDKs along with documentation, code samples and starter apps, but our sixth SDK was outsourced in order to meet our deadline. The outsourced work was brought in house and our team took over maintainance. 

Buy options often advertise you can generate SDKs and documentation in minutes. Yes this is true, but depending on the requirements of your project there is more work to do. Work can involve cleaning up API specifications, creating additional content and guides, integrating your SDK build into a CI/CD pipeline and the dreaded procurement process.

## Operational excellence

**TLDR;** 
* *Build* loss of expertise and knowledge
* *Buy* benefit from a team 100% focused on SDKs and developer experience

We hate to think about talented engineers leaving our team, but it happens. The tooling you build in house will take a unique skill set and a lot of knowledge will be accrued along the way. Replacing engineers on your team with experience and passion for SDKs may be a challenge. I lost two of engineers mid-project and didn't know if we were going to make it. I got really lucky and was able to hire someone who had a passion for building SDKs and did an amazing job. After that experience, I built redundancy into the team by having a lead and backup for each language. Of course, I was the lead for two languages and eventually left the company.

Buying a solution should be seen as augmenting your team with SDK experts back by a company that exists only for creating SDKs and documentation. Of course, you'll still be heavily invested in the SDK program but won't have to do it all by yourself.


