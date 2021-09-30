import React from "react";
import TrelloCard from "../TrelloCard";
import { Container } from "./styles";

function TrelloList({ title, cards }) {
  return (
    <Container>
      <h4>{title}</h4>
      {cards.map((card) => (
        <TrelloCard text={card.text} />
      ))}
    </Container>
  );
}

export default TrelloList;
