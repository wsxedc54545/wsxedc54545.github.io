import {useState, useRef, useEffect,useLayoutEffect} from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import useTodos from "./useTodos";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`
const TodoInput = styled.div`
  margin: 15px 0;
  width: 820px;
  height: 45px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.05) rgba(0, 0, 0, 0.08) rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.05);

`


const TodoContainer = styled.div`
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
  width: 800px;
`

function App() {
  // 從 useTodos 讀取 todos 資料
  const {
    todos,
    setTodos,
    id,
    handleBtnClick,
    handleKeyDown,
    handleToggleIsDone,
    handleDeleteTodo,
    value,
    setValue,
    handleChange,
  } = useTodos();

  return (
    <div className="App">
      <InputContainer>
      <input 
          type="text" placeholder="Add todo..." value={value}
          // 改為 handleChange
          onChange={handleChange}
          onKeyDown={handleKeyDown}/>
        <button onClick={handleBtnClick}>Add Todo</button>
      </InputContainer>
        
      <hr/>
      <TodoContainer>
        {
          todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone}/>)
        }
      </TodoContainer>
    </div>
  );
}
export default App;