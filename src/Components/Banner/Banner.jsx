import React from "react";
import { bannerData } from "../../Utils/Constant/Data";
import "./Banner.css";
import CustomBtn from "../../Utils/Constant/CustomBtn/CustomBtn";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    
    <div> 
      <div  className="BannerWrapper ">
        {bannerData.map((value, index) => {
          const { heading, image, content, isrotate, Btntext, path ,trans } = value;
          console.log(value);
          return (
            <div key={index}  className="container">
              <div
                className={` row d-flex align-items-center adjust ${
                  isrotate && "rotateImg"
                }`}
              >
                <div className="col-md-6">
                  <div className="Banner-content">
                    <h1>{heading}</h1>
                    <h4>{content}</h4>
                    <div className="Btn-wrapper">
                      <NavLink to={path}>
                        {" "}
                        <CustomBtn title={Btntext} />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="Banner-Image">
                    <img src={image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
