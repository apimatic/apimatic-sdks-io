---
sidebar_position: 2
sidebar_label: Open Source
title: Open Sourcing SDKs and Building Trust
description: Give your developers greater access to your SDKs by open sourcing them on GitHub. Set up a README, define contribution guidelines, and use issues to keep track of the conversations with the developer community.
keywords:
    - open sourcing
    - GitHub
    - SDKs
    - README
    - Contributing Guidelines

---

You should consider open sourcing your SDKs on GitHub. It’s very popular with companies who provide SDKs to their developers. 

Open sourcing SDKs is an excellent way to build trust in the code that you provide developers to use in their app. Trust comes from their ability to inspect the code, see test cases and test coverage, and  quality checks like linting and security scans reported. Activity around your SDK repository reinforces that they are being actively maintained through frequent commits and releases. Developers also want to see how many open issues and bugs are on the repository and to interact with the team maintaining your SDKs. These are some of the qualities that a developers would expect from a software library or dependency they are about to use in their production code.

Beyond SDK code libraries, you can share code used in a getting started, use case guide or blog posts. Providing fully runnable examples of how to use your SDK in a separate repository will be appreciated by your developers.

## ReadMe
Developers may go directly to GitHub looking for your SDK instead of your developer portal. Have a well written README that includes a condensed version of your getting started guide and links to other documentation like the SDK reference.

There are [README templates](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) you can draw inspiration from and there is even an online editor [Make a README](https://www.makeareadme.com/).

## Issues
I would argue that GitHub issues are a great reason to share your SDK codebase. Developers using your SDK want an easy way to tell you about problems they encounter and suggest ways to make your SDK better. Conversations about your SDK with the developer community are captured in one place for your engineers to reference.

## Contributions
You’ll want to define how contributions will be handled. This is a best practice for open source projects. It’s especially important if you are generating some or all of your code. External pull requests may not be possible if generated files are modified. This doesn’t mean you can’t accept PRs, but you should be transparent about the situation so developers don’t spend a lot of time crafting a pull request you won’t be able to merge. These are [Xero’s contributing guidelines](https://github.com/XeroAPI/Xero-Java/blob/master/CONTRIBUTING.md#pull-requests) around pull requests.