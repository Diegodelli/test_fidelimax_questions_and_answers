"use client";

import { FormContext } from "@/context/formContext";
import { useContext, useEffect, useRef } from "react";

export default function useStarEvent(callback: () => any) {
  const ref = useRef<HTMLUListElement>(null);
  const { setStarValue } = useContext(FormContext);

  useEffect(() => {
    function outClick(event: MouseEvent) {
      const stars = document.querySelectorAll(".star-icon");
      const targetLi = event.target as HTMLLIElement;
      const classList = !targetLi?.classList.contains("active");
      const tag = targetLi.tagName;

      if (!ref.current !== classList && targetLi && tag === "LI") {
        stars.forEach(function (star) {
          star.classList.remove("active");

          callback();
        });

        if (targetLi && tag === "LI") {
          targetLi.classList.add("active");
          const value = targetLi.getAttribute("value");

          setStarValue(value);
          callback();
        }
      }
    }

    document.addEventListener("click", outClick);

    return () => {
      document.removeEventListener("click", outClick);
    };
  }, [callback, setStarValue]);

  return ref;
}
