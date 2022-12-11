import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'

function Feedback() {
    const Feedback = [
      {
        _id: "123",
        name: "Muskan Mishra",
        feedback:
          "From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient and therefore delivered watch this guy.",
      },
      {
        _id: "1234",
        name: "Ishika Mitra",
        feedback:
          " From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient and therefore delivered watch this guy.",
      },
      {
        name: "Shreya Agarwal",
        feedback:
          " From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient and therefore delivered watch this guy.",
      },
      {
        _id: "1235",
        name: "Jasmin Kaur",
        feedback:
          " From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient and therefore delivered watch this guy.",
      },
      {
        _id: "1236",
        name: "Ishu",
        feedback:
          " From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient and therefore delivered watch this guy.",
      },
    ];
    return (
        <Container fluid className="feedback_section mt-4">
            <Row id="feedback_section_heading">
                <h3>People’s Feedback</h3>
                <p>Enjoy People’s Feedback</p>
            </Row>
            <Row >
                <Carousel>
                    {
                        Feedback.map(feedback => (
                            <Carousel.Item key={`${feedback._id}`}>
                                <div className="feedback_card">
                                    <div>
                                        <h4>{feedback.name}</h4>
                                        <p><span><i className="fas fa-quote-left"></i></span>  {feedback.feedback}  <span><i className="fas fa-quote-right"></i></span></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Row>
        </Container>
    )
}

export default Feedback