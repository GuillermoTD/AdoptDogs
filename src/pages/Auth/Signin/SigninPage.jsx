import "./Signin.css"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase.config";
import { loginAction } from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const userLogged = useSelector((state) => state.auth);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const userCretential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCretential.user;
      console.log("user created");
      dispatch(loginAction(user));

      //Si el estado de logueado es true entonces redirigira al usuario a la pagina principal
      if (userLogged.isLogged == true) {
        console.log("redireccionando");
        Navigate("/");
      }

      console.log(userLogged.auth);
      
    } catch (error) {
      if(error.code == "auth/invalid-credential"){
        setFormError(error.code)
      }

    }
  };

  return (
    <div className="Signin">
      <div className="Signin_FormContainer">
        <h2 className="Signin_Title">Registrate</h2>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
              type="email"
              placeholder="Enter email"
            />
            {formError != null ? (
              <Form.Text className="text-danger">
                Correo o Contraseña invalida
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              onChange={(e) => {
                setUserName(e.target.value);
                console.log(password);
              }}
              type="text"
              placeholder="Nombre de usuario"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            ¿Ya tienes una cuenta? <Link to="/login">Logueate</Link>
          </Form.Group>
          <Button onClick={(e) => handleSignin(e)} variant="primary">
            Registrarme
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
