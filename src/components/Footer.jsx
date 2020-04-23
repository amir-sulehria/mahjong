import React from "react"

export default function Footer({ description }) {
  return (
    <div className="container">
      <div>{description ? description : null}</div>
      <hr style={{ border: "2px solid black" }} />
    </div>
  )
}
