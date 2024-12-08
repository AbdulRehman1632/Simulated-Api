import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./CodeBox.css";
import { LinkOutlined } from "@ant-design/icons";

const CodeBox = () => {
  const codeString = `
    const fetchData = async () => {
      try {
        const response = await fetch('https://simulated-api.vercel.app/products');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };`;

  const singledata = `
    const fetchData = async () => {
      try {
        const response = await fetch('https://simulated-api.vercel.app/products/1');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };`;

  return (
    // style={{ margin: '20px', padding: '150px', backgroundColor: '#f9f9f9' }}
    <>
      <div className="container Box">
        <div>
          <h3>
            Get All Products <LinkOutlined />
          </h3>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="container Box">
        <div>
          <h3>
            Get Single Product <LinkOutlined />
          </h3>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {singledata}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default CodeBox;
