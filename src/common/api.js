// @flow

const params = {
  method: 'GET',
  credentials: 'include',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

export async function apiRequest(
  method: string,
  url: string,
): Promise<?Object> {
  const response = await fetch(url, {...params, method});
  const text = await response.text();
  let json = text.length ? JSON.parse(text) : null;
  if (json && json.error) {
    throw new Error(json.error || '');
  }
  if (response.status < 200 || response.status >= 400) {
    throw new Error(json || '');
  }
  return json;
}
