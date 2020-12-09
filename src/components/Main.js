import React, { useState ***REMOVED*** from "react";
import { Form, Button, Card, Container, Row, Col, InputGroup, FormControl ***REMOVED*** from "react-bootstrap";
import API from "../utils/API";
import "./Main.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
  const [movies, setMovies] = useState({***REMOVED***);
  const [searchTitle, setSearchTitle] = useState("");
  const [display, setDisplay] = useState(false);

  function loadTitles(query) {
    API.search(query)
      .then(res => {
        console.log(res.data)
        setMovies(res.data);
    ***REMOVED***)
      .catch(err => console.log(err));
***REMOVED***

  const handleSubmit = e => {
    e.preventDefault();
    loadTitles(searchTitle)
    setDisplay(!display)

***REMOVED***;

  const handleKeypress = e => {
    if (e.code === 13) {
      handleSubmit();
  ***REMOVED***
***REMOVED***;

  return (
    <div>
      <Form.Group className="form">
        <Form.Control

          type="text"
          id="movie-input"
          placeholder="Find a movie"
          onChange={(event) => setSearchTitle(event.target.value)***REMOVED***
          onKeyPress={handleKeypress***REMOVED***
          value={searchTitle***REMOVED*** />
          <div className="wrapper">
        <Button className="btn"
          id="search-button"
          variant="light"
          type="submit"
          // onClick={() => loadTitles(searchTitle)***REMOVED***
          onClick={handleSubmit***REMOVED***


        >Search
            </Button>
          </div>
        <br />

      </Form.Group>

      {/* {Object.keys(movies).map(key => {
          if (!Array.isArray(movies[key])) {
            return <li>{key***REMOVED***: {movies[key]***REMOVED***</li>;
        ***REMOVED***
      ***REMOVED***)***REMOVED*** */***REMOVED***


      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem', border: "none" ***REMOVED******REMOVED*** className="card1 ">
              <img className={display ? "display" : null***REMOVED*** id="image" src={movies.Poster***REMOVED*** />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', border: "none" ***REMOVED******REMOVED*** className="card">
              <Card.Body>
                <br></br>
                <Card.Title className="title">{movies.Title***REMOVED***</Card.Title>
                <Card.Text className="list">
                  <li className={display ? "display" : null***REMOVED***>
                    {movies.Plot***REMOVED***
                    <br></br>
                    <br></br>
            Directed by {movies.Director***REMOVED***
                    <br></br>
            Released in {movies.Year***REMOVED***
                    <br></br>
                    {movies.Genre***REMOVED***
                    <br></br>
            Rated {movies.Rated***REMOVED***
                    <br></br>
            IMDb: {movies.imdbRating***REMOVED***
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
***REMOVED***

export default Main;
