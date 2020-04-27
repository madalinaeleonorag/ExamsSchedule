import * as actionTypes from '../actions/actionTypes';

const initialState = {
    exams: null
}

const reducer = (state = initialState, action) => {
  console.log(state)
  switch ( action.type ) {
    case actionTypes.SET_EXAMS: return {
      ...state,
      exams: action.exams
    };
    case actionTypes.UPDATE_EXAM: 
    console.log([...state.exams.map(item => (item.id === action.updatedExam.id) ? action.updatedExam : item)],"MAP")
    return {
      ...state,
      exams: [...state.exams.map(item => (item.id === action.updatedExam.id) ? action.updatedExam : item)]
    };
    default: 
    return state;
}
};

export default reducer;

