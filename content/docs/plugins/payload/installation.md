---
title: "Installation"
description: "Payload CMS auth plugin installation"
seo:
  title: "Installation"
  description: "Payload CMS auth plugin installation"
---

::section

[Installation]{.content-title}
<br/>
<br/>

**1. Install the package**

The plugin is available on [NPM](https://www.npmjs.com/package/payload-auth-plugin). Use the following command to install it in your Payload CMS project:
<br/>
<br/>

```sh [npm]
npm install payload-auth-plugin
```

```sh [yarn]
yarn add payload-auth-plugin
```

```sh [pnpm]
pnpm add payload-auth-plugin
```

```sh [bun]
bun add payload-auth-plugin
```

<br/>
<br/>

**2. Environment Variables**

Create a `.env` file in the root of you project and add the following environment variables:

<br/>

```txt [.env]
PAYLOAD_SECRET=
```

::blockquote

**_TIP_:** To generate a `PAYLOAD_SECRET` you can run `openssl rand -base64 32` command in your terminal to generate unique random base64 string.
::

<br/>
<br/>

**3. Usage**

::div{.pl-4}

**3.1. Importing admin auth plugin:**

In the Payload CMS config file, import the admin Payload auth plugin and add it to the plugins array:

<br/>

```ts [src/payload.config.ts] {3, 9-11}
import { buildConfig } from "payload/config";
// --- rest of the imports
import { adminAuthPlugin } from "payload-auth-plugin";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    adminAuthPlugin({
      // --- plugin config goes here
    }),
  ],
});
```

<br/>

**3.2. Adding an OAuth provider:**

Import the required provider from the plugin and pass it to the `providers` array in plugin config. For example, lets setup Google OAuth Provider.

<br/>

```ts [src/payload.config.ts] {3, 10-15}
import { buildConfig } from "payload/config";
import { adminAuthPlugin } from "payload-auth-plugin";
import { GoogleAuthProvider } from "payload-auth-plugin/providers";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    adminAuthPlugin({
      providers: [
        GoogleAuthProvider({
          client_id: process.env.GOOGLE_PROVIDER_CLIENT_ID as string,
          client_secret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET as string,
        }),
      ],
    }),
  ],
});
```

<br/>

**3.3. Adding sign-in component:**

Now, create a auth component for the sign-in page.

<br/>

```tsx [src/components/Auth/index.tsx]
import { Button } from "@payloadcms/ui";
import { signin } from "payload-auth-plugin/client";
export const AuthComponent = () => {
  return (
    <Button onClick={() => signin("google")} type="button">
      Sign in with Google
    </Button>
  );
};
```

Finally, import the custom sign-in component in your Payload config.

<br/>

```ts [src/payload.config.ts] {5-7}
export default buildConfig({
  // --- rest of the config
  admin: {
    // --- rest of the admin config
    components: {
      afterLogin: ["/components/auth#AuthComponent"],
    },
  },
});
```

This will append the custom auth component after Payload's default login component. Use `beforeLogin` to add the custom auth component above the default login component.
::

::
