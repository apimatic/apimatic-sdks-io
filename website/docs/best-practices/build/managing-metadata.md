---
sidebar_position: 7
---

# Managing metadata
Metadata is good for informational purposes but shouldn’t influence the behavior of your API. Your API may be designed to capture additional information from requests or return additional information in every response. Using custom headers to relay information is a common pattern. Your SDK can help developers handle this additional information. 

A common use case is to set a custom user-agent header that identifies your SDK and the version used to make the API call. This helps you track adoption of your different SDKs and technical support teams can better troubleshoot issues by understanding which version of a SDK a developer is using.

Another example is providing custom headers with rate limit details (X-DayLimit-Remaining, X-MinLimit-Remaining and X-AppMinLimit-Remaining). It's important this metadata be accessible by developers along with deserialized objects so they’d know the number of calls remaining against each limit. 