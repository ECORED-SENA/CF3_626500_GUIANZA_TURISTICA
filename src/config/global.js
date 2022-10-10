export default {
  global: {
    componenteFormativo: 'El servicio guiado',
    descripcionCurso:
      'Mediante este componente, el aprendiz apropiará procesos y técnicas para establecer una óptima interacción con el cliente. Se afianzará en técnicas de guianza con herramientas para desarrollar eficientemente la comunicación y negociación, necesarias para la venta. Conocerá las condiciones del guía en ejercicio profesional, las acciones sostenibles del servicio y orientación a la calidad y al cuidado de los entornos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunicación asertiva en la guianza',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de manejo según conductas del usuario',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manejo de conflictos y técnicas de negociación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Condiciones del servicio guiado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Facilidades turísticas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características físicas del lugar por visitar',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Principio “No dejar rastro”',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Procedimientos en caso de emergencia',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Elaboración de itinerarios',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recomendaciones sobre los servicios de guionaje contratados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Marco legal del turismo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Políticas nacionales de turismo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Prevención de la Explotación Sexual Niños, Niñas y Adolescentes - Escnna',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Características físicas del lugar por visitar',
      referencia:
        'Mahiques, J. (2013). <em>La metereología: Conceptos básicos al alcance de todos</em>.',
      tipo: 'Artículo sobre conceptos básicos de meteorología',
      link:
        'https://www.3ciencias.com/wp-content/uploads/2013/06/METEREOLOGIA.pdf',
    },
    {
      tema: 'Elaboración de itinerarios',
      referencia:
        'IGNSpain. (2019). <em>Instituto Geográfico Nacional - Lectura de un mapa</em>.',
      tipo: 'Video: Lectura de un mapa',
      link: 'https://www.youtube.com/watch?v=kx2Bit8te1s',
    },
    {
      tema: 'Elaboración de itinerarios',
      referencia:
        'Tips educativos mx. (2020). <em>Los mapas y sus elementos</em>.',
      tipo: 'Video: Los mapas y sus elementos',
      link: 'https://www.youtube.com/watch?v=Mad8refpcw4',
    },
  ],
  glosario: [
    {
      termino: 'Analizar',
      significado:
        'acción intelectual de los seres humanos y que implica la legalización de un análisis detallado sobre determinado asunto de interés, para conocer sus características, estado, cualidades o extraer conclusiones.',
    },
    {
      termino: 'Conducta',
      significado:
        'conjunto de las acciones con las que un ser vivo responde a una situación.',
    },
    {
      termino: 'Contingencia',
      significado:
        'suceso que puede suceder o no, especialmente un problema que se plantea de forma imprevista.',
    },
    {
      termino: '<em>Check in</em> o <em>check out</em> de alojamiento',
      significado:
        'ambos términos provienen del inglés y hacen referencia a la entrada (<em>check in</em>) y la salida (<em>check out</em>).',
    },
    {
      termino: 'Experiencia turística',
      significado:
        'articulación de bienes y servicios para involucrar directamente al visitante, de allí que se promuevan actividades que integran los sentidos para intensificar la vivencia, incorpora una narrativa que se instruye a partir de la interpretación, apela a dimensiones humanas como la intelectual, social, espiritual o emocional para aumentar la memorabilidad.',
    },
    {
      termino: 'Interpretación',
      significado:
        'acción de ordenar y expresar hechos, sucesos, fenómenos o temas complejos de tal manera que sean entendidos por distintos públicos.',
    },
    {
      termino: 'Negociación',
      significado:
        'proceso mediante el cual dos o más partes resuelven un asunto sobre el que pueden tener intereses, necesidades o deseos diversos u opuestos.',
    },
    {
      termino: 'Registro nacional de Turismo - RNT',
      significado:
        'mecanismo de identificación y regulación de los prestadores de servicios turísticos, así mismo, es un sistema de información para el sector turístico. A partir de esta información el Ministerio de Comercio, Industria y Turismo de Colombia elabora estudios e indicadores sobre el comportamiento del sector turístico a nivel nacional e internacional que permiten la definición de políticas, planes y programas. También, dirige la elaboración de estudios y propone estrategias tendientes a mejorar el acceso al crédito y el financiamiento del sector turístico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Benítez, G. (2012). <em>Trabajo en equipo. Programa guianza turística</em>. SENA.',
      link: '',
    },
    {
      referencia:
        'Bisquerra, R. (s.f.). <em>Autonomía emocional</em>. Rafaelbisquerra. ',
      link: '',
    },
    {
      referencia:
        'Clement, A. (2011). <em>El arte de delegar. Pasos para ser líder</em>. ',
      link: '',
    },
    {
      referencia:
        'Consultoría & Servicio Andaluz de Empleo. (2018). <em>Materiales didácticos. Curso guía de ruta</em>. FIR. ',
      link: '',
    },
    {
      referencia:
        'Corrales, A., Quijano, N., y Góngora, E. (2017). Empatía, comunicación asertiva y seguimiento de normas. Un programa para desarrollar habilidades para la vida. <em>Enseñanza e Investigación en Psicología, 22(1), p. 58-65</em>. ',
      link: 'https://www.redalyc.org/pdf/292/29251161005.pdf',
    },
    {
      referencia:
        'Elempleo.com. (2000). <em>Los 10 mandamientos de un líder</em>. El empleo. ',
      link:
        'http://www.elempleo.com/co/noticias/tendencias-laborales/los-10-mandamientosde-un-lider-1464',
    },
    {
      referencia:
        'Fundación Naturaleza y Patrimonio. (2020). Metodología no deje rastro. <em>“De todos depende preservar los espacios naturales”</em>. ',
      link: '',
    },
    {
      referencia:
        'Goena, A. (2015). <em>La inteligencia emocional y su impacto en el liderazgo</em>. Repositorio Universidad Comillasa. ',
      link:
        'https://repositorio.comillas.edu/jspui/bitstream/11531/4518/1/TFG001308.pdf',
    },
    {
      referencia:
        'Kotler, P. (1997). <em>Mercadotecnia para hotelería y turismo</em>. Editorial Prentice-Hall Hispanoamericana. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2016). <em>Normas técnicas sectoriales</em>. MinComercio. ',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
    },
    {
      referencia:
        'Ministerio de Transporte. (2015). <em>Reglamentación del FUEC</em>. MinTransporte. ',
      link:
        'https://web.mintransporte.gov.co/jspui/bitstream/001/2002/1/FUEC%20(1).pdf',
    },
    {
      referencia: 'Oxford Languages. (2021). <em>Diccionario de español</em>. ',
      link: 'https://languages.oup.com/google-dictionary-es/',
    },
    {
      referencia:
        'Sánchez, M. (1986). <em>Derecho turístico colombiano</em>. Universidad Externado de Colombia. ',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2008). <em>Material de formación tecnólogo en guianza</em>. Comunicación asertiva. SENA.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Turismo & Subdirección de Desarrollo. (2016). <em>Manual de diseño de experiencias turísticas</em>. Sernatur. ',
      link: '',
    },
    {
      referencia:
        'Tartakovsky, M. (s.f.). <em>La asertividad se construye en la infancia: 5 pasos para conseguirlo</em>. Comunicación Positiva. ',
      link:
        'https://cuentosparacrecer.org/blog/la-asertividad-se-construye-en-la-infancia-5-pasos-para-conseguirlo/',
    },
    {
      referencia:
        'Weisinger, H. (1998). <em>Emotional intelligence at work</em>. Jossey-Bass. ',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Villamizar Rivera',
        cargo: 'Experta temática',
        centro: 'Centro Nacional de Hotelería - Regional Distrito Capital',
      },
      {
        nombre: 'Claudia Porras',
        cargo: 'Experta temática',
        centro: 'Centro Nacional de Hotelería - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Metodóloga',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Aandres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Amortegui Garcia',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
