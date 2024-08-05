import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ item }) => {
  const { name, img, options } = item;

  return (
    <Container>
      <Container
        className="rounded-3 p-3"
        style={{ backgroundColor: "peachpuff" }}
      >
        <Image src={img} width="60%"></Image>
        <h4 className="display-6">{name}</h4>
      </Container>
    </Container>
  );
};

export default Language;
