const boshlangichQiymat = {
    students: ["Azamat", "Shahzodbek", "Shohruh", "Fazliddin"],
    grades: [1, 3, 5],
  };
  
  export const studentReducer = (state = boshlangichQiymat, action) => {
    if (action.type === "ADD_STUDENT") {
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    } else if (action.type === "REMOVE_STUDENT") {
      return {
        ...state,
        students: state.students.filter((student) => student !== action.payload),
      };
    } else {
      return state;
    }
  };