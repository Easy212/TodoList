import React from 'react';
import '../css/TodoItem.css'
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'

function TodoItem({todo, onCheckToggle, onInsertToggle, onChangeSelTodo}){

    const {id, text, checked} = todo;
    return(
        <div className='todoItem'>
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? <MdCheckBox onClick={()=>{onCheckToggle(id)}}/> : <MdCheckBoxOutlineBlank onClick={()=>{onCheckToggle(id)}}/>}
                <div className='text' onClick={()=>{
                    onChangeSelTodo(todo)
                    onInsertToggle()
                    }}
                >
                    {text}
                  
                </div>
            </div>
        </div>
    );

}
export default TodoItem