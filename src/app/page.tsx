"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import styles from './page.module.css';
import JourneyMap from "./components/JourneyMap";
import FloatingElements from "./components/FloatingElements";

export default function Home() {
  const projects = [
    {
      title: "SiteGen",
      description: "Um gerador de sites moderno construído com Next.js e TypeScript, focado em criar sites estáticos de forma eficiente.",
      image: "/sitegen.jpg",
      technologies: ["Next.js", "TypeScript", "React"],
      github: "https://github.com/willianctti/siteGen",
    },
    {
      title: "Svelte Toast Messages",
      description: "Uma biblioteca de notificações toast para Svelte, oferecendo uma maneira elegante de exibir mensagens.",
      image: "/svelte-toast.jpg",
      technologies: ["Svelte", "TypeScript", "CSS"],
      github: "https://github.com/willianctti/svelte-toast-messages",
    },
    {
      title: "Restaurant Menu API",
      description: "API RESTful para gerenciamento de cardápios de restaurantes usando Spring Web e JPA.",
      image: "/restaurant-api.jpg",
      technologies: ["Java", "Spring Web", "JPA", "Lombok"],
      github: "https://github.com/willianctti/RestaurantMenuAPI",
    },
    {
      title: "EmoTrack Fullstack",
      description: "Aplicação fullstack com integração de IA para rastreamento de emoções usando Next.js e SQLite.",
      image: "/emotrack.jpg",
      technologies: ["Next.js", "SQLite", "AI", "TypeScript"],
      github: "https://github.com/willianctti/emotrack-fullstack",
    },
    {
      title: "Jokes Discord Bot",
      description: "Bot para Discord que conta piadas através do comando /piada, trazendo diversão aos servidores.",
      image: "/discord-bot.jpg",
      technologies: ["JavaScript", "Discord.js", "Node.js"],
      github: "https://github.com/willianctti/jokes-discord-bot",
    },
    {
      title: "Books Do Will",
      description: "Backend robusto para um projeto fullstack de gerenciamento de livros.",
      image: "/books.jpg",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/willianctti/BooksDoWill",
    }
  ];

  return (
    <main className={styles.main}>
       <FloatingElements />
       <Header />
      
      <section className={styles.heroSection}>
      <FloatingElements count={4} zIndex={0} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <motion.h1
            className={styles.title}
            whileHover={{ scale: 1.05 }}
          >
            Olá, eu sou <span className={styles.titleHighlight}>Willian Nicoletti</span>
          </motion.h1>
          
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Desenvolvedor Front-end e Mobile <br />
            Estudante de back-end
          </motion.p>
          
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={styles.button}
  onClick={() => {
    const element = document.getElementById('projetos');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }}
>
  <span>Ver Projetos</span>
</motion.button>
        </motion.div>
      </section>

      <section id="projetos" className={styles.projectsSection}>
  <motion.h2 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className={styles.sectionTitle}
  >
    Projetos
  </motion.h2>
  <div className={styles.projectsGrid}>
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        github={project.github}
      />
    ))}
  </div>
</section>

      <JourneyMap  />
      <SkillsSection id="skills" />
      <Footer id="contato" />
    </main>
  );
}