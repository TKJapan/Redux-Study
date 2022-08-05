import React from 'react';
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";

//12 削除ボタンを作成、チェックを入れたらfalse状態をtrueに変更する機能を記述
const TaskItem = ({task}) => {
    //13 dispathを定義
    const dispatch = useDispatch();

  return (
    <>
    <input type="checkbox"
    //14 complieteTaskのtaskをdispatchで取り込む、deleteTaskを呼び出し、dispatchする
    onClick={()=> dispatch(completeTask(task))}
    defaultChecked={task.completed}/>
    <span>{task.title}</span>
    <button onClick={()=> dispatch(deleteTask(task))}>DELETE</button>
    </>
  )
}

export default TaskItem