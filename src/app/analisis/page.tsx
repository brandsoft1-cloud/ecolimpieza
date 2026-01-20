import styles from "./Analisis.module.css";
import { Shield, Target, TrendingUp } from "lucide-react";

export default function AnalisisPage() {
    return (
        <div className={styles.page}>
            <div className="container">
                <h1>Análisis Estratégico — Ecolimpieza vs Competencia</h1>

                <div className={styles.grid}>
                    <section className={styles.section}>
                        <h2><Target /> Competidores Locales</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Empresa</th>
                                    <th>Segmento</th>
                                    <th>Fortaleza Core</th>
                                    <th>Oportunidades SEO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Induaseo</td>
                                    <td>Industrial Grande</td>
                                    <td>Contratos Estatales</td>
                                    <td>Keywords de emergencia (Long-tail)</td>
                                </tr>
                                <tr>
                                    <td>CleanCol</td>
                                    <td>Comercial/Oficinas</td>
                                    <td>Multiservicios</td>
                                    <td>Especialización en Vactor</td>
                                </tr>
                                <tr>
                                    <td>Limpiafy</td>
                                    <td>Residencial/PYME</td>
                                    <td>Facilidad Digital</td>
                                    <td>Enfoque en Maquinaria Pesada</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className={styles.section}>
                        <h2><Shield /> Ventajas de Ecolimpieza</h2>
                        <ul className={styles.list}>
                            <li><strong>Maquinaria de Última Generación:</strong> Equipos Vactor de alta presión comprobados.</li>
                            <li><strong>Tiempo de Respuesta:</strong> Capacidad de atención 24/7 en Bogotá.</li>
                            <li><strong>Sostenibilidad:</strong> Proceso certificado de disposición de lodos.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2><TrendingUp /> Estrategia de Keywords</h2>
                        <div className={styles.keywords}>
                            <div className={styles.kwGroup}>
                                <h3>Transaccionales (Alta Conversión)</h3>
                                <ul>
                                    <li>vactor bogota precio</li>
                                    <li>limpieza de alcantarillado industrial</li>
                                    <li>destape hidrojet bogota</li>
                                </ul>
                            </div>
                            <div className={styles.kwGroup}>
                                <h3>Informativas (Blog / Autoridad)</h3>
                                <ul>
                                    <li>como limpiar trampa de grasa industrial</li>
                                    <li>mantenimiento preventivo tuberias empresas</li>
                                    <li>normativa ambiental lodos colombia</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
