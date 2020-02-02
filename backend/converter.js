 var fs = require('fs');
 var axios = require('axios');

axios.defaults.headers.common['Authorization'] = "cd7ac9ddd0b31b377930f2f181db0c80c523779c";

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
  }, (err, data) => {
      if (err) throw err;
      else console.log(data);
  }
  );



//   axios.post("https://automl.googleapis.com/v1beta1/projects/766644774605/locations/us-central1/models/ICN5802549470285529088:predict", 
// {
//     "payload": {
//       "image": {
//         "imageBytes": base
//       }
//     }
//   }).then(function(res){
//       console.log(res.data);
//   });