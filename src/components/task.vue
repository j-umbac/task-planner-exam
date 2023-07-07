<template>
    <div class="bg-surface-card p-4 shadow-lg rounded-md text-on-card flex items-center justify-between">
        <div class="flex items-center space-x-2">
            <button @click="toggleComplete(task)">
                <Icon v-if="task.is_done" name="fa6-solid:circle-check" />
                <Icon v-else name="fa6-solid:circle" />
            </button>
            <span :class="{ 'line-through': task.is_done }">
                {{ task.title }}
            </span>
        </div>
        <div class="flex space-x-3 items-center">
            <AssigneeIcon :assignee="task.assignee" :task="task"/>
            <button @click="toggleImportant(task)" class="hover:bg-gray-100 px-1 rounded-md pb-1">
                <Icon v-if="task.is_important" name="fa6-solid:star" color="#F6C23E" />
                <Icon v-else name="fa6-regular:star" />
            </button>
            <button @click="deleteTask(task.id)" class="hover:bg-gray-100 px-1 rounded-md pb-1">
                <Icon name="fa6-solid:trash-can" class="hover:text-red-600"></Icon>
            </button>
        </div>
    </div>
</template>

<script setup>
const { task } = defineProps(['task'])
const { deleteTask, toggleImportant, toggleComplete } = useTask()

</script>

<style lang="scss" scoped></style>