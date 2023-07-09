<template>
    <div class="flex justify-between p-1 w-4/5 space-x-4 items-center bg-surface-card rounded-full text-on-card border">
        <input class="w-full outline-0 bg-surface-card px-8 font-light" type="text" v-model="searchQuery"
            placeholder="Type for job title or role">
        <button class="flex space-x-2 items-center rounded-full bg-dashboard-primary text-on-primary py-1 px-4 text-normal">
            <Icon name="fa6-solid:magnifying-glass" />
            <span>Search</span>
        </button>
    </div>
</template>

<script setup>
const searchQuery = ref('')

</script>

<style lang="scss" scoped></style>