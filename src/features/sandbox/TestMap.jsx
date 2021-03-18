import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function TestMap(props) {
    const { loc } = props;

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBEK92Kvajvf4jQW3K44UI8ZCWqiZNURm8' }}
                center={loc.center}
                zoom={loc.zoom}
            >
                <AnyReactComponent
                    lat={loc.center.lat}
                    lng={loc.center.lng}
                    text="My PissMarker"
                />
            </GoogleMapReact>
        </div>
    );

}

