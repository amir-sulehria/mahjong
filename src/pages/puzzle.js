import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../Layouts/HomeLayout"

export default ({ data }) => {
  console.log(data)

  return <HomeLayout name="Puzzle" data={data} />
}

//data from here will be automatically get added in props of above component
export const query = graphql`
  {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Puzzle" } } } }
    ) {
      nodes {
        title
        slug
        excerpt
        content
        ratings_average
        date
        gamekey
        categories {
          name
          description
        }
      }
    }
  }
`
