export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  emoji: string;
  date: string;
  readTime: number;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "guia-propietarios-extranjeros-costa-blanca",
    title: "Guía completa para propietarios extranjeros en Costa Blanca: todo lo que necesitas saber",
    excerpt: "Comprar y gestionar un piso en Torrevieja desde el extranjero es posible. Te contamos los pasos clave, impuestos, obligaciones y cómo alquilarlo bien.",
    category: "Gestión Vacacional",
    emoji: "🌍",
    date: "13 de junio de 2026",
    readTime: 7,
    body: `<p>Si estás leyendo esto, probablemente tienes un piso en la Costa Blanca o estás pensando en comprar uno. Y si además vives fuera de España — en Alemania, Reino Unido, Países Bajos, Francia o cualquier otro país — sabes que <strong>gestionar una propiedad a distancia tiene sus propios desafíos</strong>.</p>

<p>Torrevieja es uno de los destinos favoritos de los propietarios extranjeros en Europa. Sol, playas, precios razonables y una comunidad internacional que hace que sentirse en casa sea fácil. Pero <strong>lo que muchos descubren después de la firma es que tener el piso es solo el principio</strong>: llegan los impuestos, las obligaciones legales, el mantenimiento, y la gran pregunta de siempre: ¿quién se ocupa de todo cuando yo no estoy?</p>

<p>En esta guía recorremos punto por punto lo que todo propietario extranjero debería saber para gestionar su piso en la Costa Blanca sin dolor de cabeza.</p>

<h2>1. Comprar una vivienda en España siendo extranjero</h2>

<p>El proceso de compra es más sencillo de lo que parece, pero tiene sus particularidades. Si aún no tienes el piso, esto es lo básico:</p>

<ul>
  <li><strong>NIE (Número de Identificación de Extranjero)</strong> — lo necesitas sí o sí para cualquier operación. Se tramita en la comisaría de policía o en el consulado español de tu país. Sin NIE no puedes comprar, vender, ni contratar servicios básicos como luz o agua.</li>
  <li><strong>Cuenta bancaria española</strong> — esencial para pagar recibos (comunidad, IBI, basura) y recibir ingresos del alquiler.</li>
  <li><strong>Notario y registro</strong> — la compraventa se formaliza ante notario y se inscribe en el Registro de la Propiedad. El notario se encarga de verificar que la vivienda está libre de cargas.</li>
  <li><strong>Costes asociados</strong> — además del precio de la vivienda, hay que contar con ITP (Impuesto de Transmisiones Patrimoniales, entre un 8-10 % si es segunda mano) o IVA (si es obra nueva), más notaría, registro y gestoría. En total, <strong>entre un 10 % y un 13 % extra sobre el precio de compra</strong>.</li>
</ul>

<blockquote>«Muchos propietarios extranjeros se sorprenden con los costes adicionales de comprar en España. Un presupuesto realista incluye siempre ese 10-13 % extra sobre el precio de la vivienda.»</blockquote>

<h2>2. Impuestos y obligaciones anuales</h2>

<p>Una vez que eres propietario, entran en juego las obligaciones fiscales. Esto varía según uses o no la vivienda para alquiler vacacional:</p>

<h3>Si alquilas tu piso en Airbnb o Booking</h3>
<ul>
  <li><strong>IRNR (Impuesto sobre la Renta de No Residentes)</strong> — todos los propietarios extranjeros deben presentarlo, tanto si alquilan como si no. La base imponible se calcula sobre el valor catastral de la vivienda. Si alquilas, tributas por los ingresos reales. El tipo impositivo es del 19 % para residentes en la UE, y del 24 % para no residentes de fuera de la UE.</li>
  <li><strong>IVA</strong> — en alquiler vacacional no se aplica IVA, pero sí hay que darse de alta en el censo de empresarios si alquilas de forma habitual.</li>
  <li><strong>Comunicación a la Generalitat Valenciana</strong> — desde 2024, los propietarios deben registrar el piso en el Registro de Turismo de la Comunidad Valenciana y comunicar los datos de los huéspedes a las autoridades. <strong>No hacerlo puede conllevar multas de hasta 30.000 €</strong>.</li>
</ul>

<h3>Si no alquilas (uso propio o vacío)</h3>
<ul>
  <li><strong>IBI (Impuesto sobre Bienes Inmuebles)</strong> — lo paga todo propietario, extranjero o nacional. Varía según el valor catastral y el municipio, pero suele rondar los 300-700 € anuales para un piso medio en Torrevieja.</li>
  <li><strong>Tasa de basuras</strong> — obligatoria, unos 100-200 € al año.</li>
  <li><strong>IRNR por imputación de rentas</strong> — aunque no alquiles, Hacienda entiende que tu piso genera una renta potencial y te obliga a tributar por un porcentaje del valor catastral. Sí, es tan absurdo como suena, pero es legal y hay que pagarlo.</li>
</ul>

<h2>3. El gran reto: gestionar la propiedad a distancia</h2>

<p>Aquí es donde muchos propietarios extranjeros empiezan a sudar. <strong>No es solo pagar impuestos; es que el piso tiene vida propia</strong>.</p>

<p>Las cosas que necesitas cubrir desde tu país de residencia o cuando visitas Torrevieja un par de veces al año:</p>

<ul>
  <li><strong>Limpieza entre huéspedes</strong> — si alquilas, la rotación de limpiezas es constante y necesita coordinación impecable. En temporada alta, un piso en Torrevieja puede tener huéspedes nuevos cada 2 días.</li>
  <li><strong>Check-in y check-out presencial</strong> — los huéspedes necesitan a alguien que les reciba, les dé las llaves, les explique el funcionamiento del piso y esté disponible si surge cualquier problema.</li>
  <li><strong>Mantenimiento y reparaciones</strong> — desde una bombilla fundida hasta una avería en el aire acondicionado en pleno agosto. Necesitas un handyman de confianza que pueda ir al piso en cuestión de horas.</li>
  <li><strong>Lavandería profesional</strong> — sábanas, toallas, ropa de cama. Cada rotación exige un juego limpio y planchado. No puedes depender de la lavadora de casa ni de horarios imposibles.</li>
  <li><strong>Gestión de incidencias</strong> — un vecino que se queja de ruido, una fuga de agua en el piso de arriba, un huésped que pierde las llaves. Alguien tiene que estar disponible para resolverlo.</li>
  <li><strong>Pago de recibos</strong> — luz, agua, comunidad, IBI. Si no pagas a tiempo, te cortan los suministros o te embargan la cuenta.</li>
</ul>

<blockquote>«Gestionar un piso en Torrevieja desde el extranjero no es imposible, pero requiere tener un equipo local de confianza. Sin él, cada pequeña incidencia se convierte en un problema grande.»</blockquote>

<h2>4. Opciones para propietarios extranjeros</h2>

<p>Básicamente tienes tres caminos:</p>

<h3>Opción A: Hazlo todo tú mismo</h3>
<p>Viajas a Torrevieja cada vez que hay una incidencia, coordinas limpiezas por WhatsApp con conocidos, pagas recibos manualmente desde tu banco online. <strong>Funciona si tienes mucha paciencia, pocas reservas y no te importa recibir llamadas a las 2 de la madrugada</strong>. Para la mayoría de propietarios, esta opción se vuelve insostenible en cuanto el piso empieza a rodar bien.</p>

<h3>Opción B: Gestión parcial con profesionales locales</h3>
<p>Contratas servicios sueltos: una empresa de limpieza para las rotaciones, un electricista de confianza para las reparaciones, y un gestor para los impuestos. Tú coordinas todo desde tu país. <strong>Funciona bastante bien si tienes un puñado de contactos fiables y no te importa hacer de project manager de tu propio piso</strong>.</p>

<h3>Opción C: Delega todo en un servicio integral</h3>
<p>Una empresa local se encarga de todo: limpieza, lavandería, handyman, check-in/check-out, gestión de incidencias y, si quieres, también de la comunicación con los huéspedes. <strong>Tú solo cobras y ves cómo llegan las reseñas positivas</strong>. Esta es la opción que eligen los propietarios que quieren rentabilidad sin dolores de cabeza.</p>

<h2>5. Por qué Torrevieja es un destino ideal para propietarios extranjeros</h2>

<p>Torrevieja tiene ventajas competitivas que pocos destinos pueden igualar:</p>

<ul>
  <li><strong>Conexión aérea excelente</strong> — el aeropuerto de Alicante-Elche está a 40 minutos, con vuelos directos a más de 50 ciudades europeas. También está Murcia-Corvera a 45 minutos y Valencia a 1 hora y media.</li>
  <li><strong>Comunidad internacional grande</strong> — no estarás solo. Hay asociaciones de alemanes, británicos, neerlandeses, franceses y belgas. Colegios internacionales, supermercados con productos de importación y servicios adaptados a extranjeros.</li>
  <li><strong>Clima estable todo el año</strong> — más de 300 días de sol al año. Esto significa que tu piso se puede alquilar 12 meses, no solo en verano. La demanda de alquiler vacacional se mantiene alta incluso en invierno, sobre todo de jubilados europeos que pasan los meses fríos en la Costa Blanca.</li>
  <li><strong>Coste de vida razonable</strong> — comparado con otras zonas costeras de España (Costa del Sol, Baleares, Costa Brava), Torrevieja sigue siendo asequible tanto para comprar como para mantener un piso.</li>
</ul>

<h2>ClaveHogar: tu equipo de confianza en Torrevieja</h2>

<p>En <strong>ClaveHogar</strong> trabajamos cada día con propietarios que viven en Alemania, Reino Unido, Países Bajos, Francia, Bélgica y muchos otros países. Sabemos lo que necesitas porque lo hemos visto cientos de veces: <strong>un equipo local que cuide de tu piso como si fuera suyo</strong>.</p>

<p>Ofrecemos un servicio integral que cubre limpieza profesional entre huéspedes, lavandería, handyman, coordinación de check-in/check-out y gestión de incidencias. Sin contratos largos, sin sorpresas. Solo trabajo bien hecho para que tu piso funcione sin que tengas que estar pendiente.</p>

<p>¿Tienes un piso en Torrevieja y vives fuera de España? <strong>Escíbenos por WhatsApp al <a href="https://wa.me/34693976311"><strong>+34 693 976 311</strong></a></strong> y te contamos cómo podemos ayudarte a gestionarlo sin estrés, estés donde estés.</p>`,
  },
  {
    slug: "gestionar-airbnb-torrevieja",
    title: "Cómo gestionar tu piso de Airbnb en Torrevieja sin estrés (y sin perder dinero)",
    excerpt: "Tener un piso en Torrevieja es una oportunidad de oro, pero gestionarlo bien es otro cuento. Te contamos cómo hacerlo sin que te consuma la vida.",
    category: "Gestión Vacacional",
    emoji: "🏠",
    date: "4 de junio de 2026",
    readTime: 5,
    body: `<p>Torrevieja es uno de los destinos más buscados de la Costa Blanca. Sol casi todo el año, playas de bandera azul, precios razonables y una comunidad internacional que no para de crecer. Si tienes un piso aquí y lo alquilas en Airbnb, ya sabes de lo que hablamos: <strong>la demanda existe, y es real</strong>.</p>

<p>Pero también sabes que detrás de cada reserva hay un trabajo invisible que muchos propietarios no esperaban: responder mensajes a las 23:00, coordinar limpiezas entre check-out y check-in, gestionar averías de último momento, y rezar para que la lavadora no falle justo antes de que lleguen los siguientes huéspedes.</p>

<p>En este artículo te damos las claves para que tu piso de Airbnb en Torrevieja funcione como un reloj sin que tú tengas que estar pendiente de todo.</p>

<h2>1. El problema real de gestionar un alquiler vacacional tú solo</h2>

<p>Muchos propietarios empiezan con entusiasmo: suben el anuncio, sacan buenas fotos y reciben sus primeras reservas. Todo parece fácil. Hasta que llega el verano.</p>

<p>En temporada alta, un piso en Torrevieja puede tener <strong>rotaciones cada 2 o 3 días</strong>. Eso significa:</p>

<ul>
  <li>Limpiezas exprés entre huéspedes, con cambio de ropa de cama y toallas</li>
  <li>Check-ins que no siempre ocurren a la hora pactada</li>
  <li>Mensajes de huéspedes con preguntas, quejas o emergencias</li>
  <li>Pequeñas reparaciones que aparecen sin avisar (el grifo que gotea, la persiana que no sube, el Wi-Fi que falla)</li>
  <li>Gestión de valoraciones y reputación online</li>
</ul>

<p>Si vives en el piso de al lado, puede que te apañes. Pero si trabajas, tienes familia, o simplemente quieres dormir tranquilo, gestionar todo esto tú solo se convierte rápidamente en un segundo trabajo a tiempo completo.</p>

<blockquote>«El alquiler vacacional bien gestionado puede rentabilizar tu piso hasta tres veces más que un alquiler tradicional. Pero mal gestionado, puede costarte reputación, dinero y muchas noches de sueño.»</blockquote>

<h2>2. Los errores más comunes que cuestan dinero (y estrellas)</h2>

<p>En Torrevieja hemos visto de todo. Estos son los fallos que más afectan a los propietarios y que, con la estrategia correcta, son completamente evitables:</p>

<h3>Descuidar la limpieza entre rotaciones</h3>
<p>Una limpieza rápida y superficial puede colarte sin problemas en invierno, cuando los huéspedes son más comprensivos. En verano, con familias que llegan cansadas del viaje y esperan encontrar el piso impecable, <strong>una sola valoración de 3 estrellas puede hundirte en el ranking de Airbnb</strong>. La limpieza no es un gasto, es una inversión.</p>

<h3>No tener un servicio de handyman de confianza</h3>
<p>El bombillo que se funde, el desagüe que se atasca, el mando del aire acondicionado que desaparece misteriosamente... En un alquiler vacacional, las pequeñas averías son inevitables. Sin un servicio de reparaciones rápido y de confianza, acabarás pagando precios de urgencia o, peor, dejando al huésped con el problema sin resolver.</p>

<h3>Ignorar la experiencia del huésped</h3>
<p>Airbnb es, en gran parte, un negocio de reputación. Un huésped feliz deja 5 estrellas y vuelve. Un huésped insatisfecho deja una reseña que leerán los próximos 500 potenciales clientes. Pequeños detalles como una bienvenida cálida, información clara sobre el piso, o una respuesta rápida ante cualquier incidencia marcan la diferencia.</p>

<h2>3. Cómo simplificar la gestión sin perder el control</h2>

<p>La buena noticia es que no tienes que elegir entre <em>hacerlo todo tú</em> o <em>desaparecer completamente</em>. Hay una tercera vía: <strong>externalizar las partes operativas y mantener el control estratégico</strong>.</p>

<p>Esto significa delegar en profesionales lo que no requiere tu presencia física ni tu toma de decisiones:</p>

<ul>
  <li><strong>Limpieza profesional</strong> entre cada rotación, con cambio de ropa de cama y toallas incluido</li>
  <li><strong>Servicio de lavandería</strong> para que la ropa siempre esté lista a tiempo</li>
  <li><strong>Handyman de guardia</strong> para resolver pequeñas averías sin esperas ni sorpresas en la factura</li>
  <li><strong>Coordinación de check-ins y check-outs</strong> para que los huéspedes siempre encuentren a alguien disponible</li>
  <li><strong>Gestión de comunicaciones</strong> con huéspedes, si así lo prefieres</li>
</ul>

<p>Tú decides hasta dónde llega la delegación. Lo importante es que <strong>tu piso funcione con la misma calidad tanto si estás en Torrevieja como si estás de vacaciones en otro lado</strong>.</p>

<h2>¿Y la rentabilidad?</h2>

<p>Una pregunta legítima: ¿no se come el margen pagar por todos estos servicios?</p>

<p>La respuesta corta es no. Un piso bien gestionado obtiene mejores valoraciones, más reservas, y puede cobrar precios más altos. Un piso con una media de 4,9 estrellas y 50 reseñas positivas puede pedir un 20-30% más por noche que uno con 4,2 estrellas. Los servicios de gestión bien llevados <strong>se pagan solos</strong>.</p>

<h2>ClaveHogar: tu socio en Torrevieja</h2>

<p>En <strong>ClaveHogar</strong> llevamos tiempo ayudando a propietarios de Torrevieja y alrededores a gestionar sus pisos de alquiler vacacional con tranquilidad. Ofrecemos limpieza profesional, lavandería, servicio de handyman, y coordinación integral para que tu piso en Airbnb funcione solo, aunque tú no estés.</p>

<p>Sin contratos largos, sin letra pequeña. Solo soluciones reales para propietarios reales.</p>

<p><strong>¿Tienes un piso en Torrevieja y quieres saber cómo podemos ayudarte?</strong> Escríbenos por WhatsApp al <a href="https://wa.me/34693976311"><strong>+34 693 976 311</strong></a> y te explicamos sin compromiso qué podemos hacer por ti.</p>`,
  },
  {
    slug: "limpieza-profesional-entre-huespedes-torrevieja",
    title: "Limpieza profesional entre huéspedes: el secreto de los mejores anfitriones de Torrevieja",
    excerpt: "La limpieza entre rotaciones es lo que separa a un anfitrión de 5 estrellas de uno mediocre. Descubre por qué y cómo hacerla bien en Torrevieja.",
    category: "Limpieza Profesional",
    emoji: "🧹",
    date: "6 de junio de 2026",
    readTime: 5,
    body: `<p>Si hay algo que diferencia a un anfitrión de 5 estrellas de uno de 3, no son las fotos del anuncio ni el precio por noche. Es lo que ocurre en las horas que separan la salida de un huésped y la llegada del siguiente. <strong>Esa ventana de tiempo — a veces de solo 4 horas — define la reputación de tu piso en Torrevieja</strong>.</p>

<p>En un destino turístico como la Costa Blanca, donde la rotación en verano puede ser diaria, la limpieza profesional entre huéspedes no es un lujo: es una necesidad operativa. Y los anfitriones que lo entienden son los que llenan el calendario todo el año.</p>

<h2>Por qué la limpieza entre rotaciones es crítica en Torrevieja</h2>

<p>Torrevieja tiene unas características que hacen que la limpieza sea especialmente importante:</p>

<ul>
  <li><strong>Alta rotación en temporada alta</strong> — en julio y agosto muchos pisos cambian de huéspedes cada 2 o 3 días</li>
  <li><strong>Humedad y salitre</strong> — la cercanía al mar acelera la acumulación de polvo y la sensación de «no estar limpio»</li>
  <li><strong>Huéspedes internacionales</strong> — vienen de Alemania, Países Bajos, Reino Unido, Francia... culturas distintas con expectativas distintas, pero todas altas en limpieza</li>
  <li><strong>Check-outs tempranos y check-ins tardíos</strong> — la ventana útil para limpiar puede ser tan estrecha como de 11:00 a 15:00</li>
</ul>

<blockquote>«En Airbnb, la limpieza es el factor número 1 en las reseñas. Un piso impecable perdona una ubicación regular. Un piso sucio arruina la mejor ubicación de Torrevieja.»</blockquote>

<h2>¿Qué incluye una limpieza profesional entre huéspedes?</h2>

<p>No es lo mismo una limpieza de mantenimiento semanal que una limpieza entre rotaciones para alquiler vacacional. En ClaveHogar trabajamos con un protocolo específico que va mucho más allá de pasar un trapo y hacer las camas:</p>

<h3>1. Limpieza profunda de todas las superficies</h3>
<p>Cada rincón se revisa: encimeras, mesas, estanterías, marcos de cuadros, interruptores, pomos de puertas. <strong>Los puntos de contacto reciben atención especial</strong> — son los que más bacterias acumulan y también los que los huéspedes notan al llegar.</p>

<h3>2. Cocina y baños a fondo</h3>
<p>La cocina debe estar impecable: nevera vacía y limpia por dentro, vitrocerámica sin restos de grasa, microondas libre de salpicaduras, fregadero seco y reluciente. Los baños reciben desinfección profesional con productos específicos para eliminar cal y moho —algo especialmente importante en una zona costera como Torrevieja.</p>

<h3>3. Cambio completo de ropa de cama y toallas</h3>
<p>Cada rotación lleva consigo un juego completo de sábanas y toallas recién lavadas y planchadas. <strong>No se reutilizan, no se ventilan y se doblan</strong>. Un huésped detecta al instante si las sábanas están frescas o si llevan días sin cambiarse.</p>

<h3>4. Aspirado y fregado de suelos</h3>
<p>Todas las habitaciones se aspiran, incluyendo debajo de las camas y los muebles. Los suelos se friegan con productos adecuados para cada superficie (mármol, gres, parquet). En apartamentos con terraza, también se barre y friega el exterior.</p>

<h3>5. Revisión de amenities y reposición</h3>
<p>Se verifica que no falte nada: gel de baño, champú, papel higiénico, jabón de manos, café, azúcar, botella de agua de bienvenida. Estos pequeños detalles <strong>son los que generan reseñas de 5 estrellas</strong>.</p>

<h3>6. Control de calidad final</h3>
<p>Antes de cerrar la puerta, se hace una revisión visual completa. ¿Algo fuera de lugar? ¿Alguna lámpara que no enciende? ¿Persianas que funcionan mal? Se reporta inmediatamente para que el equipo de handyman pueda actuar antes de que llegue el siguiente huésped.</p>

<h2>¿Cuánto tiempo lleva una limpieza entre rotaciones?</h2>

<p>Depende del tamaño del piso y del estado en que lo dejen los huéspedes. En nuestra experiencia:</p>

<ul>
  <li><strong>Estudio o 1 dormitorio:</strong> 1,5 - 2 horas</li>
  <li><strong>2 dormitorios:</strong> 2 - 3 horas</li>
  <li><strong>3 dormitorios o más:</strong> 3 - 4 horas</li>
</ul>

<p>Si trabajas con un equipo profesional, estos tiempos se cumplen de forma consistente y coordinada. Si lo haces tú mismo o con alguien sin experiencia, es fácil que los tiempos se dupliquen y acabes retrasando el check-in del siguiente huésped — <strong>y eso son reseñas negativas seguras</strong>.</p>

<h2>Los errores más comunes al limpiar entre huéspedes</h2>

<p>Basados en cientos de limpiezas en Torrevieja, estos son los fallos que más repiten los propietarios que intentan hacerlo por su cuenta:</p>

<ul>
  <li><strong>Usar productos domésticos genéricos</strong> que no desinfectan realmente ni eliminan la cal del agua dura de Torrevieja</li>
  <li><strong>Olvidar rincones</strong> como detrás de la puerta del baño, los rodapiés o las lámparas de techo</li>
  <li><strong>No ventilar</strong> después de limpiar — el olor a humedad y productos químicos no da buena primera impresión</li>
  <li><strong>Apresurarse</strong> y dejar detalles como pelos en el desagüe o manchas en los espejos</li>
  <li><strong>No reportar averías</strong> — si algo está roto y el siguiente huésped lo descubre, la culpa es tuya aunque tú no lo hayas roto</li>
</ul>

<h2>¿Vale la pena contratar un servicio profesional?</h2>

<p>Hagamos números rápidos. Un servicio de limpieza profesional entre rotaciones cuesta entre 30 y 60 € por visita, dependiendo del tamaño del piso. Eso significa que por cada reserva, tu margen se reduce en ese importe.</p>

<p>Ahora ponlo en perspectiva: <strong>una reseña de 4 estrellas en lugar de 5 puede reducir tus reservas futuras entre un 10% y un 30%</strong>. Una sola reseña negativa por limpieza puede costarte cientos o miles de euros en reservas perdidas a lo largo del año. La limpieza profesional <em>se paga sola y con creces</em>.</p>

<h2>ClaveHogar: tu equipo de limpieza en Torrevieja</h2>

<p>En <strong>ClaveHogar</strong> sabemos lo que necesita un piso vacacional en Torrevieja para brillar. Nuestro equipo de limpieza profesional está entrenado específicamente para rotaciones de alquiler vacacional, conozco cada rincón de la ciudad y trabajamos con productos profesionales que respetan el medio ambiente y dejan los pisos impecables.</p>

<p>Además, coordinamos la limpieza con el resto de servicios: lavandería, handyman y check-in, para que tú no tengas que preocuparte de nada. <strong>Tu piso funciona, tú descansas</strong>.</p>

<p>¿Quieres probar? <strong>Escríbenos por WhatsApp al <a href="https://wa.me/34693976311"><strong>+34 693 976 311</strong></a></strong> y te hacemos un presupuesto sin compromiso para tu piso en Torrevieja.</p>`,
  },
  {
    slug: "mantenimiento-preventivo-hogar-torrevieja",
    title: "Mantenimiento preventivo del hogar en Torrevieja: cómo evitar averías y ahorrar dinero",
    excerpt: "Pequeñas reparaciones que se convierten en emergencias caras. Descubre cómo el mantenimiento preventivo salva tu piso en la Costa Blanca y tu bolsillo.",
    category: "Handyman",
    emoji: "🔧",
    date: "7 de junio de 2026",
    readTime: 6,
    body: `<p>Hay una regla no escrita en el mundo del alquiler vacacional: <strong>las averías nunca avisan</strong>. Siempre aparecen en el peor momento — cuando el próximo huésped llega en dos horas, un sábado por la noche, o justo cuando te vas de viaje.</p>

<p>Pero lo cierto es que la mayoría de las emergencias domésticas se pueden evitar. No con suerte, sino con una estrategia sencilla que en otros países llaman <em>home maintenance</em> y que aquí llamamos simplemente <strong>sentido común aplicado con regularidad</strong>: el mantenimiento preventivo.</p>

<p>En Torrevieja, donde el clima es privilegiado pero implacable con los materiales, tener un plan de mantenimiento para tu piso no es un lujo: es la diferencia entre una temporada tranquila y un verano de llamadas de emergencia.</p>

<h2>¿Qué es el mantenimiento preventivo y por qué es clave en la Costa Blanca?</h2>

<p>El mantenimiento preventivo consiste en revisar y poner a punto los sistemas de tu vivienda de forma programada, antes de que surja el problema. No esperas a que el aire acondicionado deje de enfriar en plena ola de agosto: lo revisas en primavera, cuando los técnicos tienen tiempo y las piezas de repuesto están disponibles.</p>

<p>Torrevieja tiene condiciones que hacen del mantenimiento preventivo algo especialmente importante:</p>

<ul>
  <li><strong>Salitre y humedad marina</strong> — corroe metales, acelera la oxidación de cerraduras, bisagras y electrodomésticos</li>
  <li><strong>Cal extremadamente dura en el agua</strong> — calcifica grifos, duchas, calentadores y lavadoras en cuestión de meses</li>
  <li><strong>Veranos de 35 °C</strong> — el aire acondicionado trabaja al límite durante semanas seguidas</li>
  <li><strong>Rotación constante de huéspedes</strong> — cada persona usa las cosas de forma distinta, y el desgaste se multiplica</li>
</ul>

<blockquote>«Invertir 200 € al año en mantenimiento preventivo puede ahorrarte 1.500 € en reparaciones de emergencia. Es la mejor relación coste-beneficio que existe para un piso vacacional.»</blockquote>

<h2>Las 7 revisiones clave que tu piso necesita (y cuándo hacerlas)</h2>

<p>Basados en nuestra experiencia con cientos de pisos en Torrevieja, estos son los puntos críticos y su calendario recomendado:</p>

<h3>1. Aire acondicionado — revisión cada primavera</h3>
<p>Es el sistema más exigido del piso. Los filtros se saturan de polvo y salitre, el gas puede haber perdido presión, y las unidades exteriores acumulan suciedad. <strong>Una revisión en mayo te garantiza que el aparato responderá cuando más lo necesites</strong>. Además, un aire limpio consume hasta un 15 % menos de electricidad.</p>

<h3>2. Descalcificación de grifos y duchas — cada 3 meses</h3>
<p>El agua de Torrevieja es especialmente dura. En pocas semanas, los aireadores de los grifos se obstruyen reduciendo la presión. Los cabezales de ducha se calcifican y el agua sale en chorros irregulares. <strong>Limpiarlos con vinagre o productos descalcificadores cada trimestre es una operación de 10 minutos que marca una gran diferencia</strong> en la experiencia del huésped.</p>

<h3>3. Calentador de agua — revisión anual</h3>
<p>El termo eléctrico o la caldera acumulan cal en el interior con el tiempo. Esto reduce la eficiencia, aumenta el consumo eléctrico y, en casos graves, puede provocar fugas o roturas que te dejen sin agua caliente — un drama cuando hay huéspedes en casa. <strong>Un vaciado y revisión anual alarga la vida útil del aparato entre 3 y 5 años</strong>.</p>

<h3>4. Persianas, bisagras y cerraduras — lubricación semestral</h3>
<p>El salitre marino se come los mecanismos metálicos. Las persianas empiezan a subir despacio, luego a atascarse, y un día no suben más. Una sencilla aplicación de lubricante en spray (WD-40 o similar) dos veces al año mantiene todo funcionando suavemente. <strong>No esperes a que el huésped te mande un vídeo de la persiana atascada un domingo</strong>.</p>

<h3>5. Revisión de fontanería básica — cada 6 meses</h3>
<p>Mirar debajo de los fregaderos, revisar las juntas de los inodoros, comprobar que no hay goteos en las conexiones de la lavadora y el lavavajillas. Una pequeña fuga que no ves puede causar humedades, mal olor y, con el tiempo, problemas estructurales. <strong>Detectarla a tiempo cuesta 0 €. Reparar un baño con humedad cuesta cientos</strong>.</p>

<h3>6. Puertas y ventanas — sellado anual</h3>
<p>Las gomas de estanqueidad de puertas y ventanas se resecan con el sol y el salitre. Cuando pierden su función, el aire acondicionado se escapa, el ruido de la calle entra y, en invierno, se cuela el frío. <strong>Cambiar las gomas cada 1-2 años es barato y mejora el confort térmico y acústico del piso de forma notable</strong>.</p>

<h3>7. Electrodomésticos — limpieza y revisión cada 6 meses</h3>
<p>Lavadora, lavavajillas, horno y nevera. Los filtros se obstruyen, las gomas acumulan moho, los conductos de desagüe se tapan. <strong>Una limpieza profunda semestral de los electrodomésticos evita averías y alarga su vida útil entre un 30 y un 50 %</strong>. Los huéspedes además notan una nevera que huele bien y unos electrodomésticos que funcionan como nuevos.</p>

<h2>¿Y quién hace todo esto cuando el propietario no está?</h2>

<p>Aquí está el dilema de muchos propietarios extranjeros: tienen uno o dos pisos en Torrevieja, pero viven en Madrid, Londres o Berlín. No pueden pasar cada tres meses a revisar los grifos o lubricar las persianas. Y pedirle a un familiar o amigo que lo haga... tiene los días contados.</p>

<p>La solución es tener un servicio de handyman de confianza que haga estas revisiones de forma programada, con un calendario fijo y un reporte al final de cada visita. Así sabes que tu piso está cuidado aunque estés a 2.000 km de distancia.</p>

<h2>Mantenimiento preventivo vs. reparación de emergencia: la cuenta de la vieja</h2>

<p>Hagamos una comparación realista con precios de Torrevieja:</p>

<table style="width:100%; border-collapse: collapse; margin: 1em 0; font-size: 0.9em;">
  <thead>
    <tr style="background: #f3f4f6;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Concepto</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Preventivo</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Emergencia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Revisión aire acondicionado</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">~50 €</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">150-250 €</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Desatascar desagüe ducha</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">0 € (limpieza mensual)</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">80-120 €</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Lubricar persianas</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">5 € (spray)</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">100-200 € (reparación)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Cambio gomas ventana</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">30-50 € (programado)</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">Urgencia no aplica (se sufre)</td>
    </tr>
  </tbody>
</table>

<p><strong>En promedio, el mantenimiento preventivo cuesta entre 3 y 5 veces menos que la reparación de emergencia.</strong> Y eso sin contar el coste invisible de una mala reseña en Airbnb por una avería que arruinó la estancia de un huésped.</p>

<h2>¿Y si lo dejo pasar un año? ¿Qué puede pasar?</h2>

<p>Es la pregunta del millón. La respuesta corta: probablemente nada grave. Pero el riesgo acumulado crece. El aire que no revisaste este año puede fallar el próximo verano. La cal que no limpiaste este trimestre será el doble de difícil de quitar el que viene. La goma de la ventana que no cambiaste hoy será la corriente de aire que el huésped señalará en su reseña mañana.</p>

<p>El mantenimiento preventivo no es para evitar el 100 % de las averías — eso es imposible. Es para <strong>reducir drásticamente la probabilidad de que ocurran en el peor momento posible</strong>.</p>

<h2>ClaveHogar: tu servicio de mantenimiento en Torrevieja</h2>

<p>En <strong>ClaveHogar</strong> ofrecemos un servicio integral de mantenimiento preventivo para pisos vacacionales en Torrevieja y alrededores. Nuestro equipo de handyman realiza revisiones periódicas con un checklist completo, te envía un reporte detallado después de cada visita, y coordina las reparaciones necesarias antes de que se conviertan en emergencias.</p>

<p>Trabajamos con propietarios que viven en Torrevieja y también con los que gestionan sus pisos desde el extranjero. <strong>Tú no tienes que estar aquí para que tu piso esté cuidado.</strong></p>

<p>¿Quieres saber más? <strong>Escíbenos por WhatsApp al <a href="https://wa.me/34693976311">+34 693 976 311</a></strong> y te contamos cómo funciona nuestro servicio de mantenimiento preventivo sin compromiso.</p>`
  },
  {
    slug: "lavanderia-apartamentos-vacacionales-torrevieja",
    title: "Lavandería para apartamentos vacacionales: por qué es clave para el éxito de tu alquiler",
    excerpt: "Las sábanas y toallas son lo primero que toca un huésped al llegar. Descubre cómo un servicio de lavandería profesional marca la diferencia en Torrevieja.",
    category: "Limpieza Profesional",
    emoji: "👕",
    date: "21 de junio de 2026",
    readTime: 6,
    body: `<p>Hay detalles que un huésped nota en cuanto cruza la puerta. La luz, el olor, la temperatura. Pero hay uno que <strong>literalmente toca antes de sentirse en casa</strong>: la ropa de cama y las toallas.</p>

<p>En un apartamento vacacional en Torrevieja, la lavandería no es un servicio secundario. Es una pieza central de la experiencia del huésped, un factor determinante en las reseñas y, si no se gestiona bien, una fuente constante de estrés para el propietario. En este artículo te contamos por qué y cómo hacerlo bien.</p>

<h2>El problema invisible de la lavandería en alquiler vacacional</h2>

<p>Cuando alquilas tu piso por noches, la lavandería no es como en casa. No lavas cuando te apetece ni cuando se acumula el cesto. <strong>Necesitas que todo esté listo en ventanas de tiempo muy ajustadas</strong> — a veces de apenas 2 o 3 horas entre el check-out de un huésped y el check-in del siguiente.</p>

<p>Los números son esclarecedores: un piso en Torrevieja con ocupación media-alta puede generar entre 6 y 12 cambios completos de ropa de cama y toallas al mes. En temporada alta, esa cifra se duplica o triplica. Hablamos de <strong>hasta 30 juegos de sábanas y 60 toallas al mes</strong> para un solo apartamento.</p>

<blockquote>«El 90 % de los huéspedes considera que la limpieza y el estado de la ropa de cama son el factor más importante en su valoración final. Una sábana con una mancha puede anular 20 fotos espectaculares del anuncio.»</blockquote>

<h2>Lo que los huéspedes notan (y lo que no perdonan)</h2>

<p>La experiencia del huésped con la ropa empieza incluso antes de meter la llave en la cerradura. Estos son los puntos críticos:</p>

<h3>1. Olor a fresco y limpio</h3>
<p>Es la primera señal. Cuando un huésped abre la puerta del dormitorio y huele las sábanas limpias, ya ha ganado medio check-in. Si huele a humedad, a cerrado o —peor aún— a detergente barato, la primera impresión está arruinada. <strong>Un lavado profesional con productos de calidad deja un aroma sutil y agradable</strong> que los huéspedes asocian con limpieza y cuidado.</p>

<h3>2. Textura y suavidad</h3>
<p>Las toallas ásperas o las sábanas que han perdido la suavidad por exceso de lavado son una de las quejas más comunes en las reseñas de Airbnb. <strong>No es cuestión de gastar más en ropa, sino de cuidarla con los productos y procesos adecuados</strong>. Un servicio de lavandería profesional utiliza suavizantes y programas de lavado que alargan la vida del textil y mantienen su tacto agradable.</p>

<h3>3. Planchado y presentación</h3>
<p>Una sábana bien planchada y doblada con esmero transmite profesionalidad. Parece un detalle menor, pero los huéspedes internacionales —alemanes, neerlandeses, británicos— son especialmente sensibles a estos cuidados. <strong>La diferencia entre un juego de cama arrugado y uno planchado es una estrella en la reseña</strong>.</p>

<h3>4. Cantidad suficiente</h3>
<p>Nada más incómodo que un huésped que tiene que pedir más toallas porque no hay suficientes para todos, o que encuentra una sola toalla para dos personas. <strong>La regla de oro: dos juegos de toallas por huésped (una de baño y una de mano) más una adicional</strong>. Si hay piscina o playa cerca, añade toallas específicas para la playa.</p>

<h2>Lavar por tu cuenta vs. servicio profesional</h2>

<p>Muchos propietarios empiezan lavando la ropa ellos mismos o pidiendo a la persona que limpia que lo haga. Y funciona… hasta que deja de funcionar. Aquí tienes una comparación realista:</p>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background-color: #f5f5f5;">
      <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Factor</th>
      <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Lavandería casera</th>
      <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Servicio profesional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Tiempo por rotación</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">2-4 horas (lavar, secar, planchar, doblar)</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Entrega lista en 24-48 h</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Calidad de lavado</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Variable según producto y atención</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Consistente, con productos profesionales</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Vida útil del textil</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Menor (ciclos domésticos, detergentes genéricos)</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Mayor (procesos industriales controlados)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Disponibilidad urgente</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Limitada (si la lavadora se estropea, estás perdido)</td>
      <td style="padding: 8px; border: 1px solid #ddd;">24/7 con acuerdos de servicio continuo</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Coste por rotación</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Bajo en dinero, alto en tiempo</td>
      <td style="padding: 8px; border: 1px solid #ddd;">15-30 € por juego completo, sin esfuerzo</td>
    </tr>
  </tbody>
</table>

<blockquote>«El tiempo que ahorras con un servicio de lavandería profesional lo puedes invertir en mejorar otras áreas de tu alquiler — o simplemente en no estresarte.»</blockquote>

<h2>El reto específico de Torrevieja</h2>

<p>Torrevieja tiene condiciones que hacen que la lavandería profesional sea especialmente recomendable:</p>

<ul>
  <li><strong>Agua dura y calcárea</strong> — los ciclos domésticos con agua de la red desgastan las fibras más rápido y dejan residuos en la ropa</li>
  <li><strong>Humedad ambiental alta</strong> — secar al aire libre es lento y puede dejar olor a humedad en las toallas</li>
  <li><strong>Rotaciones rápidas en verano</strong> — en julio y agosto no hay margen para esperar a que se seque una sábana</li>
  <li><strong>Huéspedes internacionales con expectativas altas</strong> — vienen de países donde los estándares de lavandería son muy exigentes</li>
  <li><strong>Playas y piscinas</strong> — los huéspedes usan más toallas de lo normal, y el salitre y la arena las desgastan más rápido</li>
</ul>

<h2>¿Cuántos juegos de ropa necesita tu piso?</h2>

<p>Esta es una de las preguntas que más nos hacen los propietarios. La respuesta depende de la rotación, pero aquí tienes una regla general:</p>

<ul>
  <li><strong>Rotación semanal (típica en invierno):</strong> 3 juegos de sábanas y 6 juegos de toallas por cama</li>
  <li><strong>Rotación cada 2-3 días (típica en verano):</strong> 5-7 juegos de sábanas y 10-14 juegos de toallas por cama</li>
  <li><strong>Rotación diaria (hotelera):</strong> 10+ juegos de sábanas y 20+ juegos de toallas por cama</li>
</ul>

<p>Tener stock suficiente es clave para no depender de que la lavandería devuelva la ropa antes de la siguiente limpieza. <strong>Con un servicio profesional externalizado y un stock bien dimensionado, nunca te quedas sin ropa limpia</strong>.</p>

<h2>Cómo elegir un servicio de lavandería en Torrevieja</h2>

<p>Si decides delegar, no todos los servicios de lavandería son iguales. Esto es lo que debes buscar:</p>

<ul>
  <li><strong>Recogida y entrega a domicilio</strong> — en un alquiler vacacional, cada minuto cuenta. Que vayan a buscar la ropa sucia y devuelvan la limpia al piso te ahorra desplazamientos.</li>
  <li><strong>Productos hipoalergénicos</strong> — cada vez más huéspedes tienen alergias o piel sensible. Un detergente neutro y sin perfumes fuertes evita reacciones y quejas.</li>
  <li><strong>Planchado incluido</strong> — no asumas que todas las lavanderías planchan. Pregúntalo antes.</li>
  <li><strong>Plazos de entrega garantizados</strong> — necesitas saber que si dejas la ropa hoy, la tendrás mañana. Sin excusas.</li>
  <li><strong>Trato cuidadoso de los textiles</strong> — las sábanas y toallas de calidad se estropean con lavados agresivos. Busca un servicio que use programas suaves y centrifugados controlados.</li>
</ul>

<h2>ClaveHogar: lavandería profesional para tu piso vacacional</h2>

<p>En <strong>ClaveHogar</strong> entendemos que la ropa de cama y las toallas son mucho más que un detalle logístico: son parte de la experiencia que ofreces a tus huéspedes. Por eso nuestro servicio de lavandería profesional incluye:</p>

<ul>
  <li>Recogida y entrega en tu piso de Torrevieja</li>
  <li>Lavado con productos profesionales hipoalergénicos</li>
  <li>Planchado y doblado cuidadoso de cada prenda</li>
  <li>Coordinación directa con nuestro equipo de limpieza para que la ropa llegue justo cuando se necesita</li>
  <li>Stock de emergencia si necesitas juegos extra en temporada alta</li>
</ul>

<p>Además, si contratas nuestro servicio integral (limpieza + lavandería + handyman + check-in/check-out), la coordinación es automática. <strong>Nosotros nos encargamos de que todo esté listo para cada huésped, tú solo te preocupas de disfrutar de la rentabilidad.</strong></p>

<p>¿Quieres saber cómo funciona? <strong>Escíbenos por WhatsApp al <a href="https://wa.me/34693976311">+34 693 976 311</a></strong> y te contamos cómo podemos ayudarte con la lavandería de tu piso en Torrevieja.</p>`
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
