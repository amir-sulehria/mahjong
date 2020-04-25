import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../Layouts/GeneralLayout"
import PostLayout from "../Layouts/PostLayout"
import Pagination from "../components/pagination"

export default props => {
  console.log(props)
  return (
    <GeneralLayout>
      <div className="row">
        {props.data.allWordpressPost.nodes.map(node => (
          <div className="col-md-4">
            <PostLayout
              title={node.title}
              img={`https://static.mahjongonline.org/imgs/${node.gamekey}-300x250.png`}
              description={node.content}
              readMore={node.slug}
            />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={props.pageContext.currentPage}
        totalCount={props.data.allWordpressPost.totalCount}
      />
    </GeneralLayout>
  )
}

//data from here will be automatically get added in props of above component
export const query = graphql`
  query($skip: Int! = 0) {
    allWordpressPost(limit: 9, skip: $skip) {
      totalCount
      nodes {
        title
        slug
        excerpt
        content
        date
        gamekey
      }
    }
  }
`
