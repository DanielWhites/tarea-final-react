import React, { useEffect, useState } from "react";
import { getAll } from "../api/pokeapi";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [list, setList] = useState();
  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = () => {
    getAll().then((response) => {
      setList(response);
    });
  };

  const navigate = useNavigate();

  const navigateToPokemon = async (urlid) => {
    let realUrlId = await urlid;
    const pokeId = await realUrlId.split("https://pokeapi.co/api/v2/pokemon/");
    let id = await pokeId[1].slice(0, -1);

    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="container text-center">
      <div className="row">
        {list?.map((item) => (
          <div key={item.name} className="col-lg-3 col-sm-12">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title pokeTitle">{item?.name}</h5>
                <a
                  href="#"
                  onClick={() => navigateToPokemon(item?.url)}
                  className="btn btn-primary"
                >
                  Conoce más...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
