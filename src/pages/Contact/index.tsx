
import useAlert from "../../components/Alerts/useAlert";
import Form from "../../components/Contact/Form";
import LoadingLight from "../../components/Generics/Loading/LoadingLight";
import { useAppSelector } from "../../hooks/store";


const Contact = () => {
    const { alerts, createAlert } = useAlert();
    const loading = useAppSelector((state) => state?.loadingReducer.isLoadingLight);

    return (
        <>
            <div>
                {alerts}
            </div>
            {loading ? <LoadingLight /> : null }
            <Form createAlert={createAlert} />
        </>
    );
}

export default Contact;