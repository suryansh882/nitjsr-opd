import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "../../assets/logo.jpg";

function Footer() {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];
  const HELP = [
    {
      to: "/allhospital/K5VoTDGfkcpsVquvbLgi",
      text: "Book Appointment.",
    },
    // { to: "/registerHospital", text: "Join As A Hospital." },
    { to: "/about", text: "Lets Clear Your Douts." },
    { to: "/", text: "What Pepole Says ?" },
    // { to: "/about", text: "Why Important This Platform?" },
  ];
  return (
    <>
      <Container fluid className="Footer mt-5">
        <Row>
          <Col xl={4} className="Footer_Logo">
            <Link to="/">
              {" "}
              <span> NITJSR - OPD </span>
            </Link>
            <ul className="footer_social">
              <li>
                <a
                  href="https://twitter.com/jamshedpur_nit?s=08"
                  target={"_blank"}
                  rel="noopener noreferrer external"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/NITJamshedpurOfficial/"
                  target={"_blank"}
                  rel="noopener noreferrer external"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nitjamshedpur_official/"
                  target={"_blank"}
                  rel="noopener noreferrer external"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <h6>All © Copyright Reserved</h6>
          </Col>
          <Col xl={4} className="Footer_Menu">
            <p>Get To Know Us</p>
            <ul>
              {LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.text}</Link>
                </li>
              ))}
            </ul>
            <h5>Made with ❤️ by 2k20 Batch</h5>
          </Col>
          <Col xl={4} className="Footer_Help">
            <p>Let Us Help You</p>
            <ul>
              {HELP.map((item) => (
                <li key={item.text}>
                  <Link to={item.to}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        {/* <Row className="Developer">
                <Col xl={12}>
                        <p>&copy; 2021-22 ~ NITJSR - OPD, All Rights Reserved.</p>
                        <Link to="/about">Develped By ~ <span> <i className="fab fa-github"></i> </span></Link>
                </Col>
            </Row> */}
      </Container>
    </>
  );
}

export default Footer;
