---
sidebar_position: 2
image: /covers/ways-to-build-sdks/code-generation/open-api-generator/getting-started.png
sidebar_label: Getting Started
title: Getting Started with OpenAPI Generator
description: OpenAPI Generator allows you to quickly create SDKs for various languages from a given API specification. Using the Petstore API specification, we can generate a TypeScript SDK with OpenAPI Generator. 
keywords:
    - OpenAPI Generator
    - SDKs
    - API specification
    - TypeScript
---

To get started, you can download the OpenAPI generator CLI and run it locally via [Homebrew](https://github.com/OpenAPITools/openapi-generator#15---homebrew), but in my experience using a [Docker image](https://github.com/OpenAPITools/openapi-generator#16---docker) provides more flexibility.

## Installation

* Install [Docker Desktop](https://docs.docker.com/desktop/)
* Start Docker
* In a terminal app, run this command to download the openapi-generator docker image.

```
docker pull openapitools/openapi-generator-cli:v6.2.1
```

*At this time 6.2.1 is the current [stable release](https://github.com/OpenAPITools/openapi-generator#11---compatibility).*

In order to try out OpenAPI Generator, we'll use the [Petstore API specification](/docs/ways-to-build-sdks/code-generation/petstore-openapi.md) to generate a TypeScript SDK.
