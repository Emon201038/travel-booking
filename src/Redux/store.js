import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookedReducer from "./Booking/reducer";

const store = createStore(bookedReducer, composeWithDevTools());

export default store;
