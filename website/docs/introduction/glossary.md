---
sidebar_position: 5
image: /covers/introduction/index.png
sidebar_label: Glossary
title: Glossary of SDK terms
description: Get familiar with the terms used to describe software development kits.
keywords: 
    - Glossary
    - SDK
    - Definitions
    - Terms
    - Jargon
---


Here is a collection of terms used to describe software development kits and related technology.

### Asynchronous

Asynchronous refers to a programming paradigm or model where a task is executed independently of the main program flow, without blocking the execution of other tasks. Asynchronous programming allows multiple tasks to be executed concurrently, which can improve the overall performance and responsiveness of the software.

Asynchronous programming can be implemented using various techniques, such as callbacks, promises, or async/await keywords. In asynchronous programming, a task is typically initiated and then executed in the background, while the program continues with other tasks. When the task is completed, a notification or callback is sent back to the program, allowing it to handle the results or execute any follow-up actions.

Asynchronous programming is often used in situations where a task may take a long time to complete, such as network or database operations, and where blocking the program flow would result in poor performance or unresponsiveness. By executing such tasks asynchronously, the program can continue to respond to user input or other events while the task is being completed in the background.

### Code generation

In the context of APIs and client libraries, code generation refers to the process of automatically generating client-side code that can interact with an API based on its specification or documentation. 

Code generation for APIs typically involves using tools that can generate client code in a variety of programming languages based on the API's definition, such as OpenAPI, Swagger, or RAML. These tools can automatically generate client libraries, which provide pre-written code to help developers consume the API's resources and data structures. 

Using a generated client library can simplify the process of interacting with an API, as it abstracts away low-level details and provides a more convenient and structured way of making requests and handling responses. This can help developers reduce errors and improve productivity, as they can focus on the business logic of their application rather than on the details of the API's communication protocol.

Code generation can also help ensure that client code is up-to-date and compatible with changes to the API, as changes to the API's specification or documentation can be used to regenerate the client code automatically.

### Client-side

Client-side refers to the part of an application that runs in a user's web browser or device. This typically includes the user interface and any interactive elements of the application, as well as the code that processes user input and interacts with the server-side components of the application.

Client-side code is written in languages such as HTML, CSS, and JavaScript,  and is executed in the browser or device. For native mobile development this might be Swift, Objective-C or Kotlin. This allows the user to interact with the application without requiring a round-trip to the server, which can improve performance and reduce network overhead.

### Framework

In software development, a framework is a pre-built set of software components, libraries, and tools that provides a structured way to develop applications. A framework typically includes a set of reusable code modules and a set of rules, guidelines, and best practices that developers can follow when building applications.

Some popular frameworks include Ruby on Rails, Django for Python, React for JavaScript, and Laravel for PHP. Each of these frameworks provides a set of tools and components that developers can use to build robust and scalable applications more quickly and efficiently.

### GraphQL

GraphQL is a query language for APIs that provides a more efficient and powerful alternative to traditional REST APIs for retrieving and manipulating data.

With GraphQL, clients can specify exactly what data they need, and the server responds with only that data, reducing network overhead and improving performance. This is achieved through a single endpoint where clients can send a query or mutation to retrieve or update data.

One of the key advantages of GraphQL is that it allows clients to request data in a hierarchical manner, known as a "graph". This means that clients can specify complex relationships between different types of data, and the server can respond with a single, nested response that includes all the requested data.

### gRPC

gRPC is an open-source remote procedure call (RPC) framework developed by Google. It allows client and server applications to communicate with each other over a network, using a binary protocol that is more efficient than traditional web protocols like HTTP.

gRPC uses Protocol Buffers, a language- and platform-neutral mechanism for serializing structured data, to define the messages and services that the client and server will use to communicate. This provides a clear and efficient way to define and manage APIs, and makes it easier to generate code in a variety of programming languages.

One of the key advantages of gRPC is its performance. By using a binary protocol and efficient data serialization, gRPC can transmit data more quickly and with less overhead than traditional web protocols. This makes it well-suited for high-performance applications that need to handle large amounts of data quickly.

### Idiomatic code

Idiomatic code refers to code that adheres to the accepted conventions and style of a particular programming language or community. Idiomatic code is typically considered to be more readable, maintainable, and efficient than code that does not follow these conventions.

Idiomatic code is characterized by its simplicity, clarity, and consistency. It uses the appropriate language constructs and features in a way that is easy to understand, without unnecessary complexity or repetition. Idiomatic code also follows the established naming conventions, formatting guidelines, and commenting practices of the language or community, making it easy to read and understand by other developers.

### Open source

Open source refers to software that is made freely available to use, modify, and distribute by anyone, with the source code of the software being openly accessible and available for inspection and modification. This means that anyone can access, modify, or contribute to the software, typically through online collaborative platforms such as GitHub, GitLab, or Bitbucket.

Open source software is typically distributed under a license that specifies the conditions under which it can be used, modified, and distributed. Many open source licenses, such as the MIT or Apache license, allow for commercial use and modification of the software, while also requiring that any changes or modifications made to the software are also made available under the same license.

The benefits of open source software include increased collaboration, transparency, and accountability, as well as the ability to leverage the work of others to build new and innovative software solutions. Open source software also allows for greater customization and flexibility, as users can modify the software to meet their specific needs and requirements.

### Package Manager

A package manager is a software tool that automates the process of installing, updating, configuring, and removing software packages on a computer system. 

Software packages are collections of files that contain an application, library, or other software component that is designed to perform a specific task or function. These packages often have dependencies, which are other packages that the software needs to function properly.

Package managers help manage these dependencies and ensure that all required software components are installed and configured correctly. They provide a simple and efficient way to install and manage software packages on a system, without having to manually download, compile, and install each package.

Some popular package managers include maven for Java, Pypi for Python, and npm for Node.js packages. These package managers offer command-line interfaces that allow users to search for, install, and update software packages with just a few simple commands.

### RESTful
RESTful, or Representational State Transfer, is an architectural style for designing web services that use HTTP as the underlying communication protocol. RESTful services provide a standardized way for different systems to communicate with each other over the internet.

The key principles of RESTful design include:

Resource-based: RESTful services expose resources, which are typically identified by URLs, and can be manipulated using HTTP methods such as GET, POST, PUT, and DELETE.

Stateless: Each request sent to a RESTful service contains all the necessary information to complete the request. The server does not store any client state between requests.

Cacheable: RESTful services can specify whether responses are cacheable or not, which can help improve performance and reduce network traffic.

Uniform Interface: RESTful services use a uniform interface, which means that clients and servers use the same set of well-defined methods and formats to communicate with each other.

### Server-side

Server-side refers to the part of an application that runs on a server or cloud-based infrastructure. This typically includes the code that processes user requests, communicates with databases and other external services, and generates responses that are sent back to the client-side components of the application.

Server-side code is written in languages such as Java, Python, Ruby, or JavaScript (using Node.js), and is executed on the server or cloud-based infrastructure. Server-side code is responsible for handling user requests, processing data, performing business logic, and generating responses that are sent back to the client-side components of the application.

Server-side code can also include middleware and frameworks that provide additional functionality and simplify common tasks, such as handling authentication or interacting with external services (like APIs).