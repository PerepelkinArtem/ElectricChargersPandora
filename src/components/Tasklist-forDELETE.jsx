import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { addTodo } from '../reduxToolkit/features/todo/todoSlice'
import { v4 } from 'uuid'

import TodoItem from './item/TodoItem'
import './Tasklist.css'

const Tasklist = () => {

    const todos = useSelector ((state) => state.todo.todos)

    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = React.useState('')

    const addTodoHandler = () => {
        const todo = {
            id: v4(),
            text: todoValue,
            completed: false,
        }

        dispatch(addTodo(todo))
        setTodoValue('')
    }

    return (
        <>
            <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    value={todoValue}
                    placeholder='Type something...'
                    onChange={(e) => setTodoValue(e.target.value)}
                    className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
                />
                <button
                    type='submit'
                    className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                    onClick={() => addTodoHandler()}
                >
                    Submit
                </button>
            </form>
            <div className='wrapper'>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo} />
                ))}
            </div>
        </>
    )
}

export default Tasklist