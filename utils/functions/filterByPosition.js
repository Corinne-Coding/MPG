/**
 * Function to filter data by ultraPosition
 * @param {object} data - Data to sort
 * @param {array} key - List of keys - filtering is done based on this information
 * @param {string} order - ultraPosition letter
 * @returns
 */
const filterByPosition = (data, key, order) => {
  if (
    !data ||
    !key ||
    (order !== 'A' &&
      order !== 'G' &&
      order !== 'D' &&
      order !== 'L' &&
      order !== 'MD' &&
      order !== 'MO')
  )
    return;

  const ultraPositionCode = [
    {
      code: 10,
      letter: 'G',
    },
    {
      code: 20,
      letter: 'D',
    },
    {
      code: 21,
      letter: 'L',
    },
    {
      code: 30,
      letter: 'MD',
    },
    {
      code: 31,
      letter: 'MO',
    },
    {
      code: 40,
      letter: 'A',
    },
  ];

  const positionElement = ultraPositionCode.find(elem => elem.letter === order);

  let tab = [];

  for (const [, player] of Object.entries(data)) {
    if (player[key[0]] === positionElement?.code) {
      tab.push(player);
    }
  }

  return tab;
};

export default filterByPosition;
