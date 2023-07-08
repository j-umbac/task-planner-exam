<template>
    <div class="flex space-x-2 text-on-surface">
        <button class="px-4 py-1 rounded-md" :class="{ 'bg-surface-active': activeFilter == 'all' }"
            @click="handleFilter('all')">
            All
        </button>
        <button class="px-4 py-1 rounded-md" :class="{ 'bg-surface-active': activeFilter == 'important' }"
            @click="handleFilter('important')">
            <span>{{ tasks.importantLength }} Important</span>
        </button>
        <button class="px-4 py-1 rounded-md" :class="{ 'bg-surface-active': activeFilter == 'done' }"
            @click="handleFilter('done')">
            <span>{{ tasks.doneLength }} Done</span>
        </button>
    </div>
</template>

<script setup>
const emit = defineEmits(['useFilter'])
import { useTaskStore } from '@/stores/states'
const tasks = useTaskStore()

const activeFilter = ref('all')
const { getFilteredTasks } = useTasks()

tasks.importantLength = tasks.taskList.filter(task => task.is_important == true).length

tasks.doneLength = tasks.taskList.filter(task => (task.is_done == true) || (task.is_done == 'Completed')).length

const handleFilter = (filter) => {
    activeFilter.value = filter
    getFilteredTasks(filter)
    emit('useFilter', filter)
}

</script>

<style lang="scss" scoped></style>