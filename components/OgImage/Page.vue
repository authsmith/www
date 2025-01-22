<script setup lang="ts">
withDefaults(defineProps<{
    title?: string
    description?: string
}>(), {
    title: 'title',
    description: "description"
})
</script>

<template>
    <div class="h-full w-full font-body text-white bg-[#121417] p-20">
        <div class="flex items-start justify-start h-full">
            <div class="flex flex-col justify-between w-full h-full">
                <div class="flex flex-row items-start justify-between">
                    <h1 class="text-[80px] font-bold text-left">
                        {{ title }}
                    </h1>
                    <div class="flex items-center">
                        <img src="/logo.svg" width="240" height="120" alt="AuthSmit Logo" />
                        <p class="text-2xl pb-10 px-20 font-bold mb-0">
                            authsmith.com
                        </p>
                    </div>
                </div>
                <p class="text-4xl pb-10 font-medium">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
