// styles
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./assets/css/settings-page.css"
import "./assets/css/header.css"
import "./assets/css/simple-slider.css"
import "./assets/css/checkbox.css"

// base components
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"

// pages components
import HomeMain from "./components/home/HomeMain"
import ProfileMain from "./components/profile/ProfileMain"
import SettingsMain from "./components/settings/SettingsMain"


function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <HomeMain />
        {/* <ProfileMain /> */}
        {/* <SettingsMain /> */}
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App
