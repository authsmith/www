---
title: "Plugins / Payload"
description: "AuthSmith official Payload CMS auth plugin"
seo:
  title: "Payload Auth Plugin"
  description: "AuthSmith official Payload CMS auth plugin"
---

::section

[Introduction]{.content-title}

Payload CMS auth plugin is created and maintained by [Sourab Pramanik](https://github.com/sourabpramanik){.link-highlight}. This plugin extends the Payload authentication process and implements OAuth and Passkey based authentication features. In its core it uses Payload's auth conventions to adhere to its standards.
<br/>
<br/>

::blockquote
**_NOTE:_** It works with all Payload versions >= 3.0
::
<br/>

[1. How it works?]{.content-title}

The initial goal in developing this plugin was to abstract its configurations and the resources it utilizes, minimizing the setup required by developers. This way, integrating any supported provider with Payload CMS involves minimal effort.
<br/>
<br/>

::blockquote
**_TODO:_** There is a scope for future improvements to make every implementation more and more flexible and straightforward
::
<br/>

[1.1. Collections]{.content-title}

The plugin creates an **Accounts** collection with the slug `accounts`(or you can use a different slug), which includes all the necessary fields it needs to store the provider specific user records. This collection establishes a one-to-one relationship with the Users collection, allowing existing users to sign in with multiple providers. The **Accounts** collection stores information such as the provider's name, issuer, etc., and creates a relation between the account to the user upon first sign-in.
<br/>
<br/>
A single user can have multiple accounts, but each account can be associated with only one user.
<br/>
<br/>
If you already have a collection with the slug `accounts`, it can cause a conflict and prevent the plugin from integrating successfully. To avoid this issue, make sure to use a different slug.
<br/>
<br/>
[1.2. Endpoints]{.content-title}

Payload 3.0 is built on top of [NextJS](https://nextjs.org/){.link-highlight} framework, and there are two sides to this application. One is `admin` and another is `frontend`. This plugin right now enables authentication for the `admin` side but soon it will also support authentication for the `frontend` side.
<br/>
<br/>
For every provider with different protocols, the endpoints are already configured in the plugin. It creates catchl-all segement route and process all requests and responses that directly invokes the plugin core and handles the authentication.
<br/>
<br/>
[1.3. Session]{.content-title}

Payload has exposed ways to use their inbuilt session mechanism to tweak it the way you need. It is helpful to understand and tailor the user session and extend it if needed. To keep things simple and even, the core of the plugin uses Payload session.

<br/>
<br/>
<br/>

::div{ .flex .items-center .justify-between}
[&laquo; Plugins](/docs/plugins){.doc-nav}

[Installation &raquo;](/docs/plugins/payload/installation){.doc-nav}

::

::
