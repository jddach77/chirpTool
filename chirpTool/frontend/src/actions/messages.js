export const addMessage = (text, messageType) => {
  return dispatch => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, messageType});

    return fetch("/api/messages/", {headers, method: "POST", body})
      .then(res => res.json())
      .then(message => {
        return dispatch({
          type: 'ADD_MESSAGE',
          message,
          messageType
        })
      })
  }
}

export const updateMessage = (index, text) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    let messageId = getState().messages[index].id;

    return fetch(`/api/messages/${messageId}/`, {headers, method: "PUT", body})
      .then(res => res.json())
      .then(message => {
        return dispatch({
          type: 'UPDATE_MESSAGE',
          message,
          index
        })
      })
  }
}

export const deleteMessage = index => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let messageId = getState().messages[index].id;

    return fetch(`/api/messages/${messageId}/`, {headers, method: "DELETE"})
      .then(res => {
        if (res.ok) {
          return dispatch({
            type: 'DELETE_MESSAGE',
            index
          })
        }
      })
  }
}

export const fetchMessages = () => {
  return dispatch => {

    let headers = {"Content-Type": "application/json"};

    return fetch("/api/messages/", {headers, })
      .then(res => res.json())
      .then(messages => {
        return dispatch({
          type: 'FETCH_MESSAGES',
          messages
        })
      })
  }
}
