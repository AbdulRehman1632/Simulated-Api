import React from "react";
import { thankData } from "../../Utils/Constant/Data";
import "./ThankYou.css";
import { GithubOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const ThankYou = () => {
  const { heading, content } = thankData;
  return (
    <div>
      <div className="ThankYouContent">
        <div className="heading">
          <h1 className="text-center">{heading}</h1>
        </div>
        <div className="Para">
          <h5>{content}</h5>
        </div>
        <div className="ThanksBtn text-center">
          <NavLink to="https://github.com/AbdulRehman1632/Building-API">
            {" "}
            <button>
              {" "}
              <GithubOutlined /> GitHub
            </button>
          </NavLink>
          <h5 className="letter mt-2">
            And give Simulated APi stars on GitHub!
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
