import { jsx as k } from "react/jsx-runtime";
import { createContext as m, useState as n, useEffect as a, useContext as i } from "react";
import { g as s, s as M } from "../LocalStorageHelper-NF_zqKTu.js";
const d = m({
  isDarkMode: !1,
  toggleDarkMode: () => {
  }
}), g = ({ children: r }) => {
  const [e, t] = n(s("darkMode") ?? !1);
  a(() => {
    if (s("darkMode") === null) {
      const o = window.matchMedia("(prefers-color-scheme: dark)").matches;
      t(o);
    }
  }, []), a(() => {
    e ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  }, [e]);
  const c = () => {
    t((o) => (M("darkMode", !o), !o));
  };
  return /* @__PURE__ */ k(d.Provider, { value: { isDarkMode: e, toggleDarkMode: c }, children: r });
}, u = () => {
  const { isDarkMode: r, toggleDarkMode: e } = i(d);
  return { isDarkMode: r, toggleDarkMode: e };
};
export {
  g as DarkModeProvider,
  u as useDarkMode
};
