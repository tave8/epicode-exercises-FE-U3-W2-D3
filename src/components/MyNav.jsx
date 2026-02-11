import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Dropdown } from "react-bootstrap"
import { Search, BellFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

import MyNavSearchBar from "./MyNavSearchBar"

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          {/* Logo */}
          <Link to="/">
            <Image src="/img/netflix_logo.png" fluid style={{ maxWidth: "80px" }} />
          
          </Link>
          {/* <Navbar.Brand href="./">
          </Navbar.Brand> */}

          {/* Hamburger */}
          <Navbar.Toggle aria-controls="navbarSupportedContent" className="btn-light" />

          {/* Collapsible content */}
          <Navbar.Collapse id="navbarSupportedContent">
            {/* Left menu items */}
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Nav.Link href="./" className="text-white">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Link to="/tv-shows" className="nav-link text-white">
                TV Shows
              </Link>

              <Nav.Item>
                <Nav.Link href="#" className="text-white">
                  Movies
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white">
                  Recently Added
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white">
                  My List
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Right options */}
            <ul className="d-flex justify-content-center align-items-center gap-4 m-0 p-0">
              <li>
                <MyNavSearchBar />
              </li>
              <li className="text-white">KIDS</li>
              <li>
                <BellFill className="text-white" />
              </li>
              <li>
                <div className="dropdown-center ms-auto">
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" className="bg-transparent border-0 p-0" id="profile-dropdown">
                      <Image src="https://placedog.net/50/50" fluid style={{ maxWidth: "20px" }} roundedCircle />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      {/* profile */}
                      {/* <Dropdown.Item> */}
                        <Link to="/profile">Profile</Link>
                      {/* </Dropdown.Item> */}
                      {/* settings */}
                      {/* <Dropdown.Item> */}
                        <Link to="/settings">Settings</Link>
                      {/* </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNav
