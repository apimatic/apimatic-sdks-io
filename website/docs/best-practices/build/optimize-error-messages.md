---
sidebar_position: 8
---

# Optimize error message
Every API call can’t be a status code 200 OK. Your API will return many flavors of 400 and 500 errors. Your SDK has the opportunity to translate these into exception classes that carry with them useful information that developers can use in their application. 

You can start with a base exception class and extend it to more and more granular use cases. 

For example Xero’s Java SDK has the XeroDailyRateLimitException which extends XeroRateLimitExeption which extends XeroException base class. This allows developers to catch and action information around rate limits differently from other types of exceptions. 
