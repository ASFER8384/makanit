'use client';

import { Box, Container, Grid, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background:
          'linear-gradient(180deg, #ffffff 0%, #fbfcfe 45%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 300, md: 450 },
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid rgba(0,36,63,0.06)',
              }}
            >
              <Image
                src="/images/wp/hotel-bell-scaled.jpg"
                alt="About Makani Travel"
                fill
                style={{ objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,36,63,0.2) 100%)',
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#e08355',
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: '0.85rem',
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                mb: 2,
                color: '#00243f',
                mt: 1,
              }}
            >
              Top 100 Travel Company Worldwide
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 3,
                borderRadius: 2,
                backgroundColor: '#e08355',
                mb: 2.5,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Makani Travel & Tourism is a premier travel agency based in Ajman, UAE. We specialize
              in creating unforgettable travel experiences for our clients, offering everything from
              luxury holidays to Umrah packages.
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gap: 1.5,
                mb: 3.5,
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              }}
            >
              {[
                'Luxury holidays with care',
                'Umrah and family packages',
                'Local support from Ajman',
                'Personalized itinerary planning',
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,36,63,0.08)',
                    boxShadow: '0 4px 14px rgba(0,36,63,0.05)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: 'rgba(224,131,85,0.45)',
                      boxShadow: '0 10px 24px rgba(0,36,63,0.1)',
                    },
                  }}
                >
                  <CheckCircleIcon sx={{ color: '#e08355', fontSize: 20, flexShrink: 0 }} />
                  <Typography
                    sx={{ color: '#00243f', fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Button
              component={Link}
              href="/about-us"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 4, py: 1.5, fontWeight: 600 }}
            >
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
