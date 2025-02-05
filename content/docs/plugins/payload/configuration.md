---
title: "Configuration"
description: "Payload CMS auth plugin configuration"
seo:
  title: "Configuration"
  description: "Payload CMS auth plugin configuration"
---

::section
Payload Auth Plugin configuration options.
<br/>
<br/>
[PluginOptions]{.content-title}
<br/>

::list
○ [enabled](#options-enabled){.link-highlight} **_boolean_**
<br/>

○ [providers](#options-providers){.link-highlight} **_Array_**
<br/>

○ [successPath](#options-successPath){.link-highlight} **_string_**
<br/>

○ [allowSignUp](#options-allowSignUp){.link-highlight} **_boolean_**
<br/>
::

<br/>
<br/>

::div{.pl-4}
[enabled]{.content-title #options-enabled}
<br/>

**Type:** boolean

**Description:** Option to either enable or disable the plugin for Payload to use.

**Default:** true

**Optional:** Yes.
<br/>

```ts
{
  enabled: true;
}
```

<br/>

[providers]{.content-title #options-providers}
<br/>

**Type:** Array

**Description:** Array of OAuth or Passkey providers.

**Optional:** No.
<br/>

```ts
{
  providers: [
    GoogleAuthProvider({
        client_id: "GOOGLE_CLIENT_ID"
        client_secret: "GOOGLE_CLIENT_SECRET"
    })
  ];
}
```

<br/>

[successPath]{.content-title #options-successPath}
<br/>

**Type:** string

**Description:** Path to redirect users on successful sign-in.

**Default:** "/admin"

**Optional:** Yes.
<br/>

```ts
{
  successPath: "/{my-success-path}";
}
```

<br/>

[allowSignUp]{.content-title #options-allowSignUp}
<br/>

**Type:** boolean

**Description:** Allows auto sign up and creates user in the collection if doesn't exist. **This should be used at the admin's discretion.**

**Default:** false

**Optional:** Yes.
<br/>

```ts
{
  allowSignUp: true;
}
```

::

::
