---
sidebar_position: 5
---

# Persistent connection
HTTP enables communication between clients and servers. Based around requests and responses, the client makes a connection in order to initiate a request. Once receiving the request, a server executes the request and sends a response.

A HTTP connection involves resolving the DNS of the request, establishing a TCP connection and performing a TLS handshake (ensuring it is secure). Repeatedly establishing connections consumes network resources, causes network congestion and increases latency. 

HTTP keep alive allows your developers to send and receive multiple HTTP requests through a single TCP connection. Avoiding the need to initialize a new connection for each API call. Connections are persistent by default for HTTP/1.1 clients, while HTTP/1.0 connections you’ll pass the “Connection: keep-alive” request header to explicitly persist a connection. Optionally, you can use the Keep-Alive header to set the timeout and maximum number of requests for a TCP connection.

Below is an example in Java

``` java
URL url = new URL("https://api.yourdomain.com");
HttpURLConnection http = (HttpURLConnection)url.openConnection();
http.setRequestProperty("Connection", "keep-alive");
http.setRequestProperty("Keep-Alive", "timeout=5, max=100");

System.out.println(http.getResponseCode() + " " + http.getResponseMessage());
http.disconnect();
```
