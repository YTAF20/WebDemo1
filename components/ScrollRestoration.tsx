"use client";
import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return null;
}
