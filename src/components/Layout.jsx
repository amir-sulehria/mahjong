import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
