---
sidebar_position: 1
image: /covers/best-practices/build/authentication.png
sidebar_label: Authentication
title: SDK Authentication that simplifies complexity
description: Unlock the Benefits of an Authentication SDK to Simplify Complexity and Offer Flexibility to Developers. Streamline Authentication with SDKs Designed for HTTP Basic, API Access Token and OAuth.
keywords: 
    - Authentication SDK
    - Simplification
    - Flexibility
    - HTTP Basic
    - API Access Token
    - OAuth
---

SDKs offer an opportunity to simplify authentication by providing classes and methods necessary to authorize a connection. 3 common authentication approaches are HTTP basic, API access token and OAuth. For example, HTTP basic authentication requires a username and password to be properly encoded and passed as a header parameter.

Below is an example of how HTTP basic could be written by a developer without an SDK. *(not including the deserializing, logging, error handling, etc)*.

``` java
String valueToEncode = "foo:bar";
String header = "Basic " + Base64.getEncoder().encodeToString(valueToEncode.getBytes());

HttpRequest request = HttpRequest.newBuilder()
  .GET()
  .uri(new URI("https://api.example.com/users"))
  .header("Authorization", header)
  .build();    
```

Write your SDK to handle the complexity so developers can focus on using your API. 

Below is an example of how HTTP basic might look for a developer using your SDK.

```java
DefaultClient defaultClient = new DefaultClient();
defaultClient.init("foo", "bar");

ApiClient apiClient = new ApiClient(defaultClient);

// listUsers handles setting the authorization header automatically
List<User> users = apiClient.listUsers();
```

Complex authentication like OAuth2, can be embedded in your SDK or kept independent for developers to implement.

:::tip Tale of Two SDKs

While developing Xero’s Java SDK, we chose to include the [google-api-client library](https://mvnrepository.com/artifact/com.google.api-client/google-api-client) as a dependency in our SDK to handle the OAuth2 code flow. This meant developers would write the code to interface directly with the google-api-client library. To help we provided code examples in the form of a [starter project](https://github.com/XeroAPI/xero-java-oauth2-starter). Developers could choose to swap in another OAuth library or use the one we included.

Xero’s NodeJS SDK includes the [openid-client](https://www.npmjs.com/package/openid-client) dependency to handle OAuth. Developers use the XeroClient class as the interface to obtain and manage access tokens. A benefit of this approach is that token expiration and refreshing is handled automatically before each API call. 
:::

One approach offers more flexibility and the other a more seamless (though tightly coupled) experience. It’s up to you to decide which one works best for your developers.

 
