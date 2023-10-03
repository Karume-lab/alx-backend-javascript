export default function createInt8TypedArray(length, position, value) {
  const arrayBuff = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuff);

  if (position < 0 || position >= dataView.byteLength) {
    throw new Error('Position outside range');
  }

  dataView.setInt8(position, value);
  return dataView;
}