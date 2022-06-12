/**
 * Function to round a number to one decimal place
 * @param {number} num
 * @returns {number}
 */
const getRoundNumber = num => {
  if (num) return num.toFixed(1);
  return '--';
};

export default getRoundNumber;
