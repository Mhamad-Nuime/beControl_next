'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';

// @third-party
import { motion } from 'motion/react';

/***************************  GRAPHICS CARD  ***************************/

export default function DivisionCard({ item }) {
  const theme = useTheme();
  const boxPadding = { xs: 3, md: 5 };
  const imagePadding = { xs: 3, sm: 4, md: 5 };

  return (
    <Grid container spacing={1.5}>
      <Grid size={{ xs: 12, sm: 5 }}>
        <GraphicsCard>
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Box
              sx={{
                pl: item.isCoverImage ? 0 : imagePadding,
                pt: item.isCoverImage ? 0 : imagePadding,
                height: { xs: 260, sm: 396, md: 434 }
              }}
            >
              <GraphicsImage
                sx={{
                  height: 1,
                  backgroundPositionX: 'left',
                  backgroundPositionY: 'top',
                  ...(item.isImageBorder && { borderTop: '5px solid', borderLeft: '5px solid', borderColor: 'grey.200' }),
                  ...(item.isCoverImage && { backgroundSize: 'cover', border: 'none' }),
                  borderTopLeftRadius: { xs: 12 },
                  borderBottomRightRadius: { xs: 20, sm: 32, md: 40 }
                }}
                image={item.image}
              />
            </Box>
          </motion.div>
        </GraphicsCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 7 }} sx={{ display: 'flex' }}>
        <GraphicsCard>
          <Stack
            sx={{
              justifyContent: 'space-between',
              gap: 5,
              // height: item.actionBtn || item.actionBtn2 ? { sm: 'calc(100% - 98px)', md: 'calc(100%  - 114px)' } : 1,
              pt: boxPadding,
              px: boxPadding
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2, ease: 'linear' }}
            >
              <Stack direction="row" sx={{ gap: 1 }}>
                {item.icon && (
                  <SvgIcon
                    {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                    size={16}
                    stroke={2}
                    color="text.primary"
                  />
                )}
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  {item.title}
                </Typography>
              </Stack>
            </motion.div>
            <Stack sx={{ gap: { xs: 2, md: 3 }, pb: boxPadding }}>
              <Stack sx={{ gap: 0.5 }}>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  {item.title2}
                </Typography>
                {item.description && <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>}
              </Stack>
              {item.list && (
                <Grid container spacing={{ xs: 0.75, md: 1 }}>
                  {item.list.map((list, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }}>
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.2, ease: 'linear', delay: index * 0.1 }}
                      >
                        <Stack
                          direction="row"
                          sx={{
                            gap: 0.5,
                            alignItems: 'center',
                            '& svg.tabler-rosette-discount-check': { width: { xs: 16, md: 24 }, height: { xs: 16, md: 24 } }
                          }}
                        >
                          <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {list.primary}
                          </Typography>
                        </Stack>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Stack>
          </Stack>
          <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
            <Stack direction="row" sx={{ alignSelf: 'end', alignItems: 'flex-start', gap: 1.5, p: { xs: 2, sm: 3, md: 4 } }}>
              <Typography variant="p">{item.content}</Typography>
            </Stack>
          </GraphicsCard>
          {/* {(item.actionBtn || item.actionBtn2) && (
            <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
              <Stack direction="row" sx={{ alignItems: 'flex-start', gap: 1.5, p: { xs: 2, sm: 3, md: 4 } }}>
                {item.actionBtn2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <ButtonAnimationWrapper>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<SvgIcon name="tabler-help" size={16} stroke={3} />}
                        {...item.actionBtn2}
                      />
                    </ButtonAnimationWrapper>
                  </motion.div>
                )}
                {item.actionBtn && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <ButtonAnimationWrapper>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SvgIcon name="tabler-link" size={16} stroke={3} color="background.default" />}
                        {...item.actionBtn}
                      />
                    </ButtonAnimationWrapper>
                  </motion.div>
                )}
              </Stack>
            </GraphicsCard>
          )} */}
        </GraphicsCard>
      </Grid>
    </Grid>
  );
}

DivisionCard.propTypes = {
  sx: PropTypes.any,
  children: PropTypes.any,
  overLay: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  bgImage: PropTypes.any,
  rest: PropTypes.any
};
