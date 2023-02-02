---
sidebar_position: 6
---

# Timeouts and Retries
To quote John Bender from The Breakfast Club, “Screws fall out all the time. The world’s an imperfect place”. Like screws, the cloud and our APIs are not perfect and at times may be unavailable or overloaded. Your SDKs should be designed to handle these temporary disruptions.

![Type of developers](/img/build-the-breakfast-club.webp)

You might be tempted to build a routine that detects responses with status code 5xx or 429 and immediately try again until either a successful response is obtained or the max number of retries is reached. On the face of it, this sounds reasonable. The problem with retrying immediately after a failure is that you may be contributing to the transient problem and delaying recovery.

Exponential backoff with retry means increasing the wait time between retries after each retry failure. For example, you could wait one second after the first failure, then 2 seconds after the second failure, and 4 seconds after the third failure. By taking this approach, you give the API room to recover from a failure.

You can also consider adding a circuit breaker function to your exponential backoff. An SDK that reaches the maximum retries doing exponential backoff can open a circuit breaker that temporarily marks an API as unavailable. This circuit breaker means your SDK knows there is an issue and will manage the situation on the client side. Periodically, the SDK can check service availability and once restored, close the circuit breaker.

Google’s HTTP client library has built in support for exponential backoff.

``` java
ExponentialBackOff backoff = new ExponentialBackOff.Builder()
    .setInitialIntervalMillis(500)
    .setMaxElapsedTimeMillis(900000)
    .setMaxIntervalMillis(6000)
    .setMultiplier(1.5)
    .setRandomizationFactor(0.5)
    .build();
request.setUnsuccessfulResponseHandler(new HttpBackOffUnsuccessfulResponseHandler(backoff));
```