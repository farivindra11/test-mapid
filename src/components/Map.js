import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_URL = 'https://server.mapid.io/layers_new/get_layer?api_key=689c2279e0834a3ba82743432605e746&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc'

const Map = () => {
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
            testing
        </div>
    )
}

export default Map