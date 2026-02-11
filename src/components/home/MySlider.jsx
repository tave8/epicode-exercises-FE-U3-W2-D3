import { Component } from "react"
import SimpleSlider from "../../assets/js/SimpleSlider"
import MySlide from "./MySlide"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert } from "react-bootstrap"

class MySlider extends Component {
  static OMDP_API_KEY = "3571ac08"

  state = {
    searchQuery: this.props.search,
    films: [],
    isLoading: true,
    isError: false,
    simpleSlider: null,
  }

  async searchFilmsAndUpdateState() {
    try {
      this.updateIsLoading(true)
      this.updateIsError(false)
      const respData = await this.searchRemoteFilms()
      const films = respData.Search
      this.updateFilms(films)
      this.updateIsLoading(false)
      console.log(films)
    } catch (err) {
      console.error(err)
      this.updateIsLoading(false)
      this.updateIsError(true)
    }
  }

  async searchRemoteFilms() {
    const url = this.getApiUrlForSearch()
    const config = {}
    const resp = await fetch(url, config)
    if (!resp.ok) {
      throw Error("error while searching remote films: status: ", resp.status)
    }
    const data = await resp.json()
    return data
  }

  getApiUrlForSearch() {
    const apiKey = MySlider.OMDP_API_KEY
    const query = this.state.searchQuery
    return `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
  }

  componentDidMount() {
      this.state.simpleSlider = new SimpleSlider({
        targetSelector: `#${this.props.id}`,
        scrollBy: 400,
        givenCardsContainerHeight: 300
      })
    this.searchFilmsAndUpdateState()


    console.log(this.state.simpleSlider)
    //     if (this.state.simpleSlider) {
    //     this.state.simpleSlider.positionButtons()
    // }
  }

  //   UPDATE STATE HELPERS

  updateFilms(newFilms) {
    this.setState({ films: newFilms })
  }

  updateIsLoading(val) {
    this.setState({ isLoading: val })
  }

  updateIsError(val) {
    this.setState({ isError: val })
  }

  render() {
    return (
      <Container fluid className="mt-5">
        {/* title */}
        <Row>
          <Col>
            <h4>{this.props.title}</h4>
          </Col>
        </Row>

        {/* carousel/slider */}
        <Row className="simple-slider" id={this.props.id}>
          <div className="cards" style={{}}>
            {/* slides/carousel cards */}
            {this.state.films.map((film, i) => {
              return (
                <div key={film.imdbID + i}>
                  <MySlide film={film} />
                </div>
              )
            })}
          </div>
        </Row>

        {/* loading or error */}
        {(this.state.isLoading || this.state.isError) && (
          <Row>
            {/* spinner: loading */}
            {this.state.isLoading && (
              <div className="text-center">
                <Spinner variant="danger" animation="border" />
              </div>
            )}

            {/* alert: error */}
            {this.state.isError && (
              <Alert variant="danger">
                <Alert.Heading>Problem while loading</Alert.Heading>
              </Alert>
            )}
          </Row> 
        )}
      </Container>
    )
  }
}

export default MySlider
