import React, { useEffect, useState } from 'react';
import {MdAddCircle} from 'react-icons/md'
import {TiTrash, TiPencil} from 'react-icons/ti'
import '../css/TodoInsert.css'

function TodoInsert({onInsertToggle, onInsertTodo, selTodo, onRemove, onUpdate}){
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue('');
        onInsertToggle();
    }
    useEffect(() =>{
        if(selTodo){
            setValue(selTodo.text);
        }
    }, [selTodo]);
    return(
        <div>
            <div className='backGround' onClick={onInsertToggle}></div>
            <form onSubmit= {selTodo ? () => {onUpdate(selTodo.id, value)} : onSubmit} className='insertForm'>
                <input 
                    placeholder='할일을 작성 해주세요' 
                    value={value} onChange={onChange}
                ></input>
                {selTodo ? (
                    <div className='update'>
                        <TiPencil
                            onClick={() => {
                                onUpdate(selTodo.id, value)}
                            }
                        />
                        <TiTrash 
                            onClick={() => {
                                onRemove(selTodo.id)}
                            }
                        />
                    </div>
                ) : (
                <button type='submit'><MdAddCircle/></button>
                )}
            </form>
        </div>
    );

}
export default TodoInsert