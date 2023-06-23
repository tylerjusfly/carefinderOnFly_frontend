const isMobile = window.innerWidth < 768;

export const fadeInLeft = !isMobile
  ? {
      initial: { opacity: 0, x: '50%' },
      whileInView: { opacity: 1, x: '0' },
      viewport: { once: true },
      transition: { ease: 'circOut', duration: 1 },
    }
  : {};

export const fadeInRight = !isMobile
  ? {
      initial: { opacity: 0, x: '-50%' },
      whileInView: { opacity: 1, x: '0' },
      viewport: { once: true },
      transition: { ease: 'circOut', duration: 1 },
    }
  : {};
