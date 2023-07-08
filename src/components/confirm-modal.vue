<template>
    <div class="z-99 fixed bg-gray-600/50 top-0 left-0 w-full h-full flex items-center justify-center">
        <div class="bg-surface-card px-12 py-8 rounded-lg shadow-md flex flex-col items-center space-y-4 text-on-card" ref="target">
            <Icon name="fa6-regular:circle-xmark" height="48px" width="48px" class="text-red-600"></Icon>
            <span class="text-2xl font-semibold">Are you sure?</span>
            <span>This process cannot be undone</span>
            <div class="flex space-x-2 justify-between w-full">
                <button @click="$emit('closeModal')" class="text-on-primary p-2 bg-gray-600 w-full rounded-lg hover:bg-gray-800 active:scale-95">
                    Cancel
                </button>
                <button @click="$emit('deleteTask')" class="text-on-primary p-2 bg-red-600 w-full rounded-lg hover:bg-red-800 active:scale-95">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['closeModal', 'deleteTask'])
const target = ref(null)

onClickOutside(target, () => {
    emit('closeModal')
})

</script>

<style lang="scss" scoped></style>