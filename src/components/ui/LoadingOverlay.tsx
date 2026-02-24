"use client";

import Image from "next/image";
import LogoEcolimpieza from "./LogoEcolimpieza";
import styles from "./LoadingOverlay.module.css";

const HERO_IMG =
  "/images/camion-vaccon-eco-limpieza-bogota.png";

export default function LoadingOverlay() {
  return (
    <div className={styles.overlay} role="status" aria-live="polite" aria-label="Cargando">
      <div className={styles.scene}>
        <div className={styles.imageWrap}>
          <Image
            src={HERO_IMG}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className={styles.heroImage}
            priority
          />
          <div className={styles.imageOverlay} />
          <div className={styles.badge}>Servicios industriales</div>
        </div>

        <div className={styles.logoBlock}>
          <LogoEcolimpieza variant="loading" />
        </div>
        <p className={styles.subline}>Limpieza hidrosanitaria · Vactor · Hidrojet · CCTV</p>
        <div className={styles.barWrap}>
          <div className={styles.bar} />
        </div>
      </div>
    </div>
  );
}
