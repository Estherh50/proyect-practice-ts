
import { setStateLoading } from "../system/redux/slices/loading_slice";
import { useAppDispatch } from "./store"


export const loadingActions = () => {
    const dispatch = useAppDispatch();

    const changeLoad = (load: boolean) => {
        dispatch(setStateLoading(load));
    }

    return { changeLoad };
}