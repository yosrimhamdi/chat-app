import { useEffect } from 'react';

const useAutoBottomScroll = (ref, containerHeight, setMessagesDivHeight) => {
  useEffect(() => {
    ref.current.style.height = `${containerHeight}px`;

    if (containerHeight == 'auto') {
      setMessagesDivHeight(ref.current.offsetHeight);
    }
  }, [containerHeight]);

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  });
};

export default useAutoBottomScroll;
