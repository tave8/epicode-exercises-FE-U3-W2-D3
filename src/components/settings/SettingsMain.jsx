import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown } from "react-bootstrap"
// settings components
import MyTitle from "./MyTitle"
import MySettings from "./MySettings"

class SettingsMain extends Component {
  render() {
    return (
      <Container fluid className="mt-3">
        <Row className="justify-content-center">
          <Col md={9}>
            <MyTitle />
            <MySettings />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SettingsMain
