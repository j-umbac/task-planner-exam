<template>
    <div class="flex flex-col justify-center items-center h-full">
        <h1 class="text-3xl text-on-ground">Welcome to Task Planner</h1>
        <p class="text-on-ground mt-4 text-sm w-64 text-center">Get things done with your day, a list that refreshes every day.</p>
        <AddTask class="mt-16" placeholder="What's your plan for today?" :focus-text="focusText"/>
    </div>
</template>

<script setup>
const focusText = 'Try typing "Submit report by Friday 3 PM"'

</script>

<style lang="scss" scoped></style>