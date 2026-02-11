import { useState, useEffect } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Dropdown } from "react-bootstrap"
import { Search, BellFill } from "react-bootstrap-icons"
import { useNavigate, useLocation, useParams } from "react-router-dom"

const MyNavSearchBar = (props) => {
  const firstPlaceholder = "Cerca film"
  const secondPlaceholder = "Cerca Serie TV..."

  // se l'utente è sulla pagina TVShows, il placeholder dovrà diventare: "Cerca Serie TV..."
  const [placeholder, setPlaceholder] = useState(firstPlaceholder)
  const location = useLocation()

  useEffect(() => {
    const isPageTvShows = location.pathname == "/tv-shows"
    if (isPageTvShows) {
      setPlaceholder(secondPlaceholder)
    } else {
      setPlaceholder(firstPlaceholder)
    }
  }, [location.pathname])

  console.log(location)

  return (
    <>
      {/* <Search className="text-white" /> */}
      <input type="search" placeholder={placeholder} />
    </>
  )
}

export default MyNavSearchBar
