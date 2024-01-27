import React, { useContext } from "react";
// import { Document, Page } from 'react-pdf';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
// import classes from './Home.module.css';
import AuthContext from "../../store/auth-context";
// import {useHistory} from "react-router-dom"
import logo from "./P1.jpg";
import logos from "./P2.jpg";
const Dashboard = (props) => {
  const authCtx = useContext(AuthContext);
  // const pdfFile = "./Artificial.pdf";

  return (
    <Card>
      <h2>Here is Your Work</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "200px", height: "200px", marginBottom: "10px" }}
        />
        <img
          src={logos}
          alt="Logo"
          style={{ width: "200px", height: "200px", marginBottom: "10px" }}
        />
      </div>

      <Button>Add</Button>
      <Button onClick={authCtx.onLogout}>Logout</Button>

      {/* <Document file={pdfFile}>
        <Page pageNumber={13} />
      </Document> */}
    </Card>
  );
};

export default Dashboard;
