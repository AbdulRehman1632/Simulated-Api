import React from "react";
import { DocsData } from "../../Utils/Constant/Data";
import "./Docs.css";
import CodeBox from "../CodeBox/CodeBox";

const Docs = () => {
  const { heading, content, para } = DocsData;
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-10">
            <div className="DocsContent">
              <h1>{heading}</h1>
              <h4>{content}</h4>
              <h4>{para}</h4>
              <div className="Others">
                <CodeBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
