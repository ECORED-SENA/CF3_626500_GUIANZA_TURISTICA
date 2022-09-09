<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Condiciones del servicio guiado
    p En la función de la conducción del grupo, el guía debe tener en cuenta el itinerario; específicamente, tiempo y movimiento del servicio, por ello, se requiere conocer las condiciones del servicio contratado. Y puede tener dos escenarios: uno, cuando el guía es el directo encargado de conectar con los servicios que ofreció la agencia de viajes que lo contrató y dos, la asesoría a los usuarios, el orden de las actividades y/o cuales realizar de acuerdo con los servicios que contrataron.
    p.mb-5 Para conducir y orientar al usuario es fundamental que el guía, antes de iniciar, realice las siguientes acciones:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          p(numero="1" titulo="Verificación de condiciones del servicio") Este principio se aplica para cualquier transacción desde un alquiler de un bien hasta comprar un producto, no solo en su servicio guiado.
          p(numero="2" titulo="Verificar otros servicios contratados o conexos") Debe indagar por los servicios anexos a la guianza, preguntar a su contratante (agencia de viajes, pasajero o empresa), sobre limitaciones de tiempo respecto a vuelos próximos, check in o check out del hotel y otros servicios que no estén incluidos.
          p(numero="3" titulo="Proceder informado") Debe reunir toda la información sobre números de los vuelos de los turistas o usuarios del servicio guiado, nombres de los alojamientos e instrucciones para llegar a ellos y servicios que requieran durante su acompañamiento.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img1.svg')
    .row.justify-content-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
          span Ejemplo orientador
          .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row
        .col-lg.mb-4.mb-lg-0
          p En un tour fuera de la ciudad, el grupo y su guía se encuentran con que hay mucho tráfico y retrasa el servicio dos horas. En medio del recorrido, los clientes informan que tienen vuelo en tres horas y que deben regresar al hotel para recoger su equipaje. Aunque el guía lo explique y evidencie que el retraso no es su culpa, habrá molestia por falta de información sobre las condiciones del tráfico y, además, por falta de sincronización de su parte con su agencia de viaje.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/img1.jpg')
    p En caso de estar contratado para un servicio que incluye alimentación, alojamiento, ingreso a museos u otros atractivos, el guía debe verificar que las condiciones de estos servicios coincidan con lo contratado, antes de iniciar el servicio guiado.
    p.mb-5 Para esto, debe prestar atención a:
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img2.svg')
      .col-lg
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Reservas de alojamiento que concuerden con las fechas y horarios de ingreso y la acomodación acordada con el usuario (en Colombia estos se dan en la franja del medio día a las 3 p. m.).
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Horarios de atractivos, museos u otros que estén relacionados con la guianza.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Alimentación, confirmando los menús especiales y las dietas de acuerdo con la solicitud de los usuarios, así como la hora precisa para la prestación del servicio.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Lista de documentación de los turistas del grupo: números de identificación, fichas médicas, seguros de viaje, autorizaciones a menores de edad, entre otros.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Revisión Botiquín: contar con los elementos necesarios y permitidos por ley para el uso adecuado de los mismos.
    p En caso de estar contratado para un servicio que incluye alimentación, alojamiento, ingreso a museos u otros atractivos, el guía debe verificar que las condiciones de estos servicios coincidan con lo contratado, antes de iniciar el servicio guiado.
    p.mb-5 Para esto, debe prestar atención a:
    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-6.col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img3.svg')
            .col-lg
              h4 ¡Atención!
              p.mb-0 Si el cliente solicita el servicio guiado y no cuenta con entradas a los atractivos y prefiere que el guía organice el itinerario o le asesore sobre el mismo, el guía deberá realizar trabajo de campo y/o recurrir a sus conocimientos sobre las características del lugar para construir su propuesta de servicio.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Facilidades turísticas
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Estas son el conjunto de bienes y servicios con que cuenta un destino turístico para satisfacer, suficientemente, las necesidades o requerimientos del turista o visitante; además, complementan los atractivos turísticos, permitiendo la permanencia y el disfrute de una estancia agradable.
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img4.svg')
      .col-lg
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Servicio de alojamiento: presta servicios de pernoctación.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Servicio de restaurantes: cuando se proporcione comida para ser consumida en el mismo establecimiento o en instalaciones ajenas.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Servicio de transporte: cuando se requiere efectuar desplazamientos dentro del destino.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Servicio de agenciamiento o mediación: para la prestación de cualquier tipo de servicios turísticos, los cuales pueden ser susceptibles a demanda por parte de usuarios de servicios turísticos.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Servicio informativo: cuando se favorece el conocimiento y apropiación de cierta información (sobre recursos, incluidos o no, otros servicios complementarios) a usuarios de servicios turísticos.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Servicios de eventos: preparación, desarrollo y conducción de eventos grupales y/o masivos (congresos, seminarios, convenciones, otros similares).
    .row.justify-content-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
          span Ejemplo orientador
          .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal2")
      .row
        .col-12
          p En Colombia la prestación de los servicios turísticos está reglamentada por la Ley General de Turismo la cual define que toda persona natural o jurídica domiciliada en Colombia o en el extranjero, que habitualmente directa o indirectamente, proporcione, preste, intermedie, contrate, comercialice, venda o reserve servicios turísticos es denominado “prestador de servicios turísticos”.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 2]. Clasificación de los prestadores de servicios turísticos, Ley 300 de 1996
        figure
          img(src='@/assets/curso/tema2/img5.svg')
          figcaption Nota. Tomada de la Ley 300 de 1996.
    p.mb-5 Los Prestadores de Servicios Turísticos (PST), en el territorio colombiano, tienen obligaciones y entre las más destacadas se encuentran:
    .row.justify-content-center
      .col-lg-10
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Cumplir con condiciones y requisitos")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema2/img3.jpg')
            .col
              p.mb-0 Que demuestren su capacidad técnica, operativa, financiera, de procedencia de capital y de seguridad al turista, así como los títulos o requisitos de idoneidad técnica o profesional correspondientes, de conformidad con la reglamentación que expida el Gobierno nacional para efectos de su inscripción en el Registro Nacional de Turismo.
          .row.justify-content-center(numero="2" titulo="Inscribirse en el RNT")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema2/img4.jpg')
            .col
              p.mb-0 El Registro Nacional de Turismo - RNT será obligatorio para el funcionamiento de dichos prestadores y deberá actualizarse anualmente en la cámara de comercio de la jurisdicción del establecimiento o centro de operación del servicio.
          .row.justify-content-center(numero="3" titulo="Ajustar publicidad e información")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema2/img5.jpg')
            .col
              p.mb-0 Ajustar sus pautas de publicidad a los servicios ofrecidos, en especial en materia de precios, calidad y cobertura del servicio. Además de suministrar la información que le sea requerida por las autoridades de turismo.
          .row.justify-content-center(numero="4" titulo="Cumplir la normatividad ambiental")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema2/img6.jpg')
            .col
              p.mb-0 Dar cumplimiento a las normas sobre conservación del medio ambiente tanto en el desarrollo de proyectos turísticos, como en la prestación de sus servicios.
          .row.justify-content-center(numero="5" titulo="Cumplir con las políticas Escnna")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema2/img7.jpg')
            .col
              p.mb-0 Políticas para prevenir la Explotación Sexual Comercial de Niños, Niñas y  Adolescentes - Escnna. Los prestadores de servicios turísticos y los establecimientos que presten el servicio de hospedaje no turístico también deberán adoptar, fijar en lugar público y actualizar cuando se les requiera, códigos de conducta eficaces que promuevan políticas de prevención de este tipo de explotación.
          .row.justify-content-center(numero="6" titulo="Conocimiento de infraestructuras y espacios")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema2/img8.jpg')
            .col
              p.mb-0 Por otro lado, debe conocer aspectos físicos del sitio a visitar y esto tendrá mayor relevancia si el servicio se va a realizar en espacio abiertos o en la naturaleza.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Características físicas del lugar a visitar
    p La identificación que haga el guía de las condiciones físicas del sitio por visitar es muy importante. Ello, porque se requiere tener en consideración todas las contingencias que se puedan presentar. Una de estas condiciones es el clima, que se define como las condiciones meteorológicas medias que caracterizan a un lugar determinado; se trata de una síntesis del tiempo atmosférico, obtenida a partir de estadísticas a largo plazo. 
    p.mb-5 Se invita a conocer más y mejor, los elementos meteorológicos a tener en cuenta, explorando el siguiente recurso:
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="50%" y="20%" numero="+")
            h5.mb-2 Presión atmosférica
            p Es numéricamente igual al peso de una columna de aire que tiene como base la unidad de superficie y como altura la de la atmósfera; se mide con el barómetro. La lectura barométrica se puede expresar en pulgadas de mercurio (inHg) o el pascal (Pa), que equivale a 3386,389 veces una inHg. Cuando el aire es seco, fresco y agradable la lectura del barómetro aumenta pero cuando cae repentinamente se avecina una tormenta.
          .tarjeta.color-acento-botones.p-3(x="80%" y="34%" numero="+")
            h5.mb-2 Temperatura
            p Grado o nivel térmico de un cuerpo o de la atmósfera. Las escalas de temperatura más comúnmente usadas son dos: Celsius y Fahrenheit. La vegetación espesa atenúa cambios de temperatura, porque contiene bastante agua, actuando como aislante en la transferencia de calor entre la Tierra y la atmósfera. Por otro lado, las regiones desérticas o áridas permiten grandes variaciones en la temperatura. Esta influencia climática tiene a su vez su propia variación diurna y estacional.
          .tarjeta.color-acento-botones.p-3(x="87%" y="67%" numero="+")
            h5.mb-2 Precipitación
            p Puede producirse por la caída directa de gotas de agua o de cristales de hielo que se funden, las gotas son mayores cuanto más alta está la nube que las forma y más elevada es la humedad del aire, ya que se condensa sobre ellas el vapor de las capas que van atravesando; la precipitación se mide con un aparato llamado pluviómetro. Se calcula midiendo el agua que cae sobre un metro cuadrado de superficie durante 24 horas y expresando esa cantidad en litros por metro cuadrado.
          .tarjeta.color-acento-botones.p-3(x="66%" y="93%" numero="+")
            h5.mb-2 Humedad
            p La atmósfera terrestre contiene cantidades variables de agua en forma de vapor. La mayor parte se encuentra en los cinco primeros kilómetros del aire, dentro de la troposfera, por  la evaporación que sucede por el calor solar y la temperatura propia de la Tierra.
          .tarjeta.color-acento-botones.p-3(x="34%" y="93%" numero="+")
            h5.mb-2 Humedad relativa
            p El vapor de agua se expresa como porcentaje de la cantidad máxima que puede contener el aire saturado a una determinada temperatura. Este porcentaje es conocido como humedad relativa. La niebla es un conjunto de minúsculas gotitas de agua que entorpecen la visibilidad y en realidad es una nube a nivel del suelo. Cuando la visibilidad está reducida a menos de 1 km se habla de niebla, pero si la visibilidad es superior a 1 km, pero menor que 10 km se la define como neblina.
          .tarjeta.color-acento-botones.p-3(x="14%" y="67%" numero="+")
            h5.mb-2 Vientos
            p Es una variable meteorológica, de la cual se mide la dirección y la intensidad. La dirección se determina con una veleta y permite identificar de dónde viene el viento. La velocidad se mide en unidades de distancias (millas, km) por unidad de tiempo (hora).
          .tarjeta.color-acento-botones.p-3(x="21%" y="36%" numero="+")
            h5.mb-2 Responsabilidad del guía de turismo
            p Es responsabilidad del guía de turismo, además de identificar las características del lugar a visitar, planear también las prácticas que generen el menor impactos negativos en los sitios donde se prestarán los servicios turísticos.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Principio “No dejar rastro”
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La importancia de dejar el lugar visitado en iguales o mejores condiciones de lo que se encontró, evitando el abandono de objetos personales, basuras, fuegos, etc., radica en que así se mitigará la huella de carbono que mundialmente se produce y que genera afectaciones incalculables al medio ambiente.
    p.mb-5 En el recurso que se presenta a continuación, se profundiza en los principios de No dejar rastro; se recomienda llevar registro de los aspectos más relevantes, en la libreta personal de apuntes:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/drG0fwxB52c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Procedimientos en caso de emergencia
    p.mb-5 Es responsabilidad de los guías de turismo establecer las medidas de control necesarias para proteger la seguridad y la salud de los turistas y el equipo de trabajo. Deben conocer las medidas, planes y controles existentes en los Planes de Acción o Plan General de Emergencias, propios de cada lugar por visitar.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En estos planes se definen las metas y objetivos, así como los procesos y los procedimientos que se espera desarrollar por cualquier tipo de incidente o de emergencia específica, en un lapso concreto; así mismo, se definen los recursos, servicios y suministros que se deban utilizar más los responsables de cada acción.
    p.mb-5 El guía de turismo debe entender la estructura organizacional para la atención de emergencias del lugar y, en caso de su activación, a qué lugar de esta estructura se debe integrar. Así, se deben tener en cuenta los planes que pueden llegar a ser aplicados en distintas emergencias:
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          p(numero="1" titulo="Plan General de Emergencia") Cada espacio visitado debe contar con un plan general de manejo emergencias. Este corresponde a la coordinación general en el desarrollo normal del lugar y, dada una emergencia, a planes de acción de logística, contra incendio, evacuación, atención médica y primeros auxilios, información pública, atención de afectados y de lugar.
          p(numero="2" titulo="VAS: Plan de Vigilancia, Acomodación y Seguridad") Corresponde a la gestión de salidas y entradas, manejo de filas y turnos, puestos de información, controles generales de acceso. si se presentan casos de emergencias, desarrollar el plan de evacuación y apoyar, si se requiere, los planes de primeros auxilios, seguridad de incendio.
          p(numero="3" titulo="Plan de Seguridad de Incendio") Es un módulo del plan de emergencia que instaura, a cargo del empresario, brigadas contra incendio, equipadas y entrenadas debidamente; estas brigadas actuarán en la primera respuesta para el control de incendios y emergencias relacionadas.
          p(numero="4" titulo="Plan de Evacuación") Son las acciones necesarias para detectar presencia de un riesgo que amenace la integridad de los asistentes y, como tal, comunicarles oportunamente la decisión de abandonar las instalaciones y facilitar su rápido traslado hasta un lugar que se considere seguro, desplazándose a través de lugares también seguros.
          p(numero="5" titulo="Plan de Atención Médica y Primeros Auxilios") Es un componente del Plan de Emergencia orientado a prestar a los afectados, atención prehospitalaria en el lugar de la actividad (ya sea en emergencia o desarrollo normal de la misma) y a posibilitar el traslado, de las que así lo requieran, a centros de atención especializada. En caso de Emergencia este plan opera mientras llega la ayuda institucional (principalmente secretaría de salud), y sirve de apoyo a esta cuando se haga presente en el lugar.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img10.jpg')
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img11.jpg')
      .col-lg-5
        LineaTiempoD.color-primario
          p(numero="6" titulo="Plan de Información Pública") Apartado del Plan de Emergencia que tiene como objeto manejar y orientar la información ofrecida y entregada al público, tanto en la actividad como antes de ella y después de ella. En emergencia, consiste en comunicar y extender a allegados, familias, medios o entes interesados, la información sobre el estado y ubicación de personas (esto de manera coordinada, centralizada y oportuna).
          p(numero="7" titulo="Plan de Atención Temporal de los Afectados - Refugio") Plan de Emergencia cuya finalidad es facilitar, en un área específicamente asignada para ello, la asistencia a las personas que por sus condiciones o características (niños, adultos mayores, personas en condición de discapacidad, etc.) que a raíz de la situación de emergencia requieren asistencia temporal mientras sus familiares o allegados se hacen cargo de ellos.
    p.mb-5 Otros planes de acción, de suma importancia, son:
    .row.justify-content-center
      .col-auto.mb-4.mb-lg-0
        a.boton.color-acento-contenido.indicador__container(@click="modal3 = true")
          span.text-center Plan de manejo
            br
            | de tránsito
          .indicador--click(v-if="mostrarIndicador")
      .col-auto.mb-4.mb-lg-0
        a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")
          span.text-center Plan de manejo de niños, discapacidad
            br
            | y adulto mayor
          .indicador--click(v-if="mostrarIndicador")
      .col-auto
        a.boton.color-acento-contenido.indicador__container(@click="modal5 = true")
          span.text-center Plan de integración
            br
            | del lugar
          .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal3")
      .row
        .col-12
          h4 Plan de manejo de tránsito
          p Se desarrolla, de manera exclusiva si el sitio o actividad genera algún tipo de afectación a la movilidad, o si ocasiona cualquier tipo de cierre vial (total o parcial), temporal o permanente.
    ModalA(:abrir-modal.sync="modal4")
      .row
        .col-12
          h4 Plan de manejo de niños, discapacidad y adulto mayor
          p En él se debe hacer especificación de tratamiento y zonas de ocupación exclusiva de niños, personas en situación de discapacidad o personas mayores (adulto mayor) durante la asistencia al lugar o actividad, antes de ella y después de ella. Así mismo, en caso de emergencia.
    ModalA(:abrir-modal.sync="modal5")
      .row
        .col-12
          h4 Plan de integración del lugar
          p El plan de integración del lugar corresponde a la articulación necesaria cuando la actividad se lleva a cabo en una zona de un sitio que cuente con planes de emergencia y contingencia.
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Elaboración de itinerarios
    p.mb-5 Después que el guía tiene claridad de los horarios y condiciones de los servicios conexos, debe diseñar el itinerario del servicio y generar la orden para el transporte terrestre; esto implica trazar la secuencia de los puntos en la trayectoria del servicio guiado, darla a conocer a su equipo de trabajo (conductor y proveedores), en lo posible en un mapa y marcar cada uno de los lugares que se visitarán.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Para los turistas deberá generar una versión de itinerario, más gráfica, que describa los lugares de interés que serán visitados, además les brindará datos importantes como hora y actividad, así el turista sabrá la hora de desayuno o cena, a qué hora visitar algún atractivo o se realizarán algunas actividades.
    p.mb-5 El siguiente recurso, muestra un ejemplo de itinerario y los pasos para elaborarlo. Se debe analizar e identificar la importancia de seguir cada paso en su elaboración:
    h4.mb-4 Elaboración de itinerarios
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Ejemplo de itinerario")
        .row
          .col-lg.mb-4.mb-lg-0
            h4 Ejemplo de itinerario
            p Se debe conocer el concepto de cartografía, esta es una forma de representar la superficie terrestre sobre una superficie plana, sin que haya deformaciones, es decir es una proyección de la superficie.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/img12.jpg')
      .py-3.py-md-4(titulo="Elaborar lista de actividades complementarias al servicio guiado")
        .row
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img13.jpg')
          .col-lg
            h4 Elaborar lista de actividades complementarias al servicio guiado
            ol.lista-ol
              li 
                span.text-bold 1.
                | Eventos, días festivos.
              li 
                span.text-bold 2.
                | Otras fiestas.
              li 
                span.text-bold 3.
                | Visitas a museos.
              li 
                span.text-bold 4.
                | Visitas a parques.
              li 
                span.text-bold 5.
                | Demás atracciones.
      .py-3.py-md-4(titulo="Trazar una ruta que abarque todos los lugares que proyecta a visitar")
        .row
          .col-lg.mb-4.mb-lg-0
            h4 Trazar una ruta que abarque todos los lugares que proyecta a visitar
            p Ruta que permita visitar cada uno de ellos de forma secuencial para aprovechar al máximo el tiempo. Por tanto, calcular cuánto tiempo tomará desplazarse de una a otra y cuánto tiempo permanecerá en cada punto. Puede conseguir mapas de los lugares que se quiere visitar, al igual que horarios de los servicios que presta.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/img14.jpg')
      .py-3.py-md-4(titulo="Representación cartográfica del itinerario")
        .row
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img15.jpg')
          .col-lg
            h4 Representación cartográfica del itinerario
            p Se debe conocer el concepto de cartografía, esta es una forma de representar la superficie terrestre sobre una superficie plana, sin que haya deformaciones, es decir es una proyección de la superficie.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-6.col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img3.svg')
            .col-lg.mb-4.mb-lg-0
              h4 ¡Atención!
              p.mb-0 En el servicio de transporte, verificar el Formato Único de Extracto del Contrato (FUEC), reglamentado por MinTransporte, que exige: número de FUEC, razón social de la empresa que presta el servicio, número de contrato, contratante, objeto de contrato, objeto de contrato, origen-destino, describiendo puntos intermedios del recorrido, y duración del contrato indicando su fecha de iniciación y terminación.
            .col-6.col-lg-auto
              figure
                img(src='@/assets/curso/tema2/img2.png')
    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema2/img6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Servicios de transporte
                  p.text-small Conozca algunos aspectos adicionales, de suma importancia, del proceso de itinerarios.
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
