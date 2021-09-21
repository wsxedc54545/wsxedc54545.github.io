import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from './constants/style';

const TodoItemWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  min-width: 300px;
  margin-top: 4px;

  & + & {  //選2個button
    margin-top: 4px;
  }
  
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
`

const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;
  color: white;
  background: #5F5E70;
  border: none;

  & + & {
    margin-left: 4px;
  }

  &:hover {
    color: yellow;
  }
`
const PinkButton = styled(Button)`
  color: #F08BD6;
`

export default function TodoItem ({className, todo, size,handleDeleteTodo, handleToggleIsDone}) {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id);
  }
  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <TodoContent isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleToggleClick}>
          {todo.isDone && '已完成'}
          {!todo.isDone && '未完成'}  
          {/* todo.isDone ? '已完成' : '未完成' */}
        </Button>
        <PinkButton onClick={() => {
            handleDeleteTodo(todo.id)
          }}>刪除</PinkButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}