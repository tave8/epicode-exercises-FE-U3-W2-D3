import { useState, useEffect } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Dropdown } from "react-bootstrap"
import { Search, BellFill } from "react-bootstrap-icons"
import { useNavigate, useLocation, useParams } from "react-router-dom"

const MyNavSearchBar = (props) => {
  // se l'utente è sulla pagina TVShows, il placeholder dovrà diventare: "Cerca Serie TV..."
  const [placeholder, setPlaceholder] = useState("Cerca film")
  const location = useLocation()

  useEffect(() => {
    const isPageTvShows = location.pathname == "/tv-shows"
    if (isPageTvShows) {
      const otherPlaceholder = "Cerca Serie TV..."
      setPlaceholder(otherPlaceholder)
    }
  }, [])

  console.log(location)

  return (
    <>
      {/* <Search className="text-white" /> */}
      <input type="search" placeholder={placeholder} />
    </>
  )
}

export default MyNavSearchBar
