<template>
    <header class="w-full bg-surface-card shadow-md px-8 py-4">
        <div class="flex justify-between items-center">
            <div class="flex items-center w-1/3 space-x-10">
                <span>
                    <nuxt-img src="/go-team-logo.png" class="h-8 w-auto" />
                </span>
                <div class="flex text-on-card-secondary text-sm space-x-1">
                    <button class="px-4 py-2 hover:bg-gray-100 rounded-md">
                        Careers
                    </button>
                    <button class="px-4 py-2 hover:bg-gray-100 rounded-md">
                        Find your Role
                    </button>
                </div>
            </div>
            <div class="flex justify-center items-center w-1/3">
                <DashboardHeaderSearchBar />
            </div>
            <div class="flex justify-end items-center w-1/3">
                <DashboardHeaderProfile />
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

