---
sidebar_position: 9
image: /covers/best-practices/build/distribute.png
sidebar_label: Distribution
title: SDK Distribution with Package Publishing
description: Make sure your software development kits (SDKs) are accessible to developers by publishing them to popular package management platforms for each language. Include a changelog with each release and use semantic versioning.
keywords:
    - SDKs
    - package management
    - semantic versioning
    - changelogs
    - developers
---

Package publishing is the process of sharing software packages with others. A software package typically contains the compiled code, dependencies, and other resources required to use a library, framework, or application. You'll want to use package publishing to share your SDK with developers. By publishing (essentially a fancy word for uploading) your SDK to these public repositories, others can download and you use them. This simplifies the process of downloading and updating any libraries they depend on in their application.

Package publishing involves creating a distributable package of software that typically contains the compiled code, documentation, and any necessary dependencies. 

There are many popular package registries or repositories available, such as Maven Central for Java packages, npm for Node.js packages, and PyPI for Python packages. These registries provide a centralized location for developers to find and download packages.

Here are popular package management platforms for each respective language. 

| Java | C# | Python | PHP | JavaScript | Ruby |
| :---------: | :---------: | :---------: | :---------: | :---------: | :---------: |
| [Maven](https://mvnrepository.com/) | [NuGet](https://www.nuget.org/) | [PyPi](https://pypi.org/) | [Packagist](https://packagist.org/) | [NPM](https://www.npmjs.com/) | [RubyGems](https://rubygems.org/) |

The steps to publish your SDK is best explained by the platforms listed above.

## How package managers help developers

You might be wondering why go to all this trouble.

Let's look at how Maven a popular build automation tool helps Java download and manage dependencies like your SDK.

Maven uses an XML-based file called pom.xml (Project Object Model) to describe a project's configuration, dependencies, and build process. The pom.xml file defines the project's metadata, such as the project name, version, and description. It also includes the project's dependencies, which are automatically downloaded from a central repository when needed.

Here is a basic *pom.xml* file a Java developer includes in the root of their application. 

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <!-- Project metadata -->
    <groupId>com.example</groupId>
    <artifactId>my-project</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!-- Dependencies -->
    <dependencies>
        <!-- SDK dependency -->
        <dependency>
            <groupId>com.example.sdk</groupId>
            <artifactId>sdk-library</artifactId>
            <version>1.0.0</version>
        </dependency>
    </dependencies>
</project>
```

The **sdk-library** is a dependency and version 1.0.0 will be downloaded when the developer runs the command.

``` bash
mvn install
```

When version 1.1.0 is released, the developer can review what has changed and when ready update the SDK version in pom.xml and run mvn install to download the latest version of the SDK.


## Semantic Versioning

Semantic versioning and a changelog for each release of your SDK is important. Developers will use this information to learn what changes have been made, how it might impact their application, and any work required to support the update. 

In this example, our SDK is at major version 1 with 0 minor releases and 0 patches.

```
1.0.0
```

Major version changes are breaking, minor versions add new functionality while remaining backwards compatible and patches are minor cosmetic releases that don’t impact functionality in any significant way. 

## Change log

A change log provides a summary of the changes made to your SDK over time, including new features, bug fixes, and other improvements. Here are some tips for structuring a good change log:

* There are several popular formats for change logs, such as Keep a [Changelog](https://keepachangelog.com/en/1.0.0/), which provides a standardized structure for documenting changes. Following a standard format makes it easier for developers to understand the changes made.

* Group changes by version to help developers understand what changes were made in each release of the SDK. Use semantic versioning to indicate whether a change is a major, minor, or patch release.

* For each change, provide a clear and concise summary that explains what was changed and why. Avoid using technical jargon or acronyms that may be unfamiliar.

* Group changes into categories such as new features, bug fixes, performance improvements, or security updates. This makes it easier for developers to find the information they need.

* Include links to related documentation, such as release notes, user guides, or SDK documentation. This helps developers understand how to use the new features.

* Use a consistent writing style throughout the change log to make it easier to read and understand. Use active voice and avoid using overly technical language or jargon.

* Update the change log regularly as changes are made to the SDK. This makes it easier for developers to keep up-to-date with the latest changes and improvements.
