'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MosqueIcon from '@mui/icons-material/Mosque';
import Link from 'next/link';

const categories = ['All', 'Summer', 'Honeymoon', 'Umrah', 'Eid'];

interface Package {
  title: string;
  destination: string;
  image: string;
  category: string;
  description: string;
  price: string;
}

const packages: Package[] = [
  {
    title: 'Maldives Paradise Escape',
    destination: 'Maldives',
    image: 'https://makanit.ae/wp-content/uploads/2025/11/holiday-inn-resort-kandooma-maldives.jpg',
    category: 'Summer',
    description: '5 nights in a luxury overwater villa with all-inclusive benefits.',
    price: 'AED 4,999',
  },
  {
    title: 'Turkey Discovery Tour',
    destination: 'Turkey',
    image: 'https://makanit.ae/wp-content/uploads/2025/03/0203-0245_istanbul-1024x666.jpg',
    category: 'Summer',
    description: '7 days exploring Istanbul, Cappadocia, and Antalya.',
    price: 'AED 3,499',
  },
  {
    title: 'Bali Honeymoon Special',
    destination: 'Bali',
    image: 'https://makanit.ae/wp-content/uploads/2025/12/12839.jpg',
    category: 'Honeymoon',
    description: '6 nights romantic getaway with spa and sunset dinners.',
    price: 'AED 4,299',
  },
  {
    title: 'Umrah Package - 10 Days',
    destination: 'Makkah & Madinah',
    image: 'https://makanit.ae/wp-content/uploads/2025/01/1709136361_7wMzpyT0uX6wDvfWFVqg32kHd.webp',
    category: 'Umrah',
    description: 'Complete Umrah package with 5-star hotel and transport.',
    price: 'AED 3,999',
  },
  {
    title: 'Eid Al-Adha in Azerbaijan',
    destination: 'Azerbaijan',
    image: 'https://makanit.ae/wp-content/uploads/2025/01/Azerbaijan.jpg',
    category: 'Eid',
    description: '5 nights in Baku with city tour and mountain excursion.',
    price: 'AED 2,999',
  },
  {
    title: 'Thailand Beach Holiday',
    destination: 'Thailand',
    image: 'https://makanit.ae/wp-content/uploads/2025/06/bangkok_city-1024x681.jpg',
    category: 'Summer',
    description: '7 nights in Phuket and Bangkok with island tours.',
    price: 'AED 3,799',
  },
  {
    title: 'Egypt Nile & Red Sea',
    destination: 'Egypt',
    image: 'https://makanit.ae/wp-content/uploads/2024/09/orig-1024x683.jpeg',
    category: 'Eid',
    description: '8 days Cairo, Nile cruise, and Sharm El-Sheikh.',
    price: 'AED 3,299',
  },
  {
    title: 'Maldives Honeymoon Bliss',
    destination: 'Maldives',
    image: 'https://makanit.ae/wp-content/uploads/2025/11/holiday-inn-resort-kandooma-maldives.jpg',
    category: 'Honeymoon',
    description: '7 nights in a private island resort with couple experiences.',
    price: 'AED 6,999',
  },
  {
    title: 'Georgia Mountain Adventure',
    destination: 'Georgia',
    image: 'https://makanit.ae/wp-content/uploads/2025/12/2189_7-1024x682.jpg',
    category: 'Summer',
    description: '6 days exploring Tbilisi, Kazbegi, and wine regions.',
    price: 'AED 2,499',
  },
];

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPackages =
    selectedCategory === 'All'
      ? packages
      : packages.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (
    _: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <>
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
            Travel Packages
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            Our Packages
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>
            Choose from our curated travel packages designed for every type of traveler
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          {/* Category Filter */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={handleCategoryChange}
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                '& .MuiToggleButton-root': {
                  px: 3,
                  py: 1,
                  borderRadius: '20px !important',
                  border: '1px solid #ddd',
                  mx: 0.5,
                  mb: 1,
                  color: '#555',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&.Mui-selected': {
                    backgroundColor: '#00243f',
                    color: 'white',
                    '&:hover': { backgroundColor: '#00243f' },
                  },
                },
              }}
            >
              {categories.map((cat) => (
                <ToggleButton key={cat} value={cat}>
                  {cat === 'All' ? 'All Packages' : cat}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* Packages Grid */}
          <Grid container spacing={3}>
            {filteredPackages.map((pkg, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={pkg.image}
                    alt={pkg.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="overline" sx={{ color: '#e08355', fontWeight: 600, letterSpacing: 1 }}>
                      {pkg.destination}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#00243f', mb: 1 }}>
                      {pkg.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7, flex: 1 }}>
                      {pkg.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" sx={{ color: '#e08355', fontWeight: 700 }}>
                        {pkg.price}
                      </Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      >
                        Book Now
                      </Button>
                    </Box>
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