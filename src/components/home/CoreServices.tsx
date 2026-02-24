"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CoreServices.module.css";

const services = [
    {
        title: "Equipos Vactor",
        desc: "Limpieza profunda de redes de alcantarillado con tecnología de succión-presión de alto rendimiento.",
        action: "Cotiza aquí",
        link: "https://api.whatsapp.com/send?phone=573183084334",
        img: "/images/camion-vaccon-eco-limpieza-bogota.png"
    },
    {
        title: "Camión de Vacio",
        desc: "Succión especializada de trampas de grasas, pozos sépticos y PTAR para industrias e instituciones.",
        action: "Contáctenos",
        link: "/contactenos",
        img: "/images/camion-vactor-servicios-eco-limpieza.png"
    },
    {
        title: "Cámara de Inspección",
        desc: "Análisis interno de tuberías mediante tecnología de micro cámara portátil para diagnósticos precisos.",
        action: "Contáctenos",
        link: "/contactenos",
        img: "/images/tecnico-limpieza-alcantarillado-manhole.png"
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
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function CoreServices() {
    return (
        <section id="servicios" className={styles.coreServices}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className={styles.title}>Servicios Principales</h2>
                    <p className={styles.subtitle}>Soluciones integrales con equipos de vanguardia para la industria.</p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((srv, idx) => (
                        <motion.div key={idx} className={styles.card} variants={fadeInUp}>
                            <div className={styles.imgWrapper}>
                                <Image src={srv.img} alt={srv.title} fill className={styles.img} />
                                <div className={styles.overlay} />
                            </div>
                            <div className={styles.content}>
                                <h3>{srv.title}</h3>
                                <p>{srv.desc}</p>
                                <Link href={srv.link} className={styles.linkAction}>
                                    <span>{srv.action}</span>
                                    <ArrowRight size={18} strokeWidth={1.5} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
