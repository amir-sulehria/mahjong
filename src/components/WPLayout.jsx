import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../Layouts/GeneralLayout"

const WPLayout = props => {
  const post = props.data.wordpressPost

  return (
    <GeneralLayout>
      <div className="row">
        <div style={{ textAlign: "center" }} className="col-md-12">
          <p>Rating: {post.ratings_average}</p>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <iframe
            src={post.iframe_url}
            width="640"
            height="480"
            frameborder="0"
          ></iframe>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
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
