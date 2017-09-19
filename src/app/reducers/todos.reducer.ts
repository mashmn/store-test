import * as actions from '../actions/todos.action';

export function getTodos() {
  return {
    type: actions.GET_TODOS
  }
}

export const initialState = {
  data: [],
  pending: false,
  error: null
}

export function todos( state = initialState, action: actions.Actions ) {
  switch( action.type ) {
    case actions.GET_TODOS:
      return Object.assign({}, state, {
          pending: true, 
          error: null
        });
    case actions.GET_TODOS_SUCCESS:
      return Object.assign({}, state, {
          data: action.payload, 
          pending: false
        });
    case actions.GET_TODOS_ERROR:
      return Object.assign({}, state, {
          pending: false, 
          error: "Error"
        });
    default:
      return state;
  }
}