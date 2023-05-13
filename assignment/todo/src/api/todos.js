import pocketbase from "../utils/pocketbase"

export const resultList = await pocketbase.collection('todos').getFullList();

export{};