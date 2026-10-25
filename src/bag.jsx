import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { byId, priceOf } from "./data/products.js";

const BagCtx = createContext(null);
const KEY = "curology-bag-v2";
const read = () => { try { return (JSON.parse(localStorage.getItem(KEY)) || []).map((l) => ({ size: "M", ...l, key: l.key || `${l.id}|${l.size || "M"}` })); } catch { return []; } };

export function BagProvider({ children }) {
  const [lines, setLines] = useState(read);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch { /* storage unavailable */ } }, [lines]);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 3200); return () => clearTimeout(t); }, [toast]);

  const api = useMemo(() => {
    const add = (ids, size = "M") => {
      const list = Array.isArray(ids) ? ids : [ids];
      setLines((cur) => {
        const next = cur.map((l) => ({ ...l }));
        list.forEach((id) => { const key = `${id}|${size}`; const l = next.find((x) => x.key === key); if (l) l.qty = Math.min(9, l.qty + 1); else next.push({ key, id, size, qty: 1 }); });
        return next;
      });
      setToast(list.length > 1 ? `${list.length} products added to your bag` : `${byId(list[0]).name} added to your bag`);
    };
    const setQty = (key, qty) => setLines((cur) => qty <= 0 ? cur.filter((l) => l.key !== key) : cur.map((l) => (l.key === key ? { ...l, qty: Math.min(9, qty) } : l)));
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + priceOf(l) * l.qty, 0);
    return { lines, add, setQty, clear: () => setLines([]), count, subtotal, open, setOpen, toast };
  }, [lines, open, toast]);

  return <BagCtx.Provider value={api}>{children}</BagCtx.Provider>;
}
export const useBag = () => useContext(BagCtx);
export const usd = (n) => "$" + n.toFixed(2).replace(/\.00$/, "");
