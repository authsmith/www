<script lang="ts" setup>

const routes = [
    {
        label: 'Introduction',
        path: '/docs',
        type: 'internalLink',
        tree: [],
    },
    {
        label: 'Plugins',
        path: '/docs/plugins',
        type: 'directory',
        tree: [
            {
                label: 'Payload',
                path: '/docs/plugins/payload',
                type: 'directory',
                tree: [
                    {
                        label: 'Installation',
                        path: '/docs/plugins/payload/installation',
                        type: 'internalLink',
                    },
                    {
                        label: 'Setup',
                        path: '/docs/plugins/payload/setup',
                        type: 'directory',
                        tree: [
                            {
                                label: 'Admin',
                                path: '/docs/plugins/payload/setup/admin',
                                type: 'internalLink',
                            },
                            {
                                label: 'Front-end/App',
                                path: '/docs/plugins/payload/setup/app',
                                type: 'internalLink',
                            },
                        ]
                    },
                    {
                        label: 'Configuration',
                        path: '/docs/plugins/payload/configuration',
                        type: 'internalLink',
                    },
                    {
                        label: 'Providers',
                        path: '/docs/plugins/payload/providers',
                        type: 'directory',
                        tree: [
                            {
                                label: 'Apple',
                                path: '/docs/plugins/payload/providers/apple',
                                type: 'internalLink',
                            },
                            {
                                label: 'Atlassian',
                                path: '/docs/plugins/payload/providers/atlassian',
                                type: 'internalLink',
                            },
                            {
                                label: 'Auth0',
                                path: '/docs/plugins/payload/providers/auth0',
                                type: 'internalLink',
                            },
                            {
                                label: 'AWS Cognito',
                                path: '/docs/plugins/payload/providers/cognito',
                                type: 'internalLink',
                            },
                            {
                                label: 'Discord',
                                path: '/docs/plugins/payload/providers/discord',
                                type: 'internalLink',
                            },
                            {
                                label: 'Facebook',
                                path: '/docs/plugins/payload/providers/facebook',
                                type: 'internalLink',
                            },
                            {
                                label: 'GitHub',
                                path: '/docs/plugins/payload/providers/github',
                                type: 'internalLink',
                            },
                            {
                                label: 'GitLab',
                                path: '/docs/plugins/payload/providers/gitlab',
                                type: 'internalLink',
                            },
                            {
                                label: 'Google',
                                path: '/docs/plugins/payload/providers/google',
                                type: 'internalLink',
                            },
                            {
                                label: 'Microsoft Entra',
                                path: '/docs/plugins/payload/providers/microsoft-entra',
                                type: 'internalLink',
                            },
                            {
                                label: 'Passkey ⚠',
                                path: '/docs/plugins/payload/providers/passkey',
                                type: 'internalLink',
                            },
                            {
                                label: 'Password',
                                path: '/docs/plugins/payload/providers/password',
                                type: 'internalLink',
                            },
                            {
                                label: 'Slack',
                                path: '/docs/plugins/payload/providers/slack',
                                type: 'internalLink',
                            },
                        ]
                    },
                    {
                        label: 'Contribution',
                        path: '/docs/plugins/payload/contribution',
                        type: 'internalLink',
                    },
                ]
            },
        ],
    },
    // {
    //     label: "SDKs",
    //     path: '/docs/sdks',
    //     type: 'directory',
    //     tree: [
    //         {
    //             label: 'Elixir',
    //             path: '/docs/sdks/elixir',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'GoLang',
    //             path: '/docs/sdks/golang',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'Javscript',
    //             path: '/docs/sdks/javascript',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'PHP',
    //             path: '/docs/sdks/php',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'Python',
    //             path: '/docs/sdks/pyhton',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'Scala',
    //             path: '/docs/sdks/scala',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'Swift',
    //             path: '/docs/sdks/swift',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'Rust',
    //             path: '/docs/sdks/rust',
    //             type: 'internalLink',
    //         },
    //         {
    //             label: 'Zig',
    //             path: '/docs/sdks/zig',
    //             type: 'internalLink',
    //         },
    //     ]
    // }
];
const closeMobileNav = ref(true)
const toggleMobileNav = () => {
    closeMobileNav.value = !closeMobileNav.value;
};
</script>

<template>
    <div class="relative lg:hidden">
        <span :class="['rotate-0 fixed top-14 left-6 z-50', { 'rotate-180': closeMobileNav }]" @click="toggleMobileNav">
            >></span>
    </div>
    <div :class="['fixed max-w-64 w-full z-40 flex flex-col top-8',
        { '-left-80 lg:left-0': closeMobileNav },
        { 'left-0 lg:left-0': !closeMobileNav }
    ]">
        <div :class="[
            'bg-dark w-full relative lg:col-span-2 space-y-4 lg:space-y-0 dashed-border pr-4',
        ]">
            <nav class="flex flex-col items-start gap-y-6 px-6 h-screen overflow-y-scroll pt-14 lg:pt-6 pb-12">
                <FileTree :nodes="routes" />
            </nav>
        </div>
    </div>
</template>
