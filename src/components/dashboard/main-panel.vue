<template>
    <div class="h-full text-dashboard-on-surface">
        <div class="flex border-b">
            <div class="flex p-6 border-r min-w-fit">
                <nuxt-img src="/avatar.jpg" class="h-28 border rounded-full" />
            </div>
            <div class="p-6 w-full">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="font-semibold text-2xl text-black">Juan De La Cruz</h2>
                        <h4 class="text-gray-900">UI/UX Designer</h4>
                    </div>
                    <DashboardEditButton />
                </div>
                <div class="mt-4">
                    <div class="flex space-x-2 items-center">
                        <Icon name="fa6-solid:graduation-cap" class="text-gray-900" />
                        <span>
                            Bachelor of Science in Computer Science
                        </span>
                    </div>
                    <div class="flex items-center mt-2">
                        <div class="flex space-x-2 items-center w-1/3">
                            <Icon name="fa6-solid:briefcase" class="text-gray-900" />
                            <span>
                                12 years
                            </span>
                        </div>
                        <div class="flex space-x-2 items-center w-1/3">
                            <Icon name="fa6-regular:calendar-check" class="text-gray-900" />
                            <span>
                                Immediately
                            </span>
                        </div>
                        <div class="flex space-x-2 items-center w-1/3">
                            <Icon name="bx:dollar-circle" class="text-gray-900" />
                            <span class="text-dashboard-green">
                                Php 35,000
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-b">
            <DashboardMainGeneral />
        </div>
        <div class="border-b">
            <DashboardMainStatus />
        </div>
        <div class="border-b">
            <DashboardMainPreference />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>