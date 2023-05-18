import React from "react";
interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return <></>;
    return (
        <div
            onClick={onClose}
            className="w-screen h-screen z-40 bg-black fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-opacity-50 flex justify-center items-center"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="sm:w-auto w-full z-50 cursor-default"
            >
                {children}
            </div>
        </div>
    );
};
export default Modal;
