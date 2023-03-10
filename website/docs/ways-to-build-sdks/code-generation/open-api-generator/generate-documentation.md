---
sidebar_position: 6
image: /covers/ways-to-build-sdks/code-generation/open-api-generator/generate-documentation.png
sidebar_label: Generate Documentation
title:  Comparing OpenAPI Generator Documentation Templates
description: This article compares different templates for generating documentation with OpenAPI generator.  The article also highlights the limitations of template for generating runnable code snippets.
keywords:
    - OpenAPI generator
    - Documentation
    - Templates
    - Code snippets
    - Comparison
---

In addition to API reference docs, developers expect documentation specific to your SDK.  

Letβs compare different [templates for generating documentation](https://openapi-generator.tech/docs/generators#documentation-generators) with OpenAPI generator.


|   | dynamic html | html | html2 | markdown |
| ------ :| :------ :|  :------ :|  :------ :| :------ :| 
| Explain methods and params | π’ | π’  | π’ | π’ |
| Models and properties | π’ | π’ | π’ | π’ |
| Enums allowed values | π’ | π’  | π’ | π΄ |
| Display base url | π’ | π΄ | π΄ | π’ |
| Response headers | π΄ | π΄ | π‘  | π΄ |
| Example JSON response | π΄ | π‘ | π΄ | π΄ |
| Runnable code sample | π΄ | π΄ | π‘ | π΄ |
| How authentication works | π΄ | π΄ | π΄ | π΄ |

|   | Legend  |
| :------ :| :------ | 
| π’ | Good | 
| π‘ | Incomplete | 
| π΄ | Missing | 

Try it yourself, by running this command in your terminal

``` bash
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v6.2.1 generate \
    -i https://raw.githubusercontent.com/apimatic/petstore/main/oas/petstore.yaml \
    -g html2 \
    -o /local/html2
```

HTML2 is the most visually appealing template and attempts to generate runnable code, but sadly misses the mark.  For example, the create pets method expects a native Pet object, but instead a JSON string is provided. For strongly typed languages, the syntax is invalid.  This pattern is repeated across all languages. 

![OpenAPI Generator documentation screenshot](/img/oas-documentation2.png)

Donβt despair, you can clone the OpenAPI generator repository and modify the mustache templates to address many of these shortcomings. I will say that generating runnable code snippets in multiple languages was a sizable challenging and at Xero we ended up adding complex vendor extensions to achieve it. Check out [Xeroβs SDK documentation](https://xeroapi.github.io/xero-node/accounting/index.html).

Next, let's look APIMatic a service to generate your SDKs and developer docs.
