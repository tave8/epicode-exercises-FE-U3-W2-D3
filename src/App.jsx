// styles
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./assets/css/settings-page.css"
import "./assets/css/header.css"
import "./assets/css/simple-slider.css"
import "./assets/css/checkbox.css"

import {BrowserRouter, Routes, Route} from "react-router-dom"

// base components
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import TVShows from "./components/TVShows"
import MovieDetails from "./components/MovieDetails"

// pages components
import HomeMain from "./components/home/HomeMain"
import ProfileMain from "./components/profile/ProfileMain"
import SettingsMain from "./components/settings/SettingsMain"


function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
      <main>
        {/* <HomeMain /> */}
        {/* <ProfileMain /> */}
        {/* <SettingsMain /> */}

        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>

      </main>
      <footer>
        <MyFooter />
      </footer>
    </BrowserRouter>
  )
}

export default App
