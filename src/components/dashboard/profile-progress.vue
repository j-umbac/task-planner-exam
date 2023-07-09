<template>
    <div class="text-dashboard-on-surface">
        <div class="p-6">
            <div class="flex justify-between items-center">
                <h3 class="text-black text-l">Profile Completion</h3>
                <span v-if="progress == 100" class="text-dashboard-green">{{ progress }}%</span>
                <span v-else-if="progress >= 50" class="text-dashboard-orange">{{ progress }}%</span>
                <span v-else class="text-dashboard-red">{{ progress }}%</span>
            </div>
            <div class="flex space-x-2 items-center mt-1">
                <div class="w-full bg-gray-200 h-2 rounded-full">
                    <div v-if="progress == 100" class="h-2 bg-dashboard-green rounded-full"
                        :style="'width:' + progress + '%'"></div>
                    <div v-else-if="progress >= 50" class="h-2 bg-dashboard-orange rounded-full"
                        :style="'width:' + progress + '%'"></div>
                    <div v-else class="h-2 bg-dashboard-red rounded-full" :style="'width:' + progress + '%'"></div>
                </div>
            </div>
            <div v-if="progress == 100" class="flex flex-col items-center mt-4">
                <span class="text-dashboard-green text-l font">Well done, Juan!</span>
                <nuxt-img src="/ribbon.png" class="h-20 mt-4" />
                <span class="mt-4 text-sm text-gray-900">You have one of the strongest professional profile in our talent pool. Expect progress on
                    your application at any time soon.</span>
            </div>
            <div v-else>
                <button @click="toggle = !toggle" class="pt-4 flex items-center space-x-2 text-sm text-gray-900">
                    <Icon name="fa6-solid:angle-up" v-if="toggle" />
                    <Icon name="fa6-solid:angle-down" v-else />
                    <span v-if="toggle">
                        Hide Recommendations
                    </span>
                    <span v-else>
                        Show Recommendations
                    </span>
                </button>
                <div v-if="toggle" class="ml-6 mt-4 text-sm text-gray-900">
                    Fill-up the following items to strengthen your profile. This can help us match your profile and increase
                    your chances of landing into your desired role.

                    <ul class="mt-4 flex flex-col space-y-3">
                        <li class="flex items-baseline space-x-2">
                            <Icon name="fa6-regular:circle" height="12px"/>
                            <p>
                                Share 
                                <span class="text-dashboard-primary hover:cursor-pointer">Date of Birth</span>
                            </p>
                        </li>
                        <li class="flex items-baseline space-x-2">
                            <Icon name="fa6-regular:circle" height="12px"/>
                            <p>
                                Specify 
                                <span class="text-dashboard-primary hover:cursor-pointer">Current Monthly Salary</span>
                            </p>
                        </li>
                        <li class="flex items-baseline space-x-2">
                            <Icon name="fa6-regular:circle" height="12px" />
                            <p>
                                Add one(1) 
                                <span class="text-dashboard-primary hover:cursor-pointer">Character Reference</span>
                            </p>
                        </li>
                        <li class="flex items-baseline space-x-2">
                            <Icon name="fa6-regular:circle" height="12px"/>
                            <p>
                                Add 
                                <span class="text-dashboard-primary hover:cursor-pointer">Current Address</span>
                            </p>
                        </li>
                        <li class="flex items-baseline space-x-2" >
                            <Icon name="fa6-regular:circle" height="12px"/>
                            <p>
                                Add atleast five(5) items in
                                <span class="text-dashboard-primary hover:cursor-pointer">Other Skills</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { progress } = defineProps(['progress'])
const toggle = ref(true)
</script>

<style lang="scss" scoped></style>