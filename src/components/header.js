import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import removeLocalStorage from "../services/logout.js";
import sessionStatus from "../tools/sessionStatus.js";
import userInfo from "../tools/userInfo.js";

function Navnav() {
  const activeSession = sessionStatus();
  const { userName, userCredits } = userInfo();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            {activeSession ? null : <Nav.Link href="login">Login</Nav.Link>}
            {activeSession ? null : <Nav.Link href="register">Register</Nav.Link>}
            {activeSession ? <Nav.Link href="profile">Profile</Nav.Link> : null}
            {activeSession ? (
              <Nav.Link href="logout" onClick={removeLocalStorage}>
                Logout
              </Nav.Link>
            ) : null}
          </Nav>
          {activeSession ? <p>Welcome, {userName} </p> : null}
          {activeSession ? <p>C: {userCredits}</p> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navnav;
