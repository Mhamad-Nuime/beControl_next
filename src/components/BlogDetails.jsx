'use client';

import PropTypes from 'prop-types';
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

const hasText = (value) => typeof value === 'string' && value.trim().length > 0;
const hasItems = (value) => Array.isArray(value) && value.length > 0;
const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function toListItems(entries = []) {
  return entries
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      return item.point || item.benefit || item.trend || item.description || null;
    })
    .filter(Boolean);
}

export default function BlogDetails({ blog }) {
  if (!blog) return null;

  const { title, subTitle, date, author, image, chips, content = {} } = blog;
  const { introduction, sections = [], conclusion } = content;

  return (
    <section>
      <CardMedia component="img" image={image} alt={title || 'Blog image'} sx={{ width: 1, height: { xs: 260, sm: 380, md: 480 }, objectFit: 'cover' }} />

      <Container maxWidth="md" sx={{ py: 6 }}>
        <article>
          <Stack component={motion.div} spacing={2} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Typography component={motion.p} variants={reveal} variant="overline" color="text.secondary">
              Blog #{blog.index}
            </Typography>
            <Typography component={motion.h1} variants={reveal} variant="h3" color="primary.main">
              {title}
            </Typography>

            {hasText(subTitle) && (
              <Typography component={motion.p} variants={reveal} variant="h6" color="text.secondary">
                {subTitle}
              </Typography>
            )}

            <Stack component={motion.div} variants={reveal} direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              {hasText(date) && <Typography color="text.secondary">{date}</Typography>}
              {hasText(author) && <Typography color="primary.main">By {author}</Typography>}
            </Stack>

            {hasItems(chips) && (
              <Stack component={motion.div} variants={reveal} direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {chips.map((chip) => (
                  <Chip key={chip} label={chip} />
                ))}
              </Stack>
            )}
          </Stack>

          {hasText(introduction) && (
            <Box component={motion.div} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} sx={{ mt: 4 }}>
              <Typography variant="h5" color="primary.main" sx={{ mb: 1 }}>
                Introduction
              </Typography>
              <Typography color="text.secondary">{introduction}</Typography>
            </Box>
          )}

          {hasItems(sections) && (
            <Stack spacing={3} sx={{ mt: 4 }}>
              {sections.map((section, sectionIndex) => {
                const { heading, description, applications, keyPoints, benefits, futureTrends } = section || {};
                const points = [
                  ...toListItems(keyPoints),
                  ...toListItems(benefits),
                  ...toListItems(futureTrends)
                ];

                return (
                  <Card
                    key={`${heading || 'section'}-${sectionIndex}`}
                    variant="outlined"
                    sx={{ p: 3 }}
                    component={motion.section}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                  >
                    <Stack spacing={2} component={motion.div} variants={stagger}>
                      {hasText(heading) && (
                        <Typography component={motion.h2} variants={reveal} variant="h5" color="primary.main">
                          {heading}
                        </Typography>
                      )}
                      {hasText(description) && (
                        <Typography component={motion.p} variants={reveal} color="text.secondary">
                          {description}
                        </Typography>
                      )}

                      {hasItems(applications) && (
                        <Stack component={motion.div} variants={reveal} spacing={1.5}>
                          {applications.map((app, appIndex) => (
                            <Box key={`${app.title || 'application'}-${appIndex}`}>
                              {hasText(app.title) && (
                                <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600 }}>
                                  {app.title}
                                </Typography>
                              )}
                              {hasText(app.description) && <Typography color="text.secondary">{app.description}</Typography>}
                            </Box>
                          ))}
                        </Stack>
                      )}

                      {hasItems(points) && (
                        <List component={motion.ul} variants={stagger} sx={{ py: 0 }}>
                          {points.map((point, pointIndex) => (
                            <ListItem key={`${pointIndex}-${point}`} component={motion.li} variants={reveal} disableGutters sx={{ display: 'list-item', ml: 2, py: 0.25 }}>
                              {point}
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </Stack>
                  </Card>
                );
              })}
            </Stack>
          )}

          {hasText(conclusion) && (
            <Box component={motion.div} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} sx={{ mt: 4 }}>
              <Typography variant="h5" color="primary.main" sx={{ mb: 1 }}>
                Conclusion
              </Typography>
              <Typography color="text.secondary">{conclusion}</Typography>
            </Box>
          )}

          <Box sx={{ mt: 6 }}>
            <Divider />
          </Box>
        </article>
      </Container>
    </section>
  );
}

BlogDetails.propTypes = {
  blog: PropTypes.object,
};
