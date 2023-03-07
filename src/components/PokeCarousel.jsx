import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokeCarousel = ({ pokeSimilar }) => {
  console.log(pokeSimilar);
  return (
    <Carousel slidesToShow={2}>
      {pokeSimilar?.map((item) => (
        <Carousel.Item style={{ height: "200px" }}>
          <h4>POKEMONES SIMILARES</h4>
          <img
            
            src={`https://via.placeholder.com/800x400/000000/FFFFFF?text=${item?.pokemon?.name}`}
            alt={item?.pokemon?.name}
          />
          <Carousel.Caption>
            <h3>
              <Link to={`/pokemon/${item?.pokemon?.name}`}>
                <h5 class="card-title pokeTitle">{item?.pokemon?.name}</h5>
              </Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PokeCarousel;
