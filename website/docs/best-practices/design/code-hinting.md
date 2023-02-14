---
sidebar_position: 4
sidebar_label: Code Hinting
title: Developing SDKs and Standards for Annotating Your Code
description: Speed up your development process with SDKs. Take advantage of code completion and integrated documentation like JavaDocs, XML Doc Comments, pyDoc, phpDocumentor, JSDoc and RDoc to get the most out of your SDK projects.
keywords: 
    - IDEs
    - Code Completion
    - JavaDocs
    - XML Doc Comments
    - pyDoc

---

Modern IDEs (integrated development environments) offer productivity gains for developers. Designing your SDKs in a way to take advantage of code completion and embedded documentation will be greatly appreciated by your developers.

In this section we discussed consistent naming conventions and grouping related methods together in the same class. This means developers can simply type and see available methods on a class to discover functionality they seek.


Jumping between documentation and your IDE diminishes productivity. Comments embedded in your code describing methods, return types and available parameters are used by IDEs  to display concise documentation inline for developers.

Here are popular standards for annotating your code.

Java
* [JavaDocs](https://www.oracle.com/be/technical-resources/articles/java/javadoc-tool.html)

C#
* [XML Doc Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/)

Python
* [pyDoc](https://docs.python.org/3/library/pydoc.html)

PHP
* [phpDocumentor](https://www.phpdoc.org/)

JavaScript
* [JSDoc](https://jsdoc.app/index.html)

Ruby
* [RDoc](https://ruby.github.io/rdoc/)

This example is made up of two parts: a description followed by block tags. The block tags are @return and @param. Code hinting in popular code editors help developers by showing  documentation about the return type or parameter.

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
