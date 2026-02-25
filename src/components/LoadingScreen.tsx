"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import VactorAnimation from "./home/VactorAnimation";

export default function LoadingScreen({
    children,
    durationMs = 2500,
}: {
    children: React.ReactNode;
    /** Duración máxima del loader al cargar (ms). */
    durationMs?: number;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Loader de arranque (solo cuando se active con NEXT_PUBLIC_BOOT_LOADER=true)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, durationMs);

        return () => clearTimeout(timer);
    }, [durationMs]);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loading-screen"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 9999,
                            backgroundColor: "#f0f4f8",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {/* Contenedor de la animación: ocupa aprox. la mitad de la pantalla */}
                        <div
                            style={{
                                width: "100%",
                                height: "50vh",
                                maxHeight: "420px",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <VactorAnimation />
                        </div>

                        <motion.div
                            style={{
                                position: "absolute",
                                bottom: "10%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "1rem",
                                color: "#0f172a",
                            }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "200px" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                style={{
                                    height: "4px",
                                    background: "#2ECA7A",
                                    borderRadius: "4px"
                                }}
                            />
                            <motion.p
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                style={{ fontWeight: "600", letterSpacing: "2px" }}
                            >
                                CARGANDO ECOLIMPIEZA...
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Show content immediately behind loading screen so it works progressively */}
            {children}
        </>
    );
}
