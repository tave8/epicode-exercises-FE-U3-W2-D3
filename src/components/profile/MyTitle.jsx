import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown } from "react-bootstrap"

class MyTitle extends Component {
  render() {
    return (
      <Row className="border-bottom mb-3">
        <Col>
          <h2>Edit Profile</h2>
        </Col>
      </Row>
    )
  }
}

export default MyTitle
