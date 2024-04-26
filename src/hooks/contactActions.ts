
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../system/model/firebase";
import { useAppDispatch, useAppSelector } from "./store";
import { setLoadLight } from "../system/redux/slices/loading_slice";


export interface DataForm {
    name: string, lastName: string, email: string, phone: string, message: string
}

export const contactActions = () => {
    const dispatch = useAppDispatch();
    const idUser = useAppSelector((state) => state?.authReducer?.id);


    const sendContact = async (dataForm: DataForm) => {
        dispatch(setLoadLight(true));
        const dataRef = doc(collection(db, "contacts"));
        const idRef = dataRef?.id;
        const data = {
            id: idRef,
            idUser,
            ...dataForm
        }
        await setDoc(dataRef, data);
        dispatch(setLoadLight(false));
    }

    return { sendContact };
}