<template>
    <div class="flex flex-col h-[100dvh] container mx-auto md:w-auto w-[90%]">
        <h1 class="text-3xl font-semibold text-on-ground mt-16">Task Planner</h1>
        <div class="flex flex-col h-full mt-4 justify-between pb-8">
            <TasksList />
            <AddTask placeholder="Add a Task"/>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>