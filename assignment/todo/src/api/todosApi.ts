import pocketbase from "../utils/pocketbase"

export const createTodo = async (data: { task: string, deadline: string }) => {
  const todo = {task: data.task, deadline: data.deadline, done: false, progress: 0}
  const record = await pocketbase.collection('todos').create(todo);
  return record;
}

export const getAllTodos = async () => {
  return pocketbase.collection('todos').getFullList();
}

export const deleteTodo = async (todoId: string) => {
  await pocketbase.collection('todos').delete(todoId);
}

export const disconnect = () => {
  pocketbase.disconnect();
}

export const getTodo = async (rec_id: string) => {
  const a_todo = await pocketbase.collection('todos').getOne(rec_id);
  return a_todo;

}

export const editTodo = async (rec_id: string, data: {task: string, deadline: string, done: boolean, progress: number }) => {
  const record = await pocketbase.collection('todos').update(rec_id, data)
  return record;
}
