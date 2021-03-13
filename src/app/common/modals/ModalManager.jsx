import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../../features/sandbox/TestModal';
import LoginForm from '../../../features/auth/LoginForm';

export default function ModalManager() {
    const modalLookup = {
        TestModal,
        LoginForm
    };
    const curModal = useSelector(state => state.modals);
    let renderedModal;
    if (curModal) {
        const { modalType, modalProps } = curModal;
        const ModalComponent = modalLookup[modalType];
        renderedModal = <ModalComponent {...modalProps} />
    }

    return <span>{renderedModal}</span>

}