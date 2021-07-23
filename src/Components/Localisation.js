import { useEffect, useState } from 'react';
import Restaurants from './Restaurants';
import Maps from './Map';
function Localisation() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [map, setMap] = useState(false);

//Get the user current position (geolocalisation)
  const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
      });
    setMap(true);
  }
  useEffect(() => {
  }, [lat, lng])

//When the button is pressed, it take the current localisation and call the component Map and Restaurants
  return (
    <div className="App">
      <h1 style={{ textDecorationLine: 'underline' }}>Click on button to show 10 restaurants near you </h1>
      <div className="m-3 ">
        <button onClick={() => getLocation()}>Get Localisation</button>
        <div className="m-2">
          <div>Latitude: {lat}</div>
          <div>Longitude: {lng}</div>
        </div>
        <div>
          {map && <Maps lat={lat} lng={lng} />}
        </div>
      </div>
      <Restaurants lat={lat} lng={lng}></Restaurants>

    </div>
  );
}
export default Localisation;