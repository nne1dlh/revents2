import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from './modalReducer';

export default function ModalWrapper({ children, size, header }) {
    const dispatchP = useDispatch();
    return (
        <Modal open={true} onClose={() => dispatchP(closeModal())} size={size}>
            {header && <Modal.Header>{header}</Modal.Header>}
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    )
}