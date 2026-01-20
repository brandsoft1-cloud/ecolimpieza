import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import styles from "./Blog.module.css";
import { Calendar, Tag, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Blog Experto en Limpieza Industrial y Vactor — Ecolimpieza Bogotá",
    description: "Artículos técnicos, guías de mantenimiento y consejos sobre limpieza de redes hidrosanitarias en Colombia.",
};

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <h1>Blog de Ingeniería Ambiental</h1>
                    <p>Compartimos nuestra experiencia técnica para el mantenimiento de tu infraestructura.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {blogPosts.map((post) => (
                            <article key={post.slug} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className={styles.image}
                                    />
                                    <span className={styles.category}>{post.category}</span>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.meta}>
                                        <span><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                                    </div>
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt}</p>
                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Leer Artículo <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
