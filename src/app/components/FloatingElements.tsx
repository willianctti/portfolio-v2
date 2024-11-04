import { motion } from "framer-motion";
import styles from './FloatingElements.module.css';

interface FloatingElementsProps {
  count?: number;
  areaHeight?: string;
  zIndex?: number;
}

interface FloatingElementProps {
  size: number;
  color: string;
  delay: number;
  duration: number;
  x: number;
  y: number;
}

const FloatingElement = ({ size, color, delay, duration, x, y }: FloatingElementProps) => {
  return (
    <motion.div
      className={styles.element}
      style={{
        width: size,
        height: size,
        background: color,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default function FloatingElements({ count = 3, areaHeight = "100%", zIndex = -1 }: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => ({
    size: Math.random() * 30 + 20,
    color: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '236, 72, 153'}, ${Math.random() * 0.15 + 0.05})`,
    delay: i * 2,
    duration: Math.random() * 4 + 6,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5
  }));

  return (
    <div className={styles.container} style={{ height: areaHeight, zIndex }}>
      {elements.map((props, index) => (
        <FloatingElement key={index} {...props} />
      ))}
    </div>
  );
}