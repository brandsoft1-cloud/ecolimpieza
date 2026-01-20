import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./Post.module.css";
import ContactForm from "@/components/contact/ContactForm";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) notFound();

    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.postMeta}>
                        <span>{post.category}</span> — <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h1>{post.title}</h1>
                </div>
            </header>

            <div className={styles.heroImage}>
                <div className="container">
                    <div className={styles.imageContainer}>
                        <Image src={post.image} alt={post.title} fill className={styles.image} priority />
                    </div>
                </div>
            </div>

            <div className={`container ${styles.layout}`}>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

                <aside className={styles.sidebar}>
                    <div className={styles.ctaBox}>
                        <h3>¿Necesitas este servicio?</h3>
                        <p>Agenda una visita técnica hoy mismo y obtén una cotización sin compromiso.</p>
                        <ContactForm />
                    </div>
                </aside>
            </div>

            {/* FAQ Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Cómo contratar servicios de vactor en Bogotá?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Puede contactarnos vía WhatsApp o a través de nuestro formulario web para programar una visita técnica inmediata."
                                }
                            }
                        ]
                    })
                }}
            />
        </article>
    );
}
