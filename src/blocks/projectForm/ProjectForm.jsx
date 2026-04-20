'use client';
import { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Stack,
  LinearProgress,
  Link
} from '@mui/material';

import { motion, AnimatePresence } from 'motion/react';

const steps = [
  { name: 'email', label: 'What’s your email?' },
  { name: 'subject', label: 'What are you building?' },
  { name: 'message', label: 'Tell us more about your project' }
];

export default function ProjectForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const current = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      const { email, subject, message } = values;

      window.location.href = `mailto:sales@becontrol-sy.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    }
  };

  const isValid = () => {
    if (current.name === 'email') return values.email.includes('@');
    return values[current.name].trim().length > 2;
  };

  return (
    <Box sx={{ py: 12, px: 2 }}>

      {/* 🔥 CARD ANIMATION (ENTRANCE) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            borderRadius: 5,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' },
            boxShadow: '0 30px 80px rgba(0,0,0,0.12)'
          }}
        >
          {/* LEFT SIDE — IMAGE + INFO */}
          <Box
            sx={{
              position: 'relative',
              minHeight: 400,
              backgroundImage: `url('/assets/images/hero/contact-us-hero.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.75))'
              }}
            />

            <Stack
              justifyContent="flex-end"
              sx={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                p: { xs: 4, md: 5 },
                color: '#fff'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" fontWeight={700} mb={2} sx={{color : 'primary.main'}}>
                  Have a project in mind?
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Typography sx={{ opacity: 0.85, mb: 3 }}>
                  Let’s build it together. Our team is ready to transform your ideas
                  into real products using modern technologies.
                </Typography>
              </motion.div>

              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                * Clicking "Send Message" will open your email client with a
                pre-filled message.
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                Or contact us directly:
              </Typography>

              <Link
                href="mailto:sales@becontrol-sy.com"
                sx={{
                  color: 'primary.light',
                  fontWeight: 600,
                  mt: 0.5
                }}
              >
                sales@becontrol-sy.com
              </Link>
            </Stack>
          </Box>

          {/* RIGHT SIDE — FORM */}
          <Box sx={{ p: { xs: 4, md: 6 } }}>

            {/* progress animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <LinearProgress
                variant="determinate"
                value={((step + 1) / steps.length) * 100}
                sx={{
                  mb: 5,
                  height: 6,
                  borderRadius: 10
                }}
              />
            </motion.div>

            {/* STEP TRANSITION */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >

                {/* TITLE */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    mb={4}
                    sx={{ letterSpacing: '-0.02em' }}
                  >
                    {current.label}
                  </Typography>
                </motion.div>

                {/* INPUT */}
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <TextField
                    fullWidth
                    multiline={current.name === 'message'}
                    rows={current.name === 'message' ? 4 : 1}
                    value={values[current.name]}
                    onChange={(e) =>
                      setValues({ ...values, [current.name]: e.target.value })
                    }
                    placeholder="Type your answer..."
                    sx={{
                      mb: 4,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        fontSize: 18,
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
                        },
                        '&.Mui-focused': {
                          boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                        }
                      }
                    }}
                  />
                </motion.div>

                {/* BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!isValid()}
                    sx={{
                      px: 5,
                      py: 1.6,
                      fontSize: 16,
                      borderRadius: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 18px 40px rgba(0,0,0,0.18)'
                      }
                    }}
                  >
                    {step === steps.length - 1 ? 'Send Message' : 'Continue'}
                  </Button>
                </motion.div>

              </motion.div>
            </AnimatePresence>

            {/* FOOTNOTE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3 }}
            >
              <Typography variant="caption" sx={{ display: 'block', mt: 4 }}>
                Takes less than 30 seconds
              </Typography>
            </motion.div>

          </Box>
        </Card>
      </motion.div>
    </Box>
  );
}