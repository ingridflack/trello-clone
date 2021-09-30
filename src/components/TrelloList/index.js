import React from "react";
import TrelloCard from "../TrelloCard";
import { Container } from "./styles";

function TrelloList({ title }) {
  return (
    <Container>
      <h4>{title}</h4>
      <TrelloCard />
    </Container>
  );
}

export default TrelloList;
