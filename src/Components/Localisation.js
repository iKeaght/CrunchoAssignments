import { useEffect, useState } from 'react';
import Restaurants from './Restaurants';

function Localisation() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log("latici", lat)
        console.log("lng", lng)
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
  useEffect(()=>{
    console.log(lat)
    console.log(lng)
}, [lat, lng])
    return (
      <div className="App">

        <h1>Click the button to show 10 restaurants near you </h1>
        <div class="m-3 "> 
        <button onClick={() => getLocation()}>Get Location</button>
        <div class="m-2">
        <div>Latitude: {lat}</div>
        <div>Longitude: {lng}</div>
        </div>
        </div>

        {/*<div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <p>{item.title} et sa  distance : {item.distance} meters</p>
              </li>
            ))}
          </ul>
        </div>*/}
      <Restaurants lat={lat} lng={lng}></Restaurants>
      </div>
    );
  }


export default Localisation;