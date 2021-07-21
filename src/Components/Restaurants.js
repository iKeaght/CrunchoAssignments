import { useEffect, useState } from "react";

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key= AIzaSyDBbRtyuBkA9gmbZ4LD7oVedXRfAq7SqaU
function Restaurants(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

var myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*'
});

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default',
                };
useEffect(()=>{
    URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAhLDPW6rLo6S5Xo9HmcCPGwmZ4iIRDdG8"
    fetch(URL,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }})
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
      <ul>
        {items.map(item => (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
}

}

export default Restaurants;