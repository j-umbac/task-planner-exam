<template>
    <div class="flex flex-col h-[100dvh] container mx-auto md:w-auto w-[90%]">
        <div class="flex mt-16 justify-between items-center">
            <h1 class="text-2xl font-semibold text-on-ground">Task Planner</h1>
            <FilterButtons @useFilter="handleFilter" />
        </div>
        <div class="flex flex-col h-full mt-4 justify-between pb-8">
            <div>
                <SearchBar :filtered="filtered" />
                <TasksList :filtered="filtered" />
            </div>
            <AddTask placeholder="Add a Task" />
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/states'
const tasks = useTaskStore()
const filtered = ref(false)

const handleFilter = (filter) => {
    if (filter == 'all') {
        filtered.value = false
    } else [
        filtered.value = true
    ]
}

</script>

<style lang="scss" scoped></style>