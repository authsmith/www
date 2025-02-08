<script lang="ts" setup>
defineProps({
    nodes: {
        type: Array,
        required: true,
    },
});
</script>

<template>

    <ul class="ml-[12px] h-full space-y-2 mt-2">
        <FileTreeNode v-for="(node, index) in nodes" :key="index" :node="node" />
    </ul>
</template>
