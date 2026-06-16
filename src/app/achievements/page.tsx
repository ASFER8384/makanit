'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';

const achievements = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48, color: '#e08355' }} />,
    title: 'Top 100 Travel Company Worldwide',
    description: 'Recognized among the top 100 travel companies globally for exceptional service and customer satisfaction.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48, color: '#e08355' }} />,
    title: '500+ Happy Travelers',
    description: 'Successfully served over 500 satisfied customers with memorable travel experiences.',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 48, color: '#e08355' }} />,
    title: '50+ Global Destinations',
    description: 'Offering travel packages to more than 50 destinations across the globe.',
  },
  {
    icon: <StarIcon sx={{ fontSize: 48, color: '#e08355' }} />,
    title: '4.9/5 Customer Rating',
    description: 'Maintaining an exceptional customer satisfaction rating across all our services.',
  },
];

export default function Achievements() {
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
            Our Milestones
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            Achievements & Recognition
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>
            Proud moments in our journey of excellence
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: '#00243f',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(0,36,63,0.3)',
                    },
                  }}
                >
                  <Box sx={{ flexShrink: 0, mt: 0.5 }}>{achievement.icon}</Box>
                  <Box>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, fontSize: '1.2rem', color: '#e08355' }}>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                      {achievement.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Stats Section */}
          <Box
            sx={{
              mt: 6,
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #00243f 0%, #00355e 100%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}>
              Our Journey So Far
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, maxWidth: 600, mx: 'auto' }}>
              From humble beginnings to global recognition
            </Typography>
            <Grid container spacing={3}>
              {[
                { value: '500+', label: 'Travelers Served' },
                { value: '50+', label: 'Destinations' },
                { value: '10+', label: 'Years of Excellence' },
                { value: '4.9★', label: 'Customer Rating' },
              ].map((stat, i) => (
                <Grid size={{ xs: 6, md: 3 }} key={i}>
                  <Typography variant="h3" sx={{ color: '#e08355', fontWeight: 700, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}