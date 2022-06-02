import { combineReducers } from "redux";

import CharacterListReducers from "./CharacterListReducers";
import CharacterReducer from "./CharacterReducer";

import ContinentsReducer from "./ContinentsReducer";

export default combineReducers({
    characterList: CharacterListReducers,
    character: CharacterReducer,
    continents: ContinentsReducer
})