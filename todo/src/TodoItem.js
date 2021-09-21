import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from './constants/style';


const TodoItemWrapper = styled.div`
  position: relative;
  background-color: #32CD32;width: 200px;height: 200px;
  margin: 10px;
  display: wrap;
  justify-content: center;
  align-items: center;
  white-space: wrap;
  overflow:scroll;
  text-overflow: ellipsis;
  line-height: 1.5;
  
  ${MEDIA_QUERY_MD} {
    min-width: 300px;
  }
  ${MEDIA_QUERY_SM} {
    min-width: 200px;
  }
`

const TodoContent = styled.div`
  color: ${props => props.theme.colors.primary_100};
  font-size: 14px;

  ${props => props.size === 'XL' && `
    font-size: 20px;
  `}

  ${props => props.isDone && `
    text-decoration: line-through;
  `}
  
  padding: 30px 15px;
`

const TodoButtonWrapper = styled.div``

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #5F5E70;
  border: none;

  &:hover {
    color: yellow;
  }
`

export default function TodoItem ({className, todo, size,handleDeleteTodo, handleToggleIsDone}) {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id);
  }
  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <DeleteButton onClick={() => {handleDeleteTodo(todo.id)}}>
        ❌
      </DeleteButton>
      <TodoContent isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
      
    </TodoItemWrapper>
  )
}