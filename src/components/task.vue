<template>
    <div class="bg-surface-card p-4 shadow-lg rounded-md text-on-card flex items-center space-x-2">
        <Icon :name="isDoneIcon" @click="toggleIcon()"/>
        <span :class="{'line-through': task.is_done}">
            {{ task.title }}
        </span>
    </div>
</template>

<script setup>
const { task } = defineProps(['task'])

const isDoneIcon = ref('fa6-solid:circle')

if (task.is_done===('Completed' || true)) {
    isDoneIcon.value = 'fa6-solid:circle-check'
}

const toggleIcon = () => {
    task.is_done = !task.is_done
}

</script>

<style lang="scss" scoped></style>