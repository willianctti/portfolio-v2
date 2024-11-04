'use client'

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useWindowSize } from '../useWindowSize';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { isMobile } = useWindowSize();
  
  const menuItems = [
    { title: "Início", href: "/" },
    { title: "Projetos", href: "#projetos" },
    { title: "Skills", href: "#skills" },
    { title: "Contato", href: "#contato" },
  ];

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(var(--header-bg-rgb), 0)",
      "rgba(var(--header-bg-rgb), 0.8)"
    ]
  );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleScroll = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  
    // Remove o # do início do href para usar como seletor
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 80; // Altura do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBackground }}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.nav}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={styles.logo}
        >
          <Link 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              handleScroll('/');
            }}
          >
            WN
          </Link>
        </motion.div>
        
        {isMobile ? (
          <div className={styles.mobileNav}>
            <button 
              className={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <span className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ''}`} />
            </button>
            
            {isMobileMenuOpen && (
              <motion.div 
                className={styles.mobileMenu}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.mobileMenuContent}>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={styles.mobileMenuItemWrapper}
                    >
                      <Link
                        href={item.href}
                        className={styles.mobileMenuItem}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll(item.href);
                        }}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className={styles.mobileThemeToggleWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: menuItems.length * 0.1 }}
                  >
                    <ThemeToggle />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <div className={styles.menuItems}>
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#8B5CF6",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={styles.menuItem}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.href);
                  }}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>
        )}
      </nav>
    </motion.header>
  );
}