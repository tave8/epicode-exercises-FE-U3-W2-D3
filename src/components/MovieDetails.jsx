import { useState, useEffect } from "react"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button } from "react-bootstrap"
import { useNavigate, useLocation, useParams } from "react-router-dom"

const OMDP_API_KEY = "3571ac08"

// REACT COMPONENT
const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null)
  const [movieComments, setMovieComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // console.log("called movie details")

  const urlParams = useParams()
  const navigate = useNavigate()
  // const movieId =

  // on mounting, get remote movie
  useEffect(() => {
    if (!urlParams) {
      // navigate("/404")
    }

    const movieId = urlParams.movieId

    setIsLoading(true)
    Promise.all([getRemoteMovieById({})(movieId), getRemoteMovieCommendsByMovieId({})(movieId)])
      .then((remoteResults) => {
        const [remoteMovie, remoteMovieComments] = remoteResults
        setMovie(remoteMovie)
        setMovieComments(remoteMovieComments)
        setIsLoading(false)
        console.log("done loading movie and comments")
      })
      .catch((err) => {
        setIsLoading(false)
        console.log("error while loading movie or comments")
      })

    // get the movie info
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">

          {/* spinner */}
          {isLoading && (
            <div className="text-center mt-3">
              <Spinner animation="grow" variant="danger" />
            </div>
          )}

          {/* movie */}
          {movie && (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Plot}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

// HELPERS

const getRemoteMovieById = (componentInfo) => {
  return async (movieId) => {
    const url = `http://www.omdbapi.com/?apikey=${OMDP_API_KEY}&i=${movieId}`
    const config = {}
    const resp = await fetch(url, config)
    const filmData = await resp.json()
    return filmData
  }
}

const getRemoteMovieCommendsByMovieId = (componentInfo) => {
  return async (movieId) => {
    const url = `https://striveschool-api.herokuapp.com/api/comments/${movieId}`
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OThjOTRkMTU0NmZiMDAwMTU5NmY0ODIiLCJpYXQiOjE3NzA4MjA4MTgsImV4cCI6MTc3MjAzMDQxOH0.rHjuPz0LcW8528PH9-j-3uLGCdYkzStag4D8Ymz6pZg`,
      },
    }
    const resp = await fetch(url, config)
    const movieComments = await resp.json()
    return movieComments
  }
}

export default MovieDetails
