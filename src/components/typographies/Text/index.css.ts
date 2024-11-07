import { recipe } from '@vanilla-extract/recipes';
import { Color, COLORS } from '@/src/styles/colors';

const setColors = () => {
  const colors: { [k in Color]?: { color: (typeof COLORS)[k] } } = {};

  Object.entries(COLORS).forEach(([name, color]) => {
    colors[name as Color] = { color };
  });

  return colors;
};

export const textStyle = recipe({
  base: {
    lineHeight: 1.5,
    wordBreak: 'keep-all'
  },
  variants: {
    scale: {
      heading1: { fontSize: 32, lineHeight: 1.3 },
      heading2: { fontSize: 28, lineHeight: 1.3 },
      heading3: { fontSize: 24, lineHeight: 1.3 },
      heading4: { fontSize: 20 },
      heading5: { fontSize: 18 },
      body1: { fontSize: 16 },
      body2: { fontSize: 14 },
      caption1: { fontSize: 13 },
      caption2: { fontSize: 12 }
    },
    weight: {
      '400': { fontWeight: 400 },
      '500': { fontWeight: 500 },
      '600': { fontWeight: 600 },
      '700': { fontWeight: 700 }
    },
    color: setColors()
  }
});
