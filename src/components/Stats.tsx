'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import CountUp from './CountUp';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Happy Travelers',
    icon: <PeopleIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Destinations',
    icon: <TravelExploreIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    icon: <CalendarMonthIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
  },
  {
    value: 5,
    suffix: '',
    label: 'Customer Rating',
    icon: <StarIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
  },
];

export default function Stats() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #00243f 0%, #00355e 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ justifyContent: 'center' }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 2,
                  px: { xs: 2, md: 3 },
                  py: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(224,131,85,0.4)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                  },
                  '&:hover .stat-number': {
                    color: '#e08355',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    color: '#e08355',
                    mb: 1.5,
                    opacity: 0.9,
                  }}
                >
                  {stat.icon}
                </Box>

                {/* Number */}
                <Typography
                  className="stat-number"
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.2rem', md: '2.8rem' },
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1.2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                    transition: 'color 0.3s ease',
                  }}
                >
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </Typography>

                {/* Label */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    mt: 0.5,
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
