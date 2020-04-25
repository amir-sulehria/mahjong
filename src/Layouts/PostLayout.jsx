import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"

export default function PostLayout(props) {
  console.log(props)
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Link
            to={props.readMore}
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        </Card.Body>
      </Card>
    </div>
  )
}
