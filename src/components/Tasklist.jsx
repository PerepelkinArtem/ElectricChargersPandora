import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addTodo } from '../reduxToolkit/features/todo/todoSlice'
import { v4 } from 'uuid'

import TodoItem from './item/TodoItem'
import './Tasklist.css'

const data = [
    {
        id: '123',
        title: 'Закупка материалов для ремонта комнаты',
        isCompleted: false,
    },
    {
        id: '1234',
        title: 'Замена моторного масла',
        isCompleted: false,
    },
    {
        id: '12345',
        title: 'Подгрузить BACKEND',
        isCompleted: false,
    },
]

const Tasklist = () => {

    const dispach = useDispatch()
    const [todoValue, setTodoValue] = React.useState('')

    const addTodoHandler = () => {
        const todo = {
            id: v4(),
            text: '',
            completed: false,
        }
    }










    const [todobase, setTodobase] = useState(data)

    const changeTodo = id => {
        const copy = [...todobase]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodobase(copy)
    }

    const removeTodo = id => setTodobase([...todobase].filter(t => t.id !== id))

    return (
        <div className='wrapper'>
            {todobase.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo} />
            ))}
        </div>
    )
}

export default Tasklist