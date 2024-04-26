import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToDo {
    name: string;
    date: string;
}

export type TodoID = string;

export interface TodoAndID extends ToDo {
    id: string;
}

const initialState: TodoAndID[] = [];

export const todoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        listTodos: (state, action: PayloadAction<TodoAndID[]>) => {
            const list = action.payload;
            return list;
        },
        deleteTodoById: (state, action: PayloadAction<TodoID>) => {
            const id = action.payload;
            return state.filter((todo) => todo.id !== id)
        },

        addNewTodo: (state, action: PayloadAction<TodoAndID>) => {
            return [...state, {...action.payload}];
        },
        update: (state, action: PayloadAction<TodoAndID>) => {
            const id = action.payload.id;
            const dateTodo = action.payload;
            return state.map((todo) => todo.id === id ? dateTodo: todo);
        }
    }
});

export default todoSlice.reducer;

export const {listTodos, deleteTodoById, addNewTodo, update} =  todoSlice.actions;
