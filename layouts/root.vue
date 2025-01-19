<template>
    <main class="bg-dark font-body text-white text-sm font-thin relative">
        <RootHeader class="relative z-10" />
        <div class="max-w-[1900px] mx-auto px-2 md:px-10 relative z-10">
            <div class="pt-10 px-4">
                <slot />
            </div>
        </div>
        <div class="absolute inset-0 z-0 w-full h-full bg-repeat bg-[size:180px] opacity-[0.01]"
            style="background-image: url('/noise.png');">
        </div>
    </main>
</template>