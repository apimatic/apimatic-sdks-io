---
sidebar_position: 2
---

# API specification tips

There are several different API specification formats like Swagger/OpenAPI, RAML, API Blueprint, WSDL, etc. These specifications describe an API in a machine readable format and can be used to generate client-side SDKs, server-side stubs and documentation. [OpenAPI](https://swagger.io/specification/) is the dominant format and the one we'll use for our code generator demonstrations. To convert between API specifciations, checkout [APIMatic Transformer](https://www.apimatic.io/transformer/).

A simple rule for API specifications is *garbage in, garbage out*. The specification must accurately reflect the security, paths, parameters, requests, responses and schemas of the API. 

Beyond accuracy, how tooling uses a specification will impact the quality of generated artifacts. For example, how you name components will impact a tool's ability to generate code with valid file names.

Here are some API specification tips when generating client SDKs.

1. Titles, names, and summaries should not exceed 50 characters
> Some client (SDK) generators name code components after these contents. As a result, longer content can lead to issues in the code generation process.

1. Avoid inline schemas definitions
> Inline schemas are not encouraged in code generators since their names are inferred from the parent node. Names inferred in this manner may not be user-friendly or result in name duplications. It is recommended that the schemas be defined globally in the components/schemas section.

1. No missing example(s)
> Examples given for parameters, media types, or schemas should not be empty or  null. Some tools use these examples to automatically generate test cases for the API and they add value to generated documentation.

1. No invalid examples
> Just specifying examples is not sufficient, they must be valid and conform to the schemas they are referring to; otherwise invalid examples may cause problems with some tooling or may even be ignored. 

1. Omitted or invalid operationId
> An operationId often serves as a unique identifier for an Operation Object. It should be short and code-friendly with only letters, numbers, underscores, and dashes. There cannot be any leading or trailing white space in it.

1. Define content for GET operations with 2XX response
> GET operations are supposed to return some data upon a successful endpoint call. If the response status code is in the 2XX range (except 204), the content that is expected to be returned should be defined using the content property.

1. At least one operation level tag
> Some tools use operation level tags to logically group all the operations. Tags facilitate operations discovery and consequently ease API consumption. The Operations Object should specify one or more tags using the tags property.

1. Parameters should be in order
> For Code Generators, it is recommended that optional parameters be specified after all the required parameters have been specified and not before or between required parameters.

1. Add descriptions to API components
> Adding descriptions to OpenAPI components so developers can understand an  API more easily. Descriptions should be specified for the following OAS properties. Make sure that descriptions are not null or empty.
> * Info description
> * Operation description
> * Parameter description
> * Response description
> * Schema description

1.  Reuse components to avoid huge OpenAPI files
> When you’ve finished writing the OpenAPI spec for a large or complex API, you may end up with a huge specification. Make your API specification maintainable and scalable by reusing components across your specification file. Specify the following properties (Schemas, Responses, Parameters, Examples, RequestBodies, Headers, SecuritySchemes, Links, Callbacks)  globally in the components section and reuse them. 

We'll need an API Specification to try out different code generators. Check out our Petstore OpenAPI.