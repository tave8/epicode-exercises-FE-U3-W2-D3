import { Component } from "react"
// home components
import MySlider from "./MySlider"
import MySearchFilters from "./MySearchFilters"
import MyAIFilmSuggestion from "./MyAIFilmSuggestion"

import { Helmet } from "react-helmet"


const filmInfos = [
  {
    title: "Trending Now",
    search: "Game of Thrones",
    sliderId: "simple-slider1",
  },
  {
    title: "Watch It Again",
    search: "The Witcher",
    sliderId: "simple-slider2",
  },
  {
    title: "New Releases",
    search: "Hunger Games",
    sliderId: "simple-slider3",
  },
]

class HomeMain extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <MySearchFilters />
        <MyAIFilmSuggestion filmInfos={filmInfos} />
        {/* sliders */}
        {filmInfos.map((filmInfo, i) => {
          return <MySlider key={i} title={filmInfo.title} search={filmInfo.search} id={filmInfo.sliderId} />
        })}
      </>
    )
  }
}

export default HomeMain
