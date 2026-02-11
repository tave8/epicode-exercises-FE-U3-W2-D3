import { Component } from "react"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Image } from "react-bootstrap"

class MySlide extends Component {
  state = {
    film: this.props.film,
  }

  // gestisci caricamento non andato a buon fine
  handleImageError(event) {
    const img = event.target
    img.remove()
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Image src={this.state.film.Poster} fluid style={{ minWidth: "200px", objectFit: "contain" }} onError={this.handleImageError} />
      </>
    )
  }
}

export default MySlide
