import axios from "axios";

export default {
    platforms: function (id) {
      console.log("PLATFORMS API", id)
        const options = {
          method: 'GET',
          url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup',
          params: {source_id: id, source: 'imdb', country: 'us'},
          headers: {
            'x-rapidapi-key': '***REMOVED***',
            'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
          }
        };
        
        return axios.request(options)
        
      }
}