'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: 'https://makanit.ae/wp-content/uploads/2025/12/municht1_promo_3.webp',
    title: 'Your Trusted Travel Partner in the UAE',
    subtitle: 'Makani, your Ajman travel agency — crafting unforgettable journeys across the world with personalized service and care.',
  },
  {
    image: 'https://makanit.ae/wp-content/uploads/2025/12/iStock-507551802-jpg-scaled.avif',
    title: 'Discover Extraordinary Destinations',
    subtitle: 'From the Maldives to Turkey, explore exclusive travel packages tailored just for you.',
  },
  {
    image: 'https://makanit.ae/wp-content/uploads/2025/12/shahdag.jpg',
    title: 'Experience Luxury Like Never Before',
    subtitle: 'Premium accommodations, curated experiences, and memories that last a lifetime.',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#001a30',
      }}
    >
      {/* Slideshow Background */}
      {slides.map((slide, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: i === activeIndex ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                i === activeIndex
                  ? 'linear-gradient(135deg, rgba(0,36,63,0.75) 0%, rgba(0,26,48,0.85) 100%)'
                  : 'linear-gradient(135deg, rgba(0,36,63,0.75) 0%, rgba(0,26,48,0.85) 100%)',
            },
          }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority={i === 0}
            sizes="100vw"
          />
        </Box>
      ))}

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          pt: { xs: 5, md: 4 },
          pb: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: 'rgba(224,131,85,0.15)',
            borderRadius: 50,
            px: { xs: 1.5, md: 2.5 },
            py: 0.6,
            mb: 1.5,
            border: '1px solid rgba(224,131,85,0.25)',
            animation: 'fadeSlideUp 0.8s ease-out',
            '@keyframes fadeSlideUp': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography variant="body2" sx={{ color: '#e08355', fontWeight: 600, fontSize: { xs: '0.7rem', md: '0.8rem' } }}>
            ★ Top 100 Travel Company Worldwide
          </Typography>
        </Box>

        {/* Title */}
        <Box sx={{ mb: { xs: 2.5, md: 3 }, width: '100%' }}>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '4rem' },
              fontWeight: 800,
              maxWidth: 900,
              mx: 'auto',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            {slides[activeIndex].title}
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box sx={{ mb: { xs: 2, md: 3 }, width: '100%' }}>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: { xs: '0.85rem', md: '1.2rem' },
              fontWeight: 400,
              maxWidth: 650,
              mx: 'auto',
              lineHeight: { xs: 1.5, md: 1.7 },
            }}
          >
            {slides[activeIndex].subtitle}
          </Typography>
        </Box>

        {/* Search Bar — stacked on mobile, row on desktop */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: { xs: 2, md: 50 },
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            maxWidth: 800,
            width: '100%',
            mx: 'auto',
            p: { xs: 1.5, md: 0 },
            overflow: 'hidden',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Destination */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 2 },
              textAlign: 'left',
              width: { xs: '100%', md: 'auto' },
              borderBottom: { xs: '1px solid #eee', md: 'none' },
              borderRight: { md: '1px solid #e8e8e8' },
            }}
          >
            <Box sx={{ color: '#e08355' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#e08355', fontWeight: 700, fontSize: '0.65rem', display: 'block', mb: 0.15, textTransform: 'uppercase', letterSpacing: 1 }}>
                Destination
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', fontWeight: 500, fontSize: { xs: '0.82rem', md: '0.9rem' } }}>
                Where are you going?
              </Typography>
            </Box>
          </Box>

          {/* Date */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 2 },
              textAlign: 'left',
              width: { xs: '100%', md: 'auto' },
              borderBottom: { xs: '1px solid #eee', md: 'none' },
              borderRight: { md: '1px solid #e8e8e8' },
            }}
          >
            <Box sx={{ color: '#e08355' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#e08355', fontWeight: 700, fontSize: '0.65rem', display: 'block', mb: 0.15, textTransform: 'uppercase', letterSpacing: 1 }}>
                Check-in — Check-out
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', fontWeight: 500, fontSize: { xs: '0.82rem', md: '0.9rem' } }}>
                Select dates
              </Typography>
            </Box>
          </Box>

          {/* Guests */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 2 },
              textAlign: 'left',
              width: { xs: '100%', md: 'auto' },
              borderBottom: { xs: '1px solid #eee', md: 'none' },
            }}
          >
            <Box sx={{ color: '#e08355' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#e08355', fontWeight: 700, fontSize: '0.65rem', display: 'block', mb: 0.15, textTransform: 'uppercase', letterSpacing: 1 }}>
                Guests
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', fontWeight: 500, fontSize: { xs: '0.82rem', md: '0.9rem' } }}>
                2 Adults, 0 Children
              </Typography>
            </Box>
          </Box>

          {/* Search Icon (instead of button) */}
          <Link href="/packages" passHref legacyBehavior>
            <Box
              component="a"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e08355',
                width: { xs: '100%', md: 48 },
                py: { xs: 1.5, md: 0 },
                height: { md: 48 },
                borderRadius: 50,
                mr: { md: 1 },
                mt: { xs: 1, md: 0 },
                cursor: 'pointer',
                transition: 'background 0.2s',
                '&:hover': {
                  backgroundColor: '#d07345',
                },
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </Box>
          </Link>
        </Box>

        {/* Slide Indicators */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1.5,
            mt: { xs: 2.5, md: 4 },
          }}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              onClick={() => setActiveIndex(i)}
              sx={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: i === activeIndex ? '#e08355' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                '&:hover': {
                  backgroundColor: i === activeIndex ? '#e08355' : 'rgba(255,255,255,0.5)',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}