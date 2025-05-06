const boshlangichQiymat = {
    students: ["Azamat", "Shahzodbek", "Shohruh", "Fazliddin"],
    grades: [1, 3, 5],
  };
  
  export const studentReducer = (state = boshlangichQiymat, action) => {
    if (action.type === "ADD_STUDENT") {
      return {
        ...state,
        students: [...state.students, "Jahongir"],
      };
    } else if (action.type === "REMOVE_STUDENT") {
      return {
        ...state,
        students: state.students.filter((student) => student !== "Azamat"),
      };
    } else {
      return state;
    }
  };