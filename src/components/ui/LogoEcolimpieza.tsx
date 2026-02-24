"use client";

import Image from "next/image";
import styles from "./LogoEcolimpieza.module.css";

const LOGO_ICON_SRC = "/logo-icon-ecolimpieza.png";

type LogoEcolimpiezaProps = {
  variant?: "full" | "icon" | "loading" | "footer" | "modal";
  className?: string;
  showSAS?: boolean;
};

export default function LogoEcolimpieza({ variant = "full", className = "", showSAS }: LogoEcolimpiezaProps) {
  const subText = showSAS ? "BOGOTA S.A.S" : "BOGOTA";

  if (variant === "icon") {
    return (
      <span className={`${styles.wrap} ${styles.iconOnly} ${className}`}>
        <span className={styles.iconBox}>
          <Image
            src={LOGO_ICON_SRC}
            alt="Ecolimpieza Bogotá"
            width={80}
            height={80}
            className={styles.iconImg}
          />
        </span>
      </span>
    );
  }

  return (
    <span className={`${styles.wrap} ${styles[variant]} ${className}`}>
      <span className={styles.iconBox}>
        <Image
          src={LOGO_ICON_SRC}
          alt=""
          width={80}
          height={80}
          className={styles.iconImg}
          aria-hidden
        />
      </span>
      <span className={styles.textBlock}>
        <span className={styles.mainText}>ECOLIMPIEZA</span>
        <span className={styles.subText}>{subText}</span>
      </span>
    </span>
  );
}
