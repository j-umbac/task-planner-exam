<template>
    <div class="p-6">
        <div class="flex justify-between items-start">
            <h3 class="text-l text-black font-semibold">General Details</h3>
            <DashboardEditButton />
        </div>
        <div class="mt-4">
            <ul class="flex flex-col space-y-4 text-normal">
                <li v-for="item in details" class="flex">
                    <span class="w-1/3">
                        {{ item.name }}
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
        name: 'Day Shift',
        value: '-',
    },
    {
        name: 'Mid Shift',
        value: '-',
    },
    {
        name: 'Night Shift',
        value: '-',
    },
    {
        name: 'English Only Policy (EOP)',
        value: '-',
    },
    {
        name: 'Where did you hear us?',
        value: '-',
    },
    {
        name: 'Marketing Permission',
        value: '-',
    },
    {
        name: 'Referral',
        value: '-',
    },
])

</script>

<style lang="scss" scoped></style>