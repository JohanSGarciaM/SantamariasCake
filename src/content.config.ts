import { defineCollection, z } from "astro:content";

const cakes = defineCollection({
    schema: z.object({
        title: z.string(),
        pieces: z.number(),
        img: z.string(),
        description: z.string(),
        buy: z.object({
            santa: z.string().url(),
            angie: z.string().url()
        }),
    })
})

export const collections = { cakes };
