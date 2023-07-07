<template>
    <div class="w-full">
        <form @submit.prevent="handleSubmit()">
            <div class="flex py-2 px-3 w-full space-x-4 items-center bg-surface-input rounded border">
                <Icon name="fa6-solid:plus" color="gray" v-if="!isFocus"></Icon>
                <Icon name="fa6-regular:circle" color="gray" v-else></Icon>
                <input class="w-full outline-0 bg-surface-input" type="text" :placeholder="placeholderText"
                    @focus="updateFocus()" @focusout="revertFocus()" v-model="newTask.title">
            </div>
            <small class="text-on-surface">Press <span :class="{ 'text-pink-600': !isFocus }">enter</span> to add task</small>
        </form>
    </div>
</template>

<script setup>
const props = defineProps(['placeholder', 'focus-text'])
const { addTask } = useTask()
const route = useRoute()
const isFocus = ref(false)

const placeholderText = ref(props.placeholder)
const newTask = ref({
    title: '',
    is_done: false,
    is_important: false,
    assignee: {}
})

const updateFocus = () => {
    isFocus.value = true
    if (props.focusText) {
        placeholderText.value = props.focusText
    }
}

const revertFocus = () => {
    placeholderText.value = props.placeholder
    isFocus.value = false
}

const handleSubmit = async () => {
    if (newTask.value.title) {
        addTask(newTask.value)
    }
    if (route.name != "tasks") {
        navigateTo({ name: "tasks" })
    }
}

</script>

<style lang="scss" scoped></style> 