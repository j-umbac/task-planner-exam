<template>
    <div class="flex justify-between items-center">
        Edit Task {{ task.title }}
        <input type="text" v-model="task.title">
        <div class="flex space-x-2 mr-2">
            <button class="hover:bg-gray-100 px-1 rounded-md pb-1 text-red-600">
                <Icon name="fa6-solid:xmark" />
            </button>
            <button class="hover:bg-gray-100 px-1 rounded-md pb-1 text-green-600">
                <Icon name="fa6-solid:check" />
            </button>
        </div>
    </div>
</template>

<script setup>
const { task } = defineProps(['task'])
const emit = defineEmits(['closeEdit'])

</script>

<style lang="scss" scoped></style>