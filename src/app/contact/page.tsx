'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  MenuItem,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactInfo = [
  {
    icon: <PhoneIcon sx={{ fontSize: 28, color: '#e08355' }} />,
    title: 'Phone',
    details: ['+971 50 123 4567', '+971 50 987 6543'],
  },
  {
    icon: <EmailIcon sx={{ fontSize: 28, color: '#e08355' }} />,
    title: 'Email',
    details: ['info@makanit.ae', 'booking@makanit.ae'],
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 28, color: '#e08355' }} />,
    title: 'Address',
    details: ['Ajman, United Arab Emirates'],
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 28, color: '#e08355' }} />,
    title: 'Working Hours',
    details: ['Sat - Thu: 9:00 AM - 5:00 PM'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Hero Banner */}
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
            Get In Touch
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>
            We&apos;d love to hear from you. Get in touch with our team.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={5}>
            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                {contactInfo.map((item, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: '#f8f9fa',
                      boxShadow: 'none',
                    }}
                  >
                    <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                      {item.icon}
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#00243f', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        {item.details.map((detail, i) => (
                          <Typography key={i} variant="body2" sx={{ color: '#666' }}>
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Grid>

            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, boxShadow: '0 5px 30px rgba(0,0,0,0.08)' }}>
                <Typography variant="h4" sx={{ color: '#00243f', mb: 1, fontWeight: 600 }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ px: 5, py: 1.5, fontWeight: 600 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}