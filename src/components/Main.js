import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import API2 from "../utils/API2";
import API from "../utils/API";
import "./Main.css"


const Main = () => {
  const [movies, setMovies] = useState({});
  const [searchTitle, setSearchTitle] = useState("");
  const [display, setDisplay] = useState(false);
  const [platforms, setPlatforms] = useState({});

  // useEffect(() => {
  //   if (movies.imdbID) {
  //     loadPlatforms(movies.imdbID)
  //   }
  // }, [movies]);

  function loadTitles(query) {
    API.search(query)
      .then(res => {
        console.log("24", res.data)
        API2.platforms(res.data.imdbID)
        .then(res2 => {
          console.log("28", res2.data)
          setMovies(res.data);
          setPlatforms(res2.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  // function loadPlatforms(id) {
  //   API2.platforms(id)
  //     .then(res => {
  //       console.log(res.data)
  //       setPlatforms(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }

  const handleSubmit = e => {
    e.preventDefault();
    loadTitles(searchTitle)
    // loadPlatforms(movies.imdbID)
    setDisplay(!display)
  };

  const handleKeypress = e => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  console.log("platform", platforms)
  console.log("movies", movies)

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
            // onKeyDown={(e) => handleKeypress(e) }
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


      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem', border: "none" }} className="card1">
              <img className={display ? "display" : null} id="image" src={movies.Poster} alt="poster" />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', border: "none" }} className="card">
              <Card.Body>
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
                    Watch: {platforms.collection?.id}
                    {/* {platforms.collection ? platforms.collection.locations : ""} */}
                    {/* {Object.keys(platforms.collection.locations).map(key => {
          if (!Array.isArray(platforms[key])) {
            return <li>{key}: {platforms[key]}</li>;
          }
        })} */}
                  </li>

                  <ul>
                    {/* {platforms.collection.locations} */}
                    {/* {platforms.collection.locations.map(stream => {
                      return <li>{stream.display_name}</li>
                    })} */}
                  </ul>
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
