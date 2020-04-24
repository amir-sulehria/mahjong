import React from "react"
import { Card, Button } from "react-bootstrap"
export default function Post(props) {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary" href={props.readMore}>
            Read More...
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
