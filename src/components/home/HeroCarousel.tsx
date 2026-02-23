"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import styles from "./HeroCarousel.module.css";

const slides = [
  {
    id: 1,
    src: "/carousel/slide1.png",
    title: "INGENIERÍA ELITE DE \n EQUIPOS VACTOR",
    subtitle: "Líderes en gestión hidrosanitaria industrial. Tecnología alemana y certificación ambiental para operaciones críticas."
  },
  {
    id: 2,
    src: "/carousel/slide2.png",
    title: "TECNOLOGÍA DE PUNTA \n PARA LA INDUSTRIA",
    subtitle: "Equipos de succión y presión con máxima capacidad para resolver las necesidades más exigentes."
  },
  {
    id: 3,
    src: "/carousel/slide3.png",
    title: "COBERTURA TOTAL \n Y EFICIENCIA",
    subtitle: "Flota propia especializada para brindar soluciones rápidas, seguras y confiables a nivel nacional."
  }
];

const stagger: any = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeInUp: any = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className={styles.carouselContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={styles.slideBackground}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].title}
            fill
            priority
            sizes="100vw"
            quality={90}
            className={styles.bgImage}
          />
          <div className={styles.overlay} />
        </motion.div>
      </AnimatePresence>

      <div className={`container ${styles.slideContent}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={stagger}
            className={styles.heroText}
          >
            <motion.div variants={fadeInUp} className={styles.alertBadge}>
              ASISTENCIA TÉCNICA INMEDIATA 24/7
            </motion.div>

            <motion.h1 variants={fadeInUp} className={styles.mainTitle}>
              {slides[current].title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p variants={fadeInUp} className={styles.subtitle}>
              {slides[current].subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.heroBtns}>
              <Link href="#contacto" className="btn btn-primary">
                SOLICITAR COTIZACIÓN <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel controls */}
        <div className={styles.controls}>
          <button onClick={prevSlide} className={styles.iconBtn}>
            <ChevronLeft size={24} />
          </button>
          <div className={styles.dots}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`${styles.dot} ${idx === current ? styles.activeDot : ''}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className={styles.iconBtn}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
