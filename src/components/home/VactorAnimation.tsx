"use client";

import { motion } from "framer-motion";
import LogoEcolimpieza from "../ui/LogoEcolimpieza";

export default function VactorAnimation() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                background: "#f0f4f8",
            }}
        >
            {/* Manguera circular alrededor del logo */}
            <svg
                viewBox="0 0 320 320"
                style={{ width: "min(80vw, 340px)", height: "auto" }}
                aria-hidden
            >
                {/* Alcantarilla amplia y marcada abajo */}
                <ellipse cx="160" cy="272" rx="80" ry="14" fill="#020617" opacity={0.9} />
                <rect x="110" y="245" width="100" height="32" fill="#020617" rx="8" />
                {/* Línea de corte de tapa */}
                <rect x="115" y="252" width="90" height="3" fill="#111827" opacity={0.9} />
                {/* Ranuras de la tapa */}
                <rect x="125" y="257" width="10" height="2" fill="#1f2937" />
                <rect x="145" y="257" width="10" height="2" fill="#1f2937" />
                <rect x="165" y="257" width="10" height="2" fill="#1f2937" />
                <rect x="185" y="257" width="10" height="2" fill="#1f2937" />

                {/* Círculo de manguera (más grande) */}
                <circle
                    cx="160"
                    cy="135"
                    r="105"
                    stroke="#0f172a"
                    strokeWidth="20"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Resaltado animado de succión en la manguera */}
                <motion.circle
                    cx="160"
                    cy="135"
                    r="105"
                    stroke="#22c55e"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="50 260"
                    animate={{ strokeDashoffset: [0, -320] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    strokeLinecap="round"
                />

                {/* Manguera que baja claramente a la alcantarilla */}
                <path
                    d="M 215 205 Q 205 235 190 248 Q 180 256 170 260"
                    stroke="#020617"
                    strokeWidth="18"
                    fill="none"
                    strokeLinecap="round"
                />
                <motion.path
                    d="M 215 205 Q 205 235 190 248 Q 180 256 170 260"
                    stroke="#38bdf8"
                    strokeWidth="7"
                    fill="none"
                    strokeDasharray="18 40"
                    animate={{ strokeDashoffset: [40, 0] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    strokeLinecap="round"
                />
            </svg>

            {/* Logo de Ecolimpieza en el centro (ligeramente animado) */}
            <motion.div
                style={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
                <LogoEcolimpieza variant="full" showSAS />
            </motion.div>
        </div>
    );
}
