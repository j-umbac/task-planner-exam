<template>
    <div class="flex justify-between items-center space-x-2">
        <div class="flex justify-between py-1 px-2 w-full rounded-md shadow-inner text-on-card border mr-2" ref="target">
            <input type="text" v-model="task.title" class="w-full outline-0">
            <button class="hover:bg-gray-100 px-1 rounded-md pb-1 text-green-600" @click="editTask(task); $emit('closeEdit')">
                    <Icon name="fa6-solid:check" />
                </button>
            <!-- <div class="flex space-x-2">
                <button class="hover:bg-gray-100 px-1 rounded-md pb-1 text-red-600" @click="$emit('closeEdit')">
                    <Icon name="fa6-solid:xmark" />
                </button>
                <button class="hover:bg-gray-100 px-1 rounded-md pb-1 text-green-600">
                    <Icon name="fa6-solid:check" />
                </button>
            </div> -->
        </div>
    </div>
</template>

<script setup>
const { task } = defineProps(['task'])
const emit = defineEmits(['closeEdit'])
const { editTask } = useTask()

const target = ref(null)

onClickOutside(target, () => {
    editTask(task)
    emit('closeEdit')
})

</script>

<style lang="scss" scoped></style>