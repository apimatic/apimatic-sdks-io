---
sidebar_position: 5
sidebar_label: Persistent connection
title: Improve SDK Performance with Persistent Connections
description: HTTP Keep-Alive allows developers to send multiple requests on a single TCP connection, saving network resources and reducing latency. Use the Keep-Alive header to customize timeouts and maximum number of requests for each TCP connection.
keyword:
    - HTTP Keep-Alive
    - Network resources
    - Reduce latency
    - Persistent connections
    - API calls
---

HTTP enables communication between clients and servers. Based around requests and responses, the client makes a connection in order to initiate a request. Once receiving the request, a server executes the request and sends a response.

An HTTP connection involves resolving the DNS of the request, establishing a TCP connection and performing a TLS handshake (ensuring it is secure). Repeatedly establishing connections consumes network resources, causing network congestion and increasing latency. 

HTTP keep alive allows your developers to send and receive multiple HTTP requests through a single TCP connection. Avoiding the need to initialize a new connection for each API call. Connections are persistent by default for HTTP/1.1 clients, while HTTP/1.0 connections you’ll pass the “Connection: keep-alive” request header to explicitly persist a connection. Optionally, you can use the Keep-Alive header to set the timeout and maximum number of requests for a TCP connection.

## Python Persistent Conntection
Here's an example for setting up an HTTP client to establish persistent connection in Python using the requests library:
 
 ``` python
import requests

# Create a session object to reuse the connection
session = requests.Session()

# Set the keep-alive header to enable persistent connections
session.headers.update({'Connection': 'keep-alive'})

# Define the API endpoint URL
url = 'https://api.example.com'

# Define the payload for the API call
payload = {'key': 'value'}

# Make the API call using the session object
response = session.post(url, json=payload)

# Process the API response
if response.status_code == 200:
    data = response.json()
    # Process the API response data
else:
    # Handle API errors
 ```

## PHP Persistent Conntection

Here's another example in PHP using the Guzzle library:

``` php
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

// Create an instance of the Guzzle HTTP client
$client = new Client([
    'http_errors' => false,
    'headers' => [
        'Connection' => 'keep-alive'
    ]
]);

// Define the API endpoint URL
$url = 'https://api.example.com';

// Define the payload for the API call
$payload = [
    'key' => 'value'
];

// Make the API call using the Guzzle HTTP client
$response = $client->post($url, [
    RequestOptions::JSON => $payload
]);

// Process the API response
if ($response->getStatusCode() == 200) {
    $data = json_decode($response->getBody(), true);
    // Process the API response data
} else {
    // Handle API errors
}
```

## Beyond HTTP Keep Alive

 HTTP/2 and HTTP/3 are newer versions of the HTTP protocol that have been designed to improve the performance of API calls and web browsing in general. 
 
 One of the key features of HTTP/2 and HTTP/3 is multiplexing, which allows multiple requests to be sent over a single connection at the same time. In earlier versions of HTTP, each request had to wait for a response before the next request could be sent, leading to slower overall performance. With multiplexing, requests can be interleaved and sent in parallel, improving performance.

Another feature of HTTP/2 and HTTP/3 is header compression, which reduces the size of HTTP headers sent between the client and server. This helps to reduce the amount of data that needs to be transmitted over the network, resulting in faster API calls.

 HTTP/2 and HTTP/3 also support server push, which allows the server to send additional resources to the client before they are requested. This can improve the perceived performance of an API call, as the client does not have to wait for additional resources to be requested and downloaded.

HTTP/3 in particular is designed to reduce latency by using a new transport protocol called QUIC. This protocol is designed to better utilize connections and recover more quickly from errors, leading to faster and more reliable API calls.

Keep in mind that not all servers support these newer protocols. If your API server does support these newer protocals, then select an HTTP library that takes advantage of HTTP/2's multiplexing, header compression, and server push features. Similarly, to take advantage of HTTP/3's features, SDKs will need to use the new QUIC transport protocol and make use of its new API calls and functionality. This will require updating the underlying networking code used by the SDK.