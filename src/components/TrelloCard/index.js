import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import { CardItem } from "./styles";

function TrelloCard({ text }) {
  return (
    <CardItem>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </CardItem>
  );
}

export default TrelloCard;
