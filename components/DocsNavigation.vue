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
                        label: 'Integration',
                        path: '/docs/plugins/payload/integration',
                        type: 'internalLink',
                    },
                    {
                        label: 'Authentication',
                        path: '/docs/plugins/payload/authentication',
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
    <div :class="['md:hidden rotate-0 absolute top-2 z-10', { 'rotate-180': closeMobileNav }]" @click="toggleMobileNav">
        >></div>
    <div :class="[
        'absolute z-10 bg-dark w-[280px] md:w-full md:relative md:col-span-2 space-y-4 md:space-y-0',
        { '-left-80 md:left-0': closeMobileNav },
        { 'left-6 md:left-0': !closeMobileNav }
    ]">
        <nav class="flex flex-col items-start gap-y-4 dashed-border px-4 py-4 h-[86vh]">
            <FileTree :nodes="routes" />
        </nav>
    </div>

</template>
