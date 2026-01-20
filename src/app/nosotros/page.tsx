"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Target, Eye, Recycle, Clock, Users } from "lucide-react";
import styles from "./Nosotros.module.css";

const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer: any = {
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function NosotrosPage() {
    return (
        <div className={styles.page}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                    alt="Ecolimpieza Bogota fleet"
                    fill
                    priority
                    className={styles.heroImg}
                />
                <div className={`container ${styles.heroContent}`}>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        NOSOTROS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Líderes en ingeniería y mantenimiento de redes en Colombia.
                    </motion.p>
                </div>
            </section>

            {/* QUIENES SOMOS */}
            <section className={styles.aboutSection}>
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <motion.div
                            className={styles.aboutText}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <span className={styles.badge}>Nuestra Trayectoria</span>
                            <h2>¿QUIÉNES SOMOS?</h2>
                            <p>
                                <strong>ECOLIMPIEZA BOGOTÁ S.A.S</strong> es una empresa de carácter privado que busca proporcionar
                                a organizaciones públicas y privadas a nivel nacional, servicios de limpieza acordes a la
                                normatividad ambiental vigente.
                            </p>
                            <p>
                                Contamos con un equipo humano altamente calificado para ofrecer un excelente servicio técnico
                                de acuerdo a cada necesidad, brindando soluciones efectivas. Trabajamos permanentemente en el
                                mejoramiento de nuestros procesos enfocados prioritariamente en la calidad operacional y el
                                servicio al cliente, quienes de manera constante nos motivan a encontrar alternativas amigables
                                para el medio ambiente como respuesta a una practica empresarial socialmente responsable.
                            </p>
                        </motion.div>
                        <motion.div
                            className={styles.aboutImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
                                alt="Working in Bogotá"
                                width={600}
                                height={400}
                                className={styles.imgRounded}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className={styles.missionVision}>
                <div className="container">
                    <motion.div
                        className={styles.cardGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* MISIÓN */}
                        <motion.div className={styles.card} variants={fadeInUp}>
                            <div className={styles.cardIcon}><Target size={40} /></div>
                            <h3>MISIÓN</h3>
                            <p>
                                Contribuimos al funcionamiento óptimo de las empresas, mediante el mantenimiento
                                de redes hidrosanitarias, dando un manejo adecuado a los residuos.
                            </p>
                        </motion.div>

                        {/* VISIÓN */}
                        <motion.div className={styles.card} variants={fadeInUp}>
                            <div className={styles.cardIcon}><Eye size={40} /></div>
                            <h3>VISIÓN</h3>
                            <p>
                                ECOLIMPIEZA BOGOTÁ será la empresa líder en la prestación de servicios de limpieza
                                y mantenimiento de Redes de alcantarillado, distinguida por la eficiencia de su
                                servicio y cumplimiento.
                            </p>
                        </motion.div>

                        {/* VALORES */}
                        <motion.div className={styles.card} variants={fadeInUp}>
                            <div className={styles.cardIcon}><ShieldCheck size={40} /></div>
                            <h3>VALORES</h3>
                            <p>
                                Calidad operacional, responsabilidad ambiental y transparencia técnica en cada
                                uno de nuestros proyectos de limpieza industrial.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHY US / ATTRIBUTES */}
            <section className={styles.attributes}>
                <div className="container">
                    <div className={styles.attrGrid}>
                        {[
                            { icon: <Clock />, title: "24 Horas", text: "Asistencia inmediata para emergencias en redes." },
                            { icon: <Recycle />, title: "Eco-Responsable", text: "Procesos ajustados a normativas ambientales." },
                            { icon: <Users />, title: "Expertos", text: "Personal técnico altamente especializado." }
                        ].map((attr, i) => (
                            <motion.div key={i} className={styles.attrItem} variants={fadeInUp}>
                                <div className={styles.attrIcon}>{attr.icon}</div>
                                <h4>{attr.title}</h4>
                                <p>{attr.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
