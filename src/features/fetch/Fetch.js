import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncGet, selectUsers } from './fetchSlice';

const Fetch = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    useEffect(()=>{
        dispatch(fetchAsyncGet())
    },[dispatch]);

  return (
    <>
    {users.map((user)=> (
        <div key={user.id}>{user.email}</div>
    ))}
    
    </>
  )
}

export default Fetch