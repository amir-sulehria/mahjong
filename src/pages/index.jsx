import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default () => {
  const str =
    "Welcome to Mahjong Online your number 1 source of mahjong games that you can play online. The original mahjong game was a table game invented in China almost 2000 years ago. It's a \"multiplayer\" game which can be played by 3 or 4 players using a Mahjong tiles set. A short time after personal computers were adopted mahjong games became popular. The initial versions were single player games requiring player attention falling in the solitaire category sharing some characteristic with other popular solitaire games played with cards, such as spider solitaire or even closer pyramid solitaire. We try to publish both single player mahjong games(most of them are mahjong solitaire versions but we also have some puzzle variations or other attention games) and real mahjonng online multiplayer editions. All the games published on this websites are free to play and not download is required, but you need to have adoble flash player installed in order to play them. We also try to find online versions for games like Mahjong Titans or Mahjong Quest. Don't forget to bookmark our site and to check it for daily updates."
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Content</h1>
      </div>
      <Footer description={str} />
    </div>
  )
}
