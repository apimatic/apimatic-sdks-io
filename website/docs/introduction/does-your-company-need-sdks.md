---
sidebar_position: 4
image: /covers/introduction/does-your-company-need-sdks.png
sidebar_label: Do you need SDKs?
title: Should You Invest in Building SDKs
description: Building SDKs can be a key investment for businesses to engage developers & keep them up-to-date with the latest features. Consider API complexity, use cases & target developers before investing.
keywords: 
    - SDK Investment
    - API Complexity
    - Use Cases
    - Developer Targeting
---

I’d love to answer with a simple yes or no, but like many things in life … it depends.

Based on my experience, here are a few reasons to ** NOT ** build SDKs.

### Your API is for a small number of developers.

[Karbon](https://developers.karbonhq.com/) builds software for accountants and receives requests from customers to integrate with a number of applications. To enable potential partnerships, they’ve built a set of APIs. Since Karbon is a vertical solution, the number of partners (and use cases) is limited and their customers prefer low code solutions over building custom integrations. For this reason, Karbon focuses on delivering quality APIs and documentation but not SDKs.

### You have a low number of endpoints, simple models and few use cases

[Nightfall AI](https://www.nightfall.ai/) offers data classification and protection. Companies concerned about PII or other sensitive data being incorrectly captured or stored in their systems can use the Nightfall’s API to detect and protect sensitive data. [Nightfall’s API reference](https://docs.nightfall.ai/reference/scanpayloadv3) documents 5 endpoints (upload and scan). They could hold off building SDKs, but chose to [offer SDKs](https://docs.nightfall.ai/docs/intro-nightfall-sdks) to their customers. I don't know the exact reasoning, but from experience, working with binary data through APIs can add complexity. I suspect they want to remove any possible barriers to adoption and SDKs can help.

Complexity can come in several forms. Authenticaion methods may be non-standard or have additional requirements to function properly. Complexity can also take the form of models with a large number of properties, nested properties, nested objects, and nested arrays of objects. 

Understanding the number of use cases your API supports is important in creating documentation to educate developers. As you mix and match endpoints to support different scenerios, you increase the need for SDKs to help implement them.

Charting our API complexity on the y-axis and number of use cases on the x-axis we see there is a point where SDKs and code samples become critical to success.

![API complexity vs Product Application](/img/complexity-vs-application.png)

### You don’t have any strong competitors.

[Xero](https://www.xero.com), a cloud accounting platform, disrupted incumbent desktop software vendors by providing a better user experience and APIs to 3rd party developers. The ecosystem team was regularly told how much better [Xero’s APIs](https://developer.xero.com) were compared to competitors. This supported Xero’s initial decision to focus only on APIs and not SDKs. As competition increased, Xero recognized providing official SDKs in popular programming languages was important to stay competitive.

### Your offering is so compelling developers will work extra hard.

Xero’s product was a hit with small businesses and accountants, but customers wanted more features. Developer’s recognized a first mover advantage by building apps specifically for Xero’s customer base. The opportunity was compelling enough that developers were willing to work through technical challenges without the help of an SDK.

### Your target developer doesn’t need an SDK

The term developer is much broader than in the past and includes those we’d call 10x engineers to those who don’t consider themselves developers but utilize no code solutions that rely on APIs to do their magic. 

10x engineers have a deep knowledge of a programming language and prefer their honed methods when building software. They may only need an API reference to get the job done and see SDKs as less important. On the other end are framework, low code and no code developers leveraging prebuilt components, plugins and widgets to access APIs. 

Between these two groups are the mainstream developers who appreciate the availability of SDKs and code samples to save them time and accelerate their understanding of your APIs.  Ask yourself, who is my target developer and do they want SDKs?  

![Type of developers](/img/types-of-developers.png)

### You don’t believe SDKs are necessary to deliver a great developer experience.

Maybe I’m being a bit cheeky here. I believe SDKs are an investment in your developer experience but I know they require a commitment to actively support them. If you don’t believe they are necessary, best to avoid going down this path. Out of date or buggy SDKs are a bad look for any company.

Let's move on to the best practices for building SDKs.
