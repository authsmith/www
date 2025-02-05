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
                                label: 'Auth0',
                                path: '/docs/plugins/payload/authentication/auth0',
                                type: 'internalLink',
                            },
                        ]
                    },
                ]
            },
            {
                label: 'Contributions',
                path: '/docs/plugins/contributions',
                type: 'internalLink',
            },
        ],
    },
    {
        label: "SDKs",
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
const closeMobileNav = ref(true)
const toggleMobileNav = () => {
    closeMobileNav.value = !closeMobileNav.value;
};
</script>

<template>
    <div class="relative lg:hidden">
        <span :class="['rotate-0 fixed top-14 left-6 z-10', { 'rotate-180': closeMobileNav }]" @click="toggleMobileNav">
            >></span>
    </div>
    <div :class="['fixed max-w-64 w-full z-50 flex flex-col top-24 lg:top-16',
        { '-left-80 lg:left-6': closeMobileNav },
        { 'left-6 lg:left-6': !closeMobileNav }
    ]">
        <div :class="[
            'bg-dark w-full relative lg:col-span-2 space-y-4 lg:space-y-0',
        ]">
            <nav class="flex flex-col items-start gap-y-4 dashed-border px-4 py-4 h-[86vh]">
                <FileTree :nodes="routes" />
            </nav>
        </div>
    </div>

</template>
