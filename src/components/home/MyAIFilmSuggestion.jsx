import { Component } from "react"
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Button, ButtonGroup, Dropdown, Spinner } from "react-bootstrap"
import { Stars } from "react-bootstrap-icons"
import OpenAI from "../../assets/js/OpenAI"

class MyAIFilmSuggestion extends Component {
  state = {
    isLoading: true,
    filmInfos: this.props.filmInfos,
    AIFilmSuggestion: "",
  }

  componentDidMount() {
    this.getAIFilmSuggestionAndUpdateState()
  }

  // example output:
  // game of thrones, the witcher, hunger games
  getFilmSearchAsStr() {
    return this.state.filmInfos
      .map((filmInfo) => {
        return filmInfo.search
      })
      .join(", ")
  }

  getAIFilmSuggestionAndUpdateState = async () => {
    const filmSearchAsStr = this.getFilmSearchAsStr()
    // return

    const prompt =
      `I give you searches for films.` +
      `Your task is to guess the film preferences for this person.` +
      `Max 200 characters. Be concise and professional. ` +
      `Use second person singular.` +
      `Title:` +
      `"""` +
      `${filmSearchAsStr}` +
      `"""` +
      `Now end with a question and 3 suggestions for films.`

    try {
      this.updateIsLoading(true)
      const openai = new OpenAI({ simplify: true })
      const data = await openai.ask(prompt)
      const aiFilmSuggestion = data.message
      this.updateAIFilmSuggestion(aiFilmSuggestion)
      this.updateIsLoading(false)
    } catch (err) {
      console.error(err)
      this.updateIsLoading(false)
    }
  }

  updateAIFilmSuggestion(val) {
    this.setState({ AIFilmSuggestion: val })
  }

  updateIsLoading(val) {
    this.setState({ isLoading: val })
  }

  getComponent() {
    return (
      <>
        {/* AI icon */}
        {!this.state.isLoading && <Stars />}
        {/* film suggestion */}
        {this.state.AIFilmSuggestion}
      </>
    )
  }

  render() {
    return (
      <>
        <Container fluid className="">
          <Row className="justify-content-center">
            <Col md={4} className="text-center">
              {/* film suggestion || spinner */}
              <p>{this.getComponent()}</p>

              {/* spinner */}
              {this.state.isLoading && (
                <div className="text-center mt-3">
                   <Spinner animation="grow" variant="danger" />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default MyAIFilmSuggestion
