import { useRef } from 'react';

// Custom hook to manage refs
const useRefs = () => {
  const homeRef = useRef(null);
  const jeansRef = useRef(null);
  const latestRef = useRef(null);

  return {
    homeRef,
    jeansRef,
    latestRef,
  };
};

export default useRefs;
