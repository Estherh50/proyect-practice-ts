import { ReactNode } from "react";

import './Alert.css';

type AlertProps = {
    variant: 'success' | 'danger' | 'warning';
    children: ReactNode;
}


export default function Alert({ variant = "success", children }: AlertProps) {

    const alertClass = () => {
        switch (variant) {
            case 'success':
                return 'bg-green-100 text-green-700';
            case 'warning':
                return 'bg-yellow-100 text-yellow-700';
            case 'danger':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };


    return (
        <div className={`fixed right-4 top-4 z-50 w-60 p-4 rounded-md shadow-md ${alertClass()}`} role="alert">
            <div className="flex items-center">
                <div className="text-xl mr-2">
                    {variant === 'success' && <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                    {variant === 'warning' && <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zM12 17v-4M12 9h.01" /></svg>}
                    {variant === 'danger' && <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM9 3v4a1 1 0 001 1h4a1 1 0 001-1V3m-4 10h.01M9 21a2 2 0 002-2h2a2 2 0 002 2M3 9a2 2 0 002 2h2a2 2 0 002-2m0 0a2 2 0 012-2h2a2 2 0 012 2m-2 2a2 2 0 002 2h2a2 2 0 002-2m-4 0a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
                </div>
                <div>
                    <p className="font-semibold">{children}</p>
                </div>
            </div>
        </div>
    );
}