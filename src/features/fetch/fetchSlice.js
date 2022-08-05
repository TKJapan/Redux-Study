//①reduxtoolkitから、createAsyncThunkをインポートする
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//②URLを定義
const apiUrl = "https://jsonplaceholder.typicode.com/users";

//非同期の処理はスライスの外に書く
//④createAsyncThunkでURLの名前をつけるとき、スライスのnameとmethodを繋ぎ合わせてことが多い
//⑤axiosのgetでapiのデータを取得して格納する
export const fetchAsyncGet = createAsyncThunk("fetch/get", async () =>{
    const res = await axios.get(apiUrl);
    return res.data;
})
//③スライスを作成、reducersは使わない時は、下記のように空にする
const fetchSlice = createSlice({
    name: "fetch",
    initialState: { users: []},
    reducers: {},
    //⑥createAsyncThunkを使う時は、extraReducersを書く必要がある
    //⑦fulfilledに成功した場合の処理を書く
    //⑧action.payloadに、res.dataが渡される
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGet.fulfilled, (state,action)=> {
            return {
                ...state,
                users: action.payload,
            };
        })
    }
})
//⑨selectUsersを作成してexportする、次にstoreに登録する処理を書く
export const selectUsers = (state) => state.fetch.users;
export default fetchSlice.reducer;