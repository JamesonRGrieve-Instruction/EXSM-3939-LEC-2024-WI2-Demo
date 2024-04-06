'use client';
import { AppBar, Typography, Box, List, ListItem, Divider, IconButton, Drawer, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState } from 'react';
export default function MenuWrapper({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <Box component='nav' flex='1 1 25%'>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <Menu />
          </IconButton>
        </Box>
        <Typography variant='h3' component='h1' textAlign='center'>
          UAlberta AppDev
        </Typography>
        <Box flex='1 1 25%'></Box>
      </AppBar>

      <Box
        component='main'
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: open ? '12rem' : 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
      <Drawer variant='persistent' anchor='left' open={open} sx={{ width: '12rem' }}>
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <Menu />
        </IconButton>
        <Divider />
        <List sx={{ display: 'flex', justifyContent: 'center' }}>
          <ListItem sx={{ width: 'unset' }}>
            <Link href='/'>
              <Button>Home</Button>
            </Link>
          </ListItem>
          <ListItem sx={{ width: 'unset' }}>
            <Link href='/about'>
              <Button>About</Button>
            </Link>
          </ListItem>
          <ListItem sx={{ width: 'unset' }}>
            <Link href='/contact'>
              <Button>Contact</Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
