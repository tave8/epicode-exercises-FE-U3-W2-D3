import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button } from "react-bootstrap"
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

class MyFooter extends Component {
  render() {
    return (
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={9} lg={6}>
            <Row className="gap-3">
              {/* Social icons */}
              <Col xs={12} className="fs-4 d-flex gap-3">
                <span>
                  <Facebook />
                </span>
                <span>
                  <Instagram />
                </span>
                <span>
                  <Twitter /> 
                </span>
                <span>
                  <Youtube />
                </span>
              </Col>

              {/* Links */}
              <Col xs={12}>
                <Row className="g-2 links">
                  <Col xs={6} md={3}>
                    <p>Audio and Subtitles</p>
                    <p>Media Center</p>
                    <p>Privacy</p>
                    <p>Contact Us</p>
                  </Col>

                  <Col xs={6} md={3}>
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                  </Col>

                  <Col xs={6} md={3}>
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                  </Col>

                  <Col xs={6} md={3}>
                    <p>Gift Cards</p>
                    <p>Terms of Use</p>
                    <p>Corporate Information</p>
                  </Col>
                </Row>
              </Col>

              {/* Copyright */}
              <Col xs={12}>
                <Button variant="outline-light">Service Code</Button>
                <p className="mt-2">1997-2019 Netflix, Inc.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MyFooter
