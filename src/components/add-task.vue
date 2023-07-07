<template>
    <div class="w-full">
        <form @submit.prevent="handleSubmit()">
            <div class="flex p-2 w-full space-x-4 items-center bg-surface-input rounded border">
                <Icon name="fa6-solid:plus" color="gray"></Icon>
                <input class="w-full outline-0 bg-surface-input" type="text" :placeholder="placeholderText"
                    @focus="updateFocus()" @focusout="revertFocus()" v-model="newTask.title">
            </div>
            <small class="text-on-surface">Press <span>enter</span> to add task</small>
        </form>
    </div>
</template>

<script setup>
const props = defineProps(['placeholder', 'focus-text'])
const { addTask } = useTask()
const route = useRoute()

const placeholderText = ref(props.placeholder)
const newTask = ref({
    title: '',
    is_done: false,
    is_important: false,
    assignee: {}
})

const updateFocus = () => {
    if (props.focusText) {
        placeholderText.value = props.focusText
    }
}

const revertFocus = () => {
    placeholderText.value = props.placeholder
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