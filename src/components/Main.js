import React, { useState ***REMOVED*** from "react";
import { Form, Button ***REMOVED*** from "react-bootstrap";
import API from "../utils/API";


const Main = () => {
  const [movies, setMovies] = useState({***REMOVED***);
  const [searchTitle, setSearchTitle] = useState("")

  function loadTitles(query) {
    API.search(query)
      .then(res => {
        console.log(res.data)
        setMovies(res.data);
    ***REMOVED***)
      .catch(err => console.log(err));
***REMOVED***

  return (
    <div>
      <Form.Group>
        <Form.Control
          type="text"
          id="movie-input"
          placeholder="Find a movie"
          onChange={(event) => setSearchTitle(event.target.value)***REMOVED***
          value={searchTitle***REMOVED*** />
        <Button
          variant="primary"
          type="submit"
          onClick={() => loadTitles(searchTitle)***REMOVED***
        >Search
            </Button>
        <br />
  
      </Form.Group>
      <ul>
        <li>{movies.Title***REMOVED***</li>
        <li>Directed by {movies.Director***REMOVED***</li>
        <li>Released in {movies.Year***REMOVED***</li>
        <li>{movies.Genre***REMOVED***</li>
        <li>Rated {movies.Rated***REMOVED***</li>
        <li>IMDb: {movies.imdbRating***REMOVED***</li>
        
        {/* {Object.keys(movies).map(key => {
          if (!Array.isArray(movies[key])) {
            return <li>{key***REMOVED***: {movies[key]***REMOVED***</li>;
        ***REMOVED***
      ***REMOVED***)***REMOVED*** */***REMOVED***
      </ul>
    </div>
  )
***REMOVED***

export default Main;
