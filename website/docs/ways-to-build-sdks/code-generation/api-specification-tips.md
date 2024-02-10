---
sidebar_position: 2
image: /covers/ways-to-build-sdks/code-generation/api-specification-tips.png
sidebar_label: API specification tips
title: How to Write a Clean API Specification for CodeGen
description: A well-written API specification is essential for generating accurate and reliable SDK code. Here are some tips to help you write a clean, understandable, and maintainable specification.
keywords:
    - API specification
    - Clean code
    - Accurate coding
    - Maintainable specification
    - Understandable specification
---


There are several different API specification formats like Swagger/OpenAPI, RAML, API Blueprint, WSDL, etc. These specifications describe an API in a machine readable format and can be used to generate client-side SDKs, server-side stubs and documentation. [OpenAPI](https://swagger.io/specification/) is the dominant format and the one we'll use for our code generator demonstrations. To convert between API specifications, checkout [APIMatic Transformer](https://www.apimatic.io/transformer/?utm_source=sdksio&utm_medium=referral).


A simple rule for API specifications is *garbage in, garbage out*. The specification must accurately reflect the security, paths, parameters, requests, responses and schemas of the API. 

Beyond accuracy, how tooling uses a specification will impact the quality of generated artifacts. For example, how you name components will impact a tool's ability to generate code with valid file names.

Here are some API specification tips when generating client SDKs.

### Titles, names, and summaries should not exceed 50 characters
Some client (SDK) generators name code components after these contents. As a result, longer content can lead to issues in the code generation process.

### Avoid inline schemas definitions
Inline schemas are not encouraged in code generators since their names are inferred from the parent node. Names inferred in this manner may not be user-friendly or result in name duplications. It is recommended that the schemas be defined globally in the components/schemas section.

### No missing example(s)
Examples given for parameters, media types, or schemas should not be empty or  null. Some tools use these examples to automatically generate test cases for the API and they add value to generated documentation.

### No invalid examples
 Just specifying examples is not sufficient, they must be valid and conform to the schemas they are referring to; otherwise invalid examples may cause problems with some tooling or may even be ignored. 

### Omitted or invalid operationId
 An operationId often serves as a unique identifier for an Operation Object. It should be short and code-friendly with only letters, numbers, underscores, and dashes. There cannot be any leading or trailing white space in it.

### Define content for GET operations with 2XX response
 GET operations are supposed to return some data upon a successful endpoint call. If the response status code is in the 2XX range (except 204), the content that is expected to be returned should be defined using the content property.

### At least one operation level tag
 Some tools use operation level tags to logically group all the operations. Tags facilitate operations discovery and consequently ease API consumption. The Operations Object should specify one or more tags using the tags property.

### Parameters should be in order
 For Code Generators, it is recommended that optional parameters be specified after all the required parameters have been specified and not before or between required parameters.

### Add descriptions to API components
 Add descriptions to OpenAPI components so developers can understand an  API more easily. Descriptions should be specified for the following OAS properties. Make sure that descriptions are not null or empty.
 * Info description
 * Operation description
 * Parameter description
 * Response description
 * Schema description

###  Reuse components to avoid huge OpenAPI files
 When you’ve finished writing the OpenAPI spec for a large or complex API, you may end up with a huge specification. Make your API specification maintainable and scalable by reusing components across your specification file. Specify the following properties (Schemas, Responses, Parameters, Examples, RequestBodies, Headers, SecuritySchemes, Links, Callbacks)  globally in the components section and reuse them. 

We'll need an API Specification to try out different code generators. Check out our Petstore OpenAPI.
