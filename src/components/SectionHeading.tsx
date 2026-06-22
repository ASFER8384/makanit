'use client';

import { Box, Typography } from '@mui/material';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 5 },
        mx: centered ? 'auto' : 0,
        maxWidth: centered ? 700 : 'none',
      }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{
            color: '#e08355',
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: '0.8rem',
            display: 'block',
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.8rem', md: '2.5rem' },
          color: '#00243f',
          mt: eyebrow ? 1 : 0,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 3,
          borderRadius: 2,
          backgroundColor: '#e08355',
          mx: centered ? 'auto' : 0,
          mb: subtitle ? 2 : 0,
        }}
      />
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            maxWidth: 600,
            mx: centered ? 'auto' : 0,
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
