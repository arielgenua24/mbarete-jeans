import { useRef } from 'react';

// Custom hook to manage refs
const useRefs = () => {
  const homeRef = useRef(null);
  const baggyRef = useRef(null);
  const latestRef = useRef(null);

  return {
    homeRef,
    baggyRef,
    latestRef,
  };
};

export default useRefs;
