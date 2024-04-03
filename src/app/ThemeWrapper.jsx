'use client';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import React, { useState, createContext, useMemo } from 'react';
/*
const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const colorblindTheme = createTheme({
  palette: {
    primary: {
      light: '#CCC',
      main: '#888',
      dark: '#333',
    },
  },
});
const colorblindDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#CCC',
      main: '#888',
      dark: '#333',
    },
  },
});
*/
export const ThemeContext = createContext();
export default function ThemeWrapper({ children }) {
  const [themeSettings, setThemeSettings] = useState({
    dark: false,
    colorblind: false,
    themeOverrides: {},
  });
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeSettings.dark ? 'dark' : 'light',
          ...(themeSettings.colorblind
            ? {
                primary: {
                  light: '#CCC',
                  main: '#888',
                  dark: '#333',
                },
              }
            : {}),
        },
        ...themeSettings.themeOverrides,
      }),
    [themeSettings],
  );
  return (
    <ThemeContext.Provider value={{ data: themeSettings, mutate: setThemeSettings }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
