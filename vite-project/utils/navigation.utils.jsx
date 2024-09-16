function onNavigate(className) {
  const element = document.querySelector(`.${className}`);
  if (element) {
      element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      });
  }
}

export default onNavigate;