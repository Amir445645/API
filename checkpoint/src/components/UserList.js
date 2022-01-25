import { Card, ListGroup } from "react-bootstrap";
import React from "react";

export default function UserList({ data }) {
  return (
    <div className="UserList">
      <Card>
        <ListGroup>
          {data.map((el) => (
            <div className="User" key={el.id}>
              <ListGroup.Item>ID: {el.id} </ListGroup.Item>
              <ListGroup.Item>Name: {el.name}</ListGroup.Item>
              <ListGroup.Item> Username: {el.username}</ListGroup.Item>
              <ListGroup.Item> Email: {el.email}</ListGroup.Item>
              <ListGroup.Item> Phone: {el.phone}</ListGroup.Item>
              <ListGroup.Item>Website: {el.website}</ListGroup.Item>
            </div>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}
