'use client';

import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 300, md: 450 },
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Image
                src="https://makanit.ae/wp-content/uploads/2025/02/hotel-bell-scaled.jpg"
                alt="About Makani Travel"
                fill
                style={{ objectFit: 'cover' }}
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
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Ranked among the Top 100 travel companies worldwide, we pride ourselves on our
              commitment to excellence, personalized service, and attention to every detail of your
              journey.
            </Typography>
            <Link href="/about-us" passHref legacyBehavior>
              <Button
                component="a"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ px: 4, py: 1.5, fontWeight: 600 }}
              >
                Learn More About Us
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}