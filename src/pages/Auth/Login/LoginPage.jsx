import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase.config";
import { loginAction} from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userLogged = useSelector((state) => state.auth.isLogged);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCretential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCretential.user;
      console.log("user");
      dispatch(loginAction(user));

      //Si el estado de logueado es true entonces redirigira al usuario a la pagina principal
      if (userLogged == true) {
        Navigate("/");
      }

      console.log(userLogged);
    } catch (error) {
      if (error.code == "auth/invalid-credential") {
        setFormError(error.code);
      }
    }
  };



  return (
    <div className="Login">
      <div className="Login_FormContainer">
        <h2 className="Login_Title">Login</h2>
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
            ¿No tienes una cuenta? <Link to="/signin">Create una</Link>
          </Form.Group>
          <Button
            type="submit"
            onClick={(e) => handleLogin(e)}
            variant="primary"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
