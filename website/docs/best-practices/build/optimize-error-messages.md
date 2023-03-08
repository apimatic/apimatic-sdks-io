---
sidebar_position: 8
sidebar_label: Optimize error message
title: Optimize Your API Error Messages in SDKs
description: Error messages are more than just a 400 Bad Request. Learn how to optimize your API error messages and create granular exception classes for better developer experience.
keyword:
    - API
    - Error Messages
    - Exception Classes
    - Developer Experience
    - Optimization
---

Every API call can’t be a status code 200 OK. Your API will return many flavors of 400 and 500 errors. Your SDK can key off the status code and provide information that developers can use to debug or gracefully recover in their application.

Good error messages begin with your API design. Error messages should be clear and concise. Avoid using generic error messages like "Error occurred" or "Something went wrong". Instead, provide specific error messages that describe the issue.

HTTP status codes provide useful information about the type of error that occurred. Use appropriate HTTP status codes like 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), and 500 (Internal Server Error) to provide more information about the error. Standards like [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807) help provide consistent error messages to your SDK

Consistency in handling errors is crucial for developers using your SDK. Use a consistent format for error messages and HTTP status codes across all API endpoints.

In addition to the error message, include additional details about the error, such as the endpoint that caused the error, the HTTP method used, and the input parameters. This information can help developers debug the issue.

Error messages should include actionable recommendations to help developers resolve the issue. For example, if an authentication error occurs, provide instructions on how to authenticate correctly.

Here is an example of error message handling in Java:

``` java
try {
    // Make API call with input parameters
    String response = apiClient.makeCall("GET", "/users", params);
} catch (ApiException e) {
    // Get the endpoint that caused the error
    String endpoint = e.getEndpoint();

    // Get the HTTP method used
    String httpMethod = e.getHttpMethod();

    // Get the input parameters
    Map<String, String> inputParams = e.getInputParams();

    // Construct detailed error message
    String errorMessage = "Error occurred while making API call to endpoint: " + endpoint +
            ", using HTTP method: " + httpMethod +
            ", with input parameters: " + inputParams.toString() +
            ", Error message: " + e.getMessage();

    // Log error message
    logger.error(errorMessage);
}
```

It's common to package error message details into an exception class which developer can *catch* and use to recover from the failed API call. Depending on the language, you may start with a base exception class and where appropriate extend it to more granular use cases. 

For example Xero’s Java SDK has the [XeroDailyRateLimitException](https://github.com/XeroAPI/Xero-Java/blob/master/src/main/java/com/xero/api/XeroDailyRateLimitException.java) which extends XeroRateLimitExeption which extends XeroException base class. This allows developers to catch and action information around rate limits differently from other types of exceptions. 

``` java
try {
    // Perform an API Call

} catch (XeroBadRequestException e) {
    // Display message with data validation error

} catch (XeroForbiddenException e) {
    // Display message that access is denied

} catch (XeroUnauthorizedException e) {
    // Redirect to Login screen

} catch (XeroRateLimitException e) {
    // Backoff and try again

} catch (Exception e) {
    // Log exception details
}  

```