import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import sessionStatus from "../tools/sessionStatus.js";
import userInfo from "../tools/userInfo.js";
import { useNavigate } from "react-router-dom";

function removeLocalStorage() {
  localStorage.clear();
  window.location.reload();
}

function NavButton(props) {
  const navigate = useNavigate();

  const onClick = () => {
    if (props.onClick) props.onClick();

    navigate(props.path);
  };

  return props.hide ? null : <Nav.Link onClick={onClick}>{props.label}</Nav.Link>;
}

function Navnav() {
  const activeSession = sessionStatus();
  const { userName, userCredits } = userInfo();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/listings">BiDIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavButton path="/listings" label="Listings" />
            <NavButton path="/newListing" label="New Listing" />

            <NavButton path="/login" label="Login" hide={activeSession} />
            <NavButton path="/register" label="Register" hide={activeSession} />
            <NavButton path="/profile" label="Profile" hide={!activeSession} />

            <NavButton
              path="/logout"
              label="Logout"
              hide={!activeSession}
              onClick={removeLocalStorage}
            />
          </Nav>
          {activeSession ? <p>Welcome, {userName} </p> : null}
          {activeSession ? <p>Credits, {userCredits}</p> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navnav;
