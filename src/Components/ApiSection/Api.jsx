import React from "react";
import { Apidata, Apis } from "../../Utils/Constant/Data";
import "./Api.css";
import { ArrowRightOutlined } from '@ant-design/icons';

const Api = () => {
  const { heading, content } = Apidata;
  return (
    <div >
      <div className="ApiContent ">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <h1>{heading}</h1>
              <h4>{content}</h4>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row ">
          {Apis.map((value, index) => {
            const { image, para, path } = value;
            return (
              <div key={index} className="col-md-6 mt-3">
                <div  className="ApiWrappper">
                  <div className="ApiImage">
                    <img src={image} alt="" />
                  </div>
                  <div className="content">
                    <p>{para}</p>
                    <a href={path}> {path}</a>
                  </div>
                  <div className="arrow">
                  <ArrowRightOutlined />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default Api;
