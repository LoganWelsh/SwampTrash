 var fs = require('fs');
 var axios = require('axios');

axios.defaults.headers.common['Authorization'] = "Bearer ya29.Ima8B-G7oRkXINMvuMnLvLT4bV9FclYGa5kr27U5VDqQGYdgaVJ93CNqrCJSyFLIJwGUoMFLgF41yUm1loL4pQVf5BA-DkfzMp_K46HEJOFj8m2aCa9xL19CIw6Bylpi7-jMaJ9ITrk";

// function to encode file data to base64 encoded string
const base64_encode = (file) =>{
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

var base = base64_encode('./images/20200201_175136.jpg');

  axios.post("https://automl.googleapis.com/v1beta1/projects/766644774605/locations/us-central1/models/ICN5802549470285529088:predict", 
{
    "payload": {
      "image": {
        "imageBytes": base
      }
    }
  }).then(function(res){
      console.log(res.data);
  });