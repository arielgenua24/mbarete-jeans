import React, { useRef } from 'react';


const handleNavigate = (section, refs) => {
    switch (section) {
      case 'home':
        refs.homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'jeans':
        refs.jeansRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'latest':
        refs.latestRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
};
  
export default handleNavigate