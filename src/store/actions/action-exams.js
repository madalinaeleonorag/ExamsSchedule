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

export const updateExam = (currentExam) => {
    database.saveEdits(currentExam);
    return {
        type: actionTypes.UPDATE_EXAM,
        updatedExam: currentExam
    };
};

export const removeExam = (examId) => {
    database.removeItem(examId);
    return {
        type: actionTypes.REMOVE_EXAM,
        removedExamId: examId
    };
};

export const addExam = (newExam) => {
    database.saveNewItem(newExam);
    return {
        type: actionTypes.ADD_EXAM,
        addedExam: newExam
    };
};