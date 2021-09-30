import React from "react";
import TrelloActionButton from "../TrelloActionButton";
import TrelloCard from "../TrelloCard";
import { Container, Title } from "./styles";

function TrelloList({ title, cards }) {
  return (
    <Container>
      <Title>{title}</Title>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton card />
    </Container>
  );
}

export default TrelloList;
