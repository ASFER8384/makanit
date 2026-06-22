'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MosqueIcon from '@mui/icons-material/Mosque';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

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
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background:
          'linear-gradient(180deg, #f8f9fa 0%, #ffffff 45%, #f7fbff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Travel Services"
          subtitle="Discover our range of travel services designed to make your journey unforgettable"
        />

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                component={Link}
                href={service.link}
                sx={{
                  position: 'relative',
                  backgroundColor: '#00243f',
                  color: 'white',
                  borderRadius: 2,
                  p: 3.5,
                  textAlign: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                  minHeight: 240,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 12px 30px rgba(0,36,63,0.12)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))',
                    pointerEvents: 'none',
                  },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 18px 44px rgba(0,36,63,0.22)',
                    borderColor: 'rgba(224,131,85,0.4)',
                  },
                  '&:hover .svc-icon': {
                    backgroundColor: '#e08355',
                    borderColor: '#e08355',
                    color: '#ffffff',
                    transform: 'scale(1.06)',
                  },
                  '&:hover .svc-title': { color: '#e08355' },
                  '&:hover .svc-cta': { opacity: 1, transform: 'translateY(0)' },
                }}
              >
                <Box
                  className="svc-icon"
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 8,
                    backgroundColor: 'rgba(224,131,85,0.14)',
                    border: '1px solid rgba(224,131,85,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e08355',
                    mx: 'auto',
                    mb: 2,
                    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  className="svc-title"
                  variant="h5"
                  sx={{
                    mb: 1.5,
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>
                  {service.description}
                </Typography>
                <Box
                  className="svc-cta"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: 2,
                    color: '#e08355',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    opacity: { xs: 1, md: 0 },
                    transform: { xs: 'none', md: 'translateY(8px)' },
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                  }}
                >
                  Learn More
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
