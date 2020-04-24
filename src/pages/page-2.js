import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout column="col-6">
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          title={node.frontmatter.title}
          img={node.frontmatter.image}
          description={node.excerpt}
          readMore={node.fields.slug}
        />
      ))}
    </Layout>
  )
}

//data from here will be automatically get added in props of above component
export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
