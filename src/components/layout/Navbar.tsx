"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Droplets, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import BookingModal from "../ui/BookingModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Galería", href: "/galeria" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.container}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles.iconBox}>
              <Droplets className={styles.drop} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.mainLogo}>ECOLIMPIEZA</span>
              <span className={styles.subLogo}>BOGOTÁ S.A.S</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn btn-primary"
                style={{ padding: '0.7rem 1.5rem', borderRadius: '4px', cursor: 'pointer', border: 'none' }}
              >
                COTIZAR YA
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button className={styles.mobileBtn} onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className={styles.mobileMenu}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30 }}
              >
                <div className={styles.mobileHeader}>
                  <span className={styles.mobileBrand}>ECOLIMPIEZA</span>
                  <button onClick={() => setIsOpen(false)}><X size={32} /></button>
                </div>
                <div className={styles.mobileLinks}>
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                  <button
                    className="btn btn-primary"
                    onClick={() => { setIsOpen(false); setIsBookingOpen(true); }}
                    style={{ border: 'none', width: '100%', marginTop: '1rem' }}
                  >
                    COTIZAR YA
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
