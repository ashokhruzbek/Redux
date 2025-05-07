import { CHANGE_GRADE, MARRY, SORT_AGE } from "./actionTypes"

export const sortStudents = ()=>{
    return {
        type: SORT_AGE
    }
}
export const marryStudents = (studentId)=>{
    return {
        type: MARRY,
        payload: studentId
    }
}
export const changeGrades = ()=>{
    return {
        type: CHANGE_GRADE
    }
}