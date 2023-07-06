// Global Store for 
export const useTaskStore = defineStore('tasks', () => {
    const taskList = ref([])
    const filteredTaskList = ref([])

    return { taskList, filteredTaskList }
})