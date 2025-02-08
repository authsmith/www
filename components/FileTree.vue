<script lang="ts" setup>
defineProps({
    nodes: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <ul class="space-y-4">
        <FileTreeNode v-for="(node, index) in nodes" :key="index" :node="node" />
    </ul>
</template>
