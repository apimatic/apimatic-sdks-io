---
sidebar_position: 3
image: /covers/ways-to-build-sdks/code-generation/petstore-openapi.png
sidebar_label: Petstore OpenAPI spec
title:  Petstore API for Testing Out Code Generation Tools
description: Get hands-on with the updated Petstore API and API specification. Try out code generation tools using the mocked API server. 
keywords:
  - Petstore API
  - OpenAPI
  - Quickmocker
  - Code generation
  - Bearer token authentication
---

You might be familiar with the celebrated [Petstore API spec](https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml) used to learn about Swagger and OpenAPI tools.

For this exercise, we'll use this modified [Petstore OpenAPI specification](https://github.com/apimatic/petstore/blob/main/oas/petstore.yaml) with updates following our [API specification tips](/docs/ways-to-build-sdks/code-generation/api-specification-tips).

You can't try out an SDK without an API. So, we’ve mocked the Petstore API using [Quickmocker](https://quickmocker.com/). In our specification we've set the server property.

``` json
 "servers": [
    {
      "url": "https://src8wr32cg.api.quickmocker.com"
    }
  ]
```

We’ve also added bearToken authentication in Quickmocker and our API specification.

``` json
"securitySchemes": {
    "bearerAuth": {
      "type": "http",
      "scheme": "bearer",
      "description": "bearer token security"
  }
}
```

The mock server expects an access token set to **1234**. Passing an invalid access token will return status code 401 access denied. 

With our API and API specfication sorted, let’s look at code generation tools and try them out.
