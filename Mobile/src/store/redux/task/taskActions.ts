import { ICreateTask, ITask } from "@src/models"
import TaskAPI from "@src/repositories/task";
import { allTask, selectedTask } from "./taskSlicer";


export const handleActionCreateTask = (
  task: ICreateTask, 
  callback = (err: Error | null) => {}) => async (dispatch: any) => {
  try {
    await TaskAPI.createTask(task);
    
    callback(null)
  } catch (e) {
    callback(e);
  }
}

export const handleActionTaskUpdate = (
  task: ITask, 
  callback = (err: Error | null) => {}) => async (dispatch: any) => {
  try {
    await TaskAPI.updateTask(task);
    
    callback(null)
  } catch (e) {
    callback(e);
  }
}

export const handleActionTaskDelete= (
  id: string, 
  callback = (err: Error | null) => {}) => async (dispatch: any) => {
  try {
    await TaskAPI.deleteTask(id);

    callback(null)
  } catch (e) {
    callback(e);
  }
}

export const handleActionGetAllTask = (
  callback = (err: Error | null) => {}) => async (dispatch: any) => {
  try {
    const payload = await TaskAPI.getAllTask();
    
    dispatch(allTask(payload))
    callback(null)
  } catch (e) {
    callback(e);
  }
}



export const handleActionSelectTask = (task: ITask) => (dispatch: any) => {    
    dispatch(selectedTask(task))
}
