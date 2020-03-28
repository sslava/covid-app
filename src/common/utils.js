// @flow
export const formatNumber = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatDate = (date: string): string =>
  new Date(date.replace(' ', 'T') + 'Z').toLocaleDateString('ru');
