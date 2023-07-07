<template>
    <div class="border shadow p-2 rounded-md absolute bg-surface-card w-auto">
         <AssigneeSearchBar />
         <div class="my-2 h-64 overflow-y-scroll">
            <ul class="flex flex-col space-y-2 px-2">
                <li v-for="user in tasks.users" :key="user.id" @click="updateAssignee(task, user)" class="hover:cursor-pointer hover:bg-gray-100 p-1 rounded-md">
                    <div class="flex items-center space-x-2">
                        <nuxt-img :src="user.avatar" width="24px" height="24px" class="rounded-full"/>
                        <span class="text-sm">{{ user.name }}</span>
                    </div>
                </li>
            </ul>
         </div>
    </div>
</template>

<script setup>
const { task } = defineProps(['task'])
import { useTaskStore } from '@/stores/states'
const { updateAssignee } = useTask()

const tasks = useTaskStore()


</script>

<style lang="scss" scoped>

</style>