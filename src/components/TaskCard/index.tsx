import React from "react";
import CheckListIcon from "../../assets/svg/checklist";
import TraschIcon from "../../assets/svg/trash";
import ClockIcon from "../../assets/svg/clock";
import DeleteModal from "../../components/DeleteModal";
import classnames from "classnames";
import { useMutation, useQueryClient } from "react-query";
import { updateTodo } from "../../api/updateTodo";

type Props = {
  taskId: string;
  title: string;
  status: "completed" | "uncompleted";
};

const TaskCard: React.FC<Props> = ({ title, taskId, status }) => {
  const cache = useQueryClient();
  const { mutate, isLoading } = useMutation(updateTodo, {
    onSuccess: () => {
      cache.invalidateQueries("todos");
    },
  });

  const containerClass = classnames(
    "flex justify-center items-center relative rounded shadow-lg p-4 mb-2 ",
    {
      "bg-white text-darkPurple": status === "uncompleted",
      "bg-gray-300 bg-opacity-50": status === "completed",
    }
  );

  const titleClass = classnames(
    "flex-1 text-sm subpixel-antialiased tracking-wide font-bold whitespace-normal truncate ",
    {
      "line-through": status === "completed",
    }
  );

  const checklistClass = classnames("w-5 h-5 ml-4", {
    "text-green-400": status === "completed",
    "text-green-600": status === "uncompleted",
  });

  return (
    <div className={containerClass}>
      <p className={titleClass}>{title}</p>

      <div className="flex text-darkPurple">
        <span>
          {isLoading ? (
            <ClockIcon />
          ) : (
            <CheckListIcon
              className={checklistClass}
              onClick={() => mutate(taskId)}
            />
          )}
        </span>
        <span className="w-5 h-5 ml-4 text-red-600">
          <TraschIcon />
        </span>
      </div>
      {/* <DeleteModal /> */}
    </div>
  );
};

export default TaskCard;
