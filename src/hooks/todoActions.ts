
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { addNewTodo, deleteTodoById, listTodos, TodoAndID, TodoID, update } from "../system/redux/slices/todo_slice";
import { useAppDispatch, useAppSelector } from "./store"
import { db } from "../services/firebase";
import { loadingActions } from "./loadingActions";
import { setLoadLight } from "../system/redux/slices/loading_slice";


export const todoActions = () => {
    const idUser =  useAppSelector((state) => state?.authReducer?.id);
    const {changeLoad} = loadingActions();
    const dispatch = useAppDispatch();

    const getListTodos = async(id: string) => {
        changeLoad(true);
        const querySnapshot = await getDocs(collection(db, "users", `${id}`, "ToDos"));
        const listToDos: TodoAndID[] = [];
        querySnapshot.forEach((doc: any) => {
            listToDos.push(doc.data())
        });
        dispatch(listTodos(listToDos));
        changeLoad(false);
    }


    const removeTodo = async(id: TodoID) => {
        dispatch(setLoadLight(true));
        await deleteDoc(doc(db, "users", `${idUser}`, "ToDos", `${id}`));
        dispatch(deleteTodoById(id));
        dispatch(setLoadLight(false));
    }

    const addTodo = async(name: string, date: string) => {
        dispatch(setLoadLight(true));
        const dataRef = doc(collection(db, "users", `${idUser}`, "ToDos"));
        const idRef = dataRef?.id;
        const data = {
            id: idRef,
            name,
            date
        }
        await setDoc(dataRef, data);
        dispatch(addNewTodo({ id: idRef, name, date }));
        dispatch(setLoadLight(false));

    }

    const updateTodo = async (id: string, name: string, date: string) => {
        dispatch(setLoadLight(true));
        const dateRef = doc(db, "users", `${idUser}`, "ToDos", `${id}`);
        await updateDoc(dateRef, {
            name
        });
        dispatch(update({ id, name, date }));
        dispatch(setLoadLight(false));
    }

    return { getListTodos, removeTodo, addTodo, updateTodo };
}