import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, 
  SiAngular, SiPhp,
  SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiSpring,
  SiPostgresql, SiMysql, SiReactquery,
  SiSass
} from "react-icons/si";
import styles from './SkillsSection.module.css';
import FloatingElements from "./FloatingElements";

interface SkillsSectionProps {
    id: string;
  }

export default function SkillsSection({ id }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: SiHtml5, name: "HTML" },
        { icon: SiCss3, name: "CSS" },
        { icon: SiSass, name: "SCSS" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiAngular, name: "Angular" },
      ]
    },
    {
      title: "Mobile",
      skills: [
        { icon: SiReactquery, name: "React Native" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiPhp, name: "PHP" },
        { icon: SiSpring, name: "Spring" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiMysql, name: "MySQL" },
      ]
    }
  ];

  return (
    <section id={id} className={styles.section}>
      <FloatingElements count={4} zIndex={0} />
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.title}
      >
        Minhas Skills
      </motion.h2>
      
      <div className={styles.categoriesContainer}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <motion.h3 
              className={styles.categoryTitle}
              whileHover={{ scale: 1.05 }}
            >
              {category.title}
            </motion.h3>
            
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={styles.skillItem}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    ...(skill.name !== "React Native" && { rotate: 360 }),
                    transition: { duration: 0.3 }
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <skill.icon className={styles.icon} />
                  <span className={styles.name}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}