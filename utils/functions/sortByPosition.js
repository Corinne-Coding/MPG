const sortByPosition = (data, key, order = 'A') => {
  if (!data || !key) return;

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

export default sortByPosition;
