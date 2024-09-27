import { useRef } from 'react';

// Custom hook to manage refs
const useRefs = () => {
  const homeRef = useRef(null);
  const baggyRef = useRef(null);
  const latestRef = useRef(null);
  const bermudaRef = useRef(null);

  return {
    homeRef,
    baggyRef,
    latestRef,
    bermudaRef
  };
};

export default useRefs;
