---
sidebar_position: 6
---

# Generate Documentation

In addition to API reference docs, developers expect documentation specific to your SDK.  

Let’s compare different [templates for generating documentation](https://openapi-generator.tech/docs/generators#documentation-generators) with OpenAPI generator.


|   | dynamic html | html | html2 | markdown |
| ------ :| :------ :|  :------ :|  :------ :| :------ :| 
| Explain methods and params | 🟢 | 🟢  | 🟢 | 🟢 |
| Model properties | 🟢 | 🟢 | 🟢 | 🟢 |
| Enums allowed values | 🟢 | 🟢  | 🟢 | 🔴 |
| Display base url | 🟢 | 🔴 | 🔴 | 🟢 |
| Response headers | 🔴 | 🔴 | 🟡 | 🔴 |
| Example JSON response | 🔴 | 🟡 | 🔴 | 🔴 |
| Runnable code sample | 🔴 | 🔴 | 🟡 | 🔴 |
| How authentication works | 🔴 | 🔴 | 🔴 | 🔴 |

|   | Legend  |
| :------ :| :------ | 
| 🟢 | Good | 
| 🟡 | Incomplete | 
| 🔴 | Missing | 

Try it yourself, by running this command in your terminal

``` bash
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v6.2.1 generate \
    -i https://raw.githubusercontent.com/apimatic/petstore/main/oas/petstore.yaml \
    -g html2 \
    -o /local/typescript/html2
```

HTML2 is the most visually appealing template and attempts to generate runnable code, but sadly misses the mark.  For example, the create pets method expects a populated Pet object, but instead a JSON object is provided. This pattern is repeated across all languages rendering all but the JavaScript snippets invalid. 

> ![OpenAPI Generator documentation screenshot](/img/oas-documentation.png)

Don’t despair, you can clone the OpenAPI generator repository and modify the mustache templates to address many of these shortcomings. I will say that generating runnable code snippets in multiple languages was challenging and at Xero we ended up adding complex vendor extensions to achieve it. Check out [Xero’s SDK documentation](https://xeroapi.github.io/xero-node/accounting/index.html).