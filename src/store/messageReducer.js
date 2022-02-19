const SEND_MESSAGE = "SEND_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

const defaultState = {
  messages: [],
};

export const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const sendMessageAction = (payload) => ({ type: SEND_MESSAGE, payload });
export const deleteMessageAction = (payload) => ({ type: DELETE_MESSAGE, payload });
