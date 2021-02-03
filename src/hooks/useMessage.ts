import { useContext } from "react";
import {
  MessageStateContext,
  MessageDispatchContext,
} from "../context/MessageContext";

export const useMessageState = () => {
  const context = useContext(MessageStateContext);
  if (context === undefined) {
    throw new Error("useMessageState must be used within a MessageProvider");
  }
  return context;
};

export const useMessageDispatch = () => {
  const context = useContext(MessageDispatchContext);
  if (context === undefined) {
    throw new Error("useMessageDispatch must be used within a MessageProvider");
  }
  return context;
};
