'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';

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
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#fff' }}>
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
          Popular Destinations
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
          Explore our most sought-after travel destinations around the world
        </Typography>

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
              <Link
                key={dest.slug}
                href={`/destination/${dest.slug}`}
                passHref
                legacyBehavior
              >
                <Box
                  component="a"
                  sx={{
                    position: 'relative',
                    borderRadius: { xs: 2.5, md: 3 },
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
                  }}
                >
                  {/* Background Image */}
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

                  {/* Content */}
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      p: { xs: 2, md: 3 },
                      width: '100%',
                    }}
                  >
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
                        mb: item.rowSpan > 1 ? 0.5 : 0,
                        transition: 'color 0.3s',
                      }}
                    >
                      {dest.name}
                    </Typography>
                    {item.slug === 'maldives' && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          maxWidth: 280,
                          display: { xs: 'block', sm: 'block' },
                          fontSize: { xs: '0.82rem', md: '0.9rem' },
                        }}
                      >
                        {dest.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Link href="/destination" passHref legacyBehavior>
            <Button
              component="a"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: '#00243f',
                color: '#00243f',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#00243f',
                  color: 'white',
                },
              }}
            >
              View All Destinations
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}