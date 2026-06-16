'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Rating,
  Stack,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const allReviews = [
  {
    name: 'Ahmed Al Mansouri',
    text: 'Amazing travel agency! They arranged our Maldives trip perfectly. Every detail was handled with care. The resort they recommended was stunning and the transfer was seamless.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    text: 'Best travel experience in Turkey! The hotels were excellent and the guided tours were unforgettable. Already planning our next trip with Makani.',
    rating: 5,
  },
  {
    name: 'Al Zaabi',
    text: 'Professional, reliable, and affordable. Makani made our Umrah journey stress-free and blessed. Highly recommended for anyone seeking a spiritual journey.',
    rating: 5,
  },
  {
    name: 'Fatima Al Nuaimi',
    text: 'Our honeymoon in Bali was magical! Thank you Makani for the wonderful arrangements and special surprises throughout our stay.',
    rating: 5,
  },
  {
    name: 'Khalid Al Shamsi',
    text: 'Excellent service from start to finish. The team at Makani went above and beyond to ensure our family vacation was perfect.',
    rating: 5,
  },
  {
    name: 'Layla Hassan',
    text: 'I have used many travel agencies but Makani stands out for their attention to detail and personalized service. Truly world-class.',
    rating: 5,
  },
  {
    name: 'Omar Farooq',
    text: 'The Azerbaijan package was incredible! Everything was organized perfectly - from airport transfers to hotel stays and tours.',
    rating: 5,
  },
  {
    name: 'Nora Al Ketbi',
    text: 'Makani helped us plan a group trip to Georgia and it was flawless. Great communication and support throughout.',
    rating: 5,
  },
];

export default function Reviews() {
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
            Testimonials
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>
            Read reviews from our happy travelers
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={3}>
            {allReviews.map((review, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    position: 'relative',
                    height: '100%',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontSize: 40,
                      color: '#e08355',
                      opacity: 0.15,
                    }}
                  />
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
                    <Avatar sx={{ backgroundColor: '#00243f', color: '#e08355' }}>
                      {review.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#00243f' }}>
                        {review.name}
                      </Typography>
                      <Rating value={review.rating} readOnly size="small" sx={{ color: '#e08355' }} />
                    </Box>
                  </Stack>
                  <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7, fontStyle: 'italic' }}>
                    &ldquo;{review.text}&rdquo;
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