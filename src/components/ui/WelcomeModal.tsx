"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Truck, UserCircle } from "lucide-react";
import Link from "next/link";
import LogoEcolimpieza from "./LogoEcolimpieza";
import styles from "./WelcomeModal.module.css";

const STORAGE_KEY = "ecolimpieza-bogota-welcome-v5";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {}
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          aria-modal="true"
          aria-labelledby="welcome-modal-title"
          role="dialog"
        >
          <motion.div
            className={styles.modal}
            data-welcome-version="v4-siyno"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Cerrar"
            >
              <X size={22} />
            </button>

            <div className={styles.brandBlock}>
              <h1 id="welcome-modal-title" className={styles.srOnly}>Ecolimpieza Bogotá S.A.S.</h1>
              <LogoEcolimpieza variant="modal" className={styles.brandLogo} />
              <p className={styles.brandLegal}>Ecolimpieza Bogotá S.A.S.</p>
              <p className={styles.brandIntro}>
                Empresa de limpieza hidrosanitaria e industrial. Equipos de succión (vactor), hidrojet de alta presión, inspección CCTV de tuberías, mantenimiento de redes y alcantarillado. Cobertura nacional.
              </p>
            </div>

            <p className={styles.sectors}>
              Sectores: industrial, empresarial, institucional y sector público. Gestión de residuos con disposición a planta de tratamiento.
            </p>

            <div className={styles.splitRow}>
              <div className={styles.panelYes}>
                <div className={styles.iconCircleYes}>
                  <Truck size={32} strokeWidth={2} aria-hidden />
                </div>
                <span className={styles.panelBadgeYes}>Nuestros servicios</span>
                <span className={styles.panelTextYes}>Vactor · Hidrojet · Redes · CCTV</span>
              </div>
              <div className={styles.panelNo}>
                <div className={styles.iconCircleNo}>
                  <UserCircle size={32} strokeWidth={2} aria-hidden />
                  <span className={styles.iconCross} aria-hidden>✕</span>
                </div>
                <span className={styles.panelBadgeNo}>No ofrecemos</span>
                <span className={styles.panelTextNo}>Contratación de personal doméstico</span>
              </div>
            </div>

            <p className={styles.oneLine}>
              Ecolimpieza Bogotá S.A.S. se dedica exclusivamente a servicios industriales e hidrosanitarios. <strong>No realizamos contratación de empleadas del hogar ni servicios domésticos.</strong>
            </p>

            <div className={styles.footer}>
              <button type="button" className={styles.ctaBig} onClick={handleClose}>
                Entendido
              </button>
              <Link href="/#contacto" className={styles.ctaLink} onClick={handleClose}>
                Ver servicios →
              </Link>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                />
                <span>No volver a mostrar</span>
              </label>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
