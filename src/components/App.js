import { Provider } from "react-redux";
import store from "../store/index";
import TrelloList from "./TrelloList";

function App() {
  return (
    <Provider store={store}>
      <TrelloList title="Test" />
    </Provider>
  );
}

export default App;
