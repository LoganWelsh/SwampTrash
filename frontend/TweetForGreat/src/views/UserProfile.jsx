/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";
//import zeze from "https://i.ytimg.com/vi/QAwQZ7YxTgM/maxresdefault.jpg"
class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          
            <Col md={2}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={"data:image/jpeg;base64,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"}
                name="Duncan Ross"
                userName="duncanross"
                description={
                  <span>
                    "Sometimes called 'White Mandingo'"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
</Col>
<Col md={2}>
              <UserCard
                bgImage="https://images.squarespace-cdn.com/content/v1/57336a3001dbae668182e7c3/1526674685014-M02QZMS2TPIKEUIT25DF/ke17ZwdGBToddI8pDm48kCDnvzZDSTqrZYB0qToMReZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0psyQQR5KrxgIm8QcotvsYtvUHnJsni5ivcu2RP0UO8zWN1uCXtq4fHLhtl5lYmmpQ/image-asset.jpeg?format=1500w"
                avatar={"data:image/jpeg;base64,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"}
                name="Ziyad Morsi"
                userName="BigZLittleD"
                description={
                  <span>
                    "I started Coronavirus,
                    <br />
                    no cap"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
</Col>
<Col md={2}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Logan Welsh"
                userName="LELSH"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
</Col>
<Col md={2}>
              <UserCard
                bgImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/manhattan-skyline-with-empire-state-building-royalty-free-image-960609922-1557777571.jpg?crop=0.66635xw:1xh;center,top&resize=480:*"
                avatar={"https://media-exp1.licdn.com/dms/image/C4D03AQGQUVc5SS2bOA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=DEZlGnIF6W3DixGt71ZBLxg6YXGYX59eGVnkNiGTvrc"}
                name="Eric De Rezende"
                userName="ericderezende"
                description={
                  <span>
                    "Just enough sauce can go a long way"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
              </Col>
              <Col md={2}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
              </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
