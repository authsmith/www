---
title: "Setup"
description: "Payload CMS auth plugin setup"
seo:
  title: "Setup"
  description: "Payload CMS auth plugin setup"
---

::section

The Payload app has both admin and front-end in a single NextJS project, this plugin supports both admin and front-end side authentication. As per the latest update this plugin only supports authentication within the Payload app.

<br/>

**NextJS config**

If you are using OAuth providers then it is mandatory to add a header to the `nextConfig`. This is a workaround and can be removed in future.

<br/>

```ts [next.config.js] {10, 3-13}
const nextConfig = {
  //--- rest of the config
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },
};
```

<br/>

In near future releases, this plugin will also support authentication for front-end apps outside Payload.

<br/>
<br/>
<br/>

::div{ .flex .items-center .justify-between}
[&laquo; Installation](/docs/plugins/payload/installation){.doc-nav}

[Admin &raquo;](/docs/plugins/payload/setup/admin){.doc-nav}

::
::
