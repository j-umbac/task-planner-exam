<template>
    <div v-if="Object.keys(assignee).length" ref="target">
        <button @click="toggleDropDown(); toggle = !toggle" >
            <nuxt-img :src="assignee.avatar" width="24px" height="24px" class="rounded-full" />
        </button>
        <AssigneeDropdown v-if="toggle" :task="task"/>
    </div>
    <div v-else ref="target">
        <button class="hover:bg-gray-100 px-1 rounded-md pb-1" @click="toggleDropDown(); toggle = !toggle">
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
    console.log(toggle.value)
    onClickOutside(target, () => {
        toggle.value = false
    })
}

</script>

<style lang="scss" scoped></style>