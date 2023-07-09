<template>
    <div class="text-dashboard-on-surface">
        <h3 class="text-black text-l font-semibold p-6">Video Introduction</h3>
        <div class="relative z-0">
            <nuxt-img src="/video-thumbnail.jpg" class="aspect-video object-cover rounded-b" />
            <div class="absolute inset-0 flex justify-center items-center hover:bg-gray-900 hover:bg-opacity-30 z-10">
                <button class="hover:scale-110 p-4">
                    <Icon name="fa6-solid:circle-play" class="text-white" height="36px" width="36px"/>
                </button>
            </div>
            <div class="absolute inset-0 flex justify-end items-end">
                <span class="text-white bg-black px-2 py-1 m-3 text-sm rounded">1:55</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>