import PDFArquitecturaDeLaInformacionAplicadaEnElDisenoDeUnRepositorioDeRecursosEducativosDeEstatistica from '@assets/pdf/publications/Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística.pdf'

export interface Publication {
  title: string
  publisher: string
  work_done_bies: string[]
  date_publication: string
  description: string
  slug: string
  write_all_the_information: string
  download_file: string
  type_publications: string[]
}

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
    publisher: 'Marta Cecilia Camacho Ojeda',
    work_done_bies: [
      'Johan Manuel Alvarez Pinta',
      'Juan Diego Eraso Muñoz',
      'Marta Cecilia Camacho Ojeda',
      'Mateo Jesus Cadena Cabrera',
      'Miguel Angel Rodriguez',
    ],
    date_publication: '2024-10-24',
    description:
      'En la educación superior, el acceso y la organización eficiente de material educativo es crucial para un aprendizaje efectivo, especialmente en la estadística. Los recursos educativos disponibles en línea a menudo son variados y no siempre se ajustan a las necesidades específicas de los estudiantes, lo que dificulta su aprendizaje. Por ello se propone desarrollar un repositorio que agrupe estos recursos de manera coherente y optimice su accesibilidad y usabilidad. Se implementarán principios de arquitectura de la información y se priorizan las necesidades del usuario, esto incluye, una interfaz intuitiva y mecanismos de búsqueda eficientes. Este enfoque proporciona una herramienta adecuada para el aprendizaje de la estadística. La evaluación del sistema se realizará desde la experiencia de usuario, con la participación de estudiantes, docentes y expertos en usabilidad, verificando la relevancia y efectividad del repositorio.',
    slug: 'arquitectura-de-la-información-aplicada-en-el-diseño-de-un-repositorio-de-recursos educativos-de-estadística',
    write_all_the_information: 'Al',
    download_file:
      PDFArquitecturaDeLaInformacionAplicadaEnElDisenoDeUnRepositorioDeRecursosEducativosDeEstatistica,
    type_publications: ['Articulo Largo'],
  },
]
