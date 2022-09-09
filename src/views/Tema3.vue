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
          | Además, el guía de turismo debe tener un profundo conocimiento del lugar, haberlo visitado varias veces y conocer anécdotas o datos curiosos.
    .cajon.color-primario.p-4.mb-5
      p.mb-0 El guía de turismo deberá, entre otras responsabilidades, llevar un botiquín de primeros auxilios según el tipo de turismo que realice. Si es de aventura: cuerdas, cascos y botas; si es de avistamiento de aves: binoculares, libros, telescopios; y si es un city tour: folletos y también libros.
    p.mb-5 Estas son otras recomendaciones de suma importancia que los guías de turismo deben tener en cuenta y aplicar, de manera permanente, en su servicio:
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        ul.lista-ul
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Acordar la tarifa del servicio de acuerdo al tiempo, número de personas e idioma. Debe tener conocimiento de la documentación que utilizan los usuarios (turistas o viajeros).
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Los #[b guías de turismo] locales (de las propias comunidades) deben portar la credencial de la asociación a la que pertenecen; así mismo, los guías profesionales. Debe conocer a los operadores de servicios en los diferentes puntos del recorrido.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Los #[b guías turísticos] deben ofrecer información completa, no reservarse ninguna arrojando solo lo básico.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 En cuestiones de dinero, impuestos y documentos debe orientar al pasajero: procedimientos con entidades financieras, procedimientos para cambio de divisas y exenciones y beneficios tributarios aplicables al turista.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Los diferentes prestadores de servicios con quienes el guía contrato servicios, cumplen los tiempos, las tarifas, y ofrecen buen servicio.
          li 
            i.fas.fa-angle-right(style="color: #FF6D4B")
            |
            p.mb-0 Averiguar si las agencias tienen buena reputación. Revisar los comentarios en redes sociales o páginas web. Identificar la reputación del operador; otro indicador son los reconocimientos recibidos.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema3/img2.jpg')
    p.mb-5 A continuación, se invita a profundizar en las especificaciones de la documentación que suelen tener y usar los turistas. Es fundamental tener conocimiento de ello y diferenciar la utilidad de cada documento:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/drG0fwxB52c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Marco legal del turismo
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los guías de turismo son, además, fuentes de información para turistas, viajeros y clientes en general. En ese sentido, es importante enterar a los usuarios sobre las normas, leyes y disposiciones legales que existen, sobre su servicio ofrecido o sobre el servicio contratado.
    .cajon.color-primario.p-4.mb-5
      p.mb-0 Pero no solo se debe conocer la ley, y sus probables cambios permanentes para informar u orientar a los clientes sino, desde luego, para desarrollar de manera efectiva, segura, informada y suficiente, todas las actividades del sector.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
