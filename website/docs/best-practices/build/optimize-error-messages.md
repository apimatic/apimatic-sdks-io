---
sidebar_position: 8
---

# Optimize error message
Every API call can’t be a status code 200 OK. Your API will return many flavors of 400 and 500 errors. Your SDK has the opportunity to translate these into exception classes that carry with them useful information that developers can use in their application. 

You can start with a base exception class and extend it to more and more granular use cases. 

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