import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { toggleCompletedTodo, removeTodo } from '../../reduxToolkit/features/todo/todoSlice'

import './TodoItem.css'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()

    const toggleTodoHandler = (id) => {
        dispatch(toggleCompletedTodo(id))
    }

    const remoteTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }

    return <>
        <button className='TodoItem'>
            <div
                className='btn completed'
                onClick={() => toggleTodoHandler(todo.id)}>
                Complete
            </div>
            <div className={todo.completed ? 'Competed' : ''}>
                {todo.text}
            </div>
            <button className='btn remove'
                onClick={() => remoteTodoHandler(todo.id)}>
                Delete
            </button>
        </button>
    </>
}

export default TodoItem