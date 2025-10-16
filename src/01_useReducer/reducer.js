import React from "react";

export const counterinitalState = { count: 0 }

export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 } 
    case "DECREMENT":
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case "RESET":
      return counterinitalState
    default:
      throw new Error("Unknown action type")
  }

  
}