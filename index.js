function reverseArray(arr) {
  return arr.map((item,i) => arr[arr.length-1-i])
};

module.exports = reverseArray;
