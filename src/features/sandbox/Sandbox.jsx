import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./testReducer";


export default function Sandbox() {
    const dispatch = useDispatch();
    const dataP = useSelector(state => state.test.data);

    return (
        <Fragment>
            <h1>Testing 123</h1>
            <h3> The data is {dataP} </h3>
            <Button onClick={() => dispatch(increment(10))} content="Increment" color='green' />
            <Button onClick={() => dispatch(decrement(5))} content="Decrement" color='red' />
            <Button
                onClick={() => dispatch(openModal({ modalType: 'TestModal', modalProps: { dataP } }))}
                content="Open Modal" color='teal' />
        </Fragment>
    )
}