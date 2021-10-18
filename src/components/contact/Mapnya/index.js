import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const position = {
    lat: -6.165926,
    lng: 106.795036
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

function Mapnya() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyB0WlW9VK2BmGalaAXNehIrq_wVuA9nBZY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={10}
            >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Mapnya)