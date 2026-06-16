'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Destinations', href: '/destination' },
  { label: 'Travel Packages', href: '/packages' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const destinations = [
  { label: 'Maldives', href: '/destination/maldives' },
  { label: 'Turkey', href: '/destination/turkey' },
  { label: 'Thailand', href: '/destination/thailand' },
  { label: 'Egypt', href: '/destination/egypt' },
  { label: 'Azerbaijan', href: '/destination/azerbaijan' },
  { label: 'Bali', href: '/destination/bali' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#00243f',
        color: 'white',
        pt: { xs: 4, md: 6 },
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Image
              src="/images/makani-logo.png"
              alt="Makani Travel"
              width={160}
              height={65}
              style={{ objectFit: 'contain', marginBottom: 16 }}
            />
            <Typography variant="body2" sx={{ color: '#ccc', mb: 2, lineHeight: 1.7 }}>
              Makani Travel & Tourism — your trusted travel partner in the UAE, offering
              premium travel experiences and exclusive deals worldwide.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{ color: '#e08355', '&:hover': { backgroundColor: 'rgba(224,131,85,0.1)' } }}
                size="small"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                sx={{ color: '#e08355', '&:hover': { backgroundColor: 'rgba(224,131,85,0.1)' } }}
                size="small"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                sx={{ color: '#e08355', '&:hover': { backgroundColor: 'rgba(224,131,85,0.1)' } }}
                size="small"
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                sx={{ color: '#e08355', '&:hover': { backgroundColor: 'rgba(224,131,85,0.1)' } }}
                size="small"
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2.5, fontWeight: 600, position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  backgroundColor: '#e08355',
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} passHref legacyBehavior>
                  <Typography
                    component="a"
                    variant="body2"
                    sx={{
                      color: '#ccc',
                      textDecoration: 'none',
                      '&:hover': { color: '#e08355', pl: 0.5 },
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Destinations */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2.5, fontWeight: 600, position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  backgroundColor: '#e08355',
                },
              }}
            >
              Top Destinations
            </Typography>
            <Stack spacing={1.5}>
              {destinations.map((dest) => (
                <Link key={dest.label} href={dest.href} passHref legacyBehavior>
                  <Typography
                    component="a"
                    variant="body2"
                    sx={{
                      color: '#ccc',
                      textDecoration: 'none',
                      '&:hover': { color: '#e08355', pl: 0.5 },
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    {dest.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact / Newsletter */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2.5, fontWeight: 600, position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  backgroundColor: '#e08355',
                },
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ color: '#e08355', fontSize: 20, mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  Ajman, United Arab Emirates
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <EmailIcon sx={{ color: '#e08355', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  info@makanit.ae
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <PhoneIcon sx={{ color: '#e08355', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  +971 50 123 4567
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
            pb: 3,
          }}
        >
          <Typography variant="body2" sx={{ color: '#999' }}>
            © {new Date().getFullYear()} Makani Travel & Tourism. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#999' }}>
            Powered by{' '}
            <Typography
              component="span"
              sx={{ color: '#e08355', fontWeight: 500 }}
            >
              Makani Tourism & Travel
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}