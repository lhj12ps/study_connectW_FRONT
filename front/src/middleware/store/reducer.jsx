import { initialState } from "./context";

export const COOKIE_SUCCESS = {
  type: "COOKIE/SUCCESS",
  payload: { errors: true },
};
export const COOKIE_LOADING = "COOKIE/LOADING";
export const COOKIE_ERROR = "COOKIE/ERROR";
export const ACCOUNT_SUCCESS = "ACCOUNT/SUCESS";
export const ACCOUNT_LOADING = "ACCOUNT/LOADING";
export const ACCOUNT_ERROR = "ACCOUNT/ERROR";

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("state : ", state);
  console.log("action : ", action.payload);

  switch (action.type) {
    case "COOKIE/SUCCESS":
      return { ...state };
    case "COOKIE/LOADING":
      return { ...state };
    case "COOKIE/ERROR":
      return { ...state };

    case "ACCOUNT/SUCCESS":
      return { ...state };
    case "ACCOUNT/LOADING":
      return { ...state };
    case "ACCOUNT/ERROR":
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
