import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown, Form } from "react-bootstrap"

class MySettings extends Component {
  render() {
    return (
      <Row className="g-3 border-bottom mb-3 py-3">
        {/* Profile image */}
        <Col xs={12} md={3} className="text-center">
          <Image src="/img/avatar.png" fluid style={{ maxWidth: "100px" }} />
        </Col>

        {/* Options / Settings */}
        <Col xs={12} md={9}>
          <Row className="gap-3">
            {/* Profile name */}
            <Col xs={12}>
              <Form.Control type="text" value="Strive Student" disabled />
            </Col>

            {/* Language */}
            <Col xs={12}>
              <p>Language:</p>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">English</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            {/* Maturity Settings */}
            <Col xs={12}>
              <p>Maturity Settings:</p>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">All maturity ratings</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p>Show titles of all maturity settings for this profile</p>
              <Button variant="outline-light">EDIT</Button>
            </Col>

            {/* Autoplay settings */}
            <Col xs={12}>
              <Form.Check
                type="checkbox"
                id="checkboxAutoplay1"
                label="Autoplay next episode in a series on all devices."
                defaultChecked
                className="custom-checkbox-dark"
              />
              <Form.Check
                type="checkbox"
                id="checkboxAutoplay2"
                label="Autoplay previews while browsing on all devices."
                defaultChecked
                className="custom-checkbox-dark"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default MySettings
