---
sidebar_position: 4
sidebar_label: Logging
title: Add Logging in Your SDK
description: Customize your SDK logging with log4j & SLF4J. Get tips to maximize logging capability while controlling data in dev & prod environments.
keywords: 
    - SDK Logging
    - Log4J
    - SLF4J
    - Production Environment
    - Development Environment

---


Logging is the process of recording information about the behavior and performance of an SDK during runtime. This information can include error messages, warnings, debug messages, and other events that occur during the execution of the code.

Reasons for logging include:

* Helping developer identify and fix issues more quickly by logging information about the behavior of the SDK during runtime.
* Understanding performance by logging information that helps developers identify bottlenecks and areas for optimization.
* Perform audits of usage patterns and detect potential security issues through log analysis.
* Ensure compliance with regulatory requirements or industry standards that require logging of certain types of events or information.

SDKs can provide logging functionality by including built-in logging libraries or by integrating with external logging frameworks such as Log4j or Serilog. Logging can be configured to output log messages to various destinations, including console output, log files, or remote logging services.

You can't predict the logging needs of each developer who uses your SDKs. For this reason, allow  developers to customize logging through a configuration mechanism.

You’ll control where logging occurs in your SDK and what information is logged. Allow developers to control what level of severity is logged and where it is logged to (i.e. their terminal). For example, logging each request and response is extremley helpful during development, but developers may wish to turn this off in production. Keep in mind that logging needs may differ between development and production environments. Developers don’t want sensitive customer data to end up in log files.

Lastly, look for a generic logging interface to provide more flexibility to developers. At Xero, we started with [Log4j](https://logging.apache.org/log4j/2.x/) to provide logging in our Java SDK. Later a developer suggested we switch to [SLF4J](https://www.slf4j.org/), a Simple Logging Facade for Java, which allows Java developers to swap in different logging frameworks that operate through SLF4J. For .NET there is [common logging](http://net-commons.github.io/common-logging/). Of course, if a programming language has a single logging mechanism that everyone uses, go ahead and use that one.