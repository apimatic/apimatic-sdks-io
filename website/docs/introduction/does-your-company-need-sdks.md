---
sidebar_position: 3
---

# Does your company need SDKs?

I’d love to answer with a simple yes or no, but like many things in life … it depends.

Based on my experience, here are a few reasons to ** NOT ** build SDKs.

** Your API will be used by a very small number of developers. **

> Karbon builds software for accountants and receives requests from customers to integrate with a number of applications. To enable potential partnerships, they’ve built a set of APIs. Since Karbon is a vertical solution, the number of partners (and use cases) is limited and their customers prefer low code solutions over building custom integrations. For this reason, Karbon focuses on delivering quality APIs and documentation but not SDKs.

** You have a very few endpoints and simple models. **

> Nightfall AI offers data classification and protection. Companies concerned about PII or other sensitive data being incorrectly captured or stored in their systems can use the Nightfall’s API to detect and protect sensitive data. [Nightfall’s API reference](https://docs.nightfall.ai/reference/scanpayloadv3) documents 5 endpoints (upload and scan). They could hold off building SDKs, but chose to [offer SDKs](https://docs.nightfall.ai/docs/intro-nightfall-sdks) to their customers. From experience, I know working with binary data through APIs can add complexity. I suspect this may have influenced their decision to offer SDKs.

The chart below illustrates how the number of use cases and API complexity influences the decision to build SDKs. Complexity can come in several forms. Authenticaion methods may be non-standard or have additional requirements to function properly. Complexity can also take the form of models with a large number of properties, nested properties, nested objects, and nested arrays of objects. Lastly, complexity can be a vast number of endpoints and actions that can be performed against them.

![API complexity vs Product Application](/img/complexity-vs-application.png)

** You don’t have any strong competitors. **

> Xero, a cloud accounting platform, disrupted incumbent desktop software vendors by providing a better user experience and APIs to 3rd party developers. The ecosystem team was regularly told how much better Xero’s APIs were compared to Quickbooks Online. This supported Xero’s initial decision to focus only on APIs and not SDKs. As competition from Intuit increased, Xero realized  providing official SDKs in popular programming languages was important to stay competitive.

** Your offering is so compelling developers will work extra hard. **

> Xero’s product was a hit with small businesses and accountants, but customers wanted more features. Developer’s recognized a first mover advantage by building apps specifically for Xero’s customer base. The opportunity was compelling enough that developers were willing to work through technical challenges without the help of a SDK.

** Your target developer doesn’t need an SDK **

> The term developer is much broader than in the past and includes those we’d call 10x engineers to those who don’t consider themselves developers but utilize no code solutions that rely on APIs to do their magic. 10x engineers have a deep knowledge of a programming language and prefer their honed methods when building software. They may only need an API reference to get the job done and see SDKs as less important. On the other end are framework, low code and no code developers leveraging prebuilt components, plugins and widgets to access APIs. Between these two groups are the mainstream developers who appreciate the availability of SDKs and code samples to save them time and accelerate their understanding of your APIs.  Ask yourself, who is my target developer and do they want SDKs?  

> ![Type of developers](/img/types-of-developers.png)

** You don’t believe SDKs are important to delivering a great developer experience. **

> Maybe I’m being a bit cheeky here. I believe SDKs are an investment in your developer experience but I know they require a commitment to actively support them. If you don’t believe they are important, best to avoid going down this path. Out of date or buggy SDKs are a bad look for any company.
