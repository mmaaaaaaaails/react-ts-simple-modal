import React, {ReactNode, useEffect} from 'react';
import './Modal.css'

interface ModalIProps {
    isOpen: boolean
    children?: ReactNode
    onClose: () => void
}

const Modal = ({isOpen, children, onClose}: ModalIProps) => {

    useEffect(() => {
        document.addEventListener('keydown', onCloseEsc)

        return () => {
            document.removeEventListener('keydown', onCloseEsc)
        }
    })

    const onCloseEsc = ({key}: KeyboardEvent) => {
        if (key === 'Escape') {
            onClose();
        }
    }

    const handleStopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <>
            {isOpen && (
                <div className="modal" onClick={onClose}>
                    <div className="modal-box" onClick={handleStopPropagation}>
                        <span className="modal-close" onClick={onClose}>&times;</span>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
