<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Recomendaciones sobre los servicios de guionaje contratados
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Es muy importante tomar en consideración los aspectos de contratación, pagos, fechas de disponibilidad y, en caso de inconvenientes con los turistas, devoluciones de dinero. Todo lo anterior debe quedar consignado en el contrato suscrito con el usuario.
          br
          br
          | Además, el #[b guía de turismo] debe tener un profundo conocimiento del lugar, haberlo visitado varias veces y conocer anécdotas o datos curiosos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-5
          .row.justify-content-center.align-items-center
            .col-lg.mb-4.mb-lg-0
              p.mb-0 El #[b guía de turismo deberá, entre otras responsabilidades], llevar un botiquín de primeros auxilios según el tipo de #[b turismo] que realice. Si es de aventura: cuerdas, cascos y botas; si es de avistamiento de aves: binoculares, libros, telescopios; y si es un #[i city tour]: folletos y también libros.
            .col-6.col-lg-auto
              figure
                img(src='@/assets/curso/tema3/img8.svg')
    p.mb-5 Estas son otras recomendaciones de suma importancia que los guías de turismo deben tener en cuenta y aplicar, de manera permanente, en su servicio:
    .row.bg-color13.mb-5
      .col-12.mb-4
        .row
          .col-lg.pb-5.pb-lg-0
            .row.align-items-center.pb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img12.svg')
              .col
                p.mb-0 Acordar la tarifa del servicio de acuerdo al tiempo, número de personas e idioma. Debe tener conocimiento de la documentación que utilizan los usuarios (turistas o viajeros).
            .row.align-items-center.py-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img13.svg')
              .col
                p.mb-0 Los #[b guías turísticos] deben ofrecer información completa, no reservarse ninguna arrojando solo lo básico.
            .row.align-items-center.pt-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img14.svg')
              .col
                p.mb-0 Los diferentes prestadores de servicios con quienes el guía contrato servicios, cumplen los tiempos, las tarifas, y ofrecen buen servicio.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img11.svg')
          .col-lg.pt-5.pt-lg-0
            .row.align-items-center.pb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img15.svg')
              .col
                p.mb-0 Los #[b guías de turismo] locales (de las propias comunidades) deben portar la credencial de la asociación a la que pertenecen; así mismo, los guías profesionales. Debe conocer a los operadores de servicios en los diferentes puntos del recorrido.
            .row.align-items-center.py-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img16.svg')
              .col
                p.mb-0 En cuestiones de dinero, impuestos y documentos debe orientar al pasajero: procedimientos con entidades financieras, procedimientos para cambio de divisas y exenciones y beneficios tributarios aplicables al turista.
            .row.align-items-center.pt-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img17.svg')
              .col
                p.mb-0 Averiguar si las agencias tienen buena reputación. Revisar los comentarios en redes sociales o páginas web. Identificar la reputación del operador; otro indicador son los reconocimientos recibidos.
      .col-12
        .row.justify-content-end
          .col-auto
            figure
              img(src='@/assets/curso/tema3/img10.svg')
    p.mb-5 A continuación, se invita a profundizar en las especificaciones de la documentación que suelen tener y usar los turistas. Es fundamental tener conocimiento de ello y diferenciar la utilidad de cada documento:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VP0MDcfxd0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Marco legal del turismo
    .row.bg-color5
      .col-12.p-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los guías de turismo son, además, fuentes de información para turistas, viajeros y clientes en general. En ese sentido, es importante enterar a los usuarios sobre las normas, leyes y disposiciones legales que existen, sobre su servicio ofrecido o sobre el servicio contratado.
        .row.justify-content-center.mb-5
          .col-lg-10
            .cajon.color-primario.p-4
              .row.justify-content-center.align-items-center
                .col-5.col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/img18.svg')
                .col
                  p.mb-0 Pero no solo se debe conocer la ley, y sus probables cambios permanentes para informar u orientar a los clientes sino, desde luego, para desarrollar de manera efectiva, segura, informada y suficiente, todas las actividades del sector.
        .row
          .col-12.p-5.bg-color6.shadow-sm
            .row.mb-5
              .col-lg-3.mb-4.mb-lg-0
                .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img2.svg')})`}")
                    .tarjeta-flip__contenido.bg-color14.p-4.p-xl-5
                      h3 1931 - Primera norma de turismo
                      p Colombia elabora la primera norma sobre turismo en 1931, en el Gobierno de Enrique Olaya Herrera, a través de la Ley 86 de 1931 que crea el Servicio Oficial de Turismo, cuyo propósito principal era el de recaudar el impuesto al turismo del 5% sobre la estadía de los visitantes entrantes al país.
              .col-lg-3.mb-4.mb-lg-0
                .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img3.svg')})`}")
                    .tarjeta-flip__contenido.bg-color15.p-4.p-xl-5
                      h3 1968 - Corporación Nacional de Turismo
                      p Con el tiempo se creó el ente de economía mixta que regularía todo el servicio hotelero y derivado de él; se creó la Corporación Nacional de Turismo (CNT), por medio del Decreto-Ley 2700 de 1968 y la Ley 60 de 1968. Esta corporación realizó un trabajo pertinente que ayudó al desarrollo de la actividad turística en el país.
              .col-lg-3.mb-4.mb-lg-0
                .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img4.svg')})`}")
                    .tarjeta-flip__contenido.bg-color16.p-4.p-xl-5
                      h3 1991 - Derecho constitucional
                      p Adicionalmente la Constitución Política de 1991 menciona el turismo en el artículo 52, pues los colombianos tienen este derecho social y económico, dada su contribución al desarrollo integral en el aprovechamiento del tiempo libre y en la revalorización de la identidad cultural de las comunidades.
              .col-lg-3
                .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img5.svg')})`}")
                    .tarjeta-flip__contenido.bg-color17.p-4.p-xl-5
                      h3 1996 - Ley General del Turismo
                      p Con esta se creó el Viceministerio de Turismo, que sustituyó a la CNT, y amplió todas sus funciones, pues, se encargó de todos los prestadores de servicios turísticos del país, además de reglamentar toda la actividad hasta nuestros días.
            p.mb-5 Entre otros, la Ley General del Turismo fortaleció los siguientes aspectos:
            .row.justify-content-center.mb-5
              .col-lg-8
                PasosA.color-acento-contenido(tipo="n")
                  .row.align-items-center
                    .col
                      p Creó incentivos tributarios para el fomento de la actividad turística, Fondo de promoción turística, Corporación Nacional de Turismo, Registro Nacional de Turismo, derechos y obligaciones de los usuarios, control y sanciones.
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img19.svg')
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img20.svg')
                    .col
                      p Dictar disposiciones sobre el ecoturismo, etnoturismo, agroturismo, acuaturismo y turismo metropolitano; turismo de interés social.
                  .row.align-items-center
                    .col
                      p Establecer que los concejos distritales o municipales determinarán las zonas de desarrollo turístico prioritario.
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img21.svg')
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img22.svg')
                    .col
                      p Crear la división de Policía de Turismo dentro de la Dirección de Servicios Especializados de la Policía Nacional.
                  .row.align-items-center
                    .col
                      p Define los Prestadores de Servicios Turísticos (PST) en particular, establecimientos hoteleros o de hospedaje, agencias de viajes y de turismo, transportadores de pasajeros, establecimientos de gastronomía, bares y negocios similares, establecimientos de arrendamiento de vehículos, empresas captadoras de ahorro para viajes, guías de turismo, sistema de tiempo compartido, operadores profesionales de congresos, ferias y convenciones, círculos metropolitanos turísticos.
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img23.svg')
            .row.justify-content-center
              .col-lg-8
                .tarjeta.color-primario.p-3
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/tema3/img6.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1 Otras leyes de turismo
                          p.text-small Para conocer un poco más sobre otras leyes que orientan las acciones del sector turístico en Colombia, explore el anexo.
                        .col-sm-auto
                          a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-file-download
          Separador
          #t_3_2
          .titulo-segundo.color-acento-contenido
            h2 3.2 Políticas nacionales de turismo
          p El objetivo general de una política nacional es procurar el crecimiento en cantidad, calidad y permanencia, de los destinos turísticos; en Colombia, el Viceministerio de Turismo elabora las políticas concernientes al turismo.
          p.mb-5 Las siguientes son las políticas nacionales de turismo vigentes, elaboradas por el Ministerio de Comercio, Industria y Turismo de Colombia:
    SlyderB(:datos="datosSlyder")
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Prevención de la Explotación Sexual Niños, Niñas y Adolescentes - Escnna
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        p El turismo, como actividad económica de importancia, pone sobre el escenario un fuerte impacto positivo por generar divisas, empleos y ayudar a la balanza de pagos y al Producto Interno Bruto (PIB). Sin embargo, se debe admitir que también produce impactos negativos importantes, como la huella de carbono o fenómenos como la prostitución, que llega de la mano de los desarrollos turísticos y la explotación sexual de niños y adolescentes.
        .cajon.color-secundario.p-4
          p.mb-0 La explotación sexual de la niñez y adolescencia no es un fenómeno exclusivo de Colombia, motivo por el cual a nivel mundial se comenzó a trabajar para contrarrestar este impacto negativo ya que, además de tener connotaciones éticas y sociales, también lo tiene en el aspecto económico.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema3/img12.jpg')
    p.mb-5 Algunos hechos importantes alrededor de la Explotación Sexual de Niños, Niñas y Adolescentes (Escnna), son:
    .row.mb-5
      .col-lg.m-2.p-4.bg-color1
        .row.justify-content-center
          .col-6.mb-4
            figure
              img(src='@/assets/curso/tema3/img1.png')
          .col-12
            p.text-center 1996. En Suecia se realizó el Primer Congreso Mundial contra la Explotación Sexual Comercial de Niñas, Niños y Adolescentes - Escnna.
      .col-lg.m-2.p-4.bg-color2
        .row.justify-content-center
          .col-6.mb-4
            figure
              img(src='@/assets/curso/tema3/img2.png')
          .col-12
            p.text-center Ley 679 de 2001 (agosto 3) por medio de la cual se expide un estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores.
      .col-lg.m-2.p-4.bg-color3
        .row.justify-content-center
          .col-6.mb-4
            figure
              img(src='@/assets/curso/tema3/img3.png')
          .col-12
            p.text-center Constitución Nacional de 1991. Artículo 44. Son derechos fundamentales de los niños: la vida, la integridad física, la salud y la seguridad social, la alimentación equilibrada, su nombre y nacionalidad, tener una familia y no ser separados de ella, el cuidado y amor, la educación y la cultura, la recreación y la libre expresión de su opinión.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Plan de manejo de tránsito" :icono="require('@/assets/curso/tema2/img13.svg')")
        .row
          .col-lg.mb-4.mb-lg-0
            h4 ¡Escnna!
            p Forma de violencia física, sexual, psicológica y simbólica que se manifiesta en la utilización del cuerpo de un niño o niña, o de su representación, con fines de dominación, gratificación o lucro a cambio de una retribución tangible o intangible, o de una promesa de retribución para la niña, el niño o para otra persona.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/img9.jpg')
      .py-4.py-md-5(titulo="¡Importante!" :icono="require('@/assets/curso/tema2/img13.svg')")
        .row
          .col-lg.mb-4.mb-lg-0
            h4 ¡Importante!
            p Los niños, niñas y adolescentes víctimas que son tratados como mercancías y objetos sexuales, describen la situación de explotación sexual. Esta conducta que atenta contra la dignidad, es cruel y degradante; es una forma de trato inhumano, equiparable a la tortura.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/img10.jpg')
      .py-4.py-md-5(titulo="¡Atención!" :icono="require('@/assets/curso/tema2/img13.svg')")
        .row
          .col-lg.mb-4.mb-lg-0
            h4 ¡Atención!
            p Se ha contemplado la Escnna, como una grave vulneración a los derechos de la niñez, a su posibilidad de desarrollo integral en condiciones de libertad y seguridad.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/img11.jpg')
    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema3/img7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Escnna
                  p.text-small Profundice en otros aspectos que los agentes turísticos deben conocer y aplicar, en lo relacionado con Escnna. Visualice la información del Anexo_3_EjesDeAccion-ESCNNA
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    datosSlyder: [
      {
        titulo: 'Política de calidad turística',
        texto:
          'Tiene como fin determinar las líneas estratégicas que permitirán gestionar mejoras sobre los niveles de calidad en la prestación de servicios turísticos, al generar una cultura de excelencia entre actores públicos y privados para posicionar a Colombia como destino diferenciado, competitivo y sostenible.',
        imagen: require('@/assets/curso/tema3/img3.jpg'),
      },
      {
        titulo: 'Política para el desarrollo del ecoturismo',
        texto:
          'Propuesta interinstitucional que busca fortalecer y diversificar la actividad ecoturística para que las regiones del país puedan ofertar productos competitivos, sostenibles, ambiental, social, económica y culturalmente mediante los cuales se proporcionen beneficios a la comunidad receptora y la integren, de manera productiva, en su prestación de servicios turísticos.',
        imagen: require('@/assets/curso/tema3/img4.jpg'),
      },
      {
        titulo: 'Política de turismo y artesanías',
        texto:
          'Su objetivo es integrar el desarrollo, conjunto y responsable, de la cadena productiva del turismo y artesanías, procurando la salvaguarda y la difusión de las tradiciones artesanales y de beneficio para las comunidades y destinos.',
        imagen: require('@/assets/curso/tema3/img5.jpg'),
      },
      {
        titulo: 'Política de turismo cultural',
        texto:
          'Ayudar a promover el turismo cultural de manera competitiva en las comunidades y destinos.',
        imagen: require('@/assets/curso/tema3/img6.jpg'),
      },
      {
        titulo: 'Política de infraestructura turística',
        texto:
          'Para el apoyo, promoción y divulgación de proyectos relacionados con la infraestructura turística.',
        imagen: require('@/assets/curso/tema3/img7.jpg'),
      },
      {
        titulo: 'Política de turismo sostenible',
        texto:
          '<b>“Unidos por la naturaleza”</b> una visión a largo plazo, del manejo sostenible de las actividades de los prestadores de servicios turísticos y los turistas.',
        imagen: require('@/assets/curso/tema3/img8.jpg'),
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
