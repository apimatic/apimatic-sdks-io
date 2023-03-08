---
sidebar_position: 3
sidebar_label: Models & Serialization
title: Benefits of Models and Data Typing
description: Unlock the power of models and serialization for easier access to data in APIs. Create objects without referencing API documentation and add data validation. 
keywords:
  - APIs
  - JSON
  - Transfer Object
  - POJO
  - Developers

---

A data model is a representation of the data that is returned from an API in a format that is easy for developers to work with. It defines the structure and properties of the data in a standardized way, allowing the SDK to deserialize JSON responses into native data types that can be used in the developer's code.

A data model can include information about the type of data, such as whether it is a string, number, or boolean, as well as information about the properties of the data, such as the name of the property, its data type, and any constraints on its values.

By defining data models, SDKs can simplify the process of working with API data by providing a consistent and well-defined approach to deserializing JSON responses. This can help to reduce the time and effort required to write custom code for handling API data and improve the reliability and maintainability of the code. Additionally, data models can be used to provide autocomplete support in integrated development environments (IDEs) and enable static analysis tools to catch issues before they become runtime errors.

In Java, the [Transfer Object](https://www.geeksforgeeks.org/transfer-object-pattern-in-java/) pattern also known as a POJO (plain old Java object) was developed to describe classes built to be passive data structures. A common trait of transfer objects is to define properties as private and limit access to them through getters, setters, and purpose built methods. 

For example, I might create a transfer object to represent a person and allow access to get or set a person’s birth date. I also might include a method to calculate their age based on the current date.

``` java
private LocalDate birthDate;

public LocalDate getBirthDate() {
  return birthDate;
}

public void setBirthDate(LocalDate newBirthDate) {
  birthDate = newBirthDate;
}

public int calculateAge(LocalDate currentDate) {
  return Period.between(birthDate, currentDate).getYears();;
}
```

The benefit of data typing is generally recognized is most programming languages. Deseralizing untyped JSON data into models with typed properties provide this to developers using your SDKs.

Transfer objects have been adapted in C# with POCO. Ruby and Python have type-hinting support. Ruby has [Sorbet](https://sorbet.org/) which helps you add type-hints that later help provide IDE features like autocomplete and jump-to-defintion. Similarly, Python has [mypy](https://mypy.readthedocs.io/en/stable/index.html). TypeScript is a typed superset of JavaScript and has extensive typing support that works both in JavaScript and TypeScript codebases. Even untyped languages like PHP has built-in typing support as developers working in large codebases see the benefits of having some type inforomation, at least on the interface level.

Type-hints in SDKs help catch issues in the developer's code via static analysis; the type-checker when run via the command-line or via IDE catches bugs before the code is deployed to production in much the same way compilers catch issues in strongly-typed languages like Java and C#. Where possible use  type-information in the SDK to catch runtime issues as well so that developers relying on static analysis in languages like TypeScript which ignore types during runtime do not run into surprises when they deploy their code to production.

Regardless of language, defined models offer benefits to developers. They increase developer productivity by reducing the need to reference API documentation and offer data validation to ensure required properties are set.
