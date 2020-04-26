import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import StarRatingComponent from "react-star-rating-component"

export default function PostLayout(props) {
  console.log(props)
  return (
    <div className="p-3">
      <Card>
        <div>
          <Link to={props.readMore}>
            <Card.Img
              style={{ opacity: "0.9" }}
              variant="top"
              src={props.img}
            />
          </Link>
          <span
            style={{
              position: "absolute",
              top: "8px",
              right: "16px",
            }}
          >
            <StarRatingComponent
              name="rate1"
              starColor="#FFCE00"
              starCount={5}
              emptyStarColor="#686C80"
              value={parseFloat(props.stars)}
            />
          </span>
        </div>
        {/* <Card.Body> */}
        <Link
          to={props.readMore}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        {/* </Card.Body> */}
      </Card>
    </div>
  )
}
