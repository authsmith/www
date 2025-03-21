---
title: "Payload Auth - App Plugin Setup"
description: "Payload CMS Auth app plugin setup"
seo:
  title: "Payload Auth - App Plugin Setup"
  description: "Payload CMS Auth app plugin setup"
---

[App Plugin Setup]{.content-title}
<br/>
<br/>

Payload Auth App Plugin is used for authenticating users in your front-end apps. This plugin will use dedicated Payload collections to store the user and user's account records.

This plugin can be used for multiple apps as well, useful for multi-tenant projects. Create new plugin instances for each front-end app by adding the `appAuthPlugin` with unique name in the Payload plugins array.

<br/>

**1. Environment Variables**

Create a `.env` file in the root of your project and add the following environment variables:

<br/>

```txt [.env]
APP_AUTH_SECRET=
```

::blockquote

**_TIP_:** To generate a `APP_AUTH_SECRET` you can run `openssl rand -base64 32` command in your terminal to generate unique random base64 string.
::

<br/>
<br/>

**2. Collection**

::div{.pl-4}

**2.1. Users**

Required to store the user data.

<br/>

Use the `withAppUsersCollection` function exported by the plugin. This function takes the `CollectionConfig` as an argument, you can easily customize the collection configuration as you like and also keep the default setup required by the plugin intact.

`deleteLinkedAccounts` hook is used to delete all the user linked accounts from the Accounts collection when a user gets deleted. It is optional.

<br/>

```ts [src/collections/Auth/App/User.ts]
import { CollectionConfig } from "payload";
import { withAppUsersCollection } from "payload-auth-plugin/collection";
import { deleteLinkedAccounts } from "payload-auth-plugin/collection/hooks";

export const AppUsers: CollectionConfig = withAppUsersCollection({
  slug: "appUsers",
  admin: {
    defaultColumns: ["name"],
  },
  hooks: {
    afterDelete: [deleteLinkedAccounts("appAccounts")],
  },
});
```

**2.2. Accounts**

To store the account meta information provided by an auth provider that a user has used to signin/signup into the app, the plugin will need a Accounts collection with some mandatory fields.

<br/>

Use the `withAppAccountCollection` function exported by the plugin. This function takes the `CollectionConfig` and Users collection slug for the arguments, you can easily customize the collection configuration as you like and also keep the default setup required by the plugin intact.

<br/>

```ts [src/collections/Auth/App/Account.ts]
import { CollectionConfig } from "payload";
import { withAppAccountCollection } from "payload-auth-plugin/collection";
import { AppUsers } from "@/collections/Auth/App/User";

export const AppAccounts: CollectionConfig = withAppAccountCollection(
  {
    slug: "appAccounts",
    admin: {
      useAsTitle: "id",
    },
  },
  AppUsers.slug
);
```

::blockquote

**_NOTE_:** The `slug` is mandatory and should be unique. Remember that you will have to use this slug in the plugin configuration later.
::

::
<br/>
<br/>

**3. Plugin Setup**

::div{.pl-4}

**3.1. Importing app auth plugin:**

In the Payload CMS config file, import the Payload auth app plugin and add it to the plugins array:

<br/>

```ts [src/payload.config.ts] {3, 8-10}
import { buildConfig } from "payload/config";
import { appAuthPlugin } from "payload-auth-plugin";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    appAuthPlugin({
      secret: process.env.APP_AUTH_SECRET as string,
    }),
  ],
});
```

<br/>

**3.2. Integrating collections:**

Import the app users, and accounts collection you have created before and integrate it with the plugin:

<br/>

```ts [src/payload.config.ts] {3, 11-13}
import { buildConfig } from "payload/config";
import { AppAccounts } from "@/collections/Auth/App/Account";
import { AppUsers } from "@/collections/Auth/App/Users";
import { appAuthPlugin } from "payload-auth-plugin";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    appAuthPlugin({
      secret: process.env.APP_AUTH_SECRET as string,
      usersCollectionSlug: AppUsers.slug,
      accountsCollectionSlug: AppAccounts.slug,
    }),
  ],
});
```

<br/>

**3.3. Adding providers:**

Import the required provider from the plugin and pass it to the `providers` array in the plugin configuration. For example, lets setup Google OAuth Provider.

<br/>

```ts [src/payload.config.ts] {3, 13-18}
import { buildConfig } from "payload/config";
import { appAuthPlugin } from "payload-auth-plugin";
import { GoogleAuthProvider } from "payload-auth-plugin/providers";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    appAuthPlugin({
      secret: process.env.APP_AUTH_SECRET as string,
      usersCollectionSlug: AppUsers.slug,
      accountsCollectionSlug: AppAccounts.slug,
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

> [!NOTE]
> Don't forget to add add `AppUsers` and `AppAccounts` to `collections` in `payload.config.ts`

<br/>
<br/>

**4. Client Components**

::div{.pl-4}

**4.1 Sign-in**
Create a new file to implement auth flows

```tsx [src/lib/auth.ts]
import { appClient } from "payload-auth-plugin/client";

const { signin } = appClient({ name: "app" });

export const onGoogleAppSignin = async () => {
  const { data, message, isSuccess, isError } = await signin().oauth("google");
  return {
    data,
    message,
    isSuccess,
    isError,
  };
};
```

`name` should be same as the name that is passed on to the `appAuthPlugin`.

Now, create a new auth page for sign-in/sign-up and import the Google sign-in function.

<br/>

```tsx [src/app/auth/page.tsx]
"use client";

import { onGoogleAppSignin } from "@/lib/auth";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const router = useRouter();

  const handleOauthSignin = async () => {
    const { data, message, isSuccess, isError } = await onGoogleAppSignin();
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      router.push("/");
    }
  };
  return (
    <button onClick={onGoogleAppSignin} type="button">
      Sign in with Google
    </button>
  );
};

export default AuthPage;
```

**4.2 Get User**

```ts [src/lib/auth.ts]
"use client";
import React, { useEffect } from "react";
import { getCurrentUser } from "payload-auth-plugin/client/hooks";

export const getUser = () => {
  const res = await getCurrentUser({ name: "app" }, { fields: ["email"] });
  return res;
};
```

`fields` is an array of users collection field names that you want to access.

<br/>

**4.3 Refresh Session**

Refresh the user session before it expires

```ts [src/lib/auth.ts]
"use client";
import { appClient } from "payload-auth-plugin/client";

const { refresh } = appClient({ name: "app" });

export const handleRefresh = async () => {
  const res = await refresh();
  return res;
};
```

::

<br/>
<br/>
<br/>

::div{ .flex .items-center .justify-between}
[&laquo; Admin](/docs/plugins/payload/setup/admin){.doc-nav}

[Configuration &raquo;](/docs/plugins/payload/configuration){.doc-nav}

::

::
