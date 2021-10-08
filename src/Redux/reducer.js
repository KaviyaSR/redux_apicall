import * as types from "./actionType";

const initialState = {
  breeddog: [],
};

const breedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ENTER_DOGBREED":
      return { ...state, breeddog: payload };

    default:
      return state;
  }
};

export default breedReducer;
