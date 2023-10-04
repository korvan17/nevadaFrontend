"use client";

import { useEffect } from "react";

export default function useClickOutside(ref, refButton, callback) {
  function handleClick(e) {
    if (
      ref.current &&
      refButton.current &&
      !ref.current?.contains(e.target) &&
      !refButton?.current.contains(e.target)
    ) {
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
