import * as actionTypes from './actionTypes';
import * as database from "../../database-mockup";

export const setExams = (exams) => {
    return {
        type: actionTypes.SET_EXAMS,
        exams: exams
    };
};
export const initExams = () => {
    return dispatch => {
        database.get()
            .then((response) => {
                dispatch(setExams(response));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const updateExam = currentExam => {
    console.log(currentExam);
};