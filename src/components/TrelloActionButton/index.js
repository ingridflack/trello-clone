import React from "react";
import { Icon } from "@material-ui/core";
import { Button } from "./styles";

function TrelloActionButton({ list }) {
  const renderAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
    return (
      <Button
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </Button>
    );
  };

  return renderAddButton();
}

export default TrelloActionButton;
