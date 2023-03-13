---
sidebar_position: 7
image: /covers/best-practices/build/managing-metadata.png
sidebar_label: Managing metadata
title: Metadata in SDKs offer Additional Information
description: Managing metadata in an API helps developers track adoption and troubleshoot issues efficiently. Custom user-agent headers can be used to identify the SDK version, while custom rate limit details can be captured
keyword:
    - Metadata
    - API
    - SDK Adoption
    - Troubleshoot Issues
    - Rate Limit
---

Metadata is good for informational purposes but shouldn’t influence the behavior of your API. Your API may be designed to capture additional information from requests or return additional information in every response. Using custom headers to relay information is a common pattern. Your SDK can help developers handle this additional information. 

A common use case is to set a custom user-agent header that identifies your SDK and the version used to make the API call. This helps you track adoption of your different SDKs and technical support teams can better troubleshoot issues by understanding which version of a SDK a developer is using.

Below is an example written in Ruby where user agent meta data is passed in our API call.

``` ruby
require 'net/http'
require 'uri'
require 'json'

# Define the API endpoint URL
url = URI("https://api.example.com")

# Define the payload for the API call
payload = { "key" => "value" }

# Serialize the payload to JSON
payload_json = payload.to_json

# Create a new Net::HTTP object with the API endpoint URL
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

# Create a new Net::HTTP::Post object with the API endpoint path
request = Net::HTTP::Post.new(url.path)

# Set the User-Agent header to a unique value
request["User-Agent"] = "My App Name/1.0"

# Set the content type header to JSON
request["Content-Type"] = "application/json"

# Set the request body to the serialized payload
request.body = payload_json

# Make the API call and capture the response
response = http.request(request)

# Process the API response
if response.code == "200"
  response_body = JSON.parse(response.body)
  # Process the API response data
else
  # Handle API errors
end
```

Another example is an API who's response contains custom headers with rate limit details (X-Ratelimit-Limit and X-Ratelimit-Remaining). It's important this metadata is sufaced properly to developers along with deserialized objects. 

``` csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Define the API endpoint URL
        var apiUrl = "https://jsonplaceholder.typicode.com/posts";

        // Create a new HttpClient instance
        using var client = new HttpClient();

        // Make the API call
        using var response = await client.GetAsync(apiUrl);

        // Get the X-Ratelimit-Limit response header
        if (response.Headers.TryGetValues("X-Ratelimit-Limit", out var limitValues))
        {
            var dayLimit = limitValues.FirstOrDefault();
            Console.WriteLine($"X-Ratelimit-Limit: {dayLimit}");
        }

        // Get the X-Ratelimit-Remaining response header
        if (response.Headers.TryGetValues("X-Ratelimit-Remaining", out var limitRemainingValues))
        {
            var limitRemaining = limitRemainingValues.FirstOrDefault();
            Console.WriteLine($"X-Ratelimit-Remaining: {limitRemaining}");
        }

        // Get the response content as a string
        var responseContent = await response.Content.ReadAsStringAsync();

        // Process the API response
        Console.WriteLine(responseContent);
    }
}
```
