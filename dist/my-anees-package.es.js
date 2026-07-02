import e, { useRef as _, useEffect as U, useState as D, useMemo as me, useCallback as z } from "react";
import { createPortal as ie } from "react-dom";
import { FontAwesomeIcon as ae } from "@fortawesome/react-fontawesome";
import { faBold as fe, faItalic as ve } from "@fortawesome/free-solid-svg-icons";
import { CKEditor as Re } from "@ckeditor/ckeditor5-react";
import { MathfieldElement as ke } from "mathlive";
import { Essentials as He, Bold as Oe, Italic as Ue, Underline as Ve, Paragraph as Pe, Heading as qe, Table as Fe, TableToolbar as Ze, TableCellProperties as Je, TableProperties as je, List as ze, Link as Qe, Undo as Xe, ClassicEditor as Ke, Plugin as Me, ButtonView as ue, Widget as _e, toWidget as Ge } from "ckeditor5";
import "ckeditor5/ckeditor5.css";
const Ae = "data:image/png;base64,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", Ce = "data:image/png;base64,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", we = "data-mathfield-shadow-styles";
function ne(t) {
  const r = t == null ? void 0 : t.shadowRoot;
  if (!r) return;
  const i = t.hasAttribute("read-only") || t.hasAttribute("readonly"), a = i ? "readonly" : "editable";
  let n = r.querySelector(`[${we}]`);
  n && n.getAttribute("data-cache") === a || (n || (n = document.createElement("style"), n.setAttribute(we, "true"), r.appendChild(n)), n.setAttribute("data-cache", a), n.textContent = `
    ${i ? `
      :host, :host * { cursor: pointer !important; }
      .ML__latex, .ML__content, .ML__container, .ML__virtual-keyboard-toggle { cursor: pointer !important; }
    ` : ""}
    .ML__content, .ML__container, .ML__field-container, .ML__formula {
      overflow: visible !important;
      contain: none !important;
    }
    .wide-circle {
      display: inline-block !important;
      transform: scaleX(1.5) !important;
    }
    .wider-circle {
      display: inline-block !important;
      transform: scaleX(2.2) !important;
    }
    .cme-flip-v {
      display: inline-block;
      transform: scaleY(-1) !important;
    }
    .cme-wide-hat-text {
      position: relative;
    }
    .cme-wide-hat-text::before {
      content: '';
      position: absolute;
      top: -0.1em;
      left: 0;
      width: 100%;
      height: 0.4em;
      background-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 10 L 50 0 L 100 10' stroke='black' stroke-width='1' fill='none' vector-effect='non-scaling-stroke' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      pointer-events: none;
    }
    .cme-enclose-circle {
      display: inline-block;
      border: 1px solid currentColor;
      border-radius: 2em; /* Capsule shape guarantees no corner clipping */
      padding: 0.1em 0.6em; /* Extra horizontal padding for the semi-circle ends */
      text-align: center;
    }
    .cme-enclose-box {
      display: inline-block;
      border: 1px solid currentColor;
      padding: 0.2em 0.3em;
    }
    .cme-enclose-roundedbox {
      display: inline-block;
      border: 1px solid currentColor;
      border-radius: 0.5em;
      padding: 0.2em 0.3em;
    }
    .cme-enclose-actuarial {
      display: inline-block;
      border-top: 1px solid currentColor;
      border-right: 1px solid currentColor;
      padding-top: 0.1em;
      padding-right: 0.2em;
      margin-right: 0.1em;
    }
    .cme-vertical-strike {
      display: inline-block;
      position: relative;
    }
    .cme-vertical-strike::after {
      content: '';
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;
      background: currentColor;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='50' y1='0' x2='50' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='50' y1='0' x2='50' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      pointer-events: none;
    }
    .cme-horizontal-vertical-strike {
      display: inline-block;
      position: relative;
    }
    .cme-horizontal-vertical-strike::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: currentColor;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3Cline x1='50' y1='0' x2='50' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3Cline x1='50' y1='0' x2='50' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      pointer-events: none;
    }
    .cme-cancel-strike {
      display: inline-block;
      position: relative;
    }
    .cme-cancel-strike::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: currentColor;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='100' x2='100' y2='0' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='100' x2='100' y2='0' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      pointer-events: none;
    }
    .cme-down-strike {
      display: inline-block;
      position: relative;
    }
    .cme-down-strike::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: currentColor;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      pointer-events: none;
    }
    .cme-cross-strike {
      display: inline-block;
      position: relative;
    }
    .cme-cross-strike::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: currentColor;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='100' x2='100' y2='0' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='100' x2='100' y2='0' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      pointer-events: none;
    }
    .cme-horizontal-strike {
      display: inline-block;
      position: relative;
    }
    .cme-horizontal-strike::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: currentColor;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      mask-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='black' stroke-width='2' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      pointer-events: none;
    }
    .cme-long-div {
      display: inline-block;
      border-bottom: 1px solid currentColor;
      border-left: 1px solid currentColor;
      padding: 0.1em 0.2em;
      margin-left: 0.1em;
    }
  `);
}
function Ye() {
  document.querySelectorAll("math-field").forEach(ne);
}
let se = null;
function $e() {
  se || (Ye(), se = new MutationObserver((t) => {
    var r, i, a;
    for (const n of t) {
      if (n.type === "attributes" && ((r = n.target.tagName) == null ? void 0 : r.toLowerCase()) === "math-field") {
        ne(n.target);
        continue;
      }
      if (n.addedNodes)
        for (const h of n.addedNodes)
          h instanceof Element && (((i = h.tagName) == null ? void 0 : i.toLowerCase()) === "math-field" && requestAnimationFrame(() => ne(h)), (a = h.querySelectorAll) == null || a.call(h, "math-field").forEach((o) => requestAnimationFrame(() => ne(o))));
    }
  }), se.observe(document.body, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["read-only", "readonly"]
  }));
}
const et = "§MATH§", tt = "§END§";
function xe(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Le(t) {
  if (!t) return "";
  let r = "", i = 0;
  for (; i < t.length; ) {
    let a = t.indexOf("\\placeholder", i);
    if (a === -1) {
      r += t.slice(i);
      break;
    }
    if (r += t.slice(i, a), i = a + 12, t[i] === "[") {
      let n = 1;
      for (i++; i < t.length && n > 0; )
        t[i] === "[" ? n++ : t[i] === "]" && n--, i++;
    }
    if (t[i] === "{") {
      let n = 1, h = i + 1;
      for (i++; i < t.length && n > 0; )
        t[i] === "{" ? n++ : t[i] === "}" && n--, i++;
      let o = t.slice(h, i - 1);
      o.trim() === "" ? r += "\\text{ }" : r += o;
    }
  }
  return r;
}
function ye(t) {
  const r = Le(t);
  if (!r || r.trim() === "")
    return document.createTextNode(" ");
  const i = document.createElement("math-field");
  i.setAttribute("read-only", ""), i.setAttribute(
    "style",
    [
      "display:inline-block",
      "vertical-align:middle",
      "border:none",
      "background:transparent",
      "outline:none",
      "padding:0 2px",
      "margin:0 1px",
      "font-size:inherit",
      "min-height:auto",
      "--primary-color:#0f766e"
    ].join(";")
  );
  const a = () => {
    if (!i.isConnected) {
      requestAnimationFrame(a);
      return;
    }
    try {
      window.__cme_macros && (i.macros = { ...i.macros, ...window.__cme_macros }), i.setValue ? i.setValue(r) : i.value = r;
    } catch (n) {
      console.error("Error setting LaTeX in QuestionPreview:", n);
    }
  };
  return requestAnimationFrame(a), i;
}
function Ee(t, r) {
  if (!r) return;
  const i = document.createElement("div");
  i.innerHTML = r;
  const a = /* @__PURE__ */ new Set([
    "B",
    "STRONG",
    "I",
    "EM",
    "U",
    "BR",
    "DIV",
    "P",
    "SPAN",
    "UL",
    "OL",
    "LI",
    "SUB",
    "SUP",
    "H1",
    "H2",
    "H3",
    "H4",
    "BLOCKQUOTE",
    "A",
    "TABLE",
    "THEAD",
    "TBODY",
    "TR",
    "TH",
    "TD",
    "FIGURE",
    "FIGCAPTION",
    "COLGROUP",
    "COL"
  ]), n = (o, s) => {
    Array.from(o.childNodes).forEach((m) => {
      if (m.nodeType === Node.TEXT_NODE)
        s.appendChild(document.createTextNode(m.textContent));
      else if (m.nodeType === Node.ELEMENT_NODE) {
        const C = m.nodeName;
        if (C === "MATH-FIELD") {
          const k = m.getAttribute("value") || m.value || m.textContent || "", v = Le(k);
          if (!v || v.trim() === "")
            s.appendChild(document.createTextNode(" "));
          else {
            const b = document.createElement("math-field");
            b.setAttribute("read-only", ""), b.setAttribute(
              "style",
              [
                "display:inline-block",
                "vertical-align:middle",
                "border:none",
                "background:transparent",
                "outline:none",
                "padding:0 2px",
                "margin:0 1px",
                "font-size:inherit",
                "min-height:auto",
                "--primary-color:#0f766e"
              ].join(";")
            ), requestAnimationFrame(() => {
              b.setValue ? b.setValue(v) : b.value = v;
            }), s.appendChild(b);
          }
        } else if (C === "BR")
          s.appendChild(document.createElement("br"));
        else if (C === "SPAN" && m.classList.contains("math-tex")) {
          const k = document.createElement("span");
          k.className = "math-tex", m.getAttribute("data-latex") && k.setAttribute("data-latex", m.getAttribute("data-latex")), k.textContent = m.textContent, s.appendChild(k);
        } else if (a.has(C)) {
          const k = { STRONG: "b", EM: "i" }, v = document.createElement(k[C] || C.toLowerCase());
          C === "A" && m.getAttribute("href") && (v.setAttribute("href", m.getAttribute("href")), v.setAttribute("target", "_blank"), v.setAttribute("rel", "noopener noreferrer")), ["style", "class", "colspan", "rowspan"].forEach((y) => {
            m.getAttribute(y) && v.setAttribute(y, m.getAttribute(y));
          }), n(m, v), s.appendChild(v);
        } else
          n(m, s);
      }
    });
  }, h = document.createElement("span");
  for (n(i, h); h.firstChild; ) t.appendChild(h.firstChild);
}
function lt({ value: t = "" }) {
  const r = _(null);
  return U(() => {
    const i = r.current;
    if (!i) return;
    i.innerHTML = "";
    const a = new RegExp(
      xe(et) + "([\\s\\S]*?)" + xe(tt),
      "g"
    );
    let n = 0, h;
    for (; (h = a.exec(t)) !== null; ) {
      if (h.index > n) {
        const s = t.slice(n, h.index);
        Ee(i, s);
      }
      const o = h[1];
      i.appendChild(ye(o)), n = h.index + h[0].length;
    }
    n < t.length && Ee(i, t.slice(n)), i.querySelectorAll("span.math-tex").forEach((o) => {
      const s = o.getAttribute("data-latex") || o.textContent || "", m = ye(s);
      o.replaceWith(m);
    });
  }, [t]), /* @__PURE__ */ e.createElement(
    "span",
    {
      ref: r,
      style: { display: "inline", lineHeight: 1.7, verticalAlign: "middle" }
    }
  );
}
const Se = [
  { id: "All", name: "All" },
  { id: "Symbol", name: "Symbol", ranges: [[8704, 8959], [9728, 9983], [8592, 8703], [9984, 10175]] },
  { id: "Punctuation", name: "Punctuation", ranges: [[33, 47], [58, 64], [91, 96], [123, 126], [8208, 8231], [8240, 8286]] },
  { id: "Letter", name: "Letter", ranges: [[65, 90], [97, 122], [880, 1023], [1024, 1279]] },
  { id: "Mark", name: "Mark", ranges: [[768, 879], [8400, 8447]] },
  { id: "Number", name: "Number", ranges: [[48, 57], [8528, 8591], [8304, 8351]] },
  { id: "Phonetic", name: "Phonetic", ranges: [[592, 687], [7424, 7551]] },
  { id: "Other", name: "Other", ranges: [[8352, 8399], [8448, 8527], [9632, 9727]] }
], rt = () => {
  const t = [];
  return Se.slice(1).forEach((r) => {
    r.ranges.forEach((i) => {
      for (let a = i[0]; a <= i[1]; a++)
        a >= 127 && a <= 159 || t.push({
          code: a.toString(16).toUpperCase().padStart(4, "0"),
          char: String.fromCodePoint(a),
          category: r.id
        });
    });
  }), t;
}, it = rt();
function nt({ isOpen: t, onClose: r, onInsert: i, position: a }) {
  const [n, h] = D(""), [o, s] = D("All");
  U(() => {
    t && (h(""), s("All"));
  }, [t]);
  const m = me(() => {
    let b = it;
    if (o !== "All" && (b = b.filter((y) => y.category === o)), n.trim()) {
      const y = n.trim().toUpperCase();
      b = b.filter((g) => g.code.includes(y));
    }
    return b;
  }, [o, n]), C = me(() => {
    if (o !== "All" && !n.trim())
      return { [o]: m };
    const b = {};
    return m.forEach((y) => {
      b[y.category] || (b[y.category] = []), b[y.category].push(y);
    }), b;
  }, [m, o, n]), k = (b) => {
    b.key === "Escape" && r();
  };
  if (U(() => (t && window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k)), [t]), !t) return null;
  let v = { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  if (a) {
    let b = a.x - 120, y = a.y;
    b < 10 && (b = 10), b + 230 > window.innerWidth && (b = window.innerWidth - 240), y + 200 > window.innerHeight && (y = window.innerHeight - 210), v = { top: `${y}px`, left: `${b}px` };
  }
  return /* @__PURE__ */ e.createElement("div", { className: "scm-overlay", onMouseDown: (b) => {
    b.stopPropagation(), r();
  } }, /* @__PURE__ */ e.createElement("div", { className: "scm-modal", style: v, onMouseDown: (b) => b.stopPropagation() }, /* @__PURE__ */ e.createElement("div", { className: "scm-toolbar" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      placeholder: "Code",
      value: n,
      onChange: (b) => h(b.target.value),
      className: "scm-code-input"
    }
  ), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o,
      onChange: (b) => s(b.target.value),
      className: "scm-category-select"
    },
    Se.map((b) => /* @__PURE__ */ e.createElement("option", { key: b.id, value: b.id }, b.name))
  )), /* @__PURE__ */ e.createElement("div", { className: "scm-body" }, /* @__PURE__ */ e.createElement("div", { className: "scm-grid-container" }, Object.entries(C).map(([b, y]) => /* @__PURE__ */ e.createElement("div", { key: b, className: "scm-category-group" }, /* @__PURE__ */ e.createElement("div", { className: "scm-char-grid" }, y.map((g) => /* @__PURE__ */ e.createElement(
    "button",
    {
      key: g.code,
      className: "scm-char-btn",
      onClick: () => {
        i(g.char), r();
      },
      title: `U+${g.code}`
    },
    g.char
  ))))), m.length === 0 && /* @__PURE__ */ e.createElement("div", { className: "scm-no-results" }, "No characters found.")))));
}
window.__cme_macros = {
  ...window.__cme_macros,
  cmeLeftRightAbove: {
    def: "\\class{cme-flip-v}{\\xtofrom[\\class{cme-flip-v}{#1}]{}}",
    args: 1
  },
  cmeLeftRightBelow: {
    def: "\\class{cme-flip-v}{\\xtofrom{\\class{cme-flip-v}{#1}}}",
    args: 1
  },
  cmeLeftRightBoth: {
    def: "\\class{cme-flip-v}{\\xtofrom[\\class{cme-flip-v}{#1}]{\\class{cme-flip-v}{#2}}}",
    args: 2
  },
  cmeWideHat: {
    def: "\\class{cme-wide-hat-text}{#1}",
    args: 1
  }
};
typeof window < "u" && (window.MathfieldElement ? window.MathfieldElement.fontsDirectory = "https://cdn.jsdelivr.net/npm/mathlive/dist/fonts" : ke && (ke.fontsDirectory = "https://cdn.jsdelivr.net/npm/mathlive/dist/fonts"));
window.__ckMathWidgets = window.__ckMathWidgets || /* @__PURE__ */ new Map();
window.__ckMathWidgetClickHandler = null;
function Te(t) {
  var i, a, n, h, o;
  if (!t) return null;
  const r = typeof t.composedPath == "function" ? t.composedPath() : [t];
  for (const s of r)
    if (s instanceof HTMLElement && ((i = s.classList) != null && i.contains("ck-math-widget") || (a = s.dataset) != null && a.mathId || (n = s.classList) != null && n.contains("ck-widget") && ((h = s.querySelector) != null && h.call(s, ".ck-math-widget-inner"))))
      return s;
  return t instanceof Element ? (o = t.closest) == null ? void 0 : o.call(t, ".ck-math-widget, [data-math-id]") : null;
}
function at(t) {
  if (!t) return "";
  let r = "", i = 0;
  for (; i < t.length; ) {
    let a = t.indexOf("\\placeholder", i);
    if (a === -1) {
      r += t.slice(i);
      break;
    }
    if (r += t.slice(i, a), i = a + 12, t[i] === "[") {
      let n = 1;
      for (i++; i < t.length && n > 0; )
        t[i] === "[" ? n++ : t[i] === "]" && n--, i++;
    }
    if (t[i] === "{") {
      let n = 1, h = i + 1;
      for (i++; i < t.length && n > 0; )
        t[i] === "{" ? n++ : t[i] === "}" && n--, i++;
      let o = t.slice(h, i - 1);
      o.trim() === "" ? r += "\\quad " : r += o;
    }
  }
  return r;
}
function de(t) {
  let r = "", i = 0;
  const a = "\\text{";
  for (; i < t.length; ) {
    const n = t.indexOf(a, i);
    if (n === -1) {
      r += t.slice(i);
      break;
    }
    r += t.slice(i, n);
    let h = 1, o = n + a.length;
    for (; o < t.length && h > 0; )
      t[o] === "{" ? h++ : t[o] === "}" && h--, o++;
    r += t.slice(n + a.length, o - 1), i = o;
  }
  return r;
}
function pe(t) {
  return t.replace(/\\enclose\{([^}]*)\}\[.*?\]/g, "\\enclose{$1}");
}
function ee(t) {
  if (!t) return "";
  const r = t.getAttribute("data-latex");
  if (r) return r;
  const i = t.querySelector("math-field");
  return i ? i.getValue ? i.getValue() : i.value || "" : "";
}
function be(t, r) {
  if (!t || !r) return !1;
  try {
    return t.model.createPositionBefore(r), !0;
  } catch {
    return !1;
  }
}
function ot(t, r) {
  var s;
  if (!t || !r) return null;
  const i = t.model.document.selection.getSelectedElement();
  if ((i == null ? void 0 : i.name) === "mathInline") return i;
  const a = r.getAttribute("data-math-id");
  if (a) {
    const m = window.__ckMathWidgets.get(a);
    if (be(t, m)) return m;
  }
  const n = t.editing.view.domConverter.mapDomToView(r);
  if (n) {
    const m = t.editing.mapper.toModelElement(n);
    if ((m == null ? void 0 : m.name) === "mathInline") return m;
  }
  const h = ee(r);
  if (!h) return null;
  const o = t.model.document.getRoot();
  for (const { item: m } of t.model.createRangeIn(o))
    if ((s = m.is) != null && s.call(m, "element", "mathInline") && m.getAttribute("latex") === h)
      return m;
  return null;
}
function ge(t, r, i, a) {
  if (!t || t._mathWidgetOpening) return;
  t._mathWidgetOpening = !0, queueMicrotask(() => {
    t._mathWidgetOpening = !1;
  });
  const n = be(t, r) ? r : ot(t, a), h = (n == null ? void 0 : n.getAttribute("latex")) || i || ee(a);
  if (!h) return;
  n && t.model.change((s) => {
    s.setSelection(n, "on");
  });
  const o = t.mathWidgetClickHandler || window.__ckMathWidgetClickHandler;
  o == null || o(n, h);
}
function st(t, r) {
  if (!r || r._ckMathClickBound) return;
  r._ckMathClickBound = !0;
  const i = (a) => {
    var n;
    a.button === 0 && (a.preventDefault(), a.stopPropagation(), (n = a.stopImmediatePropagation) == null || n.call(a), ge(t, null, ee(r), r));
  };
  r.addEventListener("mousedown", i, !0), r.addEventListener("click", i, !0);
}
const ct = [
  {
    label: "√(□)",
    fontSize: "9px",
    mathLabel: "\\sqrt{\\square} \\, \\frac{#0}{#?}",
    items: [
      // 1. Root & Fraction Group (3 cols)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "2", width: "18", height: "20", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "32", x2: "50", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "40", width: "18", height: "20", rx: "2" })), insert: "\\frac{#0}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M6 34 L14 34 L20 50 L30 10 L54 10", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "36", y: "18", width: "16", height: "20", rx: "2" })), insert: "\\sqrt{#0}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Square Root" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "5", y: "16", width: "18", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "50", x2: "40", y2: "18", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "34", width: "18", height: "20", rx: "1" })), insert: "\\LARGE {}^{#?}/_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Text Fraction" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M6 36 L14 36 L20 50 L30 10 L56 10", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "12", y: "16", width: "8", height: "12", rx: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "22", width: "12", height: "22", rx: "2" })), insert: "\\sqrt[#?]{#0}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Nth Root Fraction" },
      { type: "sep", cols: 1 },
      // 8. Text Style Group (1 col)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "10", y: "22", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "10", width: "12", height: "22", rx: "2", opacity: "0.45" })), insert: "#0^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Superscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "10", y: "10", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "28", width: "12", height: "22", rx: "2", opacity: "0.45" })), insert: "#0_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Subscript" },
      { type: "sep", cols: 2 },
      // 2. Brackets & Delimiters Group (2 cols)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12 Q8 32 18 52", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12 Q56 32 46 52", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left(#0\\right)", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Parentheses" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12H12V52H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12H52V52H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left[#0\\right]", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Square Brackets" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "12", x2: "16", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "48", y1: "12", x2: "48", y2: "52", stroke: "#222", strokeWidth: "4" })), insert: "\\left|#0\\right|", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "vertical bars" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M20 12C16 12 16 18 18 22C19 24 19 26 16 29C19 32 19 34 18 36C16 40 16 46 20 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M44 12C48 12 48 18 46 22C45 24 45 26 48 29C45 32 45 34 46 36C48 40 48 46 44 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" })), insert: "\\left\\{#0\\right\\}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Curly Braces" },
      // { label: '(□)', insert: '\\left(#0\\right)', title: 'Parentheses' },
      // { label: '[□]', insert: '\\left[#0\\right]', title: 'Square Brackets' },
      // { label: '|□|', insert: '\\left|#0\\right|', title: 'Absolute Value' },
      // { label: '{□}', insert: '\\left\\{#0\\right\\}', title: 'Curly Braces' },
      { type: "sep", cols: 2, small: !0 },
      // 3. Basic Arithmetic Operators (2 cols × 3 rows)
      { label: "+", insert: "+", title: "Plus" },
      { label: "/", insert: "/", title: "Divide" },
      { label: "×", insert: "\\times", title: "Multiply" },
      { label: "±", insert: "\\pm", title: "Plus-minus" },
      { label: "−", insert: "-", title: "Minus" },
      { label: "÷", insert: "\\div", title: "Divide sign" },
      { type: "sep", cols: 2, small: !0 },
      // 4. Comparison & Relation Operators (2 cols × 3 rows)
      { label: "≥", insert: "\\geq", title: "Greater than or equal to" },
      { label: "≤", insert: "\\leq", title: "Less than or equal to" },
      { label: "∈", insert: "\\in", title: "Element of" },
      { label: "⊂", insert: "\\subset", title: "Subset" },
      // subset
      { label: "∪", insert: "\\cup", title: "Union" },
      // union
      { label: "∩", insert: "\\cap", title: "Intersection" },
      // intersection
      { type: "sep", cols: 1, small: !0 },
      // 5. Greek Letters (1 col)
      { label: "∅", insert: "\\emptyset", title: "Empty set" },
      // empty set
      { label: "∞", insert: "\\infty", title: "Infinity" },
      { label: "π", insert: "\\pi", title: "Pi" },
      { type: "sep", cols: 1 },
      // 6. Undo / Redo (1 col)
      { label: "↶", action: "UNDO", title: "Undo" },
      { label: "↷", action: "REDO", title: "Redo" },
      { type: "sep", cols: 2 },
      // 7. Formatting Group (2 cols)
      { label: /* @__PURE__ */ e.createElement(ae, { icon: fe }), action: "BOLD", cls: "template", title: "Bold" },
      { label: /* @__PURE__ */ e.createElement(ae, { icon: ve }), action: "ITALIC", cls: "template", title: "Italic" },
      {
        label: /* @__PURE__ */ e.createElement(
          "img",
          {
            src: Ae,
            alt: "Omega",
            width: "18",
            height: "18",
            style: { display: "block" }
          }
        ),
        title: "Insert Special Character",
        action: "SPECIAL_CHARS"
      },
      {
        label: /* @__PURE__ */ e.createElement(
          "img",
          {
            src: Ce,
            alt: "Palette",
            width: "18",
            height: "18",
            style: { display: "block" }
          }
        ),
        action: "TEXT_COLOR",
        title: "Text Color"
      },
      { type: "sep", cols: 1 },
      // 9. Font Controls (1 col)
      { type: "dropdown", label: "Font..." },
      { type: "dropdown", label: "Size" }
    ]
  },
  {
    label: "∈ ∞",
    items: [
      // Group 1 – Cancel (1 col × 1 row)
      { type: "sep", cols: 1, small: !0 },
      { label: "⌿", insert: "\\cancel{#?}", isWidget: !0, title: "Cancel strike" },
      // Group 2 – Arithmetic (3 cols × 3 rows)
      {
        type: "sep",
        cols: 3,
        small: !0,
        moreItems: [
          { label: "∖", insert: "\\setminus", title: "Set minus" },
          { label: "\\", insert: "\\backslash", title: "Reverse solidus" },
          { label: "∓", insert: "\\mp", title: "Minus or plus" }
        ]
      },
      { label: "+", insert: "+", title: "Plus" },
      { label: "×", insert: "\\times", title: "Multiply" },
      { label: "·", insert: "\\cdot", title: "Dot product" },
      { label: "−", insert: "-", title: "Minus" },
      { label: "÷", insert: "\\div", title: "Divide sign" },
      { label: "/", insert: "/", title: "Slash" },
      { label: "±", insert: "\\pm", title: "Plus-minus" },
      { label: "*", insert: "\\ast", title: "Asterisk" },
      { label: "○", insert: "\\circ", title: "Circle" },
      // Group 3 – Constants & Symbols (3 cols × 3 rows)
      {
        type: "sep",
        cols: 3,
        small: !0,
        moreItems: [
          { label: "‴", insert: "\\prime\\prime\\prime", title: "Triple prime" },
          { label: "⁗", insert: "\\prime\\prime\\prime\\prime", title: "Quadruple prime" },
          { label: "‵", insert: "\\backprime", title: "Reversed prime" }
        ]
      },
      { label: "π", insert: "\\pi", title: "Pi" },
      { label: "∂", insert: "\\partial", title: "Partial derivative" },
      { label: "°", insert: "^\\circ", title: "Degree" },
      { label: "∞", insert: "\\infty", title: "Infinity" },
      { label: "Δ", insert: "\\Delta", title: "Delta" },
      { label: "'", insert: "'", title: "Prime" },
      { label: "∅", insert: "\\emptyset", title: "Empty set" },
      { label: "∇", insert: "\\nabla", title: "Nabla / Gradient" },
      { label: "''", insert: "''", title: "Double prime" },
      // Group 4 – Equality (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        moreCols: 2,
        small: !0,
        moreItems: [
          { label: "≠", insert: "\\neq", title: "Not equal" },
          { label: "≉", insert: "\\not\\approx", title: "Not almost equal to" },
          { label: "≢", insert: "\\not\\equiv", title: "Not identical to" },
          { label: "≁", insert: "\\not\\sim", title: "Not similar" }
        ]
      },
      { label: "=", insert: "=", title: "Equals" },
      { label: "≡", insert: "\\equiv", title: "Equivalent" },
      { label: "∼", insert: "\\sim", title: "Similar to" },
      { label: "≈", insert: "\\approx", title: "Approximately equal" },
      { label: "≃", insert: "\\simeq", title: "Asymptotically equal" },
      { label: "≅", insert: "\\cong", title: "Congruent" },
      // Group 5 – Comparison (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        small: !0,
        moreCols: 3,
        moreItems: [
          { label: "≨", insert: "\\lneqq", title: "Less than but not equal to" },
          { label: "≫", insert: "\\gg", title: "Much greater than" },
          { label: "≻", insert: "\\succ", title: "Succeeds" },
          { label: "≩", insert: "\\gneqq", title: "Greater than but not equal to" },
          { label: "∝", insert: "\\propto", title: "Proportional to" },
          { label: "⊲", insert: "\\triangleleft", title: "Normal subgroup of" },
          { label: "≪", insert: "\\ll", title: "Much less than" },
          { label: "≺", insert: "\\prec", title: "Precedes" },
          { label: "⊳", insert: "\\triangleright", title: "Contains as normal subgroup" }
        ]
      },
      { label: ">", insert: ">", title: "Greater than" },
      { label: "<", insert: "<", title: "Less than" },
      { label: "≥", insert: "\\geq", title: "Greater than or equal" },
      { label: "≤", insert: "\\leq", title: "Less than or equal" },
      { label: "⩾", insert: "\\geqslant", title: "Greater than or equal slant" },
      { label: "⩽", insert: "\\leqslant", title: "Less than or equal slant" },
      // Group 6 – Set Theory (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        small: !0,
        moreCols: 4,
        moreItems: [
          { label: "∉", insert: "\\notin", title: "Not an element of" },
          { label: "∌", insert: "\\not\\ni", title: "Does not contain as member" },
          { label: "⊆", insert: "\\subseteq", title: "Subset of or equal to" },
          { label: "⊇", insert: "\\supseteq", title: "Superset of or equal to" },
          { label: "⊏", insert: "\\sqsubset", title: "Square image of" },
          { label: "⊐", insert: "\\sqsupset", title: "Square original of" },
          { label: "⊑", insert: "\\sqsubseteq", title: "Square image of or equal to" },
          { label: "⊒", insert: "\\sqsupseteq", title: "Square original of or equal to" },
          { label: "⊓", insert: "\\sqcap", title: "Square intersection" },
          { label: "⊔", insert: "\\sqcup", title: "Square union" }
        ]
      },
      { label: "∈", insert: "\\in", title: "Element of" },
      { label: "∋", insert: "\\ni", title: "Contains as member" },
      { label: "∪", insert: "\\cup", title: "Union" },
      { label: "∩", insert: "\\cap", title: "Intersection" },
      { label: "⊂", insert: "\\subset", title: "Subset" },
      { label: "⊃", insert: "\\supset", title: "Superset" },
      // Group 7 – Logic (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        small: !0,
        moreCols: 1,
        moreItems: [
          { label: "∴", insert: "\\therefore", title: "Therefore" },
          { label: "∵", insert: "\\because", title: "Because" }
        ]
      },
      { label: "∧", insert: "\\land", title: "Logical AND" },
      { label: "∨", insert: "\\lor", title: "Logical OR" },
      { label: "¬", insert: "\\neg", title: "Logical NOT" },
      { label: "∀", insert: "\\forall", title: "For all" },
      { label: "∃", insert: "\\exists", title: "Exists" },
      { label: "∄", insert: "\\nexists", title: "Does not exist" },
      // Group 8 – Geometry Lines (1 col × 3 rows)
      {
        type: "sep",
        cols: 1,
        small: !0,
        moreCols: 2,
        moreItems: [
          { label: "∦", insert: "\\nparallel", title: "Not parallel to" },
          { label: "⋄", insert: "\\diamond", title: "Diamond" },
          { label: "∡", insert: "\\measuredangle", title: "Measured angle" },
          { label: "∢", insert: "\\sphericalangle", title: "Spherical angle" }
        ]
      },
      { label: "∠", insert: "\\angle", title: "Angle" },
      { label: "∥", insert: "\\parallel", title: "Parallel" },
      { label: "⊥", insert: "\\perp", title: "Perpendicular" },
      // Group 9 – Geometry Shapes (1 col × 3 rows)
      {
        type: "sep",
        cols: 1,
        small: !0,
        moreCols: 1,
        moreItems: [
          { label: "▭", insert: "▭", title: "Rectangle" },
          { label: "▱", insert: "▱", title: "Parallelogram" }
        ]
      },
      { label: "□", insert: "\\square", title: "Square" },
      { label: "△", insert: "\\triangle", title: "Triangle" },
      { label: "○", insert: "\\circ", title: "Circle" },
      // Group 10 – Circle Ops (1 col × 3 rows)
      {
        type: "sep",
        cols: 1,
        small: !0,
        moreCols: 2,
        moreItems: [
          { label: "⊝", insert: "⊝", title: "Circled dash" },
          { label: "•", insert: "\\bullet", title: "Bullet" },
          { label: "⊛", insert: "⊛", title: "Circled asterisk" },
          { label: "⨸", insert: "⨸", title: "Circled division" }
        ]
      },
      { label: "⊕", insert: "\\oplus", title: "Direct sum / Circled plus" },
      { label: "⊗", insert: "\\otimes", title: "Tensor product / Circled times" },
      { label: "⊙", insert: "\\odot", title: "Circled dot operator" }
    ]
  },
  {
    label: "→ ⋰",
    isTemplate: !0,
    items: [
      {
        type: "sep",
        cols: 3,
        small: !0,
        cls: "cme-trig-subgroup",
        moreCols: 11,
        moreItems: [
          { label: "↗", insert: "\\nearrow", title: "North east arrow" },
          { label: "↘", insert: "\\searrow", title: "South east arrow" },
          { label: "↖", insert: "\\nwarrow", title: "North west arrow" },
          { label: "↙", insert: "\\swarrow", title: "South west arrow" },
          { label: "⤡", insert: "\\nwsearrow", title: "North west and south east arrow" },
          { label: "⤢", insert: "\\neswarrow", title: "North east and south west arrow" },
          { label: "↩", insert: "\\hookleftarrow", title: "Leftwards arrow with hook" },
          { label: "↪", insert: "\\hookrightarrow", title: "Rightwards arrow with hook" },
          { label: "↼", insert: "\\leftharpoonup", title: "Leftwards harpoon with barb upwards" },
          { label: "⇀", insert: "\\rightharpoonup", title: "Rightwards harpoon with barb upwards" },
          { label: "↑", insert: "\\uparrow", title: "Upwards arrow" },
          { label: "↓", insert: "\\downarrow", title: "Downwards arrow" },
          { label: "⇑", insert: "\\Uparrow", title: "Upwards double arrow" },
          { label: "⇓", insert: "\\Downarrow", title: "Downwards double arrow" },
          { label: "⥪", insert: "⥪", title: "Leftwards harpoon over dash" },
          { label: "⥭", insert: "⥭", title: "Dash over rightwards harpoon" },
          { label: "⇋", insert: "\\leftrightharpoons", title: "Leftwards harpoon over rightwards harpoon" },
          { label: "⇌", insert: "\\rightleftharpoons", title: "Rightwards harpoon over leftwards harpoon" },
          { label: "↽", insert: "\\leftharpoondown", title: "Leftwards harpoon with barb downwards" },
          { label: "⇁", insert: "\\rightharpoondown", title: "Rightwards harpoon with barb downwards" },
          { label: "⇆", insert: "\\leftrightarrows", title: "Leftwards arrow over rightwards arrow" },
          { label: "⇄", insert: "\\rightleftarrows", title: "Rightwards arrow over leftwards arrow" },
          { label: "⇅", insert: "\\updownarrows", title: "Upwards arrow leftwards of downwards arrow" },
          { label: "⇵", insert: "\\downuparrows", title: "Downwards arrow leftwards of upwards arrow" },
          { label: "⥮", insert: "\\upharpoonleftdownharpoonright", title: "Up harpoon left down harpoon right" },
          { label: "⥯", insert: "\\downharpoonleftupharpoonright", title: "Down harpoon left up harpoon right" },
          { label: "⥂", insert: "⥂", title: "Rightwards arrow over short leftwards arrow" },
          { label: "⥄", insert: "⥄", title: "Short rightwards arrow over leftwards arrow" },
          { label: "↕", insert: "\\updownarrow", title: "Up-down arrow" },
          { label: "⇕", insert: "\\Updownarrow", title: "Up-down double arrow" },
          { label: "↵", insert: "\\hookleftarrow", title: "Downwards arrow with corner leftwards" }
        ]
      },
      { label: "←", insert: "\\leftarrow", title: "Left arrow" },
      { label: "→", insert: "\\rightarrow", title: "Right arrow" },
      { label: "↔", insert: "\\leftrightarrow", title: "Left-right arrow" },
      { label: "⇐", insert: "\\Leftarrow", title: "Left double arrow" },
      { label: "⇒", insert: "\\Rightarrow", title: "Right double arrow" },
      { label: "⇔", insert: "\\Leftrightarrow", title: "Left-right double arrow" },
      { label: "↤", insert: "\\mapsfrom", title: "Leftwards arrow from bar" },
      { label: "↦", insert: "\\mapsto", title: "Rightwards arrow from bar" },
      { type: "sep", cols: 2, small: !0, cls: "cme-trig-subgroup" },
      { label: "⋮", insert: "\\vdots", title: "Vertical ellipses" },
      { label: "⋰", insert: "⋰", title: "Upright diagonal ellipses" },
      { label: "…", insert: "\\ldots", title: "Horizontal ellipses" },
      { label: "⋱", insert: "\\ddots", title: "Down-right diagonal ellipses" },
      { label: "⋯", insert: "\\cdots", title: "Middle line horizontal ellipses" },
      { type: "sep", cols: 1, small: !0, cls: "cme-trig-subgroup" },
      { label: "-", insert: "-", title: "Short dash (hyphen)" },
      { label: "–", insert: "–", title: "En dash" },
      { label: "—", insert: "—", title: "Em dash" },
      {
        type: "sep",
        cols: 3,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreCols: 11,
        moreItems: [
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "38", x2: "52", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M18 30L6 38L18 46V40H26V36H18V30Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 30L58 38L46 46V40H38V36H46V30Z", fill: "#222", stroke: "none" })), insert: "\\xleftrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrow with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "24", x2: "52", y2: "24", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M18 16L6 24L18 32V26H26V22H18V16Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 16L58 24L46 32V26H38V22H46V16Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "38", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrow[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrow with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "32", x2: "52", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M18 24L6 32L18 40V34H26V30H18V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 24L58 32L46 40V34H38V30H46V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "44", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrow[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrow with Above and Below Labels" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "30", x2: "52", y2: "30", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 22L12 30L24 38V32H34V28H24V22Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "44", x2: "46", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 36L52 44L40 52V46H30V42H40V36Z", fill: "#222", stroke: "none" })), insert: "\\class{cme-flip-v}{\\xtofrom[\\class{cme-flip-v}{#?}]{}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrows with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "20", x2: "52", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 12L12 20L24 28V22H34V18H24V12Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "34", x2: "46", y2: "34", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 26L52 34L40 42V36H30V32H40V26Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\class{cme-flip-v}{\\xtofrom{\\class{cme-flip-v}{#?}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrows with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "26", x2: "52", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 18L12 26L24 34V28H34V24H24V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "40", x2: "46", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 32L52 40L40 48V42H30V38H40V32Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\class{cme-flip-v}{\\xtofrom[\\class{cme-flip-v}{#?}]{\\class{cme-flip-v}{#?}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrows with Above and Below Labels" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "40", x2: "52", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 32L12 40L24 48V42H34V38H24V32Z", fill: "#222", stroke: "none" })), insert: "\\xleftrightarrows{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium Arrow with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "20", x2: "46", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 12L52 20L40 28V22H30V18H40V12Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "34", x2: "52", y2: "34", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 26L12 34L24 42V36H34V32H24V26Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrows[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium Arrow with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "40", x2: "52", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 32L12 40L24 48V42H34V38H24V32Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrows[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium Arrow with Above and Below Labels" },
          //harpoons 1 
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "27", x2: "56", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 19L12 27L22 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "37", x2: "52", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 45L52 37L42 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\xleftrightharpoons{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Harpoons with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "27", x2: "56", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 19L12 27L22 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "37", x2: "52", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 45L52 37L42 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightharpoons[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Harpoons with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "27", x2: "56", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 19L12 27L22 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "37", x2: "52", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 45L52 37L42 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightharpoons[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Harpoons with Above and Below Labels" },
          //harpoons 2
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "27", x2: "52", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 19L52 27L42 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "37", x2: "56", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 45L12 37L22 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\xrightleftharpoons{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Harpoons with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "27", x2: "52", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 19L52 27L42 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "37", x2: "56", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 45L12 37L22 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xrightleftharpoons[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Harpoons with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "27", x2: "52", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 19L52 27L42 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "37", x2: "56", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 45L12 37L22 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xrightleftharpoons[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Harpoons with Above and Below Labels" },
          //arrows 
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "42", x2: "34", y2: "42", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 34L12 42L24 50V44H30V40H24V34Z", fill: "#222", stroke: "none" })), insert: "\\overset{#?}{\\underset{\\leftarrow}{\\rightarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "42", x2: "34", y2: "42", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 34L12 42L24 50V44H30V40H24V34Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "42", x2: "34", y2: "42", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 34L12 42L24 50V44H30V40H24V34Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\overset{#?}{\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Above and Below Labels" },
          //arrow 2 
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "28", x2: "42", y2: "28", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 20L48 28L36 36V30H30V26H36V20Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "44", x2: "42", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 36L12 44L24 52V46H30V42H24V36Z", fill: "#222", stroke: "none" })), insert: "\\overset{#?}{\\overset{\\rightarrow}{\\leftarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "28", x2: "42", y2: "28", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 20L48 28L36 36V30H30V26H36V20Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "44", x2: "42", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 36L12 44L24 52V46H30V42H24V36Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "28", x2: "42", y2: "28", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 20L48 28L36 36V30H30V26H36V20Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "44", x2: "42", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 36L12 44L24 52V46H30V42H24V36Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\overset{#?}{\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Above and Below Labels" }
          //   // Right-left arrow
          //   { label: '↔̅', insert: '\\overset{#?}{\\leftrightarrow}', isWidget: true, title: 'Left-right arrow with overscript' },
          //   { label: '↔̲', insert: '\\underset{#?}{\\leftrightarrow}', isWidget: true, title: 'Left-right arrow with underscript' },
          //   { label: '↔̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftrightarrow}}', isWidget: true, title: 'Left-right arrow with under & overscript' },
          //   { label: '⇆̅', insert: '\\overset{#?}{\\leftrightarrows}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with overscript' },
          //   // Left arrow over right arrow
          //   { label: '⇆̲', insert: '\\underset{#?}{\\leftrightarrows}', isWidget: true, title: 'Left arrow over right arrow with underscript' },
          //   { label: '⇆̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftrightarrows}}', isWidget: true, title: 'Left arrow over right arrow with under & overscript' },
          //   // Right arrow over left arrow
          //   { label: '⇄̅', insert: '\\overset{#?}{\\rightleftarrows}', isWidget: true, title: 'Right arrow over left arrow with overscript' },
          //   { label: '⇄̲', insert: '\\underset{#?}{\\rightleftarrows}', isWidget: true, title: 'Right arrow over left arrow with underscript' },
          //   { label: '⇄̲̅', insert: '\\overset{#?}{\\underset{#?}{\\rightleftarrows}}', isWidget: true, title: 'Right arrow over left arrow with under & overscript' },
          //   // Left harpoon over right harpoon
          //   { label: '⇋̅', insert: '\\overset{#?}{\\leftrightharpoons}', isWidget: true, title: 'Left harpoon over right harpoon with overscript' },
          //   { label: '⇋̲', insert: '\\underset{#?}{\\leftrightharpoons}', isWidget: true, title: 'Left harpoon over right harpoon with underscript' },
          //   { label: '⇋̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftrightharpoons}}', isWidget: true, title: 'Left harpoon over right harpoon with under & overscript' },
          //   // Right harpoon over left harpoon
          //   { label: '⇌̅', insert: '\\overset{#?}{\\rightleftharpoons}', isWidget: true, title: 'Right harpoon over left harpoon with overscript' },
          //   { label: '⇌̲', insert: '\\underset{#?}{\\rightleftharpoons}', isWidget: true, title: 'Right harpoon over left harpoon with underscript' },
          //   { label: '⇌̲̅', insert: '\\overset{#?}{\\underset{#?}{\\rightleftharpoons}}', isWidget: true, title: 'Right harpoon over left harpoon with under & overscript' },
          //   // Rightwards arrow over short leftwards arrow
          //   { label: '⇄̅', insert: '\\overset{#?}{\\underset{\\leftarrow}{\\rightarrow}}', isWidget: true, title: 'Rightwards arrow over short leftwards arrow with overscript' },
          //   { label: '⇄̲', insert: '\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}', isWidget: true, title: 'Rightwards arrow over short leftwards arrow with underscript' },
          //   { label: '⇄̲̅', insert: '\\overset{#?}{\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}}', isWidget: true, title: 'Rightwards arrow over short leftwards arrow with under & overscript' },
          //   // Short rightwards arrow over leftwards arrow
          //   { label: '⇆̅', insert: '\\overset{#?}{\\overset{\\rightarrow}{\\leftarrow}}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with overscript' },
          //   { label: '⇆̲', insert: '\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with underscript' },
          //   { label: '⇆̲̅', insert: '\\overset{#?}{\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with under & overscript' }
        ]
      },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "38", x2: "42", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 30L48 38L36 46V40H28V36H36V30Z", fill: "#222", stroke: "none" })), insert: "\\xrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Arrow with Label Above" },
      // { label: '→̅', insert: '\\overset{#?}{\\rightarrow}', title: 'Right arrow with overscript' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "20", x2: "42", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 12L48 20L36 28V22H28V18H36V12Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "34", width: "10", height: "16", rx: "2" })), insert: "\\xrightarrow[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Arrow with underscript" },
      // { label: '→̲', insert: '\\underset{#?}{\\rightarrow}', title: 'Right arrow with underscript' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "32", x2: "42", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 24L48 32L36 40V34H28V30H36V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "44", width: "10", height: "16", rx: "2" })), insert: "\\xrightarrow[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Arrow with Above and Below Labels" },
      // { label: '→̲̅', insert: '\\overset{#?}{\\underset{#?}{\\rightarrow}}', title: 'Right arrow with under & overscript' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#222" } }, /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "32", x2: "52", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 24L12 32L24 40V34H34V30H24V24Z", fill: "#222", stroke: "none" })), insert: "\\leftarrow", cls: "symbol", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Arrow" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "38", x2: "52", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 30L12 38L24 46V40H34V36H24V30Z", fill: "#222", stroke: "none" })), insert: "\\xleftarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Arrow with Label Above" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "32", x2: "52", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 24L12 32L24 40V34H34V30H24V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "44", width: "10", height: "16", rx: "2" })), insert: "\\xleftarrow[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Arrow with Above and Below Labels" },
      // { label: '←̅', insert: '\\overset{#?}{\\leftarrow}', title: 'Left arrow with overscript' },
      // { label: '←̲', insert: '\\underset{#?}{\\leftarrow}', title: 'Left arrow with underscript' },
      // { label: '←̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftarrow}}', title: 'Left arrow with under & overscript' },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "14", x2: "42", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 6L48 14L36 14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overrightharpoon{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Top Right Harpoon" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "14", x2: "48", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 6L10 14L22 22V16H28V12H22V6Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M42 6L54 14L42 22V16H34V12H42V6Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overleftrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Top Left Right Arrow" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "20", y1: "14", x2: "42", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 6L48 14L36 22V16H30V12H36V6Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Top Right Arrow" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "20", y1: "14", x2: "44", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Overline" }
      // { label: '⇀', insert: '\\overrightharpoon{#?}', title: 'Left harpoon accent' },     // Left harpoon accent
      // { label: '↔', insert: '\\overleftrightarrow{#?}', title: 'Left-right arrow accent' },// Left-right arrow accent
      // { label: '→', insert: '\\overrightarrow{#?}', title: 'Right arrow accent' },     // Arrow accent (right arrow)
      // { label: '¯', insert: '\\overline{#?}', title: 'Bar accent' },           // Bar accent
    ]
  },
  {
    label: "α Ω",
    isTemplate: !0,
    items: [
      // Greek lowercase – 10 cols × 3 rows (25 items)
      {
        type: "sep",
        cols: 10,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 8,
        moreItems: [
          { label: "Α", insert: "A", title: "Capital Alpha" },
          { label: "Β", insert: "B", title: "Capital Beta" },
          { label: "Γ", insert: "\\Gamma", title: "Capital Gamma" },
          { label: "Δ", insert: "\\Delta", title: "Capital Delta" },
          { label: "Ε", insert: "E", title: "Capital Epsilon" },
          { label: "Ζ", insert: "Z", title: "Capital Zeta" },
          { label: "Η", insert: "H", title: "Capital Eta" },
          { label: "Θ", insert: "\\Theta", title: "Capital Theta" },
          { label: "Ι", insert: "I", title: "Capital Iota" },
          { label: "Κ", insert: "K", title: "Capital Kappa" },
          { label: "Λ", insert: "\\Lambda", title: "Capital Lambda" },
          { label: "Μ", insert: "M", title: "Capital Mu" },
          { label: "Ν", insert: "N", title: "Capital Nu" },
          { label: "Ξ", insert: "\\Xi", title: "Capital Xi" },
          { label: "Ο", insert: "O", title: "Capital Omicron" },
          { label: "Π", insert: "\\Pi", title: "Capital Pi" },
          { label: "Ρ", insert: "P", title: "Capital Rho" },
          { label: "Σ", insert: "\\Sigma", title: "Capital Sigma" },
          { label: "Τ", insert: "T", title: "Capital Tau" },
          { label: "Υ", insert: "\\Upsilon", title: "Capital Upsilon" },
          { label: "Φ", insert: "\\Phi", title: "Capital Phi" },
          { label: "Χ", insert: "X", title: "Capital Chi" },
          { label: "Ψ", insert: "\\Psi", title: "Capital Psi" },
          { label: "Ω", insert: "\\Omega", title: "Capital Omega" }
        ]
      },
      { label: "α", insert: "\\alpha", title: "Alpha" },
      { label: "β", insert: "\\beta", title: "Beta" },
      { label: "γ", insert: "\\gamma", title: "Gamma" },
      { label: "δ", insert: "\\delta", title: "Delta" },
      { label: "ε", insert: "\\epsilon", title: "Epsilon" },
      { label: "ζ", insert: "\\zeta", title: "Zeta" },
      { label: "η", insert: "\\eta", title: "Eta" },
      { label: "θ", insert: "\\theta", title: "Theta" },
      { label: "ϑ", insert: "\\vartheta", title: "Vartheta" },
      { label: "ι", insert: "\\iota", title: "Iota" },
      { label: "κ", insert: "\\kappa", title: "Kappa" },
      { label: "λ", insert: "\\lambda", title: "Lambda" },
      { label: "μ", insert: "\\mu", title: "Mu" },
      { label: "ν", insert: "\\nu", title: "Nu" },
      { label: "ξ", insert: "\\xi", title: "Xi" },
      { label: "ο", insert: "o", title: "Omicron" },
      { label: "π", insert: "\\pi", title: "Pi" },
      { label: "ϖ", insert: "\\varpi", title: "Varpi" },
      { label: "ρ", insert: "\\rho", title: "Rho" },
      { label: "ϱ", insert: "\\varrho", title: "Varrho" },
      { label: "ς", insert: "\\varsigma", title: "Varsigma" },
      { label: "σ", insert: "\\sigma", title: "Sigma" },
      { label: "τ", insert: "\\tau", title: "Tau" },
      { label: "υ", insert: "\\upsilon", title: "Upsilon" },
      { label: "φ", insert: "\\phi", title: "Phi" },
      { label: "χ", insert: "\\chi", title: "Chi" },
      { label: "ψ", insert: "\\psi", title: "Psi" },
      { label: "ω", insert: "\\omega", title: "Omega" },
      // Number sets – 2 cols × 1 row
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 18,
        moreItems: [
          // --- Row 1 ---
          { label: "𝔸", insert: "\\mathbb{A}", title: "Mathbb A" },
          { label: "𝔻", insert: "\\mathbb{D}", title: "Mathbb D" },
          { label: "𝔾", insert: "\\mathbb{G}", title: "Mathbb G" },
          { label: "𝕁", insert: "\\mathbb{J}", title: "Mathbb J" },
          { label: "𝕄", insert: "\\mathbb{M}", title: "Mathbb M" },
          { label: "ℙ", insert: "\\mathbb{P}", title: "Mathbb P" },
          { label: "𝕊", insert: "\\mathbb{S}", title: "Mathbb S" },
          { label: "𝕍", insert: "\\mathbb{V}", title: "Mathbb V" },
          { label: "𝕐", insert: "\\mathbb{Y}", title: "Mathbb Y" },
          // Small letters Row 1
          { label: "𝕒", insert: "𝕒", title: "Mathbb a" },
          { label: "𝕕", insert: "𝕕", title: "Mathbb d" },
          { label: "𝕘", insert: "𝕘", title: "Mathbb g" },
          { label: "𝕛", insert: "𝕛", title: "Mathbb j" },
          { label: "𝕞", insert: "𝕞", title: "Mathbb m" },
          { label: "𝕡", insert: "𝕡", title: "Mathbb p" },
          { label: "𝕤", insert: "𝕤", title: "Mathbb s" },
          { label: "𝕧", insert: "𝕧", title: "Mathbb v" },
          { label: "𝕪", insert: "𝕪", title: "Mathbb y" },
          // --- Row 2 ---
          { label: "𝔹", insert: "\\mathbb{B}", title: "Mathbb B" },
          { label: "𝔼", insert: "\\mathbb{E}", title: "Mathbb E" },
          { label: "ℍ", insert: "\\mathbb{H}", title: "Mathbb H" },
          { label: "𝕂", insert: "\\mathbb{K}", title: "Mathbb K" },
          { label: "ℕ", insert: "\\mathbb{N}", title: "Mathbb N" },
          { label: "ℚ", insert: "\\mathbb{Q}", title: "Mathbb Q" },
          { label: "𝕋", insert: "\\mathbb{T}", title: "Mathbb T" },
          { label: "𝕎", insert: "\\mathbb{W}", title: "Mathbb W" },
          { label: "ℤ", insert: "\\mathbb{Z}", title: "Mathbb Z" },
          // Small letters Row 2
          { label: "𝕓", insert: "𝕓", title: "Mathbb b" },
          { label: "𝕖", insert: "𝕖", title: "Mathbb e" },
          { label: "𝕙", insert: "𝕙", title: "Mathbb h" },
          { label: "𝕜", insert: "𝕜", title: "Mathbb k" },
          { label: "𝕟", insert: "𝕟", title: "Mathbb n" },
          { label: "𝕢", insert: "𝕢", title: "Mathbb q" },
          { label: "𝕥", insert: "𝕥", title: "Mathbb t" },
          { label: "𝕨", insert: "𝕨", title: "Mathbb w" },
          { label: "𝕫", insert: "𝕫", title: "Mathbb z" },
          // --- Row 3 ---
          { label: "ℂ", insert: "\\mathbb{C}", title: "Mathbb C" },
          { label: "𝔽", insert: "\\mathbb{F}", title: "Mathbb F" },
          { label: "𝕀", insert: "\\mathbb{I}", title: "Mathbb I" },
          { label: "𝕃", insert: "\\mathbb{L}", title: "Mathbb L" },
          { label: "𝕆", insert: "\\mathbb{O}", title: "Mathbb O" },
          { label: "ℝ", insert: "\\mathbb{R}", title: "Mathbb R" },
          { label: "𝕌", insert: "\\mathbb{U}", title: "Mathbb U" },
          { label: "𝕏", insert: "\\mathbb{X}", title: "Mathbb X" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" },
          // empty placeholder
          // Small letters Row 3
          { label: "𝕔", insert: "𝕔", title: "Mathbb c" },
          { label: "𝕗", insert: "𝕗", title: "Mathbb f" },
          { label: "𝕚", insert: "𝕚", title: "Mathbb i" },
          { label: "𝕝", insert: "𝕝", title: "Mathbb l" },
          { label: "𝕠", insert: "𝕠", title: "Mathbb o" },
          { label: "𝕣", insert: "𝕣", title: "Mathbb r" },
          { label: "𝕦", insert: "𝕦", title: "Mathbb u" },
          { label: "𝕩", insert: "𝕩", title: "Mathbb x" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" }
          // empty placeholder
        ]
      },
      { label: "ℕ", insert: "ℕ", title: "Mathbb N" },
      { label: "ℤ", insert: "ℤ", title: "Mathbb Z" },
      { label: "ℚ", insert: "ℚ", title: "Mathbb Q" },
      { label: "ℂ", insert: "ℂ", title: "Mathbb C" },
      { label: "ℝ", insert: "ℝ", title: "Mathbb R" },
      { label: "ℙ", insert: "ℙ", title: "Mathbb P" },
      // Fraktur / Script / Special – 1 col × 3 rows
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 18,
        moreItems: [
          // --- Row 1 ---
          { label: "𝔄", insert: "\\mathfrak{A}", title: "Mathfrak A" },
          { label: "𝔇", insert: "\\mathfrak{D}", title: "Mathfrak D" },
          { label: "𝔊", insert: "\\mathfrak{G}", title: "Mathfrak G" },
          { label: "𝔍", insert: "\\mathfrak{J}", title: "Mathfrak J" },
          { label: "𝔐", insert: "\\mathfrak{M}", title: "Mathfrak M" },
          { label: "𝔓", insert: "\\mathfrak{P}", title: "Mathfrak P" },
          { label: "𝔖", insert: "\\mathfrak{S}", title: "Mathfrak S" },
          { label: "𝔙", insert: "\\mathfrak{V}", title: "Mathfrak V" },
          { label: "𝔜", insert: "\\mathfrak{Y}", title: "Mathfrak Y" },
          // Small letters Row 1
          { label: "𝔞", insert: "\\mathfrak{a}", title: "Mathfrak a" },
          { label: "𝔡", insert: "\\mathfrak{d}", title: "Mathfrak d" },
          { label: "𝔤", insert: "\\mathfrak{g}", title: "Mathfrak g" },
          { label: "𝔧", insert: "\\mathfrak{j}", title: "Mathfrak j" },
          { label: "𝔪", insert: "\\mathfrak{m}", title: "Mathfrak m" },
          { label: "𝔭", insert: "\\mathfrak{p}", title: "Mathfrak p" },
          { label: "𝔰", insert: "\\mathfrak{s}", title: "Mathfrak s" },
          { label: "𝔳", insert: "\\mathfrak{v}", title: "Mathfrak v" },
          { label: "𝔶", insert: "\\mathfrak{y}", title: "Mathfrak y" },
          // --- Row 2 ---
          { label: "𝔅", insert: "\\mathfrak{B}", title: "Mathfrak B" },
          { label: "𝔈", insert: "\\mathfrak{E}", title: "Mathfrak E" },
          { label: "ℌ", insert: "\\mathfrak{H}", title: "Mathfrak H" },
          { label: "𝔎", insert: "\\mathfrak{K}", title: "Mathfrak K" },
          { label: "𝔑", insert: "\\mathfrak{N}", title: "Mathfrak N" },
          { label: "𝔔", insert: "\\mathfrak{Q}", title: "Mathfrak Q" },
          { label: "𝔗", insert: "\\mathfrak{T}", title: "Mathfrak T" },
          { label: "𝔚", insert: "\\mathfrak{W}", title: "Mathfrak W" },
          { label: "ℨ", insert: "\\mathfrak{Z}", title: "Mathfrak Z" },
          // Small letters Row 2
          { label: "𝔟", insert: "\\mathfrak{b}", title: "Mathfrak b" },
          { label: "𝔢", insert: "\\mathfrak{e}", title: "Mathfrak e" },
          { label: "𝔥", insert: "\\mathfrak{h}", title: "Mathfrak h" },
          { label: "𝔨", insert: "\\mathfrak{k}", title: "Mathfrak k" },
          { label: "𝔫", insert: "\\mathfrak{n}", title: "Mathfrak n" },
          { label: "𝔮", insert: "\\mathfrak{q}", title: "Mathfrak q" },
          { label: "𝔱", insert: "\\mathfrak{t}", title: "Mathfrak t" },
          { label: "𝔴", insert: "\\mathfrak{w}", title: "Mathfrak w" },
          { label: "𝔷", insert: "\\mathfrak{z}", title: "Mathfrak z" },
          // --- Row 3 ---
          { label: "ℭ", insert: "\\mathfrak{C}", title: "Mathfrak C" },
          { label: "𝔉", insert: "\\mathfrak{F}", title: "Mathfrak F" },
          { label: "ℑ", insert: "\\mathfrak{I}", title: "Mathfrak I" },
          { label: "𝔏", insert: "\\mathfrak{L}", title: "Mathfrak L" },
          { label: "𝔒", insert: "\\mathfrak{O}", title: "Mathfrak O" },
          { label: "ℜ", insert: "\\mathfrak{R}", title: "Mathfrak R" },
          { label: "𝔘", insert: "\\mathfrak{U}", title: "Mathfrak U" },
          { label: "𝔛", insert: "\\mathfrak{X}", title: "Mathfrak X" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" },
          // empty placeholder
          // Small letters Row 3
          { label: "𝔠", insert: "\\mathfrak{c}", title: "Mathfrak c" },
          { label: "𝔣", insert: "\\mathfrak{f}", title: "Mathfrak f" },
          { label: "𝔦", insert: "\\mathfrak{i}", title: "Mathfrak i" },
          { label: "𝔩", insert: "\\mathfrak{l}", title: "Mathfrak l" },
          { label: "𝔬", insert: "\\mathfrak{o}", title: "Mathfrak o" },
          { label: "𝔯", insert: "\\mathfrak{r}", title: "Mathfrak r" },
          { label: "𝔲", insert: "\\mathfrak{u}", title: "Mathfrak u" },
          { label: "𝔵", insert: "\\mathfrak{x}", title: "Mathfrak x" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" }
          // empty placeholder
        ]
      },
      { label: "𝔄", insert: "\\mathfrak{A}", title: "Mathfrak A" },
      { label: "𝔅", insert: "\\mathfrak{B}", title: "Mathfrak B" },
      { label: "ℭ", insert: "\\mathfrak{C}", title: "Mathfrak C" },
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 18,
        moreItems: [
          // --- Row 1 ---
          { label: "𝒜", insert: "\\mathcal{A}", title: "Mathcal A" },
          { label: "𝒟", insert: "\\mathcal{D}", title: "Mathcal D" },
          { label: "𝒢", insert: "\\mathcal{G}", title: "Mathcal G" },
          { label: "𝒥", insert: "\\mathcal{J}", title: "Mathcal J" },
          { label: "ℳ", insert: "\\mathcal{M}", title: "Mathcal M" },
          { label: "𝒫", insert: "\\mathcal{P}", title: "Mathcal P" },
          { label: "𝒮", insert: "\\mathcal{S}", title: "Mathcal S" },
          { label: "𝒱", insert: "\\mathcal{V}", title: "Mathcal V" },
          { label: "𝒴", insert: "\\mathcal{Y}", title: "Mathcal Y" },
          // Small letters Row 1
          { label: "𝒶", insert: "𝒶", title: "Mathcal a" },
          { label: "𝒹", insert: "𝒹", title: "Mathcal d" },
          { label: "ℊ", insert: "ℊ", title: "Mathcal g" },
          { label: "𝒿", insert: "𝒿", title: "Mathcal j" },
          { label: "𝓂", insert: "𝓂", title: "Mathcal m" },
          { label: "𝓅", insert: "𝓅", title: "Mathcal p" },
          { label: "𝓈", insert: "𝓈", title: "Mathcal s" },
          { label: "𝓋", insert: "𝓋", title: "Mathcal v" },
          { label: "𝓎", insert: "𝓎", title: "Mathcal y" },
          // --- Row 2 ---
          { label: "ℬ", insert: "\\mathcal{B}", title: "Mathcal B" },
          { label: "ℰ", insert: "\\mathcal{E}", title: "Mathcal E" },
          { label: "ℋ", insert: "\\mathcal{H}", title: "Mathcal H" },
          { label: "𝒦", insert: "\\mathcal{K}", title: "Mathcal K" },
          { label: "𝒩", insert: "\\mathcal{N}", title: "Mathcal N" },
          { label: "𝒬", insert: "\\mathcal{Q}", title: "Mathcal Q" },
          { label: "𝒯", insert: "\\mathcal{T}", title: "Mathcal T" },
          { label: "𝒲", insert: "\\mathcal{W}", title: "Mathcal W" },
          { label: "𝒵", insert: "\\mathcal{Z}", title: "Mathcal Z" },
          // Small letters Row 2
          { label: "𝒷", insert: "𝒷", title: "Mathcal b" },
          { label: "ℯ", insert: "ℯ", title: "Mathcal e" },
          { label: "𝒽", insert: "𝒽", title: "Mathcal h" },
          { label: "𝓀", insert: "𝓀", title: "Mathcal k" },
          { label: "𝓃", insert: "𝓃", title: "Mathcal n" },
          { label: "𝓆", insert: "𝓆", title: "Mathcal q" },
          { label: "𝓉", insert: "𝓉", title: "Mathcal t" },
          { label: "𝓌", insert: "𝓌", title: "Mathcal w" },
          { label: "𝓏", insert: "𝓏", title: "Mathcal z" },
          // --- Row 3 ---
          { label: "𝒞", insert: "\\mathcal{C}", title: "Mathcal C" },
          { label: "ℱ", insert: "\\mathcal{F}", title: "Mathcal F" },
          { label: "ℐ", insert: "\\mathcal{I}", title: "Mathcal I" },
          { label: "ℒ", insert: "\\mathcal{L}", title: "Mathcal L" },
          { label: "𝒪", insert: "\\mathcal{O}", title: "Mathcal O" },
          { label: "ℛ", insert: "\\mathcal{R}", title: "Mathcal R" },
          { label: "𝒰", insert: "\\mathcal{U}", title: "Mathcal U" },
          { label: "𝒳", insert: "\\mathcal{X}", title: "Mathcal X" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" },
          // empty placeholder
          // Small letters Row 3
          { label: "𝒸", insert: "𝒸", title: "Mathcal c" },
          { label: "𝒻", insert: "𝒻", title: "Mathcal f" },
          { label: "𝒾", insert: "𝒾", title: "Mathcal i" },
          { label: "𝓁", insert: "𝓁", title: "Mathcal l" },
          { label: "ℴ", insert: "ℴ", title: "Mathcal o" },
          { label: "𝓇", insert: "𝓇", title: "Mathcal r" },
          { label: "𝓊", insert: "𝓊", title: "Mathcal u" },
          { label: "𝓍", insert: "𝓍", title: "Mathcal x" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" }
          // empty placeholder
        ]
      },
      { label: "𝒜", insert: "\\mathcal{A}", title: "Mathcal A" },
      { label: "ℬ", insert: "\\mathcal{B}", title: "Mathcal B" },
      { label: "𝒞", insert: "\\mathcal{C}", title: "Mathcal C" },
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 2,
        moreItems: [
          { label: "ℵ", insert: "\\aleph", title: "Aleph" },
          // Alef
          { label: "ℐ", insert: "\\mathcal{I}", title: "Mathcal I" },
          // Script I
          { label: "℘", insert: "\\wp", title: "Wp" },
          // Script capital P (Weierstrass P)
          { label: "ℨ", insert: "\\mathfrak{Z}", title: "Mathfrak Z" },
          // Z-transform symbol
          { label: "ℱ", insert: "\\mathcal{F}", title: "Mathcal F" }
          // Script capital F
        ]
      },
      { label: "ℑ", insert: "\\Im", title: "Im" },
      { label: "ℜ", insert: "\\Re", title: "Re" },
      { label: "ℓ", insert: "\\ell", title: "Ell" },
      //group chemical
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-trig-subgroup",
        moreCols: 18,
        moreItems: [
          // Row 1
          { label: "H", insert: "\\mathrm{H}", title: "Mathrm H", cls: "pt-unknown" },
          ...Array.from({ length: 16 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "He", insert: "\\mathrm{He}", title: "Mathrm He", cls: "pt-noble" },
          // Row 2
          { label: "Li", insert: "\\mathrm{Li}", title: "Mathrm Li", cls: "pt-alkali" },
          { label: "Be", insert: "\\mathrm{Be}", title: "Mathrm Be", cls: "pt-alkaline" },
          ...Array.from({ length: 10 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "B", insert: "\\mathrm{B}", title: "Mathrm B", cls: "pt-nonmetal" },
          { label: "C", insert: "\\mathrm{C}", title: "Mathrm C", cls: "pt-nonmetal" },
          { label: "N", insert: "\\mathrm{N}", title: "Mathrm N", cls: "pt-nonmetal" },
          { label: "O", insert: "\\mathrm{O}", title: "Mathrm O", cls: "pt-nonmetal" },
          { label: "F", insert: "\\mathrm{F}", title: "Mathrm F", cls: "pt-nonmetal" },
          { label: "Ne", insert: "\\mathrm{Ne}", title: "Mathrm Ne", cls: "pt-noble" },
          // Row 3
          { label: "Na", insert: "\\mathrm{Na}", title: "Mathrm Na", cls: "pt-alkali" },
          { label: "Mg", insert: "\\mathrm{Mg}", title: "Mathrm Mg", cls: "pt-alkaline" },
          ...Array.from({ length: 10 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "Al", insert: "\\mathrm{Al}", title: "Mathrm Al", cls: "pt-metalloid" },
          { label: "Si", insert: "\\mathrm{Si}", title: "Mathrm Si", cls: "pt-metalloid" },
          { label: "P", insert: "\\mathrm{P}", title: "Mathrm P", cls: "pt-nonmetal" },
          { label: "S", insert: "\\mathrm{S}", title: "Mathrm S", cls: "pt-nonmetal" },
          { label: "Cl", insert: "\\mathrm{Cl}", title: "Mathrm Cl", cls: "pt-nonmetal" },
          { label: "Ar", insert: "\\mathrm{Ar}", title: "Mathrm Ar", cls: "pt-noble" },
          // Row 4
          { label: "K", insert: "\\mathrm{K}", title: "Mathrm K", cls: "pt-alkali" },
          { label: "Ca", insert: "\\mathrm{Ca}", title: "Mathrm Ca", cls: "pt-alkaline" },
          { label: "Sc", insert: "\\mathrm{Sc}", title: "Mathrm Sc", cls: "pt-transition" },
          { label: "Ti", insert: "\\mathrm{Ti}", title: "Mathrm Ti", cls: "pt-transition" },
          { label: "V", insert: "\\mathrm{V}", title: "Mathrm V", cls: "pt-transition" },
          { label: "Cr", insert: "\\mathrm{Cr}", title: "Mathrm Cr", cls: "pt-transition" },
          { label: "Mn", insert: "\\mathrm{Mn}", title: "Mathrm Mn", cls: "pt-transition" },
          { label: "Fe", insert: "\\mathrm{Fe}", title: "Mathrm Fe", cls: "pt-transition" },
          { label: "Co", insert: "\\mathrm{Co}", title: "Mathrm Co", cls: "pt-transition" },
          { label: "Ni", insert: "\\mathrm{Ni}", title: "Mathrm Ni", cls: "pt-transition" },
          { label: "Cu", insert: "\\mathrm{Cu}", title: "Mathrm Cu", cls: "pt-transition" },
          { label: "Zn", insert: "\\mathrm{Zn}", title: "Mathrm Zn", cls: "pt-transition" },
          { label: "Ga", insert: "\\mathrm{Ga}", title: "Mathrm Ga", cls: "pt-metalloid" },
          { label: "Ge", insert: "\\mathrm{Ge}", title: "Mathrm Ge", cls: "pt-metalloid" },
          { label: "As", insert: "\\mathrm{As}", title: "Mathrm As", cls: "pt-nonmetal" },
          { label: "Se", insert: "\\mathrm{Se}", title: "Mathrm Se", cls: "pt-nonmetal" },
          { label: "Br", insert: "\\mathrm{Br}", title: "Mathrm Br", cls: "pt-nonmetal" },
          { label: "Kr", insert: "\\mathrm{Kr}", title: "Mathrm Kr", cls: "pt-noble" },
          // Row 5
          { label: "Rb", insert: "\\mathrm{Rb}", title: "Mathrm Rb", cls: "pt-alkali" },
          { label: "Sr", insert: "\\mathrm{Sr}", title: "Mathrm Sr", cls: "pt-alkaline" },
          { label: "Y", insert: "\\mathrm{Y}", title: "Mathrm Y", cls: "pt-transition" },
          { label: "Zr", insert: "\\mathrm{Zr}", title: "Mathrm Zr", cls: "pt-transition" },
          { label: "Nb", insert: "\\mathrm{Nb}", title: "Mathrm Nb", cls: "pt-transition" },
          { label: "Mo", insert: "\\mathrm{Mo}", title: "Mathrm Mo", cls: "pt-transition" },
          { label: "Tc", insert: "\\mathrm{Tc}", title: "Mathrm Tc", cls: "pt-transition" },
          { label: "Ru", insert: "\\mathrm{Ru}", title: "Mathrm Ru", cls: "pt-transition" },
          { label: "Rh", insert: "\\mathrm{Rh}", title: "Mathrm Rh", cls: "pt-transition" },
          { label: "Pd", insert: "\\mathrm{Pd}", title: "Mathrm Pd", cls: "pt-transition" },
          { label: "Ag", insert: "\\mathrm{Ag}", title: "Mathrm Ag", cls: "pt-transition" },
          { label: "Cd", insert: "\\mathrm{Cd}", title: "Mathrm Cd", cls: "pt-transition" },
          { label: "In", insert: "\\mathrm{In}", title: "Mathrm In", cls: "pt-metalloid" },
          { label: "Sn", insert: "\\mathrm{Sn}", title: "Mathrm Sn", cls: "pt-metalloid" },
          { label: "Sb", insert: "\\mathrm{Sb}", title: "Mathrm Sb", cls: "pt-metalloid" },
          { label: "Te", insert: "\\mathrm{Te}", title: "Mathrm Te", cls: "pt-nonmetal" },
          { label: "I", insert: "\\mathrm{I}", title: "Mathrm I", cls: "pt-nonmetal" },
          { label: "Xe", insert: "\\mathrm{Xe}", title: "Mathrm Xe", cls: "pt-noble" },
          // Row 6
          { label: "Cs", insert: "\\mathrm{Cs}", title: "Mathrm Cs", cls: "pt-alkali" },
          { label: "Ba", insert: "\\mathrm{Ba}", title: "Mathrm Ba", cls: "pt-alkaline" },
          { label: "", insert: "", cls: "pt-transition" },
          // Blank pink
          { label: "Hf", insert: "\\mathrm{Hf}", title: "Mathrm Hf", cls: "pt-transition" },
          { label: "Ta", insert: "\\mathrm{Ta}", title: "Mathrm Ta", cls: "pt-transition" },
          { label: "W", insert: "\\mathrm{W}", title: "Mathrm W", cls: "pt-transition" },
          { label: "Re", insert: "\\mathrm{Re}", title: "Mathrm Re", cls: "pt-transition" },
          { label: "Os", insert: "\\mathrm{Os}", title: "Mathrm Os", cls: "pt-transition" },
          { label: "Ir", insert: "\\mathrm{Ir}", title: "Mathrm Ir", cls: "pt-transition" },
          { label: "Pt", insert: "\\mathrm{Pt}", title: "Mathrm Pt", cls: "pt-transition" },
          { label: "Au", insert: "\\mathrm{Au}", title: "Mathrm Au", cls: "pt-transition" },
          { label: "Hg", insert: "\\mathrm{Hg}", title: "Mathrm Hg", cls: "pt-transition" },
          { label: "Tl", insert: "\\mathrm{Tl}", title: "Mathrm Tl", cls: "pt-metalloid" },
          { label: "Pb", insert: "\\mathrm{Pb}", title: "Mathrm Pb", cls: "pt-metalloid" },
          { label: "Bi", insert: "\\mathrm{Bi}", title: "Mathrm Bi", cls: "pt-metalloid" },
          { label: "Po", insert: "\\mathrm{Po}", title: "Mathrm Po", cls: "pt-metalloid" },
          { label: "At", insert: "\\mathrm{At}", title: "Mathrm At", cls: "pt-nonmetal" },
          { label: "Rn", insert: "\\mathrm{Rn}", title: "Mathrm Rn", cls: "pt-noble" },
          // Row 7
          { label: "Fr", insert: "\\mathrm{Fr}", title: "Mathrm Fr", cls: "pt-alkali" },
          { label: "Ra", insert: "\\mathrm{Ra}", title: "Mathrm Ra", cls: "pt-alkaline" },
          { label: "", insert: "", cls: "pt-transition" },
          // Blank pink
          { label: "Rf", insert: "\\mathrm{Rf}", title: "Mathrm Rf", cls: "pt-transition" },
          { label: "Db", insert: "\\mathrm{Db}", title: "Mathrm Db", cls: "pt-transition" },
          { label: "Sg", insert: "\\mathrm{Sg}", title: "Mathrm Sg", cls: "pt-transition" },
          { label: "Bh", insert: "\\mathrm{Bh}", title: "Mathrm Bh", cls: "pt-transition" },
          { label: "Hs", insert: "\\mathrm{Hs}", title: "Mathrm Hs", cls: "pt-transition" },
          { label: "Mt", insert: "\\mathrm{Mt}", title: "Mathrm Mt", cls: "pt-transition" },
          { label: "Ds", insert: "\\mathrm{Ds}", title: "Mathrm Ds", cls: "pt-transition" },
          { label: "Rg", insert: "\\mathrm{Rg}", title: "Mathrm Rg", cls: "pt-transition" },
          { label: "Cn", insert: "\\mathrm{Cn}", title: "Mathrm Cn", cls: "pt-transition" },
          { label: "Nh", insert: "\\mathrm{Nh}", title: "Mathrm Nh", cls: "pt-metalloid" },
          { label: "Fl", insert: "\\mathrm{Fl}", title: "Mathrm Fl", cls: "pt-metalloid" },
          { label: "Mc", insert: "\\mathrm{Mc}", title: "Mathrm Mc", cls: "pt-metalloid" },
          { label: "Lv", insert: "\\mathrm{Lv}", title: "Mathrm Lv", cls: "pt-metalloid" },
          { label: "Ts", insert: "\\mathrm{Ts}", title: "Mathrm Ts", cls: "pt-unknown" },
          { label: "Og", insert: "\\mathrm{Og}", title: "Mathrm Og", cls: "pt-unknown" },
          // Gap Row
          ...Array.from({ length: 18 }, () => ({ label: "", cls: "pt-empty" })),
          // Row Lanthanides
          ...Array.from({ length: 2 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "La", insert: "\\mathrm{La}", title: "Mathrm La", cls: "pt-transition" },
          { label: "Ce", insert: "\\mathrm{Ce}", title: "Mathrm Ce", cls: "pt-lanthanide" },
          { label: "Pr", insert: "\\mathrm{Pr}", title: "Mathrm Pr", cls: "pt-lanthanide" },
          { label: "Nd", insert: "\\mathrm{Nd}", title: "Mathrm Nd", cls: "pt-lanthanide" },
          { label: "Pm", insert: "\\mathrm{Pm}", title: "Mathrm Pm", cls: "pt-lanthanide" },
          { label: "Sm", insert: "\\mathrm{Sm}", title: "Mathrm Sm", cls: "pt-lanthanide" },
          { label: "Eu", insert: "\\mathrm{Eu}", title: "Mathrm Eu", cls: "pt-lanthanide" },
          { label: "Gd", insert: "\\mathrm{Gd}", title: "Mathrm Gd", cls: "pt-lanthanide" },
          { label: "Tb", insert: "\\mathrm{Tb}", title: "Mathrm Tb", cls: "pt-lanthanide" },
          { label: "Dy", insert: "\\mathrm{Dy}", title: "Mathrm Dy", cls: "pt-lanthanide" },
          { label: "Ho", insert: "\\mathrm{Ho}", title: "Mathrm Ho", cls: "pt-lanthanide" },
          { label: "Er", insert: "\\mathrm{Er}", title: "Mathrm Er", cls: "pt-lanthanide" },
          { label: "Tm", insert: "\\mathrm{Tm}", title: "Mathrm Tm", cls: "pt-lanthanide" },
          { label: "Yb", insert: "\\mathrm{Yb}", title: "Mathrm Yb", cls: "pt-lanthanide" },
          { label: "Lu", insert: "\\mathrm{Lu}", title: "Mathrm Lu", cls: "pt-lanthanide" },
          { label: "", cls: "pt-empty" },
          // Row Actinides
          ...Array.from({ length: 2 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "Ac", insert: "\\mathrm{Ac}", title: "Mathrm Ac", cls: "pt-actinide" },
          { label: "Th", insert: "\\mathrm{Th}", title: "Mathrm Th", cls: "pt-actinide" },
          { label: "Pa", insert: "\\mathrm{Pa}", title: "Mathrm Pa", cls: "pt-actinide" },
          { label: "U", insert: "\\mathrm{U}", title: "Mathrm U", cls: "pt-actinide" },
          { label: "Np", insert: "\\mathrm{Np}", title: "Mathrm Np", cls: "pt-actinide" },
          { label: "Pu", insert: "\\mathrm{Pu}", title: "Mathrm Pu", cls: "pt-actinide" },
          { label: "Am", insert: "\\mathrm{Am}", title: "Mathrm Am", cls: "pt-actinide" },
          { label: "Cm", insert: "\\mathrm{Cm}", title: "Mathrm Cm", cls: "pt-actinide" },
          { label: "Bk", insert: "\\mathrm{Bk}", title: "Mathrm Bk", cls: "pt-actinide" },
          { label: "Cf", insert: "\\mathrm{Cf}", title: "Mathrm Cf", cls: "pt-actinide" },
          { label: "Es", insert: "\\mathrm{Es}", title: "Mathrm Es", cls: "pt-actinide" },
          { label: "Fm", insert: "\\mathrm{Fm}", title: "Mathrm Fm", cls: "pt-actinide" },
          { label: "Md", insert: "\\mathrm{Md}", title: "Mathrm Md", cls: "pt-actinide" },
          { label: "No", insert: "\\mathrm{No}", title: "Mathrm No", cls: "pt-actinide" },
          { label: "Lr", insert: "\\mathrm{Lr}", title: "Mathrm Lr", cls: "pt-actinide" },
          { label: "", cls: "pt-empty" }
        ]
      },
      { label: "H", insert: "\\mathrm{H}", title: "Mathrm H" },
      // Hydrogen
      { label: "C", insert: "\\mathrm{C}", title: "Mathrm C" },
      // Carbon
      { label: "N", insert: "\\mathrm{N}", title: "Mathrm N" },
      // Nitrogen
      { label: "O", insert: "\\mathrm{O}", title: "Mathrm O" },
      // Oxygen
      { label: "F", insert: "\\mathrm{F}", title: "Mathrm F" },
      // Fluorine
      { label: "S", insert: "\\mathrm{S}", title: "Mathrm S" }
      // Sulfur
    ]
  },
  {
    label: "bmatrix",
    fontSize: "5px",
    mathLabel: "\\textstyle \\begin{bmatrix}#? & #?\\\\ #? & #?\\end{bmatrix}  \\,  \\begin{cases} #? \\\\ #? \\end{cases}",
    isMatrix: !0,
    items: [
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "10", y: "6", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "6", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "6", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "10", y: "25", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "25", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "25", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "10", y: "44", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "44", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "44", width: "8", height: "14", rx: "1" })), insert: "matrix", cls: "template", title: "3×3 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "4", x2: "8", y2: "60", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("line", { x1: "56", y1: "4", x2: "56", y2: "60", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "38", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "38", width: "8", height: "14", rx: "1" })), insert: "vmatrix", cls: "template", title: "2×2 Determinant" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M14 6H8V58H14", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M50 6H56V58H50", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "38", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "38", width: "8", height: "14", rx: "1" })), insert: "bmatrix", cls: "template", title: "2×2 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 6C8 16 8 48 16 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M48 6C56 16 56 48 48 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "38", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "38", width: "8", height: "14", rx: "1" })), insert: "pmatrix", cls: "template", title: "2×2 Parenthesis Matrix" },
      // { label: '□', insert: 'matrix', cls: 'template', title: 'Matrix' },
      // { label: '|□|', insert: 'vmatrix', cls: 'template', title: 'Vertical bar matrix' },
      // { label: '[□]', insert: 'bmatrix', cls: 'template', title: 'Bracket matrix' },
      // { label: '(□)', insert: 'pmatrix', cls: 'template', title: 'Parenthesis matrix' },
      { type: "sep", cols: 3, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "6", width: "8", height: "10", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "27", width: "8", height: "10", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "48", width: "8", height: "10", rx: "1" })), insert: "\\begin{matrix} #? \\\\ #? \\\\ #? \\end{matrix}", cls: "symbol", directInsert: !0, action: "INSERT_CUSTOM", title: "Vertical Dots" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 6H12V58H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 6H52V58H46", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "10", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "38", width: "8", height: "14", rx: "1" })), insert: "\\begin{bmatrix} #? \\\\ #? \\end{bmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×1 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 6C10 16 10 48 18 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 6C54 16 54 48 46 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "10", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "38", width: "8", height: "14", rx: "1" })), insert: "\\begin{pmatrix} #? \\\\ #? \\end{pmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×1 Parenthesis Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "8", y: "24", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "24", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "48", y: "24", width: "8", height: "14", rx: "1" })), insert: "\\begin{matrix} #? \\,  #? \\,  #? \\end{matrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "1×3 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 18H12V46H16", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M50 18H54V46H50", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "22", width: "8", height: "14", rx: "1" })), insert: "\\begin{bmatrix} #? \\, #? \\end{bmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "1×2 Square Bracket Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 18C12 23 12 41 16 46", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M50 18C54 23 54 41 50 46", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "22", width: "8", height: "14", rx: "1" })), insert: "\\begin{pmatrix} #? \\, #? \\end{pmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "1×2 Parenthesis Matrix" },
      // { label: '□', insert: '\\begin{matrix} #? \\\\ #? \\\\ #? \\end{matrix}', cls: 'template', directInsert: true, title: 'Begin matrix' },
      // { label: '[□ \\ □]', insert: '\\begin{bmatrix} #? \\\\ #? \\end{bmatrix}', cls: 'template', directInsert: true, title: 'Begin bmatrix' },
      // { label: '(□ \\ □)', insert: '\\begin{pmatrix} #? \\\\ #? \\end{pmatrix}', cls: 'template', directInsert: true, title: 'Begin pmatrix' },
      // { label: '□ □ □', insert: '\\begin{matrix} #? \\,  #? \\,  #? \\end{matrix}', cls: 'template', directInsert: true, title: 'Begin matrix' },
      // { label: '[□ & □]', insert: '\\begin{bmatrix} #? \\, #? \\end{bmatrix}', cls: 'template', directInsert: true, title: 'Begin bmatrix' },
      // { label: '(□ & □)', insert: '\\begin{pmatrix} #? \\, #? \\end{pmatrix}', cls: 'template', directInsert: true, title: 'Begin pmatrix' },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 8C12 8 12 12 12 18V26C12 30 10 32 8 32C10 32 12 34 12 38V46C12 52 12 56 16 56", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "34", width: "10", height: "12", rx: "1" })), insert: "\\begin{cases} #? \\\\ #? \\end{cases}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×1 Piecewise Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 8C12 8 12 12 12 18V26C12 30 10 32 8 32C10 32 12 34 12 38V46C12 52 12 56 16 56", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "23", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "39", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "23", y: "34", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "39", y: "34", width: "10", height: "12", rx: "1" })), insert: "\\begin{cases} #? \\, #? \\\\ #? \\, #? \\end{cases}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×2 Piecewise Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "26", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "34", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M48 8C52 8 52 12 52 18V26C52 30 54 32 56 32C54 32 52 34 52 38V46C52 52 52 56 48 56", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left.\\begin{matrix} #? \\\\ #? \\end{matrix}\\right\\}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Piecewise Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "8", y: "8", width: "12", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "12", x2: "38", y2: "12", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "16", x2: "38", y2: "16", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "6", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "8", y: "40", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "46", x2: "36", y2: "46", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "50", x2: "36", y2: "50", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "38", width: "12", height: "12", rx: "1" })), insert: "\\begin{aligned} #? &= #? \\\\ #? &= #? \\end{aligned}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "System of Equations" },
      // // Two rows column with left curly brackets
      // { label: '{', insert: '\\begin{cases} #? \\\\ #? \\end{cases}', cls: 'template', directInsert: true, title: 'Begin cases' },
      // // Piecewise function
      // { label: 'f(x)', insert: '\\begin{cases} #?, \\, #? \\\\ #?, \\, #? \\end{cases}', cls: 'template', directInsert: true, title: 'Begin cases' },
      // // Two rows column with right curly brackets
      // { label: '}', insert: '\\left.\\begin{matrix} #? \\\\ #? \\end{matrix}\\right\\}', cls: 'template', directInsert: true, title: 'Begin matrix' },
      // // Aligned equations
      // { label: '=', insert: '\\begin{aligned} #? &= #? \\\\ #? &= #? \\end{aligned}', cls: 'template', directInsert: true, title: 'Begin aligned' },
      { type: "sep", cols: 2, cls: "cme-trig-subgroup" },
      { label: "⋮", insert: "\\vdots", title: "Vertical ellipses" },
      { label: "⋰", insert: "⋰", title: "Upright diagonal ellipses" },
      { label: "…", insert: "\\ldots", title: "Horizontal ellipses" },
      { label: "⋱", insert: "\\ddots", title: "Down-right diagonal ellipses" },
      {
        type: "sep",
        cols: 1,
        fontSize: "8px",
        cls: "cme-matrix-subgroup",
        moreCols: 3,
        moreItems: [
          // sub addition
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\ \\,#?\\end{array}}{\\;#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction Template" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "10", y1: "26", x2: "26", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\-\\,#?\\end{array}}{\\quad#?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction with Subtraction" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "11", y1: "19", x2: "25", y2: "33", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "25", y1: "19", x2: "11", y2: "33", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\×\\,#?\\end{array}}{\\quad#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction with Multiplication" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M30 4V30H56", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "40", width: "10", height: "16", rx: "1" })), insert: "\\begin{array}{r@{}l} #?\\, & \\class{cme-long-div}{#?} \\\\ & \\; #? \\end{array}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Long Division" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "4", y: "44", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M30 4V36H58", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "44", width: "10", height: "16", rx: "1" })), insert: "\\begin{array}{r@{}l} #?\\, & \\class{cme-long-div}{#?} \\\\ #?\\, & \\; #? \\end{array}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Long Division with Four Terms" },
          //long dividosn
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "0", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "30", y1: "20", x2: "54", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M26 18C34 25 34 47 26 54", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "6", y: "28", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "28", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "52", width: "10", height: "16", rx: "1" })), insert: "#?\\, ) \\!\\!\\!\\!\\! \\begin{array}\\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}} \\\\ \\;\\;#?\\; \\end{array}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Root with Fraction and Subscript" }
          // { label: ' ', insert: '\\frac{\\begin{array}{r}#?\\\\ \\,#?\\end{array}}{\\;#?}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '-', insert: '\\frac{\\begin{array}{r}#?\\\\-\\,#?\\end{array}}{\\quad#?}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '*', insert: '\\frac{\\begin{array}{r}#?\\\\*\\,#?\\end{array}}{\\quad#?}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '÷', insert: '\\begin{array}{r@{}l} #?\\, & \\begin{array}{|@{}l} \\underline{\\;#?\\;\\,} \\end{array} \\\\ & \\; #? \\end{array}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '÷', insert: '\\begin{array}{r@{}l} #?\\, & \\begin{array}{|@{}l} \\underline{\\;#?\\;\\,} \\end{array} \\\\ #?\\, & \\; #? \\end{array}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // // Long division
          // { label: '⟌', insert: '#?\\, ) \\!\\!\\!\\!\\! \\begin{array}\\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}} \\\\ \\;\\;#?\\; \\end{array}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
        ]
      },
      //column addition
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "18", x2: "18", y2: "34", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "10", y1: "26", x2: "26", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\+\\,#?\\end{array}}{\\quad#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction with Addition" },
      //long divison 
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "0", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "30", y1: "20", x2: "54", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M26 18C34 25 34 47 26 54", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "6", y: "28", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "28", width: "10", height: "16", rx: "1" })), insert: "#?\\, ) \\!\\! \\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Root with Fraction" }
      // // Column addition
      // { label: '+', insert: '\\frac{\\begin{array}{r}#?\\\\+\\,#?\\end{array}}{\\quad#?}', isWidget: true, directInsert: true, title: 'Begin array', },
      // // Long division
      // { label: '⟌', insert: '#?\\, ) \\!\\! \\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}}', isWidget: true, directInsert: true, title: 'Vphantom 1', },
    ]
  },
  {
    label: "□̅",
    fontSize: "9px",
    mathLabel: "{#?}^{#?} \\, \\overset{#?}{#?}",
    isTemplate: !0,
    items: [
      { type: "sep", cols: 2, small: !0, cls: "cme-trig-subgroup" },
      // Big fraction
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "2", width: "18", height: "20", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "32", x2: "50", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "40", width: "18", height: "20", rx: "2" })), insert: "\\frac{#0}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction" },
      // { label: 'a/b', insert: '\\frac{#?}{#?}', title: 'Fraction' },
      // Small fraction
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "22", y: "8", width: "12", height: "14", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "32", x2: "50", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "40", width: "12", height: "14", rx: "2" })), insert: "\\tfrac{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction" },
      // { label: 'a⁄b', insert: '\\tfrac{#?}{#?}', title: 'Small fraction' },
      //fraction
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "5", y: "16", width: "18", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "50", x2: "40", y2: "18", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "34", width: "18", height: "20", rx: "1" })), insert: "\\LARGE {}^{#?}/_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Text Fraction" },
      // { label: 'A⁄B', insert: '{#?}/{#?}', title: 'Inline fraction' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "14", y: "16", width: "12", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "50", x2: "40", y2: "18", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "34", width: "12", height: "16", rx: "1" })), insert: "\\scriptsize {}^{#?}/_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Text Fraction" },
      // { label: '⎸/⎹', insert: '\\nicefrac{#?}{#?}', title: 'Nice fraction' },
      { type: "sep", cols: 1, small: !0, cls: "cme-trig-subgroup" },
      // Square root
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M6 34 L14 34 L20 50 L30 10 L54 10", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "36", y: "18", width: "16", height: "20", rx: "2" })), insert: "\\sqrt{#0}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Square Root" },
      // { label: '√', insert: '\\sqrt{#?}', title: 'Square root' },
      // Root (nth root)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M6 36 L14 36 L20 50 L30 10 L56 10", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "12", y: "16", width: "8", height: "12", rx: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "22", width: "12", height: "22", rx: "2" })), insert: "\\sqrt[#?]{#0}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Nth Root Fraction" },
      // { label: 'ⁿ√', insert: '\\sqrt[#?]{#?}', title: 'N-th root' },
      { type: "sep", cols: 3, cls: "cme-matrix-subgroup" },
      // Superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Raised Box" },
      // { label: 'xⁿ', insert: '{#?}^{#?}', title: 'Superscript' },
      // Superscript and subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "36", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Raised Box with Subscript" },
      // { label: 'xⁿₖ', insert: '{#?}_{#?}^{#?}', title: 'Subscript and superscript' },
      // Subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "14", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "36", y: "28", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Lowered Box" },
      // { label: 'xₖ', insert: '{#?}_{#?}', title: 'Subscript' },
      // Left superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "30", y: "22", width: "12", height: "20", rx: "1" })), insert: "{}^{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Lowered Box" },
      // { label: 'ⁿx', insert: '{}^{#?}{#?}', title: 'Left superscript' },
      // Left subscript and superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "8", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "36", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "30", y: "20", width: "12", height: "20", rx: "1" })), insert: "{}_{#?}^{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Superscript and Subscript" },
      // { label: 'ⁿₖx', insert: '{}_{#?}^{#?}{#?}', title: 'Left subscript and superscript' },
      // Left subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "28", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "30", y: "10", width: "12", height: "20", rx: "1" })), insert: "{}_{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Lower Left Box" },
      // { label: 'ₖx', insert: '{}_{#?}{#?}', title: 'Left subscript' },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      // Element over
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "23", y: "28", width: "12", height: "20", rx: "1" })), insert: "\\overset{\\raisebox{2px}{#?}}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Superscript Box" },
      // { label: '□̅', insert: '\\overset{#?}{#?}', title: 'Overscript' },
      // Element under
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 4 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "19", y: "28", width: "12", height: "18", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "21", y: "52", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\underset{\\raisebox{-5px}{#?}}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Subscript Box" },
      // { label: '□̲', insert: '\\underset{#?}{#?}', title: 'Underscript' },
      // Elements under and over
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "8", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "48", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\overset{\\raisebox{2px}{#?}}{\\underset{\\raisebox{-5px}{#?}}{#?}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Superscript and Subscript" },
      // { label: '□̲̅', insert: '\\overset{#?}{\\underset{#?}{#?}}', title: 'Over and underscript' },
      { type: "sep", cols: 1, cls: "cme-matrix-subgroup" },
      // Underscript with brace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "26", y: "4", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M10 34H24C28 34 30 36 32 40C34 36 36 34 40 34H54M10 34V28M54 34V28", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "46", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\underbrace{#?}_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Underbrace" },
      // { label: '⏟', insert: '\\underbrace{#?}_{#?}', title: 'Underbrace' },
      // Overscript with brace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "27", y: "2", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("path", { d: "M10 36V30H24C28 30 30 28 32 24C34 28 36 30 40 30H54V36", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "40", width: "12", height: "20", rx: "1" })), insert: "\\overbrace{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Overbrace" },
      // { label: '⏞', insert: '\\overbrace{#?}^{#?}', title: 'Overbrace' },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      // Box with over and underscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "19", y: "1", width: "10", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "20", width: "16", height: "24", rx: "1", stroke: "#222" }), /* @__PURE__ */ e.createElement("rect", { x: "19", y: "50", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\overset{\\raisebox{0.1em}{#?}}{\\underset{\\raisebox{-0.3em}{#?}}{\\Large #?}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Large Box with Superscript and Subscript" },
      // { label: '□̲̅', insert: '\\overset{#?}{\\underset{#?}{\\square}}', title: 'Box with over and underscript' },
      // Right sub/superscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "1", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}^{\\raisebox{0.6em}{#?}}", isWidget: !0, title: "Subscript and superscript" },
      // Element under
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "16", y: "4", width: "16", height: "24", rx: "1", stroke: "#222" }), /* @__PURE__ */ e.createElement("rect", { x: "19", y: "40", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\underset{\\raisebox{-0.3em}{#?}}{\\Large #?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Large Box with Subscript" },
      // { label: '□̲', insert: '\\underset{#?}{#?}', title: 'Underscript' },
      // Right subscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}", isWidget: !0, title: "Subscript" },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      {
        label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "18", viewBox: "0 0 26 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "2", y: "2", width: "6", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "2", width: "6", height: "12", rx: "1" })),
        insert: "\\enspace",
        cls: "template",
        directInsert: !0,
        action: "INSERT_CUSTOM",
        title: "Horizontal Phantom Space"
      },
      {
        label: /* @__PURE__ */ e.createElement("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", marginLeft: "13px" } }, /* @__PURE__ */ e.createElement("rect", { x: "2", y: "2", width: "6", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "10", y: "2", width: "6", height: "12", rx: "1" })),
        insert: "\\,",
        cls: "template",
        directInsert: !0,
        action: "INSERT_CUSTOM",
        title: "Thin Space"
      },
      {
        label: /* @__PURE__ */ e.createElement("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "2", y: "2", width: "6", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "8", y: "2", width: "6", height: "12", rx: "1" })),
        insert: "\\!",
        cls: "template",
        directInsert: !0,
        action: "INSERT_CUSTOM",
        title: "Negative Thin Space"
      }
      // { label: 'e', insert: 'e' }, { label: 'i', insert: 'i' },
      // { label: 'π', insert: '\\pi' },
      // { label: 'ℝ', insert: '\\mathbb{R}' }, { label: 'ℤ', insert: '\\mathbb{Z}' },
      // { label: 'ℕ', insert: '\\mathbb{N}' }, { label: 'ℚ', insert: '\\mathbb{Q}' },
      // { label: 'ℂ', insert: '\\mathbb{C}' }, { label: '∅', insert: '\\emptyset' },
      // { label: 'ℵ₀', insert: '\\aleph_0' },
      // { label: 'ξ', insert: '\\xi' },
      // { label: 'ρ', insert: '\\rho' }, { label: 'σ', insert: '\\sigma' },
      // { label: 'τ', insert: '\\tau' }, { label: 'υ', insert: '\\upsilon' },
      // { label: 'φ', insert: '\\varphi' }, { label: 'χ', insert: '\\chi' },
      // { label: 'ψ', insert: '\\psi' }, { label: 'ω', insert: '\\omega' },
      // { label: 'Γ', insert: '\\Gamma' },
      // { label: 'Θ', insert: '\\Theta' }, { label: 'Λ', insert: '\\Lambda' },
      // { label: 'Ξ', insert: '\\Xi' }, { label: 'Σ', insert: '\\Sigma' },
      // { label: 'Φ', insert: '\\Phi' }, { label: 'Ψ', insert: '\\Psi' },
      // { label: 'Ω', insert: '\\Omega' },
      // { label: 'θᵢ', insert: '\\theta_{#?}' }, { label: 'λₙ', insert: '\\lambda_{#?}' },
      // { label: 'μₓ', insert: '\\mu_{#?}' }, { label: 'σ²', insert: '\\sigma^{2}' },
      // { label: 'Δx', insert: '\\Delta #?' },
    ]
  },
  {
    label: "( )",
    fontSize: "9px",
    isTemplate: !0,
    mathLabel: "\\left( #? \\right) \\, \\overparen{#?}",
    items: [
      {
        type: "sep",
        cols: 3,
        small: !0,
        moreCols: 2,
        cls: "cme-matrix-subgroup",
        moreItems: [
          // Floor
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 12V52H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M52 12V52H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left\\lfloor#0\\right\\rfloor", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Floor Brackets" },
          // { label: '⌊ ⌋', insert: '\\lfloor #? \\rfloor', isWidget: true, title: 'Lfloor' },
          // Angle bracket with bar
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 18L2 29L10 40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "18", width: "10", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "32", y1: "18", x2: "32", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "18", width: "10", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M54 18L62 29L54 40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\left\\langle#?\\mid#?\\right\\rangle", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Angle Brackets with Vertical Bar" },
          // { label: '〈|', insert: '\\langle #? \\mid #? \\rangle', isWidget: true, title: 'Langle' },
          // Ceiling
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 52V12H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M52 52V12H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left\\lceil#0\\right\\rceil", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Ceiling Brackets" }
          // { label: '⌈ ⌉', insert: '\\lceil #? \\rceil', isWidget: true, title: 'Lceil' },
        ]
      },
      // Parenthes
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12 Q8 32 18 52", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12 Q56 32 46 52", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left(#0\\right)", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Parentheses" },
      // { label: '', insert: '\\left( #? \\right)', title: 'Parentheses' },
      // Vertical bars
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "12", x2: "16", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "48", y1: "12", x2: "48", y2: "52", stroke: "#222", strokeWidth: "4" })), insert: "\\left|#0\\right|", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "vertical bars" },
      // { label: '| |', insert: '\\left| #? \\right|', title: 'Vertical bars' },
      // Angle brackets
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 14L6 32L18 50", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "19", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M46 14L58 32L46 50", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\left\\langle #? \\right\\rangle", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Angle Brackets" },
      // { label: '⟨ ⟩', insert: '\\left\\langle #? \\right\\rangle', title: 'Angle brackets' },
      // Square brackets
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12H12V52H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12H52V52H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left[#0\\right]", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Square Brackets" },
      // { label: '[ ]', insert: '\\left[ #? \\right]', title: 'Square brackets' },
      // Double vertical bars
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "10", y1: "12", x2: "10", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "12", x2: "16", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "48", y1: "12", x2: "48", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("line", { x1: "54", y1: "12", x2: "54", y2: "52", stroke: "#222", strokeWidth: "4" })), insert: "\\left\\Vert#?\\right\\Vert", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Double Vertical Bars" },
      // { label: '‖ ‖', insert: '\\| #? \\|', title: 'Double vertical bars' },
      // Curly brackets
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M20 12C16 12 16 18 18 22C19 24 19 26 16 29C19 32 19 34 18 36C16 40 16 46 20 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M44 12C48 12 48 18 46 22C45 24 45 26 48 29C45 32 45 34 46 36C48 40 48 46 44 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" })), insert: "\\left\\{#0\\right\\}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Curly Braces" },
      // { label: '{ }', insert: '\\left\\{ #? \\right\\}', title: 'Curly brackets' },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Overbrace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 26V20H24C28 20 30 18 32 14C34 18 36 20 40 20H54V26", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overbrace{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Overbrace" },
      // Overgroup
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 26C10 14 54 14 54 26", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overgroup{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Overgroup" },
      // Underbrace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 44H24C28 44 30 46 32 50C34 46 36 44 40 44H54M10 44V38M54 44V38", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "14", width: "12", height: "20", rx: "1" })), insert: "\\underbrace{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Underbrace" },
      // Undergroup
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 38C10 50 54 50 54 38", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "14", width: "12", height: "20", rx: "1" })), insert: "\\undergroup{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Undergroup" },
      { type: "sep", cols: 3, small: !0, cls: "cme-symbol-subgroup" },
      // Overrightharpoon
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 20H48M40 12L48 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overrightharpoon{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right harpoon accent" },
      // Arrow accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 20H48M40 12L48 20M40 28L48 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Arrow accent" },
      // Left-right arrow accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 20H48M40 12L48 20M40 28L48 20M24 12L16 20M24 28L16 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overleftrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left-right arrow accent" },
      // Bar accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 20H46", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Bar accent" },
      // Wide hat
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 24L32 12L46 24", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\class{cme-wide-hat-text}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Wide hat" },
      // Tilde accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M22 20 Q27 16 32 20 T42 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\tilde{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Tilde accent" },
      // Diaeresis accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M28 18v0M36 18v0", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\ddot{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Diaeresis accent" },
      // Dot accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M32 18v0", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\dot{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Dot accent" },
      {
        type: "sep",
        cols: 3,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreItems: [
          // Enclose actuarial
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("path", { d: "M4 2 H20 V22", stroke: "#666", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
            insert: "\\class{cme-enclose-actuarial}{#?}",
            title: "Enclose actuarial"
          },
          // Enclose rounded box
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "2", width: "16", height: "20", rx: "8", ry: "8", stroke: "#666", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
            insert: "\\class{cme-enclose-roundedbox}{#?}",
            title: "Enclose rounded box"
          }
        ]
      },
      // Bar accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 20H46", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Bar accent" },
      // Enclosed left
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "12", x2: "16", y2: "52", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "18", width: "14", height: "28", rx: "2" })), insert: "\\left| #? \\right.", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Enclosed left" },
      // Enclosed box
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "2", width: "16", height: "20", stroke: "#666", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
        insert: "\\class{cme-enclose-box}{#?}",
        forceLabel: !0,
        title: "Enclosed box"
      },
      // Enclosed bottom
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "46", x2: "46", y2: "46", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "20", width: "12", height: "20", rx: "1" })), insert: "\\underline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Enclosed bottom" },
      // Enclosed right
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "48", y1: "12", x2: "48", y2: "52", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "18", width: "14", height: "28", rx: "2" })), insert: "\\left. #? \\right|", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Enclosed right" },
      // Enclosed circle
      { label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("ellipse", { cx: "12", cy: "12", rx: "9", ry: "11", stroke: "#666666", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\class{cme-enclose-circle}{#?}", forceLabel: !0, title: "Enclose circle" },
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreCols: 2,
        moreItems: [
          //vertical
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
            insert: "\\class{cme-vertical-strike}{#?}",
            title: "Vertical strike"
          },
          // Long division
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("path", { d: "M3 22 Q11 12 3 2 H21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "11", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
            insert: ") \\!\\! \\overline{\\vphantom{1}\\;\\;#?\\;}",
            directInsert: !0,
            title: "Long division"
          },
          // Horizontal and vertical strike
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "12", x2: "18", y2: "12", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
            insert: "\\class{cme-horizontal-vertical-strike}{#?}",
            title: "Horizontal and vertical strike"
          }
        ]
      },
      //cancel
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "21", x2: "15", y2: "3", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-cancel-strike}{#0}",
        forceLabel: !0,
        title: "Cancel strike"
      },
      // Horizontal strike
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "12", x2: "18", y2: "12", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-horizontal-strike}{#?}",
        forceLabel: !0,
        title: "Horizontal strike"
      },
      // Down diagonal strike
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "3", x2: "15", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-down-strike}{#0}",
        forceLabel: !0,
        title: "Down diagonal strike"
      },
      // Up and down diagonal strike
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "21", x2: "15", y2: "3", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "3", x2: "15", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-cross-strike}{#?}",
        forceLabel: !0,
        title: "Cross strike"
      }
    ]
  },
  {
    label: "∑ ⋃ ",
    fontSize: "8px",
    mathLabel: "\\sum \\, \\bigcup",
    isTemplate: !0,
    items: [
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Big operator with under and over scripts
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M44 16 L22 16 L34 32 L22 48 L44 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "-3", width: "10", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "56", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\sum_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with limits" },
      // Big operator with side scripts (subscript/superscript)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M38 16 L16 16 L28 32 L16 48 L38 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "2", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "39", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\sum\\nolimits_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with side limits" },
      // Big operator with under script
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M44 16 L22 16 L34 32 L22 48 L44 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "54", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\sum_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with subscript" },
      // Big operator with side script (subscript only)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M38 16 L16 16 L28 32 L16 48 L38 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "39", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\sum\\nolimits_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with side subscript" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Big operator with subscript and superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 16 H46 M22 16 V48 M42 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "-2", width: "10", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "50", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\prod_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with limits" },
      // Big operator with side scripts (subscript/superscript)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 16 H40 M16 16 V48 M36 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "4", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "44", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\prod\\nolimits_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with side limits" },
      // Big operator with subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 16 H46 M22 16 V48 M42 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "50", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\prod_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with subscript" },
      // Big operator with side script (subscript only)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 16 H40 M16 16 V48 M36 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "39", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\prod\\nolimits_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with side subscript" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Base with over and underscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "8", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "48", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\overset{#?}{\\underset{\\raisebox{-4px}{#?}}{#?}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Over and underscript" },
      // Right sub/superscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "1", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}^{\\raisebox{0.6em}{#?}}", isWidget: !0, title: "Subscript and superscript" },
      // Element under
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 4 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "19", y: "28", width: "12", height: "18", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "21", y: "52", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\underset{\\raisebox{-4px}{#?}}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Underscript" },
      // Right subscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}", isWidget: !0, title: "Subscript" },
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreCols: 3,
        moreItems: [
          { label: "⨅", insert: "⨅", title: "Big square cap" },
          // U+2A05 Big square cap
          { label: "∏", insert: "∏", title: "Product" },
          // U+220F Product
          { label: "∑", insert: "∑", title: "Summation" },
          // U+2211 Summation
          { label: "⨆", insert: "⨆", title: "Big square cup" },
          // U+2A06 Big square cup
          { label: "∐", insert: "∐", title: "Coproduct" }
          // U+2210 Coproduct
        ]
      },
      // Big Union
      { label: "⋃", insert: "\\bigcup", title: "Big union" },
      // Big Intersection
      { label: "⋂", insert: "\\bigcap", title: "Big intersection" }
    ]
  },
  // {
  //   label: 'sin/cos', items: [
  //     { label: 'sin', insert: '\\sin' }, { label: 'cos', insert: '\\cos' },
  //     { label: 'tan', insert: '\\tan' }, { label: 'cot', insert: '\\cot' },
  //     { label: 'sec', insert: '\\sec' }, { label: 'csc', insert: '\\csc' },
  //     { label: 'sin(□)', insert: '\\sin\\left(#0\\right)' },
  //     { label: 'cos(□)', insert: '\\cos\\left(#0\\right)' },
  //     { label: 'tan(□)', insert: '\\tan\\left(#0\\right)' },
  //     { label: 'sin⁻¹', insert: '\\sin^{-1}' }, { label: 'cos⁻¹', insert: '\\cos^{-1}' },
  //     { label: 'tan⁻¹', insert: '\\tan^{-1}' },
  //     { label: 'sin²x', insert: '\\sin^{2}\\left(#0\\right)' },
  //     { label: 'cos²x', insert: '\\cos^{2}\\left(#0\\right)' },
  //     { label: 'tan²x', insert: '\\tan^{2}\\left(#0\\right)' },
  //     { label: 'sinh', insert: '\\sinh' }, { label: 'cosh', insert: '\\cosh' },
  //     { label: 'tanh', insert: '\\tanh' },
  //     { label: 'ln', insert: '\\ln' },
  //     { label: 'exp', insert: '\\exp' },
  //   ]
  // },
  {
    label: "∫ lim",
    fontSize: "7px",
    mathLabel: "\\int_{#?}^{#?} \\, \\lim",
    isTemplate: !0,
    items: [
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      //infinity 
      { label: /* @__PURE__ */ e.createElement("svg", { width: "24", height: "26", viewBox: "0 0 44 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "10", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" })), insert: "\\int_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Int" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "40", height: "26", viewBox: "0 0 96 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "10", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "62", y: "38", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", stroke: "none" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "76", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\int_{#?}^{#?} #0 \\, d#?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Definite integral" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "24", height: "26", viewBox: "0 0 44 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" })), insert: "\\int_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Integral with subscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "40", height: "26", viewBox: "0 0 96 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "62", y: "38", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", stroke: "none" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "76", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\int_{#?} #?\\,d#?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Integral with subscript and differential" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      //derivatives
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "42", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "36", fill: "#222", textAnchor: "middle" }, "d")), insert: "\\mathrm{d}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Mathrm d" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "32", x2: "56", y2: "32", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "24", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "8", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "54", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "38", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\frac{d#?}{d#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Derivative" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "44", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "36", fill: "#222", textAnchor: "middle" }, "∂")), insert: "\\partial", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Partial differential" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "32", x2: "56", y2: "32", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "24", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "∂"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "8", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "54", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "∂"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "38", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\frac{\\partial#?}{\\partial #?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Partial derivative" },
      { type: "sep", cols: 1, small: !0, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "32", fill: "#222", stroke: "none", fontSize: "24", fontFamily: "serif", textAnchor: "middle" }, "lim"), /* @__PURE__ */ e.createElement("rect", { x: "14", y: "40", width: "10", height: "14", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("text", { x: "28", y: "52", fill: "#222", stroke: "none", fontSize: "16", fontFamily: "sans-serif" }, "→"), /* @__PURE__ */ e.createElement("text", { x: "44", y: "52", fill: "#222", stroke: "none", fontSize: "18", fontFamily: "serif" }, "∞")), insert: "\\lim_{#?\\to\\infty}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Limit to infinity" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "32", fill: "#222", stroke: "none", fontSize: "24", fontFamily: "serif", textAnchor: "middle" }, "lim"), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "40", width: "16", height: "16", rx: "1", opacity: "0.45" })), insert: "\\lim_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Limit" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 24 L28 24 L20 40 Z", stroke: "#222", strokeWidth: "3", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M34 26 L46 38 M46 26 L34 38", stroke: "#222", strokeWidth: "3", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "50", y: "22", width: "12", height: "20", rx: "1" })), insert: "\\nabla\\times #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Curl" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 24 L36 24 L26 44 Z", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "24", width: "16", height: "20", rx: "1" })), insert: "\\nabla #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Gradient" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 24 L28 24 L20 40 Z", stroke: "#222", strokeWidth: "3", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("circle", { cx: "38", cy: "32", r: "3", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "22", width: "12", height: "20", rx: "1" })), insert: "\\nabla\\cdot #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Divergence" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M26 16 L12 44 L40 44 Z", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "24", width: "16", height: "20", rx: "1" })), insert: "\\Delta #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Laplacian" },
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreItems: [
          { label: "∭", insert: "\\iiint", title: "Triple integral" },
          // { label: '∰', insert: '\\oiiint', title: 'Closed volume integral' },
          { label: "∰", insert: "\\mathop{{\\style{font-size:1em;}{\\iiint}}\\mkern-28mu\\class{wider-circle}{\\bigcirc}\\mkern18mu}", title: "Closed volume integral" }
        ]
      },
      { label: "∫", insert: "\\int", title: "Integral" },
      { label: "∬", insert: "\\iint", title: "Double integral" },
      { label: "∮", insert: "\\oint", title: "Contour integral" },
      // { label: '∯', insert: '\\oiint', title: 'surface integral' },
      { label: "∯", insert: "\\mathop{{\\style{font-size:1em;}{\\iint}}\\mkern-23mu\\class{wide-circle}{\\bigcirc}\\mkern14mu}", title: "Custom surface integral" },
      {
        type: "sep",
        cols: 3,
        cls: "cme-trig-subgroup",
        moreCols: "3",
        moreItems: [
          { label: "csc", insert: "\\csc\\left(#?\\right)", title: "Cosecant" },
          { label: "sec", insert: "\\sec\\left(#?\\right)", title: "Secant" },
          { label: "cot", insert: "\\cot\\left(#?\\right)", title: "Cotangent" },
          { label: "sin⁻¹", insert: "\\sin^{-1}", title: "Inverse sine" },
          { label: "cos⁻¹", insert: "\\cos^{-1}", title: "Inverse cosine" },
          { label: "tan⁻¹", insert: "\\tan^{-1}", title: "Inverse tangent" }
        ]
      },
      { label: "sin", insert: "\\sin", title: "Sine" },
      { label: "cos", insert: "\\cos", title: "Cosine" },
      { label: "tan", insert: "\\tan", title: "Tangent" },
      { label: "log", insert: "\\log", title: "Logarithm" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "2", y: "42", fontFamily: "serif", fontSize: "28", fill: "#222", stroke: "none" }, "log"), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "36", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" })), insert: "\\log_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Logarithm with base" },
      { label: "ln", insert: "\\ln", title: "Natural logarithm" }
      // { label: '∫∫dA', insert: '\\iint_{#?} #0 \\, dA' },
      // { label: '∮C', insert: '\\oint_{#?} #0 \\, d#?' },
      // { label: '∫∫∫dV', insert: '\\iiint_{#?} #0 \\, dV' },
      // { label: '∫_C', insert: '\\int_{C} #0 \\, d#?' },
      // { label: '∮_C', insert: '\\oint_{C} #0 \\, d#?' },
      // { label: '∫∫_D', insert: '\\iint_{D} #0 \\, dA' },
      // { label: 'u-sub', insert: '\\int #0 \\, du' },
      // { label: '∭', insert: '\\iiint' },   // Triple integral
      // { label: '∰', insert: '\\oiiint' },   // Closed volume integral
    ]
  }
  // {
  //   label: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 64 64"
  //       width="20"
  //       height="20"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       style={{ verticalAlign: 'middle' }}
  //     >
  //       <path d="M32 12 L24 24 H40 Z" fill="currentColor" />
  //       <path d="M16 36 C16 48, 48 48, 48 36" />
  //       <path d="M22 36 C22 43, 42 43, 42 36" />
  //     </svg>
  //   ),
  //   items: [
  //     { type: 'sep', cols: 2, cls: 'cme-trig-subgroup' }
  //   ]
  // },
], ht = [
  {
    label: "H₂O",
    isChem: !0,
    items: [
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-trig-subgroup",
        moreCols: 18,
        moreItems: [
          // Row 1
          { label: "H", insert: "\\mathrm{H}", title: "Mathrm H", cls: "pt-unknown" },
          ...Array.from({ length: 16 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "He", insert: "\\mathrm{He}", title: "Mathrm He", cls: "pt-noble" },
          // Row 2
          { label: "Li", insert: "\\mathrm{Li}", title: "Mathrm Li", cls: "pt-alkali" },
          { label: "Be", insert: "\\mathrm{Be}", title: "Mathrm Be", cls: "pt-alkaline" },
          ...Array.from({ length: 10 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "B", insert: "\\mathrm{B}", title: "Mathrm B", cls: "pt-nonmetal" },
          { label: "C", insert: "\\mathrm{C}", title: "Mathrm C", cls: "pt-nonmetal" },
          { label: "N", insert: "\\mathrm{N}", title: "Mathrm N", cls: "pt-nonmetal" },
          { label: "O", insert: "\\mathrm{O}", title: "Mathrm O", cls: "pt-nonmetal" },
          { label: "F", insert: "\\mathrm{F}", title: "Mathrm F", cls: "pt-nonmetal" },
          { label: "Ne", insert: "\\mathrm{Ne}", title: "Mathrm Ne", cls: "pt-noble" },
          // Row 3
          { label: "Na", insert: "\\mathrm{Na}", title: "Mathrm Na", cls: "pt-alkali" },
          { label: "Mg", insert: "\\mathrm{Mg}", title: "Mathrm Mg", cls: "pt-alkaline" },
          ...Array.from({ length: 10 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "Al", insert: "\\mathrm{Al}", title: "Mathrm Al", cls: "pt-metalloid" },
          { label: "Si", insert: "\\mathrm{Si}", title: "Mathrm Si", cls: "pt-metalloid" },
          { label: "P", insert: "\\mathrm{P}", title: "Mathrm P", cls: "pt-nonmetal" },
          { label: "S", insert: "\\mathrm{S}", title: "Mathrm S", cls: "pt-nonmetal" },
          { label: "Cl", insert: "\\mathrm{Cl}", title: "Mathrm Cl", cls: "pt-nonmetal" },
          { label: "Ar", insert: "\\mathrm{Ar}", title: "Mathrm Ar", cls: "pt-noble" },
          // Row 4
          { label: "K", insert: "\\mathrm{K}", title: "Mathrm K", cls: "pt-alkali" },
          { label: "Ca", insert: "\\mathrm{Ca}", title: "Mathrm Ca", cls: "pt-alkaline" },
          { label: "Sc", insert: "\\mathrm{Sc}", title: "Mathrm Sc", cls: "pt-transition" },
          { label: "Ti", insert: "\\mathrm{Ti}", title: "Mathrm Ti", cls: "pt-transition" },
          { label: "V", insert: "\\mathrm{V}", title: "Mathrm V", cls: "pt-transition" },
          { label: "Cr", insert: "\\mathrm{Cr}", title: "Mathrm Cr", cls: "pt-transition" },
          { label: "Mn", insert: "\\mathrm{Mn}", title: "Mathrm Mn", cls: "pt-transition" },
          { label: "Fe", insert: "\\mathrm{Fe}", title: "Mathrm Fe", cls: "pt-transition" },
          { label: "Co", insert: "\\mathrm{Co}", title: "Mathrm Co", cls: "pt-transition" },
          { label: "Ni", insert: "\\mathrm{Ni}", title: "Mathrm Ni", cls: "pt-transition" },
          { label: "Cu", insert: "\\mathrm{Cu}", title: "Mathrm Cu", cls: "pt-transition" },
          { label: "Zn", insert: "\\mathrm{Zn}", title: "Mathrm Zn", cls: "pt-transition" },
          { label: "Ga", insert: "\\mathrm{Ga}", title: "Mathrm Ga", cls: "pt-metalloid" },
          { label: "Ge", insert: "\\mathrm{Ge}", title: "Mathrm Ge", cls: "pt-metalloid" },
          { label: "As", insert: "\\mathrm{As}", title: "Mathrm As", cls: "pt-nonmetal" },
          { label: "Se", insert: "\\mathrm{Se}", title: "Mathrm Se", cls: "pt-nonmetal" },
          { label: "Br", insert: "\\mathrm{Br}", title: "Mathrm Br", cls: "pt-nonmetal" },
          { label: "Kr", insert: "\\mathrm{Kr}", title: "Mathrm Kr", cls: "pt-noble" },
          // Row 5
          { label: "Rb", insert: "\\mathrm{Rb}", title: "Mathrm Rb", cls: "pt-alkali" },
          { label: "Sr", insert: "\\mathrm{Sr}", title: "Mathrm Sr", cls: "pt-alkaline" },
          { label: "Y", insert: "\\mathrm{Y}", title: "Mathrm Y", cls: "pt-transition" },
          { label: "Zr", insert: "\\mathrm{Zr}", title: "Mathrm Zr", cls: "pt-transition" },
          { label: "Nb", insert: "\\mathrm{Nb}", title: "Mathrm Nb", cls: "pt-transition" },
          { label: "Mo", insert: "\\mathrm{Mo}", title: "Mathrm Mo", cls: "pt-transition" },
          { label: "Tc", insert: "\\mathrm{Tc}", title: "Mathrm Tc", cls: "pt-transition" },
          { label: "Ru", insert: "\\mathrm{Ru}", title: "Mathrm Ru", cls: "pt-transition" },
          { label: "Rh", insert: "\\mathrm{Rh}", title: "Mathrm Rh", cls: "pt-transition" },
          { label: "Pd", insert: "\\mathrm{Pd}", title: "Mathrm Pd", cls: "pt-transition" },
          { label: "Ag", insert: "\\mathrm{Ag}", title: "Mathrm Ag", cls: "pt-transition" },
          { label: "Cd", insert: "\\mathrm{Cd}", title: "Mathrm Cd", cls: "pt-transition" },
          { label: "In", insert: "\\mathrm{In}", title: "Mathrm In", cls: "pt-metalloid" },
          { label: "Sn", insert: "\\mathrm{Sn}", title: "Mathrm Sn", cls: "pt-metalloid" },
          { label: "Sb", insert: "\\mathrm{Sb}", title: "Mathrm Sb", cls: "pt-metalloid" },
          { label: "Te", insert: "\\mathrm{Te}", title: "Mathrm Te", cls: "pt-nonmetal" },
          { label: "I", insert: "\\mathrm{I}", title: "Mathrm I", cls: "pt-nonmetal" },
          { label: "Xe", insert: "\\mathrm{Xe}", title: "Mathrm Xe", cls: "pt-noble" },
          // Row 6
          { label: "Cs", insert: "\\mathrm{Cs}", title: "Mathrm Cs", cls: "pt-alkali" },
          { label: "Ba", insert: "\\mathrm{Ba}", title: "Mathrm Ba", cls: "pt-alkaline" },
          { label: "", insert: "", cls: "pt-transition" },
          // Blank pink
          { label: "Hf", insert: "\\mathrm{Hf}", title: "Mathrm Hf", cls: "pt-transition" },
          { label: "Ta", insert: "\\mathrm{Ta}", title: "Mathrm Ta", cls: "pt-transition" },
          { label: "W", insert: "\\mathrm{W}", title: "Mathrm W", cls: "pt-transition" },
          { label: "Re", insert: "\\mathrm{Re}", title: "Mathrm Re", cls: "pt-transition" },
          { label: "Os", insert: "\\mathrm{Os}", title: "Mathrm Os", cls: "pt-transition" },
          { label: "Ir", insert: "\\mathrm{Ir}", title: "Mathrm Ir", cls: "pt-transition" },
          { label: "Pt", insert: "\\mathrm{Pt}", title: "Mathrm Pt", cls: "pt-transition" },
          { label: "Au", insert: "\\mathrm{Au}", title: "Mathrm Au", cls: "pt-transition" },
          { label: "Hg", insert: "\\mathrm{Hg}", title: "Mathrm Hg", cls: "pt-transition" },
          { label: "Tl", insert: "\\mathrm{Tl}", title: "Mathrm Tl", cls: "pt-metalloid" },
          { label: "Pb", insert: "\\mathrm{Pb}", title: "Mathrm Pb", cls: "pt-metalloid" },
          { label: "Bi", insert: "\\mathrm{Bi}", title: "Mathrm Bi", cls: "pt-metalloid" },
          { label: "Po", insert: "\\mathrm{Po}", title: "Mathrm Po", cls: "pt-metalloid" },
          { label: "At", insert: "\\mathrm{At}", title: "Mathrm At", cls: "pt-nonmetal" },
          { label: "Rn", insert: "\\mathrm{Rn}", title: "Mathrm Rn", cls: "pt-noble" },
          // Row 7
          { label: "Fr", insert: "\\mathrm{Fr}", title: "Mathrm Fr", cls: "pt-alkali" },
          { label: "Ra", insert: "\\mathrm{Ra}", title: "Mathrm Ra", cls: "pt-alkaline" },
          { label: "", insert: "", cls: "pt-transition" },
          // Blank pink
          { label: "Rf", insert: "\\mathrm{Rf}", title: "Mathrm Rf", cls: "pt-transition" },
          { label: "Db", insert: "\\mathrm{Db}", title: "Mathrm Db", cls: "pt-transition" },
          { label: "Sg", insert: "\\mathrm{Sg}", title: "Mathrm Sg", cls: "pt-transition" },
          { label: "Bh", insert: "\\mathrm{Bh}", title: "Mathrm Bh", cls: "pt-transition" },
          { label: "Hs", insert: "\\mathrm{Hs}", title: "Mathrm Hs", cls: "pt-transition" },
          { label: "Mt", insert: "\\mathrm{Mt}", title: "Mathrm Mt", cls: "pt-transition" },
          { label: "Ds", insert: "\\mathrm{Ds}", title: "Mathrm Ds", cls: "pt-transition" },
          { label: "Rg", insert: "\\mathrm{Rg}", title: "Mathrm Rg", cls: "pt-transition" },
          { label: "Cn", insert: "\\mathrm{Cn}", title: "Mathrm Cn", cls: "pt-transition" },
          { label: "Nh", insert: "\\mathrm{Nh}", title: "Mathrm Nh", cls: "pt-metalloid" },
          { label: "Fl", insert: "\\mathrm{Fl}", title: "Mathrm Fl", cls: "pt-metalloid" },
          { label: "Mc", insert: "\\mathrm{Mc}", title: "Mathrm Mc", cls: "pt-metalloid" },
          { label: "Lv", insert: "\\mathrm{Lv}", title: "Mathrm Lv", cls: "pt-metalloid" },
          { label: "Ts", insert: "\\mathrm{Ts}", title: "Mathrm Ts", cls: "pt-unknown" },
          { label: "Og", insert: "\\mathrm{Og}", title: "Mathrm Og", cls: "pt-unknown" },
          // Gap Row
          ...Array.from({ length: 18 }, () => ({ label: "", cls: "pt-empty" })),
          // Row Lanthanides
          ...Array.from({ length: 2 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "La", insert: "\\mathrm{La}", title: "Mathrm La", cls: "pt-transition" },
          { label: "Ce", insert: "\\mathrm{Ce}", title: "Mathrm Ce", cls: "pt-lanthanide" },
          { label: "Pr", insert: "\\mathrm{Pr}", title: "Mathrm Pr", cls: "pt-lanthanide" },
          { label: "Nd", insert: "\\mathrm{Nd}", title: "Mathrm Nd", cls: "pt-lanthanide" },
          { label: "Pm", insert: "\\mathrm{Pm}", title: "Mathrm Pm", cls: "pt-lanthanide" },
          { label: "Sm", insert: "\\mathrm{Sm}", title: "Mathrm Sm", cls: "pt-lanthanide" },
          { label: "Eu", insert: "\\mathrm{Eu}", title: "Mathrm Eu", cls: "pt-lanthanide" },
          { label: "Gd", insert: "\\mathrm{Gd}", title: "Mathrm Gd", cls: "pt-lanthanide" },
          { label: "Tb", insert: "\\mathrm{Tb}", title: "Mathrm Tb", cls: "pt-lanthanide" },
          { label: "Dy", insert: "\\mathrm{Dy}", title: "Mathrm Dy", cls: "pt-lanthanide" },
          { label: "Ho", insert: "\\mathrm{Ho}", title: "Mathrm Ho", cls: "pt-lanthanide" },
          { label: "Er", insert: "\\mathrm{Er}", title: "Mathrm Er", cls: "pt-lanthanide" },
          { label: "Tm", insert: "\\mathrm{Tm}", title: "Mathrm Tm", cls: "pt-lanthanide" },
          { label: "Yb", insert: "\\mathrm{Yb}", title: "Mathrm Yb", cls: "pt-lanthanide" },
          { label: "Lu", insert: "\\mathrm{Lu}", title: "Mathrm Lu", cls: "pt-lanthanide" },
          { label: "", cls: "pt-empty" },
          // Row Actinides
          ...Array.from({ length: 2 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "Ac", insert: "\\mathrm{Ac}", title: "Mathrm Ac", cls: "pt-actinide" },
          { label: "Th", insert: "\\mathrm{Th}", title: "Mathrm Th", cls: "pt-actinide" },
          { label: "Pa", insert: "\\mathrm{Pa}", title: "Mathrm Pa", cls: "pt-actinide" },
          { label: "U", insert: "\\mathrm{U}", title: "Mathrm U", cls: "pt-actinide" },
          { label: "Np", insert: "\\mathrm{Np}", title: "Mathrm Np", cls: "pt-actinide" },
          { label: "Pu", insert: "\\mathrm{Pu}", title: "Mathrm Pu", cls: "pt-actinide" },
          { label: "Am", insert: "\\mathrm{Am}", title: "Mathrm Am", cls: "pt-actinide" },
          { label: "Cm", insert: "\\mathrm{Cm}", title: "Mathrm Cm", cls: "pt-actinide" },
          { label: "Bk", insert: "\\mathrm{Bk}", title: "Mathrm Bk", cls: "pt-actinide" },
          { label: "Cf", insert: "\\mathrm{Cf}", title: "Mathrm Cf", cls: "pt-actinide" },
          { label: "Es", insert: "\\mathrm{Es}", title: "Mathrm Es", cls: "pt-actinide" },
          { label: "Fm", insert: "\\mathrm{Fm}", title: "Mathrm Fm", cls: "pt-actinide" },
          { label: "Md", insert: "\\mathrm{Md}", title: "Mathrm Md", cls: "pt-actinide" },
          { label: "No", insert: "\\mathrm{No}", title: "Mathrm No", cls: "pt-actinide" },
          { label: "Lr", insert: "\\mathrm{Lr}", title: "Mathrm Lr", cls: "pt-actinide" },
          { label: "", cls: "pt-empty" }
        ]
      },
      { label: "H", insert: "\\mathrm{H}", title: "Mathrm H" },
      // Hydrogen
      { label: "C", insert: "\\mathrm{C}", title: "Mathrm C" },
      // Carbon
      { label: "N", insert: "\\mathrm{N}", title: "Mathrm N" },
      // Nitrogen
      { label: "O", insert: "\\mathrm{O}", title: "Mathrm O" },
      // Oxygen
      { label: "F", insert: "\\mathrm{F}", title: "Mathrm F" },
      // Fluorine
      { label: "S", insert: "\\mathrm{S}", title: "Mathrm S" },
      // Sulfur
      { type: "sep", cols: 1, small: !0, cls: "cme-trig-subgroup" },
      { label: "°", insert: "^\\circ", title: "Degree" },
      { label: "Δ", insert: "\\Delta", title: "Increment / Delta" },
      { label: "mol", insert: "\\mathrm{mol}", title: "Mathrm mol" },
      { type: "sep", cols: 1, small: !0, cls: "cme-trig-subgroup" },
      { label: "-", insert: "-", title: "Single bond" },
      { label: "=", insert: "=", title: "Double bond" },
      { label: "≡", insert: "\\equiv", title: "Triple bond" },
      {
        type: "sep",
        cols: 3,
        small: !0,
        cls: "cme-trig-subgroup",
        moreCols: 3,
        moreItems: [
          { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 32 L 56 32 M 44 20 L 56 32 L 44 44", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "16", height: "12", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "50", width: "16", height: "12", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\underset{#?}{\\overset{#?}{\\rightarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right arrow with overscript and underscript" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 26 L 56 26 M 44 14 L 56 26 M 56 38 L 8 38 M 20 50 L 8 38", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "16", height: "12", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "50", width: "16", height: "12", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\underset{#?}{\\overset{#?}{\\rightleftharpoons}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium with overscript and underscript" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 24 L 56 24 M 46 14 L 56 24 L 46 34 M 56 40 L 8 40 M 18 30 L 8 40 L 18 50", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "16", height: "12", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "50", width: "16", height: "12", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\underset{#?}{\\overset{#?}{\\rightleftarrows}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right left arrows with overscript and underscript" }
        ]
      },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 32 L 56 32 M 44 20 L 56 32 L 44 44", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })), insert: "\\rightarrow", title: "Right arrow" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 44 L 56 44 M 44 32 L 56 44 L 44 56", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "12", width: "16", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\overset{#?}{\\rightarrow}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right arrow with overscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 20 L 56 20 M 44 8 L 56 20 L 44 32", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "36", width: "16", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\underset{#?}{\\rightarrow}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right arrow with underscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 24 L 56 24 M 44 12 L 56 24 M 56 40 L 8 40 M 20 52 L 8 40", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })), insert: "\\rightleftharpoons", title: "Equilibrium" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 32 L 56 32 M 44 20 L 56 32 M 56 48 L 8 48 M 20 60 L 8 48", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "16", height: "14", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\overset{#?}{\\rightleftharpoons}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium with overscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 16 L 56 16 M 44 4 L 56 16 M 56 32 L 8 32 M 20 44 L 8 32", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "48", width: "16", height: "14", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\underset{#?}{\\rightleftharpoons}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium with underscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 22 L 56 22 M 46 12 L 56 22 L 46 32 M 56 42 L 8 42 M 18 32 L 8 42 L 18 52", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })), insert: "\\rightleftarrows", title: "Right left arrows" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 32 L 56 32 M 46 22 L 56 32 L 46 42 M 56 52 L 8 52 M 18 42 L 8 52 L 18 62", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "16", height: "14", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\overset{#?}{\\rightleftarrows}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right left arrows with overscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "14", height: "14", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M 8 12 L 56 12 M 46 2 L 56 12 L 46 22 M 56 32 L 8 32 M 18 22 L 8 32 L 18 42", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "48", width: "16", height: "14", rx: "2", stroke: "#2E7D32", strokeWidth: "4", fill: "none" })), insert: "\\underset{#?}{\\rightleftarrows}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right left arrows with underscript" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Superscript and subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "36", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Raised Box with Subscript" },
      // { label: 'xⁿₖ', insert: '{#?}_{#?}^{#?}', title: 'Subscript and superscript' },
      // Superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Raised Box" },
      // { label: 'xⁿ', insert: '{#?}^{#?}', title: 'Superscript' },
      // Left subscript and superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "8", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "36", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "30", y: "20", width: "12", height: "20", rx: "1" })), insert: "{}_{#?}^{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Superscript and Subscript" },
      // { label: 'ⁿₖx', insert: '{}_{#?}^{#?}{#?}', title: 'Left subscript and superscript' },
      // Subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "14", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "36", y: "28", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Lowered Box" },
      // { label: 'xₖ', insert: '{#?}_{#?}', title: 'Subscript' },
      { type: "sep", cols: 1, small: !0 },
      //parenthesisi
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12 Q8 32 18 52", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12 Q56 32 46 52", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left(#0\\right)", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Parentheses" },
      //square brackets 
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12H12V52H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12H52V52H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left[#0\\right]", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Square Brackets" },
      // Curly brackets
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M20 12C16 12 16 18 18 22C19 24 19 26 16 29C19 32 19 34 18 36C16 40 16 46 20 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("path", { d: "M44 12C48 12 48 18 46 22C45 24 45 26 48 29C45 32 45 34 46 36C48 40 48 46 44 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" })), insert: "\\left\\{ #? \\right\\}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Curly brackets" },
      { type: "sep", cols: 1 },
      // 6. Undo / Redo (1 col)
      { label: "↶", action: "UNDO", title: "Undo" },
      { label: "↷", action: "REDO", title: "Redo" },
      { type: "sep", cols: 2 },
      // 7. Formatting Group (2 cols)
      { label: /* @__PURE__ */ e.createElement(ae, { icon: fe }), action: "BOLD", cls: "template", title: "Bold" },
      { label: /* @__PURE__ */ e.createElement(ae, { icon: ve }), action: "ITALIC", cls: "template", title: "Italic" },
      {
        label: /* @__PURE__ */ e.createElement(
          "img",
          {
            src: Ae,
            alt: "Omega",
            width: "18",
            height: "18",
            style: { display: "block" }
          }
        ),
        title: "Insert Special Character",
        action: "SPECIAL_CHARS"
      },
      {
        label: /* @__PURE__ */ e.createElement(
          "img",
          {
            src: Ce,
            alt: "Palette",
            width: "18",
            height: "18",
            style: { display: "block" }
          }
        ),
        action: "TEXT_COLOR",
        title: "Text Color"
      },
      { type: "sep", cols: 1 },
      // 9. Font Controls (1 col)
      { type: "dropdown", label: "Font..." },
      { type: "dropdown", label: "Size" }
    ]
  },
  {
    label: "∈ ∞",
    items: [
      // Group 1 – Cancel (1 col × 1 row)
      { type: "sep", cols: 1, small: !0 },
      { label: "⌿", insert: "\\cancel{#?}", isWidget: !0, title: "Cancel strike" },
      // Group 2 – Arithmetic (3 cols × 3 rows)
      {
        type: "sep",
        cols: 3,
        small: !0,
        moreItems: [
          { label: "∖", insert: "\\setminus", title: "Set minus" },
          { label: "\\", insert: "\\backslash", title: "Reverse solidus" },
          { label: "∓", insert: "\\mp", title: "Minus or plus" }
        ]
      },
      { label: "+", insert: "+", title: "Plus" },
      { label: "×", insert: "\\times", title: "Multiply" },
      { label: "·", insert: "\\cdot", title: "Dot product" },
      { label: "−", insert: "-", title: "Minus" },
      { label: "÷", insert: "\\div", title: "Divide sign" },
      { label: "/", insert: "/", title: "Slash" },
      { label: "±", insert: "\\pm", title: "Plus-minus" },
      { label: "*", insert: "\\ast", title: "Asterisk" },
      { label: "○", insert: "\\circ", title: "Circle" },
      // Group 3 – Constants & Symbols (3 cols × 3 rows)
      {
        type: "sep",
        cols: 3,
        small: !0,
        moreItems: [
          { label: "‴", insert: "\\prime\\prime\\prime", title: "Triple prime" },
          { label: "⁗", insert: "\\prime\\prime\\prime\\prime", title: "Quadruple prime" },
          { label: "‵", insert: "\\backprime", title: "Reversed prime" }
        ]
      },
      { label: "π", insert: "\\pi", title: "Pi" },
      { label: "∂", insert: "\\partial", title: "Partial derivative" },
      { label: "°", insert: "^\\circ", title: "Degree" },
      { label: "∞", insert: "\\infty", title: "Infinity" },
      { label: "Δ", insert: "\\Delta", title: "Delta" },
      { label: "'", insert: "'", title: "Prime" },
      { label: "∅", insert: "\\emptyset", title: "Empty set" },
      { label: "∇", insert: "\\nabla", title: "Nabla / Gradient" },
      { label: "''", insert: "''", title: "Double prime" },
      // Group 4 – Equality (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        moreCols: 2,
        small: !0,
        moreItems: [
          { label: "≠", insert: "\\neq", title: "Not equal" },
          { label: "≉", insert: "\\not\\approx", title: "Not almost equal to" },
          { label: "≢", insert: "\\not\\equiv", title: "Not identical to" },
          { label: "≁", insert: "\\not\\sim", title: "Not similar" }
        ]
      },
      { label: "=", insert: "=", title: "Equals" },
      { label: "≡", insert: "\\equiv", title: "Equivalent" },
      { label: "∼", insert: "\\sim", title: "Similar to" },
      { label: "≈", insert: "\\approx", title: "Approximately equal" },
      { label: "≃", insert: "\\simeq", title: "Asymptotically equal" },
      { label: "≅", insert: "\\cong", title: "Congruent" },
      // Group 5 – Comparison (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        small: !0,
        moreCols: 3,
        moreItems: [
          { label: "≨", insert: "\\lneqq", title: "Less than but not equal to" },
          { label: "≫", insert: "\\gg", title: "Much greater than" },
          { label: "≻", insert: "\\succ", title: "Succeeds" },
          { label: "≩", insert: "\\gneqq", title: "Greater than but not equal to" },
          { label: "∝", insert: "\\propto", title: "Proportional to" },
          { label: "⊲", insert: "\\triangleleft", title: "Normal subgroup of" },
          { label: "≪", insert: "\\ll", title: "Much less than" },
          { label: "≺", insert: "\\prec", title: "Precedes" },
          { label: "⊳", insert: "\\triangleright", title: "Contains as normal subgroup" }
        ]
      },
      { label: ">", insert: ">", title: "Greater than" },
      { label: "<", insert: "<", title: "Less than" },
      { label: "≥", insert: "\\geq", title: "Greater than or equal" },
      { label: "≤", insert: "\\leq", title: "Less than or equal" },
      { label: "⩾", insert: "\\geqslant", title: "Greater than or equal slant" },
      { label: "⩽", insert: "\\leqslant", title: "Less than or equal slant" },
      // Group 6 – Set Theory (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        small: !0,
        moreCols: 4,
        moreItems: [
          { label: "∉", insert: "\\notin", title: "Not an element of" },
          { label: "∌", insert: "\\not\\ni", title: "Does not contain as member" },
          { label: "⊆", insert: "\\subseteq", title: "Subset of or equal to" },
          { label: "⊇", insert: "\\supseteq", title: "Superset of or equal to" },
          { label: "⊏", insert: "\\sqsubset", title: "Square image of" },
          { label: "⊐", insert: "\\sqsupset", title: "Square original of" },
          { label: "⊑", insert: "\\sqsubseteq", title: "Square image of or equal to" },
          { label: "⊒", insert: "\\sqsupseteq", title: "Square original of or equal to" },
          { label: "⊓", insert: "\\sqcap", title: "Square intersection" },
          { label: "⊔", insert: "\\sqcup", title: "Square union" }
        ]
      },
      { label: "∈", insert: "\\in", title: "Element of" },
      { label: "∋", insert: "\\ni", title: "Contains as member" },
      { label: "∪", insert: "\\cup", title: "Union" },
      { label: "∩", insert: "\\cap", title: "Intersection" },
      { label: "⊂", insert: "\\subset", title: "Subset" },
      { label: "⊃", insert: "\\supset", title: "Superset" },
      // Group 7 – Logic (2 cols × 3 rows)
      {
        type: "sep",
        cols: 2,
        small: !0,
        moreCols: 1,
        moreItems: [
          { label: "∴", insert: "\\therefore", title: "Therefore" },
          { label: "∵", insert: "\\because", title: "Because" }
        ]
      },
      { label: "∧", insert: "\\land", title: "Logical AND" },
      { label: "∨", insert: "\\lor", title: "Logical OR" },
      { label: "¬", insert: "\\neg", title: "Logical NOT" },
      { label: "∀", insert: "\\forall", title: "For all" },
      { label: "∃", insert: "\\exists", title: "Exists" },
      { label: "∄", insert: "\\nexists", title: "Does not exist" },
      // Group 8 – Geometry Lines (1 col × 3 rows)
      {
        type: "sep",
        cols: 1,
        small: !0,
        moreCols: 2,
        moreItems: [
          { label: "∦", insert: "\\nparallel", title: "Not parallel to" },
          { label: "⋄", insert: "\\diamond", title: "Diamond" },
          { label: "∡", insert: "\\measuredangle", title: "Measured angle" },
          { label: "∢", insert: "\\sphericalangle", title: "Spherical angle" }
        ]
      },
      { label: "∠", insert: "\\angle", title: "Angle" },
      { label: "∥", insert: "\\parallel", title: "Parallel" },
      { label: "⊥", insert: "\\perp", title: "Perpendicular" },
      // Group 9 – Geometry Shapes (1 col × 3 rows)
      {
        type: "sep",
        cols: 1,
        small: !0,
        moreCols: 1,
        moreItems: [
          { label: "▭", insert: "▭", title: "Rectangle" },
          { label: "▱", insert: "▱", title: "Parallelogram" }
        ]
      },
      { label: "□", insert: "\\square", title: "Square" },
      { label: "△", insert: "\\triangle", title: "Triangle" },
      { label: "○", insert: "\\circ", title: "Circle" },
      // Group 10 – Circle Ops (1 col × 3 rows)
      {
        type: "sep",
        cols: 1,
        small: !0,
        moreCols: 2,
        moreItems: [
          { label: "⊝", insert: "⊝", title: "Circled dash" },
          { label: "•", insert: "\\bullet", title: "Bullet" },
          { label: "⊛", insert: "⊛", title: "Circled asterisk" },
          { label: "⨸", insert: "⨸", title: "Circled division" }
        ]
      },
      { label: "⊕", insert: "\\oplus", title: "Direct sum / Circled plus" },
      { label: "⊗", insert: "\\otimes", title: "Tensor product / Circled times" },
      { label: "⊙", insert: "\\odot", title: "Circled dot operator" }
    ]
  },
  {
    label: "→ ⋰",
    isTemplate: !0,
    items: [
      {
        type: "sep",
        cols: 3,
        small: !0,
        cls: "cme-trig-subgroup",
        moreCols: 11,
        moreItems: [
          { label: "↗", insert: "\\nearrow", title: "North east arrow" },
          { label: "↘", insert: "\\searrow", title: "South east arrow" },
          { label: "↖", insert: "\\nwarrow", title: "North west arrow" },
          { label: "↙", insert: "\\swarrow", title: "South west arrow" },
          { label: "⤡", insert: "\\nwsearrow", title: "North west and south east arrow" },
          { label: "⤢", insert: "\\neswarrow", title: "North east and south west arrow" },
          { label: "↩", insert: "\\hookleftarrow", title: "Leftwards arrow with hook" },
          { label: "↪", insert: "\\hookrightarrow", title: "Rightwards arrow with hook" },
          { label: "↼", insert: "\\leftharpoonup", title: "Leftwards harpoon with barb upwards" },
          { label: "⇀", insert: "\\rightharpoonup", title: "Rightwards harpoon with barb upwards" },
          { label: "↑", insert: "\\uparrow", title: "Upwards arrow" },
          { label: "↓", insert: "\\downarrow", title: "Downwards arrow" },
          { label: "⇑", insert: "\\Uparrow", title: "Upwards double arrow" },
          { label: "⇓", insert: "\\Downarrow", title: "Downwards double arrow" },
          { label: "⥪", insert: "⥪", title: "Leftwards harpoon over dash" },
          { label: "⥭", insert: "⥭", title: "Dash over rightwards harpoon" },
          { label: "⇋", insert: "\\leftrightharpoons", title: "Leftwards harpoon over rightwards harpoon" },
          { label: "⇌", insert: "\\rightleftharpoons", title: "Rightwards harpoon over leftwards harpoon" },
          { label: "↽", insert: "\\leftharpoondown", title: "Leftwards harpoon with barb downwards" },
          { label: "⇁", insert: "\\rightharpoondown", title: "Rightwards harpoon with barb downwards" },
          { label: "⇆", insert: "\\leftrightarrows", title: "Leftwards arrow over rightwards arrow" },
          { label: "⇄", insert: "\\rightleftarrows", title: "Rightwards arrow over leftwards arrow" },
          { label: "⇅", insert: "\\updownarrows", title: "Upwards arrow leftwards of downwards arrow" },
          { label: "⇵", insert: "\\downuparrows", title: "Downwards arrow leftwards of upwards arrow" },
          { label: "⥮", insert: "\\upharpoonleftdownharpoonright", title: "Up harpoon left down harpoon right" },
          { label: "⥯", insert: "\\downharpoonleftupharpoonright", title: "Down harpoon left up harpoon right" },
          { label: "⥂", insert: "⥂", title: "Rightwards arrow over short leftwards arrow" },
          { label: "⥄", insert: "⥄", title: "Short rightwards arrow over leftwards arrow" },
          { label: "↕", insert: "\\updownarrow", title: "Up-down arrow" },
          { label: "⇕", insert: "\\Updownarrow", title: "Up-down double arrow" },
          { label: "↵", insert: "\\hookleftarrow", title: "Downwards arrow with corner leftwards" }
        ]
      },
      { label: "←", insert: "\\leftarrow", title: "Left arrow" },
      { label: "→", insert: "\\rightarrow", title: "Right arrow" },
      { label: "↔", insert: "\\leftrightarrow", title: "Left-right arrow" },
      { label: "⇐", insert: "\\Leftarrow", title: "Left double arrow" },
      { label: "⇒", insert: "\\Rightarrow", title: "Right double arrow" },
      { label: "⇔", insert: "\\Leftrightarrow", title: "Left-right double arrow" },
      { label: "↤", insert: "\\mapsfrom", title: "Leftwards arrow from bar" },
      { label: "↦", insert: "\\mapsto", title: "Rightwards arrow from bar" },
      { type: "sep", cols: 2, small: !0, cls: "cme-trig-subgroup" },
      { label: "⋮", insert: "\\vdots", title: "Vertical ellipses" },
      { label: "⋰", insert: "⋰", title: "Upright diagonal ellipses" },
      { label: "…", insert: "\\ldots", title: "Horizontal ellipses" },
      { label: "⋱", insert: "\\ddots", title: "Down-right diagonal ellipses" },
      { label: "⋯", insert: "\\cdots", title: "Middle line horizontal ellipses" },
      { type: "sep", cols: 1, small: !0, cls: "cme-trig-subgroup" },
      { label: "-", insert: "-", title: "Short dash (hyphen)" },
      { label: "–", insert: "–", title: "En dash" },
      { label: "—", insert: "—", title: "Em dash" },
      {
        type: "sep",
        cols: 3,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreCols: 11,
        moreItems: [
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "38", x2: "52", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M18 30L6 38L18 46V40H26V36H18V30Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 30L58 38L46 46V40H38V36H46V30Z", fill: "#222", stroke: "none" })), insert: "\\xleftrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrow with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "24", x2: "52", y2: "24", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M18 16L6 24L18 32V26H26V22H18V16Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 16L58 24L46 32V26H38V22H46V16Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "38", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrow[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrow with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "32", x2: "52", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M18 24L6 32L18 40V34H26V30H18V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 24L58 32L46 40V34H38V30H46V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "44", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrow[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrow with Above and Below Labels" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "30", x2: "52", y2: "30", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 22L12 30L24 38V32H34V28H24V22Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "44", x2: "46", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 36L52 44L40 52V46H30V42H40V36Z", fill: "#222", stroke: "none" })), insert: "\\class{cme-flip-v}{\\xtofrom[\\class{cme-flip-v}{#?}]{}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrows with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "20", x2: "52", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 12L12 20L24 28V22H34V18H24V12Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "34", x2: "46", y2: "34", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 26L52 34L40 42V36H30V32H40V26Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\class{cme-flip-v}{\\xtofrom{\\class{cme-flip-v}{#?}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrows with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "26", x2: "52", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 18L12 26L24 34V28H34V24H24V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "40", x2: "46", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 32L52 40L40 48V42H30V38H40V32Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\class{cme-flip-v}{\\xtofrom[\\class{cme-flip-v}{#?}]{\\class{cme-flip-v}{#?}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Arrows with Above and Below Labels" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "40", x2: "52", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 32L12 40L24 48V42H34V38H24V32Z", fill: "#222", stroke: "none" })), insert: "\\xleftrightarrows{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium Arrow with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "20", x2: "46", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 12L52 20L40 28V22H30V18H40V12Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "34", x2: "52", y2: "34", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 26L12 34L24 42V36H34V32H24V26Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrows[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium Arrow with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "40", x2: "52", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 32L12 40L24 48V42H34V38H24V32Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightarrows[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Equilibrium Arrow with Above and Below Labels" },
          //harpoons 1 
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "27", x2: "56", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 19L12 27L22 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "37", x2: "52", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 45L52 37L42 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\xleftrightharpoons{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Harpoons with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "27", x2: "56", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 19L12 27L22 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "37", x2: "52", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 45L52 37L42 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightharpoons[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Harpoons with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "27", x2: "56", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 19L12 27L22 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "37", x2: "52", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 45L52 37L42 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xleftrightharpoons[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Right Harpoons with Above and Below Labels" },
          //harpoons 2
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "27", x2: "52", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 19L52 27L42 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "37", x2: "56", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 45L12 37L22 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\xrightleftharpoons{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Harpoons with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "27", x2: "52", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 19L52 27L42 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "37", x2: "56", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 45L12 37L22 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xrightleftharpoons[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Harpoons with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "27", x2: "52", y2: "27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M42 19L52 27L42 27", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "37", x2: "56", y2: "37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 45L12 37L22 37", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\xrightleftharpoons[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Harpoons with Above and Below Labels" },
          //arrows 
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "42", x2: "34", y2: "42", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 34L12 42L24 50V44H30V40H24V34Z", fill: "#222", stroke: "none" })), insert: "\\overset{#?}{\\underset{\\leftarrow}{\\rightarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "42", x2: "34", y2: "42", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 34L12 42L24 50V44H30V40H24V34Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "26", x2: "46", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M40 18L52 26L40 34V28H30V24H40V18Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "42", x2: "34", y2: "42", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 34L12 42L24 50V44H30V40H24V34Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\overset{#?}{\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Above and Below Labels" },
          //arrow 2 
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "28", x2: "42", y2: "28", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 20L48 28L36 36V30H30V26H36V20Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "44", x2: "42", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 36L12 44L24 52V46H30V42H24V36Z", fill: "#222", stroke: "none" })), insert: "\\overset{#?}{\\overset{\\rightarrow}{\\leftarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Above" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "28", x2: "42", y2: "28", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 20L48 28L36 36V30H30V26H36V20Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "44", x2: "42", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 36L12 44L24 52V46H30V42H24V36Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Label Below" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "28", x2: "42", y2: "28", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 20L48 28L36 36V30H30V26H36V20Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "44", x2: "42", y2: "44", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 36L12 44L24 52V46H30V42H24V36Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "46", width: "10", height: "16", rx: "2" })), insert: "\\overset{#?}{\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Left Arrows with Above and Below Labels" }
          //   // Right-left arrow
          //   { label: '↔̅', insert: '\\overset{#?}{\\leftrightarrow}', isWidget: true, title: 'Left-right arrow with overscript' },
          //   { label: '↔̲', insert: '\\underset{#?}{\\leftrightarrow}', isWidget: true, title: 'Left-right arrow with underscript' },
          //   { label: '↔̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftrightarrow}}', isWidget: true, title: 'Left-right arrow with under & overscript' },
          //   { label: '⇆̅', insert: '\\overset{#?}{\\leftrightarrows}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with overscript' },
          //   // Left arrow over right arrow
          //   { label: '⇆̲', insert: '\\underset{#?}{\\leftrightarrows}', isWidget: true, title: 'Left arrow over right arrow with underscript' },
          //   { label: '⇆̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftrightarrows}}', isWidget: true, title: 'Left arrow over right arrow with under & overscript' },
          //   // Right arrow over left arrow
          //   { label: '⇄̅', insert: '\\overset{#?}{\\rightleftarrows}', isWidget: true, title: 'Right arrow over left arrow with overscript' },
          //   { label: '⇄̲', insert: '\\underset{#?}{\\rightleftarrows}', isWidget: true, title: 'Right arrow over left arrow with underscript' },
          //   { label: '⇄̲̅', insert: '\\overset{#?}{\\underset{#?}{\\rightleftarrows}}', isWidget: true, title: 'Right arrow over left arrow with under & overscript' },
          //   // Left harpoon over right harpoon
          //   { label: '⇋̅', insert: '\\overset{#?}{\\leftrightharpoons}', isWidget: true, title: 'Left harpoon over right harpoon with overscript' },
          //   { label: '⇋̲', insert: '\\underset{#?}{\\leftrightharpoons}', isWidget: true, title: 'Left harpoon over right harpoon with underscript' },
          //   { label: '⇋̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftrightharpoons}}', isWidget: true, title: 'Left harpoon over right harpoon with under & overscript' },
          //   // Right harpoon over left harpoon
          //   { label: '⇌̅', insert: '\\overset{#?}{\\rightleftharpoons}', isWidget: true, title: 'Right harpoon over left harpoon with overscript' },
          //   { label: '⇌̲', insert: '\\underset{#?}{\\rightleftharpoons}', isWidget: true, title: 'Right harpoon over left harpoon with underscript' },
          //   { label: '⇌̲̅', insert: '\\overset{#?}{\\underset{#?}{\\rightleftharpoons}}', isWidget: true, title: 'Right harpoon over left harpoon with under & overscript' },
          //   // Rightwards arrow over short leftwards arrow
          //   { label: '⇄̅', insert: '\\overset{#?}{\\underset{\\leftarrow}{\\rightarrow}}', isWidget: true, title: 'Rightwards arrow over short leftwards arrow with overscript' },
          //   { label: '⇄̲', insert: '\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}', isWidget: true, title: 'Rightwards arrow over short leftwards arrow with underscript' },
          //   { label: '⇄̲̅', insert: '\\overset{#?}{\\underset{#?}{\\underset{\\leftarrow}{\\rightarrow}}}', isWidget: true, title: 'Rightwards arrow over short leftwards arrow with under & overscript' },
          //   // Short rightwards arrow over leftwards arrow
          //   { label: '⇆̅', insert: '\\overset{#?}{\\overset{\\rightarrow}{\\leftarrow}}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with overscript' },
          //   { label: '⇆̲', insert: '\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with underscript' },
          //   { label: '⇆̲̅', insert: '\\overset{#?}{\\underset{#?}{\\overset{\\rightarrow}{\\leftarrow}}}', isWidget: true, title: 'Short rightwards arrow over leftwards arrow with under & overscript' }
        ]
      },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "38", x2: "42", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 30L48 38L36 46V40H28V36H36V30Z", fill: "#222", stroke: "none" })), insert: "\\xrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Arrow with Label Above" },
      // { label: '→̅', insert: '\\overset{#?}{\\rightarrow}', title: 'Right arrow with overscript' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "20", x2: "42", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 12L48 20L36 28V22H28V18H36V12Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "34", width: "10", height: "16", rx: "2" })), insert: "\\xrightarrow[#?]{}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Arrow with underscript" },
      // { label: '→̲', insert: '\\underset{#?}{\\rightarrow}', title: 'Right arrow with underscript' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "32", x2: "42", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 24L48 32L36 40V34H28V30H36V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "44", width: "10", height: "16", rx: "2" })), insert: "\\xrightarrow[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Arrow with Above and Below Labels" },
      // { label: '→̲̅', insert: '\\overset{#?}{\\underset{#?}{\\rightarrow}}', title: 'Right arrow with under & overscript' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#222" } }, /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "32", x2: "52", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 24L12 32L24 40V34H34V30H24V24Z", fill: "#222", stroke: "none" })), insert: "\\leftarrow", cls: "symbol", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Arrow" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "38", x2: "52", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 30L12 38L24 46V40H34V36H24V30Z", fill: "#222", stroke: "none" })), insert: "\\xleftarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Arrow with Label Above" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "2", width: "10", height: "16", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "32", x2: "52", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M24 24L12 32L24 40V34H34V30H24V24Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "44", width: "10", height: "16", rx: "2" })), insert: "\\xleftarrow[#?]{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left Arrow with Above and Below Labels" },
      // { label: '←̅', insert: '\\overset{#?}{\\leftarrow}', title: 'Left arrow with overscript' },
      // { label: '←̲', insert: '\\underset{#?}{\\leftarrow}', title: 'Left arrow with underscript' },
      // { label: '←̲̅', insert: '\\overset{#?}{\\underset{#?}{\\leftarrow}}', title: 'Left arrow with under & overscript' },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "14", x2: "42", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 6L48 14L36 14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overrightharpoon{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Top Right Harpoon" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "14", x2: "48", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M22 6L10 14L22 22V16H28V12H22V6Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M42 6L54 14L42 22V16H34V12H42V6Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overleftrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Top Left Right Arrow" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "20", y1: "14", x2: "42", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M36 6L48 14L36 22V16H30V12H36V6Z", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Top Right Arrow" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "20", y1: "14", x2: "44", y2: "14", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "24", width: "18", height: "20", rx: "2" })), insert: "\\overline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Overline" }
      // { label: '⇀', insert: '\\overrightharpoon{#?}', title: 'Left harpoon accent' },     // Left harpoon accent
      // { label: '↔', insert: '\\overleftrightarrow{#?}', title: 'Left-right arrow accent' },// Left-right arrow accent
      // { label: '→', insert: '\\overrightarrow{#?}', title: 'Right arrow accent' },     // Arrow accent (right arrow)
      // { label: '¯', insert: '\\overline{#?}', title: 'Bar accent' },           // Bar accent
    ]
  },
  {
    label: "α Ω",
    isTemplate: !0,
    items: [
      // Greek lowercase – 10 cols × 3 rows (25 items)
      {
        type: "sep",
        cols: 10,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 8,
        moreItems: [
          { label: "Α", insert: "A", title: "Capital Alpha" },
          { label: "Β", insert: "B", title: "Capital Beta" },
          { label: "Γ", insert: "\\Gamma", title: "Capital Gamma" },
          { label: "Δ", insert: "\\Delta", title: "Capital Delta" },
          { label: "Ε", insert: "E", title: "Capital Epsilon" },
          { label: "Ζ", insert: "Z", title: "Capital Zeta" },
          { label: "Η", insert: "H", title: "Capital Eta" },
          { label: "Θ", insert: "\\Theta", title: "Capital Theta" },
          { label: "Ι", insert: "I", title: "Capital Iota" },
          { label: "Κ", insert: "K", title: "Capital Kappa" },
          { label: "Λ", insert: "\\Lambda", title: "Capital Lambda" },
          { label: "Μ", insert: "M", title: "Capital Mu" },
          { label: "Ν", insert: "N", title: "Capital Nu" },
          { label: "Ξ", insert: "\\Xi", title: "Capital Xi" },
          { label: "Ο", insert: "O", title: "Capital Omicron" },
          { label: "Π", insert: "\\Pi", title: "Capital Pi" },
          { label: "Ρ", insert: "P", title: "Capital Rho" },
          { label: "Σ", insert: "\\Sigma", title: "Capital Sigma" },
          { label: "Τ", insert: "T", title: "Capital Tau" },
          { label: "Υ", insert: "\\Upsilon", title: "Capital Upsilon" },
          { label: "Φ", insert: "\\Phi", title: "Capital Phi" },
          { label: "Χ", insert: "X", title: "Capital Chi" },
          { label: "Ψ", insert: "\\Psi", title: "Capital Psi" },
          { label: "Ω", insert: "\\Omega", title: "Capital Omega" }
        ]
      },
      { label: "α", insert: "\\alpha", title: "Alpha" },
      { label: "β", insert: "\\beta", title: "Beta" },
      { label: "γ", insert: "\\gamma", title: "Gamma" },
      { label: "δ", insert: "\\delta", title: "Delta" },
      { label: "ε", insert: "\\epsilon", title: "Epsilon" },
      { label: "ζ", insert: "\\zeta", title: "Zeta" },
      { label: "η", insert: "\\eta", title: "Eta" },
      { label: "θ", insert: "\\theta", title: "Theta" },
      { label: "ϑ", insert: "\\vartheta", title: "Vartheta" },
      { label: "ι", insert: "\\iota", title: "Iota" },
      { label: "κ", insert: "\\kappa", title: "Kappa" },
      { label: "λ", insert: "\\lambda", title: "Lambda" },
      { label: "μ", insert: "\\mu", title: "Mu" },
      { label: "ν", insert: "\\nu", title: "Nu" },
      { label: "ξ", insert: "\\xi", title: "Xi" },
      { label: "ο", insert: "o", title: "Omicron" },
      { label: "π", insert: "\\pi", title: "Pi" },
      { label: "ϖ", insert: "\\varpi", title: "Varpi" },
      { label: "ρ", insert: "\\rho", title: "Rho" },
      { label: "ϱ", insert: "\\varrho", title: "Varrho" },
      { label: "ς", insert: "\\varsigma", title: "Varsigma" },
      { label: "σ", insert: "\\sigma", title: "Sigma" },
      { label: "τ", insert: "\\tau", title: "Tau" },
      { label: "υ", insert: "\\upsilon", title: "Upsilon" },
      { label: "φ", insert: "\\phi", title: "Phi" },
      { label: "χ", insert: "\\chi", title: "Chi" },
      { label: "ψ", insert: "\\psi", title: "Psi" },
      { label: "ω", insert: "\\omega", title: "Omega" },
      // Number sets – 2 cols × 1 row
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 18,
        moreItems: [
          // --- Row 1 ---
          { label: "𝔸", insert: "\\mathbb{A}", title: "Mathbb A" },
          { label: "𝔻", insert: "\\mathbb{D}", title: "Mathbb D" },
          { label: "𝔾", insert: "\\mathbb{G}", title: "Mathbb G" },
          { label: "𝕁", insert: "\\mathbb{J}", title: "Mathbb J" },
          { label: "𝕄", insert: "\\mathbb{M}", title: "Mathbb M" },
          { label: "ℙ", insert: "\\mathbb{P}", title: "Mathbb P" },
          { label: "𝕊", insert: "\\mathbb{S}", title: "Mathbb S" },
          { label: "𝕍", insert: "\\mathbb{V}", title: "Mathbb V" },
          { label: "𝕐", insert: "\\mathbb{Y}", title: "Mathbb Y" },
          // Small letters Row 1
          { label: "𝕒", insert: "𝕒", title: "Mathbb a" },
          { label: "𝕕", insert: "𝕕", title: "Mathbb d" },
          { label: "𝕘", insert: "𝕘", title: "Mathbb g" },
          { label: "𝕛", insert: "𝕛", title: "Mathbb j" },
          { label: "𝕞", insert: "𝕞", title: "Mathbb m" },
          { label: "𝕡", insert: "𝕡", title: "Mathbb p" },
          { label: "𝕤", insert: "𝕤", title: "Mathbb s" },
          { label: "𝕧", insert: "𝕧", title: "Mathbb v" },
          { label: "𝕪", insert: "𝕪", title: "Mathbb y" },
          // --- Row 2 ---
          { label: "𝔹", insert: "\\mathbb{B}", title: "Mathbb B" },
          { label: "𝔼", insert: "\\mathbb{E}", title: "Mathbb E" },
          { label: "ℍ", insert: "\\mathbb{H}", title: "Mathbb H" },
          { label: "𝕂", insert: "\\mathbb{K}", title: "Mathbb K" },
          { label: "ℕ", insert: "\\mathbb{N}", title: "Mathbb N" },
          { label: "ℚ", insert: "\\mathbb{Q}", title: "Mathbb Q" },
          { label: "𝕋", insert: "\\mathbb{T}", title: "Mathbb T" },
          { label: "𝕎", insert: "\\mathbb{W}", title: "Mathbb W" },
          { label: "ℤ", insert: "\\mathbb{Z}", title: "Mathbb Z" },
          // Small letters Row 2
          { label: "𝕓", insert: "𝕓", title: "Mathbb b" },
          { label: "𝕖", insert: "𝕖", title: "Mathbb e" },
          { label: "𝕙", insert: "𝕙", title: "Mathbb h" },
          { label: "𝕜", insert: "𝕜", title: "Mathbb k" },
          { label: "𝕟", insert: "𝕟", title: "Mathbb n" },
          { label: "𝕢", insert: "𝕢", title: "Mathbb q" },
          { label: "𝕥", insert: "𝕥", title: "Mathbb t" },
          { label: "𝕨", insert: "𝕨", title: "Mathbb w" },
          { label: "𝕫", insert: "𝕫", title: "Mathbb z" },
          // --- Row 3 ---
          { label: "ℂ", insert: "\\mathbb{C}", title: "Mathbb C" },
          { label: "𝔽", insert: "\\mathbb{F}", title: "Mathbb F" },
          { label: "𝕀", insert: "\\mathbb{I}", title: "Mathbb I" },
          { label: "𝕃", insert: "\\mathbb{L}", title: "Mathbb L" },
          { label: "𝕆", insert: "\\mathbb{O}", title: "Mathbb O" },
          { label: "ℝ", insert: "\\mathbb{R}", title: "Mathbb R" },
          { label: "𝕌", insert: "\\mathbb{U}", title: "Mathbb U" },
          { label: "𝕏", insert: "\\mathbb{X}", title: "Mathbb X" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" },
          // empty placeholder
          // Small letters Row 3
          { label: "𝕔", insert: "𝕔", title: "Mathbb c" },
          { label: "𝕗", insert: "𝕗", title: "Mathbb f" },
          { label: "𝕚", insert: "𝕚", title: "Mathbb i" },
          { label: "𝕝", insert: "𝕝", title: "Mathbb l" },
          { label: "𝕠", insert: "𝕠", title: "Mathbb o" },
          { label: "𝕣", insert: "𝕣", title: "Mathbb r" },
          { label: "𝕦", insert: "𝕦", title: "Mathbb u" },
          { label: "𝕩", insert: "𝕩", title: "Mathbb x" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" }
          // empty placeholder
        ]
      },
      { label: "ℕ", insert: "ℕ", title: "Mathbb N" },
      { label: "ℤ", insert: "ℤ", title: "Mathbb Z" },
      { label: "ℚ", insert: "ℚ", title: "Mathbb Q" },
      { label: "ℂ", insert: "ℂ", title: "Mathbb C" },
      { label: "ℝ", insert: "ℝ", title: "Mathbb R" },
      { label: "ℙ", insert: "ℙ", title: "Mathbb P" },
      // Fraktur / Script / Special – 1 col × 3 rows
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 18,
        moreItems: [
          // --- Row 1 ---
          { label: "𝔄", insert: "\\mathfrak{A}", title: "Mathfrak A" },
          { label: "𝔇", insert: "\\mathfrak{D}", title: "Mathfrak D" },
          { label: "𝔊", insert: "\\mathfrak{G}", title: "Mathfrak G" },
          { label: "𝔍", insert: "\\mathfrak{J}", title: "Mathfrak J" },
          { label: "𝔐", insert: "\\mathfrak{M}", title: "Mathfrak M" },
          { label: "𝔓", insert: "\\mathfrak{P}", title: "Mathfrak P" },
          { label: "𝔖", insert: "\\mathfrak{S}", title: "Mathfrak S" },
          { label: "𝔙", insert: "\\mathfrak{V}", title: "Mathfrak V" },
          { label: "𝔜", insert: "\\mathfrak{Y}", title: "Mathfrak Y" },
          // Small letters Row 1
          { label: "𝔞", insert: "\\mathfrak{a}", title: "Mathfrak a" },
          { label: "𝔡", insert: "\\mathfrak{d}", title: "Mathfrak d" },
          { label: "𝔤", insert: "\\mathfrak{g}", title: "Mathfrak g" },
          { label: "𝔧", insert: "\\mathfrak{j}", title: "Mathfrak j" },
          { label: "𝔪", insert: "\\mathfrak{m}", title: "Mathfrak m" },
          { label: "𝔭", insert: "\\mathfrak{p}", title: "Mathfrak p" },
          { label: "𝔰", insert: "\\mathfrak{s}", title: "Mathfrak s" },
          { label: "𝔳", insert: "\\mathfrak{v}", title: "Mathfrak v" },
          { label: "𝔶", insert: "\\mathfrak{y}", title: "Mathfrak y" },
          // --- Row 2 ---
          { label: "𝔅", insert: "\\mathfrak{B}", title: "Mathfrak B" },
          { label: "𝔈", insert: "\\mathfrak{E}", title: "Mathfrak E" },
          { label: "ℌ", insert: "\\mathfrak{H}", title: "Mathfrak H" },
          { label: "𝔎", insert: "\\mathfrak{K}", title: "Mathfrak K" },
          { label: "𝔑", insert: "\\mathfrak{N}", title: "Mathfrak N" },
          { label: "𝔔", insert: "\\mathfrak{Q}", title: "Mathfrak Q" },
          { label: "𝔗", insert: "\\mathfrak{T}", title: "Mathfrak T" },
          { label: "𝔚", insert: "\\mathfrak{W}", title: "Mathfrak W" },
          { label: "ℨ", insert: "\\mathfrak{Z}", title: "Mathfrak Z" },
          // Small letters Row 2
          { label: "𝔟", insert: "\\mathfrak{b}", title: "Mathfrak b" },
          { label: "𝔢", insert: "\\mathfrak{e}", title: "Mathfrak e" },
          { label: "𝔥", insert: "\\mathfrak{h}", title: "Mathfrak h" },
          { label: "𝔨", insert: "\\mathfrak{k}", title: "Mathfrak k" },
          { label: "𝔫", insert: "\\mathfrak{n}", title: "Mathfrak n" },
          { label: "𝔮", insert: "\\mathfrak{q}", title: "Mathfrak q" },
          { label: "𝔱", insert: "\\mathfrak{t}", title: "Mathfrak t" },
          { label: "𝔴", insert: "\\mathfrak{w}", title: "Mathfrak w" },
          { label: "𝔷", insert: "\\mathfrak{z}", title: "Mathfrak z" },
          // --- Row 3 ---
          { label: "ℭ", insert: "\\mathfrak{C}", title: "Mathfrak C" },
          { label: "𝔉", insert: "\\mathfrak{F}", title: "Mathfrak F" },
          { label: "ℑ", insert: "\\mathfrak{I}", title: "Mathfrak I" },
          { label: "𝔏", insert: "\\mathfrak{L}", title: "Mathfrak L" },
          { label: "𝔒", insert: "\\mathfrak{O}", title: "Mathfrak O" },
          { label: "ℜ", insert: "\\mathfrak{R}", title: "Mathfrak R" },
          { label: "𝔘", insert: "\\mathfrak{U}", title: "Mathfrak U" },
          { label: "𝔛", insert: "\\mathfrak{X}", title: "Mathfrak X" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" },
          // empty placeholder
          // Small letters Row 3
          { label: "𝔠", insert: "\\mathfrak{c}", title: "Mathfrak c" },
          { label: "𝔣", insert: "\\mathfrak{f}", title: "Mathfrak f" },
          { label: "𝔦", insert: "\\mathfrak{i}", title: "Mathfrak i" },
          { label: "𝔩", insert: "\\mathfrak{l}", title: "Mathfrak l" },
          { label: "𝔬", insert: "\\mathfrak{o}", title: "Mathfrak o" },
          { label: "𝔯", insert: "\\mathfrak{r}", title: "Mathfrak r" },
          { label: "𝔲", insert: "\\mathfrak{u}", title: "Mathfrak u" },
          { label: "𝔵", insert: "\\mathfrak{x}", title: "Mathfrak x" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" }
          // empty placeholder
        ]
      },
      { label: "𝔄", insert: "\\mathfrak{A}", title: "Mathfrak A" },
      { label: "𝔅", insert: "\\mathfrak{B}", title: "Mathfrak B" },
      { label: "ℭ", insert: "\\mathfrak{C}", title: "Mathfrak C" },
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 18,
        moreItems: [
          // --- Row 1 ---
          { label: "𝒜", insert: "\\mathcal{A}", title: "Mathcal A" },
          { label: "𝒟", insert: "\\mathcal{D}", title: "Mathcal D" },
          { label: "𝒢", insert: "\\mathcal{G}", title: "Mathcal G" },
          { label: "𝒥", insert: "\\mathcal{J}", title: "Mathcal J" },
          { label: "ℳ", insert: "\\mathcal{M}", title: "Mathcal M" },
          { label: "𝒫", insert: "\\mathcal{P}", title: "Mathcal P" },
          { label: "𝒮", insert: "\\mathcal{S}", title: "Mathcal S" },
          { label: "𝒱", insert: "\\mathcal{V}", title: "Mathcal V" },
          { label: "𝒴", insert: "\\mathcal{Y}", title: "Mathcal Y" },
          // Small letters Row 1
          { label: "𝒶", insert: "𝒶", title: "Mathcal a" },
          { label: "𝒹", insert: "𝒹", title: "Mathcal d" },
          { label: "ℊ", insert: "ℊ", title: "Mathcal g" },
          { label: "𝒿", insert: "𝒿", title: "Mathcal j" },
          { label: "𝓂", insert: "𝓂", title: "Mathcal m" },
          { label: "𝓅", insert: "𝓅", title: "Mathcal p" },
          { label: "𝓈", insert: "𝓈", title: "Mathcal s" },
          { label: "𝓋", insert: "𝓋", title: "Mathcal v" },
          { label: "𝓎", insert: "𝓎", title: "Mathcal y" },
          // --- Row 2 ---
          { label: "ℬ", insert: "\\mathcal{B}", title: "Mathcal B" },
          { label: "ℰ", insert: "\\mathcal{E}", title: "Mathcal E" },
          { label: "ℋ", insert: "\\mathcal{H}", title: "Mathcal H" },
          { label: "𝒦", insert: "\\mathcal{K}", title: "Mathcal K" },
          { label: "𝒩", insert: "\\mathcal{N}", title: "Mathcal N" },
          { label: "𝒬", insert: "\\mathcal{Q}", title: "Mathcal Q" },
          { label: "𝒯", insert: "\\mathcal{T}", title: "Mathcal T" },
          { label: "𝒲", insert: "\\mathcal{W}", title: "Mathcal W" },
          { label: "𝒵", insert: "\\mathcal{Z}", title: "Mathcal Z" },
          // Small letters Row 2
          { label: "𝒷", insert: "𝒷", title: "Mathcal b" },
          { label: "ℯ", insert: "ℯ", title: "Mathcal e" },
          { label: "𝒽", insert: "𝒽", title: "Mathcal h" },
          { label: "𝓀", insert: "𝓀", title: "Mathcal k" },
          { label: "𝓃", insert: "𝓃", title: "Mathcal n" },
          { label: "𝓆", insert: "𝓆", title: "Mathcal q" },
          { label: "𝓉", insert: "𝓉", title: "Mathcal t" },
          { label: "𝓌", insert: "𝓌", title: "Mathcal w" },
          { label: "𝓏", insert: "𝓏", title: "Mathcal z" },
          // --- Row 3 ---
          { label: "𝒞", insert: "\\mathcal{C}", title: "Mathcal C" },
          { label: "ℱ", insert: "\\mathcal{F}", title: "Mathcal F" },
          { label: "ℐ", insert: "\\mathcal{I}", title: "Mathcal I" },
          { label: "ℒ", insert: "\\mathcal{L}", title: "Mathcal L" },
          { label: "𝒪", insert: "\\mathcal{O}", title: "Mathcal O" },
          { label: "ℛ", insert: "\\mathcal{R}", title: "Mathcal R" },
          { label: "𝒰", insert: "\\mathcal{U}", title: "Mathcal U" },
          { label: "𝒳", insert: "\\mathcal{X}", title: "Mathcal X" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" },
          // empty placeholder
          // Small letters Row 3
          { label: "𝒸", insert: "𝒸", title: "Mathcal c" },
          { label: "𝒻", insert: "𝒻", title: "Mathcal f" },
          { label: "𝒾", insert: "𝒾", title: "Mathcal i" },
          { label: "𝓁", insert: "𝓁", title: "Mathcal l" },
          { label: "ℴ", insert: "ℴ", title: "Mathcal o" },
          { label: "𝓇", insert: "𝓇", title: "Mathcal r" },
          { label: "𝓊", insert: "𝓊", title: "Mathcal u" },
          { label: "𝓍", insert: "𝓍", title: "Mathcal x" },
          { label: " ", insert: "", cls: "cme-empty-btn", title: "" }
          // empty placeholder
        ]
      },
      { label: "𝒜", insert: "\\mathcal{A}", title: "Mathcal A" },
      { label: "ℬ", insert: "\\mathcal{B}", title: "Mathcal B" },
      { label: "𝒞", insert: "\\mathcal{C}", title: "Mathcal C" },
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-dark-large",
        moreCols: 2,
        moreItems: [
          { label: "ℵ", insert: "\\aleph", title: "Aleph" },
          // Alef
          { label: "ℐ", insert: "\\mathcal{I}", title: "Mathcal I" },
          // Script I
          { label: "℘", insert: "\\wp", title: "Wp" },
          // Script capital P (Weierstrass P)
          { label: "ℨ", insert: "\\mathfrak{Z}", title: "Mathfrak Z" },
          // Z-transform symbol
          { label: "ℱ", insert: "\\mathcal{F}", title: "Mathcal F" }
          // Script capital F
        ]
      },
      { label: "ℑ", insert: "\\Im", title: "Im" },
      { label: "ℜ", insert: "\\Re", title: "Re" },
      { label: "ℓ", insert: "\\ell", title: "Ell" },
      //group chemical
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-trig-subgroup",
        moreCols: 18,
        moreItems: [
          // Row 1
          { label: "H", insert: "\\mathrm{H}", title: "Mathrm H", cls: "pt-unknown" },
          ...Array.from({ length: 16 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "He", insert: "\\mathrm{He}", title: "Mathrm He", cls: "pt-noble" },
          // Row 2
          { label: "Li", insert: "\\mathrm{Li}", title: "Mathrm Li", cls: "pt-alkali" },
          { label: "Be", insert: "\\mathrm{Be}", title: "Mathrm Be", cls: "pt-alkaline" },
          ...Array.from({ length: 10 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "B", insert: "\\mathrm{B}", title: "Mathrm B", cls: "pt-nonmetal" },
          { label: "C", insert: "\\mathrm{C}", title: "Mathrm C", cls: "pt-nonmetal" },
          { label: "N", insert: "\\mathrm{N}", title: "Mathrm N", cls: "pt-nonmetal" },
          { label: "O", insert: "\\mathrm{O}", title: "Mathrm O", cls: "pt-nonmetal" },
          { label: "F", insert: "\\mathrm{F}", title: "Mathrm F", cls: "pt-nonmetal" },
          { label: "Ne", insert: "\\mathrm{Ne}", title: "Mathrm Ne", cls: "pt-noble" },
          // Row 3
          { label: "Na", insert: "\\mathrm{Na}", title: "Mathrm Na", cls: "pt-alkali" },
          { label: "Mg", insert: "\\mathrm{Mg}", title: "Mathrm Mg", cls: "pt-alkaline" },
          ...Array.from({ length: 10 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "Al", insert: "\\mathrm{Al}", title: "Mathrm Al", cls: "pt-metalloid" },
          { label: "Si", insert: "\\mathrm{Si}", title: "Mathrm Si", cls: "pt-metalloid" },
          { label: "P", insert: "\\mathrm{P}", title: "Mathrm P", cls: "pt-nonmetal" },
          { label: "S", insert: "\\mathrm{S}", title: "Mathrm S", cls: "pt-nonmetal" },
          { label: "Cl", insert: "\\mathrm{Cl}", title: "Mathrm Cl", cls: "pt-nonmetal" },
          { label: "Ar", insert: "\\mathrm{Ar}", title: "Mathrm Ar", cls: "pt-noble" },
          // Row 4
          { label: "K", insert: "\\mathrm{K}", title: "Mathrm K", cls: "pt-alkali" },
          { label: "Ca", insert: "\\mathrm{Ca}", title: "Mathrm Ca", cls: "pt-alkaline" },
          { label: "Sc", insert: "\\mathrm{Sc}", title: "Mathrm Sc", cls: "pt-transition" },
          { label: "Ti", insert: "\\mathrm{Ti}", title: "Mathrm Ti", cls: "pt-transition" },
          { label: "V", insert: "\\mathrm{V}", title: "Mathrm V", cls: "pt-transition" },
          { label: "Cr", insert: "\\mathrm{Cr}", title: "Mathrm Cr", cls: "pt-transition" },
          { label: "Mn", insert: "\\mathrm{Mn}", title: "Mathrm Mn", cls: "pt-transition" },
          { label: "Fe", insert: "\\mathrm{Fe}", title: "Mathrm Fe", cls: "pt-transition" },
          { label: "Co", insert: "\\mathrm{Co}", title: "Mathrm Co", cls: "pt-transition" },
          { label: "Ni", insert: "\\mathrm{Ni}", title: "Mathrm Ni", cls: "pt-transition" },
          { label: "Cu", insert: "\\mathrm{Cu}", title: "Mathrm Cu", cls: "pt-transition" },
          { label: "Zn", insert: "\\mathrm{Zn}", title: "Mathrm Zn", cls: "pt-transition" },
          { label: "Ga", insert: "\\mathrm{Ga}", title: "Mathrm Ga", cls: "pt-metalloid" },
          { label: "Ge", insert: "\\mathrm{Ge}", title: "Mathrm Ge", cls: "pt-metalloid" },
          { label: "As", insert: "\\mathrm{As}", title: "Mathrm As", cls: "pt-nonmetal" },
          { label: "Se", insert: "\\mathrm{Se}", title: "Mathrm Se", cls: "pt-nonmetal" },
          { label: "Br", insert: "\\mathrm{Br}", title: "Mathrm Br", cls: "pt-nonmetal" },
          { label: "Kr", insert: "\\mathrm{Kr}", title: "Mathrm Kr", cls: "pt-noble" },
          // Row 5
          { label: "Rb", insert: "\\mathrm{Rb}", title: "Mathrm Rb", cls: "pt-alkali" },
          { label: "Sr", insert: "\\mathrm{Sr}", title: "Mathrm Sr", cls: "pt-alkaline" },
          { label: "Y", insert: "\\mathrm{Y}", title: "Mathrm Y", cls: "pt-transition" },
          { label: "Zr", insert: "\\mathrm{Zr}", title: "Mathrm Zr", cls: "pt-transition" },
          { label: "Nb", insert: "\\mathrm{Nb}", title: "Mathrm Nb", cls: "pt-transition" },
          { label: "Mo", insert: "\\mathrm{Mo}", title: "Mathrm Mo", cls: "pt-transition" },
          { label: "Tc", insert: "\\mathrm{Tc}", title: "Mathrm Tc", cls: "pt-transition" },
          { label: "Ru", insert: "\\mathrm{Ru}", title: "Mathrm Ru", cls: "pt-transition" },
          { label: "Rh", insert: "\\mathrm{Rh}", title: "Mathrm Rh", cls: "pt-transition" },
          { label: "Pd", insert: "\\mathrm{Pd}", title: "Mathrm Pd", cls: "pt-transition" },
          { label: "Ag", insert: "\\mathrm{Ag}", title: "Mathrm Ag", cls: "pt-transition" },
          { label: "Cd", insert: "\\mathrm{Cd}", title: "Mathrm Cd", cls: "pt-transition" },
          { label: "In", insert: "\\mathrm{In}", title: "Mathrm In", cls: "pt-metalloid" },
          { label: "Sn", insert: "\\mathrm{Sn}", title: "Mathrm Sn", cls: "pt-metalloid" },
          { label: "Sb", insert: "\\mathrm{Sb}", title: "Mathrm Sb", cls: "pt-metalloid" },
          { label: "Te", insert: "\\mathrm{Te}", title: "Mathrm Te", cls: "pt-nonmetal" },
          { label: "I", insert: "\\mathrm{I}", title: "Mathrm I", cls: "pt-nonmetal" },
          { label: "Xe", insert: "\\mathrm{Xe}", title: "Mathrm Xe", cls: "pt-noble" },
          // Row 6
          { label: "Cs", insert: "\\mathrm{Cs}", title: "Mathrm Cs", cls: "pt-alkali" },
          { label: "Ba", insert: "\\mathrm{Ba}", title: "Mathrm Ba", cls: "pt-alkaline" },
          { label: "", insert: "", cls: "pt-transition" },
          // Blank pink
          { label: "Hf", insert: "\\mathrm{Hf}", title: "Mathrm Hf", cls: "pt-transition" },
          { label: "Ta", insert: "\\mathrm{Ta}", title: "Mathrm Ta", cls: "pt-transition" },
          { label: "W", insert: "\\mathrm{W}", title: "Mathrm W", cls: "pt-transition" },
          { label: "Re", insert: "\\mathrm{Re}", title: "Mathrm Re", cls: "pt-transition" },
          { label: "Os", insert: "\\mathrm{Os}", title: "Mathrm Os", cls: "pt-transition" },
          { label: "Ir", insert: "\\mathrm{Ir}", title: "Mathrm Ir", cls: "pt-transition" },
          { label: "Pt", insert: "\\mathrm{Pt}", title: "Mathrm Pt", cls: "pt-transition" },
          { label: "Au", insert: "\\mathrm{Au}", title: "Mathrm Au", cls: "pt-transition" },
          { label: "Hg", insert: "\\mathrm{Hg}", title: "Mathrm Hg", cls: "pt-transition" },
          { label: "Tl", insert: "\\mathrm{Tl}", title: "Mathrm Tl", cls: "pt-metalloid" },
          { label: "Pb", insert: "\\mathrm{Pb}", title: "Mathrm Pb", cls: "pt-metalloid" },
          { label: "Bi", insert: "\\mathrm{Bi}", title: "Mathrm Bi", cls: "pt-metalloid" },
          { label: "Po", insert: "\\mathrm{Po}", title: "Mathrm Po", cls: "pt-metalloid" },
          { label: "At", insert: "\\mathrm{At}", title: "Mathrm At", cls: "pt-nonmetal" },
          { label: "Rn", insert: "\\mathrm{Rn}", title: "Mathrm Rn", cls: "pt-noble" },
          // Row 7
          { label: "Fr", insert: "\\mathrm{Fr}", title: "Mathrm Fr", cls: "pt-alkali" },
          { label: "Ra", insert: "\\mathrm{Ra}", title: "Mathrm Ra", cls: "pt-alkaline" },
          { label: "", insert: "", cls: "pt-transition" },
          // Blank pink
          { label: "Rf", insert: "\\mathrm{Rf}", title: "Mathrm Rf", cls: "pt-transition" },
          { label: "Db", insert: "\\mathrm{Db}", title: "Mathrm Db", cls: "pt-transition" },
          { label: "Sg", insert: "\\mathrm{Sg}", title: "Mathrm Sg", cls: "pt-transition" },
          { label: "Bh", insert: "\\mathrm{Bh}", title: "Mathrm Bh", cls: "pt-transition" },
          { label: "Hs", insert: "\\mathrm{Hs}", title: "Mathrm Hs", cls: "pt-transition" },
          { label: "Mt", insert: "\\mathrm{Mt}", title: "Mathrm Mt", cls: "pt-transition" },
          { label: "Ds", insert: "\\mathrm{Ds}", title: "Mathrm Ds", cls: "pt-transition" },
          { label: "Rg", insert: "\\mathrm{Rg}", title: "Mathrm Rg", cls: "pt-transition" },
          { label: "Cn", insert: "\\mathrm{Cn}", title: "Mathrm Cn", cls: "pt-transition" },
          { label: "Nh", insert: "\\mathrm{Nh}", title: "Mathrm Nh", cls: "pt-metalloid" },
          { label: "Fl", insert: "\\mathrm{Fl}", title: "Mathrm Fl", cls: "pt-metalloid" },
          { label: "Mc", insert: "\\mathrm{Mc}", title: "Mathrm Mc", cls: "pt-metalloid" },
          { label: "Lv", insert: "\\mathrm{Lv}", title: "Mathrm Lv", cls: "pt-metalloid" },
          { label: "Ts", insert: "\\mathrm{Ts}", title: "Mathrm Ts", cls: "pt-unknown" },
          { label: "Og", insert: "\\mathrm{Og}", title: "Mathrm Og", cls: "pt-unknown" },
          // Gap Row
          ...Array.from({ length: 18 }, () => ({ label: "", cls: "pt-empty" })),
          // Row Lanthanides
          ...Array.from({ length: 2 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "La", insert: "\\mathrm{La}", title: "Mathrm La", cls: "pt-transition" },
          { label: "Ce", insert: "\\mathrm{Ce}", title: "Mathrm Ce", cls: "pt-lanthanide" },
          { label: "Pr", insert: "\\mathrm{Pr}", title: "Mathrm Pr", cls: "pt-lanthanide" },
          { label: "Nd", insert: "\\mathrm{Nd}", title: "Mathrm Nd", cls: "pt-lanthanide" },
          { label: "Pm", insert: "\\mathrm{Pm}", title: "Mathrm Pm", cls: "pt-lanthanide" },
          { label: "Sm", insert: "\\mathrm{Sm}", title: "Mathrm Sm", cls: "pt-lanthanide" },
          { label: "Eu", insert: "\\mathrm{Eu}", title: "Mathrm Eu", cls: "pt-lanthanide" },
          { label: "Gd", insert: "\\mathrm{Gd}", title: "Mathrm Gd", cls: "pt-lanthanide" },
          { label: "Tb", insert: "\\mathrm{Tb}", title: "Mathrm Tb", cls: "pt-lanthanide" },
          { label: "Dy", insert: "\\mathrm{Dy}", title: "Mathrm Dy", cls: "pt-lanthanide" },
          { label: "Ho", insert: "\\mathrm{Ho}", title: "Mathrm Ho", cls: "pt-lanthanide" },
          { label: "Er", insert: "\\mathrm{Er}", title: "Mathrm Er", cls: "pt-lanthanide" },
          { label: "Tm", insert: "\\mathrm{Tm}", title: "Mathrm Tm", cls: "pt-lanthanide" },
          { label: "Yb", insert: "\\mathrm{Yb}", title: "Mathrm Yb", cls: "pt-lanthanide" },
          { label: "Lu", insert: "\\mathrm{Lu}", title: "Mathrm Lu", cls: "pt-lanthanide" },
          { label: "", cls: "pt-empty" },
          // Row Actinides
          ...Array.from({ length: 2 }, () => ({ label: "", cls: "pt-empty" })),
          { label: "Ac", insert: "\\mathrm{Ac}", title: "Mathrm Ac", cls: "pt-actinide" },
          { label: "Th", insert: "\\mathrm{Th}", title: "Mathrm Th", cls: "pt-actinide" },
          { label: "Pa", insert: "\\mathrm{Pa}", title: "Mathrm Pa", cls: "pt-actinide" },
          { label: "U", insert: "\\mathrm{U}", title: "Mathrm U", cls: "pt-actinide" },
          { label: "Np", insert: "\\mathrm{Np}", title: "Mathrm Np", cls: "pt-actinide" },
          { label: "Pu", insert: "\\mathrm{Pu}", title: "Mathrm Pu", cls: "pt-actinide" },
          { label: "Am", insert: "\\mathrm{Am}", title: "Mathrm Am", cls: "pt-actinide" },
          { label: "Cm", insert: "\\mathrm{Cm}", title: "Mathrm Cm", cls: "pt-actinide" },
          { label: "Bk", insert: "\\mathrm{Bk}", title: "Mathrm Bk", cls: "pt-actinide" },
          { label: "Cf", insert: "\\mathrm{Cf}", title: "Mathrm Cf", cls: "pt-actinide" },
          { label: "Es", insert: "\\mathrm{Es}", title: "Mathrm Es", cls: "pt-actinide" },
          { label: "Fm", insert: "\\mathrm{Fm}", title: "Mathrm Fm", cls: "pt-actinide" },
          { label: "Md", insert: "\\mathrm{Md}", title: "Mathrm Md", cls: "pt-actinide" },
          { label: "No", insert: "\\mathrm{No}", title: "Mathrm No", cls: "pt-actinide" },
          { label: "Lr", insert: "\\mathrm{Lr}", title: "Mathrm Lr", cls: "pt-actinide" },
          { label: "", cls: "pt-empty" }
        ]
      },
      { label: "H", insert: "\\mathrm{H}", title: "Mathrm H" },
      // Hydrogen
      { label: "C", insert: "\\mathrm{C}", title: "Mathrm C" },
      // Carbon
      { label: "N", insert: "\\mathrm{N}", title: "Mathrm N" },
      // Nitrogen
      { label: "O", insert: "\\mathrm{O}", title: "Mathrm O" },
      // Oxygen
      { label: "F", insert: "\\mathrm{F}", title: "Mathrm F" },
      // Fluorine
      { label: "S", insert: "\\mathrm{S}", title: "Mathrm S" }
      // Sulfur
    ]
  },
  {
    label: "bmatrix",
    fontSize: "5px",
    mathLabel: "\\textstyle \\begin{bmatrix}#? & #?\\\\ #? & #?\\end{bmatrix}  \\,  \\begin{cases} #? \\\\ #? \\end{cases}",
    isMatrix: !0,
    items: [
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "10", y: "6", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "6", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "6", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "10", y: "25", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "25", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "25", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "10", y: "44", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "44", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "44", width: "8", height: "14", rx: "1" })), insert: "matrix", cls: "template", title: "3×3 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "4", x2: "8", y2: "60", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("line", { x1: "56", y1: "4", x2: "56", y2: "60", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "38", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "38", width: "8", height: "14", rx: "1" })), insert: "vmatrix", cls: "template", title: "2×2 Determinant" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M14 6H8V58H14", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M50 6H56V58H50", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "38", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "38", width: "8", height: "14", rx: "1" })), insert: "bmatrix", cls: "template", title: "2×2 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 6C8 16 8 48 16 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M48 6C56 16 56 48 48 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "12", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "38", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "38", width: "8", height: "14", rx: "1" })), insert: "pmatrix", cls: "template", title: "2×2 Parenthesis Matrix" },
      // { label: '□', insert: 'matrix', cls: 'template', title: 'Matrix' },
      // { label: '|□|', insert: 'vmatrix', cls: 'template', title: 'Vertical bar matrix' },
      // { label: '[□]', insert: 'bmatrix', cls: 'template', title: 'Bracket matrix' },
      // { label: '(□)', insert: 'pmatrix', cls: 'template', title: 'Parenthesis matrix' },
      { type: "sep", cols: 3, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "28", y: "6", width: "8", height: "10", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "27", width: "8", height: "10", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "48", width: "8", height: "10", rx: "1" })), insert: "\\begin{matrix} #? \\\\ #? \\\\ #? \\end{matrix}", cls: "symbol", directInsert: !0, action: "INSERT_CUSTOM", title: "Vertical Dots" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 6H12V58H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 6H52V58H46", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "10", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "38", width: "8", height: "14", rx: "1" })), insert: "\\begin{bmatrix} #? \\\\ #? \\end{bmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×1 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 6C10 16 10 48 18 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M46 6C54 16 54 48 46 58", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "10", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "38", width: "8", height: "14", rx: "1" })), insert: "\\begin{pmatrix} #? \\\\ #? \\end{pmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×1 Parenthesis Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "8", y: "24", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "24", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "48", y: "24", width: "8", height: "14", rx: "1" })), insert: "\\begin{matrix} #? \\,  #? \\,  #? \\end{matrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "1×3 Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 18H12V46H16", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M50 18H54V46H50", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "22", width: "8", height: "14", rx: "1" })), insert: "\\begin{bmatrix} #? \\, #? \\end{bmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "1×2 Square Bracket Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 18C12 23 12 41 16 46", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("path", { d: "M50 18C54 23 54 41 50 46", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "8", height: "14", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "22", width: "8", height: "14", rx: "1" })), insert: "\\begin{pmatrix} #? \\, #? \\end{pmatrix}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "1×2 Parenthesis Matrix" },
      // { label: '□', insert: '\\begin{matrix} #? \\\\ #? \\\\ #? \\end{matrix}', cls: 'template', directInsert: true, title: 'Begin matrix' },
      // { label: '[□ \\ □]', insert: '\\begin{bmatrix} #? \\\\ #? \\end{bmatrix}', cls: 'template', directInsert: true, title: 'Begin bmatrix' },
      // { label: '(□ \\ □)', insert: '\\begin{pmatrix} #? \\\\ #? \\end{pmatrix}', cls: 'template', directInsert: true, title: 'Begin pmatrix' },
      // { label: '□ □ □', insert: '\\begin{matrix} #? \\,  #? \\,  #? \\end{matrix}', cls: 'template', directInsert: true, title: 'Begin matrix' },
      // { label: '[□ & □]', insert: '\\begin{bmatrix} #? \\, #? \\end{bmatrix}', cls: 'template', directInsert: true, title: 'Begin bmatrix' },
      // { label: '(□ & □)', insert: '\\begin{pmatrix} #? \\, #? \\end{pmatrix}', cls: 'template', directInsert: true, title: 'Begin pmatrix' },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 8C12 8 12 12 12 18V26C12 30 10 32 8 32C10 32 12 34 12 38V46C12 52 12 56 16 56", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "34", width: "10", height: "12", rx: "1" })), insert: "\\begin{cases} #? \\\\ #? \\end{cases}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×1 Piecewise Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 8C12 8 12 12 12 18V26C12 30 10 32 8 32C10 32 12 34 12 38V46C12 52 12 56 16 56", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "23", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "39", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "23", y: "34", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "39", y: "34", width: "10", height: "12", rx: "1" })), insert: "\\begin{cases} #? \\, #? \\\\ #? \\, #? \\end{cases}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "2×2 Piecewise Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "26", y: "10", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "34", width: "10", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M48 8C52 8 52 12 52 18V26C52 30 54 32 56 32C54 32 52 34 52 38V46C52 52 52 56 48 56", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left.\\begin{matrix} #? \\\\ #? \\end{matrix}\\right\\}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right Piecewise Matrix" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "8", y: "8", width: "12", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "12", x2: "38", y2: "12", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "16", x2: "38", y2: "16", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "6", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "8", y: "40", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "46", x2: "36", y2: "46", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("line", { x1: "24", y1: "50", x2: "36", y2: "50", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "38", width: "12", height: "12", rx: "1" })), insert: "\\begin{aligned} #? &= #? \\\\ #? &= #? \\end{aligned}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "System of Equations" },
      // // Two rows column with left curly brackets
      // { label: '{', insert: '\\begin{cases} #? \\\\ #? \\end{cases}', cls: 'template', directInsert: true, title: 'Begin cases' },
      // // Piecewise function
      // { label: 'f(x)', insert: '\\begin{cases} #?, \\, #? \\\\ #?, \\, #? \\end{cases}', cls: 'template', directInsert: true, title: 'Begin cases' },
      // // Two rows column with right curly brackets
      // { label: '}', insert: '\\left.\\begin{matrix} #? \\\\ #? \\end{matrix}\\right\\}', cls: 'template', directInsert: true, title: 'Begin matrix' },
      // // Aligned equations
      // { label: '=', insert: '\\begin{aligned} #? &= #? \\\\ #? &= #? \\end{aligned}', cls: 'template', directInsert: true, title: 'Begin aligned' },
      { type: "sep", cols: 2, cls: "cme-trig-subgroup" },
      { label: "⋮", insert: "\\vdots", title: "Vertical ellipses" },
      { label: "⋰", insert: "⋰", title: "Upright diagonal ellipses" },
      { label: "…", insert: "\\ldots", title: "Horizontal ellipses" },
      { label: "⋱", insert: "\\ddots", title: "Down-right diagonal ellipses" },
      {
        type: "sep",
        cols: 1,
        fontSize: "8px",
        cls: "cme-matrix-subgroup",
        moreCols: 3,
        moreItems: [
          // sub addition
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\ \\,#?\\end{array}}{\\;#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction Template" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "10", y1: "26", x2: "26", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\-\\,#?\\end{array}}{\\quad#?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction with Subtraction" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "11", y1: "19", x2: "25", y2: "33", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "25", y1: "19", x2: "11", y2: "33", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\×\\,#?\\end{array}}{\\quad#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction with Multiplication" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M30 4V30H56", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "40", width: "10", height: "16", rx: "1" })), insert: "\\begin{array}{r@{}l} #?\\, & \\class{cme-long-div}{#?} \\\\ & \\; #? \\end{array}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Long Division" },
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "4", y: "44", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M30 4V36H58", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "8", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "44", width: "10", height: "16", rx: "1" })), insert: "\\begin{array}{r@{}l} #?\\, & \\class{cme-long-div}{#?} \\\\ #?\\, & \\; #? \\end{array}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Long Division with Four Terms" },
          //long dividosn
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "0", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "30", y1: "20", x2: "54", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M26 18C34 25 34 47 26 54", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "6", y: "28", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "28", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "52", width: "10", height: "16", rx: "1" })), insert: "#?\\, ) \\!\\!\\!\\!\\! \\begin{array}\\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}} \\\\ \\;\\;#?\\; \\end{array}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Root with Fraction and Subscript" }
          // { label: ' ', insert: '\\frac{\\begin{array}{r}#?\\\\ \\,#?\\end{array}}{\\;#?}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '-', insert: '\\frac{\\begin{array}{r}#?\\\\-\\,#?\\end{array}}{\\quad#?}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '*', insert: '\\frac{\\begin{array}{r}#?\\\\*\\,#?\\end{array}}{\\quad#?}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '÷', insert: '\\begin{array}{r@{}l} #?\\, & \\begin{array}{|@{}l} \\underline{\\;#?\\;\\,} \\end{array} \\\\ & \\; #? \\end{array}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // { label: '÷', insert: '\\begin{array}{r@{}l} #?\\, & \\begin{array}{|@{}l} \\underline{\\;#?\\;\\,} \\end{array} \\\\ #?\\, & \\; #? \\end{array}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
          // // Long division
          // { label: '⟌', insert: '#?\\, ) \\!\\!\\!\\!\\! \\begin{array}\\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}} \\\\ \\;\\;#?\\; \\end{array}', isWidget: true, directInsert: true, title: 'Begin array', cls: 'cme-matrix-subgroup' },
        ]
      },
      //column addition
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 -6 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "-2", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "18", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "46", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "38", x2: "54", y2: "38", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "18", x2: "18", y2: "34", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "10", y1: "26", x2: "26", y2: "26", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" })), insert: "\\frac{\\begin{array}{r}#?\\\\+\\,#?\\end{array}}{\\quad#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction with Addition" },
      //long divison 
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "30", viewBox: "0 0 64 72", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "40", y: "0", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "30", y1: "20", x2: "54", y2: "20", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M26 18C34 25 34 47 26 54", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "6", y: "28", width: "10", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "28", width: "10", height: "16", rx: "1" })), insert: "#?\\, ) \\!\\! \\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Root with Fraction" }
      // // Column addition
      // { label: '+', insert: '\\frac{\\begin{array}{r}#?\\\\+\\,#?\\end{array}}{\\quad#?}', isWidget: true, directInsert: true, title: 'Begin array', },
      // // Long division
      // { label: '⟌', insert: '#?\\, ) \\!\\! \\overset{\\displaystyle #?}{\\overline{\\vphantom{1}\\;\\;#?\\;}}', isWidget: true, directInsert: true, title: 'Vphantom 1', },
    ]
  },
  {
    label: "□̅",
    fontSize: "9px",
    mathLabel: "{#?}^{#?} \\, \\overset{#?}{#?}",
    isTemplate: !0,
    items: [
      { type: "sep", cols: 2, small: !0, cls: "cme-trig-subgroup" },
      // Big fraction
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "2", width: "18", height: "20", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "32", x2: "50", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "40", width: "18", height: "20", rx: "2" })), insert: "\\frac{#0}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction" },
      // { label: 'a/b', insert: '\\frac{#?}{#?}', title: 'Fraction' },
      // Small fraction
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "22", y: "8", width: "12", height: "14", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "32", x2: "50", y2: "32", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "40", width: "12", height: "14", rx: "2" })), insert: "\\tfrac{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Fraction" },
      // { label: 'a⁄b', insert: '\\tfrac{#?}{#?}', title: 'Small fraction' },
      //fraction
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "5", y: "16", width: "18", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "50", x2: "40", y2: "18", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "34", width: "18", height: "20", rx: "1" })), insert: "\\LARGE {}^{#?}/_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Text Fraction" },
      // { label: 'A⁄B', insert: '{#?}/{#?}', title: 'Inline fraction' },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "14", y: "16", width: "12", height: "16", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "26", y1: "50", x2: "40", y2: "18", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "38", y: "34", width: "12", height: "16", rx: "1" })), insert: "\\scriptsize {}^{#?}/_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Text Fraction" },
      // { label: '⎸/⎹', insert: '\\nicefrac{#?}{#?}', title: 'Nice fraction' },
      { type: "sep", cols: 1, small: !0, cls: "cme-trig-subgroup" },
      // Square root
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M6 34 L14 34 L20 50 L30 10 L54 10", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "36", y: "18", width: "16", height: "20", rx: "2" })), insert: "\\sqrt{#0}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Square Root" },
      // { label: '√', insert: '\\sqrt{#?}', title: 'Square root' },
      // Root (nth root)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M6 36 L14 36 L20 50 L30 10 L56 10", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "12", y: "16", width: "8", height: "12", rx: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "40", y: "22", width: "12", height: "22", rx: "2" })), insert: "\\sqrt[#?]{#0}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Nth Root Fraction" },
      // { label: 'ⁿ√', insert: '\\sqrt[#?]{#?}', title: 'N-th root' },
      { type: "sep", cols: 3, cls: "cme-matrix-subgroup" },
      // Superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Raised Box" },
      // { label: 'xⁿ', insert: '{#?}^{#?}', title: 'Superscript' },
      // Superscript and subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "36", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Raised Box with Subscript" },
      // { label: 'xⁿₖ', insert: '{#?}_{#?}^{#?}', title: 'Subscript and superscript' },
      // Subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "14", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "36", y: "28", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "{#?}_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Lowered Box" },
      // { label: 'xₖ', insert: '{#?}_{#?}', title: 'Subscript' },
      // Left superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "10", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "30", y: "22", width: "12", height: "20", rx: "1" })), insert: "{}^{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Lowered Box" },
      // { label: 'ⁿx', insert: '{}^{#?}{#?}', title: 'Left superscript' },
      // Left subscript and superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "8", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "36", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "30", y: "20", width: "12", height: "20", rx: "1" })), insert: "{}_{#?}^{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Superscript and Subscript" },
      // { label: 'ⁿₖx', insert: '{}_{#?}^{#?}{#?}', title: 'Left subscript and superscript' },
      // Left subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "18", y: "28", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "30", y: "10", width: "12", height: "20", rx: "1" })), insert: "{}_{#?}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Lower Left Box" },
      // { label: 'ₖx', insert: '{}_{#?}{#?}', title: 'Left subscript' },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      // Element over
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "23", y: "28", width: "12", height: "20", rx: "1" })), insert: "\\overset{\\raisebox{2px}{#?}}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Superscript Box" },
      // { label: '□̅', insert: '\\overset{#?}{#?}', title: 'Overscript' },
      // Element under
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 4 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "19", y: "28", width: "12", height: "18", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "21", y: "52", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\underset{\\raisebox{-5px}{#?}}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Subscript Box" },
      // { label: '□̲', insert: '\\underset{#?}{#?}', title: 'Underscript' },
      // Elements under and over
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "8", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "48", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\overset{\\raisebox{2px}{#?}}{\\underset{\\raisebox{-5px}{#?}}{#?}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Box with Superscript and Subscript" },
      // { label: '□̲̅', insert: '\\overset{#?}{\\underset{#?}{#?}}', title: 'Over and underscript' },
      { type: "sep", cols: 1, cls: "cme-matrix-subgroup" },
      // Underscript with brace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "26", y: "4", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M10 34H24C28 34 30 36 32 40C34 36 36 34 40 34H54M10 34V28M54 34V28", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "46", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\underbrace{#?}_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Underbrace" },
      // { label: '⏟', insert: '\\underbrace{#?}_{#?}', title: 'Underbrace' },
      // Overscript with brace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "27", y: "2", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("path", { d: "M10 36V30H24C28 30 30 28 32 24C34 28 36 30 40 30H54V36", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "40", width: "12", height: "20", rx: "1" })), insert: "\\overbrace{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Overbrace" },
      // { label: '⏞', insert: '\\overbrace{#?}^{#?}', title: 'Overbrace' },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      // Box with over and underscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "19", y: "1", width: "10", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "20", width: "16", height: "24", rx: "1", stroke: "#222" }), /* @__PURE__ */ e.createElement("rect", { x: "19", y: "50", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\overset{\\raisebox{0.1em}{#?}}{\\underset{\\raisebox{-0.3em}{#?}}{\\Large #?}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Large Box with Superscript and Subscript" },
      // { label: '□̲̅', insert: '\\overset{#?}{\\underset{#?}{\\square}}', title: 'Box with over and underscript' },
      // Right sub/superscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "1", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}^{\\raisebox{0.6em}{#?}}", isWidget: !0, title: "Subscript and superscript" },
      // Element under
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "16", y: "4", width: "16", height: "24", rx: "1", stroke: "#222" }), /* @__PURE__ */ e.createElement("rect", { x: "19", y: "40", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\underset{\\raisebox{-0.3em}{#?}}{\\Large #?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Large Box with Subscript" },
      // { label: '□̲', insert: '\\underset{#?}{#?}', title: 'Underscript' },
      // Right subscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}", isWidget: !0, title: "Subscript" },
      { type: "sep", cols: 2, cls: "cme-matrix-subgroup" },
      {
        label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "18", viewBox: "0 0 26 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "2", y: "2", width: "6", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "18", y: "2", width: "6", height: "12", rx: "1" })),
        insert: "\\enspace",
        cls: "template",
        directInsert: !0,
        action: "INSERT_CUSTOM",
        title: "Horizontal Phantom Space"
      },
      {
        label: /* @__PURE__ */ e.createElement("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", marginLeft: "13px" } }, /* @__PURE__ */ e.createElement("rect", { x: "2", y: "2", width: "6", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "10", y: "2", width: "6", height: "12", rx: "1" })),
        insert: "\\,",
        cls: "template",
        directInsert: !0,
        action: "INSERT_CUSTOM",
        title: "Thin Space"
      },
      {
        label: /* @__PURE__ */ e.createElement("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "2", y: "2", width: "6", height: "12", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "8", y: "2", width: "6", height: "12", rx: "1" })),
        insert: "\\!",
        cls: "template",
        directInsert: !0,
        action: "INSERT_CUSTOM",
        title: "Negative Thin Space"
      }
      // { label: 'e', insert: 'e' }, { label: 'i', insert: 'i' },
      // { label: 'π', insert: '\\pi' },
      // { label: 'ℝ', insert: '\\mathbb{R}' }, { label: 'ℤ', insert: '\\mathbb{Z}' },
      // { label: 'ℕ', insert: '\\mathbb{N}' }, { label: 'ℚ', insert: '\\mathbb{Q}' },
      // { label: 'ℂ', insert: '\\mathbb{C}' }, { label: '∅', insert: '\\emptyset' },
      // { label: 'ℵ₀', insert: '\\aleph_0' },
      // { label: 'ξ', insert: '\\xi' },
      // { label: 'ρ', insert: '\\rho' }, { label: 'σ', insert: '\\sigma' },
      // { label: 'τ', insert: '\\tau' }, { label: 'υ', insert: '\\upsilon' },
      // { label: 'φ', insert: '\\varphi' }, { label: 'χ', insert: '\\chi' },
      // { label: 'ψ', insert: '\\psi' }, { label: 'ω', insert: '\\omega' },
      // { label: 'Γ', insert: '\\Gamma' },
      // { label: 'Θ', insert: '\\Theta' }, { label: 'Λ', insert: '\\Lambda' },
      // { label: 'Ξ', insert: '\\Xi' }, { label: 'Σ', insert: '\\Sigma' },
      // { label: 'Φ', insert: '\\Phi' }, { label: 'Ψ', insert: '\\Psi' },
      // { label: 'Ω', insert: '\\Omega' },
      // { label: 'θᵢ', insert: '\\theta_{#?}' }, { label: 'λₙ', insert: '\\lambda_{#?}' },
      // { label: 'μₓ', insert: '\\mu_{#?}' }, { label: 'σ²', insert: '\\sigma^{2}' },
      // { label: 'Δx', insert: '\\Delta #?' },
    ]
  },
  {
    label: "( )",
    fontSize: "9px",
    isTemplate: !0,
    mathLabel: "\\left( #? \\right) \\, \\overparen{#?}",
    items: [
      {
        type: "sep",
        cols: 3,
        small: !0,
        moreCols: 2,
        cls: "cme-matrix-subgroup",
        moreItems: [
          // Floor
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 12V52H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M52 12V52H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left\\lfloor#0\\right\\rfloor", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Floor Brackets" },
          // { label: '⌊ ⌋', insert: '\\lfloor #? \\rfloor', isWidget: true, title: 'Lfloor' },
          // Angle bracket with bar
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 18L2 29L10 40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "18", width: "10", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "32", y1: "18", x2: "32", y2: "40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "18", width: "10", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M54 18L62 29L54 40", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\left\\langle#?\\mid#?\\right\\rangle", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Angle Brackets with Vertical Bar" },
          // { label: '〈|', insert: '\\langle #? \\mid #? \\rangle', isWidget: true, title: 'Langle' },
          // Ceiling
          { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 52V12H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M52 52V12H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left\\lceil#0\\right\\rceil", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Ceiling Brackets" }
          // { label: '⌈ ⌉', insert: '\\lceil #? \\rceil', isWidget: true, title: 'Lceil' },
        ]
      },
      // Parenthes
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12 Q8 32 18 52", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12 Q56 32 46 52", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left(#0\\right)", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Parentheses" },
      // { label: '', insert: '\\left( #? \\right)', title: 'Parentheses' },
      // Vertical bars
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "12", x2: "16", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("line", { x1: "48", y1: "12", x2: "48", y2: "52", stroke: "#222", strokeWidth: "4" })), insert: "\\left|#0\\right|", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "vertical bars" },
      // { label: '| |', insert: '\\left| #? \\right|', title: 'Vertical bars' },
      // Angle brackets
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 14L6 32L18 50", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "19", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("path", { d: "M46 14L58 32L46 50", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), insert: "\\left\\langle #? \\right\\rangle", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Angle Brackets" },
      // { label: '⟨ ⟩', insert: '\\left\\langle #? \\right\\rangle', title: 'Angle brackets' },
      // Square brackets
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 12H12V52H18", stroke: "#222", strokeWidth: "4", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M46 12H52V52H46", stroke: "#222", strokeWidth: "4", fill: "none" })), insert: "\\left[#0\\right]", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Square Brackets" },
      // { label: '[ ]', insert: '\\left[ #? \\right]', title: 'Square brackets' },
      // Double vertical bars
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "10", y1: "12", x2: "10", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "12", x2: "16", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("line", { x1: "48", y1: "12", x2: "48", y2: "52", stroke: "#222", strokeWidth: "4" }), /* @__PURE__ */ e.createElement("line", { x1: "54", y1: "12", x2: "54", y2: "52", stroke: "#222", strokeWidth: "4" })), insert: "\\left\\Vert#?\\right\\Vert", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Double Vertical Bars" },
      // { label: '‖ ‖', insert: '\\| #? \\|', title: 'Double vertical bars' },
      // Curly brackets
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M20 12C16 12 16 18 18 22C19 24 19 26 16 29C19 32 19 34 18 36C16 40 16 46 20 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "18", width: "12", height: "22", rx: "2" }), /* @__PURE__ */ e.createElement("path", { d: "M44 12C48 12 48 18 46 22C45 24 45 26 48 29C45 32 45 34 46 36C48 40 48 46 44 52", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" })), insert: "\\left\\{#0\\right\\}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Curly Braces" },
      // { label: '{ }', insert: '\\left\\{ #? \\right\\}', title: 'Curly brackets' },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Overbrace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 26V20H24C28 20 30 18 32 14C34 18 36 20 40 20H54V26", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overbrace{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Overbrace" },
      // Overgroup
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 26C10 14 54 14 54 26", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overgroup{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Overgroup" },
      // Underbrace
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 44H24C28 44 30 46 32 50C34 46 36 44 40 44H54M10 44V38M54 44V38", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "14", width: "12", height: "20", rx: "1" })), insert: "\\underbrace{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Underbrace" },
      // Undergroup
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M10 38C10 50 54 50 54 38", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "14", width: "12", height: "20", rx: "1" })), insert: "\\undergroup{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Undergroup" },
      { type: "sep", cols: 3, small: !0, cls: "cme-symbol-subgroup" },
      // Overrightharpoon
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 20H48M40 12L48 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overrightharpoon{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Right harpoon accent" },
      // Arrow accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 20H48M40 12L48 20M40 28L48 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Arrow accent" },
      // Left-right arrow accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 20H48M40 12L48 20M40 28L48 20M24 12L16 20M24 28L16 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overleftrightarrow{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Left-right arrow accent" },
      // Bar accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 20H46", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Bar accent" },
      // Wide hat
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 24L32 12L46 24", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\class{cme-wide-hat-text}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Wide hat" },
      // Tilde accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M22 20 Q27 16 32 20 T42 20", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\tilde{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Tilde accent" },
      // Diaeresis accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M28 18v0M36 18v0", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\ddot{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Diaeresis accent" },
      // Dot accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M32 18v0", stroke: "#222", strokeWidth: "6", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\dot{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Dot accent" },
      {
        type: "sep",
        cols: 3,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreItems: [
          // Enclose actuarial
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("path", { d: "M4 2 H20 V22", stroke: "#666", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
            insert: "\\class{cme-enclose-actuarial}{#?}",
            title: "Enclose actuarial"
          },
          // Enclose rounded box
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "2", width: "16", height: "20", rx: "8", ry: "8", stroke: "#666", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
            insert: "\\class{cme-enclose-roundedbox}{#?}",
            title: "Enclose rounded box"
          }
        ]
      },
      // Bar accent
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 20H46", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "30", width: "12", height: "20", rx: "1" })), insert: "\\overline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Bar accent" },
      // Enclosed left
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "16", y1: "12", x2: "16", y2: "52", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "28", y: "18", width: "14", height: "28", rx: "2" })), insert: "\\left| #? \\right.", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Enclosed left" },
      // Enclosed box
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "4", y: "2", width: "16", height: "20", stroke: "#666", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
        insert: "\\class{cme-enclose-box}{#?}",
        forceLabel: !0,
        title: "Enclosed box"
      },
      // Enclosed bottom
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "18", y1: "46", x2: "46", y2: "46", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "26", y: "20", width: "12", height: "20", rx: "1" })), insert: "\\underline{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Enclosed bottom" },
      // Enclosed right
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("line", { x1: "48", y1: "12", x2: "48", y2: "52", stroke: "#222", strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "18", width: "14", height: "28", rx: "2" })), insert: "\\left. #? \\right|", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Enclosed right" },
      // Enclosed circle
      { label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("ellipse", { cx: "12", cy: "12", rx: "9", ry: "11", stroke: "#666666", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\class{cme-enclose-circle}{#?}", forceLabel: !0, title: "Enclose circle" },
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreCols: 2,
        moreItems: [
          //vertical
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
            insert: "\\class{cme-vertical-strike}{#?}",
            title: "Vertical strike"
          },
          // Long division
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("path", { d: "M3 22 Q11 12 3 2 H21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "11", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })),
            insert: ") \\!\\! \\overline{\\vphantom{1}\\;\\;#?\\;}",
            directInsert: !0,
            title: "Long division"
          },
          // Horizontal and vertical strike
          {
            label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "12", x2: "18", y2: "12", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
            insert: "\\class{cme-horizontal-vertical-strike}{#?}",
            title: "Horizontal and vertical strike"
          }
        ]
      },
      //cancel
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "21", x2: "15", y2: "3", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-cancel-strike}{#0}",
        forceLabel: !0,
        title: "Cancel strike"
      },
      // Horizontal strike
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "6", y1: "12", x2: "18", y2: "12", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-horizontal-strike}{#?}",
        forceLabel: !0,
        title: "Horizontal strike"
      },
      // Down diagonal strike
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "3", x2: "15", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-down-strike}{#0}",
        forceLabel: !0,
        title: "Down diagonal strike"
      },
      // Up and down diagonal strike
      {
        label: /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, /* @__PURE__ */ e.createElement("rect", { x: "9", y: "7", width: "6", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "21", x2: "15", y2: "3", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("line", { x1: "9", y1: "3", x2: "15", y2: "21", stroke: "#666", strokeWidth: "2", strokeLinecap: "round" })),
        insert: "\\class{cme-cross-strike}{#?}",
        forceLabel: !0,
        title: "Cross strike"
      }
    ]
  },
  {
    label: "∑ ⋃ ",
    fontSize: "8px",
    mathLabel: "\\sum \\, \\bigcup",
    isTemplate: !0,
    items: [
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Big operator with under and over scripts
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M44 16 L22 16 L34 32 L22 48 L44 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "-3", width: "10", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "56", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\sum_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with limits" },
      // Big operator with side scripts (subscript/superscript)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M38 16 L16 16 L28 32 L16 48 L38 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "2", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "39", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\sum\\nolimits_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with side limits" },
      // Big operator with under script
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M44 16 L22 16 L34 32 L22 48 L44 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "54", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\sum_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with subscript" },
      // Big operator with side script (subscript only)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M38 16 L16 16 L28 32 L16 48 L38 48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "39", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\sum\\nolimits_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Summation with side subscript" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Big operator with subscript and superscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 16 H46 M22 16 V48 M42 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "-2", width: "10", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "50", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\prod_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with limits" },
      // Big operator with side scripts (subscript/superscript)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 16 H40 M16 16 V48 M36 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "4", width: "10", height: "16", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "44", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\prod\\nolimits_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with side limits" },
      // Big operator with subscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M18 16 H46 M22 16 V48 M42 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "27", y: "50", width: "10", height: "12", rx: "1", opacity: "0.45" })), insert: "\\prod_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with subscript" },
      // Big operator with side script (subscript only)
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 16 H40 M16 16 V48 M36 16 V48", stroke: "#222", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "39", width: "10", height: "16", rx: "1", opacity: "0.45" })), insert: "\\prod\\nolimits_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Product with side subscript" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      // Base with over and underscript
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "24", y: "4", width: "8", height: "12", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("rect", { x: "22", y: "22", width: "12", height: "20", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "48", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\overset{#?}{\\underset{\\raisebox{-4px}{#?}}{#?}}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Over and underscript" },
      // Right sub/superscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "1", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}^{\\raisebox{0.6em}{#?}}", isWidget: !0, title: "Subscript and superscript" },
      // Element under
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 4 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32" } }, /* @__PURE__ */ e.createElement("rect", { x: "19", y: "28", width: "12", height: "18", rx: "1" }), /* @__PURE__ */ e.createElement("rect", { x: "21", y: "52", width: "8", height: "12", rx: "1", opacity: "0.45" })), insert: "\\underset{\\raisebox{-4px}{#?}}{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Underscript" },
      // Right subscript
      { label: /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ e.createElement("rect", { x: "1", y: "1", width: "14", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2" }), /* @__PURE__ */ e.createElement("rect", { x: "17", y: "17", width: "6", height: "6", fill: "none", stroke: "#2E7D32", strokeWidth: "1.5" })), forceLabel: !0, insert: "{\\style{font-size:1.8em; transform: scale(0.9, 1.2); display: inline-block; padding: 0.2em 0;}{#?}}_{#?}", isWidget: !0, title: "Subscript" },
      {
        type: "sep",
        cols: 1,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreCols: 3,
        moreItems: [
          { label: "⨅", insert: "⨅", title: "Big square cap" },
          // U+2A05 Big square cap
          { label: "∏", insert: "∏", title: "Product" },
          // U+220F Product
          { label: "∑", insert: "∑", title: "Summation" },
          // U+2211 Summation
          { label: "⨆", insert: "⨆", title: "Big square cup" },
          // U+2A06 Big square cup
          { label: "∐", insert: "∐", title: "Coproduct" }
          // U+2210 Coproduct
        ]
      },
      // Big Union
      { label: "⋃", insert: "\\bigcup", title: "Big union" },
      // Big Intersection
      { label: "⋂", insert: "\\bigcap", title: "Big intersection" }
    ]
  },
  // {
  //   label: 'sin/cos', items: [
  //     { label: 'sin', insert: '\\sin' }, { label: 'cos', insert: '\\cos' },
  //     { label: 'tan', insert: '\\tan' }, { label: 'cot', insert: '\\cot' },
  //     { label: 'sec', insert: '\\sec' }, { label: 'csc', insert: '\\csc' },
  //     { label: 'sin(□)', insert: '\\sin\\left(#0\\right)' },
  //     { label: 'cos(□)', insert: '\\cos\\left(#0\\right)' },
  //     { label: 'tan(□)', insert: '\\tan\\left(#0\\right)' },
  //     { label: 'sin⁻¹', insert: '\\sin^{-1}' }, { label: 'cos⁻¹', insert: '\\cos^{-1}' },
  //     { label: 'tan⁻¹', insert: '\\tan^{-1}' },
  //     { label: 'sin²x', insert: '\\sin^{2}\\left(#0\\right)' },
  //     { label: 'cos²x', insert: '\\cos^{2}\\left(#0\\right)' },
  //     { label: 'tan²x', insert: '\\tan^{2}\\left(#0\\right)' },
  //     { label: 'sinh', insert: '\\sinh' }, { label: 'cosh', insert: '\\cosh' },
  //     { label: 'tanh', insert: '\\tanh' },
  //     { label: 'ln', insert: '\\ln' },
  //     { label: 'exp', insert: '\\exp' },
  //   ]
  // },
  {
    label: "∫ lim",
    fontSize: "7px",
    mathLabel: "\\int_{#?}^{#?} \\, \\lim",
    isTemplate: !0,
    items: [
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      //infinity 
      { label: /* @__PURE__ */ e.createElement("svg", { width: "24", height: "26", viewBox: "0 0 44 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "10", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" })), insert: "\\int_{#?}^{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Int" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "40", height: "26", viewBox: "0 0 96 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "10", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "62", y: "38", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", stroke: "none" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "76", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\int_{#?}^{#?} #0 \\, d#?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Definite integral" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "24", height: "26", viewBox: "0 0 44 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" })), insert: "\\int_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Integral with subscript" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "40", height: "26", viewBox: "0 0 96 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "4", y: "54", fontFamily: "serif", fontSize: "58", fontStyle: "italic", fill: "#222", stroke: "none", transform: "rotate(10, 14, 32)" }, "∫"), /* @__PURE__ */ e.createElement("rect", { x: "16", y: "46", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "62", y: "38", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", stroke: "none" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "76", y: "24", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\int_{#?} #?\\,d#?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Integral with subscript and differential" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      //derivatives
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "42", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "36", fill: "#222", textAnchor: "middle" }, "d")), insert: "\\mathrm{d}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Mathrm d" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "32", x2: "56", y2: "32", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "24", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "8", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "54", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "d"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "38", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\frac{d#?}{d#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Derivative" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "44", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "36", fill: "#222", textAnchor: "middle" }, "∂")), insert: "\\partial", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Partial differential" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("line", { x1: "8", y1: "32", x2: "56", y2: "32", stroke: "#222", strokeWidth: "3" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "24", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "∂"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "8", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ e.createElement("text", { x: "22", y: "54", fontFamily: "serif", fontStyle: "italic", fontWeight: "bold", fontSize: "24", fill: "#222", textAnchor: "middle" }, "∂"), /* @__PURE__ */ e.createElement("rect", { x: "32", y: "38", width: "14", height: "16", rx: "2", stroke: "#2E7D32", strokeWidth: "2", fill: "none" })), insert: "\\frac{\\partial#?}{\\partial #?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Partial derivative" },
      { type: "sep", cols: 1, small: !0, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "32", fill: "#222", stroke: "none", fontSize: "24", fontFamily: "serif", textAnchor: "middle" }, "lim"), /* @__PURE__ */ e.createElement("rect", { x: "14", y: "40", width: "10", height: "14", rx: "1", opacity: "0.45" }), /* @__PURE__ */ e.createElement("text", { x: "28", y: "52", fill: "#222", stroke: "none", fontSize: "16", fontFamily: "sans-serif" }, "→"), /* @__PURE__ */ e.createElement("text", { x: "44", y: "52", fill: "#222", stroke: "none", fontSize: "18", fontFamily: "serif" }, "∞")), insert: "\\lim_{#?\\to\\infty}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Limit to infinity" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "32", y: "32", fill: "#222", stroke: "none", fontSize: "24", fontFamily: "serif", textAnchor: "middle" }, "lim"), /* @__PURE__ */ e.createElement("rect", { x: "24", y: "40", width: "16", height: "16", rx: "1", opacity: "0.45" })), insert: "\\lim_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Limit" },
      { type: "sep", cols: 2, small: !0, cls: "cme-matrix-subgroup" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 24 L28 24 L20 40 Z", stroke: "#222", strokeWidth: "3", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("path", { d: "M34 26 L46 38 M46 26 L34 38", stroke: "#222", strokeWidth: "3", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "50", y: "22", width: "12", height: "20", rx: "1" })), insert: "\\nabla\\times #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Curl" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M16 24 L36 24 L26 44 Z", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "44", y: "24", width: "16", height: "20", rx: "1" })), insert: "\\nabla #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Gradient" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M12 24 L28 24 L20 40 Z", stroke: "#222", strokeWidth: "3", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("circle", { cx: "38", cy: "32", r: "3", fill: "#222", stroke: "none" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "22", width: "12", height: "20", rx: "1" })), insert: "\\nabla\\cdot #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Divergence" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "3", style: { display: "inline-block", verticalAlign: "middle", color: "#2E7D32", overflow: "visible" } }, /* @__PURE__ */ e.createElement("path", { d: "M26 16 L12 44 L40 44 Z", stroke: "#222", strokeWidth: "4", fill: "none", strokeLinejoin: "round" }), /* @__PURE__ */ e.createElement("rect", { x: "46", y: "24", width: "16", height: "20", rx: "1" })), insert: "\\Delta #?", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Laplacian" },
      {
        type: "sep",
        cols: 2,
        small: !0,
        cls: "cme-matrix-subgroup",
        moreItems: [
          { label: "∭", insert: "\\iiint", title: "Triple integral" },
          // { label: '∰', insert: '\\oiiint', title: 'Closed volume integral' },
          { label: "∰", insert: "\\mathop{{\\style{font-size:1em;}{\\iiint}}\\mkern-28mu\\class{wider-circle}{\\bigcirc}\\mkern18mu}", title: "Closed volume integral" }
        ]
      },
      { label: "∫", insert: "\\int", title: "Integral" },
      { label: "∬", insert: "\\iint", title: "Double integral" },
      { label: "∮", insert: "\\oint", title: "Contour integral" },
      // { label: '∯', insert: '\\oiint', title: 'surface integral' },
      { label: "∯", insert: "\\mathop{{\\style{font-size:1em;}{\\iint}}\\mkern-23mu\\class{wide-circle}{\\bigcirc}\\mkern14mu}", title: "Custom surface integral" },
      {
        type: "sep",
        cols: 3,
        cls: "cme-trig-subgroup",
        moreCols: "3",
        moreItems: [
          { label: "csc", insert: "\\csc\\left(#?\\right)", title: "Cosecant" },
          { label: "sec", insert: "\\sec\\left(#?\\right)", title: "Secant" },
          { label: "cot", insert: "\\cot\\left(#?\\right)", title: "Cotangent" },
          { label: "sin⁻¹", insert: "\\sin^{-1}", title: "Inverse sine" },
          { label: "cos⁻¹", insert: "\\cos^{-1}", title: "Inverse cosine" },
          { label: "tan⁻¹", insert: "\\tan^{-1}", title: "Inverse tangent" }
        ]
      },
      { label: "sin", insert: "\\sin", title: "Sine" },
      { label: "cos", insert: "\\cos", title: "Cosine" },
      { label: "tan", insert: "\\tan", title: "Tangent" },
      { label: "log", insert: "\\log", title: "Logarithm" },
      { label: /* @__PURE__ */ e.createElement("svg", { width: "26", height: "26", viewBox: "0 0 64 64", fill: "none", style: { display: "inline-block", verticalAlign: "middle", overflow: "visible" } }, /* @__PURE__ */ e.createElement("text", { x: "2", y: "42", fontFamily: "serif", fontSize: "28", fill: "#222", stroke: "none" }, "log"), /* @__PURE__ */ e.createElement("rect", { x: "42", y: "36", width: "8", height: "10", rx: "1", stroke: "#2E7D32", strokeWidth: "1.5", fill: "none" })), insert: "\\log_{#?}", cls: "template", directInsert: !0, action: "INSERT_CUSTOM", title: "Logarithm with base" },
      { label: "ln", insert: "\\ln", title: "Natural logarithm" }
      // { label: '∫∫dA', insert: '\\iint_{#?} #0 \\, dA' },
      // { label: '∮C', insert: '\\oint_{#?} #0 \\, d#?' },
      // { label: '∫∫∫dV', insert: '\\iiint_{#?} #0 \\, dV' },
      // { label: '∫_C', insert: '\\int_{C} #0 \\, d#?' },
      // { label: '∮_C', insert: '\\oint_{C} #0 \\, d#?' },
      // { label: '∫∫_D', insert: '\\iint_{D} #0 \\, dA' },
      // { label: 'u-sub', insert: '\\int #0 \\, du' },
      // { label: '∭', insert: '\\iiint' },   // Triple integral
      // { label: '∰', insert: '\\oiiint' },   // Closed volume integral
    ]
  }
  // {
  //   label: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 64 64"
  //       width="20"
  //       height="20"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       style={{ verticalAlign: 'middle' }}
  //     >
  //       <path d="M32 12 L24 24 H40 Z" fill="currentColor" />
  //       <path d="M16 36 C16 48, 48 48, 48 36" />
  //       <path d="M22 36 C22 43, 42 43, 42 36" />
  //     </svg>
  //   ),
  //   items: [
  //     { type: 'sep', cols: 2, cls: 'cme-trig-subgroup' }
  //   ]
  // },
];
function mt(t = "") {
  if (String(t).match(/^\\ce\{([\s\S]*)\}$/) || t.includes("\\class{cme-"))
    return t;
  const i = t.replace(/\\text\{([^}]*)\}/g, "$1").replace(/\$/g, "").trim();
  return i ? `\\ce{${i}}` : "";
}
function ce(t) {
  return t === "matrix" ? "\\begin{matrix} \\placeholder{} & \\placeholder{} \\\\ \\placeholder{} & \\placeholder{} \\end{matrix}" : t === "bmatrix" ? "\\begin{bmatrix} \\placeholder{} & \\placeholder{} \\\\ \\placeholder{} & \\placeholder{} \\end{bmatrix}" : t === "pmatrix" ? "\\begin{pmatrix} \\placeholder{} & \\placeholder{} \\\\ \\placeholder{} & \\placeholder{} \\end{pmatrix}" : t === "vmatrix" ? "\\begin{vmatrix} \\placeholder{} & \\placeholder{} \\\\ \\placeholder{} & \\placeholder{} \\end{vmatrix}" : t.replace(/#0|#\?/g, "\\placeholder{}");
}
class dt extends Me {
  static get pluginName() {
    return "MathInlinePlugin";
  }
  static get requires() {
    return [_e];
  }
  init() {
    const r = this.editor;
    r.model.schema.register("mathInline", {
      isInline: !0,
      isObject: !0,
      allowWhere: "$text",
      allowAttributes: ["latex"]
    }), r.model.schema.addChildCheck((a, n) => {
      if (n.name === "mathInline")
        return !0;
    }), r.conversion.for("editingDowncast").elementToElement({
      model: "mathInline",
      view: (a, { writer: n }) => {
        const h = a.getAttribute("latex") || "", o = "math-" + Math.random().toString(36).substr(2, 9);
        window.__ckMathWidgets.set(o, a);
        const s = n.createContainerElement("span", {
          class: "ck-math-widget ck-math-inline-word",
          contenteditable: "false",
          "data-math-id": o,
          "data-latex": h
        }), m = n.createRawElement(
          "span",
          {
            class: "ck-math-widget-inner",
            style: "display:inline-block;vertical-align:middle;margin:0 2px;cursor:pointer;width:auto;max-width:100%;pointer-events:none;"
          },
          (C) => {
            const k = document.createElement("math-field");
            k.setAttribute("read-only", ""), k.setAttribute("math-virtual-keyboard-policy", "manual"), k.setAttribute("tabindex", "-1"), k.style.display = "inline-block", k.style.width = "auto", k.style.maxWidth = "100%", k.style.verticalAlign = "middle", k.style.border = "none", k.style.background = "transparent", k.style.outline = "none", k.style.fontSize = "inherit", k.style.minHeight = "auto", k.style.padding = "0 2px", k.style.margin = "0", k.style.pointerEvents = "none";
            const v = () => {
              if (!k.isConnected) {
                requestAnimationFrame(v);
                return;
              }
              window.__cme_macros && (k.macros = { ...k.macros, ...window.__cme_macros });
              let y = pe(
                de(
                  h.replace(/\\placeholder(?:\[[^\]]*\])?\{((?:[^{}]*|\{[^{}]*\})*)\}/g, (g, E) => E.trim() === "" ? "\\quad " : E)
                )
              );
              y.includes("\\enclose") && /^\\ce\{[\s\S]*\}$/i.test(y.trim()) && (y = y.trim().replace(/^\\ce\{([\s\S]*)\}$/i, "$1")), k.setValue ? k.setValue(y, { silenceNotifications: !0 }) : k.value = y;
            };
            customElements.get("math-field") ? requestAnimationFrame(v) : customElements.whenDefined("math-field").then(() => requestAnimationFrame(v)), C.appendChild(k);
            const b = () => {
              const y = C.parentElement;
              y && st(r, y);
            };
            b(), requestAnimationFrame(b);
          }
        );
        return n.insert(n.createPositionAt(s, 0), m), Ge(s, n, { label: "math formula" });
      }
    });
    const i = r.editing.view.document;
    this.listenTo(i, "mousedown", (a, n) => {
      const h = Te(n.domTarget);
      h && n.domEvent.button === 0 && (a.stop(), n.preventDefault(), ge(
        r,
        null,
        ee(h),
        h
      ));
    }, { priority: "high" }), r.conversion.for("dataDowncast").elementToElement({
      model: "mathInline",
      view: (a, { writer: n }) => {
        const h = a.getAttribute("latex") || "", o = n.createContainerElement("span", {
          class: "math-tex",
          "data-latex": h,
          // Keep raw latex in data-latex for restoring
          style: "display:inline;"
        });
        let s = pe(
          de(
            at(h)
          )
        );
        return s.includes("\\enclose") && /^\\ce\{[\s\S]*\}$/i.test(s.trim()) && (s = s.trim().replace(/^\\ce\{([\s\S]*)\}$/i, "$1")), n.insert(n.createPositionAt(o, 0), n.createText(s)), o;
      }
    }), r.conversion.for("upcast").elementToElement({
      view: {
        name: "span",
        classes: "math-tex"
      },
      model: (a, { writer: n }) => {
        const h = a.getAttribute("data-latex") || "";
        return n.createElement("mathInline", { latex: h });
      }
    });
  }
}
const pt = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M4 12h3l3 6l5-12h5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', bt = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor" font-family="system-ui, sans-serif">C</text><text x="6" y="8" font-size="4" font-weight="bold" fill="currentColor" font-family="system-ui, sans-serif">6</text></svg>';
function gt(t) {
  return class extends Me {
    init() {
      const i = this.editor;
      i.ui.componentFactory.add("mathType", () => {
        const a = new ue();
        return a.set({ label: "Math", icon: pt, tooltip: "Insert Math Formula" }), a.on("execute", () => t("math")), a;
      }), i.ui.componentFactory.add("chemType", () => {
        const a = new ue();
        return a.set({ label: "Chemistry", icon: bt, tooltip: "Insert Chemistry Formula" }), a.on("execute", () => t("chem")), a;
      });
    }
  };
}
function kt({ matrixType: t, x: r, y: i, onSelect: a, onMouseEnter: n, onMouseLeave: h }) {
  const [o, s] = D({ r: 2, c: 2 }), m = Math.max(10, parseInt(o.r, 10) || 0), C = Math.max(10, parseInt(o.c, 10) || 0), k = (g) => {
    const E = g.target.value;
    if (E === "") {
      s((I) => ({ ...I, r: "" }));
      return;
    }
    const R = parseInt(E, 10);
    isNaN(R) || s((I) => ({ ...I, r: Math.max(1, Math.min(10, R)) }));
  }, v = () => {
    (o.r === "" || isNaN(parseInt(o.r, 10))) && s((g) => ({ ...g, r: 1 }));
  }, b = (g) => {
    const E = g.target.value;
    if (E === "") {
      s((I) => ({ ...I, c: "" }));
      return;
    }
    const R = parseInt(E, 10);
    isNaN(R) || s((I) => ({ ...I, c: Math.max(1, Math.min(10, R)) }));
  }, y = () => {
    (o.c === "" || isNaN(parseInt(o.c, 10))) && s((g) => ({ ...g, c: 1 }));
  };
  return U(() => {
    const g = (E) => {
      if (E.key === "Enter") {
        E.preventDefault(), E.stopPropagation();
        const R = parseInt(o.r, 10) || 1, I = parseInt(o.c, 10) || 1;
        a(R, I);
      }
    };
    return window.addEventListener("keydown", g, !0), () => window.removeEventListener("keydown", g, !0);
  }, [o.r, o.c, a]), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "cme-matrix-hover-popover ck-only",
      style: { top: `${i}px`, left: `${r}px` },
      onMouseDown: (g) => g.stopPropagation(),
      onMouseEnter: n,
      onMouseLeave: h
    },
    /* @__PURE__ */ e.createElement("div", { className: "cme-matrix-hover-grid" }, Array.from({ length: m }).map((g, E) => /* @__PURE__ */ e.createElement("div", { key: E, className: "cme-matrix-hover-row" }, Array.from({ length: C }).map((R, I) => {
      const F = parseInt(o.r, 10) || 0, L = parseInt(o.c, 10) || 0, T = E < F && I < L;
      return /* @__PURE__ */ e.createElement(
        "div",
        {
          key: `${E}-${I}`,
          className: `cme-matrix-hover-cell${T ? " selected" : ""}`,
          onMouseEnter: () => s({ r: E + 1, c: I + 1 }),
          onClick: (M) => {
            M.preventDefault(), M.stopPropagation(), a(E + 1, I + 1);
          }
        }
      );
    })))),
    /* @__PURE__ */ e.createElement("div", { className: "cme-matrix-hover-footer" }, /* @__PURE__ */ e.createElement("div", { className: "cme-matrix-counter" }, /* @__PURE__ */ e.createElement("span", null, "R"), /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        className: "cme-counter-val",
        value: o.r,
        onChange: k,
        onBlur: v,
        min: "1",
        max: "10"
      }
    ), /* @__PURE__ */ e.createElement("div", { className: "cme-counter-btns" }, /* @__PURE__ */ e.createElement("button", { type: "button", onClick: () => s((g) => {
      const E = parseInt(g.r, 10) || 1;
      return { ...g, r: Math.min(10, E + 1) };
    }) }, "▲"), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: () => s((g) => {
      const E = parseInt(g.r, 10) || 1;
      return { ...g, r: Math.max(1, E - 1) };
    }) }, "▼"))), /* @__PURE__ */ e.createElement("div", { className: "cme-matrix-counter" }, /* @__PURE__ */ e.createElement("span", null, "C"), /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        className: "cme-counter-val",
        value: o.c,
        onChange: b,
        onBlur: y,
        min: "1",
        max: "10"
      }
    ), /* @__PURE__ */ e.createElement("div", { className: "cme-counter-btns" }, /* @__PURE__ */ e.createElement("button", { type: "button", onClick: () => s((g) => {
      const E = parseInt(g.c, 10) || 1;
      return { ...g, c: Math.min(10, E + 1) };
    }) }, "▲"), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: () => s((g) => {
      const E = parseInt(g.c, 10) || 1;
      return { ...g, c: Math.max(1, E - 1) };
    }) }, "▼"))))
  );
}
let K = !1, he = null, j = null;
function ut({ mode: t, onInsert: r, onClose: i, initialLatex: a, isEditing: n }) {
  const h = _(null), [o, s] = D(0), [m, C] = D(null), [k, v] = D(null), [b, y] = D(null), [g, E] = D(null);
  _(null);
  const [R, I] = D({ x: 0, y: 0 }), [F, L] = D(!1), T = _({ x: 0, y: 0 }), [M, B] = D(!1), [S, V] = D(!1);
  U(() => {
    const l = (d) => {
      F && I({
        x: d.clientX - T.current.x,
        y: d.clientY - T.current.y
      });
    }, c = () => L(!1);
    return F && (window.addEventListener("mousemove", l), window.addEventListener("mouseup", c)), () => {
      window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", c);
    };
  }, [F]);
  const Q = (l) => {
    l.target.closest(".cme-popup-controls") || M || (L(!0), T.current = {
      x: l.clientX - R.x,
      y: l.clientY - R.y
    });
  }, X = t === "math" ? ct : ht, [u, oe] = D({
    bold: !1,
    italic: !1,
    color: "none",
    fontFamily: "none",
    fontSize: "auto"
  }), Z = z(() => {
    if (K || window.__cmeIgnoreStyleUpdate && Date.now() - window.__cmeIgnoreStyleUpdate < 150) return;
    const l = h.current;
    if (!(!l || typeof l.queryStyle != "function"))
      try {
        const c = window.__cmeManualBold !== void 0 ? window.__cmeManualBold : l.queryStyle({ fontSeries: "b" }) === "all" || l.queryStyle({ variantStyle: "bold" }) === "all", d = window.__cmeManualItalic !== void 0 ? window.__cmeManualItalic : l.queryStyle({ variantStyle: "italic" }) === "all" || l.queryStyle({ shape: "it" }) === "all", x = window.__cmeManualFontFamily !== void 0 ? window.__cmeManualFontFamily : ["roman", "sans-serif", "monospace"].find(
          (p) => l.queryStyle({ fontFamily: p }) === "all"
        ) || "none", w = window.__cmeManualFontSize !== void 0 ? window.__cmeManualFontSize : [5, 7, 9].find(
          (p) => l.queryStyle({ fontSize: p }) === "all"
        ) || "auto", f = [
          "black",
          "dimgray",
          "gray",
          "darkgray",
          "silver",
          "white",
          "red",
          "orange",
          "yellow",
          "lime",
          "cyan",
          "blue",
          "purple",
          "magenta",
          "pink",
          "brown",
          "maroon",
          "olive",
          "green",
          "teal",
          "navy",
          "indigo",
          "violet",
          "gold"
        ].find(
          (p) => l.queryStyle({ color: p }) === "all"
        ) || "none";
        oe((p) => ({
          bold: c,
          italic: d,
          fontFamily: x,
          fontSize: String(w),
          color: f
        }));
      } catch (c) {
        console.warn("Failed to query active styles:", c);
      }
  }, []);
  U(() => {
    if (!m && !b) return;
    const l = (c) => {
      !c.target.closest(".cme-matrix-hover-popover") && !c.target.closest(".cme-matrix-btn-wrapper") && C(null), !c.target.closest(".cme-color-picker-popup") && !c.target.closest('[title="Text Color"]') && y(null);
    };
    return window.addEventListener("mousedown", l, !0), window.addEventListener("pointerdown", l, !0), () => {
      window.removeEventListener("mousedown", l, !0), window.removeEventListener("pointerdown", l, !0);
    };
  }, [m, b]), U(() => {
    if (!g) return;
    const l = (c) => {
      !c.target.closest(".cme-more-popup") && !c.target.closest(".cme-more-trigger-btn") && E(null);
    };
    return window.addEventListener("mousedown", l, !0), window.addEventListener("pointerdown", l, !0), () => {
      window.removeEventListener("mousedown", l, !0), window.removeEventListener("pointerdown", l, !0);
    };
  }, [g]), U(() => {
    const l = setTimeout(() => $e(), 50);
    return () => clearTimeout(l);
  }, [o]), U(() => {
    if (K) return;
    const l = j;
    if (!l) return;
    l.macros = { ...l.macros, ...window.__cme_macros || {} }, l.defaultMode = "math";
    const c = () => {
      if (typeof l.applyStyle == "function" && l.applyStyle({ variantStyle: "up" }), a) {
        let d = a;
        if (t === "chem") {
          const x = d.match(/^\\ce\{([\s\S]*)\}$/i);
          x && (d = x[1]);
        }
        d = de(d), d = pe(d), l.setValue ? l.setValue("", { silenceNotifications: !0 }) : l.value = "", l.executeCommand(["insert", d, { insertionMode: "replaceAll" }]);
      }
      requestAnimationFrame(() => l.focus());
    };
    customElements.get("math-field") ? requestAnimationFrame(c) : customElements.whenDefined("math-field").then(() => requestAnimationFrame(c));
  }, [t, a]), U(() => {
    const l = j;
    if (!l) return;
    const c = (d) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(d.key) ? (K = !1, clearTimeout(he), window.__cmeManualBold = void 0, window.__cmeManualItalic = void 0, window.__cmeManualFontFamily = void 0, window.__cmeManualFontSize = void 0) : (d.key.length === 1 || d.key === " ") && (K = !0, clearTimeout(he), he = setTimeout(() => {
        K = !1;
      }, 500)), d.key.length === 1 && !d.ctrlKey && !d.metaKey && !d.altKey && /[a-zA-Z0-9]/.test(d.key)) {
        d.preventDefault(), d.stopPropagation();
        const x = u.fontFamily === "sans-serif", w = u.fontFamily === "monospace", f = u.bold, p = u.italic;
        let O = "\\mathrm";
        x ? O = "\\mathsf" : w ? O = "\\mathtt" : p && !f ? O = "\\mathit" : f && !p && (O = "\\mathbf");
        let H = `${O}{${d.key}}`;
        f && p ? (H = `\\mathbfit{${d.key}}`, x && (H = `\\boldsymbol{\\mathsf{${d.key}}}`), w && (H = `\\boldsymbol{\\mathtt{${d.key}}}`)) : f && (x || w) && (H = `\\boldsymbol{${H}}`);
        let J = H;
        const Y = u.fontSize === "auto" ? 5 : parseInt(u.fontSize, 10);
        if (Y !== 5) {
          const te = { 1: "\\tiny", 2: "\\scriptsize", 3: "\\footnotesize", 4: "\\small", 5: "\\normalsize", 6: "\\large", 7: "\\Large", 8: "\\LARGE", 9: "\\huge", 10: "\\Huge" };
          te[Y] && (J = `{${te[Y]} ${J}}`);
        }
        u.color !== "none" && (J = `\\textcolor{${u.color}}{${J}}`), l.executeCommand(["insert", J]);
        return;
      }
      d.key === " " ? (d.preventDefault(), l.executeCommand(["insert", "\\, "])) : d.key === "Enter" && (d.preventDefault(), d.stopImmediatePropagation(), l.executeCommand("addRowAfter"), setTimeout(() => {
        typeof l.applyStyle == "function" && (l.applyStyle({
          fontSeries: u.bold ? "b" : "auto",
          variantStyle: u.italic ? "italic" : "up"
        }), u.color !== "none" && l.applyStyle({ color: u.color }), u.fontFamily !== "none" && l.applyStyle({ fontFamily: u.fontFamily }), u.fontSize !== "auto" && l.applyStyle({
          fontSize: parseInt(u.fontSize, 10),
          size: parseInt(u.fontSize, 10)
        }), Z());
      }, 10));
    };
    return l.addEventListener("keydown", c, !0), () => l.removeEventListener("keydown", c, !0);
  }, [t, u, Z]), U(() => {
    const l = j;
    if (!l) return;
    const c = () => {
      setTimeout(() => {
        const d = l.shadowRoot;
        if (!d) return;
        const x = d.querySelector(".ML__caret") || d.querySelector('[class*="caret"]');
        x && x.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" }), Z();
      }, 0);
    };
    return l.addEventListener("selection-change", c), l.addEventListener("input", c), l.addEventListener("keydown", c), setTimeout(Z, 50), () => {
      l.removeEventListener("selection-change", c), l.removeEventListener("input", c), l.removeEventListener("keydown", c);
    };
  }, [Z]);
  const G = z((l) => {
    const c = j;
    c && (c.focus(), c.executeCommand(["insert", l]));
  }, []), We = z((l, c, d) => {
    let x = `\\begin{${l}} `;
    for (let w = 0; w < c; w++) {
      for (let f = 0; f < d; f++)
        x += "#?", f < d - 1 && (x += " & ");
      w < c - 1 && (x += " \\\\ ");
    }
    x += ` \\end{${l}}`, G(x);
  }, [G]), Be = (l) => {
    l.stopPropagation(), B((c) => !c), V(!1);
  }, Ie = (l) => {
    l.stopPropagation(), V((c) => !c), B(!1);
  }, De = () => {
    const l = j;
    if (!l) return;
    let c = l.getValue ? l.getValue() : l.value;
    if (!c || c.trim() === "") {
      i();
      return;
    }
    t === "chem" && (c = mt(c)), r(c), l.setValue ? l.setValue("") : l.value = "", i();
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `cme-editor-popup ${M ? "maximized" : ""} ${S ? "minimized" : ""}`,
      style: !M && !S ? { transform: `translate(${R.x}px, ${R.y}px)` } : { transform: "none" },
      onMouseDown: (l) => l.stopPropagation()
    },
    /* @__PURE__ */ e.createElement("div", { className: "cme-popup-topbar" }, /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "cme-popup-header",
        onMouseDown: Q,
        style: { cursor: F ? "grabbing" : M ? "default" : "grab" }
      },
      /* @__PURE__ */ e.createElement("span", null, n ? t === "math" ? "Edit Math Formula" : "Edit Chemistry Formula" : t === "math" ? "Math Editor" : "Chemistry Editor")
    ), /* @__PURE__ */ e.createElement("div", { className: "cme-popup-controls" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "cme-popup-btn", onClick: Ie, title: "Minimize" }, "—"), /* @__PURE__ */ e.createElement("button", { type: "button", className: "cme-popup-btn", onClick: Be, title: "Maximize" }, "⤢"), /* @__PURE__ */ e.createElement("button", { type: "button", className: "cme-popup-btn", onClick: i, title: "Close" }, "✕"))),
    /* @__PURE__ */ e.createElement("div", { className: "cme-toolbar", role: "toolbar", "aria-label": "Symbol palette" }, /* @__PURE__ */ e.createElement("div", { className: "cme-toolbar-groups" }, X.map((l, c) => {
      const d = o === c;
      return /* @__PURE__ */ e.createElement(
        "button",
        {
          key: l.isMatrix ? "matrix-tab" : l.label,
          className: `cme-group-tab${d ? " active" : ""}`,
          type: "button",
          onMouseDown: (x) => {
            x.preventDefault(), s(c), C(null);
          }
        },
        l.mathLabel ? /* @__PURE__ */ e.createElement(
          "math-field",
          {
            "read-only": !0,
            tabIndex: -1,
            style: {
              pointerEvents: "none",
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: l.fontSize || (l.isMatrix ? "8px" : "11px"),
              display: "inline-block",
              width: "auto",
              minHeight: "auto",
              padding: "0",
              margin: "0",
              boxShadow: "none",
              color: d ? "#333333" : "#ffffff"
            }
          },
          l.mathLabel
        ) : l.label
      );
    })), /* @__PURE__ */ e.createElement("div", { className: "cme-toolbar-items" }, (() => {
      var x;
      const l = ((x = X[o]) == null ? void 0 : x.items) || [], c = l.some((w) => w.type === "sep"), d = [];
      if (c) {
        let w = { cols: 2, small: !1, cls: "", items: [], moreItems: null };
        for (const f of l)
          f.type === "sep" ? (w.items.length > 0 && d.push(w), w = { cols: f.cols || 2, small: !!f.small, cls: f.cls || "", items: [], moreItems: f.moreItems || null, moreCols: f.moreCols || 1 }) : w.items.push(f);
        w.items.length > 0 && d.push(w);
      } else
        for (let f = 0; f < l.length; f += 4)
          d.push({
            cols: 2,
            small: !1,
            cls: "",
            items: l.slice(f, f + 4)
          });
      return d.map((w, f) => /* @__PURE__ */ e.createElement(
        "div",
        {
          key: f,
          className: `cme-symbol-subgroup${w.small ? " cme-symbol-subgroup--small" : ""}${w.cls ? ` ${w.cls}` : ""}${w.moreItems ? " cme-subgroup-has-more" : ""}`,
          style: { gridTemplateColumns: `repeat(${w.cols}, auto)`, position: "relative" }
        },
        w.moreItems && /* @__PURE__ */ e.createElement(
          "button",
          {
            type: "button",
            className: "cme-more-trigger-btn",
            title: "more",
            onMouseDown: (p) => {
              if (p.preventDefault(), g && g.items === w.moreItems)
                E(null);
              else {
                const O = p.currentTarget.getBoundingClientRect();
                E({ cx: O.left + O.width / 2, y: O.bottom, items: w.moreItems, cols: w.moreCols, isTemplate: X[o].isTemplate || X[o].label === "√(□)" || X[o].isMatrix });
              }
            }
          },
          "▶"
        ),
        w.items.map((p, O) => {
          const H = X[o];
          if (p.type === "dropdown") {
            const P = p.label === "Font...", A = p.label === "Size", le = P && u.fontFamily !== "none", re = A && u.fontSize !== "auto" && u.fontSize !== "5", N = P ? u.fontFamily === "none" ? "" : u.fontFamily : A ? u.fontSize === "auto" || u.fontSize === "5" ? "" : u.fontSize : "";
            return /* @__PURE__ */ e.createElement(
              "select",
              {
                key: O,
                className: `cme-btn template${le || re ? " active" : ""}`,
                value: N,
                style: {
                  width: p.width || "60px",
                  height: "18px",
                  minHeight: "18px",
                  maxHeight: "18px",
                  lineHeight: "18px",
                  boxSizing: "border-box",
                  marginTop: "10px",
                  fontSize: "10px",
                  padding: "0",
                  margin: "2px 0",
                  gridColumn: w.cols === 3 || w.cols === 1 ? "span 1" : "span 2"
                },
                onChange: (q) => {
                  const W = q.target.value, $ = j;
                  !$ || typeof $.applyStyle != "function" || ($.focus(), P ? $.applyStyle({ fontFamily: W || "none" }) : A && $.applyStyle({ fontSize: W ? parseInt(W, 10) : "auto" }), Z());
                }
              },
              /* @__PURE__ */ e.createElement("option", { value: "" }, p.label),
              P && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("option", { value: "roman" }, "Times"), /* @__PURE__ */ e.createElement("option", { value: "sans-serif" }, "Helvetica"), /* @__PURE__ */ e.createElement("option", { value: "monospace" }, "Courier")),
              A && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("option", { value: "5" }, "12px"), /* @__PURE__ */ e.createElement("option", { value: "7" }, "16px"), /* @__PURE__ */ e.createElement("option", { value: "9" }, "20px"))
            );
          }
          if (H.isMatrix && !p.directInsert)
            return /* @__PURE__ */ e.createElement(
              "div",
              {
                key: O,
                className: "cme-matrix-btn-wrapper"
              },
              /* @__PURE__ */ e.createElement(
                "button",
                {
                  type: "button",
                  className: `cme-btn template${p.cls ? ` ${p.cls}` : ""}${H.isMatrix ? " cme-matrix-btn-small" : ""}`,
                  title: p.title || p.label || p.insert,
                  onMouseDown: (P) => {
                    if (P.preventDefault(), P.stopPropagation(), (m == null ? void 0 : m.type) === p.insert)
                      C(null);
                    else {
                      K || (window.__cmeManualBold = void 0, window.__cmeManualItalic = void 0, window.__cmeManualFontFamily = void 0, window.__cmeManualFontSize = void 0);
                      const A = P.currentTarget.getBoundingClientRect();
                      C({
                        type: p.insert,
                        x: A.left + A.width / 2,
                        y: A.bottom
                      });
                    }
                  }
                },
                typeof p.label == "object" ? p.label : /* @__PURE__ */ e.createElement(
                  "math-field",
                  {
                    "read-only": !0,
                    style: {
                      pointerEvents: "none",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      fontSize: "12px",
                      display: "inline-block",
                      width: "auto",
                      minHeight: "auto",
                      padding: "0",
                      margin: "0",
                      boxShadow: "none",
                      cursor: "pointer"
                    }
                  },
                  ce(p.mathLabel != null ? p.mathLabel : p.insert)
                )
              )
            );
          const J = p.action === "BOLD", Y = p.action === "ITALIC", te = p.action === "TEXT_COLOR", Ne = J && u.bold || Y && u.italic || te && u.color !== "none" && u.color !== "black";
          return /* @__PURE__ */ e.createElement(
            "button",
            {
              key: `${H.label}-${f * 4 + O}`,
              type: "button",
              className: `cme-btn${H.isTemplate ? " template" : ""}${p.cls ? ` ${p.cls}` : ""}${Ne ? " active" : ""}`,
              title: p.title || p.label || p.insert,
              onMouseDown: (P) => {
                var le, re;
                P.preventDefault();
                const A = h.current;
                if (p.action === "SPECIAL_CHARS") {
                  const N = P.currentTarget.getBoundingClientRect();
                  v({ x: N.left, y: N.bottom + 4 });
                } else if (p.action === "TEXT_COLOR") {
                  const N = P.currentTarget.getBoundingClientRect();
                  y({ x: N.left, y: N.bottom + 4 });
                } else if (p.action === "BOLD") {
                  if (A) {
                    A.focus();
                    const N = !u.bold;
                    window.__cmeManualBold = N;
                    const q = A.selection;
                    if (q && !q.isCollapsed) {
                      let W = A.getValue(q);
                      W = W.replace(/\\mathrm{([^}]*)}/g, "$1").replace(/\\mathbf{([^}]*)}/g, "$1").replace(/\\mathit{([^}]*)}/g, "$1").replace(/\\mathbfit{([^}]*)}/g, "$1"), N && u.italic ? A.executeCommand(["insert", `\\mathbfit{${W}}`]) : N ? A.executeCommand(["insert", `\\mathbf{${W}}`]) : u.italic ? A.executeCommand(["insert", `\\mathit{${W}}`]) : A.executeCommand(["insert", `\\mathrm{${W}}`]);
                    }
                    oe((W) => ({ ...W, bold: N }));
                  }
                } else if (p.action === "ITALIC") {
                  if (A) {
                    A.focus();
                    const N = !u.italic;
                    window.__cmeManualItalic = N;
                    const q = A.selection;
                    if (q && !q.isCollapsed) {
                      let W = A.getValue(q);
                      W = W.replace(/\\mathrm{([^}]*)}/g, "$1").replace(/\\mathbf{([^}]*)}/g, "$1").replace(/\\mathit{([^}]*)}/g, "$1").replace(/\\mathbfit{([^}]*)}/g, "$1"), u.bold && N ? A.executeCommand(["insert", `\\mathbfit{${W}}`]) : u.bold ? A.executeCommand(["insert", `\\mathbf{${W}}`]) : N ? A.executeCommand(["insert", `\\mathit{${W}}`]) : A.executeCommand(["insert", `\\mathrm{${W}}`]);
                    }
                    oe((W) => ({ ...W, italic: N }));
                  }
                } else p.action === "UNDO" ? (le = h.current) == null || le.executeCommand("undo") : p.action === "REDO" ? (re = h.current) == null || re.executeCommand("redo") : G(p.insert);
              }
            },
            (H.isTemplate || H.label === "√(□)" || H.isMatrix || p.isWidget) && p.insert && !p.action && !p.forceLabel ? /* @__PURE__ */ e.createElement(
              "math-field",
              {
                "read-only": !0,
                style: {
                  pointerEvents: "none",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "12px",
                  display: "inline-block",
                  width: "auto",
                  minHeight: "auto",
                  padding: "0",
                  margin: "0",
                  boxShadow: "none",
                  cursor: "pointer"
                }
              },
              ce(p.insert)
            ) : p.label
          );
        })
      ));
    })())),
    g && ie(/* @__PURE__ */ e.createElement(
      "div",
      {
        ref: (l) => {
          l && requestAnimationFrame(() => {
            const c = l.getBoundingClientRect(), d = document.querySelector(".cme-editor-popup");
            let x = g.cx - c.width / 2, w = g.y;
            if (d) {
              const f = d.getBoundingClientRect();
              x + c.width > f.right - 4 && (x = f.right - c.width - 4), x < f.left + 4 && (x = f.left + 4), w + c.height > f.bottom - 4 && (w = f.bottom - c.height - 4);
            }
            x + c.width > window.innerWidth - 4 && (x = window.innerWidth - c.width - 4), w + c.height > window.innerHeight - 4 && (w = window.innerHeight - c.height - 4), x < 4 && (x = 4), l.style.left = `${x}px`, l.style.top = `${w}px`, l.style.transform = "none", l.style.visibility = "visible";
          });
        },
        className: "cme-more-popup",
        style: {
          position: "fixed",
          left: `${g.cx}px`,
          top: `${g.y}px`,
          transform: "translateX(-50%)",
          visibility: "hidden",
          zIndex: 1e5,
          gridTemplateColumns: `repeat(${g.cols || 1}, auto)`
        }
      },
      g.items.map((l, c) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: c,
          type: "button",
          className: `cme-more-popup-btn ${l.cls || ""}`,
          title: l.title || l.label || l.insert,
          onMouseDown: (d) => {
            d.preventDefault(), G(l.insert), E(null);
          }
        },
        l.insert && !l.action && (l.cls === "template" || l.isWidget) ? /* @__PURE__ */ e.createElement(
          "math-field",
          {
            "read-only": !0,
            style: {
              pointerEvents: "none",
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "12px",
              display: "inline-block",
              width: "auto",
              minHeight: "auto",
              padding: "0",
              margin: "0",
              boxShadow: "none",
              cursor: "pointer"
            }
          },
          ce(l.mathLabel != null ? l.mathLabel : l.insert)
        ) : l.label
      ))
    ), document.body),
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "cme-mathfield-container",
        onMouseDown: (l) => {
          h.current && (l.target === h.current || h.current.contains(l.target)) || (l.preventDefault(), requestAnimationFrame(() => {
            var c, d;
            (d = (c = h.current) == null ? void 0 : c.focus) == null || d.call(c);
          }));
        }
      },
      /* @__PURE__ */ e.createElement(
        "math-field",
        {
          ref: (l) => {
            h.current = l, j = l;
          },
          class: "cme-mathfield",
          tabIndex: 0,
          "math-virtual-keyboard-policy": "manual",
          placeholder: ""
        }
      )
    ),
    /* @__PURE__ */ e.createElement("div", { className: "cme-popup-footer" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "cme-insert-btn", onClick: De }, n ? "Update" : "Insert"), /* @__PURE__ */ e.createElement("button", { type: "button", className: "cme-cancel-btn", onClick: i }, "Cancel")),
    m && ie(
      /* @__PURE__ */ e.createElement(
        kt,
        {
          matrixType: m.type,
          x: m.x,
          y: m.y,
          onSelect: (l, c) => {
            We(m.type, l, c), C(null);
          },
          onMouseEnter: () => {
          },
          onMouseLeave: () => {
          }
        }
      ),
      document.body
    ),
    k && ie(
      /* @__PURE__ */ e.createElement(
        nt,
        {
          isOpen: !!k,
          position: k,
          onClose: () => v(null),
          onInsert: (l) => {
            G(l), v(null);
          }
        }
      ),
      document.body
    ),
    b && ie(
      /* @__PURE__ */ e.createElement(
        "div",
        {
          className: "cme-color-picker-popup",
          style: {
            position: "fixed",
            left: Math.min(b.x, window.innerWidth - 160) + "px",
            top: Math.min(b.y, window.innerHeight - 100) + "px",
            zIndex: 1e5,
            background: "#fff",
            border: "1px solid #ccc",
            padding: "6px",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "4px",
            borderRadius: "4px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
          }
        },
        [
          "black",
          "dimgray",
          "gray",
          "darkgray",
          "silver",
          "white",
          "red",
          "orange",
          "yellow",
          "lime",
          "cyan",
          "blue",
          "purple",
          "magenta",
          "pink",
          "brown",
          "maroon",
          "olive",
          "green",
          "teal",
          "navy",
          "indigo",
          "violet",
          "gold"
        ].map((l) => {
          const c = u.color === l || l === "black" && (u.color === "none" || !u.color);
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: l,
              title: l,
              style: {
                width: "16px",
                height: "16px",
                backgroundColor: l,
                cursor: "pointer",
                border: c ? "2px solid #e6c229" : "1px solid #000",
                boxSizing: "border-box"
              },
              onMouseDown: (d) => {
                d.preventDefault(), d.stopPropagation();
                const x = h.current;
                x && typeof x.applyStyle == "function" && (x.focus(), x.applyStyle({ color: l === "black" ? "none" : l }), Z()), y(null);
              }
            }
          );
        })
      ),
      document.body
    )
  );
}
function wt(t) {
  let r = t;
  const i = r.match(/^\\ce\{([\s\S]*)\}$/);
  i && (r = i[1]);
  const a = [
    // Greek lowercase
    ["\\varepsilon", "ε"],
    ["\\varphi", "φ"],
    ["\\alpha", "α"],
    ["\\beta", "β"],
    ["\\gamma", "γ"],
    ["\\delta", "δ"],
    ["\\epsilon", "ε"],
    ["\\zeta", "ζ"],
    ["\\eta", "η"],
    ["\\theta", "θ"],
    ["\\iota", "ι"],
    ["\\kappa", "κ"],
    ["\\lambda", "λ"],
    ["\\mu", "μ"],
    ["\\nu", "ν"],
    ["\\xi", "ξ"],
    ["\\pi", "π"],
    ["\\rho", "ρ"],
    ["\\sigma", "σ"],
    ["\\tau", "τ"],
    ["\\upsilon", "υ"],
    ["\\phi", "φ"],
    ["\\chi", "χ"],
    ["\\psi", "ψ"],
    ["\\omega", "ω"],
    // Greek uppercase
    ["\\Gamma", "Γ"],
    ["\\Delta", "Δ"],
    ["\\Theta", "Θ"],
    ["\\Lambda", "Λ"],
    ["\\Xi", "Ξ"],
    ["\\Pi", "Π"],
    ["\\Sigma", "Σ"],
    ["\\Upsilon", "Υ"],
    ["\\Phi", "Φ"],
    ["\\Psi", "Ψ"],
    ["\\Omega", "Ω"],
    // Operators
    ["\\pm", "±"],
    ["\\mp", "∓"],
    ["\\times", "×"],
    ["\\div", "÷"],
    ["\\cdot", "·"],
    ["\\neq", "≠"],
    ["\\leq", "≤"],
    ["\\geq", "≥"],
    ["\\approx", "≈"],
    ["\\equiv", "≡"],
    ["\\infty", "∞"],
    ["\\sum", "∑"],
    ["\\prod", "∏"],
    ["\\int", "∫"],
    ["\\oint", "∮"],
    ["\\iint", "∬"],
    ["\\iiint", "∭"],
    ["\\oiint", "∯"],
    ["\\partial", "∂"],
    ["\\nabla", "∇"],
    ["\\in", "∈"],
    ["\\notin", "∉"],
    ["\\subset", "⊂"],
    ["\\subseteq", "⊆"],
    ["\\supset", "⊃"],
    ["\\supseteq", "⊇"],
    ["\\cup", "∪"],
    ["\\cap", "∩"],
    ["\\emptyset", "∅"],
    ["\\setminus", "∖"],
    ["\\forall", "∀"],
    ["\\exists", "∃"],
    ["\\neg", "¬"],
    ["\\land", "∧"],
    ["\\lor", "∨"],
    // Arrows
    ["\\leftrightarrow", "↔"],
    ["\\Leftrightarrow", "⇔"],
    ["\\rightarrow", "→"],
    ["\\leftarrow", "←"],
    ["\\Rightarrow", "⇒"],
    ["\\Leftarrow", "⇐"],
    ["\\uparrow", "↑"],
    ["\\downarrow", "↓"],
    // Trig / log
    ["\\sin", "sin"],
    ["\\cos", "cos"],
    ["\\tan", "tan"],
    ["\\cot", "cot"],
    ["\\sec", "sec"],
    ["\\csc", "csc"],
    ["\\log", "log"],
    ["\\ln", "ln"],
    ["\\exp", "exp"],
    ["\\lim", "lim"],
    // Math sets
    ["\\mathbb{R}", "ℝ"],
    ["\\mathbb{Z}", "ℤ"],
    ["\\mathbb{N}", "ℕ"],
    ["\\mathbb{Q}", "ℚ"],
    ["\\mathbb{C}", "ℂ"],
    // Delimiters
    ["\\left(", "("],
    ["\\right)", ")"],
    ["\\left[", "["],
    ["\\right]", "]"],
    ["\\left|", "|"],
    ["\\right|", "|"],
    ["\\left\\{", "{"],
    ["\\right\\}", "}"],
    // Spacing
    ["\\,", " "],
    ["\\;", " "],
    ["\\quad", " "],
    ["\\qquad", "  "],
    // Misc
    ["\\prime", "′"],
    ["\\cdots", "⋯"],
    ["\\ldots", "…"]
  ];
  for (const [o, s] of a) {
    const m = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    r = r.replace(new RegExp(m, "g"), s);
  }
  r = r.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "$1/$2"), r = r.replace(/\\sqrt\[([^\]]*)\]\{([^}]*)\}/g, "$1√($2)"), r = r.replace(/\\sqrt\{([^}]*)\}/g, "√($1)"), r = r.replace(/\\vec\{([^}]*)\}/g, "$1⃗"), r = r.replace(/\\hat\{([^}]*)\}/g, "$1̂"), r = r.replace(/\\bar\{([^}]*)\}/g, "$1̄"), r = r.replace(/\\ddot\{([^}]*)\}/g, "$1̈"), r = r.replace(/\\dot\{([^}]*)\}/g, "$1̇"), r = r.replace(/\\text\{([^}]*)\}/g, "$1"), r = r.replace(
    /\\begin\{pmatrix\}([\s\S]*?)\\end\{pmatrix\}/g,
    (o, s) => "[" + s.replace(/\\\\/g, "; ").replace(/&/g, ", ").trim() + "]"
  );
  const n = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾", n: "ⁿ", i: "ⁱ" };
  r = r.replace(
    /\^\{([^}]*)\}/g,
    (o, s) => s.split("").map((m) => n[m] || m).join("")
  ), r = r.replace(/\^([a-zA-Z0-9])/g, (o, s) => n[s] || s);
  const h = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉", "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎", a: "ₐ", e: "ₑ", o: "ₒ", x: "ₓ", i: "ᵢ", j: "ⱼ", n: "ₙ" };
  return r = r.replace(
    /_\{([^}]*)\}/g,
    (o, s) => s.split("").map((m) => h[m] || m).join("")
  ), r = r.replace(/_([a-zA-Z0-9])/g, (o, s) => h[s] || s), r = r.replace(/->/g, "→"), r = r.replace(/<=>/g, "⇌"), r = r.replace(/\\[a-zA-Z]+/g, ""), r = r.replace(/[{}]/g, ""), r = r.replace(/\s+/g, " "), r = r.replace(/\\\\/g, `
`), r.trim();
}
function St({ value: t, onChange: r }) {
  const i = _(null), a = _(!1), [n, h] = D(null), [o, s] = D(null);
  U(() => {
    a.current = !!n;
  }, [n]), U(() => () => {
    window.__ckMathWidgetClickHandler = null;
  }, []);
  const m = z((L) => {
    s(null), a.current = !0, h(L);
  }, []), C = z(() => {
    a.current = !1, h(null), s(null);
  }, []), [k, v] = D(!1), [b, y] = D(!1), [g, E] = D(!1), R = z((L) => {
    const T = i.current;
    if (!(!T || !(L != null && L.trim()))) {
      if (o) {
        const M = be(T, o.modelElement) ? o.modelElement : null;
        M ? T.model.change((B) => {
          const S = B.createElement("mathInline", { latex: L.trim() }), V = B.createPositionBefore(M);
          B.insert(S, V), B.remove(M), B.setSelection(B.createPositionAfter(S));
        }) : T.model.change((B) => {
          const S = B.createElement("mathInline", { latex: L.trim() });
          T.model.insertContent(S);
        }), s(null);
      } else if (k) {
        const M = wt(L.trim());
        if (!M) return;
        T.model.change((B) => {
          const S = B.createText(M);
          T.model.insertContent(S);
        });
      } else
        T.model.change((M) => {
          const B = M.createElement("mathInline", { latex: L.trim() });
          T.model.insertContent(B);
          const S = M.createPositionAfter(B);
          M.insertText(" ", S), M.setSelection(S.getShiftedBy(1));
        });
      T.editing.view.focus();
    }
  }, [k, o]), I = me(() => gt(m), [m]), F = z((L) => {
    i.current = L;
    const T = (S, V) => {
      if (a.current || !V) return;
      const Q = /^\\ce\{/.test(V);
      a.current = !0, s({ modelElement: S, latex: V }), h(Q ? "chem" : "math");
    };
    L.mathWidgetClickHandler = T, window.__ckMathWidgetClickHandler = T;
    const M = L.ui.getEditableElement();
    if (!M || M._ckMathClickAttached) return;
    M._ckMathClickAttached = !0;
    const B = (S) => {
      var Q;
      const V = Te(S.target);
      V && S.button === 0 && (S.preventDefault(), S.stopPropagation(), (Q = S.stopImmediatePropagation) == null || Q.call(S), ge(L, null, ee(V), V));
    };
    M.addEventListener("mousedown", B, !0), M.addEventListener("click", B, !0);
  }, []);
  return /* @__PURE__ */ e.createElement("div", { style: { position: "relative", display: "flex", flexDirection: "column", gap: "8px" } }, /* @__PURE__ */ e.createElement("style", null, `
        .ck-powered-by { display: none !important; }
        .ck-math-widget {
          display: inline-block !important;
          position: relative !important;
          width: auto !important;
          max-width: 100% !important;
          cursor: pointer !important;
          vertical-align: middle !important;
        }
        .ck-math-widget::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          cursor: pointer;
        }
        .ck-math-widget .ck-math-widget-inner,
        .ck-math-widget math-field {
          display: inline-block !important;
          width: auto !important;
          max-width: 100% !important;
          pointer-events: none !important;
        }
        .ck-math-widget:hover,
        .ck-math-widget.ck-widget_selected { outline: 2px solid #0f766e; outline-offset: 1px; border-radius: 4px; }
      `), /* @__PURE__ */ e.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "2px 4px" } }, /* @__PURE__ */ e.createElement("label", { style: { display: "inline-flex", flexDirection: "row", alignItems: "center", gap: "8px", cursor: "pointer", userSelect: "none", width: "auto", fontSize: "13px", color: "var(--text)", fontWeight: 600 } }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: k,
      onChange: (L) => v(L.target.checked),
      style: { width: "16px", minHeight: "16px", cursor: "pointer", margin: 0 }
    }
  ), /* @__PURE__ */ e.createElement("span", null, "Insert as editable Unicode text (allows character-by-character deletion)"))), /* @__PURE__ */ e.createElement("div", { style: { marginTop: "10px", marginBottom: "10px" } }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      onClick: () => E(!0),
      style: {
        padding: "6px 12px",
        backgroundColor: "#0f766e",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 600
      }
    },
    "Preview Question"
  )), g && /* @__PURE__ */ e.createElement("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1e4
  } }, /* @__PURE__ */ e.createElement("div", { style: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "800px",
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column"
  } }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "10px", marginBottom: "20px" } }, /* @__PURE__ */ e.createElement("h3", { style: { margin: 0 } }, "Question Preview"), /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => E(!1),
      style: { background: "transparent", border: "none", fontSize: "20px", cursor: "pointer" }
    },
    "×"
  )), /* @__PURE__ */ e.createElement("div", { style: { fontSize: "16px", lineHeight: "1.6" } }, /* @__PURE__ */ e.createElement(lt, { value: t })), /* @__PURE__ */ e.createElement("div", { style: { marginTop: "30px", textAlign: "right" } }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => E(!1),
      style: { padding: "8px 16px", backgroundColor: "#e2e8f0", border: "none", borderRadius: "4px", cursor: "pointer" }
    },
    "Close"
  )))), /* @__PURE__ */ e.createElement(
    Re,
    {
      editor: Ke,
      data: t,
      onReady: F,
      config: {
        licenseKey: "GPL",
        plugins: [
          He,
          Oe,
          Ue,
          Ve,
          Pe,
          qe,
          Fe,
          Ze,
          Je,
          je,
          ze,
          Qe,
          Xe,
          dt,
          I
        ],
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "insertTable",
            "|",
            "link",
            "|",
            "mathType",
            "chemType",
            "|",
            "undo",
            "redo"
          ]
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties"
          ]
        }
      },
      onChange: (L, T) => {
        r && r(T.getData());
      }
    }
  ), n && /* @__PURE__ */ e.createElement(
    ut,
    {
      mode: n,
      onInsert: R,
      onClose: C,
      initialLatex: (o == null ? void 0 : o.latex) || "",
      isEditing: !!o
    }
  ));
}
export {
  St as CustomMathEditor
};
