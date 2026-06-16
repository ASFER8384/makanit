'use client';

import { Box, Container, Typography, Avatar, Stack, Rating, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const reviews = [
  {
    name: 'Ahmed Al Mansouri',
    text: 'Amazing travel agency! They arranged our Maldives trip perfectly. Every detail was handled with care.',
    rating: 5,
    image: 'https://makanit.ae/wp-content/uploads/2025/03/Google-Review-Temp-Makani-01-01-1024x667.jpg',
  },
  {
    name: 'Sarah Johnson',
    text: 'Best travel experience in Turkey! The hotels were excellent and the guided tours were unforgettable.',
    rating: 5,
    image: 'https://makanit.ae/wp-content/uploads/2025/03/Google-Review-Temp-Makani-01-02-1024x667.jpg',
  },
  {
    name: 'Mohammed Al Zaabi',
    text: 'Professional, reliable, and affordable. Makani made our Umrah journey stress-free and blessed.',
    rating: 5,
    image: 'https://makanit.ae/wp-content/uploads/2025/03/Google-Review-Temp-Makani-01-03-1024x667.jpg',
  },
  {
    name: 'Fatima Al Nuaimi',
    text: 'Our honeymoon in Bali was magical! Thank you Makani for the wonderful arrangements and surprises.',
    rating: 5,
    image: 'https://makanit.ae/wp-content/uploads/2025/03/Google-Review-Temp-Makani-01-04-1024x667.jpg',
  },
];

export default function Reviews() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#f8f9fa',
      }}
    >
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
          What Our Clients Say
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#666',
            mb: 5,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Hear from our happy travelers about their experiences with Makani
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr 1fr',
            },
            gap: 3,
          }}
        >
          {reviews.map((review, index) => (
            <Paper
              key={index}
              sx={{
                p: 3,
                borderRadius: 3,
                position: 'relative',
                backgroundColor: 'white',
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
                  opacity: 0.2,
                }}
              />
              <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
                <Avatar
                  src={review.image}
                  alt={review.name}
                  sx={{ width: 56, height: 56 }}
                />
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
          ))}
        </Box>
      </Container>
    </Box>
  );
}