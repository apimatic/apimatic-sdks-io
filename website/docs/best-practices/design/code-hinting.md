---
sidebar_position: 4
image: /covers/best-practices/design/code-hinting.png
sidebar_label: Code Hinting
title: Deliver Code Hinting with Annotations
description: Speed up your development process with SDKs. Take advantage of code completion and integrated documentation like JavaDocs, XML Doc Comments, pyDoc, phpDocumentor, JSDoc and RDoc to get the most out of your SDK projects.
keywords: 
    - IDEs
    - Code Completion
    - JavaDocs
    - XML Doc Comments
    - pyDoc
---

Code hinting is a feature in an Integrated Development Environment (IDE), also known simply as a code editor, that provides suggestions for code syntax and structure as a developer writes code. It's commonly used when working with an SDK (Software Development Kit).

When a developer is using an SDK within an IDE, code hinting provides suggestions for the appropriate syntax and structure that is required to use the SDK's functions, methods, and objects. This is typically achieved through autocompletion or pop-up windows that display suggestions as the developer types.

Code hinting helps developers by speeding up the development process and reducing errors. It provides quick access to information about the functions, methods, and objects available in the SDK, which can save developers a lot of time compared to manually looking up documentation. Additionally, it can help prevent typos or other syntax errors that could lead to bugs in the code.

By providing these suggestions, code hinting can also help developers write more maintainable code. Consistent use of the correct syntax and structure makes code easier to read, understand, and modify by other developers in the future.

In the [naming conventions section](/docs/best-practices/design/naming-conventions), we grouping related methods together in the same class. By doing this, developers can type and see a popup list of  available methods in a class to discover functionality they seek.

## Standards for code annotation

SDKs can provide code completion and hints through the use of annotations in their code. Annotations are comments that provide additional information about code, such as its purpose, inputs, and outputs. By using annotations, you enable IDEs to provide code hints and autocompletion suggestions.

Each language has a standard way to annotate

* Java: [JavaDocs](https://www.oracle.com/be/technical-resources/articles/java/javadoc-tool.html)
* C#: [XML Doc Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/)
* Python: [pyDoc](https://docs.python.org/3/library/pydoc.html)
* PHP: [phpDocumentor](https://www.phpdoc.org/)
* JavaScript: [JSDoc](https://jsdoc.app/index.html)
* Ruby: [RDoc](https://ruby.github.io/rdoc/)


Here are some steps you can follow to provide code completion and hints through annotations:

Define a consistent set of annotations to be used throughout your SDKs. These annotations should provide information that is useful to developers, such as the purpose of a method, the types of parameters it accepts, and the type of data it returns.

Start by internally documenting the annotations you'll define, explaining their purpose and how they should be used. This documentation should be clear and concise, and should include examples of how the annotations can be used.

Add the annotations to the code following the guidelines you have defined in the documentation. IDEs can then use these annotations to provide code hints and autocompletion suggestions to developers.

Test the annotations to ensure they provide accurate and useful information to developers. This can involve creating sample code that uses the annotations and testing it in a variety of IDEs to ensure that the code hints and autocompletion suggestions are accurate and helpful.

The examples below are made up of two parts: 
* a description
* block tags that define a return value and parameter. 
 
Code hinting will display the description and details about the return type and parameter.

``` java
/**
 * Gets the first and last name of a contact.
 * @return this Contact’s name.
 */

public String getName() {
  return name;
}

/**
 * Changes the name of this contact.
 * @param newName This contact’s new name.  
 *                Should include both first and last name.
 */
public void setName(String newName) {
  name = newName;
}
```
