<script lang="ts" setup>

const routes = [
    {
        label: 'Introduction',
        path: '/docs',
        type: 'internalLink',
        tree: [],
    },
    {
        label: '/Plugins',
        path: '/docs/plugins',
        type: 'directory',
        tree: [
            {
                label: '/Payload CMS',
                path: '/docs/plugins/payload-cms',
                type: 'directory',
                tree: [
                    {
                        label: 'Integration',
                        path: '/docs/plugins/payload-cms/integration',
                        type: 'internalLink',
                    },
                    {
                        label: '/Authentication',
                        path: '/docs/plugins/payload-cms/authentication',
                        type: 'directory',
                        tree: [
                            {
                                label: 'Auth0',
                                path: '/docs/plugins/payload-cms/authentication/auth0',
                                type: 'internalLink',
                            },
                        ]
                    },
                ]
            },
        ],
    },
    {
        label: "/SDKs",
        path: '/docs/sdks',
        type: 'directory',
        tree: [
            {
                label: 'Elixir',
                path: '/docs/sdks/elixir',
                type: 'internalLink',
            },
            {
                label: 'GoLang',
                path: '/docs/sdks/golang',
                type: 'internalLink',
            },
            {
                label: 'Javscript',
                path: '/docs/sdks/javascript',
                type: 'internalLink',
            },
            {
                label: 'PHP',
                path: '/docs/sdks/php',
                type: 'internalLink',
            },
            {
                label: 'Python',
                path: '/docs/sdks/pyhton',
                type: 'internalLink',
            },
            {
                label: 'Scala',
                path: '/docs/sdks/scala',
                type: 'internalLink',
            },
            {
                label: 'Swift',
                path: '/docs/sdks/swift',
                type: 'internalLink',
            },
            {
                label: 'Rust',
                path: '/docs/sdks/rust',
                type: 'internalLink',
            },
            {
                label: 'Zig',
                path: '/docs/sdks/zig',
                type: 'internalLink',
            },
        ]
    }
];

</script>

<template>
    <nav class="flex flex-col items-start gap-y-4 dashed-border px-4 py-4 h-[90vh]">
        <FileTree :nodes="routes" />
    </nav>
</template>
