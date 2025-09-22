"use client";

import { useEffect, useRef } from "react";

export function useAnchor({
  targetAnchor,
  embedToUrl = false,
}: {
  targetAnchor: string;
  embedToUrl?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  function scrollToAnchor() {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      if (embedToUrl) {
        window.history.pushState(null, "", `#${targetAnchor}`); // ✅ update URL hash
      }
    }
  }

  // ✅ Smooth scroll if page loads with #target
  useEffect(() => {
    if (
      embedToUrl &&
      window.location.hash === `#${targetAnchor}` &&
      ref.current
    ) {
      // small delay ensures layout is ready
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return { ref, scrollToAnchor };
}
