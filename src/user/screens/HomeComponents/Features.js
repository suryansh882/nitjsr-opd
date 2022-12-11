import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Features() {
  const SERVICES = [
    {
      text: "Arthritis: Easy lifestyle changes to prevent joint pain during winters - Hindustan Times",
      info: "https://www.hindustantimes.com/lifestyle/health/arthritis-easy-lifestyle-changes-to-prevent-joint-pain-during-winters-101669298695460.html",
    },
    {
      text: "UK study suggests single dose of monkeypox vaccine is 78% effective - Freethink",
      info: "https://www.freethink.com/health/monkeypox-vaccine-efficacy",
    },
    {
      text: "One in eight older adults developed depression for the first time : ETHealthWorld",
      info: "https://health.economictimes.indiatimes.com/news/diagnostics/one-in-eight-older-adults-developed-depression-for-the-first-time-study/95744495",
    },
  ];
  return (
    <Container className="Services mt-4">
      <Row id="services_heading">
        <h3>Health News</h3>
        <p>Latest Health Study</p>
      </Row>
      <Row className="services_section">
        {SERVICES.map((service) => (
          <Col xl={4} key={service.text} className="mt-3">
            <div className="service_card">
              {/* {service.icon} */}
              <h5>{service.text}</h5>
              <a
                href={service.info}
                target={"_blank"}
                alt=""
                rel="noopener noreferrer external"
              >
                Read More{" "}
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Features;
