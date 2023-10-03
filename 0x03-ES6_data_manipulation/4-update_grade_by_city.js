export default function updateStudentGradeByCity(studArray, location, newGrades) {
	return  studArray.filter((stud) => stud.location === location).map((stud) => {
		for (const gradeObj of newGrades) {
			if (gradeObj.studentId === stud.id) {
				stud.grade = gradeObj.grade;
			} else {
				stud.grade = 'N/A';
			}
		}
	})
}
