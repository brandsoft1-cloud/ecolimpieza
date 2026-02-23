"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Globe, MessageSquare, Tag, Truck } from "lucide-react";
import Link from "next/link";
import styles from "./WhyUs.module.css";

const reasons = [
    {
        icon: <Zap size={24} />,
        title: "Servicios rápidos, equipos de alta calidad succión - presión."
    },
    {
        icon: <CheckCircle2 size={24} />,
        title: "Operadores altamente calificados."
    },
    {
        icon: <Globe size={24} />,
        title: "Operación a nivel nacional."
    },
    {
        icon: <MessageSquare size={24} />,
        title: "Visita y asesoría técnica sin ningún costo."
    },
    {
        icon: <Tag size={24} />,
        title: "Descuentos por programación, volumen y frecuencia en la recolección."
    },
    {
        icon: <Truck size={24} />,
        title: "Equipos propios para mayor confiabilidad y seriedad en la operación."
    }
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function WhyUs() {
    return (
        <section className={styles.whyUs}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.title}>¿Por qué Ecolimpieza Bogotá?</h2>
                        <p className={styles.subtitle}>
                            Asistencia inmediata las 24 Horas del día por los diferentes canales de comunicación.
                        </p>
                        <div className={styles.actions}>
                            <Link href="/contactenos" className="btn btn-primary">
                                Contáctanos
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=573183084334" className="btn btn-secondary">
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
