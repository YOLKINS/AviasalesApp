export const changeTab = (tabs, id) => {
  return tabs.map((tab) => (tab.id === id ? { ...tab, disabled: true } : { ...tab, disabled: false }));
};
