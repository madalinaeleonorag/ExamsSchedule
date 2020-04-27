import * as actionTypes from '../actions/actionTypes';

const initialState = {
    exams: null
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.SET_EXAMS: return {
      ...state,
      exams: action.exams
    };
    default: 
    return state;
}
};

export default reducer;

