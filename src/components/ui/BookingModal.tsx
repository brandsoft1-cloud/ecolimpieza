"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Truck, Calendar, Clock, CheckCircle, Calculator } from "lucide-react";
import styles from "./BookingModal.module.css";

interface TruckOption {
    id: string;
    name: string;
    pricePerHour: number;
    description: string;
}

const TRUCK_OPTIONS: TruckOption[] = [
    { id: "vactor-small", name: "Vactor Pequeño", pricePerHour: 350000, description: "Ideal para sótanos y espacios reducidos." },
    { id: "vactor-large", name: "Vactor Gran Potencia", pricePerHour: 550000, description: "Máxima succión para redes municipales." },
    { id: "hidrojet", name: "Equipo Hidrojet", pricePerHour: 280000, description: "Lavado a presión y sondeo de tuberías." },
];

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [selectedTruck, setSelectedTruck] = useState<TruckOption | null>(null);
    const [hours, setHours] = useState(1);
    const [date, setDate] = useState("");

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const resetAndClose = () => {
        onClose();
        setTimeout(() => {
            setStep(1);
            setSelectedTruck(null);
            setHours(1);
            setDate("");
        }, 300);
    };

    const totalPrice = selectedTruck ? selectedTruck.pricePerHour * hours : 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.overlay} onClick={resetAndClose}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeButton} onClick={resetAndClose}>
                            <X size={24} />
                        </button>

                        <div className={styles.header}>
                            <h2>Agendar Servicio</h2>
                            <div className={styles.progress}>
                                <div className={`${styles.dot} ${step >= 1 ? styles.active : ""}`} />
                                <div className={`${styles.dot} ${step >= 2 ? styles.active : ""}`} />
                                <div className={`${styles.dot} ${step >= 3 ? styles.active : ""}`} />
                            </div>
                        </div>

                        <div className={styles.content}>
                            {step === 1 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                    <h3>1. Selecciona el Equipo</h3>
                                    <div className={styles.truckList}>
                                        {TRUCK_OPTIONS.map((truck) => (
                                            <div
                                                key={truck.id}
                                                className={`${styles.truckCard} ${selectedTruck?.id === truck.id ? styles.selected : ""}`}
                                                onClick={() => setSelectedTruck(truck)}
                                            >
                                                <Truck size={32} color={selectedTruck?.id === truck.id ? "#89B200" : "#666"} />
                                                <div>
                                                    <h4>{truck.name}</h4>
                                                    <p>{truck.description}</p>
                                                    <span className={styles.priceTag}>${truck.pricePerHour.toLocaleString()} / Hora</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className={styles.mainButton}
                                        disabled={!selectedTruck}
                                        onClick={handleNext}
                                    >
                                        Siguiente paso
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                    <h3>2. Fecha y Duración</h3>
                                    <div className={styles.formGroup}>
                                        <label><Calendar size={18} /> Fecha del Servicio</label>
                                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label><Clock size={18} /> Horas Estimadas</label>
                                        <div className={styles.numberInput}>
                                            <button onClick={() => setHours(Math.max(1, hours - 1))}>-</button>
                                            <span>{hours}</span>
                                            <button onClick={() => setHours(hours + 1)}>+</button>
                                        </div>
                                    </div>

                                    <div className={styles.summaryBox}>
                                        <div className={styles.summaryItem}>
                                            <span>Equipo:</span>
                                            <span>{selectedTruck?.name}</span>
                                        </div>
                                        <div className={styles.summaryItem}>
                                            <span>Precio total estimado:</span>
                                            <span className={styles.totalPrice}>${totalPrice.toLocaleString()} COP</span>
                                        </div>
                                    </div>

                                    <div className={styles.buttonGroup}>
                                        <button className={styles.backButton} onClick={handleBack}>Atrás</button>
                                        <button className={styles.mainButton} disabled={!date} onClick={handleNext}>Confirmar Reserva</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={styles.success}>
                                    <CheckCircle size={64} color="#89B200" />
                                    <h3>¡Reserva Exitosa!</h3>
                                    <p>Hemos recibido tu solicitud para el <strong>{new Date(date).toLocaleDateString()}</strong>.</p>
                                    <p>Un asesor se comunicará contigo en breve para confirmar disponibilidad definitiva.</p>
                                    <button className={styles.mainButton} onClick={resetAndClose}>Cerrar</button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
