import { useTaskStore } from '@/stores/states'
const currentFilter = ref('all')

export function useTasks() {
    const tasks = useTaskStore()

    async function getTasks() {
        const { data: tasksList } = await useFetch(useRuntimeConfig().public.apiUrl + '/tasks', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        tasks.taskList = tasksList.value
    }

    async function getFilteredTasks(filter) {
        currentFilter.value = filter
        if (filter == 'done') {
            tasks.filteredTaskList = tasks.taskList.filter(task => (task.is_done == true) || (task.is_done == 'Completed'))
        }

        else if (filter == 'important') {
            tasks.filteredTaskList = tasks.taskList.filter(task => task.is_important == true)
        }
    }

    async function searchTasks(query) {
        console.log(currentFilter.value)
        const { data: tasksList } = await useFetch(useRuntimeConfig().public.apiUrl + '/tasks?title=' + query, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        if (currentFilter.value == 'all') {
            tasks.taskList = tasksList.value
        } else {
            if (currentFilter.value == 'done') {
                tasks.filteredTaskList = tasksList.value.filter(task => (task.is_done == true) || (task.is_done == 'Completed'))
            }
            else if (currentFilter.value == 'important') {
                tasks.filteredTaskList = tasksList.value.filter(task => task.is_important == true)
            }
        }
    }

    return {
        getTasks,
        getFilteredTasks,
        searchTasks
    }
}