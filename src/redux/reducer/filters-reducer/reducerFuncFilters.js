export const changeFilterState = (checkboxes, action) => {
  const { payload } = action;

  if (payload === -1) {
    const currentCheckbox = checkboxes.find((checkbox) => checkbox.id === payload);
    const newActiveState = !currentCheckbox.active;

    if (newActiveState) {
      return checkboxes.map((checkbox) => ({ ...checkbox, active: true }));
    } else {
      return checkboxes.map((checkbox) => ({ ...checkbox, active: false }));
    }
  }

  const allOtherCheckboxesChecked = checkboxes.every(
    (checkbox) => checkbox.id === -1 || (checkbox.id !== payload && checkbox.active)
  );

  const newCheckboxes = checkboxes.map((checkbox) => {
    if (checkbox.id === -1) {
      return {
        ...checkbox,
        active: !checkbox.active,
      };
    }

    if (checkbox.id === payload) {
      return { ...checkbox, active: !checkbox.active };
    }

    return checkbox;
  });

  const allOtherCheckboxesCheckedExceptMinusOne = newCheckboxes.every(
    (checkbox) => checkbox.id === -1 || checkbox.active
  );

  if (allOtherCheckboxesChecked) {
    return newCheckboxes.map((checkbox) => (checkbox.id === -1 ? { ...checkbox, active: true } : checkbox));
  }

  if (!allOtherCheckboxesCheckedExceptMinusOne) {
    return newCheckboxes.map((checkbox) => (checkbox.id === -1 ? { ...checkbox, active: false } : checkbox));
  }

  return newCheckboxes;
};

export const changeSelectedState = (updatedCheckboxes) => {
  const updatedSelectedCheckBoxesId = updatedCheckboxes
    .filter((checkbox) => checkbox.active)
    .map((checkbox) => checkbox.id);

  return updatedSelectedCheckBoxesId;
};
