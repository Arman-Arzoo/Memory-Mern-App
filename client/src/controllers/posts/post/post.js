import React from "react";
import { Link } from "react-router-dom";
import memory from "../../../img/memory.jpg";
export const Post = () => {
  return (
    <div className="row  ">

      <div className="card arm-card col-sm-3 mr-5 mb-4 ">
        <img className="card-img-top" src={memory} alt="Card" />
        <div className="card-body">
        <h6 className="card-title">#old #wow</h6>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
          </p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>

      



    </div>
  );
};
