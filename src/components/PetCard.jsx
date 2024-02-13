import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PetCard({ item, id }) {
  return (
    <>
      <Card style={{ width: "15rem", height: "21rem", textAlign: "center" }}>
        <Card.Img variant="top" src={item.img} style={{ height: "10rem" }} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>{`Genero: ${item.genero}`}</Card.Text>
          <Card.Text>{`Edad: ${item.edad}`}</Card.Text>
          <Button variant="primary">
            <Link style={{color:"white",outline:"none"}} to={`/pet/:${id}`}>Adoptar</Link>
          </Button>
        </Card.Body>
      </Card>
      {console.log(item.nombre)}
    </>
  );
}

PetCard.propTypes = {
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
  edad: PropTypes.string.isRequired,
};

export default PetCard;
