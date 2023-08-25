import { ADD_BOOKED, DELETE_BOOKED } from "./actionTypes";

export const addBooked = (formData) => {
  return {
    type: ADD_BOOKED,
    payload: formData,
  };
};

export const removeBook = (id) => {
  return {
    type: DELETE_BOOKED,
    payload: id,
  };
};
