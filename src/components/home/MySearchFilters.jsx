import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown } from "react-bootstrap"
import { Stack, Grid } from "react-bootstrap-icons";


class MySearchFilters extends Component {
  render() {
    return (
      <section className="filters">
        <Container fluid>
          <Row>
            {/* Title + Genres */}
            <Col xs={12} md={9} className="d-flex gap-3 align-items-center">
              <span className="fs-2 fw-bold">TV Shows</span>

              <Dropdown>
                <Dropdown.Toggle variant="outline-light">Genres</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            {/* View buttons */}
            <Col xs={12} md={3} className="text-end">
              <ButtonGroup>
                <Button variant="outline-light" className="bg-transparent">
                  <Stack />
                </Button>
                <Button variant="outline-light" className="bg-transparent">
                  <Grid />
                </Button>
              </ButtonGroup>
            </Col>

          </Row>
        </Container>
      </section>
    )
  }
}

export default MySearchFilters
