<script lang="ts" setup>
defineProps({
    nodes: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <ul class="ml-[18px] h-full">
        <FileTreeNode v-for="(node, index) in nodes" :key="index" :node="node" />
    </ul>
</template>
