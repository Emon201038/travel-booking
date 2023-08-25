import "./App.css";
import "./styles/styles.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <>
        <Home />
      </>
    </Provider>
  );
}

export default App;
