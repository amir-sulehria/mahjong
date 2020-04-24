import React from "react"
import { Card, Button } from "react-bootstrap"
export default function WordpressPosts(props) {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: props.description }} />
          <Button variant="primary" href={props.readMore}>
            Read More...
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
