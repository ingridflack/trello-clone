import React from "react";
import { Droppable } from "react-beautiful-dnd";

import TrelloActionButton from "../TrelloActionButton";
import TrelloCard from "../TrelloCard";
import { Container, Title } from "./styles";

function TrelloList({ title, cards, listID }) {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <Container {...provided.droppableProps} ref={provided.innerRef}>
          <Title>{title}</Title>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
            />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export default TrelloList;
