---
sidebar_position: 2
---

# Getting Started

APIMatic is a SaaS product and has a free trial. You can explore the capabilities and generete SDKs along with documentation to see what's possible.

## Signup
Start by [creating your APIMatic account](https://www.apimatic.io/account/register). When done, you'll be directed to APIMatic's dashboard.

## Import an API
From  APIMatic’s dashboard you've got the option create an API specification, use a Sample API or Import and existing API specification.

![APIMatic Dashboard Create API](/img/apimatic-dashboard-create-api.png)

Let's **import** the PetStore API spec with this URL.

```
https://raw.githubusercontent.com/apimatic/petstore/main/oas/petstore.yaml
```

Upon completing the import, you'll see a *Logging Summary* with details about the import. Clicking *proceed* triggers a validation of the API specification and  display of a *Validation Summary*. 

Each summary will list errors, warnings and messages to help you improve your API specification and get the best results from using APIMatic.

|         |         |
| ------- | ------- |
| Error   |  are serious issues with your specification that will prevent creation of SDKs. |
| Warning | are issues that won't prevent creation of SDK, but may result in missing features like tests or incomplete documentation. |
| Message |  are informational and will have minimal negative impact on SDKs and documentation. |

Now that you've successfully imported the [Petstore API specification](/docs/ways-to-build-sdks/code-generation/petstore-openapi.md), you have the option to generate a complete Developer Portal (which includes SDKs), or a Single SDK. 

In the next section, we'll generate a Developer Portal and TypeScript SDK along with it.

