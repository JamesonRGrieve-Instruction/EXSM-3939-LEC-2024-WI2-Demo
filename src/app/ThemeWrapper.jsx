'use client';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import React, { useState, createContext } from 'react';
const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export const ThemeContext = createContext();
export default function ThemeWrapper({ children }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ data: dark, mutate: setDark }}>
      <ThemeProvider theme={dark ? darkTheme : defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
