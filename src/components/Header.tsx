'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
  const shellRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('?')[0]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (!shellRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reversible tween: the contact bar slides off the top, nav rises to the edge.
      const collapse = gsap.to(shellRef.current, {
        y: -48,
        duration: 0.3,
        ease: 'power2.out',
        paused: true,
      });

      const mm = gsap.matchMedia();

      // Only collapse on desktop; mobile keeps the bar pinned.
      mm.add('(min-width: 900px)', () => {
        const trigger = ScrollTrigger.create({
          start: 0,
          end: 'max',
          onUpdate: (self) => {
            if (self.scroll() <= 64) collapse.reverse();
            else if (self.direction === 1) collapse.play();
            else collapse.reverse();
          },
        });

        return () => {
          trigger.kill();
          collapse.reverse();
        };
      });
    }, shellRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Box
        aria-hidden="true"
        sx={{
          height: { xs: 64, md: 112 },
        }}
      />
      <Box
        ref={shellRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.modal + 1,
          width: '100%',
          isolation: 'isolate',
          overflow: 'hidden',
          backgroundColor: '#00243f',
          willChange: 'transform',
        }}
      >
        {/* Top Bar */}
        <Box
          sx={{
            backgroundColor: '#001f3a',
            color: 'rgba(255,255,255,0.85)',
            height: 48,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Container maxWidth="lg" sx={{ height: '100%' }}>
            <Stack
              direction="row"
              sx={{ height: '100%', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                <Stack
                  component="a"
                  href="mailto:info@makanit.ae"
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#e08355' },
                  }}
                >
                  <EmailIcon sx={{ fontSize: 16, color: '#e08355' }} />
                  <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                    info@makanit.ae
                  </Typography>
                </Stack>
                <Stack
                  component="a"
                  href="tel:+971501234567"
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#e08355' },
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 16, color: '#e08355' }} />
                  <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                    +971 50 123 4567
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Button
                  component={Link}
                  href="/ar"
                  size="small"
                  startIcon={<LanguageIcon sx={{ fontSize: '1rem !important' }} />}
                  sx={{
                    color: 'white',
                    fontSize: '0.8rem',
                    textTransform: 'none',
                    borderRadius: 999,
                    px: 1.5,
                    border: '1px solid rgba(255,255,255,0.25)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#e08355',
                      color: '#e08355',
                      backgroundColor: 'rgba(224,131,85,0.08)',
                    },
                  }}
                >
                  Arabic
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Main Header */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: '#00243f',
            boxShadow: '0 6px 24px rgba(0,0,0,0.28)',
            width: '100%',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>
              {/* Logo */}
              <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.85 },
                }}
              >
                <Image
                  src="/logoWhite.png"
                  alt="Makani Travel & Tourism"
                  width={130}
                  height={55}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>

              {/* Desktop Navigation */}
              <Stack
                direction="row"
                spacing={0.5}
                sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}
              >
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Button
                      key={item.label}
                      component={Link}
                      href={item.href}
                      disableRipple
                      sx={{
                        color: active ? '#e08355' : 'rgba(255,255,255,0.92)',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        px: 1.5,
                        py: 1,
                        position: 'relative',
                        textTransform: 'none',
                        letterSpacing: 0.2,
                        transition: 'color 0.2s ease',
                        whiteSpace: 'nowrap',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 12,
                          right: 12,
                          bottom: 6,
                          height: 2,
                          borderRadius: 2,
                          backgroundColor: '#e08355',
                          transform: active ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left',
                          transition: 'transform 0.25s ease',
                        },
                        '&:hover': {
                          color: '#e08355',
                          backgroundColor: 'transparent',
                        },
                        '&:hover::after': {
                          transform: 'scaleX(1)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Stack>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              backgroundColor: '#00243f',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Image
            src="/logoWhite.png"
            alt="Makani Travel & Tourism"
            width={110}
            height={46}
            style={{ objectFit: 'contain' }}
          />
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <List sx={{ px: 1, py: 1.5 }}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 1.5,
                    color: active ? '#e08355' : 'rgba(255,255,255,0.92)',
                    borderLeft: '3px solid',
                    borderColor: active ? '#e08355' : 'transparent',
                    backgroundColor: active ? 'rgba(224,131,85,0.08)' : 'transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#e08355',
                      backgroundColor: 'rgba(224,131,85,0.08)',
                      borderColor: '#e08355',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{ primary: { sx: { fontWeight: 500 } } }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)', mt: 'auto' }} />
        <Stack spacing={1.25} sx={{ p: 2 }}>
          <Stack
            component="a"
            href="mailto:info@makanit.ae"
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.85)' }}
          >
            <EmailIcon sx={{ fontSize: 16, color: '#e08355' }} />
            <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
              info@makanit.ae
            </Typography>
          </Stack>
          <Stack
            component="a"
            href="tel:+971501234567"
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.85)' }}
          >
            <PhoneIcon sx={{ fontSize: 16, color: '#e08355' }} />
            <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
              +971 50 123 4567
            </Typography>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
