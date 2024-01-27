import React, { useState } from "react";
// import { Document, Page } from 'react-pdf';
// import {Link, BrowserRouter} from 'react-router-dom'
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
// import Dashboard from '../Dashboard/Dashboard'
// import AuthContext from "../../store/auth-context";
// import { useHistory } from 'react-router-dom';

const Home = (props) => {
  // const history = useHistory();

  // const pdfFile = "./Artificial.pdf";
  // const dash=()=>{
  //   history.push("/Dashboard")
  // }
  // const ctx = useContext(AuthContext);

  const [isDash, setIsDash] = useState(false);
  const Handler = () => {
    const updatedIsDash = true; // Set it to true directly
    setIsDash(updatedIsDash);
    console.log("Handler called, isDash set to true");
    console.log({ updatedIsDash });
    props.onDashboardClick(updatedIsDash); // Send the updated value
  };
  return (
    <Card className={classes.home}>
      <h2>Name : Md Kaif Alam</h2>
      <h2>University : Meghnad Saha Institute of Technology</h2>
      <h2>Research topic : Artificial Intellegence</h2>
      <Button onClick={Handler}>Dashboard</Button>
      {/* {isDash && </Dashboard>} */}
    </Card>
  );
};

export default Home;
