import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css';

interface FooterProps {
  id: string;
}

export default function Footer({ id }: FooterProps) {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/willianctti",
      label: "GitHub"
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/willian-nicoletti-8b5aa4238/",
      label: "LinkedIn"
    },
    { 
      icon: FaEnvelope, 
      href: "mailto:williannicoletti2004@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div className={styles.topSection}>
            <h3 className={styles.footerTitle}>Vamos Conectar?</h3>
          </motion.div>

          <motion.div className={styles.socialLinks}>
            {socialLinks.map((Social, index) => (
              <motion.a
                key={index}
                href={Social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className={styles.socialLink}
                title={Social.label}
              >
                <Social.icon />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p className={styles.copyright}>
            © 2024 Willian Nicoletti. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}