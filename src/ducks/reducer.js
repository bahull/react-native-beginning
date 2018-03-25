//CONSTANTS
const UPDATE_USER_ACCESS = "UPDATE_USER_ACCESS";

// ACTION BUILDERS
export function updateModalTruthy(boo) {
  console.log("hit recuerdf truthy");
  return {
    type: UPDATE_MODAL_TRUTHY,
    payload: boo
  };
}

let initialState = {
  access: undefined
};
//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_ACCESS:
      return Object.assign({}, state, { access: action.payload });
    default:
      return state;
  }
}
