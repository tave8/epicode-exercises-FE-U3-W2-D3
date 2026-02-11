import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown } from "react-bootstrap"

class MyActions extends Component {
  render() {
    return (
      <Row className="mb-3">
        <Col className="d-flex justify-content-center gap-3 text-center">
          <Button variant="outline-light">SAVE</Button>
          <Button variant="outline-light">CANCEL</Button>
          <Button variant="outline-light">DELETE PROFILE</Button>
        </Col>
      </Row>
    )
  }
}

export default MyActions
