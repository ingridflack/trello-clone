import React from "react";
import TrelloActionButton from "../TrelloActionButton";
import TrelloCard from "../TrelloCard";
import { Container, Title } from "./styles";

function TrelloList({ title, cards, listID }) {
  return (
    <Container>
      <Title>{title}</Title>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton listID={listID} />
    </Container>
  );
}

export default TrelloList;
