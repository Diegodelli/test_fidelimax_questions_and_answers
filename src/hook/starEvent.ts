"use client";

import { FormContext } from "@/context/formContext";
import { useContext, useEffect, useRef } from "react";

export default function starEvent(callback: () => void) {
  const ref = useRef<HTMLLIElement>(null);
  const { setStarValue } = useContext(FormContext);

  useEffect(() => {
    function outClick(event: MouseEvent) {
      const stars = document.querySelectorAll(".star-icon");
      const target = event.target as HTMLLIElement;

      const classList = !target?.classList.contains("active");

      if (!ref.current === classList) {
        stars.forEach(function (star) {
          star.classList.remove("active");

          callback();
        });

        target.classList.add("active");
        const value = target.getAttribute("value");

        setStarValue(value);

        callback();
      }
    }

    document.addEventListener("click", outClick);
  }, []);
}
