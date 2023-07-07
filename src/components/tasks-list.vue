<template>
    <div v-if="!tasks.taskList">
        Loading...
    </div>
    <div v-else class="mt-4">
        <ul class="space-y-4" v-if="filtered">
            <li v-for="task in tasks.filteredTaskList " :key="task.id">
                <Task :task="task"/>
            </li>
        </ul>
        <ul class="space-y-4" v-else>
            <li v-for="task in tasks.taskList" :key="task.id">
                <Task :task="task"/>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { filtered } = defineProps(['filtered'])
import { useTaskStore } from '@/stores/states'
const { getTasks } = useTasks()
const { getUsers } = useUsers()

getTasks()
getUsers()
const tasks = useTaskStore()

</script>

<style lang="scss" scoped></style>