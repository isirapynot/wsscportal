import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { NavLink, Outlet } from "react-router-dom";
import { Box, Link } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

const App = (signOut) => {
  console.log(signOut);
  return (
    <View className="App">
      <div className="HeaderSection">
        <Box>
          <Link href="/">
            <img src="https://westsideswimclub.com/wp-content/themes/wssc/images/wssc-logo-shadow.png" alt="West Side Swim Club" className="wssclogo"></img>
          </Link>
        </Box>
        <Box className="AboveNavBar">
          <p>
            <a href="https://www.westsideswimclub.com/about-us/our-location/">5533 Odana Rd.</a>, Madison, Wisc., 53719 &nbsp; &nbsp; &nbsp;  
            <Button onClick={signOut.signOut}>Sign Out</Button>
          </p>          
        </Box>
        <Box className="NavBar">
          <a href="/">Home</a>
        </Box>
        <Box className="NavBar">
          <NavLink to="/" >Account Management</NavLink>
        </Box>
      </div>
{/** 
      <header>
        <div className="site-title">
          <a href="/"><img src="https://westsideswimclub.com/wp-content/themes/wssc/images/wssc-logo-shadow.png" alt="West Side Swim Club" /></a>
          <span style={{ fontSize: "1.7rem", }}>West Side Swim Club
            <span><a href="/about-us/our-location/">5533 Odana Rd.</a>, Madison, Wisc., 53719</span>
          </span>
        </div>
        <div id="wssc-top-menus" className="wssc-is-visible wssc-horizontal wssc-display-none" aria-hidden="false">
          <div className="wssc-main-nav">            
            <nav className="wssc-nav-menu" aria-label="Main Menu">
              <ul id="wssc-main-nav">
                <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-17">
                  <a href="/">
                    Home
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="wssc-second-menus" className="wssc-is-visible wssc-horizontal wssc-display-none" aria-hidden="false">
          <div className="wssc-second-nav">            
            <nav className="wssc-nav-menu" aria-label="Secondary Menu">
              <ul id="wssc-second-nav">
                <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-17">
                  <NavLink to="/" >Account Management</NavLink>
                </li>
                <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-17">
                  <NavLink to="/notes" >Notes</NavLink>
                </li>
              </ul>              
            </nav>
          </div>
        </div>

        <p>
          <a href="/about-us/our-location/">5533 Odana Rd.</a>, Madison, Wisc., 53719 &nbsp; &nbsp; &nbsp;  
          <Button onClick={signOut.signOut}>Sign Out</Button>
        </p>
      </header>
*/}
      <div id="pageContent">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Outlet />
        </LocalizationProvider>
      </div>
    </View>
  );
};

export default withAuthenticator(App);