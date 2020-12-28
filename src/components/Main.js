import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import API2 from "../utils/API2";
import API from "../utils/API";
import "./Main.css"


const Main = () => {
  const [movies, setMovies] = useState({});
  const [searchTitle, setSearchTitle] = useState("");
  const [display, setDisplay] = useState(false);
  const [platforms, setPlatforms] = useState({});

  function loadTitles(query) {
    API.search(query)
      .then(res => {
        console.log(res.data)
        API2.platforms(res.data.imdbID)
        .then(res2 => {
          console.log(res2.data)
          setMovies(res.data);
          setPlatforms(res2.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  const handleSubmit = e => {
    e.preventDefault();
    loadTitles(searchTitle)
    // loadPlatforms(movies.imdbID)
    setDisplay(!display)
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };


  return (
    <div>
      <Form.Group className="form">
        <Form.Control
          autoComplete="off"
          type="text"
          id="movie-input"
          placeholder="Find a movie"
          onChange={(event) => setSearchTitle(event.target.value)}
          onKeyDown={handleKeypress}
          value={searchTitle} />
        <div className="wrapper">
          <Button className="btn"
            id="search-button"
            variant="light"
            type="submit"
            onClick={handleSubmit}
          >Search
            </Button>
        </div>
        <br />

      </Form.Group>



      {/* {Object.keys(movies).map(key => {
          if (!Array.isArray(movies[key])) {
            return <li>{key}: {movies[key]}</li>;
          }
        })}
      </li> */}

    
      <Container id="main-card-info" className={display ? "display" : null}>
        <Row>
          <Col>
            <Card style={{ width: '18rem', border: "none" }} className="card1">
              <img className={display ? "display" : null} id="image" src={movies.Poster} alt="poster" />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', border: "none" }} className="card">
              <Card.Body className="main-card">
                <br></br>
                <Card.Title className="title">{movies.Title}</Card.Title>
                <Card.Text className="list">
                  <li className={display ? "display" : null}>
                    {movies.Plot}
                    <br></br>
                    <br></br>
            Directed by {movies.Director}
                    <br></br>
            Released in {movies.Year}
                    <br></br>
                    {movies.Genre}
                    <br></br>
            Rated {movies.Rated}
                    <br></br>
            IMDb: {movies.imdbRating}
                    <br></br>
                    <br></br>
                    
            {platforms.collection?.locations.map((streams) => {
              return (
                <ul>
                  <a href={streams.url} rel="noreferrer" target="_blank">{streams.display_name}</a>
                </ul>
              )
            })}
                    
                  </li>
                  <br></br>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div >
  )
}

export default Main;
