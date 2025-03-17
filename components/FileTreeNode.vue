<script lang="ts" setup>
defineProps({
    node: {
        type: Object,
        required: true,
    },
});

const currentRoute = useRoute();
const currentPath = currentRoute.path;

// Utility function to determine if a directory is active
const isActiveDirectory = (directoryPath: string) => currentPath.includes(directoryPath);

</script>

<template>
    <li class="w-full cursor-pointer text-[11px]">
        <!-- Internal Link -->
        <div v-if="node.type === 'internalLink'" class="flex items-center gap-2 group">
            <span
                :class="[{ 'opacity-0 group-hover:opacity-55': currentPath !== node.path }, { 'text-[#4BF3C8]': currentPath === node.path }]">></span>
            <NuxtLink :to="node.path" prefetch
                :class="[{ 'group-hover:text-[#4BF3C8]': currentPath !== node.path }, { 'text-[#4BF3C8]': currentPath === node.path }]">
                {{ node.label }}</NuxtLink>
        </div>

        <!-- Directory -->
        <div v-else-if="node.type === 'directory'" class="w-full">
            <div class="flex items-center gap-2 group">
                <span
                    :class="[{ 'opacity-0 rotate-0 group-hover:opacity-55': !isActiveDirectory(node.path) }, { 'rotate-90': isActiveDirectory(node.path) }]">></span>
                <NuxtLink :to="node.path" prefetch
                    :class="[{ 'group-hover:text-[#4BF3C8] ': currentPath !== node.path }, { 'text-[#4BF3C8]': currentPath === node.path }]">
                    {{ node.label }}</NuxtLink>
            </div>

            <!-- Render child nodes if any -->
            <DirectoryTree v-if="node.tree && node.tree.length && isActiveDirectory(node.path)" :nodes="node.tree" />
        </div>
    </li>
</template>
