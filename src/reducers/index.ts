import { combineReducers } from "redux";
import roomsReducer from "./roomsReducer";
import filteredRoomsReducer from "./filteredRoomsReducer";

export default combineReducers({
  roomsReducer,
  filteredRoomsReducer
});