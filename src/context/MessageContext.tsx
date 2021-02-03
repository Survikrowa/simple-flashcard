import { createContext, useReducer } from "react";

type Action =
  | { type: "addMessage"; payload: string }
  | { type: "deleteMessage" };
type Dispatch = (action: Action) => void;
type State = { message: string | undefined };
type MessageProviderProps = {
  children: React.ReactNode;
};

export const MessageStateContext = createContext<State | undefined>(undefined);
export const MessageDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

const messageReducer = (_state: State, action: Action) => {
  switch (action.type) {
    case "addMessage": {
      return { message: action.payload };
    }
    case "deleteMessage": {
      return { message: undefined };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
};

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [state, dispatch] = useReducer(messageReducer, { message: undefined });
  return (
    <MessageStateContext.Provider value={state}>
      <MessageDispatchContext.Provider value={dispatch}>
        {children}
      </MessageDispatchContext.Provider>
    </MessageStateContext.Provider>
  );
};
