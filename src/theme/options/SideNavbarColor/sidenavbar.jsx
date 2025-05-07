import { alpha } from '@mui/material/styles';
import { primary } from '../../palette.js';


// ----------------------------------------------------------------------

export function sidenavbar (preset) {
  const newPrimaryColor = newgetPrimary(preset);

  const newtheme = {
    palette: {
      primary: newPrimaryColor,
    },
    customShadows: {
      primary: `0 8px 16px 0 ${alpha(`${newPrimaryColor?.main}`, 0.24)}`,
    },
  };

  return {
    ...newtheme,
  };
}

// ----------------------------------------------------------------------

const cyan = {
  lighter: '#CCF4FE',
  light: '#68CDF9',
  main: '#078DEE',
  dark: '#0351AB',
  darker: '#012972',
  contrastText: '#FFFFFF',
};

const purple = {
  lighter: '#EBD6FD',
  light: '#B985F4',
  main: '#7635dc',
  dark: '#431A9E',
  darker: '#200A69',
  contrastText: '#FFFFFF',
};

export const newpresetOptions = [
  { name: 'default', value: primary.main },
  { name: 'cyan', value: cyan.main },
  { name: 'purple', value: purple.main },
];

export function newgetPrimary(preset) {
  return {
    default: primary,
    cyan,
    purple,

  }[preset];
}
