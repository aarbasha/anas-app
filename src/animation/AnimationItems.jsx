export const FadeLeft = (delay) => {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadeRight = (delay) => {
  return {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadePosation = (delay) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};
