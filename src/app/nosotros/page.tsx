"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Target, Eye, Clock, Users, Truck, CheckCircle2, Award, Phone } from "lucide-react";
import styles from "./Nosotros.module.css";

const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const fadeInLeft: any = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const fadeInRight: any = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer: any = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const imageReveal: any = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
    }
};

const textReveal: any = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: "0%",
        opacity: 1,
        transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }
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
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInLeft}
                        >
                            <span className={styles.badge}>Nuestra Trayectoria</span>
                            <h2>QUIENES SOMOS</h2>
                            <p>
                                <strong>ECOLIMPIEZA BOGOTA S.A.S</strong> Empresa de carácter privado que busca proporcionar
                                a organizaciones públicas y privadas a nivel nacional, servicios de limpieza acordes a la
                                normatividad ambiental vigente.
                            </p>
                            <p>
                                Contamos con un equipo humano altamente calificado para ofrecer un excelente servicio técnico
                                de acuerdo a cada necesidad, brindando soluciones efectivas.
                            </p>
                            <p>
                                Trabajamos permanentemente en el mejoramiento de nuestros procesos enfocados prioritariamente
                                en la calidad operacional y el servicio al cliente, quienes de manera constante nos motivan a
                                encontrar alternativas amigables para el medio ambiente como respuesta a una practica empresarial
                                socialmente responsable.
                            </p>
                            <p>
                                Contribuimos al funcionamiento óptimo de las empresas, mediante el mantenimiento de redes
                                hidrosanitarias, dando un manejo adecuado a los residuos.
                            </p>
                        </motion.div>
                        <motion.div
                            className={styles.aboutImageWrapper}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInRight}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
                                alt="Equipo Vactor Ecolimpieza Bogotá"
                                width={600}
                                height={400}
                                className={styles.imgVactor}
                                priority
                            />
                            <div className={styles.imageCaption}>
                                <Truck size={16} />
                                <span>Equipos 100% Propios</span>
                            </div>
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
                                <strong>ECOLIMPIEZA BOGOTA</strong> será la empresa líder en la prestación de servicios de
                                limpieza y mantenimiento de Redes de alcantarillado, distinguida por la eficiencia de su
                                servicio y cumplimiento.
                            </p>
                        </motion.div>

                        {/* VALOR AGREGADO */}
                        <motion.div
                            className={styles.card}
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className={styles.cardIcon}><ShieldCheck size={40} /></div>
                            <h3>VALOR AGREGADO</h3>
                            <p>
                                Nuestro personal calificado posee los respectivos implementos de seguridad industrial, y están
                                capacitados constantemente en la limpieza de redes sanitarias, así mismo se encuentran afiliados
                                al sistema de seguridad social y parafiscales, además cuentan con un sistema de comunicación
                                permanente entre operarios y oficinas.
                            </p>
                            <p style={{ marginTop: "1rem" }}>
                                Los equipos <strong>SUCCION-PRESION VACTOR E HIDROJET</strong> son 100% propiedad de
                                ECOLIMPIEZA BOGOTA, garantizando seriedad y responsabilidad a nuestros clientes.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ESTADÍSTICAS */}
            <section className={styles.statsSection}>
                <div className="container">
                    <motion.div
                        className={styles.statsGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div className={styles.statCard} variants={fadeInUp}>
                            <div className={styles.statIcon}>
                                <Users size={40} />
                            </div>
                            <div className={styles.statNumber}>+500</div>
                            <div className={styles.statLabel}>Clientes</div>
                        </motion.div>

                        <motion.div className={styles.statCard} variants={fadeInUp}>
                            <div className={styles.statIcon}>
                                <Award size={40} />
                            </div>
                            <div className={styles.statNumber}>+2 Mil</div>
                            <div className={styles.statLabel}>Servicios Prestados a nivel nacional</div>
                        </motion.div>

                        <motion.div className={styles.statCard} variants={fadeInUp}>
                            <div className={styles.statIcon}>
                                <Truck size={40} />
                            </div>
                            <div className={styles.statNumber}>+50 Mil</div>
                            <div className={styles.statLabel}>Metros de limpieza de tuberías</div>
                        </motion.div>

                        <motion.div className={styles.statCard} variants={fadeInUp}>
                            <div className={styles.statIcon}>
                                <ShieldCheck size={40} />
                            </div>
                            <div className={styles.statNumber}>+7 Mil</div>
                            <div className={styles.statLabel}>Toneladas de residuos entregados a planta de tratamiento</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* VALOR AGREGADO DETALLADO */}
            <section className={styles.attributes}>
                <div className="container">
                    <motion.div
                        className={styles.addValueHeader}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className={styles.badge}>Nuestras Fortalezas</span>
                        <h2>VALOR AGREGADO</h2>
                        <p className={styles.lead}>
                            Nuestro compromiso es la excelencia técnica y la tranquilidad de nuestros clientes.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.attrGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            className={styles.attrItem}
                            variants={fadeInUp}
                            whileHover={{ y: -5, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className={styles.attrIcon}>
                                <Users size={32} />
                            </div>
                            <h4>Personal Calificado</h4>
                            <p>
                                Nuestro personal posee implementos de seguridad industrial y capacitación constante.
                                Están afiliados al sistema de seguridad social y cuentan con comunicación permanente.
                            </p>
                        </motion.div>

                        <motion.div className={styles.attrItem} variants={fadeInUp}>
                            <div className={styles.attrIcon}>
                                <Truck size={32} />
                            </div>
                            <h4>Equipos Propios</h4>
                            <p>
                                Equipos SUCCION-PRESION VACTOR E HIDROJET 100% propiedad de ECOLIMPIEZA BOGOTA,
                                garantizando seriedad y responsabilidad sin terceros.
                            </p>
                        </motion.div>

                        <motion.div className={styles.attrItem} variants={fadeInUp}>
                            <div className={styles.attrIcon}>
                                <CheckCircle2 size={32} />
                            </div>
                            <h4>Asesoría Técnica</h4>
                            <p>
                                Seguimiento y asesoría técnica especializada antes y durante la prestación de todos nuestros servicios.
                            </p>
                        </motion.div>

                        <motion.div className={styles.attrItem} variants={fadeInUp}>
                            <div className={styles.attrIcon}>
                                <Clock size={32} />
                            </div>
                            <h4>Asistencia 24 Horas</h4>
                            <p>
                                Disponibilidad inmediata las 24 horas del día para atender cualquier emergencia en sus redes.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <motion.div
                        className={styles.ctaContent}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2>¿Necesitas Nuestros Servicios?</h2>
                        <p>Asistencia inmediata las 24 Horas del día por los diferentes canales de comunicación.</p>
                        <motion.a
                            href="tel:+573000000000"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Phone size={20} /> Contáctanos Ahora
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
