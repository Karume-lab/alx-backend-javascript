export default function hasValuesFromArray(set, array) {
  const unique_elems = array.filter((elem) => (!set.has(elem)));
  return unique_elems.length === 0;
}
