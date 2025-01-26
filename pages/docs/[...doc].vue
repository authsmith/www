<script setup lang="ts">
import { defineWebPage, defineWebSite, useSchemaOrg } from '@unhead/schema-org/vue'

const route = useRoute()
const path = route.path
const { data } = await useAsyncData(() => queryCollection('docs').path(path).first(), {
    watch: [route]
})

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
    <div class="grid grid-cols-1 md:grid-cols-8 gap-10">
        <div class="md:col-span-2">
            <DocsNavigation />
        </div>
        <div class="pt-6 md:pt-0 md:col-span-6">
            <ContentRenderer v-if="data" :value="data" />
            <div v-else>data not found</div>
        </div>
    </div>
</template>
