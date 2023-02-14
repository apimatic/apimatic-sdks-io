---
sidebar_position: 4
sidebar_label: Community led
title: Engaging Community Led SDK Projects
description: Building a strong developer experience involves taking a "company led, community driven" approach. Build quality SDKs in relevant languages, open source them and recognize the community's hard work - never expecting something without proper compensation.
keywords:
    - SDK Strategy
    - Community Projects
    - Company led
    - Community driven
    - Community engagement
---

Developers love to show off their coding skills and popular APIs are a great opportunity to do this. They may start by solving their own problem (no SDK in their preferred language). Then to help others and receive help from the community, the developer may decide to open source their code on GitHub. Projects like this may gain momentum and be used by many of your developers. 


## 💖 Community Projects
I see these community led libraries as validation that developers find value in your API and want to support other developers using it. You might think, “great, we don't need to invest in SDKs; our community will take care of it for us”. Don’t do this, for the simple reason. It’s not their job to build and maintain an important part of your developer experience. Unless you plan on negotiating compensation for their time, you won’t be in a position to control updates, additions or releases. 

Building your SDK strategy around libraries led by your developer community exclusively is not common. We surveyed over 50 companies with public APIs and [Spotify](https://developer.spotify.com/documentation/web-api/libraries/#libraries) is the only one taking this approach.

## Both official and community
I don’t see it as an either or choice. Either you build all the SDKs or the community does. It’s really an “and” opportunity. Your team can focus on delivering high quality SDKs in the languages most relevant to your target audience and if you feel comfortable designate space in your developer portal to promote popular community libraries. This is a great way to show appreciation for their work. It’s implicit that these projects are built by the community and support will come from the community, not your team. Companies like [Box](https://developer.box.com/sdks-and-tools/), [Twilio SendGrid](https://docs.sendgrid.com/for-developers/sending-email/libraries) and [EasyPost](https://www.easypost.com/docs/libraries) are doing this today.

## Company led, Community driven
You can introduce the concept of **company led, community driven** by open sourcing the SDKs built by your team. This gives developers the opportunity to provide feedback and suggest ways to improve your SDKs in the form of issues and pull requests. You still control the roadmap and releases, but it’s informed by what’s most important to your developers.

:::caution Engaging community led projects

At Xero, we didn't resource our SDK development and instead let the community open source their libraries. We monitored which ones gained traction and eventually added them to our developer portal as the *official* libraries for that language.

We took time to validate they worked properly with our APIs and reached out to the maintainers to thank them for their contributions. Some were happy for the recogniztion and even invited our team in to contribute, respond to issues and merge pull requests. 

Things got uncomfortable when one project got overwhelmed by issues and PRs and requested a full time Xero engineer be assigned to help out. We found our selves in a tough spot. We didn't have resources to build our own SDKs and devoting them to a project we didn't own was a tough sell. In the end, we declined his request which didn't feel great.

Our community engagement turned ugly when TLS 1.0 was deprecated in favor of TLS 1.2.  This change in our API server configuration meant all client libraries needed to enforce use of TLS 1.2 otherwise access would be denied. We reached out to community maintainers to help with this breaking change and one responded with a nasty tweet about how we were asking him to do unpaid work for our benefit. Fair enough, we eventually hacked together a pull request to solve the problem, but we'd clearly failed to manage the situation correctly. 
:::
