import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import TestMap from "./TestMap";
import TestPlaceInput from "./TestPlaceInput";
import { decrement, increment } from "./testReducer";


export default function Sandbox() {
    const dispatch = useDispatch();
    const dataP = useSelector(state => state.test.data);
    //useState hook to pass state down to lower compo TestPlaceInput/TestMap
    const defaultProps = { //move this local state to upper compo
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    const [location, setLocation] = useState(defaultProps);

    function handleSetLoc(latLng) {
        setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } })
    }

    return (
        <Fragment>
            <h1>Testing 123</h1>
            <h3> The data is {dataP} </h3>
            <Button onClick={() => dispatch(increment(10))} content="Increment" color='green' />
            <Button onClick={() => dispatch(decrement(5))} content="Decrement" color='red' />
            <Button
                onClick={() => dispatch(openModal({ modalType: 'TestModal', modalProps: { dataP } }))}
                content="Open Modal" color='teal' />
            <div style={{ marginTop: 15 }}>
                <TestPlaceInput setLocation={handleSetLoc} />
                <TestMap loc={location} />
            </div>
        </Fragment>
    )
}