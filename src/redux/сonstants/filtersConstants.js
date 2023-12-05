export const filters = [
  {
    id: 0,
    filterFunction: (tickets) => {
      return [...tickets].filter((item) => item.segments[0].stops.length === 0);
    },
  },
  {
    id: 1,
    filterFunction: (tickets) => {
      return [...tickets].filter((item) => item.segments[0].stops.length === 1);
    },
  },
  {
    id: 2,
    filterFunction: (tickets) => {
      return [...tickets].filter((item) => item.segments[0].stops.length === 2);
    },
  },
  {
    id: 3,
    filterFunction: (tickets) => {
      return [...tickets].filter((item) => item.segments[0].stops.length === 3);
    },
  },
];
