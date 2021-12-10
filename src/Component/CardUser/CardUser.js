import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./carduser.css";
const CardUser = ({user : {name , username , email , address : {city , suite , street , zipcode
}}}) => {
  
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH6TfTtq91hzmeIvm_4JOdb5y1UWjTlYZdA&usqp=CAU"
        />
        <Card.Body>
          <Card.Title >{username}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Name :{name}</ListGroupItem>
          <ListGroupItem>e_mail :{email}</ListGroupItem>
          <ListGroupItem>Adress :{street} , {suite} - {city} - {zipcode}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};
export default CardUser;
