<template>
    <div class="bg-surface-card p-4 shadow-lg rounded-md text-on-card flex items-center justify-between">
        <div class="flex items-center space-x-2 w-full">
            <button @click="toggleComplete(task)">
                <Icon v-if="task.is_done" name="fa6-solid:circle-check" />
                <Icon v-else name="fa6-solid:circle" />
            </button>
            <span v-if="isEdit" class="w-full">
                <EditTask :task="task" @closeEdit="isEdit = false"/>
            </span>
            <span :class="{ 'line-through': task.is_done }" v-else>
                {{ task.title }}
            </span>
        </div>
        <div class="flex space-x-3 items-center">
            <button  @click="toggleEdit" v-if="!isEdit" class="hover:bg-gray-100 px-1 rounded-md pb-1">
                <Icon name="fa6-solid:pen-to-square" />
            </button>
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
const isEdit = ref(false)

const toggleEdit = () => {
    isEdit.value = true
}

</script>

<style lang="scss" scoped></style>