export function objectSort(list, fieldGetter) {
  return [...list].sort((item1, item2) => {
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

export function withIndex(fn: (arr: Array<Object>) => Array<Object>): Function {
  return (arr: Array<Object>) =>
    fn(arr).map((a, index) => ({index: index + 1, ...a}));
}

export const range = (count: number): Array<number> => [...Array(count).keys()];
