---
sidebar_position: 3
image: /covers/best-practices/design/idiomatic-code.png
sidebar_label: Idiomatic code
title: What is idiomatic code?
description: Writing SDKS with idiomatic code to create more efficient & familiar code. Get coding style recommendations, guidelines, linting tools & more for Java, Ruby, C#, Python, PHP & TypeScript/JavaScript.
keywords: 
    - Idiomatic code
    - programming language
    - coding standards
    - code style
    - linting tools

---

Idiomatic code refers to a style of programming that adheres to the conventions and best practices of a particular programming language or framework. In other words, it is code that follows the established norms of the language and is considered natural or intuitive by experienced programmers.

Idiomatic code is not only easier for programmers to read and understand, but it is also generally more efficient and less error-prone. It may involve using specific constructs or patterns that are idiomatic to the language, such as list comprehensions in Python or functional programming concepts in JavaScript.

Writing idiomatic code can be seen as a way of expressing oneself in a language, and it can help to communicate ideas more clearly and concisely. It also helps to ensure that code is consistent across a codebase, making it easier to maintain and modify over time.


Here are some tips for learning to write more idiomatic code in any language.

* Read the language documentation: The official documentation provides a comprehensive guide to the language and its features. It covers best practices, idiomatic constructs, and common design patterns used by developers in that community.

* Study open source projects: Studying the source code of popular projects in a specific langugage on GitHub or other open source platforms can be a great way to learn idiomatic code. You can see how experienced developers structure their code, use design patterns, and follow best practices.

* Follow experts on social media: Follow language experts on Twitter, LinkedIn, or other social media platforms to stay up-to-date with the latest trends, best practices, and idiomatic code.

* Read programming books: There are many books written for each programming language that cover idiomatic code norms and best practices. 

* Practice writing code: The best way to learn idiomatic code is to practice writing code yourself. Start with small projects and gradually work your way up to larger and more complex projects.


Coding style varies from language to language. Keep that in mind when applying the naming conventions discussed in previous section. For example, if you choose to follow [Google’s Java style guidelines](https://google.github.io/styleguide/javaguide.html#s5.2.2-class-names), class names are PascalCase, methods are camelCase and constants are CONSTANT_CASE. Code style goes beyond naming conventions, to offer best practices around source file structure, braces, indentation, whitespace and much more.

There may be several code styles to choose from in each language. Checkout the [coding standards and code style checkers](https://docs.apimatic.io/generate-sdks/sdk-coding-standards/?utm_source=sdksio&utm_medium=referral) we use at APIMatic. You’ll need to decide which one best represents your developers.

## Style Guides

### Java
* [Oracle Java Style Guide](https://www.oracle.com/technetwork/java/codeconvtoc-136057.html)
* [Google’s Java Style Guide](https://google.github.io/styleguide/javaguide.html)

### Ruby
* [Ruby Style Guide](https://rubystyle.guide/) (which inspired both [Shopify](https://ruby-style-guide.shopify.dev/) and [AirBnB](https://airbnb.io/projects/ruby/) guides) 

### C#
* [Microsoft coding conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
* [Microsoft.CodeAnalysis.NetAnalyzers](https://www.nuget.org/packages/Microsoft.CodeAnalysis.NetAnalyzers)
* [CSharpier](https://github.com/belav/csharpier)

### Python
* [Python Style Guide](https://www.python.org/doc/essays/styleguide/)
* [The Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/style/) 

### PHP
* [PHP Official coding standards](https://raw.githubusercontent.com/php/php-src/master/CODING_STANDARDS.md)
* [PRS-12 - extended coding style](https://www.php-fig.org/psr/psr-12/)

### TypeScript/JavaScript
* [Prettier](https://prettier.io/docs/en/why-prettier.html)
* [JavaScript Standard Style](https://standardjs.com/) (there is one for [TypeScript](https://www.npmjs.com/package/ts-standard) too)

Along with selecting a coding style, seek out linting tools to automatically check that you maintain good code quality. Linting improves code quality by identifying errors or inconsistencies before the code is shipped. Linting is particularly useful in the case of weakly typed languages. Since weakly typed languages are not compiled, errors can only be detected at runtime. Linting acts as an extra layer of protection in this case, checking the code for inconsistencies to ensure that bugs are caught and fixed before release.
