import React,{useState} from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const [isSearch, setIsSearch] = useState(false);

  const SearchHandler = (isSearch) => {
    // const updatedIsDash = true; // Set it to true directly
    setIsSearch(isSearch);
    console.log("Handler called, isDash set to true");
    console.log({ isSearch });
    // props.onDashboardClick(updatedIsDash);
    // You can now use the isDashFromHome value in App component
    // console.log("isDashFromHome:", isDash);
    props.onSearchClick(isSearch);

  };

  return (
    <header className={classes["main-header"]}>
      <h1>ESPOIR</h1>
      <Navigation onSearchClick={SearchHandler}/>
    </header>
  );
};

export default MainHeader;
