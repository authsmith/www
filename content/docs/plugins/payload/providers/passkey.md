---
title: "Passkey Provider"
description: "Payload CMS auth plugin Passkey provider"
seo:
  title: "Passkey Provider"
  description: "Payload CMS auth plugin Passkey provider"
---

::section
[Passkey Provider]{.content-title}

Authenticate using Passkey provider.

::blockquote
**_Warning:_** This provider is not stable and also experimental, it is recommended not to use it in production.
::

<br/>

```ts [src/payload.config.ts] {3, 10}
import { buildConfig } from "payload/config";
import { adminAuthPlugin } from "payload-auth-plugin";
import { PasskeyAuthProvider } from "payload-auth-plugin/providers";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    adminAuthPlugin({
      providers: [PasskeyAuthProvider()],
    }),
  ],
});
```

<br/>
::
