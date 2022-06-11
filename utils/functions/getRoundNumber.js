const getRoundNumber = num => {
  if (num) return num.toFixed(1);
  return '--';
};

export default getRoundNumber;
