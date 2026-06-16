'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Packages',
    href: '#',
    children: [
      { label: 'Summer Offers', href: '/packages?season=summer' },
      { label: 'Eid Al-Adha', href: '/packages?season=eid-adha' },
      { label: 'Eid Al-Fitr', href: '/packages?season=eid-fitr' },
      { label: 'Honeymoon', href: '/packages?season=honeymoon' },
      { label: 'Umrah Offers', href: '/packages?season=umrah' },
    ],
  },
  {
    label: 'Destination',
    href: '/destination',
    children: [
      { label: 'Maldives', href: '/destination/maldives' },
      { label: 'Turkey', href: '/destination/turkey' },
      { label: 'Thailand', href: '/destination/thailand' },
      { label: 'Egypt', href: '/destination/egypt' },
      { label: 'Azerbaijan', href: '/destination/azerbaijan' },
    ],
  },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: '#001f3a',
          color: 'white',
          py: 1,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <EmailIcon sx={{ fontSize: 16, color: '#e08355' }} />
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                  info@makanit.ae
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <PhoneIcon sx={{ fontSize: 16, color: '#e08355' }} />
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                  +971 50 123 4567
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Link href="/ar" passHref legacyBehavior>
                <Button
                  size="small"
                  startIcon={<LanguageIcon />}
                  sx={{ color: 'white', fontSize: '0.8rem' }}
                >
                  Arabic
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: '#00243f',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>
            {/* Logo */}
            <Link href="/" passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src="/images/makani-logo.png"
                  alt="Makani Travel & Tourism"
                  width={130}
                  height={55}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} passHref legacyBehavior>
                    <Button
                      component="a"
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        px: 1.5,
                        py: 1,
                        '&:hover': {
                          color: '#e08355',
                          backgroundColor: 'transparent',
                        },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: { width: 280, backgroundColor: '#00243f', color: 'white' },
          },
        }}
      >
        <Box sx={{ p: 2, textAlign: 'right' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link href={item.href} passHref legacyBehavior>
                <ListItemButton
                  component="a"
                  onClick={handleDrawerToggle}
                  sx={{
                    '&:hover': { color: '#e08355' },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{ primary: { sx: { fontWeight: 500 } } }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}