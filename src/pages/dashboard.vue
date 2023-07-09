<template>
    <div class="grid grid-cols-12 gap-6 mt-8">
        <div class="col-span-12 col-start-1">
            <div class="rounded bg-white shadow">
                <DashboardWelcomeCard />
                <div class="border-t"></div>
                <DashboardProgress />
            </div>
        </div>
        <div class="col-span-8">
            <DashboardMainPanel class="rounded bg-white shadow" />
        </div>
        <div class="col-span-4 space-y-6">
            <DashboardVideo class="rounded bg-white shadow" />
            <DashboardProfileProgress :progress="100" class="rounded bg-white shadow" />
            <DashboardProfileProgress :progress="50" class="rounded bg-white shadow" />

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})

</script>

<style lang="scss" scoped></style>