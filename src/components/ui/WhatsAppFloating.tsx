"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhatsAppFloating.module.css";

const WHATSAPP_URL =
  "https://wa.me/573183084334?text=Hola,%20quisiera%20cotizar%20un%20servicio%20de%20limpieza%20con%20Ecolimpieza%20Bogotá.";

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const showCard = isOpen || isMobile;

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {showCard && (
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className={styles.cardInner}>
              <div className={styles.avatarWrap}>
                <Image
                  src="/logo-icon-ecolimpieza.png"
                  alt=""
                  width={48}
                  height={48}
                  className={styles.avatar}
                  aria-hidden
                />
                <span className={styles.liveDot} />
              </div>
              <div className={styles.cardText}>
                <span className={styles.brand}>Ecolimpieza Bogotá</span>
                <span className={styles.cta}>¡Escríbenos por WhatsApp!</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        className={styles.float}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp - Ecolimpieza Bogotá"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className={styles.iconWrap}
          animate={{
            rotate: [0, -10, 10, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 3,
            duration: 0.6,
          }}
        >
          <MessageCircle size={28} strokeWidth={2} fill="currentColor" />
        </motion.span>
        <span className={styles.label}>WhatsApp</span>
      </motion.a>
    </div>
  );
}
