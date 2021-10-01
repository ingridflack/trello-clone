import styled from "styled-components";
import { Card } from "@material-ui/core";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  padding: 10px;
`;

export const Container = styled(Card)`
  overflow: visible;
  min-height: 80px;
  min-width: 272px;
  padding: 6px 8px 2px;
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;
