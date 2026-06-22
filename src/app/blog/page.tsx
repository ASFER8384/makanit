'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const posts = [
  {
    title: 'Top 10 Maldives Resorts for Your Dream Vacation',
    excerpt: 'Discover the most luxurious and stunning resorts in the Maldives for an unforgettable tropical getaway.',
    image: '/images/wp/holiday-inn-resort-kandooma-maldives.jpg',
    date: 'June 8, 2026',
    category: 'Destinations',
  },
  {
    title: 'Ultimate Turkey Travel Guide: Istanbul to Cappadocia',
    excerpt: 'Explore the rich history, culture, and landscapes of Turkey with our comprehensive travel guide.',
    image: '/images/wp/0203-0245_istanbul-1024x666.jpg',
    date: 'May 25, 2026',
    category: 'Travel Guide',
  },
  {
    title: 'Best Time to Visit Azerbaijan: A Seasonal Guide',
    excerpt: 'Plan your trip to Azerbaijan with our guide to the best seasons, weather, and events.',
    image: '/images/wp/Azerbaijan.jpg',
    date: 'May 15, 2026',
    category: 'Travel Guide',
  },
  {
    title: 'Egypt Travel Tips: Everything You Need to Know',
    excerpt: 'Essential tips for traveling to Egypt, from visa requirements to must-visit attractions.',
    image: '/images/wp/orig-1024x683.jpeg',
    date: 'April 30, 2026',
    category: 'Travel Tips',
  },
  {
    title: 'Bali vs Maldives: Which Paradise is Right for You?',
    excerpt: 'Compare two of the world\'s most beautiful destinations and find your perfect tropical escape.',
    image: '/images/wp/12839.jpg',
    date: 'April 20, 2026',
    category: 'Destinations',
  },
  {
    title: 'Umrah Travel Guide: Step by Step Planning',
    excerpt: 'A comprehensive guide to planning your Umrah journey with Makani Travel & Tourism.',
    image: '/images/wp/1709136361_7wMzpyT0uX6wDvfWFVqg32kHd.webp',
    date: 'April 10, 2026',
    category: 'Umrah',
  },
];

export default function Blog() {
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
            Our Blog
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            Travel Tips & Guides
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>
            Inspiration and advice for your next adventure
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={3}>
            {posts.map((post, index) => (
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
                    image={post.image}
                    alt={post.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          backgroundColor: '#e08355',
                          color: 'white',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                      <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>
                        <CalendarTodayIcon sx={{ fontSize: 14, color: '#999' }} />
                        <Typography variant="caption" sx={{ color: '#999' }}>
                          {post.date}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#00243f', mb: 1, fontSize: '1.05rem' }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7, flex: 1 }}>
                      {post.excerpt}
                    </Typography>
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