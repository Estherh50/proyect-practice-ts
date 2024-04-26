import { ReactNode } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";

import './Alert.css';

type AlertProps = {
    variant: 'success' | 'danger' | 'warning';
    children: ReactNode;
}


export default function Alert({ variant = "success", children }: AlertProps) {
    const classVariants = {
        success: 'success',
        warning: 'warning',
        danger: 'danger'
    }
    return (
        <div id="root" className={classVariants[variant]}>
            <span className="span-alert">
                {variant === "success" ? (
                    <IoIosCheckmarkCircleOutline />
                ) : variant === "warning" ? (
                    <IoWarningOutline />
                ) : (
                    <IoCloseCircleOutline />
                )}
            </span>
            {children}
        </div>
    );
}