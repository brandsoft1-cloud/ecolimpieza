export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'servicios-limpieza-industrial-bogota-como-elegir',
    title: 'Servicios de limpieza industrial en Bogotá: Cómo elegir el mejor proveedor',
    excerpt: 'Descubre los criterios clave para contratar una empresa de limpieza técnica que cumpla con normativas ambientales y eficiencia operativa.',
    date: '2024-01-15',
    category: 'Guía',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    content: `
      <h2>Introducción a la Limpieza Técnica Industrial</h2>
      <p>En el corazón económico de Colombia, las industrias en Bogotá enfrentan retos constantes de mantenimiento. No se trata solo de estética; la operatividad de una planta depende de la limpieza crítica de sus sistemas.</p>
      
      <h3>1. Certificaciones y Cumplimiento Normativo</h3>
      <p>Cualquier proveedor debe contar con las certificaciones de la Secretaría de Ambiente y manejo de residuos peligrosos. En Ecolimpieza Bogotá S.A.S, garantizamos la disposición legal de cada residuo recolectado.</p>
      
      <h3>2. Tecnología Vactor e Hidrojet</h3>
      <p>¿Tienen equipos propios o subcontratados? La autonomía tecnológica permite respuestas rápidas en emergencias, algo vital para evitar paradas de producción.</p>
      
      <blockquote>
        "La limpieza industrial preventiva puede ahorrar hasta un 40% en costos de reparación correctiva."
      </blockquote>
      
      <h3>Conclusión</h3>
      <p>Elegir bien implica mirar más allá del precio; busque experiencia comprobable y equipos de alta potencia.</p>
    `
  },
  {
    slug: 'beneficios-mantenimiento-redes-sanitarias-empresas',
    title: 'Beneficios del mantenimiento de redes sanitarias para empresas',
    excerpt: 'Evita inundaciones y problemas de salubridad en tu empresa con un programa de mantenimiento preventivo de redes hidrosanitarias.',
    date: '2024-01-10',
    category: 'Mantenimiento',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    content: `
      <h2>¿Por qué el mantenimiento preventivo es una inversión?</h2>
      <p>Las redes sanitarias son las venas de cualquier edificio comercial. Su falla no solo genera malos olores, sino posibles multas y cierres temporales.</p>
      
      <h3>Continuidad del Negocio</h3>
      <p>Un taponamiento en la trampa de grasa de un restaurante o en el colector principal de un centro comercial puede detener la operación por horas. El sondeo periódico con Hidrojet evita estos escenarios.</p>
    `
  },
  {
    slug: 'tecnologia-vactor-succion-alta-potencia',
    title: 'Tecnología Vactor: Succión de alta potencia para pozos sépticos',
    excerpt: 'Conozca cómo funcionan los camiones Vactor y por qué son la solución más eficiente para la limpieza de pozos y trampas de grasa.',
    date: '2024-02-05',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070',
    content: `
      <h2>La potencia de la succión por vacío</h2>
      <p>Los equipos Vactor combinan la succión por alto vacío con el lavado a presión. Esto permite remover sedimentos pesados y obstrucciones calcificadas que otros métodos no pueden tocar.</p>
      
      <h3>Ventajas en el sector industrial</h3>
      <p>Desde la limpieza de plantas de tratamiento hasta el vaciado de subestaciones eléctricas inundadas, la versatilidad de estos camiones es incomparable.</p>
      
      <ul>
        <li>Succión de lodos espesos.</li>
        <li>Limpieza de tuberías de gran diámetro.</li>
        <li>Disposición final certificada.</li>
      </ul>
    `
  },
  {
    slug: 'gestion-residuos-liquidos-peligrosos-bogota',
    title: 'Gestión de residuos líquidos y peligrosos en Bogotá',
    excerpt: 'Normatividad vigente y procedimientos seguros para la recolección y transporte de residuos industriales.',
    date: '2024-02-12',
    category: 'Legal',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2070',
    content: `
      <h2>Cumplimiento con la Secretaría de Ambiente</h2>
      <p>En Bogotá, el vertido ilegal de residuos puede acarrear sanciones millonarias. Es vital contar con un aliado que provea manifiestos de disposición legal.</p>
      
      <h3>Cadena de Custodia</h3>
      <p>Nuestro proceso asegura que desde el punto de succión hasta la planta de tratamiento final, los residuos sean manejados bajo estrictos protocolos de seguridad ambiental.</p>
    `
  },
  {
    slug: 'emergencias-hidrosanitarias-24-7-que-hacer',
    title: 'Emergencias hidrosanitarias 24/7: ¿Qué hacer ante una inundación?',
    excerpt: 'Guía rápida de acción ante desbordamientos y fallas críticas en sistemas de alcantarillado.',
    date: '2024-02-20',
    category: 'Emergencias',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=2070',
    content: `
      <h2>Primeros pasos ante una emergencia</h2>
      <p>Lo primero es la seguridad. Desconecte fuentes eléctricas cercanas al área afectada y evite el contacto directo con aguas negras.</p>
      
      <h3>Llamado a expertos técnicos</h3>
      <p>Contamos con equipos de respuesta rápida en Bogotá para atender inundaciones en sótanos, parqueaderos y áreas industriales de forma inmediata.</p>
    `
  }
];
