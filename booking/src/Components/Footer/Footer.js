import React from "react";
import "./Footer.css";
import { Row, Col, Container, ListGroup, ListGroupItem } from "react-bootstrap";
// import { RiPantoneLine } from "react-icons/ri";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
function Footer() {
  const FooterLinks = [
    {
      display: "Hotel",
      url: "#",
    },
    {
      display: "Resorts",
      url: "#",
    },
    {
      display: "Bar",
      url: "#",
    },
    {
      display: "Beach",
      url: "#",
    },
    // {
    //   display: "Blog",
    //   url: "#",
    // },
  ];
  const FooterInfoLinks = [
    {
      display: "PrivacyPolicy",
      url: "#",
    },
    {
      display: "Membership",
      url: "#",
    },
    {
      display: "Purchase Guide",
      url: "#",
    },
    {
      display: "Terms of Service",
      url: "#",
    },
    {
      //   display: "PrivacyPolicy",
      //   url: "#",
    },
  ];
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <h2 className="d-flex align-items-center gap-2 icon">VisistUs</h2>
              <div className="follows mb-5">
                <span>
                  <AiOutlineFacebook className="foot_icon" />
                  Facebook
                </span>
                <br />
                <span>
                  <AiOutlineInstagram className="foot_icon" />
                  Instagram
                </span>
                <br />
              </div>
            </Col>
            <Col lg="3">
              <h4 className="fw-bold ">Explore</h4>
              <ListGroup
                className="links"
                style={{ backgroundColor: "transparent" }}
              >
                {FooterLinks.map((x) => {
                  return (
                    <ListGroupItem x={x} className="list border-0">
                      <a href={x.url}>{x.display}</a>
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </Col>

            <Col lg="3">
              <h4 className="fw-bold">Information</h4>
              <ListGroup className="links">
                {FooterInfoLinks.map((x) => {
                  return (
                    <ListGroupItem x={x} className="list border-0">
                      <a href={x.url}>{x.display}</a>
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h4 className="fw-bold">Get in Touch</h4>
              <p>Address :Andra ,India</p>
              <p>Phone :+91 7287036641</p>
              <p>Email :vamsienduri1234@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
