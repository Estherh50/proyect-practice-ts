import { saveUser } from "../system/redux/slices/auth_slice";
import { useAppDispatch } from "./store"


interface PropsUser {
    id: string,
    email: any,
    isAuth: boolean
}

export const authActions = () => {
    const dispatch = useAppDispatch();



    const addUser = ({ id, email, isAuth }: PropsUser) => {
        dispatch(saveUser({ id, isAuth, email }))
    }

    return { addUser };
}
