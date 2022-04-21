import React from "react";
import TaskCard from "../TaskCard";
import { useQuery } from "react-query";
import { getTodos } from "../../api/getTodos";

const TaskList: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery("todos", getTodos);
  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  if (isError) {
    return (
      <>
        is error
        {error}
      </>
    );
  }

  return (
    <section className="flex flex-col overflow-x-hidden overflow-y-auto h-taskList rounded">
      {data?.todos.map((todo) => {
        return (
          <TaskCard
            key={todo._id}
            title={todo.title}
            taskId={todo._id}
            status={todo.status}
          />
        );
      })}
    </section>
  );
};

export default TaskList;
