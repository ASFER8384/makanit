'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00243f',
      light: '#1a3a5c',
      dark: '#001524',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e08355',
      light: '#f0a07a',
      dark: '#c96a3a',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f0740f',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#00243f',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: '"Cairo", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 },
    h2: { fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h3: { fontWeight: 700, lineHeight: 1.15 },
    h4: { fontWeight: 700, lineHeight: 1.2 },
    h5: { fontWeight: 600, lineHeight: 1.25 },
    h6: { fontWeight: 600, lineHeight: 1.3 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '11px 24px',
          fontSize: '0.95rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          overflow: 'hidden',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1200px',
        },
      },
    },
  },
});

export default theme;
