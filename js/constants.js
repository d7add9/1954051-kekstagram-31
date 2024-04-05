export const MAX_COMMENT_LENGTH = 140;

export const sliderOptionsDefault = {
  start: 100,
  step: 1,
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  }
};
export const sliderOptionsChromeSepia = {
  range: {
    min:0,
    max:1,
  },
  start: 1,
  step: 0.1,
};

export const sliderOptionsPhobos = {
  range: {
    min:0,
    max:3,
  },
  start: 3,
  step: 0.1,
};

export const sliderOptionsHeat = {
  range: {
    min:1,
    max:3,
  },
  start: 3,
  step: 0.1,
};

export const EFFECTS = {
  none: sliderOptionsDefault,
  chrome: sliderOptionsChromeSepia,
  sepia: sliderOptionsChromeSepia,
  marvin: sliderOptionsDefault,
  phobos: sliderOptionsPhobos,
  heat: sliderOptionsHeat,
};

export const ImgEffects = {
  none: () => '',
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`
};

