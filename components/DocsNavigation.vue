<script lang="ts" setup>
const routes = [
    {
        label: "Introduction",
        path: "/docs"
    },
]
</script>

<template>
    <div v-for="(route, index) in routes" class="w-full flex flex-col items-start gap-y-4" :key="index">
        <a href={{ route.path }} class="">{{ route.label }}</a>
    </div>
</template>