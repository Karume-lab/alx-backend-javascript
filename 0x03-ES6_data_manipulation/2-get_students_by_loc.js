export default function getStudentsByLocation(studArray, loc) {
  return studArray.filter((stud) => stud.location === loc);
}
