/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.onCreateNode = ({ node, getNode, actions }) => {
  //   console.log(node.internal.type) //it'll print our node name while building
  //now check each time if node is markdown remark type
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // console.log(createFilePath({ node, getNode, basePath: "posts" }))
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    //this will save slug in allmarkdownremark
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost {
        nodes {
          title
          slug
          excerpt
          date
          content
          id
        }
      }
    }
  `).then(res => {
    paginate({
      createPage,
      items: res.data.allWordpressPost.nodes,
      itemsPerPage: 10,
      pathPrefix: "/post",
      component: path.resolve("src/Layouts/HomeLayout.jsx"),
    })
    res.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/components/WPLayout.jsx"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
