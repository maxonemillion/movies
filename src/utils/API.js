import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "";

export default {
  search: function (query) {
    console.log(BASEURL + query + APIKEY)
    return axios.get(BASEURL + query + APIKEY);
  }
}