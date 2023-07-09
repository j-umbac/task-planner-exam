<template>
    <div class="flex flex-col space-y-4 font-[500] ">
        <ul class="flex flex-col space-y-1 text-dashboard-on-surface">
            <li v-for="item in profileNav">
                <button :class="{ 'bg-[#EFF2F7] text-dashboard-primary': item.isActive }"
                    class="py-2 px-4 rounded-md flex items-center flex-row w-full hover:bg-[#EFF2F7]">
                    <div class="flex items-center space-x-4">
                        <Icon :name="item.icon" height="20px" width="20px"/>
                        <span>{{ item.name }}</span>
                    </div>
                    <Icon v-if="item.isActive" name="fa6-solid:angle-right" class="ml-auto" />
                </button>
            </li>
        </ul>
        <div class="border-t"></div>
        <ul class="flex flex-col space-y-1 text-dashboard-on-surface">
            <li v-for="item in dashBoardNav">
                <button :class="{ 'bg-gray-200 text-dashboard-primary': item.isActive }"
                    class="py-2 px-4 rounded-md flex items-center flex-row w-full hover:bg-[#EFF2F7]">
                    <div class="flex items-center space-x-4">
                        <Icon :name="item.icon" height="20px" width="20px"/>
                        <span>{{ item.name }}</span>
                        <span v-if="item.notifications"
                            class="bg-dashboard-red px-2 text-on-primary rounded-md py-0.5 text-sm">
                            {{ item.notifications }}
                        </span>
                    </div>
                    <Icon v-if="item.isActive" name="fa6-solid:angle-right" class="ml-auto" />
                </button>
            </li>
        </ul>
        <div class="grid">
            <span class="text-sm font-normal text-dashboard-on-surface">Copyright 2018 - 2023. All Rights
                Reserved</span>
            <span class="text-sm font-normal text-dashboard-primary">
                <button>
                    Terms of Use
                </button>
                •
                <button>
                    Privary Policy
                </button>
            </span>
        </div>
    </div>
</template>

<script setup>
const profileNav = ref([
    {
        name: 'Profile',
        icon: 'fa6-regular:user',
        isActive: true
    },
    {
        name: 'Resume / CV',
        icon: 'fa6-regular:file-lines',
        isActive: false
    },
    {
        name: 'Assessment',
        icon: 'fa6-solid:chart-column',
        isActive: false
    },
    {
        name: 'Video Script',
        icon: 'ph:monitor-play-bold',
        isActive: false
    },
])

const dashBoardNav = ref([
    {
        name: 'Application Tracking',
        icon: 'ph:suitcase-bold',
        isActive: false
    },
    {
        name: 'Bookmarked',
        icon: 'fa6-regular:bookmark',
        isActive: false
    },
    {
        name: 'Notifications',
        icon: 'fa6-regular:bell',
        isActive: false,
        notifications: 2
    },
    {
        name: 'Activity Logs',
        icon: 'ph:pulse-bold',
        isActive: false
    },
    {
        name: 'Settings',
        icon: 'akar-icons:gear',
        isActive: false
    },
])
</script>

<style lang="scss" scoped></style>