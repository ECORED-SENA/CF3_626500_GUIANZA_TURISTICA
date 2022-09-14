<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comunicación asertiva en la guianza
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.jpg')
      .col-lg-6
        p Desde la óptica de la guianza turística, la comunicación debe entenderse como #[b poner en común o compartir información, historia, sucesos, orígenes]. Es decir, el comunicador no solo transmite palabras, también un estado de ánimo, un sentimiento, el asombro, características, crisis y otras situaciones, guardando las proporciones de cada una.
        .cajon.color-secundario.p-4
          p Hubo tres hechos durante el Renacimiento que dieron lugar a cambios ideológicos, promovieron la libertad y la relación del ser humano con la naturaleza y que, además, fueron fundamentales para que luego se desarrollara la industria turística.
          p.mb-0 En realidad, estos tres hechos, fueron excelente referente para iniciar al turismo a partir del inicio del desligue de la Iglesia como fuente de todo, a la consideración de que el ser humano puede pensar libremente y ser bueno y la lucha del mismo por sus derechos fundamentales.
    p Se debe tener en cuenta que, desde el punto de vista de lo comunicativo, el guía turístico asume algunas responsabilidades que van más allá de solo acompañar un grupo; por ello se resaltan las siguientes:
    .row.bg-color4
      .col-12.p-5
        SlyderB(:datos="datosSlyder")
    p.mb-5 Como es sabido, la comunicación puede clasificarse en verbal, escrita, no verbal, entre otras; en la guianza turística estos tipos de comunicación adquieren mucha importancia, dados los impactos que, sobre los grupos de personas guiadas, pueden ocasionar:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          p(numero="1" titulo="Comunicación verbal u oral") Se trata del tipo de comunicación que se logra establecer entre varias personas (dos o más). En ella se usa algún idioma o código que puede compartirse mediante algún medio o instrumento físico de transmisión.
          p(numero="2" titulo="Desarrollo de la comunicación verbal") Se puede desarrollar de manera directa con el visitante mediante conversación, telefonía, videoconferencia, etc. Una de las acciones donde más se lleva a cabo es cuando se muestra, presencialmente, un atractivo turístico.
          p(numero="3" titulo="Comunicación escrita") Se establece mediante el uso de palabras escritas o cualquier otro tipo de código de escritura. Tanto el emisor como el receptor han de compartir el conocimiento del código en mención, solo con este requisito cumplido será más efectiva y práctica la comunicación. En la comunicación escrita, generalmente, el emisor escribe mientras que el receptor lee.
          p(numero="4" titulo="La comunicación no verbal") Se refiere a la acción de comunicar sin hablar y se asocia a la inteligencia emocional, se establece mediante gestos, movimientos, expresiones faciales, proximidad y sonidos sin palabras. También mediante imágenes o  videos que logran comunicar asertivamente.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img17.jpg')
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img18.jpg')
      .col-lg
        .row
          .col-12
            p Para el ejercicio de la guianza turística, los guías deben fortalecer y formar, permanentemente, sus habilidades comunicativas:
            ul.lista-ul
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |  Pronunciación correcta de nombres, lugares, datos, etc.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |  Aprendizaje de varios idiomas.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |  Moderación y modelación de sus movimientos corporales y gestualidad en general.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |  Actualización de su presentación personal.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                |  Adecuación del trato con las personas según edades, procedencias, intención de la visita o actividad.
              li 
                i.fas.fa-angle-right(style="color: #FF6D4B")
                | Otras.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El guía, además de ser un buen comunicador, debe tener la habilidad de hacerlo asertivamente, de tal modo que configure una postura personal, en términos de actitud espontánea, positiva, motivadora, persuasiva, cuando se relacione con las demás personas, especialmente los clientes del servicio turístico.
    p Aquí es necesario enterarse de los aspectos más importantes que la comunicación asertiva ofrece a la labor del guía turístico; se recomienda llevar el registro de los mismos en una libreta personal de apuntes:
    .row.bg-color5
      .col-12.p-5
        .row.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img6.jpg')
          .col-lg-6
            LineaTiempoD.color-primario
              p(numero="1" titulo="Optimizar relaciones con el cliente") El guía expresa cualquier tipo de opinión o valoraciones sobre lugares, costumbres, personas, etc., evitando descalificar, reprochar o enfrentar; de esta manera, favorecerá un camino más adecuado y efectivo para la interacción y comunicación, a la vez que optimizará las relaciones.
              p(numero="2" titulo="Comprensión de otras miradas") El guía no se concentra, únicamente, en exponer y reforzar lo que piensa, sino que demuestra que comprende otras necesidades, miradas y sentidos (empatía). Es una manera muy veraz de ser responsable de sus emociones y conectar con los demás.
              p(numero="3" titulo="Transferencia efectiva") Transmitir con efectividad y precisión, un mensaje; incluyendo los que representan un reto. Ello ocupa el control emocional, claridad de ideas, hablar fluidamente, mantener contacto visual no intimidante o amenazante, comodidad en su postura, tonos de voz moderados y controlados, gestualidad justa, entre otras.
        p.mb-5 En cuanto al pensamiento y emoción, la comunicación asertiva se manifiesta de la siguiente forma:
        .row
          .col-12.p-4.bg-color6.shadow-sm
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 1]. Características de la comunicación asertiva
            .row.justify-content-center.mb-5
              .col-lg-10
                figure
                  img(src='@/assets/curso/tema1/img12.svg')
                  figcaption.mt-5 Nota. Elaborada con base en Tartakovsky (s. f.).
            p.mb-5 Se presentan algunos logros destacados del uso y aplicación de una comunicación asertiva en la labor de la guianza turística:
            .row.justify-content-center.align-items-center
              .col-lg-9.mb-4.mb-lg-0
                .row
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img14.svg')
                    h4.text-center Confianza
                    p.text-center.mb-0 Seguridad de lograr buena comunicación.
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img15.svg')
                    h4.text-center Conocimiento
                    p.text-center.mb-0 Saberes que permiten lograr cometidos.
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img16.svg')
                    h4.text-center Empatía
                    p.text-center.mb-0 Capacidad para ubicarse en los zapatos de otro.
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img17.svg')
                    h4.text-center Fe
                    p.text-center.mb-0 Creer en uno mismo y en el otro.
                .row
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img18.svg')
                    h4.text-center Colaboración
                    p.text-center.mb-0 Engranajes que permiten alcanzar las metas.
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img19.svg')
                    h4.text-center Transparencia
                    p.text-center.mb-0 Sinceridad en la manifestación de ideas.
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img20.svg')
                    h4.text-center Humildad
                    p.text-center.mb-0 Identificar las propias limitaciones.
                  .col-lg.bg-color7.p-3.m-2
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img21.svg')
                    h4.text-center Reconocimiento
                    p.text-center.mb-0 Valoración del otro en todas sus dimensiones.
              .col-8.col-lg-3
                figure
                  img(src='@/assets/curso/tema1/img7.jpg')
        Separador
        #t_1_1
        .titulo-segundo.color-acento-contenido
          h2 1.1 Técnicas de manejo según conductas de usuarios
        p La diversidad de grupos a los que un guía turístico puede enfrentarse hace que la guianza sea una acción siempre distinta, aunque esencialmente conserve todos los esquemas y mecanismos técnicos para su ejecución. Cada grupo de personas que visite un lugar o participe de alguna actividad guiada, presentará algunas conductas que podrían ser impactadas, profesionalmente, por el guía, para una mejor experiencia.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La diversidad de grupos a los que un guía turístico puede enfrentarse hace que la guianza sea una acción siempre distinta, aunque esencialmente conserve todos los esquemas y mecanismos técnicos para su ejecución.
          br
          br
          | Cada grupo de personas que visite un lugar o participe de alguna actividad guiada, presentará algunas conductas que podrían ser impactadas, profesionalmente, por el guía, para una mejor experiencia.
    p.mb-5 En el siguiente elemento, se dan a conocer y analizar las técnicas de manejo, según las conductas de los usuarios:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OfredOc06_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Existe una serie de conductas que los usuarios de los servicios turísticos podrían adoptar en determinadas situaciones, las cuales favorecen o perjudican el servicio mismo. Es clave que el guía de turismo potencie, permanentemente, su habilidad para identificar tales conductas o acciones y esté preparado para el adecuado tratamiento.
    p.mb-5 Se pueden catalogar algunos de los arquetipos comunes durante un servicio guiado, como se presentan en el siguiente recurso:
    .row.justify-content-center
      .col-lg-10
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="El negociador")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img9.jpg')
            .col
              p.mb-0 Cliente, ocasionalmente complicado y exigente; buscará negociar una evolución, un descuento, obtener beneficios, provechos. Se necesita hacerle sentir que ha obtenido algo más que los usuarios del servicio. Si se le concede, no será un beneficio tan simple y pequeño (que no le genere la satisfacción que espera) ni tan grande, que genere gastos o desequilibrios en el servicio mismo.
          .row.justify-content-center(numero="2" titulo="Para aplicar con el cliente negociador")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img10.jpg')
            .col
              p.mb-0 Es importante, y mucho, ofrecerle argumentos que den cuenta de las negativas que resulten de sus solicitudes o pedidos; aun así, aplica ofrecerle opciones alternas que sí sean posibles. Es clave explicarle lo esencial del trabajo del guía y que este no se funda en negociar con clientes, sino en atenderle. Por tanto, se le informa que, si considera, puede comunicarse con la agencia o proveedor, de manera directa, en el caso de un servicio turístico.
          .row.justify-content-center(numero="3" titulo="El técnico o sabelotodo")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img11.jpg')
            .col
              p.mb-0 Quiere demostrar sus conocimientos. Hará preguntas con respuesta incluida, le interesa más demostrar que aprender. La mejor política es usarlos como aliados; nada más fácil que alabar su vanidad para caerles bien. Si en algún momento, a pesar de la adulación, deciden jugar en contra del guía habrá que neutralizarlos, poniéndolos en evidencia ante el grupo.
          .row.justify-content-center(numero="4" titulo="Profesional en reclamación")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img12.jpg')
            .col
              p.mb-0 Por experiencia negativas pasadas, busca defectos en lugar de valorar cualidades. Tiene necesidad de ser líder; requiere público que escuche y aplauda sus reclamaciones. Como guía, concédale algo de importancia, brinde las explicaciones que solicite, procure desautorizar sus críticas cuando disponga de argumentos contundentes para que no logre adeptos entre los usuarios. Es importante mantener el buen sentido del humor.
          .row.justify-content-center(numero="5" titulo="El exigente")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img13.jpg')
            .col
              p.mb-0 Es un tipo de cliente agradecido con los/las guías. Es más ecuánime felicitando al guía por su trabajo; sus reclamaciones generalmente están cargadas de razón y no pretende convencer a otros clientes del grupo, solo requiere escuchar una buena argumentación para solventar malentendidos.
          .row.justify-content-center(numero="6" titulo="El extrovertido")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img14.jpg')
            .col
              p.mb-0 Se caracteriza por ser jovial y dinámico, por lo que rápidamente se hace líder del grupo; es fácil contar con su colaboración, incluso en las actividades de animación puede ser un gran aliado y, además, acepta de buen agrado las sugerencias del guía, hasta cambios inesperados justificados. Es clave que el guía no abuse de su confianza.
          .row.justify-content-center(numero="7" titulo="El introvertido o silencioso")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img15.jpg')
            .col
              p.mb-0 Permanece callado, por lo que no se sabe qué está pensando. Puede ser una persona susceptible y que se ofende fácilmente, por ello es importante conversar con él para que sienta que el/la guía se da cuenta de su presencia, de su opinión, de que él es también importante y que se está atento a sus requerimientos.
          .row.justify-content-center(numero="8" titulo="El desenfocado")
            .col-8.col-lg-auto.my-4.my-lg-0
              figure
                img(src='@/assets/curso/tema1/img16.jpg')
            .col
              p.mb-0 Puede ocupar al guía durante horas hablando de su familia, su último viaje, de política. El guía, cortésmente deberá dirigirlo hacia otras personas del grupo. Sus preguntas normalmente solo tienen interés para él e intentará, por todos los medios, generar conversación con el guía. El guía, en ocasiones extremas y cuando la guianza lo permita, podría colocarse los auriculares, hacer una llamada, etc., esto podría mostrarle que no está disponible para oír sus comentarios.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Manejo de conflictos y técnicas de negociación
    p.mb-5 Un buen guía es capaz de detectar, con facilidad, si existe algún tipo de conflicto en un grupo y debe contar con estrategias de negociación para resolverlos. Un conflicto se puede definir como el tropiezo que hay, o puede haber, entre dos o más partes (personas, posturas, ideas, enunciados, etc.). Por lo general, los conflictos se presentan cuando las personas o partes implicadas tienen una percepción distinta sobre un mismo asunto, tema, situación o realidad.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Un buen guía es capaz de detectar, con facilidad, si existe algún tipo de conflicto en un grupo y debe contar con estrategias de negociación para resolverlos. Un conflicto se puede definir como el tropiezo que hay, o puede haber, entre dos o más partes (personas, posturas, ideas, enunciados, etc.).
          br
          br
          | Por lo general, los conflictos se presentan cuando las personas o partes implicadas tienen una percepción distinta sobre un mismo asunto, tema, situación o realidad.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-5.col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img22.svg')
            .col-lg
              p.mb-0 Lo diferente de tales percepciones pueda originar, también, concertaciones o conciliaciones que, en potencia, traerán soluciones apropiadas y convenientes a las partes.
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img21.jpg')
      .col-lg
        .tarjeta.tarjeta--azul.p-5
          SlyderA
            .row
              .col-12.p-4
                h4 Técnica de negociación
                p.mb-0 Las técnicas de negociación son un conjunto de métodos, o estrategias, que permite llegar a obtener el mejor resultado posible para las partes involucradas en un asunto o conflicto determinado.
            .row
              .col-12.p-4
                h4 Proceso de negociación
                p.mb-0 El proceso de negociación requiere de la valoración de todas las variantes que influyen, como las necesidades de las personas implicadas, las condiciones del conflicto o el poder de negociación de cada una de ellas.
    p.mb-5 Para resolver un conflicto se necesita aprender a escuchar lo que los demás necesitan expresar. Sin la escucha activa, no se puede negociar. Para ello, es determinante lograr el desarrollo de la empatía y algunas tácticas como las que, a continuación, se explican:
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul1
            .p-4
              h4 Mediación
              p Proceso de intervención no adjudicativo en el que un interventor neutral ayuda a las partes en conflicto a lograr un acuerdo que les resulte mutuamente satisfactorio.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul1
            .p-4
              h4 Técnica de la estrategia
              p En este caso, las partes implicadas están dispuestas a ayudar a que todas puedan salir ganando. Debe diseñarse una estrategia que se adapte a cada situación y sea favorable para todos los implicados. Por ejemplo, tratar primero aquellos puntos sobre los que sea más fácil ponerse de acuerdo.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul1
            .p-4
              h4 Técnica de persuasión
              p Si se cuenta con toda la información necesaria, se podrá convencer con mayor facilidad e influenciar a la contraparte con mensajes.
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul1
            .p-4
              h4 Adaptación a los cambios
              p Ser capaz de adaptarse a los cambios que vayan surgiendo durante el proceso de negociación. Por último, proyectar una imagen seria, profesional y que transmita confianza.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    datosSlyder: [
      {
        titulo: 'Transfiere la realidad pasada y presente',
        texto:
          'El guía de turismo cumple la misma función que, antiguamente, tenían los sabios o ancianos de la comunidades: mostrar y propiciar la conservación de las tradiciones, el aprendizaje de los modos de trabajo, el significado de las celebraciones y las dinámicas de los ecosistemas.',
        imagen: require('@/assets/curso/tema1/img2.jpg'),
      },
      {
        titulo: 'Fortalecen las identidades',
        texto:
          'Son los guías de turismo los que con su curiosidad reconocen aspectos sociales, culturales y ambientales y los ponen en conocimiento de propios y visitantes.',
        imagen: require('@/assets/curso/tema1/img3.jpg'),
      },
      {
        titulo: 'Promueven la experiencia amable en el lugar',
        texto:
          'Los guías deben manejar un buen nivel de comunicación para mantener el interés de los turistas, solucionar los inconvenientes que se puedan presentar y negociar para solucionar los problemas de los turistas en el destino.',
        imagen: require('@/assets/curso/tema1/img4.jpg'),
      },
      {
        titulo: 'Es un comunicador por excelencia',
        texto:
          'El guía debe reconocer los diferentes tipos de comunicación y sus características aplicadas a cada situación, intención y necesidad. Ello será la gran herramienta para lograr sus fines en el servicio guiado.',
        imagen: require('@/assets/curso/tema1/img5.jpg'),
      },
    ],
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
