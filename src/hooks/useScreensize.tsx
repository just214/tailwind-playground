import { useEffect, useState } from 'react';
import { useWindowSize } from '@reach/window-size';

type Sizes = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
};

function createSizesObject(width: number): Sizes {
  return {
    sm: width <= 640,
    md: width <= 768 && width > 640,
    lg: width <= 1024 && width > 768,
    xl: width <= 1280 && width > 1024,
  };
}

export function useScreensize() {
  const { width } = useWindowSize();
  const [sizes, setSizes] = useState<Sizes>(createSizesObject(width));

  useEffect(() => {
    setSizes(createSizesObject(width));
  }, [width]);

  return sizes;
}
