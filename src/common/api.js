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
  paramsExt: (Object) => Object = (o) => o,
): Promise<?Object> {
  const response = await fetch(url, {...paramsExt(params), method});
  const text = await response.text();
  let json = null;
  try {
    json = text.length ? JSON.parse(text) : null;
  } catch (err) {
    throw new Error(`Parsing error: \r\nresponeText:\rn${text}`);
  }
  if (json && json.error) {
    throw new Error(JSON.stringify(json.error));
  }
  if (response.status < 200 || response.status >= 400) {
    throw new Error(text);
  }
  return json;
}
