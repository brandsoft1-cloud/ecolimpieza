"use client";

import styles from "./LoadingOverlay.module.css";

export default function LoadingOverlay() {
  return (
    <div className={styles.overlay} role="status" aria-live="polite" aria-label="Cargando">
      <div className={styles.content}>
        <svg
          className={styles.vactorSvg}
          viewBox="0 0 240 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {/* Ground line */}
          <line x1="0" y1="95" x2="240" y2="95" stroke="currentColor" strokeWidth="1" opacity="0.2" />

          {/* Truck cab */}
          <g className={styles.truckCab}>
            <rect x="20" y="55" width="50" height="35" rx="4" fill="var(--white)" stroke="var(--secondary)" strokeWidth="2" />
            <rect x="22" y="60" width="20" height="12" rx="2" fill="var(--secondary)" opacity="0.6" />
            {/* Wheels */}
            <circle cx="35" cy="92" r="8" fill="var(--dark)" stroke="var(--primary)" strokeWidth="2" className={styles.wheel} />
            <circle cx="55" cy="92" r="8" fill="var(--dark)" stroke="var(--primary)" strokeWidth="2" className={styles.wheel} />
          </g>

          {/* Tank */}
          <g className={styles.tank}>
            <ellipse cx="130" cy="75" rx="45" ry="25" fill="var(--secondary)" stroke="var(--primary)" strokeWidth="2" />
            <ellipse cx="130" cy="68" rx="40" ry="8" fill="var(--secondary)" opacity="0.8" />
            {/* Tank rings */}
            <ellipse cx="110" cy="75" rx="3" ry="22" fill="var(--primary)" opacity="0.5" />
            <ellipse cx="130" cy="75" rx="3" ry="22" fill="var(--primary)" opacity="0.5" />
            <ellipse cx="150" cy="75" rx="3" ry="22" fill="var(--primary)" opacity="0.5" />
            {/* Rear wheels */}
            <circle cx="170" cy="92" r="8" fill="var(--dark)" stroke="var(--primary)" strokeWidth="2" className={styles.wheel} />
            <circle cx="195" cy="92" r="8" fill="var(--dark)" stroke="var(--primary)" strokeWidth="2" className={styles.wheel} />
          </g>

          {/* Hose */}
          <path
            d="M 175 55 Q 185 45 195 50 Q 205 55 210 60 L 220 70"
            stroke="var(--primary)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            className={styles.hose}
          />

          {/* Worker 1 - near hose */}
          <g className={styles.worker}>
            <circle cx="205" cy="50" r="6" fill="var(--primary)" />
            <line x1="205" y1="56" x2="205" y2="75" stroke="var(--dark)" strokeWidth="2" />
            <line x1="205" y1="65" x2="195" y2="85" stroke="var(--dark)" strokeWidth="2" />
            <line x1="205" y1="65" x2="215" y2="85" stroke="var(--dark)" strokeWidth="2" />
            <line x1="205" y1="75" x2="200" y2="90" stroke="var(--dark)" strokeWidth="2" />
            <line x1="205" y1="75" x2="210" y2="90" stroke="var(--dark)" strokeWidth="2" />
          </g>

          {/* Worker 2 - other side */}
          <g className={styles.worker2}>
            <circle cx="50" cy="45" r="5" fill="var(--primary)" />
            <line x1="50" y1="50" x2="50" y2="70" stroke="var(--dark)" strokeWidth="1.5" />
            <line x1="50" y1="58" x2="42" y2="78" stroke="var(--dark)" strokeWidth="1.5" />
            <line x1="50" y1="58" x2="58" y2="78" stroke="var(--dark)" strokeWidth="1.5" />
            <line x1="50" y1="70" x2="46" y2="85" stroke="var(--dark)" strokeWidth="1.5" />
            <line x1="50" y1="70" x2="54" y2="85" stroke="var(--dark)" strokeWidth="1.5" />
          </g>

          {/* ECO text on tank */}
          <text x="130" y="78" textAnchor="middle" fill="var(--white)" fontSize="12" fontWeight="700" fontFamily="var(--font-main)">ECO</text>
        </svg>
        <p className={styles.label}>Cargando...</p>
        <div className={styles.barWrap}>
          <div className={styles.bar} />
        </div>
      </div>
    </div>
  );
}
