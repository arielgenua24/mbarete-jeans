let currentRef;
const handleNavigate = (jeansRef) => {
   
  currentRef = jeansRef;

    console.log(jeansRef)
    


  /*const { 
    homeRef,
    jeansRef,
    latestRef } = useRefs()

  const refMap = {
    home: refs.homeRef,
    jeans: refs.jeansRef,
    latest: refs.latestRef,
  };

  const targetRef = refMap[section];
  if (targetRef && targetRef.current) {
    console.log('scrolling down')
    console.log(targetRef)
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  } */
};

export default handleNavigate