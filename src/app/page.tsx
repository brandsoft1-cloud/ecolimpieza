"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Drill, Waves, ScanLine, Clock, ShieldCheck,
  Award, Phone, Truck, Droplet, Trash2, Zap, AlertTriangle,
  ChevronRight, Play, CheckCircle, Star
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import HeroCarousel from "@/components/home/HeroCarousel";
import CoreServices from "@/components/home/CoreServices";
import WhyUs from "@/components/home/WhyUs";
import MarketAdvantage from "@/components/home/MarketAdvantage";
import styles from "./Home.module.css";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger: any = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn: any = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Equipment images (usado en futuras secciones; todas locales con nombres SEO)
  const equipmentImages = [
    { src: "/images/camion-vaccon-eco-limpieza-bogota.png", title: "Vactor Principal", desc: "Equipo de succión Vac-Con" },
    { src: "/images/camion-vaccon-hidrojet-urbano.png", title: "Hidrojet", desc: "Alta presión" },
    { src: "/images/operacion-limpieza-alcantarillado-calle.png", title: "Operación Urbana", desc: "Servicio en calle" },
    { src: "/images/camion-vactor-nocturno-iluminado.png", title: "En Operación", desc: "Servicio 24/7" },
    { src: "/images/equipo-limpieza-vaccon-operacion.png", title: "Equipo en Campo", desc: "Personal certificado" },
    { src: "/images/camion-vactor-zona-urbana-bogota.png", title: "Cobertura Bogotá", desc: "Zona urbana" }
  ];

  return (
    <main className={styles.main} ref={containerRef}>
      {/* SECTION 1: ENHANCED HERO CAROUSEL */}
      <HeroCarousel />

      {/* SECTION 2: CORE SERVICES (Replaces Flota & Services Grid) */}
      <CoreServices />

      {/* SECTION 3: Por qué somos líderes — Gráficas y métricas */}
      <MarketAdvantage />

      {/* SECTION 4: WHY US */}
      <WhyUs />

      {/* SECTION 5: LATEST PROJECTS was removed */}

      {/* SECTION 7: CTA SECTION */}
      <section id="contacto" className={styles.impactCta}>
        <div className="container">
          <div className={styles.ctaWrapper}>
            <motion.div
              className={styles.ctaInfo}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2>¿SU OPERACIÓN <br />ESTÁ EN RIESGO?</h2>
              <p>Un colapso en sus redes puede costar millones. Evite paros de planta con nuestra auditoría preventiva.</p>
              <div className={styles.actionGroup}>
                <a href="tel:+573000000000" className="btn btn-secondary">
                  <Phone size={20} /> (+57) 300 000 0000
                </a>
              </div>
            </motion.div>

            <motion.div
              className={styles.ctaVisual}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
