import { useEffect, useRef, useState } from "react";

export const useVisible = (visibleTrigger: boolean) => {
  const [isShowEl, setIsShowEl] = useState<boolean>(true);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elRef.current && visibleTrigger) {
      elRef.current.style.opacity = "1";
    } else if (elRef.current && !visibleTrigger) {
      elRef.current.style.opacity = "0";

      setTimeout(() => {
        setIsShowEl(false);
      }, 400);
    }
  }, [elRef, visibleTrigger]);

  return { elRef, isShowEl };
};
