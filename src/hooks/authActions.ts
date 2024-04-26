import { saveUser } from "../system/redux/slices/auth_slice";
import { useAppDispatch } from "./store"


export const authActions = () => {
    const dispatch = useAppDispatch();

    const addUser = ({ id, email, isAuth }) => {
        dispatch(saveUser({ id, isAuth, email }))
    }

    return { addUser };
}
