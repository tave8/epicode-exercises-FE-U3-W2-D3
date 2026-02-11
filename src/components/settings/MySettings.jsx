import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown } from "react-bootstrap"

class MySettings extends Component {
  render() {
    return (
      <>
        {/* START BILLING */}
        <Row className="border-bottom py-3">
          {/* Title + Cancel Button */}
          <Col xs={12} md={3}>
            <p className="setting-name">Membership & Billing</p>
            <Button variant="secondary">Cancel Membership</Button>
          </Col>

          {/* Content / Settings */}
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                {/* Group 1: email, password, phone */}
                <Row className="justify-content-between">
                  <Col xs={6}>student@strive</Col>
                  <Col xs={6} className="text-end">
                    change email
                  </Col>
                </Row>

                <Row className="justify-content-between">
                  <Col xs={6}>password:</Col>
                  <Col xs={6} className="text-end">
                    change password
                  </Col>
                </Row>

                <Row className="justify-content-between border-bottom">
                  <Col xs={6}>phone: 3343423432</Col>
                  <Col xs={6} className="text-end">
                    change phone number
                  </Col>
                </Row>

                {/* Group 2: payment */}
                <Row className="justify-content-between mt-2">
                  <Col xs={6}>paypal admin@strive</Col>
                  <Col xs={6} className="text-end">
                    update payment info
                  </Col>
                </Row>

                <Row className="border-bottom mt-2">
                  <Col xs={12} className="text-end">
                    billing details
                  </Col>
                </Row>

                {/* Group 3: gift cards */}
                <Row className="mt-2">
                  <Col xs={12} className="text-end">
                    redeem gift card
                  </Col>
                  <Col xs={12} className="text-end">
                    where to buy gift cards
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* END BILLING */}

        {/* START PLAN DETAILS */}
        <Row className="border-bottom py-3">
          {/* Title */}
          <Col xs={12} md={3}>
            <p className="setting-name">Plan Details</p>
          </Col>

          {/* Content */}
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                <Row className="justify-content-between">
                  <Col xs={6}>premium ultra hd</Col>
                  <Col xs={6} className="text-end">
                    change plan
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* END PLAN DETAILS */}

        {/* START SETTINGS */}
        <Row className="border-bottom py-3">
          {/* Title */}
          <Col xs={12} md={3}>
            <p className="setting-name">Settings</p>
          </Col>

          {/* Content */}
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={12}>parent controls</Col>
                </Row>
                <Row>
                  <Col xs={12}>test participation</Col>
                </Row>
                <Row>
                  <Col xs={12}>manage download devices</Col>
                </Row>
                <Row>
                  <Col xs={12}>activate a device</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* END SETTINGS */}

        {/* START MY PROFILE */}
        <Row className="py-3">
          {/* Title */}
          <Col xs={12} md={3}>
            <p className="setting-name">My Profile</p>
          </Col>

          {/* Content */}
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                {/* Top row: profile name and manage */}
                <Row className="justify-content-between">
                  <Col xs={6}>strive student</Col>
                  <Col xs={6} className="text-end">
                    manage profiles
                  </Col>
                </Row>

                {/* Add profile email */}
                <Row>
                  <Col xs={12} className="text-end">
                    add profile email
                  </Col>
                </Row>

                {/* Details row */}
                <Row className="mt-2">
                  <Col xs={12} md={4}>
                    <p>language</p>
                    <p>playback settings</p>
                    <p>subtle appearance</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p>viewing activity</p>
                    <p>ratings</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* END MY PROFILE */}
      </>
    )
  }
}

export default MySettings
