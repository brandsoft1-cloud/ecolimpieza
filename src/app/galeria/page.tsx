"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Category, ProjectImage } from "@/lib/data";
import styles from "./Galeria.module.css";
import { MapPin, ArrowUpRight, Search } from "lucide-react";
import ProjectDetail from "./ProjectDetail";

const filters: { label: string; value: Category }[] = [
    { label: "Todos los Servicios", value: "all" },
    { label: "Sistemas Vactor", value: "vactor" },
    { label: "Hidrojet Alta Presión", value: "hidrojet" },
    { label: "CCTV & Diagnóstico", value: "cctv" },
    { label: "Mantenimiento Preventivo", value: "mantenimiento" },
];

export default function GaleriaPage() {
    const [activeFilter, setActiveFilter] = useState<Category>("all");
    const [selectedProject, setSelectedProject] = useState<ProjectImage | null>(null);

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1>PORTAFOLIO TÉCNICO</h1>
                        <p>Registro fotográfico de nuestras intervenciones industriales y civiles.</p>
                    </motion.div>
                </div>
            </header>

            <section className={styles.content}>
                <div className="container">
                    {/* Industrial Filter bar */}
                    <div className={styles.filterBar}>
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setActiveFilter(f.value)}
                                className={`${styles.filterBtn} ${activeFilter === f.value ? styles.active : ""}`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className={styles.grid}>
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, i) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.card}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={styles.image}
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4P6OaMAAAAABJRU5ErkJggg=="
                                        />
                                        <div className={styles.overlay}>
                                            <Search size={32} />
                                            <span>Ver Detalle Técnico</span>
                                        </div>
                                    </div>
                                    <div className={styles.info}>
                                        <span className={styles.cat}>{project.category}</span>
                                        <h3>{project.title}</h3>
                                        <div className={styles.loc}><MapPin size={14} /> <span>{project.location}</span></div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {selectedProject && (
                <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
}
