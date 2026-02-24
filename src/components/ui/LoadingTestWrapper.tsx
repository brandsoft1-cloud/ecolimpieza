"use client";

import { useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import styles from "./LoadingTestWrapper.module.css";

/** Poner en true para dejar la animación de carga fija y probarla. En false no hace nada. */
const TEST_LOADING_FIJO = false;

export default function LoadingTestWrapper({ children }: { children: React.ReactNode }) {
  const [mostrar, setMostrar] = useState(TEST_LOADING_FIJO);

  if (!TEST_LOADING_FIJO || !mostrar) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div className={styles.fixed}>
        <LoadingOverlay />
        <button
          type="button"
          className={styles.continuar}
          onClick={() => setMostrar(false)}
          aria-label="Cerrar animación de prueba"
        >
          Continuar →
        </button>
      </div>
    </>
  );
}
