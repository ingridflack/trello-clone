import React from "react";
import { useState } from "react";
import { Icon } from "@material-ui/core";
import { Button, Container, ButtonContainer } from "./styles";
import TextareaAutosize from "react-textarea-autosize";

function TrelloActionButton({ list }) {
  const [isFormOpen, setFormIsOpen] = useState(false);
  const [textarea, setTextarea] = useState("");

  const handleShowForm = () => {
    setFormIsOpen(true);
  };

  const handleHideForm = (e) => {
    setFormIsOpen(false);
  };

  const handleTextareaChange = (e) => {
    setTextarea(e.target.value);
  };
  const renderForm = () => {
    const placeholder = list
      ? "Enter a list title..."
      : "Enter a title for this card...";

    const buttonTitle = list ? "Add List" : "Add card";

    return (
      <div>
        <Container>
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={handleHideForm}
            value={textarea}
            onChange={handleTextareaChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden",
            }}
          />
        </Container>

        <ButtonContainer>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </ButtonContainer>
      </div>
    );
  };

  const renderAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";

    return (
      <Button
        onClick={handleShowForm}
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

  return isFormOpen ? renderForm() : renderAddButton();
}

export default TrelloActionButton;
