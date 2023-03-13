---
sidebar_position: 2 
image: /covers/best-practices/design/naming-conventions.png
sidebar_label: Naming conventions
title: Naming Conventions to improve SDK ease of use
description: Follow Azure's naming conventions for class, method and model names. Ensure your code is clear & understandable. Avoid generic terms, abbreviations, and stop words. Bring consistency to your SDKs. Enhance readability & usability.
keywords: 
    - SDK Naming Conventions
    - Class Naming
    - Method Naming
    - Model Naming
    - Azure’s Naming Conventions
---

SDKs should be designed with the average developer in mind. Name your classes, methods and models so they communicate the purpose and map to API endpoints, requests and responses. 

## Naming methods

The method **createPets** is a good name for the function for creating a pet.

* Method name pattern of a verb + object/resource. 
* Aim to be 30 characters or less
* Avoid using stop words like "a", "the" and "and" in the name.

What are some poor examples? 
* petCreate
* createNewPets
* postPets

``` typescript 
/**
   * Create a pet
   *
   * @return Response from the API call
   */
  async createPets(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/pets');
    req.defaultToError(CustomError);
    return req.call(requestOptions);
  }
```

If you're using OpenAPI and a code generator, your method names are derived from the **operationId**.

``` yaml
paths:
  /pets:
    description: endpoints for multiple pet related actions
    post:
      tags:
      - pets
      summary: create pets
      description: Create a pet and key characteristics
      operationId: createPets
```

**More recommendations for method naming consistency.**

* Capitalize abbreviations that are 3 characters or less long. 
For example, "CreateHttpServer" and "GetAPIToken" follow the 3 characters rule while "CreateHTTPServer" and "GetApiToken" do not. The "3 characters" rule is arbitrary but common in the programming world.
* Factor in the response type when selecting the HTTP verb for the method. We recommend using [Azure’s convention](https://azure.github.io/azure-sdk/general_introduction.html). 
For example, a method that gets a list of users should be named "ListUsers" and not "GetUsers".
* Be consistent between versions of your SDK.


## Naming classes

The class **petsController** is a good name for the class to hold all your pets related methods.

* Identify the ideal groupings for your methods.
* Pluralize all names unless they are singleton resources. 
* Aim to be 30 characters or less

What are some poor examples? 
* thePetsController
* petController
* apis

If you're using OpenAPI and a code generator, your class names are derived from the **tags**.

``` yaml
paths:
  /pets:
    description: endpoints for multiple pet related actions
    post:
      tags:
      - pets
      summary: create pets
      description: Create a pet and key characteristics
      operationId: createPets
```

**More recommendations for class naming consistency.**

* Avoid marketing terms. Use generic names not affected by branding changes.
* Avoid overly generic names like "settings" to reduce refactoring in the future.
For e.g "DiagnosticSettings" instead of only "Settings".
* Be consistent between versions of your SDK.
* Avoid using stop words like "a", "the" and "and" in the name.


## Naming models

The model **Pet** is a good name for the data structure to hold the properties of an instance of your pet you wish to pass to the createPets method.

* Be singular unless it represents some kind of collection of things
* Postfix the object name with "Result" when a method returns data that is a partial or a different set of data than is expected. See [naming conventions by Azure](https://azure.github.io/azure-sdk/general_introduction.html)
* Not be prefixed or postfixed based on their schema type. 

What are some poor examples? 
* Pets
* PetObj
* PetResponse

``` typescript
export interface Pet {
  id: bigint;
  name: string;
  tag?: string;
}
```

**More recommendations for model naming consistency.**

* Have consistent naming between methods and objects especially when the object depends on the method.
For example, a "FilterUsers" method returns an instance of type  "FilterUsersResult".
* Not postfix an object name with "Result" when it represents the real data.
* Not use unnecessary abbreviations like "GetUsrGrp". Use the full word.
* Avoid using stop words like "a", "the" and "and" in the name.
