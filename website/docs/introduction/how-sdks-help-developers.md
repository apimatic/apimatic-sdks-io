---
sidebar_position: 4
image: /covers/introduction/why-developers-want-sdks.png
sidebar_label: Why developers want SDKs
title: Why developers want SDKs
description: SDKs give dev teams an edge by providing code libraries, tools, documentation & sample code to help them save time and make even complex tasks easier.
keywords: 
    - SDKs
    - Software Development Kits
    - APIs
    - Code Libraries
    - Developer Tools
---

Not every developer uses an SDK to connect to and utilze an API. There are various reasons, but it often boils down to experience and preference. Your developer audience is not a monolith but is a spectrum ranging from 10x engineers to citizen developers. The 10x engineer may have built dozens of API integrations and developed a custom code base they prefer to use. The growing community of citizen developers may leverage low-code and no-code platforms. The large number of developers between the two extremes are the ones who seek out SDKs to reduce their learning curve and increase productivity.

Let's explore why many developers want SDKs written in their preferred programming language. 

## Less boilerplate code
Stripe, the global payment platform, has won with developers by offering a world-class developer experience. If you read through their documentation, they call out the importance of SDKs.

"Stripe's server-side helper libraries (also known as server-side SDKs) reduce the amount of work required to use Stripe's REST APIs, starting with reducing the boilerplate code you have to write. "

Without an SDK, each developer must write and maintain more code specific to your API. By offering SDKs, API providers can distribute bug fixes, security patches, and API updates directly to developers through SDKs published to popular package registries like npm, Maven, Packagist, PyPI, and more.

## Easier developer onboarding
Stripe encourages developers to fast-track development using their server-side SDKs written in Ruby, Python, Go, Java, PHP, NodeJS, and C#. They describe their SDKs as "an essential tool needed for a Stripe integration." A developer navigating Stripe's documentation chooses a language and follows a quickstart guide tailored to their language. Step-by-step instructions guide developers on initializing their project, managing dependencies, installing Stripe's SDK, and making their first SDK request.

## Reduced complexity
APIs come in all shapes and sizes. They also come with different levels of complexity. That complexity can be the vast number of endpoints or the structure of requests and responses, which must be serialized and deserialized into JSON. There are many standard authentication methods, but their implementation can vary greatly, resulting in standards like OAuth 2 still needing to be easier for developers. 

SDKs offer developers an intuitive interface that abstracts away complexity and allows them to utilize your API without needing to know how to generate and encode authorization headers.

## State of flow
Code libraries are the heart of any SDK. Installing an SDK code library allows developers to take a code-centric approach to learning and using your API. Through code hinting and inline documentation, a developer can stay in their IDE (integrated development environment) and won't need to jump back and forth between the documentation and coding. 

SDKs with well-named classes and methods allow developers to discover functionality as they code. Informative descriptions and data typing mean developers can achieve a state of flow that increases productivity.

Let us know if we missed anything. Head over to [GitHub discussions](https://github.com/apimatic/apimatic-sdks-io/discussions) to share your thoughts on the topic.
