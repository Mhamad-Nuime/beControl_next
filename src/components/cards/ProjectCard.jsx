'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';
// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { GraphicsCard } from '@/components/cards';
import Background from '@/images/graphics/Background';

import { PROJECT_PATH } from '@/path';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// @third-party
import { motion } from 'motion/react';

import useFocusWithin from '@/hooks/useFocusWithin';

/***************************  GRAPHICS CARD  ***************************/

export default function ProjectCard({ index, title, subTitle, chips, images }) {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();

  return (
    <GraphicsCard sx={{ overflow: 'hidden' }}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5
        }}
      >
        <GraphicsCard
          sx={{
            height: { xs: 240, sm: 324, md: 380 },
            position: 'relative',
            overflow: 'hidden',
            ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
          }}
        >
          <Link
            href={`${PROJECT_PATH}/${index}`}
            component={NextLink}
            aria-label={title}
            sx={{ position: 'absolute', top: 0, height: 1, width: 1, borderRadius: { xs: 6, sm: 8, md: 10 }, zIndex: 1 }}
          />
          <Background />
          <Box sx={{ position: 'absolute', top: 0, width: 1, height: 1, textAlign: 'center' }}>
            <CardMedia component="img" image={images[0]} sx={{ objectFit: 'contain' }} alt="other sections" loading="lazy" />
          </Box>
          <Stack
            sx={{
              height: 177,
              bottom: 0,
              width: 1,
              position: 'absolute',
              justifyContent: 'end',
              textAlign: 'center',
              gap: { xs: 0.25, md: 0.5, sm: 1 },
              p: 3,
              zIndex: 0
              // background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 100%)`
            }}
          >
            <Box sx={{ position: 'absolute', bottom: 0, insetInline: 0, background: '#0000008a', height: 150, width: 1, zIndex: 0, filter: 'blur(7px)' }}></Box>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" sx={{ color: 'primary.main' }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100' }}>
                {subTitle}
              </Typography>
            </Box>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </GraphicsCard>
  );
}

ProjectCard.propTypes = {
  sx: PropTypes.any,
  children: PropTypes.any,
  overLay: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  bgImage: PropTypes.any,
  rest: PropTypes.any
};
