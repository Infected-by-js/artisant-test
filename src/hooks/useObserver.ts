import {useEffect, useRef} from 'react';
import {useState} from 'react';

export const useObserver = () => {
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const refEl = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isInViewport) return;
    if (observer.current) observer.current.disconnect();

    let callback = (entries: any) => {
      if (entries[0].isIntersecting) {
        setIsInViewport(true);
      }
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(refEl.current as Element);

    return () => observer.current?.disconnect();
  }, []);

  return {refEl, isInViewport};
};
