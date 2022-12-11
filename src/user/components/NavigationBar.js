import { signOut } from "@firebase/auth";
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useProfile } from "../../global/context/Profile.Context";
import { auth } from "../../global/firebase/firebaseConfig";
import logo from "../../assets/logo.jpg";

function NavigationBar({ path }) {
  const History = useHistory();
  const BrowserPath = History.location.pathname;
  const { userProfile, setuserProfile } = useProfile();
  const LINKS = userProfile
    ? [
        { to: "/", text: "Home" },
        {
          to: "/allhospital/K5VoTDGfkcpsVquvbLgi#specialities",
          text: "Appointment",
        },
        { to: "/contact", text: "Contact" },
        { to: "/about", text: "About" },
      ]
    : [
        { to: "/", text: "Home" },
        {
          to: "/allhospital/K5VoTDGfkcpsVquvbLgi#specialities",
          text: "Appointment",
        },
        { to: "/contact", text: "Contact" },
        { to: "/about", text: "About" },
        { to: "/login", text: "LogIn" },
        { to: "/signup", text: "SignUp" },
      ];
  // =================User Logout Here===========
  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("SingOut Successfuly");
        History.push("/");
        setuserProfile("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="nav-cl">
      <Container>
        <Link className="navbar-brand " to="/">
          <img src={logo} alt="" className="h_logo"></img>{" "}
          <span>NITJSR - OPD</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            {LINKS.map((item) => (
              <Link
                key={item.text}
                className={
                  item.to === BrowserPath ? "nav-active nav-link" : "nav-link"
                }
                to={item.to}
              >
                {item.text}
              </Link>
            ))}
          </Nav>
          {userProfile ? (
            <NavDropdown title={userProfile.user.name} id="basic-nav-dropdown">
              <Link
                className={
                  `/profile` === BrowserPath
                    ? "nav-active nav-link"
                    : "nav-link"
                }
                to={`/profile`}
              >
                Profile
              </Link>
              <Link
                onClick={logout}
                className={
                  "/hospitallogout" === BrowserPath
                    ? "nav-active nav-link"
                    : "nav-link"
                }
              >
                LogOut
              </Link>
            </NavDropdown>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
