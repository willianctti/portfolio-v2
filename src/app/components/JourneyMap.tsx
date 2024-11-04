'use client'

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaCode, FaMobile, FaGem } from 'react-icons/fa';
import styles from './JourneyMap.module.css';
import FloatingElements from './FloatingElements';

export default function JourneyMap() {
  const containerRef = useRef(null);

  const journeyPoints = [
    {
      icon: FaMapMarkedAlt,
      title: "Início da Aventura",
      description: "Descobri o mundo mágico da programação e comecei minha jornada com HTML, CSS e JavaScript",
      year: "2021",
      color: "#4F46E5"
    },
    {
      icon: FaCode,
      title: "Primeiras Conquistas",
      description: "Dominei React e TypeScript, criando aplicações cada vez mais robustas",
      year: "2022",
      color: "#7C3AED"
    },
    {
      icon: FaMobile,
      title: "Novos Horizontes",
      description: "Explorei o desenvolvimento mobile com React Native e APIs REST",
      year: "2023",
      color: "#9333EA"
    },
    {
      icon: FaGem,
      title: "Tesouro Encontrado",
      description: "Desenvolvedor Front-end && Mobile na MindTech | Sistema FIEP",
      year: "2024",
      color: "#AB3FED",
      current: true
    }
  ];

  return (
    <section ref={containerRef} className={styles.section}>
      <FloatingElements count={6} zIndex={0} />
      
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.title}
      >
        Mapa da Jornada
      </motion.h2>

      <div className={styles.journeyContainer}>
        <div className={styles.timeline}>
          {journeyPoints.map((point, index) => (
            <motion.div
              key={index}
              className={styles.journeyPoint}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.yearBadge} style={{ background: `linear-gradient(135deg, ${point.color}, ${point.color}88)` }}>
                {point.year}
              </div>
              
              <motion.div 
                className={`${styles.card} ${point.current ? styles.currentCard : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.iconContainer} style={{ background: `linear-gradient(135deg, ${point.color}, ${point.color}88)` }}>
                  <point.icon className={styles.icon} />
                </div>
                
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardDescription}>{point.description}</p>
                
                {point.current && (
                  <span className={styles.currentBadge}>Atual</span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}