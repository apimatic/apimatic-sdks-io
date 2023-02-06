---
sidebar_position: 6
---

# Build vs Buy

When it comes to code generators there are many open source options beyond OpenAPI Generator as well as paid services like APIMatic. 

Open source solutions feel free, but from experience a lot of time and effort is required to produce fully featured code libraries and documentation. As well as the on-going maintenance by your team.

## Building SDKs
Let’s review the steps to building SDKs.

**Step 1: Designing an SDK**
* Design SDKs for the user, for future extensibility.
* What language versions to support? What are the version-specific issues and your upgrade policy?
* Selecting dependencies to use and any fixes, limitations, quality and your upgrade policy.
* The design, linting, and static analysis guidelines to apply throughout the codebase.

**Step 2: Implementing the SDK**
* Translate schema to concrete types
* Implementing API calls
* Wrap HTTP implementation in an HTTP layer as HTTP clients come and go, so you may consider a middleware arch
* Handle cancellation of API calls
* Handle API/transient errors and recover gracefully (timeout, retries)
* Handle concurrency via thread-safe calls or chaining
* Handle response caching
* Handle API throttling
* Create interfaces for extension
* Log important events (integrate into system logging)

**Step 3: Testing the SDK**
* Testing all parts of the SDK code
* Cross-platform/version testing against different language versions, OSes
* Integration tests (end-to-end testing of SDKs)
* Testing your code generator (if you’re using one)

**Step 4: Writing SDK Reference**
* Writing getting started guides
* Writing code examples for every endpoint
* Creating a reference website for the SDK user
* Creating sample applications to get started quickly

**Step 5: Packaging/Publishing the SDKs**
* Publishing packages on package repositories
* Recreating bugs reports
* Handling customer issues and feedback related to SDK on GitHub or other forums

## Maintaining SDKs.
Engineering efforts continue with maintaining the SDK program in multiple languages. Careful planning can reduce some of this cost, but the ongoing maintenance cost will still exist.

Let’s summarize the work required to maintain SDKs.

* API updates lead to SDKs needing to be updated for all languages simultaneously or the SDKs will lag behind the API updates.
* New language or framework versions happen quite frequently and you face the choice of upgrading or accruing technical debt.
* New dependency versions result in more fixes, updates, security fixes, development of supported features.
* You need to test and fix bugs continuously to ensure no blockers occur at the user’s end, negatively impacting your API’s experience.

## Total cost of ownership
Be honest with yourself about the costs when building SDKs in house. The project requires a lot of engineering resources to build SDKs. Building isn’t where most of the expense lies. A large cost comes with running and maintaining complicated processes and tools behind the SDK program. There is also the opportunity cost of engineers not working on other areas in your API program. 

## Time to market
It’s easy to be overly optimistic about how long it will take to generate SDKs in-house. At Xero the project took 12 months to release five SDKs along with documentation, code samples and starter apps. Our sixth SDK was outsourced to a team in order to meet our deadline. 

## Operational excellence
You may have a group of talented engineers at the start of your project, but there are risks with employee turnover. Can you achieve the same level of quality and attention to detail compared to a company that exists only for creating SDKs?


