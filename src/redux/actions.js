import { CHANGE_GRADE, MARRY, SORT_AGE } from "./actionTypes"

export const sortStudents = ()=>{
    return {
        type: SORT_AGE
    }
}
export const marryStudents = ()=>{
    return {
        type: MARRY
    }
}
export const changeGrades = ()=>{
    return {
        type: CHANGE_GRADE
    }
}