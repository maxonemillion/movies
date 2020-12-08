***REMOVED***
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "***REMOVED***";

***REMOVED***
  search: function(query) {
    console.log(BASEURL + query + APIKEY)
    return axios.get(BASEURL + query + APIKEY);
***REMOVED***
***REMOVED***;
