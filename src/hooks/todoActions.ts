
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { addNewTodo, deleteTodoById, listTodos, TodoAndID, TodoID, update } from "../system/redux/slices/todo_slice";
import { useAppDispatch, useAppSelector } from "./store"
import { db } from "../system/model/firebase";


export const todoActions = () => {
    const idUser =  useAppSelector((state) => state?.authReducer?.id);
    const dispatch = useAppDispatch();

    const getListTodos = async(id: string) => {
        const querySnapshot = await getDocs(collection(db, "users", `${id}`, "ToDos"));
        const listToDos: TodoAndID[] = [];
        querySnapshot.forEach((doc: any) => {
            console.log(doc.data());
            listToDos.push(doc.data())
        });
        console.log(listToDos);
        dispatch(listTodos(listToDos));
    }


    const removeTodo = async(id: TodoID) => {
        await deleteDoc(doc(db, "users", `${idUser}`, "ToDos", `${id}`));
        dispatch(deleteTodoById(id));
    }

    const addTodo = async(name: string, date: string) => {
        const dataRef = doc(collection(db, "users", `${idUser}`, "ToDos"));
        const idRef = dataRef?.id;
        console.log(dataRef.id);
        const data = {
            id: idRef,
            name,
            date
        }
        await setDoc(dataRef, data);
        dispatch(addNewTodo({ id: idRef, name, date }));

    }

    const updateTodo = async (id: string, name: string, date: string) => {
        const dateRef = doc(db, "users", `${idUser}`, "ToDos", `${id}`);
        await updateDoc(dateRef, {
            name
        });
        dispatch(update({ id, name, date }));
    }

    return { getListTodos, removeTodo, addTodo, updateTodo };
}