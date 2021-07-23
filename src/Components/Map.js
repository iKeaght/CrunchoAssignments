import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
const Maps = ({ lat, lng }) => {
    const mapStyles = {
        width: '400px',
        height: '400px'
    };
    const center ={
        lat: lat,
        lng: lng
    }
    return (
        <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
        <LoadScript
        googleMapsApiKey='AIzaSyAhLDPW6rLo6S5Xo9HmcCPGwmZ4iIRDdG8'
        >
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={12}
           center={center}
         >
             <Marker position={{lat: lat, lng: lng}}></Marker>
            <div>coucou</div>
         </GoogleMap>
         </LoadScript>
         </div>
      
    );

}

export default Maps;