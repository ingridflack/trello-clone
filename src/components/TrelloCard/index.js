import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { CardItem } from "./styles";

function TrelloCard({ text, id, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardItem>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </CardItem>
        </div>
      )}
    </Draggable>
  );
}

export default TrelloCard;
