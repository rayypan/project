import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";
import List from "./List";
const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [isSearch, setIsSearch] = useState(false);
  const searchHandle = () => {
    const updatedIsDash = true; // Set it to true directly
    setIsSearch(updatedIsDash);
    props.onSearchClick(updatedIsDash);
  };
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <div className="search">
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={inputHandler}
                fullWidth
                label="Search"
              />
              <List input={inputText} />
            </div>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={searchHandle}>Search</button>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button>Collaborate</button>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
