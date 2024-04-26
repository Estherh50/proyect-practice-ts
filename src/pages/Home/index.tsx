import { useState } from "react";
import { CreateTodo } from "../../components/Home/CreateTodo";
import { ListToDo } from "../../components/Home/ListToDo";
import Modal from "../../components/Modal";
import useAlert, { VarianAlerts } from "../../components/Alerts/useAlert";
import { IoIosAdd } from "react-icons/io";


const Home = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const { alerts, createAlert } = useAlert();

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const addAlert = (textAlert: string, variant: VarianAlerts) => {
        createAlert({
            text: textAlert,
            variant
        });
    };


    return (
        <div className="lg:mx-auto lg:max-w p-20">

            <div>
                {alerts}
            </div>
            <Modal open={showModal} onClose={toggleModal}>
                <CreateTodo toggleModal={toggleModal} addAlert={addAlert} />
            </Modal>
            <div className="flex justify-end" >
                <button
                    type="button"
                    onClick={toggleModal}
                    className="flex items-center gap-1 rounded-md bg-neutral-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white"
                >
                    <IoIosAdd/>
                    <label>Agregar To-Do</label>
                    
                </button>
            </div>
            <ListToDo />
        </div>
    );
}

export default Home;