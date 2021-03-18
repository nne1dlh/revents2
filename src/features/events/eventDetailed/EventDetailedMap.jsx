import GoogleMapReact from 'google-map-react';
import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

function Marker() {
    return (<Icon name='marker' size='big' color='red' />)
}

export default function EventDetailedMap(props) {
    const { latLng } = props;
    console.log('fuckyou', props);
    const zoom = 14;
    return (
        <Segment attached='bottom' style={{ padding: 0 }} >
            <div style={{ height: 300, width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBEK92Kvajvf4jQW3K44UI8ZCWqiZNURm8' }}
                    center={latLng}
                    zoom={zoom} >
                    <Marker lat={latLng.lat} lng={latLng.lng} />

                </GoogleMapReact>
            </div>
        </Segment>
    )
}
