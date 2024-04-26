
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../system/model/firebase";
import { useAppSelector } from "./store";


export interface DataForm {
    name: string, lastName: string, email: string, phone: string, message: string
}

export const contactActions = () => {

    const idUser = useAppSelector((state) => state?.authReducer?.id);


    const sendContact = async (dataForm: DataForm) => {
        const dataRef = doc(collection(db, "contacts"));
        const idRef = dataRef?.id;
        console.log(dataRef.id);
        const data = {
            id: idRef,
            idUser,
            ...dataForm
        }
        await setDoc(dataRef, data);

    }

    return { sendContact };
}