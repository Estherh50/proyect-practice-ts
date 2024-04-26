import { useState } from "react";
import { CreateTodo } from "../../components/Home/CreateTodo";
import { ListToDo } from "../../components/Home/ListToDo";
import Modal from "../../components/Modal";
import useAlert, { VarianAlerts } from "../../components/Alerts/useAlert";
import { IoIosAdd } from "react-icons/io";
import { useAppSelector } from "../../hooks/store";
import Loading from "../../components/Generics/Loading/Loading";
import { authActions } from "../../hooks/authActions";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const { alerts, createAlert } = useAlert();
    const loading = useAppSelector((state) => state?.loadingReducer.isLoading);
    const { addUser } = authActions();
    const navigate = useNavigate();

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const addAlert = (textAlert: string, variant: VarianAlerts) => {
        createAlert({
            text: textAlert,
            variant
        });
    };

    const closeSesion = () => {
        localStorage.removeItem("sesion");
        addUser({ id: '', email: '', isAuth: false });
        navigate('/login');
    }


    return (
        <div className="lg:mx-auto w-screen lg:max-w p-20 md-p-40 mt-10">
            {loading ? <Loading /> : null}
            <div>
                {alerts}
            </div>
            <Modal open={showModal} onClose={toggleModal}>
                <CreateTodo toggleModal={toggleModal} addAlert={addAlert} />
            </Modal>
            <div className="flex justify-end" >
                <button
                    type="button"
                    onClick={closeSesion}
                    className="flex items-center gap-1 rounded-md bg-neutral-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white"
                >
                    <label>Cerrar sesión</label>

                </button>
            </div>

            <div className="flex justify-end mt-5 mb-5" >
                <button
                    type="button"
                    onClick={toggleModal}
                    className="flex items-center gap-1 rounded-md bg-neutral-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white"
                >
                    <IoIosAdd />
                    <label>Agregar To-Do</label>

                </button>
            </div>
            <ListToDo addAlert={addAlert} />
        </div>
    );
}

export default Home;