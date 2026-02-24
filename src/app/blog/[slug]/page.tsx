import { blogPosts, WHATSAPP_URL } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./Post.module.css";
import ContactForm from "@/components/contact/ContactForm";
import { MessageSquare, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };
  const keywords = post.keywords.join(", ");
  return {
    title: post.title,
    description: post.excerpt,
    keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hola, vi el artículo "${post.title}" y me gustaría cotizar el servicio.`
  );
  const whatsappLink = `${WHATSAPP_URL}&text=${whatsappMessage}`;

  return (
    <article className={styles.post}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Inicio</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/blog">Blog</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{post.title}</span>
        </div>
      </nav>

      <header className={styles.header}>
        <div className="container">
          <div className={styles.postMeta}>
            <span>{post.category}</span> —{" "}
            <span>{new Date(post.date).toLocaleDateString("es-CO")}</span>
          </div>
          <h1>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </header>

      <div className={styles.heroImage}>
        <div className="container">
          <div className={styles.imageContainer}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className={styles.image}
              priority
              sizes="(max-width: 992px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        <div className={styles.mainContent}>
          {/* Qué significa - Trazabilidad */}
          <section className={styles.section} aria-labelledby="que-significa">
            <h2 id="que-significa" className={styles.sectionTitle}>
              <CheckCircle2 size={24} className={styles.sectionIcon} />
              Qué significa y por qué importa
            </h2>
            <p className={styles.whatItMeans}>{post.whatItMeans}</p>
          </section>

          {/* Contenido principal */}
          <section
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Cómo lo hacemos - Con fotos */}
          <section className={styles.section} aria-labelledby="como-lo-hacemos">
            <h2 id="como-lo-hacemos" className={styles.sectionTitle}>
              Cómo lo hacemos en Ecolimpieza Bogotá
            </h2>
            <div className={styles.howWeDoIt}>
              {post.howWeDoIt.map((step, i) => (
                <div key={i} className={styles.step}>
                  {step.image && (
                    <div className={styles.stepImageWrap}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className={styles.stepImage}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  )}
                  <div className={styles.stepContent}>
                    <span className={styles.stepNumber}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Galería adicional */}
          {post.galleryImages && post.galleryImages.length > 0 && (
            <section className={styles.section} aria-labelledby="galeria">
              <h2 id="galeria" className={styles.sectionTitle}>
                Galería de nuestro trabajo
              </h2>
              <div className={styles.gallery}>
                {post.galleryImages.map((src, i) => (
                  <div key={i} className={styles.galleryItem}>
                    <Image
                      src={src}
                      alt={`${post.title} - imagen ${i + 1}`}
                      fill
                      className={styles.galleryImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA WhatsApp final */}
          <section className={styles.ctaWhatsAppSection}>
            <div className={styles.ctaWhatsApp}>
              <MessageSquare size={32} aria-hidden />
              <div>
                <h3>Contrata este servicio por WhatsApp</h3>
                <p>
                  Respuesta inmediata, cotización sin compromiso y visita técnica
                  en Bogotá y Colombia.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  <MessageSquare size={20} /> Escribir por WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.ctaBox}>
            <h3>¿Necesitas este servicio?</h3>
            <p>
              Agenda una visita técnica y obtén una cotización sin compromiso.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sidebarWhatsAppBtn}
            >
              <MessageSquare size={20} /> Cotizar por WhatsApp
            </a>
            <ContactForm />
          </div>
          {/* Keywords para SEO visible */}
          <div className={styles.keywordsBox}>
            <h4>Palabras clave</h4>
            <ul>
              {post.keywords.map((kw, i) => (
                <li key={i}>{kw}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Article + FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            keywords: post.keywords.join(", "),
            author: {
              "@type": "Organization",
              name: "Ecolimpieza Bogotá S.A.S",
              url: "https://ecolimpiezabogota.com.co",
            },
            publisher: {
              "@type": "Organization",
              name: "Ecolimpieza Bogotá S.A.S",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cómo contratar servicios de vactor o limpieza industrial en Bogotá?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puede contactarnos vía WhatsApp al número de Ecolimpieza Bogotá para programar una visita técnica inmediata y cotización sin compromiso.",
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
