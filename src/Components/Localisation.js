import { useEffect, useState } from 'react';
import Restaurants from './Restaurants';
function Localisation() {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    //var lat3 = 45.777327199999995;
    //var lat2 = this.lat;
    //var lng3 = 4.7766858999999995;

    
    const getLocation = () => {
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          console.log("lat", lat)
          console.log("lng", lng)
        }, () => { 
          setStatus('Unable to retrieve your location');
        });
      }
      sendCoords();
    }
    const sendCoords = () =>{
      URL =`https://discover.search.hereapi.com/v1/discover?at=`+lat+`,`+lng+`&q=restaurants&limit=10&apiKey=QuDfH3QvOIE1IVlFs0rRVjFMvdKszgs13ijYYXzrOpo`
      
      fetch(URL)
      .then(res => res.json())
      
      .then(
          (result) =>{
              setIsLoaded(true);
              setItems(result.items);
          },
          (error) => {
              setIsLoaded(true);
              setError(error);
              console.log(error)
          }
      )
    
    }
    useEffect(()=>{
      getLocation();
      URL =`https://discover.search.hereapi.com/v1/discover?at=`+lat+`,`+lng+`&q=restaurants&limit=10&apiKey=QuDfH3QvOIE1IVlFs0rRVjFMvdKszgs13ijYYXzrOpo`
      
      fetch(URL)
      .then(res => res.json())
      
      .then(
          (result) =>{
              setIsLoaded(true);
              setItems(result.items);
          },
          (error) => {
              setIsLoaded(true);
              setError(error);
              console.log(error)
          }
      )
  }, [])
  if(error){
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    
     

    return (
      <div className="App">
        
        <h1>Click the button to show 10 restaurants near you </h1>
        <button onClick={() => getLocation()}>Get Location</button>
        <p>{status}</p>
      
        <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
           <p>{item.title} et sa  distance : {item.distance} meters</p>
          </li>
        ))}
      </ul>
      </div>
       
      </div>
    );
        }
  }

  export default Localisation;