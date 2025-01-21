"use client";

import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react"

const GeometricFlowPattern: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-900 to-blue-900 overflow-hidden">
      {/* Hexagon Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(30deg, #00000080 12%, transparent 12.5%, transparent 87%, #00000080 87.5%, #00000080),
                          linear-gradient(150deg, #00000080 12%, transparent 12.5%, transparent 87%, #00000080 87.5%, #00000080),
                          linear-gradient(30deg, #00000080 12%, transparent 12.5%, transparent 87%, #00000080 87.5%, #00000080),
                          linear-gradient(150deg, #00000080 12%, transparent 12.5%, transparent 87%, #00000080 87.5%, #00000080),
                          linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777),
                          linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777)`,
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
        }}
      />

      {/* Floating Shapes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            backgroundColor: `hsl(${180 + Math.random() * 60}, 70%, 50%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-100 + Math.random() * 200} ${
              -100 + Math.random() * 200
            } Q ${Math.random() * 100} ${Math.random() * 100}, ${
              100 + Math.random() * 200
            } ${100 + Math.random() * 200}`}
            stroke={`hsl(${180 + Math.random() * 60}, 70%, 50%)`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Pulsating Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default GeometricFlowPattern;
