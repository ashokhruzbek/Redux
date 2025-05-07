import { CHANGE_GRADE, MARRY, SORT_AGE } from "./actionTypes"

const initialState = [
    {
        id: 1,
        name: "Ahmadbek",
        age: 20,
        grade: 2,
        isMarried: false
    },
    {
        id: 2,
        name: "Shoxruzbek",
        age: 30,
        grade: 4,
        isMarried: false
    },
    {
        id: 3,
        name: "Islombek",
        age: 50,
        grade: 3,
        isMarried: false
    },
    {
        id: 4,
        name: "Azamat",
        age: 40,
        grade: 5,
        isMarried: false
    },
    {
        id: 5,
        name: "Abdulloh",
        age: 10,
        grade: 5,
        isMarried: false
    },
]


export const studentReducer = (state = initialState, action) => {
    if (action.type === SORT_AGE) {
        const sortedStudents = state.slice().sort((a, b) => a.age - b.age)
        return sortedStudents
    }
    else if (action.type === MARRY) {
        return state.map(student => {
            if (student.id === action.payload) {
                return { ...student, isMarried: true }
            }
            return student
        })
    }
    else if (action.type === CHANGE_GRADE) {
        return state
    }
    else {
        return state
    }
}