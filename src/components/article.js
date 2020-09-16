import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/article.css";
import product from "../images/drawers.jpg";
import avatar from "../images/avatar-michelle.jpg";
class Articles extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container first_div">
          <div className="row second_div">
            <div className="container_img col-md-5">
              <img src={product} alt="Product" className="product" />
            </div>
            <div className="container_info col-md-6">
              <h3 className="first_paragraph">
                Shift the overall look and feel by <br />
                adding these wonderful touches to <br />
                furniture in your home
              </h3>
              <p className="second_paragraph">
                Ever been in a room and felt like somthing was missing? <br />{" "}
                Perhaps it felr slightly bare and uninviting. I've got some{" "}
                <br /> simple tips to help you make any room feel complete.
              </p>
              <div className="container_user container">
                <div className="col-md-3 avatar_user">
                  <img src={avatar} alt="file_user" />
                </div>
                <div className="info_user col-sm-5">
                  <p className="name_user">Michelle Appleton</p>
                  <p className="date">28 Jun 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
