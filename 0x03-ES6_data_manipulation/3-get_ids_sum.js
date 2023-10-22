export default function getStudentIdsSum(studArray) {
  return studArray.reduce((total, stud) => total + stud.id, 0);
}
