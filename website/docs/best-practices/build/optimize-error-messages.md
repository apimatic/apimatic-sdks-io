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

Every API call can’t be a status code 200 OK. Your API will return many flavors of 400 and 500 errors. Your SDK has the opportunity to translate these into exception classes that carry with them useful information that developers can use in their application.

Hopefully your API follows a standard like [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807) to provide consistent and easy-to-use error handling by your SDK. Along with standard status codes, APIs often return additional details pertaining to the error. It's crucial that your SDK handle these details and surface them to developers.

You may start with a base exception class and where appropriate extend it to more granular use cases. 

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