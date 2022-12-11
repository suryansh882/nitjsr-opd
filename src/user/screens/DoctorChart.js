import Table from "react-bootstrap/Table";

function DoctorList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name Of Employee</th>
          <th>Designation</th>
          <th>Duty for Monday to Friday</th>
          <th>Duty on Saturday</th>
          <th>Duty On Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dr. Abhay Kumar</td>
          <td>Medical Officer</td>
          <td>09:00 A.M - 01:00 P.M. & 03:00 P.M. - 06:00 P.M.</td>
          <td>08:00 A.M. - 02:00 P.M.</td>
          <td>Weekly Off</td>
        </tr>
        <tr>
          <td>Dr. Prabhakar Tiwary</td>
          <td>Medical Officer</td>
          <td>10:00 A.M - 02:00 P.M. & 04:00 P.M. - 07:00 P.M.</td>
          <td>Weekly Off</td>
          <td>08:00 A.M. - 02:00 P.M.</td>
        </tr>
        <tr>
          <td>Mr. K.P. Dubey</td>
          <td>Medical Assistant</td>
          <td>10:00 A.M - 02:00 P.M. & 04:00 P.M. - 07:00 P.M.</td>
          <td>08:00 A.M. - 02:00 P.M.</td>
          <td>Weekly Off</td>
        </tr>
        <tr>
          <td>Mr. Motilal Gaur</td>
          <td>MTS</td>
          <td>10:00 A.M - 02:00 P.M. & 04:00 P.M. - 07:00 P.M.</td>
          <td>Weekly Off</td>
          <td>08:00 A.M. - 02:00 P.M.</td>
        </tr>
        <tr>
          <td>Mrs. Kanchan Devi</td>
          <td>MTS</td>
          <td>09:00 A.M - 01:00 P.M. & 03:00 P.M. - 06:00 P.M.</td>
          <td>08:00 A.M. - 02:00 P.M.</td>
          <td>Weekly Off</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DoctorList;
