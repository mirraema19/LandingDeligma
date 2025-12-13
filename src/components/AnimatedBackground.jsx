import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Variantes de animación para diferentes formas
  const floatingVariants = {
    float1: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float2: {
      y: [0, 40, 0],
      x: [0, -25, 0],
      rotate: [0, -8, 0],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float3: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      rotate: [0, 10, 0],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float4: {
      y: [0, 35, 0],
      x: [0, -20, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Líneas onduladas decorativas */}
      <svg className="absolute inset-0 w-full h-full opacity-3">
        <motion.path
          d="M 0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100"
          stroke="#263A99"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100",
              "M 0 100 Q 250 150 500 100 T 1000 100 T 1500 100 T 2000 100",
              "M 0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 0 300 Q 250 250 500 300 T 1000 300 T 1500 300 T 2000 300"
          stroke="#97B4DE"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 0 300 Q 250 250 500 300 T 1000 300 T 1500 300 T 2000 300",
              "M 0 300 Q 250 350 500 300 T 1000 300 T 1500 300 T 2000 300",
              "M 0 300 Q 250 250 500 300 T 1000 300 T 1500 300 T 2000 300"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

    </div>
  );
};

export default AnimatedBackground;
