'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion, useScroll, useTransform } from 'motion/react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';
import { withAlpha } from '@/utils/colorUtils';

// @ Swiper
import '@/app/swiper.css';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Parallax, Autoplay } from 'swiper/modules';

import CardMedia from '@mui/material/CardMedia';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';

// @assets
import Wave from '@/images/graphics/Wave';

// threshold - adjust threshold as needed
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

/***************************  HERO - 17  ***************************/

/**
 *
 * Demos:
 * - [Hero17](https://www.saasable.io/blocks/hero/hero17)
 *
 * API:
 * - [Hero17 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/hero/hero17#props-details)
 */

export default function Hero17({ chip, headLine, captionLine, primaryBtn, videoSrc, videoThumbnail, listData }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video play/pause based on intersection with the viewport
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current && !isPlaying) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <>
      {/* <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          // ...getBackgroundDots(theme.vars.palette.grey[300], 2, 35),
          backgroundImage: 'url(/assets/images/hero/hero.webp)',
          filter: 'brightness(0.6)',
          backgroundSize: 'cover'
          // bgcolor: 'grey.100'
        }}
      /> */}
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              // backgroundImage: 'url(/assets/images/hero/hero.webp)',
              filter: 'brightness(0.4)',
              backgroundSize: 'cover',
              z: -1
            }}
          >
            <Swiper
              className="project-details-swiper"
              style={{ height: '100%' }}
              direction="horizontal"
              spaceBetween={0}
              speed={1000}
              loop
              lazyPreloadPrevNext={4}
              parallax
              modules={[Pagination, Parallax, Autoplay]}
              pagination={{ type: 'progressbar' }}
              autoplay={{
                delay: 5000 // time between slides (ms)
              }}
            >
              {[
                '/assets/images/hero/divisions-hero.webp',
                '/assets/images/hero/hero.webp',
                '/assets/images/hero/project-hero.webp',
                '/assets/images/hero/blog-hero.webp',
                '/assets/images/hero/contact-us-hero.webp',
                '/assets/images/hero/aboutus-hero.webp',
              ].map((image, index) => (
                <SwiperSlide key={index} style={{ overflow: 'hidden' }}>
                  <div data-swiper-parallax="20%" style={{ width: '112%', height: '112%', marginLeft: '-6%', marginTop: '-6%' }}>
                    <CardMedia component="img" image={image} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={{ pb: { xs: 3, sm: 4, md: 5 }, mt: 10, position: 'relative' }}>
            <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: [0.6, 1.15, 0.95, 1] }}
                animate={{
                  boxShadow: [
                    `0 0 0px ${withAlpha(theme.vars.palette.primary.dark, 0)}`,
                    `0 0 20px ${withAlpha(theme.vars.palette.primary.main, 0.8)}`,
                    `0 0 0px ${withAlpha(theme.vars.palette.primary.dark, 0)}`
                  ],
                  borderRadius: '74px'
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'linear' }}
              >
                <Chip
                  variant="outlined"
                  label={chip.label}
                  slotProps={{
                    label: {
                      sx: { py: 0.5, px: 1.5, ...(typeof chip.label === 'string' && { typography: 'caption', color: 'text.secondary' }) }
                    }
                  }}
                  sx={{ bgcolor: 'grey.100' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'linear' }}
              >
                <Typography variant="h1" align="center" sx={{ maxWidth: 800, color: 'primary.main', fontWeight: { xs: 600 } }}>
                  {headLine}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <Box sx={{ pt: 0.5, pb: 0.75 }}>
                  <Wave />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650, color: 'white' }}>
                  {captionLine}
                </Typography>
              </motion.div>
            </Stack>
            <Stack sx={{ alignItems: 'center', gap: 2, mt: { xs: 3, sm: 4, md: 5 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.06 }}
              >
                <ButtonAnimationWrapper>
                  {/* <Button
                    color="primary"
                    variant="contained"
                    startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                    {...primaryBtn}
                  /> */}
                  <Chip
                    label="Landing Page Sections"
                    color="primary"
                    icon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                    slotProps={{ label: { sx: { py: 0.75, px: 1, typography: 'caption2' } } }}
                    sx={{ height: 32, px: 1, bgcolor: 'primary.main' }}
                  />
                </ButtonAnimationWrapper>
              </motion.div>
              <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                {listData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.08, ease: 'linear' }}
                  >
                    <Chip
                      label={item.title}
                      href={`#${item.title}`}
                      component="span"
                      variant="outlined"
                      icon={<GraphicsImage image={item.image} sx={{ width: 16, height: 16 }} />}
                      slotProps={{ label: { sx: { py: 0.75, px: 1, typography: 'caption2' } } }}
                      sx={{
                        height: 32,
                        px: 1,
                        bgcolor: 'grey.100',
                        cursor: 'pointer',
                        transition: 'all .2s ease',
                        '&:hover': {
                          bgcolor: 'grey.400',
                          transform: 'rotate(3deg)'
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </Box>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ scale }}
          >
            <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300' }}>
              <video
                playsInline
                ref={videoRef}
                width="100%"
                height="100%"
                style={{ display: 'flex', objectFit: 'cover' }}
                preload="metadata"
                autoPlay={false}
                loop={true}
                muted={true}
                poster={videoThumbnail}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </GraphicsCard>
          </motion.div> */}
        </Box>
      </ContainerWrapper>
    </>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.any,
  videoSrc: PropTypes.string,
  videoThumbnail: PropTypes.string,
  listData: PropTypes.array
};
