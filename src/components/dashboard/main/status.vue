<template>
    <div class="p-6">
        <div class="flex justify-between items-start">
            <h3 class="text-l text-black font-semibold">Professional Status</h3>
            <DashboardEditButton />
        </div>
        <div class="mt-4">
            <ul class="flex flex-col space-y-4 text-normal">
                <li v-for="item in details" class="flex">
                    <span class="w-1/3">
                        {{ item.name }}
                    </span>
                    <span class="w-2/3 text-dashboard-green" v-if="item.name.includes('Salary')">
                        {{ item.value }}
                    </span>
                    <span class="w-2/3 text-black" v-else>
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
        name: 'Recent Job Title',
        value: 'Web Designer and Developer',
    },
    {
        name: 'Interview Availability',
        value: '-',
    },
    {
        name: 'Current Monthly Salary (Gross)',
        value: 'Php 30,000.00',
    },
    {
        name: 'Allowance (Non-Taxable)',
        value: '-',
    },
    {
        name: 'Pre-employment Leaves',
        value: '07 July - Birthday',
    },
    {
        name: 'Where can you work?',
        value: 'Office and Home',
    },
    {
        name: 'Estimate Travel Time to Office',
        value: '15 mins',
    },
    {
        name: 'Connection Type',
        value: 'Globe Broadband',
    },
    {
        name: 'Website / Porfolio',
        value: '-',
    },
])
</script>

<style lang="scss" scoped></style>