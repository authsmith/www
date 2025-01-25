<script setup lang="ts">
import { defineWebPage, defineWebSite, useSchemaOrg } from '@unhead/schema-org/vue'

const route = useRoute()
const path = route.params.doc === "" ? "/docs" : `/docs/${route.params.doc}`
const { data } = await useAsyncData(() => queryCollection('docs').path(path).first())

definePageMeta({
    layout: "docs",
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
    <div v-else>data not found</div>
</template>
