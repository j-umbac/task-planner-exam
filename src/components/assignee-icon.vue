<template>
    <div v-if="Object.keys(assignee).length" ref="target">
        <button @click="toggleDropDown(); toggle = !toggle" class="flex items-center justify-end">
            <nuxt-img :src="assignee.avatar" class="rounded-full p-1 lg:w-12 sm:w-[50%] w-[90%]" />
        </button>
        <AssigneeDropdown v-if="toggle" :task="task"/>
    </div>
    <div v-else ref="target">
        <button class="hover:bg-gray-100 rounded-md p-2 flex" @click="toggleDropDown(); toggle = !toggle">
            <Icon name="fa6-solid:angle-up" v-if="toggle" />
            <Icon name="fa6-solid:angle-down" v-else />
        </button>
        <AssigneeDropdown v-if="toggle" :task="task"/>
    </div>
</template>

<script setup>
const { assignee, task } = defineProps(['assignee', 'task'])
const toggle = ref(false)
const target = ref(null)


const toggleDropDown = () => {
    onClickOutside(target, () => {
        toggle.value = false
    })
}

</script>

<style lang="scss" scoped></style>