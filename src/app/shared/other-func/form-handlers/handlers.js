export const onChangeHandler = (item, payload) => {
  item.value = payload.value;
  return item;
};

export const onChangeHandlerInput = (items, payload) => {
  return items.map((item) => {
    if (item.id === payload.id) {
      item.value = payload.value;
      return item;
    }
    return item;
  });
};
