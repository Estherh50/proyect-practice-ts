import { ReactElement } from "react";
import { IoCloseOutline } from "react-icons/io5";
import './index.css';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
}

export default function Modal(props: ModalProps) {
    return (
        <div className={`modal ${props.open ? "display-block" : "display-none"}`}>
            <div className="modal-main">
                <div className="modal-head">
                    <IoCloseOutline onClick={props.onClose} />
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}