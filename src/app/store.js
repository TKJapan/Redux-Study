import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//⑧インポートする
import taskReducer from '../features/task/taskSlice';
import fetchReducer from '../features/fetch/fetchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //⑨storeにsliceを追加する
    task: taskReducer,
    fetch: fetchReducer,
  },
});
