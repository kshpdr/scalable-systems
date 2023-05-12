import pocketbase from "../utils/pocketbase"

export const createTodo = async (data: { task: string, deadline: string }) => {
  data.done = false;
  data.progress = 0;

  const record = await pocketbase.collection('todos').create(data);
  return record;
}

export const disconnect = () => {
  pocketbase.disconnect();
}
