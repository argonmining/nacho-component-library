import a, { useState as l, useEffect as d, createContext as m, useContext as f } from "react";
import { u as h } from "./darkMode-ye1zL5RW.js";
import { D } from "./darkMode-ye1zL5RW.js";
import { g as L, s as R } from "./LocalStorageHelper-NF_zqKTu.js";
const i = m({
  isMobile: !1
}), p = ({ children: t }) => {
  const [e, r] = l(window.innerWidth <= 768);
  return d(() => {
    const s = () => {
      r(window.innerWidth <= 768);
    };
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []), a.createElement(i.Provider, { value: { isMobile: e } }, t);
}, E = () => {
  const { isMobile: t } = f(i);
  return { isMobile: t };
}, M = async (t) => {
  const e = await fetch(t, {
    method: "GET"
  });
  if (e.status !== 200)
    throw Error("fetching failed");
  try {
    return await e.json();
  } catch {
    return e;
  }
}, b = async ({ method: t, url: e, body: r, params: s }) => {
  const n = await fetch(s ? c(e, s) : e, {
    method: t,
    // check if needed
    body: typeof r == "string" ? r : JSON.stringify(r)
  });
  if (n.status !== 200)
    throw Error("fetching failed");
  try {
    return await n.json();
  } catch {
    return n;
  }
}, k = async ({ method: t, url: e, body: r, params: s, headers: n }) => {
  const o = await fetch(s ? c(e, s) : e, {
    method: t,
    // check if needed
    body: typeof r == "string" ? r : JSON.stringify(r),
    headers: n
  });
  if (o.status !== 200)
    throw Error("fetching failed");
  try {
    return await o.json();
  } catch {
    return o;
  }
}, c = (t, e) => {
  let r = t;
  return Object.entries(e).map(([s, n], o) => {
    o === 0 ? r += `?${s}=${n}` : r += `&${s}=${n}`;
  }), r;
}, y = () => {
  const { isDarkMode: t, toggleDarkMode: e } = h();
  return a.createElement(
    "div",
    { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
    a.createElement("span", { className: "dark-mode-label" }, t ? "Dark" : "Light"),
    a.createElement(
      "label",
      { className: "switch" },
      a.createElement("input", { type: "checkbox", checked: t, onChange: e }),
      a.createElement("span", { className: "slider" })
    )
  );
};
export {
  D as DarkModeProvider,
  p as MobileProvider,
  y as ThemeToggle,
  L as getLocalStorageItem,
  k as sendHeadRequest,
  b as sendRequest,
  R as setLocalStorageItem,
  M as simpleRequest,
  h as useDarkMode,
  E as useMobile
};
