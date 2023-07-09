<template>
    <div class="p-6">
        <div class="flex justify-between items-start">
            <h3 class="text-xl text-black font-semibold">General Details</h3>
            <DashboardEditButton />
        </div>
        <div class="mt-4">
            <ul class="flex flex-col space-y-4">
                <li v-for="item in details" class="flex">
                    <span class="w-1/3">
                        {{ item.name }}:
                    </span>
                    <span class="w-2/3 text-black">
                        {{ item.value }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const details = ref([
    {
        name: 'Date of Birth',
        value: '07 July 1986',
    },
    {
        name: 'Gender',
        value: 'Male',
    },
    {
        name: 'Civil Status',
        value: 'Married',
    },
    {
        name: 'Nationality',
        value: 'Filipino',
    },
])

</script>

<style lang="scss" scoped></style>