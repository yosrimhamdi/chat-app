import { useEffect, useRef } from 'react';

const useAutoBottomScroll = (containerHeight, setMessagesDivHeight) => {
  const messagesRef = useRef();

  useEffect(() => {
    messagesRef.current.style.height = `${containerHeight}px`;

    if (containerHeight == 'auto') {
      setMessagesDivHeight(messagesRef.current.offsetHeight);
    }
  }, [containerHeight]);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  });

  return messagesRef;
};

export default useAutoBottomScroll;
