'use client';

import { Box, Container, Typography, Avatar, Stack, Rating, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionHeading from './SectionHeading';

const reviews = [
  {
    name: 'Ahmed Al Mansouri',
    location: 'Maldives Trip',
    text: 'Amazing travel agency! They arranged our Maldives trip perfectly. Every detail was handled with care.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    location: 'Turkey Tour',
    text: 'Best travel experience in Turkey! The hotels were excellent and the guided tours were unforgettable.',
    rating: 5,
  },
  {
    name: 'Mohammed Al Zaabi',
    location: 'Umrah Package',
    text: 'Professional, reliable, and affordable. Makani made our Umrah journey stress-free and blessed.',
    rating: 5,
  },
  {
    name: 'Fatima Al Nuaimi',
    location: 'Bali Honeymoon',
    text: 'Our honeymoon in Bali was magical! Thank you Makani for the wonderful arrangements and surprises.',
    rating: 5,
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function Reviews() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background:
          'linear-gradient(180deg, #f7f9fc 0%, #ffffff 50%, #f7f9fc 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from our happy travelers about their experiences with Makani"
        />

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
                p: 3.5,
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'white',
                border: '1px solid rgba(0,36,63,0.06)',
                boxShadow: '0 12px 28px rgba(0,0,0,0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #e08355, #f0a07a)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 22px 44px rgba(0,36,63,0.12)',
                  borderColor: 'rgba(224,131,85,0.35)',
                },
                '&:hover::before': { opacity: 1 },
              }}
            >
              <FormatQuoteIcon
                sx={{
                  fontSize: 44,
                  color: '#e08355',
                  opacity: 0.9,
                  mb: 0.5,
                  ml: -0.5,
                }}
              />
              <Rating
                value={review.rating}
                readOnly
                size="small"
                sx={{ color: '#e08355', mb: 1.5 }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#444', lineHeight: 1.75, mb: 3, flexGrow: 1 }}
              >
                {review.text}
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'white',
                    background: 'linear-gradient(135deg, #00243f, #1a3a5c)',
                  }}
                >
                  {getInitials(review.name)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#00243f' }}>
                    {review.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#e08355', fontWeight: 600 }}>
                    {review.location}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
