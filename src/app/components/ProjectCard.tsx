import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export default function ProjectCard({ title, description, technologies, github }: ProjectCardProps) {
  const handleClick = () => {
    window.location.href = github;
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.iconContainer}>
        <FaCode className={styles.projectIcon} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <motion.div className={styles.tags}>
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className={styles.tag}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className={styles.githubLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          <span>Ver no GitHub</span>
        </motion.div>
      </div>
    </motion.div>
  );
}