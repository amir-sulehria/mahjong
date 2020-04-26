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
      <br />
      <div className="row">
        <div className="col-md-5"></div>
        <iframe
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fzebramahjong%2F&width=88&layout=button_count&action=like&size=small&share=false&height=21&appId"
          width="88"
          height="21"
          style={{
            border: "none",
            overflow: "hidden",
          }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
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
                value={parseFloat(post.ratings_average)}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "justify" }} className="col-md-12">
          <iframe
            src={post.iframe_url}
            width="640"
            height="480"
            frameborder="0"
          ></iframe>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <hr />{" "}
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
