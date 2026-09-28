'use client'
import { MotionConfig } from 'framer-motion'

// Respect the visitor's "reduce motion" system setting for every animation.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
