import React from 'react';
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";

//⑩リスト一覧表示を作成
const TaskList = () => {
    //11 useSelectorで、tasksにselectTasksを与える
  const tasks = useSelector(selectTasks);
  return (
    <>
    {tasks.map((task)=> (
        <TaskItem key={task.id} task={task}/>
        ))}
    </>
  )
}

export default TaskList