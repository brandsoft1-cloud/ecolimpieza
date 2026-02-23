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

  // Equipment images for gallery
  const equipmentImages = [
    { src: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop", title: "Vactor Principal", desc: "Equipo de succión 11m³" },
    { src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop", title: "Hidrojet Azul", desc: "Alta presión 3,600 PSI" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", title: "Operación Urbana", desc: "Servicio en calle" },
    { src: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070&auto=format&fit=crop", title: "Limpieza Industrial", desc: "Redes maestras" },
    { src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop", title: "En Operación", desc: "Brazo extendido" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", title: "Equipo Técnico", desc: "Personal certificado" }
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
