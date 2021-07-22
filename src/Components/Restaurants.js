import { useEffect, useState } from "react";
import React from "react";
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key= AIzaSyDBbRtyuBkA9gmbZ4LD7oVedXRfAq7SqaU
const Restaurants = (props) =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    var lat3 = 45.777327199999995;
    //var lat2 = this.lat;
    var lng3 = 4.7766858999999995;
    //var lng2 = this.props.lng;

useEffect((props)=>{
    URL =`https://discover.search.hereapi.com/v1/discover?at=`+lat3+`,`+lng3+`&q=restaurants&limit=10&apiKey=QuDfH3QvOIE1IVlFs0rRVjFMvdKszgs13ijYYXzrOpo`
    
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
const restaurantsTest=()=>{
  console.log({items});
  //console.log({lat});
  //console.log({lng});
  //console.log({lnga})
}
if(error){
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
      <ul>
        {restaurantsTest()}
        {items.map(item => (
          <li key={item.id}>
            {item.title}  et distance : {item.distance} kms
          </li>
        ))}
      </ul>
      
      <p>{props.lat}</p>
      <p>{props.lng}</p>
      </div>
    );
}

}

export default Restaurants;