import './App.css';
import React, {useState} from 'react';
import Template from './component/Template';
import TodoList from './component/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './component/TodoInsert';

let nextId = 5;
function App() {

  
    const [selTodo, setSeltodo] =  useState(null);
    const [insertToggle, setInsertToggle] = useState(false)
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: "리액트 기초 알아보기",
        checked: true
      },
      {
        id: 2,
        text: "리액트 컴포넌트 스타일링하기",
        checked: true
      },
      {
        id: 3,
        text: "TodoList 만들기",
        checked: true
      },
      {
        id: 4,
        text: "멋진 개발자 되기",
        checked: false
      }
    ]);
    const onInsertToggle = () =>{
      if(selTodo){
        setSeltodo(null)
      }
      setInsertToggle(prev=>!prev);
    }

    const onInsertTodo = (text) =>{
      if(text === ''){
        return alert('할일을 입력해주세요')
      }else{
        const todo = {
          id: nextId,
          text,
          checked:false
        };
        setTodos(todos => todos.concat(todo));
        nextId++;
      }
    }
    const onCheckToggle = (id) =>{
      setTodos(todos => 
        todos.map(todo => 
          (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
    }

    const onChangeSelTodo = (todo) =>{
      setSeltodo(todo)
    }

    const onRemove = (id) =>{
      onInsertToggle()
      setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const onUpdate = (id, text) =>{
      onInsertToggle();
      setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
    }

      const today = new Date();
    
      const date = today.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

    
    return (

      <Template todoLength={todos.length} today={today} date={date}>
        <TodoList 
          todos={todos} 
          onCheckToggle={onCheckToggle} 
          onInsertToggle={onInsertToggle}
          onChangeSelTodo={onChangeSelTodo}
        />
        <div className='add-todo-button' onClick={onInsertToggle}>
          <MdAddCircle/>
        </div>
        {insertToggle && (
          <TodoInsert 
            selTodo={selTodo}
            onInsertToggle={onInsertToggle} 
            onInsertTodo={onInsertTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
      
    );
  }

export default App;
