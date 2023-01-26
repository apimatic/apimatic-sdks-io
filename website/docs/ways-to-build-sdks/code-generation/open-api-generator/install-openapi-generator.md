---
sidebar_position: 2
---

# Install OpenAPI Generator

You can download the OpenAPI generator CLI and run it locally via [Homebrew](https://github.com/OpenAPITools/openapi-generator#15---homebrew), but in my experience using a [Docker image](https://github.com/OpenAPITools/openapi-generator#16---docker) provides more flexibility.

## Getting Started

* Install [Docker Desktop](https://docs.docker.com/desktop/)
* Start Docker
* In a terminal app, run this command to download the openapi-generator docker image.

```
docker pull openapitools/openapi-generator-cli:v6.2.1
```

*At this time 6.2.1 is the current [stable release](https://github.com/OpenAPITools/openapi-generator#11---compatibility).*

In order to try out OpenAPI Generator, we'll need an API specification.