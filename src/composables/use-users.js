import { useTaskStore } from '@/stores/states'

export function useUsers() {
    const tasks = useTaskStore()

    async function getUsers() {
        const { data: users } = await useFetch(useRuntimeConfig().public.apiUrl + '/users', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        tasks.users = users.value
    }

    async function searchUsers(query) {
        const { data: users } = await useFetch(useRuntimeConfig().public.apiUrl + '/users?name=' + query, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        tasks.users = users.value
    }

    return {
        getUsers,
        searchUsers,
    }
}