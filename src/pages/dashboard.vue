<template>
    <div class="grid grid-cols-12 gap-2 mt-8">
        <div class="col-span-3 row-span-4">
            <DashboardSidebar />
        </div>
        <div class="col-span-9">
            <DashboardWelcomeCard class="rounded bg-white shadow"/>
            <DashboardProgress class="rounded bg-white shadow mt-1"/>
        </div>
        <div class="col-start-4 col-span-6 border h-32"></div>
        <div class="col-start-10 col-span-3 border h-32"></div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
  })

</script>

<style lang="scss" scoped>

</style>