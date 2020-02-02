import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var aFile=null;
class Dashboard extends Component {
  constructor(props) {
    
    super(props);
      this.state = {
        selectedFile: null,
        loaded:0
      }
   
  }
  checkMimeType=(event)=>{
    //getting file object
    let files = event.target.files 
    //define message container
    let err = []
    // list allow mime type
   const types = ['image/png', 'image/jpeg', 'image/gif']
    // loop access array
    for(var x = 0; x<files.length; x++) {
     // compare file type find doesn't matach
         if (types.every(type => files[x].type !== type)) {
         // create error message and assign to container   
         err[x] = files[x].type+' is not a supported format\n';
       }
     };
     for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
         // discard selected file
        toast.error(err[z])
        event.target.value = null
    }
   return true;
  }
  maxSelectFile=(event)=>{
    let files = event.target.files
        if (files.length > 3) { 
           const msg = 'Only 3 images can be uploaded at a time'
           event.target.value = null
           toast.warn(msg)
           return false;
      }
    return true;
 }
 checkFileSize=(event)=>{
  let files = event.target.files
  let size = 2000000 
  let err = []; 
  for(var x = 0; x<files.length; x++) {
  if (files[x].size > size) {
   err[x] = files[x].type+'is too large, please pick a smaller file\n';
 }
};
for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
  // discard selected file
 toast.error(err[z])
 event.target.value = null
}
return true;
}
onChangeHandler=event=>{
  var myfiles = event.target.files[0]
  if(this.maxSelectFile(event) && this.checkMimeType(event) &&    this.checkFileSize(event)){ 
  // if return true allow to setState
     this.setState({
     selectedFile: myfiles,
     loaded:0
  })
  aFile=myfiles;
  console.log(myfiles)

}
}
  onClickHandler = () => {
    const data = new FormData() 
    if(this.state.selectedFile != null){
    data.append('file,',this.state.selectedFile[0])
  }
  else{
    return;
  }
    //console.log(data)
    axios.post("http://localhost:8000/upload", this.state.selectedFile[0], {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
    })
      .then(res => { // then print response status
        console.log(res.statusText)
        toast.success('Uploaded')
      })
      .catch(err => { // then print response status
        toast.error('Upload failed')
      })
    }

  render() {
    return (
      <div class="container">
	      <div class="row">
      	  <div class="offset-md-3 col-md-12">
               <div class="form-group files">
                <label>Upload Your File </label>
                <input type="file" class="form-control" multiple onChange={this.onChangeHandler}/>
              </div>  
              <div class="form-group">
              <ToastContainer />
              <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
        
              </div> 
              
              <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

	      </div>
      </div>
      </div>
    );
  }
}

export default Dashboard;// /*!

// =========================================================
// * Light Bootstrap Dashboard React - v1.3.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React, { Component } from "react";
// import ChartistGraph from "react-chartist";
// import { Grid, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
// //import ImageUpload from "components/ImageUpload.jsx";
// import axios from 'axios';
// //import {storage} from '../firebase';
// import { Card } from "components/Card/Card.jsx";
// import { StatsCard } from "components/StatsCard/StatsCard.jsx";
// import { Tasks } from "components/Tasks/Tasks.jsx";
// import {
//   dataPie,
//   legendPie,
//   dataSales,
//   optionsSales,
//   responsiveSales,
//   legendSales,
//   dataBar,
//   optionsBar,
//   responsiveBar,
//   legendBar
// } from "variables/Variables.jsx";

// class Dashboard extends Component {
//   // constructor(props){
//   //   super(props);
//   //     this.state = {
//   //       selectedFile: null
//   //     }
//   // }
//   // createLegend(json) {
//   //   var legend = [];
//   //   for (var i = 0; i < json["names"].length; i++) {
//   //     var type = "fa fa-circle text-" + json["types"][i];
//   //     legend.push(<i className={type} key={i} />);
//   //     legend.push(" ");
//   //     legend.push(json["names"][i]);
//   //   }
//   //   return legend;
//   // }
  
//   // state = { selectedFile: null }
//   // onChangeHandler = (event) => {
//   //   console.log(event.target.files[0])
//   //   this.setState({
//   //     selectedFile: event.target.files[0],
//   //     loaded: 0,
//   //   })

//   //   //this.setState({ selectedFile: event.target.files[0] })
//   //   }
  
//   // uploadHandler = () => { const formData = new FormData()
//   //   formData.append(
//   //     'myFile',
//   //     this.state.selectedFile,
//   //     this.state.selectedFile.name
//   //   )
//   //   axios.post('my-domain.com/file-upload', formData)}
 
//   //   onClickHandler = () => {
//   //     const data = new FormData() 
//   //     data.append('file', this.state.selectedFile)
//   //     axios.post("http://localhost:3000/upload", data, { // receive two parameter endpoint url ,form data 
//   //     })
//   //     .then(res => { // then print response status
//   //       console.log(res.statusText)
//   //     })
//   // }
//   constructor(props) {
//     super(props);
//       this.state = {
//         selectedFile: null,
//         loaded:0
//       }
   
//   }
//   checkMimeType=(event)=>{
//     //getting file object
//     let files = event.target.files 
//     //define message container
//     let err = []
//     // list allow mime type
//    const types = ['image/png', 'image/jpeg', 'image/gif']
//     // loop access array
//     for(var x = 0; x<files.length; x++) {
//      // compare file type find doesn't matach
//          if (types.every(type => files[x].type !== type)) {
//          // create error message and assign to container   
//          err[x] = files[x].type+' is not a supported format\n';
//        }
//      };
//      for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
//          // discard selected file
//         //toast.error(err[z])
//         event.target.value = null
//     }
//    return true;
//   }
//   maxSelectFile=(event)=>{
//     let files = event.target.files
//         if (files.length > 3) { 
//            const msg = 'Only 3 images can be uploaded at a time'
//            event.target.value = null
//            //toast.warn(msg)
//            return false;
//       }
//     return true;
//  }
//  checkFileSize=(event)=>{
//   let files = event.target.files
//   let size = 2000000 
//   let err = []; 
//   for(var x = 0; x<files.length; x++) {
//   if (files[x].size > size) {
//    err[x] = files[x].type+'is too large, please pick a smaller file\n';
//  }
// };
// for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
//   // discard selected file
//  //toast.error(err[z])
//  event.target.value = null
// }
// return true;
// }
// onChangeHandler=event=>{
//   var files = event.target.files
//   if(this.maxSelectFile(event) && this.checkMimeType(event) &&    this.checkFileSize(event)){ 
//   // if return true allow to setState
//      this.setState({
//      selectedFile: files,
//      loaded:0
//   })
// }
// }
//   onClickHandler = () => {
//     const data = new FormData() 
//     for(var x = 0; x<this.state.selectedFile.length; x++) {
//       data.append('file', this.state.selectedFile[x])
//     }
//     axios.post("http://localhost:8000/upload", data, {
//       onUploadProgress: ProgressEvent => {
//         this.setState({
//           loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
//         })
//       },
//     })
//       .then(res => { // then print response status
//         //toast.success('upload success')
//       })
//       .catch(err => { // then print response status
//         //toast.error('upload fail')
//       })
//     }
//   render() {
//     return (
//       // <div className="content">
//       //   <Grid fluid>
          
//       //     <form method="post" action="/upload" id="#">
//       //      <div class="form-group files">
//       //        <label>Upload Your File </label>
//       //        <input type="file" class="form-control" multiple="" onChange={this.onChangeHandler}></input>
//       //        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 

//       //      </div>
//       //  </form>
         
//       //   </Grid>
//       // </div>
//       <div class="container">
// 	      <div class="row">
//       	  <div class="offset-md-3 col-md-6">
//                <div class="form-group files">
//                 <label>Upload Your File </label>
//                 <input type="file" class="form-control" multiple onChange={this.onChangeHandler}/>
//               </div>  
//               <div class="form-group">
//               </div> 
//               <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

// 	      </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;
