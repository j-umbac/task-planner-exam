<template>
    <div class="flex space-x-3 items-center">
        <div class="text-right">
            <h4 class="font-semibold text-normal">{{ user.name }}</h4>
            <h5 class="text-dashboard-secondary text-sm">{{ user.email }}</h5>
        </div>
        <div class="flex space-x-1">
            <nuxt-img :src="user.avatar" class="w-auto h-8"/>
            <button class="px-2 py-1 hover:bg-gray-100 rounded-md">
                <Icon name="fa6-solid:angle-down" />
            </button>
        </div>
    </div>
</template>

<script setup>
const user = ref({
    name: 'Juan De La Cruz',
    email: 'juandelacruz@gmail.com',
    avatar: '/avatar.jpg'
})

</script>

<style lang="scss" scoped>

</style>\