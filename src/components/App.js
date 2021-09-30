import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

import TrelloList from "./TrelloList";

const GlobalStyle = createGlobalStyle` 
 * {
   margin: 0;
   box-sizing: border-box;
   padding: 0;
  }
  `;

export const Container = styled.div`
  display: flex;
`;

function App() {
  const lists = useSelector((state) => state.lists);

  return (
    <>
      <GlobalStyle />
      <Container>
        {lists.map((list) => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </Container>
    </>
  );
}

export default App;
