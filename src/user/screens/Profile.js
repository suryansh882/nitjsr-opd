import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Container, Row, Col, Table, Button, Spinner } from "react-bootstrap";
import { useProfile } from "../../global/context/Profile.Context";
import { db } from "../../global/firebase/firebaseConfig";
// import { Link } from "react-router-dom";

function Profile() {
  const { userProfile } = useProfile();
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);
  const [appointmentloading, setAppointmentLoading] = useState(false);

  useEffect(() => {
    const getAppointment = async () => {
      try {
        setAppointmentLoading(true);
        const q = query(
          collection(db, "Appointments"),
          where("email", "==", `${userProfile.user.email}`)
        );
        const querySnapshot = await getDocs(q);
        setAppointments(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
        setAppointmentLoading(false);
      } catch (e) {
        console.log(e.message);
        setAppointmentLoading(false);
      }
      setAppointmentLoading(false);
    };
    getAppointment();
  }, [userProfile.user.email]);
  if (appointmentloading) {
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
    <Container className="profile_page mt-4">
      <Row className="profile_heding">
        <h3>Your Profile</h3>
      </Row>
      <Row className="profile mt-2">
        <Col xl="6">
          <ul>
            <li>
              User Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              <span>{userProfile.user.u_id}</span>
            </li>
            <li>
              Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              <span>{userProfile.user.name}</span>
            </li>
            <li>
              Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              <span>{userProfile.user.email}</span>
            </li>

            <li>
              Address &nbsp;: <span>{userProfile.user.address}</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="appointment_profile mt-4">
        <h3>
          <span>Your Appointment Here</span>
        </h3>
        <p>Your Appointment Details Available Below</p>
        <Col xl={12} className="mt-2">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length !== 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <th>{appointment.id}</th>
                    <td>{appointment.data.date}</td>
                    <td>{appointment.data.time}</td>

                    <td
                      style={{ fontWeight: "bold" }}
                      className={
                        appointment.data.status === "Approve"
                          ? "text-success"
                          : "text-primary"
                      }
                    >
                      {appointment.data.status}
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        disabled={appointment.data.status === "Approve"}
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr style={{ fontWeight: "bold" }} className="text-danger">
                  No Appointment Found !
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
