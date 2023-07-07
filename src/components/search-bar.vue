<template>
    <div class="flex p-2 w-full space-x-4 items-center bg-surface-card rounded-full shadow-inner text-on-card border">
        <Icon name="fa6-solid:magnifying-glass" class="ml-2"></Icon>
        <input class="w-full outline-0 bg-surface-card" type="text" v-model="searchQuery" placeholder="Search"
            @keyup="search()">
    </div>
</template>

<script setup>
const { filtered } = defineProps(['filtered'])
const { searchTasks } = useTasks()

const searchQuery = ref('')
const timer = ref(null)

const search = () => {
    if (timer.value) clearTimeout(timer.value)
    timer.value = setTimeout(() => {
        searchTasks(searchQuery.value)
    }, 150)
}

</script>

<style lang="scss" scoped></style>