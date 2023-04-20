export const createObserver = (animationFuncs) => {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(
        `${entry.target.id} is intersecting: ${entry.isIntersecting}`
      );
      handleElementVisible(
        animationFuncs,
        entry.target.id,
        entry.isIntersecting
      );
    });
  });
};

export const handleElementVisible = (animationFuncs, elementId, value) => {
  animationFuncs[elementId](value);
};

export const observeElements = (elementClass, observer) => {
  const animationElements = document.querySelectorAll(elementClass);
  animationElements.forEach((el) => observer.observe(el));
};
