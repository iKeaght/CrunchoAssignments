import { useEffect, useState } from "react";
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import {Row, Col, ListGroup} from 'react-bootstrap/';
import Container from 'react-bootstrap/Container'
const Restaurants = ({lat, lng}) =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

useEffect(()=>{
    console.log(lat)
    console.log(lng)
    URL =`https://discover.search.hereapi.com/v1/discover?at=`+lat+`,`+lng+`&q=restaurants&limit=10&apiKey=QuDfH3QvOIE1IVlFs0rRVjFMvdKszgs13ijYYXzrOpo`
    
    fetch(URL)
    .then(res => res.json())
    
    .then(
        (result) =>{
            setIsLoaded(true);
            setItems(result.items);
            console.log(result.items)
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
            console.log(error)
        }
    )
}, [lat, lng])
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
      <div class="container" style={{padding: 40, marginBottom: 40 }}>
      
      
   <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-start">    
  {items.map(item => (
    <div class="col">
    <Card key={item.id}  class=" border border-dark rounded" style={{backgroundColor: '#FBE0C3', marginBottom:40, width: 200,}}>
      <Card.Header as="h3" class="card-header">{item.title}</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>
          {item.address.houseNumber} {item.address.street}, {item.address.postalCode} {item.address.city}, {item.address.countryName}<br/>
          At {item.distance} meters 
          {
            item.contacts && item.contacts.map((cont)=>{
              console.log(cont)
              return(
                <div>
                {
                  cont.phone && cont.phone.map((phone) =>{
                    console.log(phone)
                    return(
                      <span>{phone.value}</span>
                    )
                  })
                }
                </div>
              )
            })
          }
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="pb-20 text-muted" style={{backgroundColor: '#FBE0C3'}}>
      <Card.Title as="h5" class="text-dark">Category</Card.Title>
        {item.categories.map(function(categories){
        return <ListGroup key={categories.id}>
           <ListGroup.Item className="rounded m-1">{categories.name}</ListGroup.Item>
        </ListGroup> 
      })}
      </Card.Footer>
    </Card>
    </div>
     ))}
     </div>
  </div>
    );
}

}

export default Restaurants;