import React from "react"

import GeneralLayout from "../Layouts/GeneralLayout"
import PostLayout from "../Layouts/PostLayout"

export default ({ data, pageContext, name }) => {
  console.log(data)

  return (
    <GeneralLayout>
      <br />
      <br />
      <h4>
        Category:{" "}
        <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
          {name}
        </span>
      </h4>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWordpressPost.nodes[0].categories[0].description,
        }}
      />
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
