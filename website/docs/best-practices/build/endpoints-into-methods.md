---
sidebar_position: 2
---

# Endpoints into Methods
Developers explore your API reference documentation to understand what endpoints and actions are available. The unique methods in your SDK enable developers to interact with API endpoints and perform those actions. We discussed naming conventions in the section above. Keep these in mind and the coding style of the language you are working in.

## How should you organize these methods? 
Should you put all methods in a single class and call it ApiClient. This has the advantage of reducing the number of classes developers need to initialize. The downside as the number of endpoints increase so will the file size. At Xero, our ApiClient got so large that PHP developers needed to modify their IDE settings in order to open the large file and view the source code. We also heard from developers that it was difficult to navigate a single file with so many methods.

Grouping related methods in a class with an intuitive name may be a better choice. For example, getContact, listContacts and createContact, etc would go in a class named ContactsApi (or something like it). Organizing methods in this way also helps with code hinting. Developers initializing ContactsApi see a short list of available and highly relevant methods.

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

Let’s see how each bullet point translates into Java code. The code has been abbreviated in places an external class is doing a lot of heavy lifting as you’ll want to move common code into reusable classes.

Method to create a new contact 

``` java
public Contact createContact(Contact contact) throws IOException {
    
}
```

Validate required arguments

``` java
if (contact == null) {
  throw new IllegalArgumentException(
      "Missing the required parameter 'contact'");
}
```

Set relevant headers

``` java
HttpHeaders headers = new HttpHeaders();
headers.setAccept("application/json");
headers.setUserAgent("ExampleSDK-1.2.8");
```

Construct a URL for the resource with any query parameters

``` java
UriBuilder uriBuilder = UriBuilder.fromUri({baseURL} + "/Contacts");

//handle query parameters with the following line of code
//uriBuilder = uriBuilder.queryParam(key, value);

String url = uriBuilder.build().toString();
GenericUrl genericUrl = new GenericUrl(url);

//Serialize the contact model into JSON for our HTTP request

HttpContent content = helperClass.new JacksonJsonHttpContent(contact);
```

Set the access token for use in your HTTP request

``` java
Credential credential =
        new Credential(BearerToken.authorizationHeaderAccessMethod())

credential.setAccessToken(accessToken);
```

Build and execute HTTP request

``` java
HttpTransport transport = helperClass.getHttpTransport();
HttpRequestFactory requestFactory = transport.createRequestFactory(credential);
HttpResponse response = requestFactory
        .buildRequest(HttpMethods.POST, genericUrl, content)
        .setHeaders(headers)
        .execute();
```

Deserialize JSON response and return Contacts model.  

``` java
TypeReference<Contacts> typeRef = new TypeReference<Contacts>() {};

return helperClass.getObjectMapper().readValue(response.getContent(), typeRef);
```

For more details go to the serialization section.