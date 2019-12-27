export const columnsConfig = [
  {
    title: 'Player',
    name: 'name',
    width: 4,
    defaultOrder: 'ASC',
    sort: (a, b, order) => {
      if (order === 'ASC') return a.localeCompare(b);
      return b.localeCompare(a);
    }
  },
  {
    title: 'Winnings',
    name: 'winnings',
    width: 4,
    defaultOrder: 'ASC',
    sort: (a, b, order) => {
      if (order === 'ASC') return a - b;
      return b - a;
    }
  },
  {
    title: 'Native Of',
    width: 4,
    name: 'country',
    defaultOrder: 'ASC',
    sort: (a, b, order) => {
      if (order === 'ASC') return a.localeCompare(b);
      return b.localeCompare(a);
    }
  },
]