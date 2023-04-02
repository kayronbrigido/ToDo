import { ICreateTask, ITask } from "@src/models"
import { getInstance } from "./axios"

const BASE_URL = "/task"

const TaskAPI = {
  createTask: async (task: ICreateTask) => {
    const instance = getInstance();
    const { data } = await instance.post(BASE_URL, task)

    return data
  },
  getAllTask: async (): Promise<ITask[]> => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}`)

    return data as ITask[]
  },
  deleteTask: async (id: string): Promise<ITask[]> => {
    const instance = getInstance();
    const { data } = await instance.post(`${BASE_URL}/delete`, { id })

    return data
  },
  updateTask: async (task: ITask) => {
    const instance = getInstance();
    const { data } = await instance.put(BASE_URL, task)

    return data
  },
}

export default TaskAPI