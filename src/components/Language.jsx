import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ item }) => {
  const [front, setFront] = useState(true);
  const { name, img, options } = item;

  return (
    // <Container role="button" className="h-100 ">
    <Container
      className="rounded-3 p-3 h-100 lang-card"
      style={{ backgroundColor: "peachpuff" }}
      onClick={() => setFront(!front)}
      role="button"
    >
      {front ? (
        <>
          <Image src={img} width="60%" className="img-card"></Image>
          <h4 className="display-6">{name}</h4>
        </>
      ) : (
        <>
          <ul className="h-100 d-flex flex-column justify-content-center">
            {options.map((option, index) => {
              return (
                <li className="h5 text-start " key={index}>
                  {option}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Container>
    // </Container>
  );
};

export default Language;
