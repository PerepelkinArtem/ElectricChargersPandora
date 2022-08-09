import { configureStore } from '@reduxjs/toolkit'
//Подключаем slice:
import todoSlice from './features/todo/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
})