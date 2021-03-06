import { actions } from "react-redux-form";
import { CLOSE_ACTION } from "../types";

export const closeModal = () => {
    return {
        type: CLOSE_ACTION,
      }
    }