import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import ThemeWrapper from './ThemeWrapper';
import { AppBar, Typography, Box, List, ListItem } from '@mui/material';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'UAlberta FullStack',
  description: 'An application created by a student of the University of Alberta Fullstack Web Application Development program.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeWrapper>
          <AppBar sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <Box component='nav' flex='1 1 25%'>
              <List sx={{ display: 'flex', justifyContent: 'center' }}>
                <ListItem sx={{ width: 'unset' }}>
                  <Link href='/'>Home</Link>
                </ListItem>
                <ListItem sx={{ width: 'unset' }}>
                  <Link href='/about'>About</Link>
                </ListItem>
                <ListItem sx={{ width: 'unset' }}>
                  <Link href='/contact'>Contact</Link>
                </ListItem>
              </List>
            </Box>
            <Typography variant='h3' component='h1' textAlign='center'>
              UAlberta AppDev
            </Typography>
            <Box flex='1 1 25%'></Box>
          </AppBar>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
