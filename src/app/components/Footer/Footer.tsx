import { useEffect, useRef } from "react";

import html from "./footer.html?raw";
import "./footer.scss";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current) ref.current.innerHTML = html; }, []);
  return <footer ref={ref} id="footer" />;
}
