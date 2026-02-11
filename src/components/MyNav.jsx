import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Dropdown } from "react-bootstrap"
import { Search, BellFill } from "react-bootstrap-icons"

class MyNav extends Component {
  render() {
    return (
<Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>

        {/* Logo */}
        <Navbar.Brand href="./">
          <Image src="/img/netflix_logo.png" fluid style={{ maxWidth: "80px" }} />
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle aria-controls="navbarSupportedContent" className="btn-light" />

        {/* Collapsible content */}
        <Navbar.Collapse id="navbarSupportedContent">
          {/* Left menu items */}
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="./" className="text-white">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">TV Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">My List</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Right options */}
          <ul className="d-flex justify-content-center align-items-center gap-4 m-0 p-0">
            <li>
              <Search className="text-white" />
            </li>
            <li className="text-white">KIDS</li>
            <li>
              <BellFill className="text-white" />
            </li>
            <li>
              <div className="dropdown-center ms-auto">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    className="bg-transparent border-0 p-0"
                    id="profile-dropdown"
                  >
                    <Image src="https://placedog.net/50/50" fluid style={{ maxWidth: "20px" }} roundedCircle />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-end">
                    <Dropdown.Item href="./profile.html">Profile</Dropdown.Item>
                    <Dropdown.Item href="./settings.html">Settings</Dropdown.Item>
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
