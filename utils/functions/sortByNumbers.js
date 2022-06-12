/**
 * Function to sort data by numbers in ascending order or descending order
 * @param {object} data - Data to sort
 * @param {array} key - List of keys - sorting is done based on this information
 * @param {string} order - Optionnal - ascending order by default
 * @returns
 */
const sortByNumbers = (data, key, order = 'sort-num-asc') => {
  if (!data || !key) return;

  if (order === 'sort-goal-asc') {
    order = 'sort-num-asc';
  }
  if (order === 'sort-goal-desc') {
    order = 'sort-num-desc';
  }

  let tab = [];
  let noValueTab = [];

  for (const [, player] of Object.entries(data)) {
    if (player[key[0]][key[1]] || player[key[0]][key[1]] === 0) {
      tab.push(player);
    } else {
      noValueTab.push(player);
    }
  }

  tab.sort(function (a, b) {
    const numA = a[key[0]][key[1]];
    const numB = b[key[0]][key[1]];

    if (order === 'sort-num-asc') return numB - numA;
    if (order === 'sort-num-desc') return numA - numB;
  });

  return tab.concat(noValueTab);
};

export default sortByNumbers;
