import { g as w, s as p } from "../LocalStorageHelper-NF_zqKTu.js";
const i = async (n) => {
  const e = await fetch(n, {
    method: "GET"
  });
  if (e.status !== 200)
    throw Error("fetching failed");
  try {
    return await e.json();
  } catch {
    return e;
  }
}, f = async ({ method: n, url: e, body: t, params: r }) => {
  const s = await fetch(r ? o(e, r) : e, {
    method: n,
    // check if needed
    body: typeof t == "string" ? t : JSON.stringify(t)
  });
  if (s.status !== 200)
    throw Error("fetching failed");
  try {
    return await s.json();
  } catch {
    return s;
  }
}, h = async ({ method: n, url: e, body: t, params: r, headers: s }) => {
  const a = await fetch(r ? o(e, r) : e, {
    method: n,
    // check if needed
    body: typeof t == "string" ? t : JSON.stringify(t),
    headers: s
  });
  if (a.status !== 200)
    throw Error("fetching failed");
  try {
    return await a.json();
  } catch {
    return a;
  }
}, o = (n, e) => {
  let t = n;
  return Object.entries(e).map(([r, s], a) => {
    a === 0 ? t += `?${r}=${s}` : t += `&${r}=${s}`;
  }), t;
};
export {
  w as getLocalStorageItem,
  h as sendHeadRequest,
  f as sendRequest,
  p as setLocalStorageItem,
  i as simpleRequest
};
