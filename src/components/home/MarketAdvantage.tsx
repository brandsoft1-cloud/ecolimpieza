"use client";

import { motion } from "framer-motion";
import { Users, Ruler, Scale, Calendar, Globe, Clock, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import styles from "./MarketAdvantage.module.css";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573183084334";

const metrics = [
  { value: 10, suffix: " años", label: "Experiencia", icon: Calendar, max: 15 },
  { value: 500, suffix: "+", label: "Clientes", icon: Users, max: 600 },
  { value: 150, suffix: " km", label: "Tuberías limpias", icon: Ruler, max: 200 },
  { value: 25, suffix: "k ton", label: "A planta tratamiento", icon: Scale, max: 30 },
];

const comparisons = [
  { label: "Cobertura nacional", us: 100, market: 35 },
  { label: "Disponibilidad 24/7", us: 100, market: 20 },
  { label: "Flota propia", us: 100, market: 45 },
  { label: "Asesoría técnica sin costo", us: 100, market: 15 },
  { label: "Cumplimiento ambiental certificado", us: 100, market: 55 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function MarketAdvantage() {
  return (
    <section className={styles.section} aria-label="Por qué somos líderes del mercado">
      <div className="container">
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Ventaja competitiva</span>
          <h2 className={styles.title}>Por qué somos líderes del mercado</h2>
          <p className={styles.subtitle}>
            Datos y métricas que respaldan nuestro liderazgo en servicios de limpieza hidrosanitaria,
            vactor, hidrojet y CCTV a nivel nacional.
          </p>
        </motion.header>

        {/* Métricas con gráficos circulares */}
        <div className={styles.metricsGrid}>
          {metrics.map((m, i) => {
            const Icon = m.icon;
            const pct = Math.min(100, (m.value / m.max) * 100);
            return (
              <motion.div
                key={m.label}
                className={styles.metricCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={i}
              >
                <div className={styles.ringWrap}>
                  <svg viewBox="0 0 100 100" className={styles.ringSvg} aria-hidden>
                    <circle cx="50" cy="50" r="44" className={styles.ringBg} />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="44"
                      className={styles.ringFill}
                      strokeDasharray={`${(pct / 100) * 276.46} 276.46`}
                      initial={{ strokeDasharray: "0 276.46" }}
                      whileInView={{ strokeDasharray: `${(pct / 100) * 276.46} 276.46` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </svg>
                  <div className={styles.ringInner}>
                    <Icon size={24} className={styles.ringIcon} aria-hidden />
                  </div>
                </div>
                <span className={styles.metricValue}>{m.value}{m.suffix}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Comparativa: Nosotros vs mercado */}
        <motion.div
          className={styles.comparisonBlock}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.comparisonTitle}>
            Ecolimpieza vs mercado típico
          </h3>
          <p className={styles.comparisonDesc}>
            Comparativa estimada con proveedores convencionales del sector.
          </p>
          <div className={styles.barLegend}>
            <span className={styles.legendUs}>Nosotros</span>
            <span className={styles.legendMarket}>Mercado típico</span>
          </div>
          <div className={styles.barsWrap}>
            {comparisons.map((c, i) => (
              <motion.div
                key={c.label}
                className={styles.barRow}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <span className={styles.barLabel}>{c.label}</span>
                <div className={styles.barsGroup}>
                  <div className={styles.barUs}>
                    <motion.div
                      className={styles.barUsFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.us}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                    />
                  </div>
                  <div className={styles.barMarket}>
                    <motion.div
                      className={styles.barMarketFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.market}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.06 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Indicadores contextuales */}
        <motion.div
          className={styles.contextStrip}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.contextItem}>
            <Globe size={22} aria-hidden />
            <span>Cobertura nacional</span>
          </div>
          <div className={styles.contextItem}>
            <Clock size={22} aria-hidden />
            <span>Atención 24/7</span>
          </div>
          <div className={styles.contextItem}>
            <Truck size={22} aria-hidden />
            <span>Flota propia</span>
          </div>
          <div className={styles.contextItem}>
            <ShieldCheck size={22} aria-hidden />
            <span>Cumplimiento ambiental</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.ctaWrap}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="#contacto" className={styles.ctaPrimary}>
            Solicitar cotización — Sin compromiso
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
            WhatsApp — Respuesta inmediata
          </a>
        </motion.div>
      </div>
    </section>
  );
}
