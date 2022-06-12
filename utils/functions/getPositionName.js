/**
 * Function to convert the ultraPosition code into word(s)
 * @param {*} ultraPosition - Number
 * @returns {string}
 */
const getPositionCode = ultraPosition => {
  if (ultraPosition === 10) return 'Gardien';
  if (ultraPosition === 20) return 'Défenseur';
  if (ultraPosition === 21) return 'Latéral';
  if (ultraPosition === 30) return 'Milieu défensif';
  if (ultraPosition === 31) return 'Milieu offensif';
  if (ultraPosition === 40) return 'Attaquant';
  if (
    ultraPosition !== 10 &&
    ultraPosition !== 20 &&
    ultraPosition !== 21 &&
    ultraPosition !== 30 &&
    ultraPosition !== 31 &&
    ultraPosition !== 40
  )
    return 'N/A';
};

export default getPositionCode;
