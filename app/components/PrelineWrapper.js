// app/components/PrelineWrapper.js
"use client";
import { useEffect } from "react";

export default function PrelineWrapper({ children }) {
  useEffect(() => {
    import("preline/preline"); // ensures it runs only in browser
  }, []);

  return <>{children}</>;
}
