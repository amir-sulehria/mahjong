import React from "react"

import GeneralLayout from "../Layouts/GeneralLayout"
import PostLayout from "../Layouts/PostLayout"

export default ({ data, pageContext }) => {
  console.log("hi " + pageContext)

  return (
    <GeneralLayout>
      <div className="row">
        {data.allWordpressPost.nodes.map(node => (
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
    </GeneralLayout>
  )
}
