import { useEffect, useState } from "react";
import React from "react";
import Card from 'react-bootstrap/Card';
import {ListGroup } from 'react-bootstrap/';

const Restaurants = ({ lat, lng }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
//API Call into HERE Maps API to get the restaurants
  useEffect(() => {
    URL = `https://discover.search.hereapi.com/v1/discover?at=`+lat+`,`+lng+`&q=restaurants&limit=10&apiKey=QuDfH3QvOIE1IVlFs0rRVjFMvdKszgs13ijYYXzrOpo`
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [lat, lng])
  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {

    //display the data from the API  in differents BootStraps Cards.
    return (
      <div className="container" style={{ padding: 40, marginBottom: 40 }}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 align-items-start">
          {items.map(item => (
            <div className="col">
              <Card key={item.id} className=" border border-dark rounded" style={{ backgroundColor: '#FBE0C3', margin: 30, width: 250, }}>
                <Card.Header as="h3" className="card-header">{item.title}</Card.Header>
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      {item.address.houseNumber} {item.address.street}, {item.address.postalCode} {item.address.city}, {item.address.countryName}<br />
                      At {item.distance} meters
                      {
                        item.contacts && item.contacts.map((cont, i) => {
                          return (
                            <div key={i}>
                              {
                                cont.phone && cont.phone.map((phone, j) => {
                                  return (
                                    <span key={j}>{phone.value}</span>
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
                <Card.Footer className="pb-20 text-muted" style={{ backgroundColor: '#FBE0C3' }}>
                  <Card.Title as="h5" className="text-dark">Category</Card.Title>
                  {item.categories.map(function (categories) {
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