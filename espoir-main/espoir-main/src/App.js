import React, { useContext, useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import Searched from "./components/Searched/Searched";
// import Dashboard from './components/Dashboard'
function App() {
  const ctx = useContext(AuthContext);
  // let con = ctx.isLoggedIn;
  const [isDashFromHome, setIsDashFromHome] = useState(false);

  // Function to receive isDash value from Home component
  const Handler = (isDash) => {
    // const updatedIsDash = true; // Set it to true directly
    setIsDashFromHome(isDash);
    console.log("Handler called, isDash set to true");
  };
  const [isSearch, setIsSearch] = useState(false);
  const searchHandle = () => {
    const updatedIsDash = true; // Set it to true directly
    setIsSearch(updatedIsDash);
    setIsDashFromHome(false);
    // props.onSearchClick(updatedIsDash);
  };
  // if(!ctx.isLoggedIn)
  // setIsDashFromHome(false)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && !isDashFromHome && (
          <Home onDashboardClick={Handler} />
        )}
        {ctx.isLoggedIn && isDashFromHome && <Dashboard />}
        {ctx.isLoggedIn && <MainHeader onSearchClick={searchHandle} />}
        {ctx.isLoggedIn && isSearch && !isDashFromHome && <Searched />}
      </main>
    </React.Fragment>
  );
}

export default App;
