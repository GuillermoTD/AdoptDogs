// import { useState } from "react";
// import {
//   incrementarCounter,
//   decrementarCounter,
//   resetCounter,
// } from "./redux/actions/actionsCounter";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/Login/LoginPage";
import SigninPage from "./pages/Auth/Signin/SigninPage";
import PrivateRouteLogin from "./routes/PrivateRouteLogin";
import PetPage from "./pages/Pet/PetPage";

function App() {
  // const [count, setCount] = useState(0);
  // const counter = useSelector((state) => state.counter);
  const { auth } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  console.log(auth);

  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<PrivateRouteLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/pet/:id" element={<PetPage />} />
      </Routes>
    </div>
  );
}

// App.propTypes = {
//   counter: PropTypes.number.isRequired,
//   incrementarContador: PropTypes.func.isRequired,
//   decrementarContador: PropTypes.func.isRequired,
//   resetContador: PropTypes.func.isRequired,
// };

//mapear el estado de redux a las props del componente
// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

//mapear las acciones de redux a las props del componente
// const mapDispatchToProps = {
//   incrementarContador,
//   decrementarContador,
//   resetContador,
// };

// const ConnectedCounterComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;
