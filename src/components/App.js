import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";

const GlobalStyle = createGlobalStyle` 
 * {
   margin: 0;
   box-sizing: border-box;
   padding: 0;
  }
  `;

export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

function App() {
  const lists = useSelector((state) => state.lists);

  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GlobalStyle />
      <Container>
        {lists.map((list) => (
          <TrelloList
            listID={list.id}
            key={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
        <TrelloActionButton list />
      </Container>
    </DragDropContext>
  );
}

export default App;
