import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown } from "react-bootstrap"
// profile components
import MyTitle from "./MyTitle"
import MySettings from "./MySettings"
import MyActions from "./MyActions"

import { Helmet } from "react-helmet"

class ProfileMain extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <Container fluid className="mt-3">
          <Row className="justify-content-center">
            <Col md={9} lg={6}>
              <MyTitle />
              <MySettings />
              <MyActions />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default ProfileMain
