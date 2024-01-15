import { useEffect, useRef } from "react";

export default function useOutClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outClick = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (!ref.current?.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", outClick);

    return () => {
      document.removeEventListener("mousedown", outClick);
    };
  }, [callback]);

  return ref;
}
