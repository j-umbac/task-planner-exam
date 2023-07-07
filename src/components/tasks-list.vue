<template>
    <div v-if="!tasks.taskList">
        Loading...
    </div>
    <div v-else class="mt-4">
        <draggable 
            v-model="tasks.filteredTaskList" @start="drag = true" @end="drag = false" item-key="id" class="space-y-4" v-if="filtered">
            <template #item="{ element }">
                <Task :task="element"/>
            </template>
        </draggable>
        <draggable 
            v-model="tasks.taskList" @start="drag = true" @end="drag = false" item-key="id" class="space-y-4" v-else>
            <template #item="{ element }">
                <Task :task="element"/>
            </template>
        </draggable>
    </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { useTaskStore } from '@/stores/states'

const { filtered } = defineProps(['filtered'])
const { getTasks } = useTasks()
const { getUsers } = useUsers()

getTasks()
getUsers()
const tasks = useTaskStore()

const drag = ref(false)

</script>

<style lang="scss" scoped></style>