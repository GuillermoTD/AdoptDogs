import { useDispatch, useSelector } from "react-redux";
import { readUsers, createUser } from "../redux/actions/userActions";
import { useEffect, useRef, useState } from "react";

const CRUDComponent = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const idTask = useRef(null)
  const newUser = {
    id: users.length,
    name,
    surname,
  };

  const addNewUser = (e) => {
    e.preventDefault();
    dispatch(createUser(newUser));
    console.log("Estado actualizado:", users);
  };

  const deleteUser = (e)=>{
    // users.find(item=> item.id )
    // console.log(e.currentTarget.id)
    

  }

  //Cada vez que este componente se cargue mandara a buscar todos los usuarios
  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch]);

  return (
    <div>
      <div className="CRUD">
        <h2>CRUD</h2>
        <form
          className="CRUD__Form"
          style={{ display: "flex", flexDirection: "column", width: "15rem" }}
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Write your name"
          />
          <input
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Write your surname"
          />
          <button onClick={addNewUser}>Create</button>
        </form>
      </div>
      <div className="CRUD__Input"></div>
      <table
        className="CRUD__Table"
        style={{ width: "25rem", border: "2px solid red" }}
      >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Surname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr id={index} ref={idTask} key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td style={{ display: "flex", gap: "0.5rem" }}>
                {" "}
                <button>update</button>
                <button onClick={deleteUser}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {console.log(users)}
    </div>
  );
};

export default CRUDComponent;
