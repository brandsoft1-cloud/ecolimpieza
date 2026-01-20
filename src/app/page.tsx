"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, Drill, Waves, ScanLine, Clock, ShieldCheck,
  Award, Phone, Truck, Droplet, Trash2, Zap, AlertTriangle, ChevronRight
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./Home.module.css";
import Image from "next/image";

const HERO_IMG = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop";
const TRUCK_IMG = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop";

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

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScrollProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0]);

  return (
    <main className={styles.main} ref={containerRef}>
      {/* SECTION 1: LUXURY HERO */}
      <section className={styles.hero}>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className={styles.heroBg}>
          <div className={styles.overlay} />
          <Image
            src={HERO_IMG}
            alt="Vactor Ecolimpieza"
            fill
            priority
            className={styles.bgImage}
          />
        </motion.div>

        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className={styles.heroText}
          >
            <motion.div variants={fadeInUp} className={styles.alertBadge}>
              <span className={styles.pulse} /> ASISTENCIA TÉCNICA INMEDIATA 24/7
            </motion.div>

            <motion.h1 variants={fadeInUp} className={styles.mainTitle}>
              INGENIERÍA ELITE DE <br />
              <span>EQUIPOS VACTOR</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className={styles.subtitle}>
              Líderes en gestión hidrosanitaria industrial. Tecnología alemana y certificación ambiental para operaciones críticas.
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.heroBtns}>
              <Link href="/contacto" className="btn btn-primary">
                SOLICITAR COTIZACIÓN <ArrowRight size={18} />
              </Link>
              <Link href="/nosotros" className={styles.textLink}>
                Explorar nuestra trayectoria <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FLOATING METRICS */}
      <section className={styles.metrics}>
        <div className="container">
          <div className={styles.metricsGrid}>
            {[
              { label: "Años de Experiencia", val: "10+" },
              { label: "Proyectos Exitosos", val: "+2,000" },
              { label: "Metros Limpiados", val: "150k" },
              { label: "Residuos Tratados", val: "25k t" }
            ].map((m, i) => (
              <motion.div
                key={i}
                className={styles.metricItem}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              >
                <span className={styles.metricVal}>{m.val}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: 3D SERVICES GRID */}
      <section id="servicios" className={styles.services}>
        <div className="container">
          <motion.div
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Capacidades Técnicas</span>
            <h2>Servicios de Ingeniería</h2>
          </motion.div>

          <div className={styles.serviceGrid}>
            {[
              {
                title: "LIMPIEZA VACTOR",
                desc: "Equipos de gran volumen (11m³) para succión pesada y limpieza de redes maestras.",
                icon: <Waves size={40} />,
                color: "var(--primary)"
              },
              {
                title: "CAMIÓN VACÍO",
                desc: "Transporte certificado de residuos REPEL, aceites y grasas industriales.",
                icon: <Truck size={40} />,
                color: "var(--secondary)"
              },
              {
                title: "SISTEMAS HIDROJET",
                desc: "Alta presión extrema (3,600 PSI) para remoción de incrustaciones severas.",
                icon: <Drill size={40} />,
                color: "var(--primary)"
              },
              {
                title: "INSPECCIÓN CCTV",
                desc: "Visión robótica 4K para análisis estructural sin métodos invasivos.",
                icon: <ScanLine size={40} />,
                color: "var(--secondary)"
              },
              {
                title: "GESTIÓN REPEL",
                desc: "Manejo integral de lodos industriales bajo estrictas normas CAR.",
                icon: <Trash2 size={40} />,
                color: "var(--primary)"
              },
              {
                title: "EMERGENCIA 24H",
                desc: "Escuadrón de respuesta rápida para inundaciones y colapsos de red.",
                icon: <Zap size={40} />,
                color: "var(--secondary)"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                className={styles.serviceBox}
                whileHover={{ rotateX: 5, rotateY: 5, z: 50, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.serviceIcon} style={{ color: service.color }}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href="/galeria" className={styles.btnSm}>
                  SABER MÁS <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: IMPACTFUL CTA */}
      <section className={styles.impactCta}>
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
