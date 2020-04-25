import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import StarRatingComponent from "react-star-rating-component"

export default function PostLayout(props) {
  console.log(props)
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Text>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={props.stars}
            />
          </Card.Text>
          <Link
            to={props.readMore}
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        </Card.Body>
      </Card>
    </div>
  )
}
