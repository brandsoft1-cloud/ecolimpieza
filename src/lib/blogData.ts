export interface BlogStep {
  title: string;
  description: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  keywords: string[];
  /** Trazabilidad: qué significa este servicio o tema */
  whatItMeans: string;
  /** Cómo lo hacemos: proceso con fotos */
  howWeDoIt: BlogStep[];
  /** Imágenes adicionales para galería en la subpágina */
  galleryImages?: string[];
  content: string;
}

const WHATSAPP_NUMBER = "573183084334";
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;

function whatsappCtaText(service: string): string {
  return `¿Necesitas ${service}? Contrata a Ecolimpieza Bogotá por WhatsApp: respuesta inmediata y cotización sin compromiso.`;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "servicios-limpieza-industrial-bogota-como-elegir",
    title: "Servicios de limpieza industrial en Bogotá: Cómo elegir el mejor proveedor",
    excerpt:
      "Descubre los criterios clave para contratar una empresa de limpieza técnica que cumpla con normativas ambientales y eficiencia operativa.",
    date: "2024-01-15",
    category: "Guía",
    image: "/images/camion-vaccon-hidrojet-urbano.png",
    keywords: [
      "limpieza industrial Bogotá",
      "limpieza técnica",
      "vactor Bogotá",
      "hidrojet Colombia",
      "mantenimiento alcantarillado",
      "empresa limpieza industrial",
      "cotizar limpieza industrial",
    ],
    whatItMeans:
      "La limpieza industrial en Bogotá es el conjunto de servicios técnicos que mantienen operativas las redes hidrosanitarias, trampas de grasa, pozos sépticos y sistemas de alcantarillado de empresas e instituciones. Incluye succión con equipos Vactor, hidrolavado de alta presión (hidrojet), inspección con cámaras CCTV y gestión de residuos según la normativa ambiental. Elegir bien al proveedor evita paros de planta, multas y riesgos sanitarios.",
    howWeDoIt: [
      {
        title: "Visita técnica y diagnóstico",
        description:
          "Evaluamos su infraestructura y definimos el alcance: limpieza de redes, vactor, hidrojet o inspección CCTV en Bogotá y Colombia.",
        image: "/images/tecnico-limpieza-alcantarillado-manhole.png",
      },
      {
        title: "Equipos propios Vactor e hidrojet",
        description:
          "Desplegamos camiones Vac-Con y equipos de alta presión para limpieza industrial y desobstrucción sin subcontratar.",
        image: "/images/camion-vaccon-eco-limpieza-bogota.png",
      },
      {
        title: "Ejecución y disposición legal",
        description:
          "Ejecutamos el servicio y entregamos manifiestos de disposición de residuos según Secretaría de Ambiente.",
        image: "/images/operador-bombeo-pozos-septicos.png",
      },
    ],
    galleryImages: [
      "/images/camion-vaccon-hidrojet-urbano.png",
      "/images/camion-vactor-vaccon-bogota.png",
      "/images/operacion-limpieza-alcantarillado-calle.png",
    ],
    content: `
      <h2>Introducción a la limpieza técnica industrial en Bogotá</h2>
      <p>En el corazón económico de Colombia, las industrias en <strong>Bogotá</strong> enfrentan retos constantes de mantenimiento. La <strong>limpieza industrial</strong> no es solo estética: la operatividad de una planta depende del estado de sus redes, trampas de grasa y sistemas de alcantarillado. Contar con un proveedor de <strong>servicios de vactor e hidrojet</strong> confiable es clave para evitar paros y cumplir la normativa ambiental.</p>
      
      <h3>1. Certificaciones y cumplimiento normativo</h3>
      <p>Cualquier proveedor de <strong>limpieza industrial en Bogotá</strong> debe contar con certificaciones de la Secretaría de Ambiente y manejo de residuos peligrosos. En <strong>Ecolimpieza Bogotá S.A.S</strong> garantizamos la disposición legal de cada residuo recolectado y la trazabilidad completa.</p>
      
      <h3>2. Tecnología Vactor e hidrojet</h3>
      <p>¿Tienen equipos propios o subcontratados? La autonomía tecnológica permite respuestas rápidas en emergencias. Nuestros <strong>camiones Vactor</strong> y equipos de <strong>hidrojet</strong> están disponibles para <strong>limpieza de alcantarillado</strong> y mantenimiento de redes en Colombia.</p>
      
      <blockquote>
        "La limpieza industrial preventiva puede ahorrar hasta un 40% en costos de reparación correctiva."
      </blockquote>
      
      <h3>Conclusión: cómo contratar el mejor servicio</h3>
      <p>Elegir bien implica mirar más allá del precio: busque experiencia comprobable, equipos de alta potencia y respuesta 24/7. En <strong>Ecolimpieza Bogotá</strong> ofrecemos <strong>cotización sin compromiso</strong> y atención por WhatsApp para programar su visita técnica.</p>
    `,
  },
  {
    slug: "beneficios-mantenimiento-redes-sanitarias-empresas",
    title: "Beneficios del mantenimiento de redes sanitarias para empresas",
    excerpt:
      "Evita inundaciones y problemas de salubridad en tu empresa con un programa de mantenimiento preventivo de redes hidrosanitarias.",
    date: "2024-01-10",
    category: "Mantenimiento",
    image: "/images/camion-vactor-zona-urbana-bogota.png",
    keywords: [
      "mantenimiento redes sanitarias",
      "redes hidrosanitarias",
      "limpieza alcantarillado empresas",
      "prevención taponamientos",
      "trampas de grasa",
      "vactor mantenimiento",
      "Bogotá",
    ],
    whatItMeans:
      "El mantenimiento de redes sanitarias es el conjunto de actividades preventivas y correctivas que mantienen en buen estado las tuberías, trampas de grasa, pozos de inspección y colectores de su empresa. Incluye limpieza con vactor, hidrojet y en algunos casos inspección CCTV. Un programa periódico evita taponamientos, malos olores, multas y cierres por salubridad.",
    howWeDoIt: [
      {
        title: "Programa preventivo a su medida",
        description:
          "Definimos frecuencias según el tipo de negocio: restaurantes, centros comerciales, industrias. Incluye limpieza de trampas de grasa y redes en Bogotá.",
        image: "/images/camion-vactor-zona-urbana-bogota.png",
      },
      {
        title: "Limpieza con vactor e hidrojet",
        description:
          "Usamos equipos propios para desobstrucción y limpieza profunda de tuberías y alcantarillado, con disposición legal de residuos.",
        image: "/images/equipo-limpieza-vaccon-operacion.png",
      },
      {
        title: "Informe y recomendaciones",
        description:
          "Entregamos registro fotográfico y recomendaciones para alargar la vida útil de sus redes sanitarias.",
        image: "/images/operacion-limpieza-alcantarillado-calle.png",
      },
    ],
    galleryImages: [
      "/images/camion-vactor-zona-urbana-bogota.png",
      "/images/equipo-limpieza-vaccon-operacion.png",
      "/images/camion-vactor-mantenimiento-drenajes.png",
    ],
    content: `
      <h2>¿Por qué el mantenimiento preventivo de redes es una inversión?</h2>
      <p>Las <strong>redes sanitarias</strong> son las venas de cualquier edificio comercial o industrial. Su falla no solo genera malos olores, sino posibles multas y cierres temporales. Un programa de <strong>mantenimiento de redes hidrosanitarias</strong> en <strong>Bogotá</strong> con <strong>Ecolimpieza Bogotá</strong> evita emergencias y alarga la vida útil de la infraestructura.</p>
      
      <h3>Continuidad del negocio</h3>
      <p>Un taponamiento en la <strong>trampa de grasa</strong> de un restaurante o en el colector principal de un centro comercial puede detener la operación por horas. El sondeo periódico con <strong>hidrojet</strong> y limpieza con <strong>vactor</strong> evita estos escenarios. Contratar <strong>mantenimiento preventivo</strong> es más económico que una emergencia a medianoche.</p>
      
      <h3>Servicio de vactor e hidrojet para empresas</h3>
      <p>En <strong>Ecolimpieza Bogotá S.A.S</strong> ofrecemos programas de <strong>mantenimiento de alcantarillado</strong> y limpieza de trampas de grasa con equipos propios. Cotice por WhatsApp y programe su próxima visita técnica sin compromiso.</p>
    `,
  },
  {
    slug: "tecnologia-vactor-succion-alta-potencia",
    title: "Tecnología Vactor: Succión de alta potencia para pozos sépticos y trampas",
    excerpt:
      "Conozca cómo funcionan los camiones Vactor y por qué son la solución más eficiente para la limpieza de pozos y trampas de grasa.",
    date: "2024-02-05",
    category: "Tecnología",
    image: "/images/camion-vactor-mantenimiento-drenajes.png",
    keywords: [
      "vactor",
      "camión vactor",
      "succión alta potencia",
      "pozos sépticos",
      "trampas de grasa",
      "Vac-Con",
      "limpieza industrial Bogotá",
    ],
    whatItMeans:
      "Un camión Vactor (o Vac-Con) es un equipo de succión por vacío de alta potencia montado sobre un chasis, usado para extraer lodos, grasas y residuos de pozos sépticos, trampas de grasa, redes de alcantarillado y plantas de tratamiento. Combina succión y en muchos casos hidrolavado (hidrojet), lo que permite desobstruir y limpiar en una sola visita. Es la tecnología estándar para limpieza industrial y municipal.",
    howWeDoIt: [
      {
        title: "Llegada del equipo Vactor",
        description:
          "Desplazamos nuestros camiones Vac-Con a su ubicación en Bogotá o Colombia. Equipos de succión de alta capacidad para pozos sépticos y trampas de grasa.",
        image: "/images/camion-vaccon-eco-limpieza-bogota.png",
      },
      {
        title: "Succión y, si aplica, hidrojet",
        description:
          "Extraemos lodos y residuos con succión por vacío. En redes obstruidas complementamos con hidrojet de alta presión para destapar tuberías.",
        image: "/images/operador-bombeo-pozos-septicos.png",
      },
      {
        title: "Transporte y disposición legal",
        description:
          "Los residuos se transportan a sitios autorizados. Entregamos documentación para trazabilidad ante la Secretaría de Ambiente.",
        image: "/images/camion-vactor-mantenimiento-drenajes.png",
      },
    ],
    galleryImages: [
      "/images/camion-vactor-mantenimiento-drenajes.png",
      "/images/camion-vaccon-eco-limpieza-bogota.png",
      "/images/camion-vactor-nocturno-iluminado.png",
    ],
    content: `
      <h2>La potencia de la succión por vacío: tecnología Vactor</h2>
      <p>Los equipos <strong>Vactor</strong> (marca <strong>Vac-Con</strong>) combinan la succión por alto vacío con lavado a presión. Esto permite remover sedimentos pesados y obstrucciones calcificadas que otros métodos no pueden tocar. En <strong>Bogotá</strong> y Colombia, <strong>Ecolimpieza Bogotá</strong> opera <strong>camiones vactor</strong> para <strong>limpieza de pozos sépticos</strong>, trampas de grasa y alcantarillado industrial.</p>
      
      <h3>Ventajas en el sector industrial</h3>
      <p>Desde la limpieza de plantas de tratamiento hasta el vaciado de subestaciones eléctricas inundadas, la versatilidad de los <strong>camiones vactor</strong> es incomparable. Servicios de <strong>succión de alta potencia</strong> con disposición final certificada.</p>
      
      <ul>
        <li>Succión de lodos espesos y grasas.</li>
        <li>Limpieza de tuberías de gran diámetro.</li>
        <li>Disposición final certificada y trazable.</li>
      </ul>
      
      <p>¿Necesita vaciado de <strong>pozos sépticos</strong> o limpieza de <strong>trampas de grasa</strong>? Contáctenos por WhatsApp para cotización inmediata de servicios con <strong>vactor</strong> en Bogotá.</p>
    `,
  },
  {
    slug: "gestion-residuos-liquidos-peligrosos-bogota",
    title: "Gestión de residuos líquidos y peligrosos en Bogotá",
    excerpt:
      "Normatividad vigente y procedimientos seguros para la recolección y transporte de residuos industriales.",
    date: "2024-02-12",
    category: "Legal",
    image: "/images/operacion-limpieza-alcantarillado-calle.png",
    keywords: [
      "gestión residuos líquidos",
      "residuos peligrosos Bogotá",
      "Secretaría de Ambiente",
      "disposición legal",
      "manifiesto residuos",
      "Ecolimpieza Bogotá",
    ],
    whatItMeans:
      "La gestión de residuos líquidos y peligrosos en Bogotá es el conjunto de actividades de recolección, transporte y disposición final que cumplen con la normativa de la Secretaría de Ambiente. Incluye manifiestos de transporte, autorizaciones y trazabilidad hasta el sitio de tratamiento o disposición. Vertir o transportar sin estos requisitos acarrea sanciones económicas y penales.",
    howWeDoIt: [
      {
        title: "Recolección con equipos certificados",
        description:
          "Succión y transporte de residuos con camiones vactor y cisternas que cumplen requisitos ambientales para Bogotá y Colombia.",
        image: "/images/camion-vactor-servicios-eco-limpieza.png",
      },
      {
        title: "Documentación y cadena de custodia",
        description:
          "Emitimos manifiestos y registros para que su empresa cumpla con la Secretaría de Ambiente y auditorías.",
        image: "/images/equipo-limpieza-vaccon-operacion.png",
      },
      {
        title: "Disposición en sitios autorizados",
        description:
          "Los residuos se llevan a plantas de tratamiento o sitios de disposición autorizados, con trazabilidad completa.",
        image: "/images/operador-bombeo-pozos-septicos.png",
      },
    ],
    galleryImages: [
      "/images/operacion-limpieza-alcantarillado-calle.png",
      "/images/operador-bombeo-pozos-septicos.png",
    ],
    content: `
      <h2>Cumplimiento con la Secretaría de Ambiente en Bogotá</h2>
      <p>En <strong>Bogotá</strong>, el vertido ilegal de residuos puede acarrear sanciones millonarias. Es vital contar con un aliado que provea <strong>manifiestos de disposición legal</strong> y <strong>gestión de residuos líquidos</strong> conforme a la normativa. <strong>Ecolimpieza Bogotá S.A.S</strong> garantiza la <strong>trazabilidad</strong> de cada carga.</p>
      
      <h3>Cadena de custodia de residuos</h3>
      <p>Nuestro proceso asegura que desde el punto de succión hasta la planta de tratamiento final, los <strong>residuos industriales</strong> sean manejados bajo estrictos protocolos. Incluye documentación para auditorías y cumplimiento ante la <strong>Secretaría de Ambiente</strong>.</p>
      
      <p>¿Necesita <strong>gestión de residuos peligrosos</strong> o líquidos en Bogotá? Contáctenos por WhatsApp para cotizar el servicio con documentación legal incluida.</p>
    `,
  },
  {
    slug: "emergencias-hidrosanitarias-24-7-que-hacer",
    title: "Emergencias hidrosanitarias 24/7: ¿Qué hacer ante una inundación o taponamiento?",
    excerpt:
      "Guía rápida de acción ante desbordamientos y fallas críticas en sistemas de alcantarillado. Respuesta inmediata en Bogotá.",
    date: "2024-02-20",
    category: "Emergencias",
    image: "/images/equipo-limpieza-vaccon-operacion.png",
    keywords: [
      "emergencias hidrosanitarias",
      "inundación alcantarillado",
      "taponamiento 24/7",
      "vactor emergencia",
      "Bogotá",
      "respuesta rápida",
    ],
    whatItMeans:
      "Una emergencia hidrosanitaria es un evento que pone en riesgo la operación o la salud: desbordamiento de alcantarillado, taponamiento crítico, inundación de sótanos o parqueaderos por falla de redes. Requiere respuesta rápida con equipos de succión (vactor), hidrojet o bombeo. Un proveedor 24/7 evita daños mayores y permite reanudar la operación en menos tiempo.",
    howWeDoIt: [
      {
        title: "Llamada y coordinación inmediata",
        description:
          "Al contactarnos por WhatsApp o teléfono, coordinamos la salida del equipo más cercano para emergencias en Bogotá y alrededores.",
        image: "/images/camion-limpieza-nocturno-bogota.png",
      },
      {
        title: "Llegada con equipo vactor o hidrojet",
        description:
          "Desplazamos camiones de succión o hidrolavado según el tipo de emergencia: desatasque, bombeo o limpieza de redes.",
        image: "/images/camion-vactor-nocturno-iluminado.png",
      },
      {
        title: "Solución y recomendaciones",
        description:
          "Resolvemos la contingencia y le entregamos recomendaciones para evitar futuras emergencias hidrosanitarias.",
        image: "/images/equipo-limpieza-vaccon-operacion.png",
      },
    ],
    galleryImages: [
      "/images/camion-limpieza-nocturno-bogota.png",
      "/images/camion-vactor-nocturno-iluminado.png",
      "/images/equipo-limpieza-vaccon-operacion.png",
    ],
    content: `
      <h2>Primeros pasos ante una emergencia hidrosanitaria</h2>
      <p>Lo primero es la seguridad: desconecte fuentes eléctricas cercanas al área afectada y evite el contacto directo con aguas negras. Luego contacte a un proveedor de <strong>servicios de vactor e hidrojet 24/7</strong> en <strong>Bogotá</strong>. <strong>Ecolimpieza Bogotá</strong> atiende <strong>emergencias hidrosanitarias</strong> con respuesta inmediata.</p>
      
      <h3>Llamado a expertos técnicos</h3>
      <p>Contamos con equipos de respuesta rápida para atender inundaciones en sótanos, parqueaderos y áreas industriales. Servicios de <strong>desatasque</strong>, bombeo y <strong>limpieza de alcantarillado</strong> con <strong>camiones vactor</strong> disponibles las 24 horas.</p>
      
      <p><strong>¿Emergencia ahora?</strong> Escríbenos por WhatsApp para movilizar un equipo de inmediato. Cotización y atención <strong>24/7</strong> en Bogotá y zona metropolitana.</p>
    `,
  },
];

export { WHATSAPP_NUMBER, WHATSAPP_URL, whatsappCtaText };
