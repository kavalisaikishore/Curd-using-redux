import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from './Action';
import TodoList from './TodoList';

function Form(){
    const dispatch=useDispatch();
    const[titile,setTitile]=useState("");
    const handleChange=()=>{
        if(titile.trim()){
            let newData={
                titile:titile,
            }
            dispatch(addTodo(newData));
            setTitile("")
        }
        
    }
   
    return(
        <div className='container mt-2 w-50'>
            <h1 className='text-primary text-center'>TodoList using redux</h1>
            <div className='input-group'>
                <input type='text' className='form-control' value={titile} onChange={(e)=>{
                    setTitile(e.target.value)
                }}></input>
                <button className='btn btn-danger' onClick={handleChange}>Add</button>
            </div>
            <TodoList/>

        </div>
    )
}
export default Form;