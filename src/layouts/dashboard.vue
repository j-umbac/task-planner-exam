<template>
    <div class="bg-dashboard-ground min-h-[100dvh]">
        <DashboardHeader class="sticky z-20 top-0" />
        <main class="h-full container mx-auto flex text-normal">
            <div class="basis-1/4 mr-6">
                <DashboardSidebar class="sticky top-32"/>
            </div>
            <div class="basis-3/4 mb-8">
                <slot />
            </div>
        </main>

    </div>
</template>