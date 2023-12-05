export const tabs = [
  {
    id: 1,
    sortFunction: (tickets) => {
      return [...tickets].sort((a, b) => a.price - b.price);
    },
  },
  {
    id: 2,
    sortFunction: (tickets) => [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration),
  },
  {
    id: 3,
    sortFunction: (tickets) => [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration),
  },
];
