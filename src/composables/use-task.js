import { useTaskStore } from '@/stores/states'
const tasks = useTaskStore()
const { getTasks } = useTasks()

export function useTask() {

    async function deleteTask(id) {
        tasks.taskList = tasks.taskList.filter(task => task.id != id)
        await useFetch(useRuntimeConfig().public.apiUrl + '/tasks/' + id, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
    }

    async function toggleImportant(task) {
        task.is_important = !task.is_important
        await useFetch(useRuntimeConfig().public.apiUrl + '/tasks/' + task.id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({'is_important': task.is_important})
        }).catch(err => {
            console.log(err)
        })
        tasks.importantLength = tasks.taskList.filter(task => task.is_important == true).length
    }

    async function toggleComplete(task) {
        task.is_done = !task.is_done
        await useFetch(useRuntimeConfig().public.apiUrl + '/tasks/' + task.id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({'is_done': task.is_done})
        }).catch(err => {
            console.log(err)
        })
        tasks.doneLength = tasks.taskList.filter(task => (task.is_done == true) || (task.is_done == 'Completed')).length
    }

    async function updateAssignee(task, assignee) {
        task.assignee = assignee
        await useFetch(useRuntimeConfig().public.apiUrl + '/tasks/' + task.id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({'assignee': task.assignee})
        }).catch(err => {
            console.log(err)
        })
    }

    async function editTask(task) {
        console.log(task)
    }

    async function addTask(task){
        let tempTask = Object.assign({}, task) 
        await useFetch(useRuntimeConfig().public.apiUrl + '/tasks', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(tempTask)
        }).then(()=> {
            task.title = ""
            getTasks()
        })
    }

    return {
        deleteTask,
        toggleImportant,
        toggleComplete,
        updateAssignee,
        editTask,
        addTask,
    }
}