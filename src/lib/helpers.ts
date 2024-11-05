import { EasingFunction, interpolate, random, spring } from 'remotion';

import { Color, Font } from '../types';

export const interpolateClamp = (
  frame: number,
  inputRange: readonly number[],
  outputRange: readonly number[],
  easing?: EasingFunction
) => {
  return interpolate(frame, inputRange, outputRange, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });
};

export const interpolateSpring = (spring: number, outputRange: readonly number[]) => {
  return interpolate(spring, [0, 1], outputRange, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

// Just a spring function with a better config and no need to pass the FPS.
const config = {
  damping: 13,
  mass: 0.6,
  stiffness: 65,
};

export const defaultSpring = (props: {
  frame: number;
  delay?: number;
  config?: typeof config;
  durationInFrames?: number;
  from?: number;
  to?: number;
}) => {
  return spring({
    fps: 30,
    config,
    ...props,
  });
};

export const typedObjectKeys = <T extends object>(object: T) => {
  return Object.keys(object) as (keyof T)[];
};

export const borderRadiusVar = (value: `${number}%` | `${number}px`) => {
  return `calc(${value} * var(--roundness))`;
};

export const colorVar = (color: Color) => {
  return color.startsWith('#') ? color : `var(--color-${color})`;
};

export const fontVar = (font: Font) => {
  return `var(--font-${font})`;
};

export const formatFontName = (fontName: string) => {
  return (
    fontName
      // Insert space between lowercase and uppercase letters
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // Insert space between two uppercase letters followed by lowercase
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
  );
};

export const quote = (text: string) => {
  return `'${text}'`;
};

export const getCSSVariables = ({
  colors,
  fonts,
  roundness,
}: Pick<any, 'colors' | 'fonts' | 'roundness'>): Record<string, string> => {
  const vars = [
    ...Object.entries(colors).map(([key, value]) => [`--color-${key}`, value]),
    ...Object.entries(fonts).map(([key, value]) => [
      `--font-${key}`,
      formatFontName(value as string),
    ]),
  ];
  if (roundness) {
    vars.push(['--roundness', roundness.toString()]);
  }
  return Object.fromEntries(vars);
};

export const isUrl = (src: string) => {
  return src.startsWith('http') || src.startsWith('/');
};

export const getRandomString = (seed: string) => {
  return random(seed).toString(36).substring(2, 15);
};
