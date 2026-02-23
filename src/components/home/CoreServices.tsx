"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CoreServices.module.css";

const services = [
    {
        title: "Equipos Vactor",
        desc: "Limpieza de redes de alcantarillado.",
        action: "Cotiza aquí",
        link: "https://api.whatsapp.com/send?phone=573183084334",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Camión de Vacio",
        desc: "Succión de trampas de grasas – pozos sépticos – PTAR – pozos eyectores en colegios empresas e industria.",
        action: "Contáctenos",
        link: "/contactenos",
        img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Camara de Inspección",
        desc: "Micro cámara portátil conectada a varios metros de manguera que permite revisar y analizar internamente las tuberías.",
        action: "Contáctenos",
        link: "/contactenos",
        img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop"
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
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function CoreServices() {
    return (
        <section className={styles.coreServices}>
            <div className="container">
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
                                    {srv.action} <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
