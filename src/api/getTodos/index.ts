import axios from "axios";
import { Todos } from "../../types/todos.type";

export const getTodos = async (): Promise<Todos> => {
  let data = null;
  try {
    const res = await axios.get("http://localhost:8080/api/todos");
    data = res.data;
  } catch (error) {
    data = error;
  }
  return data;
};
