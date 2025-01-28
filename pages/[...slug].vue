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
</template>
