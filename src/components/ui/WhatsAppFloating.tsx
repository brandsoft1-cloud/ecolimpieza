"use client";

import { MessageSquare } from "lucide-react";
import styles from "./WhatsAppFloating.module.css";

export default function WhatsAppFloating() {
    return (
        <a
            href="https://wa.me/573000000000?text=Hola,%20quisiera%20cotizar%20un%20servicio%20de%20limpieza."
            className={styles.float}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <MessageSquare size={30} fill="currentColor" />
            <span className={styles.tooltip}>¿Necesitas ayuda?</span>
        </a>
    );
}
