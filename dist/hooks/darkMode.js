import { jsx as k } from "react/jsx-runtime";
import { createContext as m, useContext as n, useState as i, useEffect as d } from "react";
import { getLocalStorageItem as a, setLocalStorageItem as M } from "../services/LocalStorageHelper.js";
const s = m({
  isDarkMode: !1,
  toggleDarkMode: () => {
  }
}), u = ({ children: r }) => {
  const [e, t] = i(a("darkMode") ?? !1);
  d(() => {
    if (a("darkMode") === null) {
      const o = window.matchMedia("(prefers-color-scheme: dark)").matches;
      t(o);
    }
  }, []), d(() => {
    e ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  }, [e]);
  const c = () => {
    t((o) => (M("darkMode", !o), !o));
  };
  return /* @__PURE__ */ k(s.Provider, { value: { isDarkMode: e, toggleDarkMode: c }, children: r });
}, g = () => {
  const { isDarkMode: r, toggleDarkMode: e } = n(s);
  return { isDarkMode: r, toggleDarkMode: e };
};
export {
  u as DarkModeProvider,
  g as useDarkMode
};
