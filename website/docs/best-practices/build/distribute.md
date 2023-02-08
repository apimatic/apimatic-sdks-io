---
sidebar_position: 9
sidebar_label: Distribution
title: How to Make Your SDKs Accessible - Distribution and Semantic Versioning
description: Make sure your software development kits (SDKs) are accessible to developers by publishing them to popular package management platforms for each language. Include a changelog with each release and use semantic versioning.
keywords:
    - SDKs
    - package management
    - semantic versioning
    - changelogs
    - developers
---

# Distribution
SDKs should be published to popular package management platforms for each respective language. This is how developers manage project dependencies and it’s an expectation they will have for your SDKs. 

| Java | C# | Python | PHP | JavaScript | Ruby |
| :---------: | :---------: | :---------: | :---------: | :---------: | :---------: |
| [Maven](https://mvnrepository.com/) | [NuGet](https://www.nuget.org/) | [PyPi](https://pypi.org/) | [Packagist](https://packagist.org/) | [NPM](https://www.npmjs.com/) | [RubyGems](https://rubygems.org/) |

Semantic versioning and a changelog for each release is important. Major version changes are breaking, minor versions add new functionality while remaining backwards compatible and patches are minor cosmetic releases that don’t impact functionality in a significant way. Change logs are where developers learn the details behind each release and help to decide when to perform an upgrade.
