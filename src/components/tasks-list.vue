<template>
    <div v-if="pending">
        Loading...
    </div>
    <div v-else>
        <ul class="space-y-4">
            <li v-for="task in tasks" :key="task.id">
                <!-- Task Component -->
                <Task :task="task"/>
                {{ task }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const { pending, data: tasks } = await useFetch('https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks', {
    lazy: true
})
</script>

<style lang="scss" scoped></style>