import { useTaskStore } from '@/stores/states'

export function useTask() {
    const tasks = useTaskStore()

    async function deleteTask(id) {
        tasks.taskList = tasks.taskList.filter(task => task.id != id)
        await useFetch(useRuntimeConfig().public.apiUrl + '/tasks/' + id, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
    }

    async function toggleImportant(task) {
        task.is_important = !task.is_important
    }

    async function toggleComplete(task) {
        task.is_done = !task.is_done
    }

    return {
        deleteTask,
        toggleImportant,
        toggleComplete
    }
}