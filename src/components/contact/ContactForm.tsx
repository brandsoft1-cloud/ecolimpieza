"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className={styles.successMessage}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <CheckCircle size={80} color="var(--primary)" />
                </motion.div>
                <h2>Protocolo de Contacto Iniciado</h2>
                <p>Un director técnico senior revisará su solicitud comercial en las próximas 2 horas.</p>
                <button onClick={() => setStatus("idle")} className="btn btn-outline">Solicitud Adicional</button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <div className={styles.group}>
                    <label htmlFor="name">Nombre Completo *</label>
                    <input type="text" id="name" required placeholder="Ej: Juan Pérez" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="phone">Teléfono / WhatsApp *</label>
                    <input type="tel" id="phone" required placeholder="Ej: 300 123 4567" />
                </div>
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Correo Electrónico *</label>
                <input type="email" id="email" required placeholder="juan@empresa.com" />
            </div>

            <div className={styles.group}>
                <label htmlFor="service">Tipo de Servicio *</label>
                <select id="service" required>
                    <option value="">Seleccione un servicio</option>
                    <option value="vactor">Limpieza Vactor</option>
                    <option value="hidrojet">Mantenimiento Hidrojet</option>
                    <option value="cctv">Inspección CCTV</option>
                    <option value="mantenimiento">Mantenimiento Red Hidrosanitaria</option>
                    <option value="other">Otro / Consulta General</option>
                </select>
            </div>

            <div className={styles.group}>
                <label htmlFor="message">Mensaje / Detalles del Proyecto</label>
                <textarea id="message" rows={4} placeholder="Describe brevemente lo que necesitas..."></textarea>
            </div>

            <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === "loading"}
            >
                {status === "loading" ? "Procesando Protocolo..." : (
                    <>
                        SOLICITAR AUDITORÍA TÉCNICA <Send size={18} />
                    </>
                )}
            </button>

            {status === "error" && (
                <div className={styles.errorMessage}>
                    <AlertCircle size={20} />
                    <span>Ocurrió un error. Por favor intenta de nuevo.</span>
                </div>
            )}
        </form>
    );
}
