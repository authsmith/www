---
title: "Apple OAuth Provider"
description: "Payload CMS auth plugin Apple OAuth provider"
seo:
  title: "Apple OAuth Provider"
  description: "Payload CMS auth plugin Apple OAuth provider"
---

::section
[Apple OAuth Provider]{.content-title}

Authenticate using Apple OAuth provider. Supports both OIDC and OAuth2 protocols.

<br/>

**Callback or Redirect URL pattern**

- For Admin: [https://example.com/api/admin/oauth/callback/apple]{.text-primary}

- For App: [https://example.com/api/{app_name}/oauth/callback/apple]{.text-primary}

<br/>

**For OAuth2**

```ts [src/payload.config.ts] {3, 11-14}
import { buildConfig } from "payload/config";
import { adminAuthPlugin } from "payload-auth-plugin";
import { AppleOAuth2Provider } from "payload-auth-plugin/providers";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    adminAuthPlugin({
      providers: [
        AppleOAuth2Provider({
          client_id: process.env.PROVIDER_CLIENT_ID as string,
          client_secret: process.env.PROVIDER_CLIENT_SECRET as string,
        }),
      ],
    }),
  ],
});
```

<br/>

**For OIDC**

```ts [src/payload.config.ts] {3, 11-13}
import { buildConfig } from "payload/config";
import { adminAuthPlugin } from "payload-auth-plugin";
import { AppleOIDCAuthProvider } from "payload-auth-plugin/providers";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    adminAuthPlugin({
      providers: [
        AppleOIDCAuthProvider({
          client_id: process.env.PROVIDER_CLIENT_ID as string,
        }),
      ],
    }),
  ],
});
```

<br/>

[Parameters]{.content-title}

::div{.pl-4}

::list
• **config** [**_AppleAuthConfig_**](#appleAuthConfig){.link-highlight}
<br/>
::

<br/>

[Returns]{.content-title}

::div{.pl-4}

::list
• **provider** **_OAuth2ProviderConfig_** for `AppleOAuth2Provider`
<br/>

• **provider** **_OIDCProviderConfig_** for `AppleOIDCAuthProvider`
<br/>
::

::

<br/>

[AppleAuthConfig]{.content-title #appleAuthConfig}
::div{.pl-4}

• **AppleAuthConfig.client_id:**

::div{.pl-4}
**Type:** **_string_**

**Description:** `client_id` is a string generated by Apple to identify your Payload app.

**Optional:** No.

```ts
{
  client_id: "";
}
```

::

<br/>

• **AppleAuthConfig.client_secret:**

::div{.pl-4}
**Type:** **_string_**

**Description:** `client_secret` is a private key generated by Apple to authenticate your Payload app. This is not required if you are using AppleOIDCAuthProvider.

**Optional:** No.

```ts
{
  client_secret: "";
}
```

::

<br/>

• **AppleAuthConfig.params:**

::div{.pl-4}
**Type:** **_Record<string, string>_**

**Description:** `params` any additional parameters to pass to the IDP for authorization.

**Optional:** Yes.

```ts
{
  params: {
    // additional parameters
  }
}
```

::
::
