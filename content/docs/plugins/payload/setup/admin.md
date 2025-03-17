---
title: "Payload Auth - Admin Plugin Setup"
description: "Payload CMS Auth admin plugin setup"
seo:
  title: "Payload Auth - Admin Plugin Setup"
  description: "Payload CMS Auth admin plugin setup"
---

[Admin Plugin Setup]{.content-title}
<br/>
<br/>

**1. Environment Variables**

Create a `.env` file in the root of your project and add the following environment variables:

<br/>

```txt [.env]
PAYLOAD_SECRET=
```

::blockquote

**_TIP_:** To generate a `PAYLOAD_SECRET` you can run `openssl rand -base64 32` command in your terminal to generate unique random base64 string.
::

<br/>
<br/>

**2. Collection**

::div{.pl-4}

**2.1. Accounts**

To store the account meta information that a user has used to signin/signup into the admin, the plugin will need a Accounts collection with some mandatory fields.

<br/>

Use the `withAdminAccountCollection` function exported by the plugin. This function takes the `CollectionConfig` as an argument, you can easily customize the collection configuration as you like and also keep the default setup required by the plugin intact.

```ts [src/collections/Auth/Admin/Account.ts]
import { CollectionConfig } from "payload";
import { withAdminAccountCollection } from "payload-auth-plugin/collection";

export const AdminAccounts: CollectionConfig = withAdminAccountCollection({
  slug: "adminAccounts",
});
```

::blockquote

**_NOTE_:** The `slug` is mandatory and should be unique. Remember that you will have to use this slug in the plugin configuration later.
::

::
<br/>
<br/>

**3. Plugin Setup**

::div{.pl-4}

**3.1. Importing admin auth plugin:**

In the Payload CMS config file, import the admin Payload auth plugin and add it to the plugins array:

<br/>

```ts [src/payload.config.ts] {3, 9-11}
import { buildConfig } from "payload/config";
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

**3.2. Integrating admin accounts collection:**

Import the admin accounts collection you have created before to integrate it with the plugin:

<br/>

```ts [src/payload.config.ts] {3, 9-11}
import { buildConfig } from "payload/config";
import { AdminAccounts } from "@/collections/Auth/Admin/Account";
import { adminAuthPlugin } from "payload-auth-plugin";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    adminAuthPlugin({
      accountsCollectionSlug: AdminAccounts.slug,
    }),
  ],
});
```

<br/>

**3.3. Adding providers:**

Import the required provider from the plugin and pass it to the `providers` array in the plugin configuration. For example, lets setup Google OAuth Provider.

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
      accountsCollectionSlug: AdminAccounts.slug,
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
<br/>

**4. Client Components**

::div{.pl-4}

**4.1. Create a sign-in component**

Now, create a auth component for the sign-in page.

<br/>

```tsx [src/components/Auth/index.tsx]
"use client";

import { Button } from "@payloadcms/ui";
import { adminClient } from "payload-auth-plugin/client";

const { signin } = adminClient();

export const AuthComponent = () => {
  const router = useRouter();

  const handleGoogleSignin = () => {
    const { data, message, isSuccess, isError } = signin().oauth("google");
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      router.push("/admin");
    }
  };

  return (
    <Button onClick={handleGoogleSignin} type="button">
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
<br/>
<br/>

<br/>
<br/>
<br/>

::div{ .flex .items-center .justify-between}
[&laquo; Setup](/docs/plugins/payload/setup){.doc-nav}

[App &raquo;](/docs/plugins/payload/setup/app){.doc-nav}

::

::
