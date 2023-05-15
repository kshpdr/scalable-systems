import pocketbase from "../utils/pocketbase"

export const createTodo = async (data: { task: string, deadline: string }) => {
  data.done = false;
  data.progress = 0;

  const record = await pocketbase.collection('todos').create(data);
  return record;
}

export const getAllTodos = async () => {
  return pocketbase.collection('todos').getFullList();
}

export const disconnect = () => {
  pocketbase.disconnect();
}

export const singleTodo = async (rec_id: string) => {
  const a_todo = await pocketbase.collection('todos').getOne(rec_id);
  return a_todo;
  //console.log('sosichlen')
}

export const editTodo = async (rec_id: string, data: {task: string, deadline: string, done: boolean, progress: number }) => {
  const record = await pocketbase.collection('todos').update(rec_id, data)
  return record;
}
