'use client';

import { useParams } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import RestoreIcon from '@mui/icons-material/Restore';
import Link from 'next/link';
import { destinations } from '@/data/destinations';

const packages = [
  {
    title: 'Standard Package',
    price: 'From AED 2,999',
    duration: '5 Days / 4 Nights',
    includes: ['Flights', 'Hotel', 'Breakfast', 'Transfers'],
  },
  {
    title: 'Premium Package',
    price: 'From AED 4,999',
    duration: '7 Days / 6 Nights',
    includes: ['Flights', '5-Star Hotel', 'All Meals', 'Tours', 'Transfers'],
  },
  {
    title: 'Luxury Package',
    price: 'From AED 7,999',
    duration: '10 Days / 9 Nights',
    includes: ['Business Class', 'Luxury Resort', 'All Inclusive', 'Private Tours', 'VIP Transfers'],
  },
];

export default function DestinationDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: '#00243f', mb: 2 }}>
            Destination Not Found
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
            The destination you&apos;re looking for doesn&apos;t exist.
          </Typography>
          <Link href="/destination" passHref legacyBehavior>
            <Button component="a" variant="contained" color="secondary">
              View All Destinations
            </Button>
          </Link>
        </Container>
      </Box>
    );
  }

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '40vh', md: '55vh' },
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={destination.image}
          alt={destination.name}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(transparent 40%, rgba(0,36,63,0.9))',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pb: { xs: 4, md: 6 } }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ color: '#e08355' }} />
            <Typography variant="overline" sx={{ color: '#e08355', fontWeight: 600, letterSpacing: 2 }}>
              Destination
            </Typography>
          </Stack>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
            }}
          >
            {destination.name}
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mt: 1, maxWidth: 600 }}>
            {destination.description}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          {/* Packages */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              mb: 1,
              color: '#00243f',
            }}
          >
            Travel Packages to {destination.name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mb: 4 }}>
            Choose the perfect package for your trip
          </Typography>

          <Grid container spacing={3}>
            {packages.map((pkg, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    backgroundColor: index === 1 ? '#00243f' : '#f8f9fa',
                    color: index === 1 ? 'white' : '#00243f',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 15px 40px rgba(0,36,63,0.2)' },
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    {index === 1 && (
                      <Chip
                        label="Most Popular"
                        size="small"
                        sx={{
                          backgroundColor: '#e08355',
                          color: 'white',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      />
                    )}
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {pkg.title}
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#e08355', fontWeight: 700, mb: 1 }}>
                      {pkg.price}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2.5 }}>
                      <RestoreIcon sx={{ fontSize: 18 }} />
                      <Typography variant="body2">{pkg.duration}</Typography>
                    </Stack>
                    <Stack spacing={1.5} sx={{ mb: 3 }}>
                      {pkg.includes.map((item, i) => (
                        <Stack key={i} direction="row" spacing={1} sx={{ alignItems: "center" }}>
                          <FlightTakeoffIcon sx={{ fontSize: 16, color: '#e08355' }} />
                          <Typography variant="body2">{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <Button
                      fullWidth
                      variant="contained"
                      color={index === 1 ? 'secondary' : 'primary'}
                      sx={{ fontWeight: 600, py: 1.2 }}
                    >
                      Book This Package
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Back button */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Link href="/destination" passHref legacyBehavior>
              <Button variant="outlined" sx={{ px: 4, borderColor: '#00243f', color: '#00243f' }}>
                ← All Destinations
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}