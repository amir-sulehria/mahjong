import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../Layouts/GeneralLayout"

const WPLayout = props => {
  const post = props.data.wordpressPost

  return (
    <GeneralLayout>
      <div className="row">
        <div style={{ textAlign: "center" }} className="col-md-12">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
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
    }
  }
`
