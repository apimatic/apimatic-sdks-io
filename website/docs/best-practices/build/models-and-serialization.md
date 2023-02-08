---
sidebar_position: 3
sidebar_label: Models & Serialization
title: How SDKs unlock the power of models & serialization for data access in APIs
description: Unlock the power of models and serialization for easier access to data in APIs. Create objects without referencing API documentation and add data validation. 
keywords:
  - APIs
  - JSON
  - Transfer Object
  - POJO
  - Developers

---

# Models & Serialization
Models are a common way to organize data you send and receive through APIs. It’s easier to access and update data when it’s been translated from a JSON string into a native data structure for developers to utilize. Our SDKs can help developers by handling the common tasks of serializing and deserializing JSON data into a format that is native to the programming language.

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

While transfer objects have been adapted to other languages like C# with POCO, the concept hasn’t always been welcomed. It could be argued that native structures like a hash in Ruby or dictionary in Python are preferable and more idiomatic over a concept that originated in the Java language.

Regardless of language, defined models offer benefits to developers. They provide a way to create new objects with your SDK without referencing API documentation to know the names of properties, their data types and if they are read-only or read-write. Data validation can be added to ensure required properties are set. Libraries that handle serializing and deserializing rely on defined models with getters and setters in order to do their magic.  
