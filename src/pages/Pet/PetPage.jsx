import "./Pet.css";
import { dogsList } from "../../mockRequests/dogs";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const PetPage = () => {
  let { id } = useParams();
  const cleanedParam = id.replace(":", "");
  const { nombre, img } = dogsList[cleanedParam];

  return (
    <div className="PetDetails">
      <Header />
      <div className="PetDetails_Wrapper">
        <div className="PetDetails_Box">
          <div className="PetDetails_Box_Image">
            <img src={img} alt="imagenPerro" />
          </div>
          <h2>Gracias por adoptar a {nombre}!</h2>
          <h5>Les deseamos una vida prospera y llena de hermosos momentos juntos</h5>
        </div>
      </div>
    </div>
  );
};

// const cleanParam = (param){

// }

export default PetPage;
