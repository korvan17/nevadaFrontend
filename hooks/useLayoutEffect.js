import { useLayoutEffect } from "react";

export const useLockBodyScroll = (lock) => {
  useLayoutEffect(() => {
    // Запомнить первоначальный стиль overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (lock) {
      // Предотвращение прокрутки
      document.body.style.overflow = "hidden";
    }

    return () => {
      // Возврат к первоначальному стилю overflow
      document.body.style.overflow = originalStyle;
    };
  }, [lock]); // Перезапускать эффект только если значение lock изменилось
};
