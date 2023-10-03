"use client";

import { useEffect } from "react";

export default function useClickOutside(ref, callback) {
  function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
