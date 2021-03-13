import React from 'react';
import ModalWrapper from '../../app/common/modals/modalWrapper';

export default function TestModal({ dataP }) {
    return (
        <ModalWrapper size='mini' header='TestModal'>
            <div>The data is: {dataP}</div>
        </ModalWrapper>
    )
}