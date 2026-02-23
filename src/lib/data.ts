export type Category = 'vactor' | 'hidrojet' | 'cctv' | 'mantenimiento' | 'all';

export interface ProjectImage {
    id: string;
    title: string;
    category: Category;
    description: string;
    image: string;
    client: string;
    location: string;
}

export const projects: ProjectImage[] = [
    {
        id: '1',
        title: 'Limpieza de Alcantarillado Municipal',
        category: 'vactor',
        description: 'Succión mecánica de lodos y limpieza de tuberías de gran diámetro con equipo Vactor.',
        image: '/images/vactor-truck.jpg',
        client: 'Alcaldía Local',
        location: 'Bogotá, Suba'
    },
    {
        id: '2',
        title: 'Desobstrucción de Redes Industriales',
        category: 'hidrojet',
        description: 'Uso de hidrojet a alta presión para remover incrustaciones de grasa en planta de alimentos.',
        image: '/images/vactor-blue.jpg',
        client: 'Planta Alquería',
        location: 'Cajicá'
    },
    {
        id: '3',
        title: 'Inspección Robótica de Tubería',
        category: 'cctv',
        description: 'Diagnóstico por cámara CCTV para identificar fisuras en red contra incendios.',
        image: '/images/vactor-street.jpg',
        client: 'Centro Comercial Andino',
        location: 'Bogotá, Chapinero'
    },
    {
        id: '4',
        title: 'Mantenimiento de Trampas de Grasa',
        category: 'mantenimiento',
        description: 'Limpieza integral y disposición certificada de residuos orgánicos.',
        image: '/images/vactor-urban.jpg',
        client: 'Cadena de Restaurantes',
        location: 'Bogotá, Zona G'
    },
    {
        id: '5',
        title: 'Limpieza de Pozos Sépticos',
        category: 'vactor',
        description: 'Succión y transporte de lodos residuales en zona rural.',
        image: '/images/vactor-operation.jpg',
        client: 'Condominio Campestre',
        location: 'Villeta'
    },
    {
        id: '6',
        title: 'Corrección de Pendientes en Drenajes',
        category: 'mantenimiento',
        description: 'Ajuste de niveles y limpieza profunda de canales de recolección pluvial.',
        image: '/images/vactor-team.jpg',
        client: 'Parque Industrial',
        location: 'Funza'
    }
];
