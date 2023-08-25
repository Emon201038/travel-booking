import { ADD_BOOKED, DELETE_BOOKED } from "./actionTypes";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;

  switch (type) {
    case ADD_BOOKED:
      // add book
      const lastBookId = copiedState[copiedState.length - 1]?.id;
      const newBook = { ...payload, id: lastBookId ? lastBookId + 1 : 1 };
      copiedState.push(newBook);
      return copiedState;

    // delete book
    case DELETE_BOOKED:
      const updatedState = copiedState.filter(
        (item) => item.id !== action.payload
      );
      return updatedState;
    default:
      return state;
  }
};

export default bookReducer;
