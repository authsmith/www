---
title: "Password Provider"
description: "Payload CMS auth plugin Password provider"
seo:
  title: "Password Provider"
  description: "Payload CMS auth plugin Password provider"
---

::section
[Password Provider]{.content-title}

Use password based authentication flow for sign-in and sign-ups.

::blockquote

**_NOTE_:** This provider is only available for App plugin, not for Admin plugin.
::

<br/>
<br/>

**Usage**

<br/>

```ts [src/payload.config.ts]
import { buildConfig } from "payload/config";
import { appAuthPlugin } from "payload-auth-plugin";
import { PasswordProvider } from "payload-auth-plugin/providers";

export default buildConfig({
  // --- rest of the config
  plugins: [
    // --- rest of the plugins
    appAuthPlugin({
      providers: [PasswordProvider()],
    }),
  ],
});
```

<br/>

**Sign up**

Use email and password to sign-up.

<br/>

```ts [src/lib/auth.ts]
import { appClient } from "payload-auth-plugin/client";

const { signup } = appClient({ name: "app" });

interface Signup {
  email: string;
  password: string;
  profile?: Record<string, any>;
}

export const handleSignup = async (value: Signup) => {
  const { password } = signup();
  const response = await password(value);
  return response;
};
```

**Parameter**

• **email**

::div{.pl-4}
**Type:** **_string_**

**Description:** `email` is required for sign-up. It should be unique and non-existing in the application.

**Optional:** No.

```ts
{
  email: "";
}
```

::

• **password**

::div{.pl-4}
**Type:** **_string_**

**Description:** `password` is required for sign-up.

**Optional:** No.

```ts
{
  password: "";
}
```

::

• **profile**

::div{.pl-4}
**Type:** **_Record<string,any>_**

**Description:** `profile` is an object which can be any extra attribute that you want to store in the User collection when the user sign-up like avatar, name, and etc.

**Optional:** Yes.

```ts
{
  profile: {
  }
}
```

::

<br/>

**Sign in**

Use email and password to sign-in.

<br/>

```ts [src/lib/auth.ts]
import { appClient } from "payload-auth-plugin/client";

const { signin } = appClient({ name: "app" });

interface Signin {
  email: string;
  password: string;
}

export const handleSignin = async (value: Signin) => {
  const { password } = signin();
  const response = await password(value);
  return response;
};
```

**Parameter**

• **email**

::div{.pl-4}
**Type:** **_string_**

**Description:** `email` is required for sign-in. It should be unique and existing in the application.

**Optional:** No.

```ts
{
  email: "";
}
```

::

• **password**

::div{.pl-4}
**Type:** **_string_**

**Description:** `password` is required for sign-in.

**Optional:** No.

```ts
{
  password: "";
}
```

::

<br/>

**Forgot Password**

Use email to start password recovery process. It is required to have the [email adapters]("https://payloadcms.com/docs/email/overview"){.link-highlight} setup in Payload to send recovery code via an email.

<br/>

```ts [src/lib/auth.ts]
import { appClient } from "payload-auth-plugin/client";

const { forgotPassword } = appClient({ name: "app" });

export const handleForgotPassword = async (email: string) => {
  const response = await forgotPassword({ email });
  return response;
};
```

**Parameter**

• **email**

::div{.pl-4}
**Type:** **_string_**

**Description:** `email` is required for initiating the password recovery process.

**Optional:** No.

```ts
{
  email: "";
}
```

::

<br/>

**Recover Password**

Recover password using the code sent to via an email.

<br/>

```ts [src/lib/auth.ts]
import { appClient } from "payload-auth-plugin/client";

const { passwordRecover } = appClient({ name: "app" });

interface PasswordRecover {
  email: string;
  password: string;
  code: string;
}

export const handleRecoverPassword = async (value: PasswordRecover) => {
  const response = await passwordRecover(value);
  return response;
};
```

**Parameter**

• **email**

::div{.pl-4}
**Type:** **_string_**

**Description:** `email` is required and should be same as the email used for initiating password recovery process.

**Optional:** No.

```ts
{
  email: "";
}
```

::

• **password**

::div{.pl-4}
**Type:** **_string_**

**Description:** `password` a new password to set.

**Optional:** No.

```ts
{
  password: "";
}
```

::

• **code**

::div{.pl-4}
**Type:** **_string_**

**Description:** `code` sent via an email.

**Optional:** No.

```ts
{
  code: "";
}
```

::

<br/>

**Reset Password**

Reset password when the user is having an active authenticated session.

<br/>

```ts [src/lib/auth.ts]
import { appClient } from "payload-auth-plugin/client";

const { resetPassword } = appClient({ name: "app" });

interface PasswordReset {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export const handleResetPassword = async (value: PasswordReset) => {
  const response = await resetPassword(value);
  return response;
};
```

**Parameter**

• **email**

::div{.pl-4}
**Type:** **_string_**

**Description:** `email` is required.

**Optional:** No.

```ts
{
  email: "";
}
```

::

• **currentPassword**

::div{.pl-4}
**Type:** **_string_**

**Description:** user has to provide the `currentPassword` to verify user is authentic

**Optional:** No.

```ts
{
  currentPassword: "";
}
```

::

• **newPassword**

::div{.pl-4}
**Type:** **_string_**

**Description:** user has to provide the `newPassword` to replace the `currentPassword`

**Optional:** No.

```ts
{
  newPassword: "";
}
```

::

• **signoutOnUpdate**

::div{.pl-4}
**Type:** **_boolean_**

**Description:** Immediately sign-out user after successfully reseting the password.

**Optional:** Yes.

```ts
{
  signoutOnUpdate: true;
}
```

::

::
