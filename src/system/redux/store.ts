import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth_slice';
import { todoSlice } from './slices/todo_slice';
import { charactersSlice } from './slices/characters_slice';
import { loadingSlice } from './slices/loading_slice';

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    todoReducer: todoSlice.reducer,
    characterReducer: charactersSlice.reducer,
    loadingReducer: loadingSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;