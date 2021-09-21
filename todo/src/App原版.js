import {useState, useRef, useEffect,useLayoutEffect} from 'react';
import TodoItem from './TodoItem';
import useTodos from "./useTodos";

function App() {
  // 從 useTodos 讀取 todos 資料
  // const { todos, setTodos, id ,} = useTodos();
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
      <input
      type="text" placeholder="Add todo..." value={value}
      // 改為 handleChange
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      />
      <button onClick={handleBtnClick}>Add Todo</button>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone}/>)
      }
    </div>
  );
}
export default App;