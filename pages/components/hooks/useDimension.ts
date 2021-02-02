import { useEffect, useRef } from 'react';

export const useDimension = ref => {
  const dimension = useRef({ width: 0, height: 0 });
  useEffect(() => {
    dimension.current.width = ref.current.offsetWidth;
    dimension.current.width = ref.current.offsetHeight;
  }, []);

  return dimension.current;
};
