// Global Store for 
export const useTaskStore = defineStore('tasks', () => {
    const taskList = ref([])
    const filteredTaskList = ref([])
    const users = ref([])
    const filteredUsers = ref([])

    const importantLength = ref(0)

    const doneLength = ref(0)

    return { taskList, filteredTaskList, users, filteredUsers, importantLength, doneLength }
})