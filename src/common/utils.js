export function objectSort(list, fieldGetter) {
  return list.sort((item1, item2) => {
    const a = fieldGetter(item1);
    const b = fieldGetter(item2);

    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}
