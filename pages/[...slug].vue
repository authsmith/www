<script setup lang="ts">
import { defineWebPage, defineWebSite, useSchemaOrg } from '@unhead/schema-org/vue'

const route = useRoute()
const path = route.params.slug === "" ? "/" : `/${route.params.slug}`
const { data } = await useAsyncData(() => queryCollection('content').path(path).first())

definePageMeta({
    layout: "root",
});
useSeoMeta({
    title: data.value?.title,
    description: data.value?.description
})
defineOgImageComponent('Page', {
    title: data.value?.seo.title,
    description: data.value?.seo.description
})
useHead({
    templateParams: {
        schemaOrg: {
            host: 'https://authsmith.com',
            path: route.path,
            inLanguage: 'en',
        }
    }
})
useSchemaOrg([
    defineWebPage(),
    defineWebSite({
        title: data.value?.seo.title,
        description: data.value?.seo.description,
    }),
])
</script>

<template>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>Work In Progress</div>
    <div v-if="route.params.slug === ''" class="flex item-center justify-center gap-6 mt-10">
        <NuxtLink to="/docs"
            class="px-4 py-3 whitespace-nowrap text-xs bg-dark text-white border border-white/60 hover:scale-105">
            DOCUMENTATION
        </NuxtLink>
        <NuxtLink to="https://github.com/authsmith" target="_blank"
            class="px-4 py-3 whitespace-nowrap text-xs bg-dark text-white border border-white/60 hover:scale-105">
            GITHUB
        </NuxtLink>
    </div>
</template>
