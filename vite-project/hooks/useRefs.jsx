import { useRef } from 'react';

// Custom hook to manage refs
const useRefs = () => {
  const homeRef = useRef(null);
  const baggyRef = useRef(null);
  const bermudaRef = useRef(null);
  const jeanRef = useRef(null)
  const clasicoRef = useRef(null)
  const joggersRef = useRef(null)
  const parachutteRef = useRef(null)
  const frisaRef = useRef(null)
  const newRef = useRef(null)
  const latestRef = useRef(null);


  return {
    homeRef,
    baggyRef,
    bermudaRef,
    jeanRef,
    clasicoRef,
    joggersRef,
    parachutteRef,
    frisaRef,
    newRef,
    latestRef,
  };
};

export default useRefs;
