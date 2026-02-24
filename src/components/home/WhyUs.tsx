"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Globe, MessageSquare, Tag, Truck } from "lucide-react";
import Link from "next/link";
import styles from "./WhyUs.module.css";

const reasons = [
    {
        icon: <Zap size={22} strokeWidth={1.5} />,
        title: "Servicios rápidos, equipos de alta calidad succión-presión."
    },
    {
        icon: <CheckCircle2 size={22} strokeWidth={1.5} />,
        title: "Operadores altamente calificados y certificados."
    },
    {
        icon: <Globe size={22} strokeWidth={1.5} />,
        title: "Operación logística a nivel nacional."
    },
    {
        icon: <MessageSquare size={22} strokeWidth={1.5} />,
        title: "Visita y asesoría técnica sin ningún costo."
    },
    {
        icon: <Tag size={22} strokeWidth={1.5} />,
        title: "Descuentos por programación, volumen y frecuencia."
    },
    {
        icon: <Truck size={22} strokeWidth={1.5} />,
        title: "Equipos propios para mayor confiabilidad en la operación."
    }
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
};

export default function WhyUs() {
    return (
        <section className={styles.whyUs}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className={styles.badge}>Nuestra Diferencia</span>
                        <h2 className={styles.title}>¿Por qué elegir Ecolimpieza Bogotá?</h2>
                        <p className={styles.subtitle}>
                            Más de 15 años de trayectoria y más de 5000 servicios realizados. Empresa grande con asistencia inmediata 24 horas, respaldo tecnológico y humano para los requerimientos más exigentes de la industria, con eficiencia y responsabilidad ambiental.
                        </p>
                        <div className={styles.actions}>
                            <Link href="/contactenos" className={`btn btn-primary ${styles.primaryBtn}`}>
                                Contáctanos
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=573183084334" className={`btn btn-secondary ${styles.secondaryBtn}`}>
                                WhatsApp
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.list}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {reasons.map((item, i) => (
                        <motion.div key={i} className={styles.item} variants={fadeUp}>
                            <div className={styles.icon}>{item.icon}</div>
                            <p>{item.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
