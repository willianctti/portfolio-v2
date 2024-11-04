'use client'

import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.themeToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <FaSun className={styles.icon} /> : <FaMoon className={styles.icon} />}
    </motion.button>
  );
}