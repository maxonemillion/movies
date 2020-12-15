import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = process.env.REACT_APP_MOVIES_KEY;

export default {
  search: function (query) {
    console.log(BASEURL + query + APIKEY)
    return axios.get(BASEURL + query + APIKEY);
  }
}