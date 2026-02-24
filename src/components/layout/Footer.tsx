import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import LogoEcolimpieza from "../ui/LogoEcolimpieza";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <LogoEcolimpieza variant="footer" showSAS className={styles.logo} />
                    <p className={styles.description}>
                        Empresa líder en ingeniería de redes hidrosanitarias y succión Vactor.
                        Tecnología de punta y certificación ambiental para el sector industrial y residencial.
                    </p>
                    <div className={styles.socials}>
                        <a href="https://www.facebook.com/p/ECOLIMPIEZA-BOGOTA-100026496225439/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="https://www.instagram.com/ecolimpiezabogota/?hl=es-la" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="https://www.youtube.com/@vactorecolimpiezabogota3729" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                    </div>
                </div>

                <div className={styles.links}>
                    <h3>Servicios Especializados</h3>
                    <ul>
                        <li><Link href="/galeria">Limpieza Vactor</Link></li>
                        <li><Link href="/galeria">Sondeo Hidrojet</Link></li>
                        <li><Link href="/galeria">Inspección CCTV</Link></li>
                        <li><Link href="/galeria">Tratamiento de Lodos</Link></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h3>Institucional</h3>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/nosotros">Nosotros</Link></li>
                        <li><Link href="/galeria">Portafolio</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>Urgencias 24/7</h3>
                    <ul>
                        <li>
                            <div className={styles.iconWrapper}>
                                <Phone size={20} className={styles.icon} />
                            </div>
                            <a href="tel:+573000000000">+57 300 000 0000</a>
                        </li>
                        <li>
                            <div className={styles.iconWrapper}>
                                <Mail size={20} className={styles.icon} />
                            </div>
                            <a href="mailto:gerencia@ecolimpiezabogota.com.co">gerencia@ecolimpiezabogota.com.co</a>
                        </li>
                        <li>
                            <div className={styles.iconWrapper}>
                                <MapPin size={20} className={styles.icon} />
                            </div>
                            <span>Bogotá, Colombia</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Ecolimpieza Bogotá S.A.S. — Ingeniería en Limpieza Industrial.</p>
                </div>
            </div>
        </footer>
    );
}
