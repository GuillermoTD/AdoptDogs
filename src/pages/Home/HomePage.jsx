// import Header from "../../components/Header";
import "./Home.css";
import { dogsList } from "../../mockRequests/dogs";
import PetCard from "../../components/PetCard";
// import CRUDComponent from "../../components/CRUDComponent";

// import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
// import { Container } from "react-bootstrap";


function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Home_Wrapper">
        <h2 className="Home_Title">Adopta al cachorro de tus sueños!!</h2>
        <div className="Home__CardsGrid">
          {dogsList.map((item, index) => (
            <PetCard key={index} id={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
