import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const ShelterList = (props) => {
  return(
    <div>
      {props.locations.map((location, i) => (
        <Link to="/show" >
          <Card>
            <Card.Body>
              <Card.Title>
                <h6 className="name" >{location.name}</h6>
                <h6 className="h6" >{location.distance}</h6>
                <h6 className="beds" >{location.beds}</h6>
              </Card.Title>
              <Card.Text style={{color: '#030987'} }>
                {location.address}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ShelterList;