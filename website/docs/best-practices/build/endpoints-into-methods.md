---
sidebar_position: 2
image: /covers/best-practices/build/endpoints-into-methods.png
sidebar_label: Endpoints into Methods
title: Translating API Endponts into SDK Methods
description: Learn how to organize endpoints into methods in order to create an efficient SDK. Discover best practices when setting headers and constructing URLs with query parameters, and find out how to reduce the number of classes developers need to initialize.
keywords: 
    - SDK
    - organization
    - efficiency
    - endpoints
    - methods
    - headers
    - URLs
    - query parameters

---

Developers explore your API reference documentation to understand what endpoints and actions are available. The unique methods in your SDK enable developers to interact with API endpoints and perform those actions. We discussed [naming conventions](/docs/best-practices/design/naming-conventions) in the design section. Keep these in mind and the [coding style](/docs/best-practices/design/idiomatic-code) of the language you are working in.

## What goes into an endpoint method?
Should you put all methods in a single class and call it ApiClient. This has the advantage of reducing the number of classes developers need to initialize. The downside as the number of endpoints increase so will the class file size. At Xero, our ApiClient got so large that PHP developers needed to modify their IDE settings in order to open the large file and view the source code. We also heard from developers that it was difficult to navigate a single file with so many methods.

Grouping related methods in a class with an intuitive name may be a better choice. For example, getContact, listContacts and createContact, etc would go in a class named ContactsApi (or something like it). Organizing methods in this way also helps with [code hinting](/docs/best-practices/design/code-hinting). Developers initializing ContactsApi see a short list of available and highly relevant methods.

Below are component parts you’ll employ in a method depending on your API.

* Validate argument(s) 
* Set header(s)
* Construct URL with query parameters
* Set HTTP verb
* Serialize request body 
* Set Credentials (token, username/password)
* Build and execute HTTPRequest
* Deserialize response
* Return response as native object

Let’s see how each bullet point translates into Java code. The code has been abbreviated in places and  external classes are doing some of heavy lifting as you’ll want to move common code into reusable classes.

### Method to create a new contact 

``` java
public Contact createContact(Contact contact) throws IOException {
    
}
```

### Validate required arguments

``` java
if (contact == null) {
  throw new IllegalArgumentException(
      "Missing the required parameter 'contact'");
}
```

### Set relevant headers 
(like user agent [metadata](/docs/best-practices/build/managing-metadata))

``` java
HttpHeaders headers = new HttpHeaders();
headers.setAccept("application/json");
headers.setUserAgent("ExampleSDK-1.2.8");
```

### Construct a URL
Include any query parameters that exist

``` java
UriBuilder uriBuilder = UriBuilder.fromUri({baseURL} + "/Contacts");

//handle query parameters with the following line of code
//uriBuilder = uriBuilder.queryParam(key, value);

String url = uriBuilder.build().toString();
GenericUrl genericUrl = new GenericUrl(url);

//Serialize the contact model into JSON for our HTTP request

HttpContent content = helperClass.new JacksonJsonHttpContent(contact);
```

### Set the access token

``` java
Credential credential =
        new Credential(BearerToken.authorizationHeaderAccessMethod())

credential.setAccessToken(accessToken);
```

### Build and execute HTTP request

``` java
HttpTransport transport = helperClass.getHttpTransport();
HttpRequestFactory requestFactory = transport.createRequestFactory(credential);
HttpResponse response = requestFactory
        .buildRequest(HttpMethods.POST, genericUrl, content)
        .setHeaders(headers)
        .execute();
```

### Deserialize JSON response 
You'll want to return a Contacts model in this example.  

``` java
TypeReference<Contacts> typeRef = new TypeReference<Contacts>() {};

return helperClass.getObjectMapper().readValue(response.getContent(), typeRef);
```

For more details go to the serialization section.
