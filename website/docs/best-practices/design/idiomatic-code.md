---
sidebar_position: 3
sidebar_label: Idiomatic code
title: Discover the Benefits of Using Idiomatic Code in SDKs
description: Writing SDKS with idiomatic code to create more efficient & familiar code. Get coding style recommendations, guidelines, linting tools & more for Java, Ruby, C#, Python, PHP & TypeScript/JavaScript.
keywords: 
    - Idiomatic code
    - programming language
    - coding standards
    - code style
    - linting tools

---

Similar to a design pattern, idiomatic code does a standard task in the generally accepted way for that programming language. In doing so, the style is familiar to the developers in that community.

Most web APIs send and receive data structures in JSON. For JavaScript developers this is perfect as that’s the native format for objects. SDKs in other languages serialize and deserialize JSON into native objects. This allows developers to interact with data in a way that is native to their language.

Coding style varies from language to language. Keep that in mind when applying the naming conventions discussed in the section above. For example, if you choose to follow [Google’s Java style guidelines](https://google.github.io/styleguide/javaguide.html#s5.2.2-class-names), class names are UpperCamelCase, methods are lowerCamelCase and constants are UPPER_SNAKE_CASE. Code style goes beyond naming conventions, to offer best practices around source file structure, braces, indentation, whitespace and much more.

There may be several code styles to choose from in each language. Checkout the [coding standards and code style checkers](https://docs.apimatic.io/generate-sdks/sdk-coding-standards/?utm_source=sdksio&utm_medium=referral) we use at APIMatic. You’ll need to decide which one best represents your developers.

### Java
* [Oracle Java Style Guide](https://www.oracle.com/technetwork/java/codeconvtoc-136057.html)
* [Google’s Java Style Guide](https://google.github.io/styleguide/javaguide.html)
* [The JavaRanch Style Guide](https://javaranch.com/style.jsp)

### Ruby
* [RuboCop](https://github.com/rubocop/ruby-style-guide) (which inspired both [Shopify](https://ruby-style-guide.shopify.dev/) and [AirBnB](https://airbnb.io/projects/ruby/) guides) 

### C#
* [Microsoft coding conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
* [Google C# style guide](https://google.github.io/styleguide/csharp-style.html)
* [StyleCop](https://documentation.help/StyleCop/StyleCop%20Rules.html)

### Python
* [PEP8 - Style Guide for Python Code](https://peps.python.org/pep-0008/)
* [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)
* [The Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/style/) 

### PHP
* [PHP Official coding standards](https://raw.githubusercontent.com/php/php-src/master/CODING_STANDARDS.md)
* [WordPress - PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/)
* [PRS-12 - extended coding style](https://www.php-fig.org/psr/psr-12/)

### TypeScript/JavaScript
* [JavaScript Standard Style](https://standardjs.com/) (there is one for [TypeScript](https://www.npmjs.com/package/ts-standard) too)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript)

Along with selecting a coding style, seek out linting tools to automatically check that you maintain good code quality. Linting improves code quality by identifying errors or inconsistencies before the code is shipped. Linting is particularly useful in the case of weakly typed languages. Since weakly typed languages are not compiled, errors can only be detected at runtime. Linting acts as an extra layer of protection in this case, checking the code for inconsistencies to ensure that bugs are caught and fixed before release.
