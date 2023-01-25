---
sidebar_position: 4
---

# Logging
It’s difficult to predict the logging needs of developers who will use your SDKs. For this reason, allowing developers to customize logging through a configuration mechanism is appropriate. 

You’ll be in control of where logging occurs in your SDK and what information is logged. Allow developers to control what level of severity is logged and where it is logged to (i.e. their terminal). Importantly, think about how logging requirements may differ between development and production environments. You don’t want sensitive customer data to end up in log files.

Look for a generic logging interface to provide more flexibility to developers. At Xero, we started with [Log4j](https://logging.apache.org/log4j/2.x/) to provide logging in our Java SDK. Later a developer suggested we switch to [SLF4J](https://www.slf4j.org/), a Simple Logging Facade for Java, which allows Java developers to swap in different logging frameworks that operate through SLF4J. For .NET there is [common logging](http://net-commons.github.io/common-logging/). Of course, if a programming language has a single logging mechanism that everyone uses, go ahead and use that one.