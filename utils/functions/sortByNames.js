/**
 * Function to sort data by names in ascending order or descending order
 * @param {object} data - Data to sort
 * @param {array} key - List of keys - sorting is done based on this information
 * @param {string} order - Optionnal - ascending order by default
 * @returns {tab}
 */
const sortByNames = (data, key, order = 'sort-name-asc') => {
  if (
    (order !== 'sort-name-asc' && order !== 'sort-name-desc') ||
    !data ||
    !key
  )
    return;

  let tab = [];

  for (const [, value] of Object.entries(data)) {
    tab.push(value);
  }

  tab.sort(function (a, b) {
    let nameA = '';
    let nameB = '';

    if (order === 'sort-name-asc') {
      if (key[0] && key[1]) {
        nameA = a[key[0]][key[1]].toLowerCase();
        nameB = b[key[0]][key[1]].toLowerCase();
      } else if (key[0]) {
        nameA = a[key[0]].toLowerCase();
        nameB = b[key[0]].toLowerCase();
      }
    } else if (order === 'sort-name-desc') {
      if (key[0] && key[1]) {
        nameA = b[key[0]][key[1]].toLowerCase();
        nameB = a[key[0]][key[1]].toLowerCase();
      } else if (key[0]) {
        nameA = b[key[0]].toLowerCase();
        nameB = a[key[0]].toLowerCase();
      }
    }

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return tab;
};

export default sortByNames;
