const getPositionCode = ultraPosition => {
  if (ultraPosition === 10) return 'G';
  if (ultraPosition === 20) return 'D';
  if (ultraPosition === 21) return 'L';
  if (ultraPosition === 30) return 'MD';
  if (ultraPosition === 31) return 'MO';
  if (ultraPosition === 40) return 'A';
  if (
    ultraPosition !== 10 &&
    ultraPosition !== 20 &&
    ultraPosition !== 21 &&
    ultraPosition !== 30 &&
    ultraPosition !== 31 &&
    ultraPosition !== 40
  )
    return '--';
};

export default getPositionCode;
