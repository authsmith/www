import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            source: '**/*.md',
            type: 'page',
        }),
        docs: defineCollection({
            source: 'docs/**/*.md',
            type: 'page',
        })
    }
})
