'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import SectionHeading from './SectionHeading';

const bentoLayout = [
  // [slug, colSpan, rowSpan]
  { slug: 'maldives', colSpan: 2, rowSpan: 2 },
  { slug: 'turkey', colSpan: 1, rowSpan: 1 },
  { slug: 'thailand', colSpan: 1, rowSpan: 1 },
  { slug: 'egypt', colSpan: 1, rowSpan: 1 },
  { slug: 'azerbaijan', colSpan: 1, rowSpan: 1 },
  { slug: 'bali', colSpan: 1, rowSpan: 1 },
  { slug: 'georgia', colSpan: 2, rowSpan: 1 },
  { slug: 'malaysia', colSpan: 1, rowSpan: 1 },
];

const defaultRowHeight = 240;

export default function Destinations() {
  const displayDests = destinations.filter((_, i) => i < 8);

  const getDest = (slug: string) => displayDests.find((d) => d.slug === slug);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Explore the World"
          title="Popular Destinations"
          subtitle="Explore our most sought-after travel destinations around the world"
        />

        {/* Mobile: horizontal scroll */}
        <Box
          sx={{
            display: { xs: 'flex', sm: 'grid' },
            gridTemplateColumns: {
              sm: '1fr 1fr',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, sm: 2, md: 2.5 },
            gridAutoRows: { sm: 200, md: defaultRowHeight },
            overflowX: { xs: 'auto', sm: 'visible' },
            overflowY: { xs: 'hidden', sm: 'visible' },
            pb: { xs: 1, sm: 0 },
            scrollSnapType: { xs: 'x mandatory', sm: 'none' },
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {bentoLayout.map((item) => {
            const dest = getDest(item.slug);
            if (!dest) return null;

            return (
              <Box
                key={dest.slug}
                component={Link}
                href={`/destination/${dest.slug}`}
                sx={{
                  position: 'relative',
                  borderRadius: { xs: 2, md: 2 },
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'flex-end',
                  flex: { xs: '0 0 240px', sm: 'none' },
                  scrollSnapAlign: { xs: 'start', sm: 'none' },
                  gridColumn: {
                    sm: item.colSpan > 1 ? 'span 2' : 'span 1',
                    md: `span ${item.colSpan}`,
                  },
                  gridRow: {
                    sm: item.rowSpan > 1 ? `span ${item.rowSpan}` : 'span 1',
                    md: `span ${item.rowSpan}`,
                  },
                  minHeight: {
                    xs: 280,
                    sm: item.rowSpan > 1 ? 320 : 200,
                    md: 'auto',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(transparent 40%, rgba(0,36,63,0.85))',
                    zIndex: 1,
                    transition: 'opacity 0.3s',
                  },
                  '&:hover::after': {
                    background:
                      'linear-gradient(transparent 20%, rgba(0,36,63,0.95))',
                  },
                  '&:hover .dest-image': {
                    transform: 'scale(1.08)',
                  },
                  '&:hover .dest-name': {
                    color: '#e08355',
                  },
                  '&:hover .dest-cta': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 14px 40px rgba(0,36,63,0.12)',
                }}
              >
                <Box
                  className="dest-image"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    transition: 'transform 0.5s ease',
                  }}
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 600px) 50vw, 25vw"
                  />
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    p: { xs: 2, md: 3 },
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.25 }}
                  >
                    <LocationOnIcon sx={{ color: '#e08355', fontSize: 16 }} />
                    <Typography
                      className="dest-name"
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: {
                          xs: '1rem',
                          sm: item.colSpan > 1 ? '1.5rem' : '1.1rem',
                        },
                        transition: 'color 0.3s',
                        textShadow: '0 2px 8px rgba(0,0,0,0.35)',
                      }}
                    >
                      {dest.name}
                    </Typography>
                  </Box>
                  {item.slug === 'maldives' && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.85)',
                        maxWidth: 280,
                        display: { xs: 'block', sm: 'block' },
                        fontSize: { xs: '0.82rem', md: '0.9rem' },
                        mb: 1,
                      }}
                    >
                      {dest.description}
                    </Typography>
                  )}
                  <Box
                    className="dest-cta"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      mt: 0.75,
                      color: '#e08355',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      opacity: { xs: 1, md: 0 },
                      transform: { xs: 'none', md: 'translateY(8px)' },
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}
                  >
                    Explore
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={Link}
            href="/destination"
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderColor: 'rgba(0,36,63,0.18)',
              color: '#00243f',
              backgroundColor: 'white',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#00243f',
                color: 'white',
                borderColor: '#00243f',
              },
            }}
          >
            View All Destinations
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
