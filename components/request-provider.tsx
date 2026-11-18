"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";
type Line = { product: Product; quantity: number };
type RequestContextValue = {
  lines: Line[];
  add: (product: Product) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
};
const RequestContext = createContext<RequestContextValue | null>(null);
export function RequestProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("computech-request");
      if (saved) setLines(JSON.parse(saved));
    } catch {
      setLines([]);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("computech-request", JSON.stringify(lines));
  }, [lines]);
  const value = useMemo(
    () => ({
      lines,
      add: (product: Product) =>
        setLines((current) => {
          const found = current.find((x) => x.product.slug === product.slug);
          return found
            ? current.map((x) =>
                x.product.slug === product.slug
                  ? { ...x, quantity: x.quantity + 1 }
                  : x,
              )
            : [...current, { product, quantity: 1 }];
        }),
      setQuantity: (slug: string, quantity: number) =>
        setLines((current) =>
          current.map((x) =>
            x.product.slug === slug
              ? { ...x, quantity: Math.max(1, quantity) }
              : x,
          ),
        ),
      remove: (slug: string) =>
        setLines((current) => current.filter((x) => x.product.slug !== slug)),
    }),
    [lines],
  );
  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
}
export function useRequestList() {
  const value = useContext(RequestContext);
  if (!value)
    throw new Error("useRequestList must be used within RequestProvider");
  return value;
}
