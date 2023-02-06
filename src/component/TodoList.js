import React from 'react';
import TodoItem from './TodoItem';
import '../css/TodoList.css'

function TodoList({todos, onCheckToggle, onInsertToggle, onChangeSelTodo}){
    return(
        <div className='todoList'>
           {todos.map(todo => (
            <TodoItem 
                todo = {todo} key={todo.id} 
                onCheckToggle={onCheckToggle} 
                onInsertToggle={onInsertToggle}
                onChangeSelTodo={onChangeSelTodo}
            />
            ))}
        </div>
    );

}
export default TodoList