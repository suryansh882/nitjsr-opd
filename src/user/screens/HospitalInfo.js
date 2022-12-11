import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "@firebase/firestore";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Apporitment from "./HospitalComponents/Apporitment";
import Feedback from "./HospitalComponents/Feedback";
// import SubNavigationBar from "./HospitalComponents/SubNavigation";
import { db } from "../../global/firebase/firebaseConfig";
// import TimeAgo from "timeago-react";
import dis from "../../assets/dispensary.jpg";
import DoctorList from "./DoctorChart";
function HospitalInfo() {
  // ===========Get Id From URL==========
  const { id } = useParams();

  // ===========Set Specific Hospital=========
  const [hospitalloading, sethospitalloading] = useState(true);
  const [specificHospital, setSpecificHospital] = useState();

  useEffect(() => {
    const getSpecificHospital = async (e) => {
      const updateHospital = doc(db, "Hospital", id);
      try {
        const docSnap = await getDoc(updateHospital);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSpecificHospital({ id: docSnap.id, dataHospital: data });
          sethospitalloading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getSpecificHospital();
  }, [id]);

  if (hospitalloading) {
    return (
      <Container
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Row>
          <Spinner animation="grow" variant="info" />
        </Row>
      </Container>
    );
  }
  return (
    <>
      {/* <Container>
        <Row className="mt-4">
          <SubNavigationBar
            id={specificHospital.id}
            name={specificHospital.dataHospital.name}
          />
        </Row>
      </Container> */}
      <Container className="hospital_page mt-4">
        <Row className="hospital_heading">
          <h3>
            <span>INSTITUTE HEALTH CENTRE [DISPENSARY]</span>
          </h3>
          {/* <p>Hospital <span> {specificHospital.dataHospital.name} </span> Information</p> */}
        </Row>
        <Row className="hospital_info">
          <Col xl={6}>
            <img className="hospital_image" src={dis} alt="" />
          </Col>
          <Col xl={6}>
            <br></br>

            <p>
              To cater the medical needs of the employees and students, the
              institute has round the clock medical facilities at Institute
              Health Centre as well as in the empanelled hospitals/nursing homes
              in the city. It is being monitored by a medical services
              committee.
            </p>
            <br></br>
            <p>
              The students are also provided Emergency and Inside admission
              medical facilities on cashless basis in{" "}
              <strong>Tata Main Hospital</strong>, Bistupur and OPD facility in{" "}
              <strong>Steel City Hospital</strong>, Bistupur through Medical
              Insurance. Other than this, in case of emergency, they can get
              themselves treated in any hospitals in India and the medical
              expenses incurred by them is reimbursed through insurance.
            </p>
          </Col>
        </Row>
        <Row className="hospital_synptoms doctor-list">
          <h4>
            <span> Duty Chart of Medical Officers & Staffs</span>
          </h4>
        </Row>
        <Row>
          <DoctorList />
        </Row>
        <section classId="specialities">
          <Row className="hospital_synptoms mt-5">
            <h4>
              <span> Specialities </span>
            </h4>
            <Col xl={8} className="mt-2">
              {specificHospital.dataHospital.specialities.length !== 0 ? (
                specificHospital.dataHospital.specialities.map(
                  (specialitie, index) => (
                    <p key={index}>
                      <span>
                        <i className="fas fa-hand-point-right"></i>
                      </span>{" "}
                      {specialitie}
                    </p>
                  )
                )
              ) : (
                <p
                  className="text-danger text-center"
                  style={{ fontWeight: "600" }}
                >
                  Specialities Details Coming Soon !
                </p>
              )}
            </Col>
            <Row className="hospital_synptoms mb-5">
              <Col xl={4} className="text-center mt-2">
                <Apporitment
                  id={specificHospital.id}
                  title="Book Appointment"
                  subTitle="Book Appointment"
                />
              </Col>
            </Row>
          </Row>
        </section>

        <Row className="hospital_synptoms mt-2">
          <h4>
            {/* <span>{specificHospital.dataHospital.name}</span> Hospital{" "} */}
            <span> Facilities </span>
          </h4>
          <Col xl={8} className="mt-2">
            {specificHospital.dataHospital.facilities.length !== 0 ? (
              specificHospital.dataHospital.facilities.map(
                (facility, index) => (
                  <p key={index}>
                    <span>
                      <i className="fas fa-hand-point-right"></i>
                    </span>{" "}
                    {facility}
                  </p>
                )
              )
            ) : (
              <p
                className="text-danger text-center"
                style={{ fontWeight: "600" }}
              >
                {/* Facilities Detailes Not Mentions ! */}
              </p>
            )}
          </Col>
          <Container>
            <Row>
              <h5>
                <u>TREATMENT AT EMPANNELED HOSPITALS IN CITY</u>
              </h5>
              <br></br>
              <p>
                In case of the employees and their dependents who need treatment
                from specialists, they can get treatment in any five empanelled
                hospitals, on cashless basis, namely
                <p></p>
                <ol>
                  <li>Tata Main Hospital, Jamshedpur</li>
                  <li>
                    Kantilal Gandhi Memorial Hospital, Jamshedpur Brahmananda
                  </li>
                  <li>
                    Hospital, Jamshedpur A.S.G. Eye Hospital, Jamshedpur
                    Rajasthan
                  </li>
                  <li>Sewa Sadan Hospital, Jamshedpur</li>
                </ol>
              </p>

              <br></br>
            </Row>
            <Row>
              <h5>
                <u>PATHOLOGICAL FACILITY</u>
              </h5>
              <br></br>
              <p>
                <strong>Aarogyam Pathology Laboratory, Adityapur</strong> is
                empanelled for various pathological tests on cashless basis for
                the employee and their dependents.
              </p>
            </Row>
            <Row>
              <h5>
                <u>REFERRAL CASES</u>
              </h5>
              <br></br>
              <p>
                Employees and their dependents can get referred to any higher
                centres in the country on the recommendation of the hospitals.
              </p>
            </Row>
            <Row>
              <h5>
                <u>AMBULANCE FACILITY</u>
              </h5>
              <br></br>
              <p>
                Ambulance facility is available 24*7 for emergency needs of both
                the staff and students.
              </p>
            </Row>
          </Container>
        </Row>
      </Container>
      <Container className="hospital_btns mt-3">
        <Row className="justify-content-center align-items-center">
          <Col xl={4} className="text-center mt-2">
            <Feedback id={specificHospital.id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HospitalInfo;
