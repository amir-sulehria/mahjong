import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../Layouts/GeneralLayout"
import PostLayout from "../Layouts/PostLayout"
import Pagination from "../components/pagination"

export default props => {
  console.log(props)
  const description =
    "Welcome to Mahjong Online your number 1 source of mahjong games that you can play online. The original mahjong game was a table game invented in China almost 2000 years ago. It's a \"multiplayer\" game which can be played by 3 or 4 players using a Mahjong tiles set. A short time after personal computers were adopted mahjong games became popular. The initial versions were single player games requiring player attention falling in the solitaire category sharing some characteristic with other popular solitaire games played with cards, such as spider solitaire or even closer pyramid solitaire. We try to publish both single player mahjong games(most of them are mahjong solitaire versions but we also have some puzzle variations or other attention games) and real mahjonng online multiplayer editions. All the games published on this websites are free to play and not download is required, but you need to have adoble flash player installed in order to play them. We also try to find online versions for games like Mahjong Titans or Mahjong Quest. Don't forget to bookmark our site and to check it for daily updates."
  return (
    <GeneralLayout desc={{ description }}>
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
        {props.data.allWordpressPost.nodes.map(node => (
          <div className="col-md-4">
            <PostLayout
              title={node.title}
              img={`https://static.mahjongonline.org/imgs/${node.gamekey}-300x250.png`}
              description={node.content}
              readMore={node.slug}
              stars={node.ratings_average}
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
    allWordpressPost(limit: 30, skip: $skip) {
      totalCount
      nodes {
        title
        slug
        excerpt
        content
        ratings_average
        date
        gamekey
      }
    }
  }
`
