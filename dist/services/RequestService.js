const o = async (n) => {
  const e = await fetch(
    n,
    {
      method: "GET"
    }
  );
  if (e.status !== 200)
    throw Error("fetching failed");
  try {
    return await e.json();
  } catch {
    return e;
  }
}, f = async ({ method: n, url: e, body: t, params: r }) => {
  const s = await fetch(
    r ? i(e, r) : e,
    {
      method: n,
      // check if needed
      body: typeof t == "string" ? t : JSON.stringify(t)
    }
  );
  if (s.status !== 200)
    throw Error("fetching failed");
  try {
    return await s.json();
  } catch {
    return s;
  }
}, h = async ({ method: n, url: e, body: t, params: r, headers: s }) => {
  const a = await fetch(
    r ? i(e, r) : e,
    {
      method: n,
      // check if needed
      body: typeof t == "string" ? t : JSON.stringify(t),
      headers: s
    }
  );
  if (a.status !== 200)
    throw Error("fetching failed");
  try {
    return await a.json();
  } catch {
    return a;
  }
}, i = (n, e) => {
  let t = n;
  return Object.entries(e).map(([r, s], a) => {
    a === 0 ? t += `?${r}=${s}` : t += `&${r}=${s}`;
  }), t;
};
export {
  h as sendHeadRequest,
  f as sendRequest,
  o as simpleRequest
};
