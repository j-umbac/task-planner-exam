<template>
    <div class="bg-surface-card p-4 shadow-lg rounded-md text-on-card flex items-center justify-between">
        <div class="flex items-center space-x-4 w-full">
            <button @click="toggleComplete(task)">
                <Icon v-if="task.is_done" name="fa6-solid:circle-check" />
                <Icon v-else name="fa6-solid:circle" />
            </button>
            <span v-if="isEdit" class="w-full">
                <EditTask :task="task" @closeEdit="isEdit = false"/>
            </span>
            <span :class="{ 'line-through': task.is_done }" class="hover:cursor-pointer" v-else  @click="toggleEdit">
                {{ task.title }}
            </span>
        </div>
        <div class="flex space-x-4 items-center">
            <!-- <button  @click="toggleEdit" v-if="!isEdit" class="hover:bg-gray-100 rounded-md p-2 flex h-full">
                <Icon name="fa6-solid:pen-to-square" />
            </button> -->
            <AssigneeIcon :assignee="task.assignee" :task="task" />
            <button @click="toggleImportant(task)" class="hover:bg-gray-100 rounded-md p-2 flex">
                <Icon v-if="task.is_important" name="fa6-solid:star" color="#F6C23E" />
                <Icon v-else name="fa6-regular:star" />
            </button>
            <button @click="confirmDelete()" class="hover:bg-gray-100 rounded-md p-2 flex">
                <Icon name="fa6-solid:trash-can" class="hover:text-red-600"></Icon>
            </button>
        </div>
    </div>
    <div v-if="openModal">
        <ConfirmModal @closeModal="openModal = false" @deleteTask="deleteTask(task.id)"/>
    </div>
</template>

<script setup>
const { task } = defineProps(['task'])
const { deleteTask, toggleImportant, toggleComplete } = useTask()
const isEdit = ref(false)
const openModal = ref(false)

const toggleEdit = () => {
    isEdit.value = true
}

const confirmDelete = () => {
    openModal.value = true
}

</script>

<style lang="scss" scoped></style>