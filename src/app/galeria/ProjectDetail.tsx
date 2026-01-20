"use client";

import { motion } from "framer-motion";
import styles from "./ProjectDetail.module.css";
import { X, CheckCircle, Info, MapPin, Calendar, Layout } from "lucide-react";
import Image from "next/image";
import { ProjectImage } from "@/lib/data";

interface ProjectDetailProps {
    project: ProjectImage;
    onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
    return (
        <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className={styles.modal}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.close} onClick={onClose}><X size={24} /></button>

                <div className={styles.grid}>
                    <div className={styles.imageBox}>
                        <Image src={project.image} alt={project.title} fill className={styles.image} />
                    </div>

                    <div className={styles.content}>
                        <div className={styles.header}>
                            <span className={styles.cat}>{project.category}</span>
                            <h2>{project.title}</h2>
                            <div className={styles.meta}>
                                <div className={styles.metaItem}><MapPin size={16} /> <span>{project.location}</span></div>
                                <div className={styles.metaItem}><Layout size={16} /> <span>{project.client}</span></div>
                            </div>
                        </div>

                        <div className={styles.body}>
                            <div className={styles.section}>
                                <h3><Info size={20} /> DESCRIPCIÓN TÉCNICA</h3>
                                <p>{project.description}</p>
                            </div>

                            <div className={styles.section}>
                                <h3><CheckCircle size={20} /> RESULTADOS OBTENIDOS</h3>
                                <ul className={styles.list}>
                                    <li>Restauración de capacidad hidráulica optimizada.</li>
                                    <li>Limpieza profunda con equipo de alta presión.</li>
                                    <li>Disposición certificada de residuos recolectados.</li>
                                </ul>
                            </div>

                            <div className={styles.footer}>
                                <a href="tel:+573000000000" className="btn btn-primary" style={{ width: '100%' }}>
                                    SOLICITAR SERVICIO SIMILAR
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
