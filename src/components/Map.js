import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MapGL, { Source, Layer } from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const API_URL = 'https://server.mapid.io/layers_new/get_layer?api_key=689c2279e0834a3ba82743432605e746&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: -6.905977,
        longitude: 107.613144,
        zoom: 11
    });

    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        try {
            axios.get(API_URL).then(response => {
                setDataApi(response.data.geojson)
            })
        } catch (error) {
            console.error(error);
        }
    }, [])

    console.log(dataApi);

    return (
        <div>
            <MapGL
                style={{ width: '100%', height: '400px' }}
                mapStyle='mapbox://styles/mapbox/light-v9'
                accessToken={'pk.eyJ1IjoiZmFyaXYxMSIsImEiOiJjbDN6anh4M2kwd2doM2xueDE1cjhxaXhjIn0.kkjJ4XdgJUku3fFHxtlGXQ'}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}
                onViewportChange={setViewport}
            >
                <Source id='points' type='geojson' data={dataApi} />
                <Layer
                    id='points'
                    type='circle'
                    source='points'
                    paint={{
                        'circle-radius': 6,
                        'circle-color': '#1978c8'
                    }}
                />
            </MapGL>
        </div>
    )
}

export default Map