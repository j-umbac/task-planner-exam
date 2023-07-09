<template>
    <div class="grid grid-cols-12 gap-2 mt-8">
        <div class="col-span-3 row-span-3 mt-8">
            <DashboardSidebar />
        </div>
        <div class="col-span-9">
            <div class="rounded bg-white shadow">
                <DashboardWelcomeCard />
                <div class="border-t"></div>
                <DashboardProgress />
            </div>
        </div>
        <div class="col-start-4 col-span-6 row-span-2">
            <DashboardMainPanel class="rounded bg-white shadow" />
        </div>
        <div class="col-start-10 col-span-3 border h-32"></div>
        <div class="col-start-10 col-span-3 border h-32"></div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})

</script>

<style lang="scss" scoped></style>