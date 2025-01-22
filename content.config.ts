import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            source: '**/*.md',
            type: 'page',
        }),
        docs: defineCollection({
            source: 'docs/*.md',
            type: 'page',
            // schema: z.object({
            //     tags: z.array(z.string()),
            //     image: z.string(),
            //     date: z.date()
            // })
        })
    }
})
