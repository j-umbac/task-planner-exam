<template>
    <div class="text-dashboard-on-surface p-4">
        <div class="flex items-center justify-between space-x-8">
            <div v-for="item in accountProgress" class="w-1/4 flex space-x-4">
                <div class="bg-gray-200 rounded-full p-3 flex items-center">
                    <Icon :name="item.icon" width="16px" height="16px" />
                </div>
                <div class="flex flex-col w-full">
                    <span class="text-gray-900">{{ item.name }}</span>
                    <div class="flex space-x-2 items-center">
                        <div class="w-full bg-gray-200 h-1.5 rounded-full">
                            <div v-if="item.completion == 100" class="h-1.5 bg-dashboard-green rounded-full"
                                :style="'width:' + item.completion + '%'"></div>
                            <div v-else-if="item.completion > 50" class="h-1.5 bg-dashboard-orange rounded-full"
                                :style="'width:' + item.completion + '%'"></div>
                            <div v-else class="h-1.5 bg-dashboard-red rounded-full" :style="'width:' + item.completion + '%'"></div>
                        </div>
                        <span v-if="item.completion == 100" class="text-dashboard-green text-sm">{{ item.completion }}%</span>
                        <span v-else-if="item.completion > 50" class="text-dashboard-orange text-sm">{{ item.completion }}%</span>
                        <span v-else class="text-dashboard-red text-sm">{{ item.completion }}%</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const accountProgress = ref([
    {
        name: 'Applicant Profile',
        icon: 'fa6-regular:user',
        completion: 75
    },
    {
        name: 'Resume / CV',
        icon: 'fa6-regular:file-lines',
        completion: 50
    },
    {
        name: 'Assessment Score',
        icon: 'fa6-solid:chart-column',
        completion: 0
    },
    {
        name: 'Video Introduction',
        icon: 'ph:monitor-play-bold',
        completion: 0
    },
])

</script>

<style lang="scss" scoped></style>