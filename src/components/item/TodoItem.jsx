import React from 'react'
import Check from './Check'
import './TodoItem.css'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return <button className='TodoItem' onClick={() => changeTodo(todo.id)}>
            <div className='Sentence'>
                <Check isCompleted={todo.isCompleted} />
                {todo.title}
            </div>
            <div className='Remove'></div>
    </button>
}

export default TodoItem