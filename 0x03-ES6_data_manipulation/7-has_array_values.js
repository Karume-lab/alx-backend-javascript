export default function hasValuesFromArray(set, array) {
  const uniqueElems = array.filter((elem) => (!set.has(elem)));
  return uniqueElems.length === 0;
}
