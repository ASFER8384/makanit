'use client';

import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MosqueIcon from '@mui/icons-material/Mosque';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Link from 'next/link';

const services = [
  {
    icon: <WbSunnyIcon sx={{ fontSize: 40 }} />,
    title: 'Summer Offers',
    description: 'Exclusive summer packages to the world\'s most beautiful destinations.',
    link: '/packages?season=summer',
  },
  {
    icon: <FlightTakeoffIcon sx={{ fontSize: 40 }} />,
    title: 'Tourist Packages',
    description: 'Curated travel packages for every type of traveler.',
    link: '/packages',
  },
  {
    icon: <MosqueIcon sx={{ fontSize: 40 }} />,
    title: 'Umrah Offers',
    description: 'Special Umrah packages with comfortable accommodations.',
    link: '/packages?season=umrah',
  },
  {
    icon: <CardTravelIcon sx={{ fontSize: 40 }} />,
    title: 'Honeymoon Packages',
    description: 'Romantic getaways to the most enchanting destinations.',
    link: '/packages?season=honeymoon',
  },
];

export default function Services() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            mb: 1,
            color: '#00243f',
          }}
        >
          Our Travel Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#666',
            mb: 5,
            maxWidth: 600,
            mx: 'auto',
            fontSize: '1.05rem',
          }}
        >
          Discover our range of travel services designed to make your journey unforgettable
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Link href={service.link} passHref legacyBehavior>
                <Box
                  component="a"
                  sx={{
                    backgroundColor: '#00243f',
                    color: 'white',
                    borderRadius: 3,
                    p: 3.5,
                    textAlign: 'center',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    minHeight: 220,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(0,36,63,0.3)',
                    },
                  }}
                >
                  <Box sx={{ color: '#e08355', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600, fontSize: '1.2rem', color: '#e08355' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}