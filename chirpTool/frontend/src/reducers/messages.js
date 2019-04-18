const initialState = [];

export default function messages(state=initialState, action) {

  let messageList = state.slice();

  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message];

    case 'ADD_DUAL_MESSAGE':
      return [...state, action.message];

    case 'UPDATE_MESSAGE':
      let messageToUpdate = messageList[action.index]
      messageToUpdate.text = action.message.text;
      messageList.splice(action.index, 1, messageToUpdate);
      return messageList;

    case 'DELETE_MESSAGE':
      messageList.splice(action.index, 1);
      return messageList;

    case 'FETCH_MESSAGES':
      return [...state, ...action.messages];

    default:
      return state;
  }
}
