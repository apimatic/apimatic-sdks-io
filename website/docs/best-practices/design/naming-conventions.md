---
sidebar_position: 2
---

# Naming conventions
SDKs should be designed with the average developer in mind. Name your classes and methods so they communicate the purpose and map to API endpoints, requests and responses. Below are some recommendations to bring naming consistency.

### Class names should

* Identify the ideal groupings for your methods.
For example, methods that deal with user resources should reside in the "Users" group.
* Avoid marketing terms. Use generic names not be affected by branding changes.
* Pluralize all names unless they are singleton resources. 
For example, an API might deal with multiple users (resulting in a "Users" group name) but have only one configuration so it makes sense to have a group named "Configuration".
* Avoid overly generic names like "settings" to reduce refactoring in the future.
For e.g "DiagnosticSettings" instead of only "Settings".
* Aim to be 30 characters or less
* Be consistent between versions of your SDK.
* Avoid using stop words like "a", "the" and "and" in the name.

### Methods names should

* Capitalize abbreviations that are 3 characters or less long. 
For example, "CreateHttpServer" and "GetAPIToken" follow the 3 characters rule while "CreateHTTPServer" and "GetApiToken" do not. The "3 characters" rule is arbitrary but common in the programming world.
* Be a verb + object/resource. 
For example, an endpoint that "Gets" a "User" should be named "GetUser".
* Factor in the response type when selecting the HTTP verb for the method. We recommend using Azure’s convention. 
For example, a method that gets a list of users should be named "ListUsers" and not "GetUsers".
* Aim to be 30 characters or less
* Be consistent between versions of your SDK.
* Avoid using stop words like "a", "the" and "and" in the name.

### Model names should

* Have consistent naming between methods and objects especially when the object depends on the method.
For example, a "FilterUsers" method returns an instance of type  "FilterUsersResult".
* Be singular unless it represents some kind of collection of things
For example ZipCodes which is a collection of individual codes).
* Not be prefixed or postfixed based on their schema type. 
For example, we should not prefix enum objects with "Enum" but rather give it a suitable name based on its meaning. A "Status" enum does not need to be named "StatusEnum".
* Postfix the object name with "Result" when a method returns data that is a partial or a different set of data than is expected.
For example, A common scenario is method results being named "ListUsersResult". This is better than "ListUsersResponse" as this name is agnostic of how the HTTP layer works in term of request and response messages;  See naming conventions by Azure
* Not postfix an object name with "Result" when it represents the real data.
* Not use unnecessary abbreviations like "GetUsrGrp". Use the full word.
* Avoid using stop words like "a", "the" and "and" in the name.
