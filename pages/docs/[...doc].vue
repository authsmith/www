<script setup lang="ts">
import { defineWebPage, defineWebSite, useSchemaOrg } from '@unhead/schema-org/vue'

const route = useRoute()
prerenderRoutes(route.path)
const path = route.path
const { data } = await useAsyncData(path, () => queryCollection('docs').path(path).first())

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
    <div class="grid grid-cols-1 lg:grid-cols-9 gap-10">
        <div class="lg:col-span-2">
            <DocsNavigation />
        </div>
        <div class="pt-6 lg:pt-0 lg:col-span-7">
            <ContentRenderer v-if="data" :value="data" />
            <div v-else>Work In Progress</div>
        </div>
    </div>
</template>
