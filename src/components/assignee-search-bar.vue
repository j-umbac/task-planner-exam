<template>
    <div class="flex p-1 w-full space-x-4 items-center bg-surface-card rounded-md border text-on-card">
        <Icon name="fa6-solid:magnifying-glass" class="ml-1"></Icon>
        <input class="w-full outline-0 bg-surface-card text-sm" type="text" v-model="searchQuery" placeholder="Search Team Member" @keyup="search()">
    </div>
</template>

<script setup>
const searchQuery = ref('')
const timer = ref(null)
const { searchUsers } = useUsers()

const search = () => {
    if (timer.value) clearTimeout(timer.value)
    timer.value = setTimeout(() => {
        searchUsers(searchQuery.value)
    }, 250)
}

</script>

<style lang="scss" scoped>

</style>