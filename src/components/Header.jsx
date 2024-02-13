import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import defaultUserImage from "../assets/defaultUserImage.png";
import { useSelector, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import { logoutAction } from "../redux/actions/authActions"





function Header(){
  // const userImage = null;
  const handleLogout = () => {
    dispatch(logoutAction());
    Navigate("/login");
  };
  const dispatch = useDispatch()
  const state = useSelector((state) => state.auth);
  console.log(state);
  return (
    <div className="Header">
      <Navbar
        bg="dark"
        className="text-white"
        variant="dark"
        style={{ width: "100vw" }}
      >
        <Container className="text-white">
          <Navbar.Brand href="/">AdoptPuppies</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <a onClick={()=>handleLogout()} href="/login">Cerrar sesion</a>
          </Navbar.Text>
            {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
