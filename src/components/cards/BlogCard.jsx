'use client';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Typography, Chip, Stack, Box } from '@mui/material';
import { motion } from 'motion/react';

export default function BlogCard({ title, subTitle, chips, image, date, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        component={Link}
        href={`/blog/${index}`}
        sx={{
          position: 'relative',
          borderRadius: 5,
          overflow: 'hidden',
          height: 420,
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          cursor: 'pointer',

          // base shadow
          boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',

          '&:hover': {
            transform: 'translateY(-8px) scale(1.01)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.18)'
          },

          '&:hover .image': {
            transform: 'scale(1.08)'
          },

          '&:hover .overlay': {
            opacity: 0.85
          }
        }}
      >
        {/* Background Image */}
        <Box
          className="image"
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.8s ease'
          }}
        />

        {/* Gradient Overlay */}
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 10%, rgba(0,0,0,0.2) 60%, transparent 100%)',
            opacity: 0.7,
            transition: 'opacity 0.4s ease'
          }}
        />

        {/* Content */}
        <Stack
          justifyContent="flex-end"
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            p: 3,
            color: '#fff'
          }}
        >
          {/* Chips */}
          <Stack direction="row" spacing={1} mb={1} flexWrap="wrap">
            {chips?.map((c, i) => (
              <Chip
                key={i}
                label={c}
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  backdropFilter: 'blur(6px)',
                  fontWeight: 500
                }}
              />
            ))}
          </Stack>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 1,
              letterSpacing: '-0.01em'
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body2"
            sx={{
              opacity: 0.85,
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {subTitle}
          </Typography>

          {/* Footer */}
          <Typography
            variant="caption"
            sx={{
              opacity: 0.7
            }}
          >
            {date}
          </Typography>
        </Stack>
      </Card>
    </motion.div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  chips: PropTypes.array,
  image: PropTypes.string,
  date: PropTypes.string,
  index: PropTypes.number
};