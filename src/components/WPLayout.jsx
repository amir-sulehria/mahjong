import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../Layouts/GeneralLayout"
import ContactForm from "./ContactForm"
import StarRatingComponent from "react-star-rating-component"

const WPLayout = props => {
  const post = props.data.wordpressPost

  return (
    <GeneralLayout>
      <br />
      <div className="row">
        <div style={{ textAlign: "center" }} className="col-md-12">
          <div>
            <h4
              style={{ float: "left" }}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div style={{ float: "right" }}>
              Rating
              <br />{" "}
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={post.ratings_average}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }} className="col-md-12">
          <iframe
            src={post.iframe_url}
            width="640"
            height="480"
            frameborder="0"
          ></iframe>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <ContactForm />
    </GeneralLayout>
  )
}

export default WPLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      ratings_average
      iframe_url
    }
  }
`
