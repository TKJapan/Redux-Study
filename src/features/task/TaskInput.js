import React, {useState}from 'react';
//①useDispatchをインポート
import {useDispatch} from 'react-redux';
//②taskSliceでexportしたnewTaskをインポート
import { newTask} from './taskSlice';

const TaskInput = () => {
    //③dispatchを宣言
    const dispatch = useDispatch();
    //④useStateでeditTitleを作成
    const [editTitle, setEditTitle] = useState("");
    //⑤handleTitleChangeを作り、setEditTitleを変更できるようにする
    const handleTitleChange = (e) => {
        setEditTitle(e.target.value)
    }
    //⑥handleSubmitは、preventDefaultしておき、dispatchでnewTaskに追加
    //追加後、setEditTitleをクリア
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTask(editTitle))
    setEditTitle("");
  }
    return <form onSubmit={handleSubmit}>
        <input type="text" value={editTitle} 
        onChange={handleTitleChange}
        placeholder="Please type in"
        />
        <button>New</button>
    </form>
}

export default TaskInput