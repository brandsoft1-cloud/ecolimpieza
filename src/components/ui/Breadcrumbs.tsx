"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    if (pathname === "/") return null;

    return (
        <nav aria-label="Breadcrumb" className={styles.nav}>
            <div className="container">
                <ol className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/" className={styles.link}>
                            <Home size={16} />
                            <span className="sr-only">Inicio</span>
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathSegments.length - 1;
                        const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

                        return (
                            <li key={href} className={styles.item}>
                                <ChevronRight size={14} className={styles.separator} />
                                {isLast ? (
                                    <span className={styles.current} aria-current="page">
                                        {label}
                                    </span>
                                ) : (
                                    <Link href={href} className={styles.link}>
                                        {label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>

            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Inicio",
                                "item": "https://ecolimpiezabogota.com.co"
                            },
                            ...pathSegments.map((segment, index) => ({
                                "@type": "ListItem",
                                "position": index + 2,
                                "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
                                "item": `https://ecolimpiezabogota.com.co/${pathSegments.slice(0, index + 1).join("/")}`
                            }))
                        ]
                    })
                }}
            />
        </nav>
    );
}
