import React from "react"
import { Link } from "gatsby"

import { Nav, Navbar, Image } from "react-bootstrap"

export default function header() {
  return (
    <div className="container">
      <div
        className="page-header container"
        style={{
          marginTop: "1em",
          backgroundImage: "linear-gradient(to top, orange , blue)",
          backgroundColor: "orange",
          height: "11em",
          position: "relative",
        }}
      >
        <Image
          fluid
          src="https://static.mahjongonline.org/logo.png"
          style={{ position: "absolute", bottom: "0" }}
          alt="mahojan"
        />
      </div>
      <Navbar
        style={{ backgroundColor: "black", height: "3em" }}
        variant="dark"
      >
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/page-1">
            Classic Mahjong
          </Nav.Link>
          <Nav.Link as={Link} to="/page-2">
            Mahjong Solitaire
          </Nav.Link>
          <Nav.Link href="#pricing">Multiplayer</Nav.Link>
          <Nav.Link href="#puzzle">Puzzle</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}
