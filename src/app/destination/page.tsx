'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { destinations } from '@/data/destinations';

export default function Destinations() {
  return (
    <>
      {/* Hero Banner */}
      <Box
        sx={{
          backgroundColor: '#00243f',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{ color: '#e08355', fontWeight: 600, letterSpacing: 2, fontSize: '0.9rem' }}
          >
            Explore the World
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            Our Destinations
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>
            Discover amazing places and exclusive travel packages
          </Typography>
        </Container>
      </Box>

      {/* Destinations Grid */}
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={3}>
            {destinations.map((dest) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={dest.slug}>
                <Card
                  component={Link}
                  href={`/destination/${dest.slug}`}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'block',
                      backgroundColor: '#00243f',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 40px rgba(0,36,63,0.3)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={dest.image}
                      alt={dest.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 2.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#e08355',
                          mb: 0.5,
                        }}
                      >
                        {dest.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {dest.description}
                      </Typography>
                      <Button
                        size="small"
                        sx={{
                          mt: 1.5,
                          color: '#e08355',
                          fontWeight: 500,
                          p: 0,
                          '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' },
                        }}
                      >
                        View Packages →
                      </Button>
                    </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
