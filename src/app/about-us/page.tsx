'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HotelIcon from '@mui/icons-material/Hotel';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CardTravelIcon from '@mui/icons-material/CardTravel';

const features = [
  {
    icon: <AirplanemodeActiveIcon sx={{ fontSize: 40, color: '#e08355' }} />,
    title: 'Flight Booking',
    description: 'Best deals on international and domestic flights with top airlines.',
  },
  {
    icon: <HotelIcon sx={{ fontSize: 40, color: '#e08355' }} />,
    title: 'Hotel Reservations',
    description: 'Premium accommodations worldwide at the best rates.',
  },
  {
    icon: <CardTravelIcon sx={{ fontSize: 40, color: '#e08355' }} />,
    title: 'Travel Packages',
    description: 'Curated packages including flights, hotels, and activities.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#e08355' }} />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your travel needs.',
  },
];

export default function AboutUs() {
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
            About Us
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
              mb: 2,
            }}
          >
            Makani Travel & Tourism
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700, mx: 'auto' }}>
            Ranked among the Top 100 travel companies worldwide — your trusted partner for
            unforgettable journeys.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg">
        {/* About Section */}
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={5} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 300, md: 420 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(0,36,63,0.06)',
                  boxShadow: '0 18px 50px rgba(0,36,63,0.14)',
                }}
              >
                <Image
                  src="/images/wp/business-man-car-scaled.jpg"
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
                sx={{ color: '#e08355', fontWeight: 700, letterSpacing: 2, fontSize: '0.8rem' }}
              >
                Who We Are
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: '#00243f', mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2rem' } }}
              >
                Your Trusted Travel Partner in the UAE
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
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mb: 2 }}>
                Makani Travel & Tourism is a premier travel agency based in Ajman, UAE. We
                specialize in creating unforgettable travel experiences for our clients,
                offering everything from luxury holidays to Umrah packages.
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mb: 2 }}>
                Ranked among the Top 100 travel companies worldwide, we pride ourselves on our
                commitment to excellence, personalized service, and attention to every detail
                of your journey.
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                Whether you are looking for a relaxing beach vacation, an adventurous expedition,
                a cultural tour, or a spiritual journey, our team of experienced travel
                professionals is dedicated to making your travel dreams come true.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Features */}
        <Box sx={{ pb: { xs: 6, md: 8 } }}>
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title="Why Choose Us"
            subtitle="We provide comprehensive travel services tailored to your needs"
          />
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper
                  sx={{
                    p: 3.5,
                    textAlign: 'center',
                    borderRadius: 3,
                    backgroundColor: '#00243f',
                    color: 'white',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(0,36,63,0.3)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: '1.1rem' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}