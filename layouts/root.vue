<script setup lang="ts">
import { defineOrganization, useSchemaOrg } from '@unhead/schema-org/vue'
useSchemaOrg([
    defineOrganization({
        name: 'AuthSmith',
    })
])
</script>
<template>
    <main class="bg-dark text-white relative font-extralight text-sm min-h-dvh">
        <RootHeader class="relative z-10" />
        <div class="[max-width:1248px] mx-auto relative z-10 px-6 xl:px-0">
            <div class="pt-10">
                <slot />
            </div>
        </div>
        <div class="absolute inset-0 z-0 w-full h-full bg-repeat bg-[size:180px] opacity-[0.01]"
            style="background-image: url('/noise.png');">
        </div>
    </main>
</template>