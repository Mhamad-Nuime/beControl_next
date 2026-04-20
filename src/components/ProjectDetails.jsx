'use client';
import '@/app/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';

const hasItems = (value) => Array.isArray(value) && value.length > 0;
const hasText = (value) => typeof value === 'string' && value.trim().length > 0;
const articleReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut'
    }
  }
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function ProjectDetails(project = {}) {
  const { index, title, images = [], subTitle, chips, description, content } = project;

  return (
    <section>
      <Swiper
        className="project-details-swiper"
        style={{ height: '80svh' }}
        direction="vertical"
        spaceBetween={0}
        speed={1000}
        centeredSlides
        grabCursor
        loop
        lazyPreloadPrevNext={2}
        parallax
        modules={[Navigation, Pagination, Parallax, Autoplay]}
        navigation
        pagination={{ type: 'progressbar' }}
        // mousewheel
        autoplay={{
          delay: 4000,              // time between slides (ms)
          disableOnInteraction: false, // keep autoplay after user scroll/click
          pauseOnMouseEnter: false,  // optional
        }}
      >
        {images.map((image, imageIndex) => (
          <SwiperSlide key={imageIndex} style={{ overflow: 'hidden' }}>
            <div data-swiper-parallax="20%"  style={{ width: '112%', height: '112%', marginLeft: '-6%', marginTop: '-6%' }}>
              <CardMedia component="img" image={image} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={title || 'Project image'} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <article>
          <Stack
            spacing={2}
            component={motion.div}
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Typography variant="overline" color="text.secondary" component={motion.p} variants={articleReveal}>
              Project #{index}
            </Typography>
            <Typography variant="h3" color="primary.main" component={motion.h2} variants={articleReveal}>
              {title}
            </Typography>

            {hasText(subTitle) && (
              <Typography variant="h6" color="text.secondary" component={motion.h3} variants={articleReveal}>
                {subTitle}
              </Typography>
            )}

            {hasItems(chips) && (
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" component={motion.div} variants={articleReveal}>
                {chips.map((chip) => (
                  <Chip key={chip} label={chip} />
                ))}
              </Stack>
            )}

            {hasText(description) && (
              <Typography variant="body1" color="text.secondary" component={motion.p} variants={articleReveal}>
                {description}
              </Typography>
            )}
          </Stack>

          {hasItems(content) && (
            <Stack
              spacing={3}
              sx={{ mt: 4 }}
              component={motion.div}
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {content.map((section, sectionIndex) => (
                <Card
                  key={`${section.title || 'section'}-${sectionIndex}`}
                  variant="outlined"
                  sx={{ p: 3 }}
                  component={motion.article}
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Stack spacing={2} component={motion.div} variants={staggerChildren}>
                    {hasText(section.title) && (
                      <Typography variant="h5" color="primary.main" component={motion.h3} variants={articleReveal}>
                        {section.title}
                      </Typography>
                    )}

                    {hasText(section.description) && (
                      <Typography variant="body1" color="text.secondary" component={motion.p} variants={articleReveal}>
                        {section.description}
                      </Typography>
                    )}

                    {hasItems(section.chips) && (
                      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" component={motion.div} variants={articleReveal}>
                        {section.chips.map((chip) => (
                          <Chip key={chip} label={chip} size="small" variant="outlined" />
                        ))}
                      </Stack>
                    )}

                    {hasItems(section.points) && (
                      <List sx={{ py: 0 }} component={motion.ul} variants={staggerChildren}>
                        {section.points.map((point, pointIndex) => (
                          <ListItem
                            key={`${pointIndex}-${point}`}
                            disableGutters
                            sx={{ display: 'list-item', ml: 2, py: 0.25 }}
                            component={motion.li}
                            variants={articleReveal}
                          >
                            {point}
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Stack>
                </Card>
              ))}
            </Stack>
          )}

          <Box sx={{ mt: 6 }}>
            <Divider />
          </Box>
        </article>
      </Container>
    </section>
  );
}
