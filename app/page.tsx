'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback, memo } from 'react'

/* ═══════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════ */
type TipoBadge = 'red' | 'dark' | 'gray'
interface Antecedente { fecha: string; desc: string; badge: string; tipo: TipoBadge }
interface Ficha {
  nombre: string; apellido: string; dni: string; nacimiento: string; lugar: string
  clasificacion: string; altura: string; peso: string; ojos: string; cabello: string
  historia: string; antecedentes: Antecedente[]
}
interface Member { id: number; alias: string; role: string; pin: string; foto: string; ficha: Ficha }

/* ═══════════════════════════════════════════════
   MEMBERS DATA
═══════════════════════════════════════════════ */
const MEMBERS: Member[] = [
  {
    id: 1, alias: 'Nyx', role: 'President', pin: 'pin-red', foto: 'fotos/Nyx.png',
    ficha: {
      nombre: 'Amelia', apellido: 'Martinez', dni: '19.304.817',
      nacimiento: '24·JUL·2002', lugar: 'Dallas', clasificacion: 'ALTO RIESGO',
      altura: '1.65 m', peso: '60 kg', ojos: 'Verdes', cabello: 'Castaño rojizo',
      historia: `Amelia llegó a la ciudad sin rumbo claro, pero en Mongrel's MC encontró algo que no sabía que le faltaba: una familia real.
Dentro del club dejó de fingir, creciendo hasta convertirse en Tesorera, donde aprendió a manejar dinero, riesgos y silencios peligrosos.
Con el tiempo asumió el liderazgo como Presidenta, cargando decisiones difíciles y la pérdida de compañeros que marcaron al MC.
Mongrel's dejó de ser un grupo y se transformó en su hogar, su identidad y su motivo para seguir adelante.
Cada golpe fortaleció su carácter y su forma de liderar, volviéndola más estratégica y firme.
Pero los negocios comenzaron a caer, y la ciudad dejó de ser segura para ellos.
El MC tomó una decisión clave: irse para sobrevivir.
Amelia, para proteger a los suyos, dejó atrás su nombre y todo lo que la vinculaba al pasado.
Aun así, no partió sola… partió con su MC, con su familia, con quienes habían resistido todo junto a ella.
Y desde cero, en una nueva ciudad, comenzarán a levantar Mongrel's otra vez como un legado que nadie volvería a derribar`,
      antecedentes: [
        { fecha: '07·MAR·2022', desc: 'Tenencia ilegal de armas asociada a propiedades y espacios donde se han encontrado armas sin registro. No se acredita posesión directa.', badge: 'Armas', tipo: 'dark' },
        { fecha: '11·OCT·2024', desc: 'Disputa territorial con organización rival. Detenida, liberada sin cargos.', badge: 'Violencia', tipo: 'red' },
      ]
    }
  },
  {
    id: 2, alias: 'Nahuel', role: 'Vice President', pin: 'pin-red', foto: 'fotos/Nahuel.png',
    ficha: {
      nombre: 'Emilio', apellido: 'Schmidt', dni: '14305817',
      nacimiento: '11-DIC-2002', lugar: 'Chile', clasificacion: 'ALTO RIESGO',
      altura: '1.75 m', peso: '75 kg', ojos: 'Azules ', cabello: 'Castaño platinado',
      historia: 'Criado en un entorno campesino marcado por carencias, aprendió desde temprano a sobrevivir sin depender de nadie. La separación de sus padres y su vida inestable lo volvieron desconfiado, evitando lazos y priorizando su propio beneficio. Desde joven desarrolló habilidades en mecánica, que pronto comenzó a usar en trabajos al margen de la ley. Entre pueblos y ciudades, se fue vinculando con redes delictuales, participando en robos, desarmes y negocios ilegales. Su perfil bajo, mente fría y capacidad para resolver problemas lo hicieron ganar respeto en ese ambiente. Con el tiempo dejó de ser solo un mecánico, convirtiéndose en alguien clave en operaciones más complejas. Su vida nómada lo endureció, enseñándole que la lealtad se gana y el poder se toma. Decide cambiarse el apellido para mantener el anonimato en una nueva ciudad. Al llegar a Allstars, ya no buscaba oportunidades: buscaba control y territorio. Se integra al MONGRELS MC como vicepresidente, aportando experiencia criminal, liderazgo y una visión clara dentro del mundo delictual. ',
      antecedentes: [
        { fecha: '07·MAR·2018', desc: 'Posesión de arma sin registro. Condena suspendida por acuerdo procesal.', badge: 'Armas', tipo: 'dark' },
        { fecha: '12·ENE·2019', desc: 'Asociación ilícita con organización criminal. Liberada por falta de pruebas directas.', badge: 'Crimen Org.', tipo: 'dark' },
        { fecha: '11·OCT·2022', desc: 'Disputa territorial con organización rival. Detenido, liberado sin cargos.', badge: 'Violencia', tipo: 'red' },
      ]
    }
  },
  {
    id: 3, alias: 'Ecko', role: 'Sgt. at Arms', pin: 'pin-yellow', foto: 'fotos/Ecko.png',
    ficha: {
      nombre: 'Jack', apellido: 'Ortiz', dni: '93847512',
      nacimiento: '13·OCT·1998', lugar: 'Sturgis', clasificacion: 'RIESGO MEDIO',
      altura: '1.77 m', peso: '78 kg', ojos: 'Café', cabello: 'Castaño',
      historia: 'Jack Ortiz, nacido el 13 de octubre de 1998, creció bajo la crianza firme de su madre en un entorno donde el respeto y el control eran fundamentales. Desde niño fue observador y tranquilo, aprendiendo a no confiar fácilmente y a actuar solo cuando era necesario. Durante su adolescencia comenzó a pasar más tiempo en la calle, donde formó su carácter. A los 17 años dio sus primeros pasos en el mundo delictual, participando en robos menores y trabajos discretos, destacando por su calma y precisión al actuar. Con el tiempo se involucró en encargos más organizados, desarrollando habilidades en mecánica y resolución de problemas. Su forma directa y eficiente de actuar le dio el apodo "Ecko". Hoy busca consolidar su lugar dentro de Mongrel\'s MC, ganarse el respeto desde abajo y construir su propio nombre sin depender de nadie.',
      antecedentes: [
        { fecha: '12·MAY·2017', desc: 'Robo menor y participación en trabajos discretos vinculados al entorno callejero.', badge: 'Robo', tipo: 'dark' },
        { fecha: '03·NOV·2019', desc: 'Incursión en encargos organizados y actividades ilícitas asociadas a vehículos y mecánica.', badge: 'Mecánica', tipo: 'gray' },
      ]
    }
  },
  {
    id: 4, alias: 'Aka', role: 'Sgt. at Arms', pin: 'pin-yellow', foto: 'fotos/Aka.png',
    ficha: {
      nombre: 'Long', apellido: 'Skywalker', dni: '21.572.325',
      nacimiento: '13·OCT·1998', lugar: 'Texas', clasificacion: 'RIESGO MEDIO',
      altura: '1.70 m', peso: '65 kg', ojos: 'Oscuros', cabello: 'Negro',
      historia: 'Long Skywalker creció en un entorno duro desde muy pequeño, criado solo con su padre y hermanos entre peleas callejeras y supervivencia. Encontró en las motocicletas su escape, y en Mongrel\'s, una verdadera familia. Con el tiempo se ganó el respeto del club participando activamente en sus operaciones, demostrando lealtad y carácter. Hoy, ese camino lo llevó a convertirse en uno de los Sargentos de Armas.',
      antecedentes: [
        { fecha: '18·JUN·2021', desc: 'Alteración del orden público tras un pleito en la vía pública.', badge: 'Pleito', tipo: 'dark' },
        { fecha: '29·ENE·2024', desc: 'Robo de mercancía en una licorería del sector. Investigación abierta.', badge: 'Robo', tipo: 'gray' },
      ]
    }
  },
  {
    id: 5, alias: 'Patoka', role: 'Road Captain', pin: 'pin-yellow', foto: 'fotos/pato.png',
    ficha: {
      nombre: 'Karlos', apellido: 'Garrido', dni: '3125641',
      nacimiento: '24·ENE·2000', lugar: 'San Andreas', clasificacion: 'RIESGO MEDIO',
      altura: '1.75 m', peso: '80 kg', ojos: 'Café', cabello: 'Blanco',
      historia: `Karlos Garrido llegó al Moto Club tras una vida marcada por la mecánica y la supervivencia en la carretera.
Con 20 años, trabajando en el taller Mongrel's, logró ganarse la confianza del grupo.
Ingresó como prospect, iniciando desde abajo y demostrando lealtad mediante diversas tareas.
Durante esta etapa participó en actividades ilícitas como robos y tráfico, consolidando su posición.
Su disciplina y experiencia en rutas lo hicieron destacar rápidamente dentro del club.
Gracias a su compromiso, ascendió hasta el rol de Road Captain.
En este cargo, se encargaba de planificar rutas tanto para distracción como para operaciones ilegales.
También coordinaba encuentros con otras bandas, asegurando logística y discreción.
Su principal responsabilidad era resguardar la seguridad del grupo durante los trayectos.
Así, Karlos pasó de ser un novato a una pieza clave en la estructura operativa del Moto Club.`,
      antecedentes: [
    { fecha: '14·ABR·2017', desc: 'Conducción a exceso de velocidad en zona urbana, poniendo en riesgo a peatones y otros conductores.', badge: 'Tránsito', tipo: 'dark' },
    { fecha: '22·NOV·2021', desc: 'Evasión de control policial mediante fuga en motocicleta.', badge: 'Evasión', tipo: 'red' },
    { fecha: '09·MAY·2022', desc: 'Conducción bajo la influencia de alcohol o sustancias, agravada por exceso de velocidad.', badge: 'Alcohol', tipo: 'red' },
    { fecha: '18·AGO·2023', desc: 'Uso de vehículo con placas adulteradas para evitar identificación.', badge: 'Placas', tipo: 'gray' },
       ]
     }
   },
  {
    id: 6, alias: 'Kayn', role: 'Treasurer', pin: 'pin-white', foto: 'fotos/Kayn.png',
    ficha: {
      nombre: 'Camilo', apellido: 'Skywalker', dni: '555879431',
      nacimiento: '04·MAY·2006', lugar: 'Texas', clasificacion: 'ALTO RIESGO',
      altura: '1.89 m', peso: '92 kg', ojos: 'Negros', cabello: 'Negro',
      historia: 'Camilo Skywalker, hijo de una familia de motociclistas junto a sus dos hermanas y su padre. Desde pequeño destacó por su capacidad innata para las matemáticas, que usó frecuentemente para estafar a sus compañeros de escuela. A los 18 años subsistía mediante lavado de dinero en un mecánico y estafas telefónicas. Junto con un amigo intentó asaltar una joyería, fue detenido y condenado, pero gracias a su familia y contactos logró salir libre. Su mayor aspiración es proteger a todos sus amigos y familia, brindándoles ayuda en todo lo que esté a su alcance.',
      antecedentes: [
        { fecha: '12·SEP·2023', desc: 'Lavado de Activos. Operaciones de blanqueo detectadas en múltiples transacciones.', badge: 'Lavado', tipo: 'dark' },
        { fecha: '14·NOV·2023', desc: 'Estafa reiterada mediante llamadas telefónicas. Múltiples víctimas identificadas.', badge: 'Estafa', tipo: 'red' },
        { fecha: '22·FEB·2024', desc: 'Robo a Mano Armada en joyería. Detenido, liberado por conexiones.', badge: 'Robo', tipo: 'red' },
        { fecha: '18·MAR·2024', desc: 'Extorsión a pequeños negocios. Investigación en curso.', badge: 'En curso', tipo: 'gray' },
      ]
    }
  },
  {
    id: 7, alias: 'Iris', role: 'Secretary', pin: 'pin-white', foto: 'fotos/iris.png',
    ficha: {
      nombre: 'Valeska', apellido: 'Skywalker', dni: '593817264',
      nacimiento: '26·DIC·2001', lugar: 'Texas', clasificacion: 'BAJO RIESGO',
      altura: '1.72 m', peso: '62 kg', ojos: 'Verdes', cabello: 'Castaño',
      historia: `Valeska "Iris" Skywalker creció siendo la mayor de dos hermanos, marcada por la muerte de su madre a los 5 años y aprendiendo demasiado pronto que la vida no da segundas oportunidades.
Su padre, firme y silencioso, sostuvo el hogar mientras ella cargaba con responsabilidades como el cuidado de sus hermanos menores.
Durante su adolescencia conoció a su mejor amigo, quien la introdujo a un entorno de escape, rodeado de riesgos, drogas y malas decisiones.
Bajo la influencia de ese mundo, participó en el robo de un vehículo junto a un grupo de amigos, siendo posteriormente detenida por la policía.
Su padre fue quien la recogió, marcando ese día con una reprimenda que cambió su rumbo, llevándola a trabajar junto a él en el taller.
Entre el olor a aceite y metal, el taller que trabajaba su padre se convirtió en su refugio y también en su escuela.
Lo que empezó como indiferencia terminó transformándose en amor y respeto por las motocicletas.
Con los años encontró en Mongrels algo más que un taller: una hermandad con sus propios mandamientos.
Iris se movía en silencio, observando, escuchando y aprendiendo todo lo que otros ignoraban.
Se ganó su lugar gracias a su inteligencia, discreción y habilidad para la obtención de información. Su lealtad y eficacia le permitieron acercarse a figuras clave dentro del MC.`,
      antecedentes: [
        { fecha: '14·JUL·2018', desc: 'Robo de vehículo en compañía de terceros. Recuperación policial posterior al hecho.', badge: 'Robo', tipo: 'red' },
        { fecha: '14·JUL·2018', desc: 'Detención policial tras el robo de un vehículo. Liberada luego de la intervención de su padre.', badge: 'Detención', tipo: 'gray' },
      ]
    }
  },
  {
    id: 8, alias: 'Jo', role: 'Loyal', pin: 'pin-blue', foto: 'fotos/k..png',
    ficha: {
      nombre: 'Joel', apellido: 'Skywalker', dni: '— SIN REGISTRO —',
      nacimiento: '— — —', lugar: 'Desconocido', clasificacion: 'SIN CLASIFICAR',
      altura: '—', peso: '—', ojos: '—', cabello: '—',
      historia: 'Identidad sin confirmar. Solo conocido como "K." dentro del club. No existen registros previos en el sistema de la LSPD. Se investiga posible uso de identidad falsa o eliminación de antecedentes. Figura de extrema discreción dentro de la organización. Caso abierto.',
      antecedentes: [
        { fecha: '— · — · ——', desc: 'Sin antecedentes registrados en el sistema. Identidad bajo investigación activa.', badge: 'Sin datos', tipo: 'gray' },
      ]
    }
  },
  {
    id: 9, alias: 'Fufe', role: 'Member', pin: 'pin-blue', foto: 'fotos/Fufe.png',
    ficha: {
      nombre: 'Ethan', apellido: 'Blake', dni: '21.947.362-8',
      nacimiento: '18·SEP·2003', lugar: 'Chile', clasificacion: 'RIESGO MEDIO',
      altura: '1.80 m', peso: '74 kg', ojos: 'Marrones', cabello: 'Oscuro',
      historia: 'En Chile, Ethan creció entre pasajes y motores viejos que rugían más fuerte que cualquier consejo. Desde chico aprendió a moverse solo, confiando únicamente en su mascota Fufe, la única que nunca lo dejó. Cuando la perdió, adoptó ese nombre como símbolo de lealtad. Con el tiempo, las motos empezaron a llamar su atención, viendo en ellas una forma de escape y pertenencia. Buscando una población donde asentarse, empezó a acercarse al ambiente biker. Así fue como conoció a la Mongrels MC, un club donde el respeto se gana rodando y cumpliendo. Fufe no habla de más, pero siempre responde cuando se le necesita. Hoy intenta hacerse un nombre en la carretera, llevando el apodo Fufe con orgullo.',
      antecedentes: [
        { fecha: '14·ABR·2021', desc: 'Detención por robo a establecimiento comercial. Registro policial activo.', badge: 'Robo', tipo: 'dark' },
        { fecha: '09·NOV·2022', desc: 'Detención por porte de arma de bajo calibre sin autorización.', badge: 'Armas', tipo: 'red' },
      ]
    }
  },
  {
    id: 10, alias: 'Kai', role: 'Member', pin: 'pin-blue', foto: 'fotos/Kai.png',
    ficha: {
      nombre: 'Marcus', apellido: 'Kennard', dni: '483110653',
      nacimiento: '27·JUL·2000', lugar: 'Houston', clasificacion: 'RIESGO MEDIO',
      altura: '1.75 m', peso: '75 kg', ojos: 'Oscuros', cabello: 'Negro',
      historia: `Marcus Kennard, conocido como Kai, nació el 27 de julio de 2000 en Houston, en una familia disfuncional dentro de un barrio de escasos recursos. Desde joven aprendió a moverse en ambientes difíciles, donde sobrevivir era más importante que cualquier otra cosa. Aun así, tenía una pasión distinta: era fanático de la mecánica y trabajaba en un taller de su barrio, donde encontraba momentos de calma. Su historial estaba marcado por el porte y tráfico ilegal de armas, un negocio que lo envolvió rápidamente. Las riñas en fiestas clandestinas eran casi una rutina, siempre terminaban con alguien herido y él saliendo ileso. Kai entendía la violencia como un lenguaje necesario para hacerse respetar.`,
      antecedentes: [
        { fecha: '12·JUN·2019', desc: 'Porte y tráfico ilegal de armas. Investigación por transporte y venta no autorizada.', badge: 'Armas', tipo: 'dark' },
        { fecha: '03·SEP·2021', desc: 'Participación en riñas en fiestas ilegales con lesiones a terceros.', badge: 'Peleas', tipo: 'red' },
        { fecha: '22·NOV·2023', desc: 'Acusado de extorsión a comerciantes locales; causa en investigación.', badge: 'Extorsión', tipo: 'red' },
      ]
    }
  },
  {
    id: 11, alias: 'Drako', role: 'Prospect', pin: 'pin-blue', foto: 'fotos/draco.png',
    ficha: {
      nombre: 'Demon', apellido: 'Salvatore', dni: '596814216',
      nacimiento: '13·MAR·2001', lugar: 'Texas, EE.UU.', clasificacion: 'RIESGO MEDIO',
      altura: '1.81 m', peso: '80 kg', ojos: 'Oscuros', cabello: 'Negro',
      historia: `Demon Salvatore creció en Texas como hijo único, criado solo por su madre tras el abandono de su padre a los 8 años. Las dificultades económicas lo empujaron al mundo delictual, robando autos y moviendo droga, enamorado de la adrenalina de escapar. Fue en esa época, entre clases que nunca faltó por su madre, cuando conoció a Valeska Skywalker. Llegó a su vida sin aviso: una chica de mirada firme y pocas palabras que se sentó a su lado un día y simplemente no se fue. Se convirtió en la única persona ante quien Demon bajaba la guardia, su cómplice, su ancla, su mejor amiga. Sin quererlo, la fue introduciendo en ese lado oscuro, en decisiones que ninguno debería haber tomado. Una noche fueron detenidos juntos y la mirada devastada de su madre en la comisaría le rompió el alma, prometiendo no volver a hacerla llorar. Terminó sus estudios, encontró su pasión por las motocicletas y fue Valeska quien le abrió las puertas de Mongrels, donde comenzó como simple mecánico, se ganó la confianza de sus miembros con trabajo y lealtad, hasta convertirse hoy en prospecto. Con los años encontró en Mongrels algo más que un taller: una hermandad con sus propios mandamientos.`,
      antecedentes: [
        { fecha: '09·JUL·2016', desc: 'Detenido por robo de vehículo durante la adolescencia junto a un grupo de conocidos.', badge: 'Robo', tipo: 'dark' },
        { fecha: '14·FEB·2017', desc: 'Participó en actividades de distribución menor de sustancias ilegales durante su juventud.', badge: 'Drogas', tipo: 'red' },
      ]
    }
  },
  {
    id: 12, alias: 'Pulguita', role: 'Prospect', pin: 'pin-white', foto: 'fotos/Pulguita.png',
    ficha: {
      nombre: 'Samantha', apellido: 'Schmidt', dni: '21.428.793-6',
      nacimiento: '09·MAR·2003', lugar: 'La Poblacion el Castillo', clasificacion: 'BAJO RIESGO',
      altura: '1.50 m', peso: '52 kg', ojos: 'Marrones', cabello: 'Castaño',
      historia: `En la población el castillo Samantha creció entre carencias, libros prestados y calles que enseñan rápido. Desde niña entendió que nadie vendría a salvarla, por lo que aprendió a valerse sola y dejó el colegio temprano para trabajar donde pudiera.
Con el tiempo comenzó a ser conocida como "Pulguita", la más reciente prospecto del club, pequeña en estatura pero enorme en determinación.
Tras ser adoptada formalmente por Nahuel, tomó el apellido Schmidt como símbolo de respeto y lealtad.
Se ganó la atención del MC tras varios favores sin pedir nada a cambio y hoy continúa en evaluación por parte del consejo.
Con 23 años, llega a la ciudad con un plan claro: hacerse un nombre sin hacer ruido, pero dejando huella donde pase.`,
      antecedentes: [
        { fecha: '01·MAY·2024', desc: 'Detención por desórdenes en la vía pública tras riña callejera. Causa menor, sin condena vigente.', badge: 'Desórdenes', tipo: 'gray' },
        { fecha: '19·JUL·2024', desc: 'Constatación policial por participación en pelea fuera de local nocturno, sin cargos posteriores.', badge: 'Pelea', tipo: 'gray' },
      ]
    }
  },
]

/* ═══════════════════════════════════════════════
   IDEAS DE ROL DATA
═══════════════════════════════════════════════ */
const IDEAS = [
  {
    num: '01', nivel: 'SOCIAL', color: 'idea-social',
    titulo: 'Rutas & Cobro',
    desc: 'El club recorre Los Santos en una ruta organizada, estableciendo cobros de protección a negocios durante su recorrido. Civiles, mecánicos y LSPD terminan involucrados, generando dinámicas de confrontación y negociación.',
  },
  {
    num: '02', nivel: 'POLÍTICO', color: 'idea-politico',
    titulo: 'Cumbre de Clanes',
    desc: 'Encuentro entre MCs rivales para negociar acuerdos o declarar conflicto abierto. La presidenta lidera la negociación mientras el Sgt. at Arms mantiene la seguridad; una sola decisión puede escalar a guerra abierta.',
  },
  {
    num: '03', nivel: 'CRIMINAL', color: 'idea-criminal',
    titulo: 'Ruta del Norte',
    desc: 'Operativo de traslado de carga sensible por rutas del condado. La logística es clave, pero controles policiales y emboscadas de grupos rivales ponen en riesgo la operación.',
  },
  {
    num: '04', nivel: 'SOCIAL', color: 'idea-social',
    titulo: 'Carreras clandestinas & peleas',
    desc: 'Circuitos de carreras ilegales y eventos de combate respaldados por el club. Apostadores, corredores y peleadores crean un caldo de tensión donde el control del evento aporta ingresos y reputación.',
  },
  {
    num: '05', nivel: 'OPERATIVO', color: 'idea-operativo',
    titulo: 'Logística en Ruta',
    desc: 'Operaciones de entrega y transporte con red de distribución activa. Cada traslado abre la posibilidad de interceptaciones, robos y conflictos espontáneos en ruta, generando interacción constante.',
  },
  {
    num: '06', nivel: 'ECONÓMICO', color: 'idea-business',
    titulo: 'Negocios de Cobertura',
    desc: 'Fachadas legales (talleres, bares, bodegas) que sirven como puntos de encuentro, lavado de dinero y logística. Funcionan como blancos para inspecciones o ataques rivales, además de sostener la red del MC.',
  },
]

const HISTORY_IMAGES = [
  '/foticos/history1.png',
  '/foticos/history2.png',
  '/foticos/history3.png',
  '/foticos/history4.png',
]

const GALLERY_IMAGES = [
  '/foticos/galeria2.png',
  '/foticos/galeria3.png',
  '/foticos/galeria4.png',
  '/foticos/galeria5.png',
  '/foticos/galeria6.png',
  '/foticos/galeria8.png',
  '/foticos/galeria9.png',
  '/foticos/galeria10.png',
  '/foticos/galeria11.png',


]

/* ═══════════════════════════════════════════════
   NAV LINKS (shared between desktop + mobile)
═══════════════════════════════════════════════ */
const NAV_LINKS = [
  { href: '#historia',    label: 'Historia' },
  { href: '#miembros',   label: 'Miembros' },
  { href: '#porque',     label: '¿Por qué?' },
  { href: '#ideas',      label: 'Ideas de Rol' },
  { href: '#postulacion',label: 'Postulación' },
  { href: '#galeria',    label: 'Galería' },
]

/* ═══════════════════════════════════════════════
   FICHA MODAL COMPONENT — memoizado para evitar
   re-renders cuando el padre cambia estado
═══════════════════════════════════════════════ */
const FichaModal = memo(function FichaModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const f = member.ficha

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-inner" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <span>✕</span> CERRAR FICHA
        </button>

        <div className="modal-sheet">
          <div className="wm-modal">LSPD</div>

          {/* ── DOC HEADER ── */}
          <div className="fdoc-header">
            <div className="fdoc-badge">
              <Image src="/fotos/citylossantos.png" alt="City of Los Santos" width={54} height={54} className="fdoc-logo fdoc-logo-city" />
              <Image src="/fotos/lspd_logo.png" alt="LSPD" width={54} height={54} className="fdoc-logo fdoc-logo-lspd" />
            </div>
            <div className="fdoc-center">
              <div className="fdoc-dept">Los Santos Police Department</div>
              <div className="fdoc-sub">División de Crimen Organizado · San Andreas</div>
              <div className="fdoc-type">Ficha Criminal — Registro Oficial</div>
            </div>
            <div className="fdoc-case">
              <div className="fdoc-case-label">Caso N°</div>
              <div className="fdoc-case-num">SA-2024-{String(member.id).padStart(4, '0')}</div>
              <div className="fdoc-case-label" style={{ marginTop: 4 }}>Registro ID</div>
              <div className="fdoc-case-num" style={{ fontSize: 11 }}>MCR-{String(member.id).padStart(2, '0')}</div>
            </div>
            <div className="fdoc-stripe" />
          </div>

          {/* ── DOC BODY ── */}
          <div className="fdoc-body">

            {/* LEFT */}
            <div className="fdoc-left">
              <div className="fdoc-photo">
                {member.foto
                  ? <img
                      src={member.foto}
                      alt={member.alias}
                      loading="eager"
                      decoding="async"
                      width={220}
                      height={293}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  : (
                    <div className="fdoc-photo-ph">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7a6a50" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                      <span>Sin foto</span>
                    </div>
                  )
                }
                <div className="fdoc-photo-num">REG · SA-{String(member.id).padStart(4, '0')}-MCR</div>
              </div>

              <div className="fdoc-classif">
                <div className="fdoc-cl-label">Clasificación</div>
                <div className={`fdoc-cl-val ${f.clasificacion === 'ALTO RIESGO' ? 'cl-alto' : f.clasificacion === 'RIESGO MEDIO' ? 'cl-medio' : 'cl-bajo'}`}>
                  {f.clasificacion}
                </div>
              </div>

              <div className="fdoc-phys">
                {[['Altura', f.altura], ['Peso', f.peso], ['Ojos', f.ojos], ['Cabello', f.cabello]].map(([lbl, val]) => (
                  <div key={lbl} className="fdoc-phys-cell">
                    <div className="fdoc-phys-lbl">{lbl}</div>
                    <div className="fdoc-phys-val">{val}</div>
                  </div>
                ))}
              </div>

              <div>
                <div className="fdoc-field-label">Huellas dactilares</div>
                <div className="fdoc-fp-row">
                  <div className="fdoc-fp"><div className="fdoc-fp-lbl">IZQ.</div></div>
                  <div className="fdoc-fp"><div className="fdoc-fp-lbl">DER.</div></div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="fdoc-right">
              <div className="fdoc-2col">
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">Apellido</div>
                  <div className="fdoc-field-val big">{f.apellido}</div>
                </div>
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">Nombre</div>
                  <div className="fdoc-field-val big">{f.nombre}</div>
                </div>
              </div>
              <div className="fdoc-2col">
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">Alias / Apodo</div>
                  <div className="fdoc-field-val">&ldquo;{member.alias}&rdquo;</div>
                </div>
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">DNI</div>
                  <div className="fdoc-field-val">{f.dni}</div>
                </div>
              </div>
              <div className="fdoc-2col">
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">Fecha de nacimiento</div>
                  <div className="fdoc-field-val">{f.nacimiento}</div>
                </div>
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">Lugar de nacimiento</div>
                  <div className="fdoc-field-val">{f.lugar}</div>
                </div>
              </div>
              <div className="fdoc-2col">
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">Rango en el MC</div>
                  <div className="fdoc-field-val">{member.role}</div>
                </div>
                <div className="fdoc-field-row">
                  <div className="fdoc-field-label">Organización</div>
                  <div className="fdoc-field-val">Mongrels MC</div>
                </div>
              </div>

              <div className="fdoc-historia">
                <div className="fdoc-field-label">Historia / Perfil del sujeto</div>
                <div className="fdoc-historia-text">{f.historia}</div>
              </div>

              <div>
                <div className="fdoc-field-label" style={{ marginBottom: 10 }}>Antecedentes criminales</div>
                <div className="fdoc-antec-list">
                  {f.antecedentes.map((a, i) => (
                    <div key={i} className="fdoc-antec-item">
                      <div className="fdoc-antec-date">{a.fecha}</div>
                      <div className="fdoc-antec-desc">{a.desc}</div>
                      <div className={`fdoc-antec-badge ab-${a.tipo}`}>{a.badge}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── DOC FOOTER ── */}
          <div className="fdoc-footer">
            <div className="fdoc-footer-stamp">
              LSPD · División Crimen Organizado · San Andreas PD<br />
              Documento oficial — No reproducir sin autorización
            </div>
            <div className="fdoc-footer-conf">Confidencial</div>
            <div className="fdoc-footer-sig">
              Emitido por:<br />
              Det. R. Morales · Badge #4471<br />
              División C.O. — LSPD
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})  // ← fin React.memo

/* ═══════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════ */
export default function Home() {
  const [activeMember, setActiveMember] = useState<Member | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  /* callbacks estables — no se recrean en cada render */
  const closeMember = useCallback(() => setActiveMember(null), [])
  const closeMenu   = useCallback(() => setMenuOpen(false),    [])

  /* Preload de foto al hacer hover sobre la card —
     el browser descarga la imagen ANTES de que el usuario haga click */
  const preloadPhoto = useCallback((foto: string) => {
    if (!foto) return
    const link = document.createElement('link')
    link.rel  = 'prefetch'
    link.href = foto
    link.as   = 'image'
    // evitar duplicados
    if (!document.head.querySelector(`link[href="${foto}"]`)) {
      document.head.appendChild(link)
    }
  }, [])

  /* lock scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {activeMember && <FichaModal member={activeMember} onClose={closeMember} />}

      {/* ══ MOBILE NAV OVERLAY ══ */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMenu}>
          <button className="mobile-nav-close" onClick={closeMenu} aria-label="Cerrar menú">✕</button>
          <div className="mobile-nav-logo">
            <Image src="/logo.png" alt="Mongrels MC" width={64} height={64} />
            <span>Mongrels <em>MC</em></span>
          </div>
          <ul onClick={e => e.stopPropagation()}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  <Image src="/fotos/1porcent.png" alt="" width={16} height={20} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ══ NAV ══ */}
      <nav className="mc-nav">
        <div className="nav-accent-left" />
        <div className="nav-inner">
          <a href="#hero" className="nav-brand">
            <Image src="/logo.png" alt="Mongrels MC" width={40} height={40} className="nav-logo-img" />
            <div className="nav-brand-text">
              <div className="nav-brand-name">Mongrels <span>MC</span></div>
              <div className="nav-brand-sub">Sede San Andreas · FiveM RP</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href}>
                  <Image src="/fotos/1porcent.png" alt="1%" width={22} height={28} className="nav-link-icon" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — solo móvil */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>

          <div className="nav-tail">
            <div className="nav-chain">
              {[...Array(5)].map((_, i) => (
                <Image key={i} src="/fotos/1porcent.png" alt="1%" width={12} height={16} className="nav-chain-icon" />
              ))}
            </div>
          </div>
        </div>
        <div className="nav-bottom-line" />
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero" className="hero">
        <div className="hero-photo" />
        <div className="hero-bg" />
        <div className="hero-vignette" />
        <div className="hero-texture" />
        <div className="hero-watermark">MONGRELS</div>
        <div className="hero-content">
          <div className="hero-pre">
            <div className="hero-pre-line" />
            <div className="hero-pre-text">San Andreas · FiveM Roleplay</div>
            <div className="hero-pre-line" />
          </div>
          <Image src="/logo.png" alt="Mongrels MC" width={200} height={200} className="hero-logo" priority fetchPriority="high" />
          <h1 className="hero-title">Mongrels <em>MC</em></h1>
          <div className="hero-tagline">&ldquo;Vive Rápido, Muere Joven&rdquo;</div>
          <div className="hero-rule">
            <div className="hero-rule-line" />
            <div className="hero-rule-diamond" />
            <div className="hero-rule-line" />
          </div>
          <div className="hero-chips">
            <div className="hero-chip hl">1% Motorcycle Club</div>
            <div className="hero-chip">12 Miembros</div>
            <div className="hero-chip">Sede San Andreas</div>
          </div>
        </div>
        <div className="hero-bottom-bar">
          <div className="hbb-item"><span className="hbb-num">12</span><span className="hbb-label">Miembros</span></div>
          <div className="hbb-sep" />
          <div className="hbb-item"><span className="hbb-num">2015</span><span className="hbb-label">Fundación</span></div>
          <div className="hbb-sep" />
          <div className="hbb-item"><span className="hbb-num">1%</span><span className="hbb-label">Outlaw MC</span></div>
          <div className="hbb-sep" />
          <div className="hbb-item"><span className="hbb-num">S.A.</span><span className="hbb-label">Territorio</span></div>
        </div>
        <div className="hero-scroll">Scroll <span /></div>
      </section>

      <div className="sdiv" />

      {/* ══ HISTORIA ══ */}
      <section id="historia" className="sec">
        <div className="container">
          <div className="sec-eye">Nuestros orígenes</div>
          <h2 className="sec-title">Historia</h2>
          <div className="sec-rule" />
          <div className="hist-blocks">
            <div className="hist-block">
              <div className="hist-text">
                <div className="hist-year-tag">2017</div>
                <h3>Episodio 1 — El Nacimiento</h3>
                <p>Todo empezó en un garaje del puerto de San Francisco. Henry Pine, veterano de Afganistán, reunió a seis personas y fundó Mongrel's MC: un club que no se arrodilla ante nadie. Los primeros ingresos vinieron de peleas clandestinas en los muelles y tráfico de chalecos antibalas robados de bases militares.</p>
                <p>Alice Monterrey tenía contactos en la base naval de Alameda. Kyle Böhringer manejaba las finanzas. Nathan Naberrie era el peleador estrella. Sasha Scherbatsky, el ruso con pasado en la mafia, organizaba el circuito. Los Hell Angels les dejaron una nota clavada con un cuchillo: <em>"Los perros callejeros no duran mucho en territorio ajeno."</em> Henry la quemó sin pensarlo dos veces.</p>
              </div>
              <div className="hist-img-col">
                <div className="hist-img-overlay" />
                <img src={HISTORY_IMAGES[0]} alt="Historia 2017" loading="lazy" decoding="async" />
                <div className="img-year">2017</div>
              </div>
            </div>
            <div className="hist-block rev">
              <div className="hist-text">
                <div className="hist-year-tag">2019</div>
                <h3>Episodio 2 — Fracturas</h3>
                <p>The Lost MC destruyó sus rings de pelea y robó su inventario. Las cuentas no cerraban. Sasha trajo una propuesta: un transporte de cocaína desde Tijuana, cincuenta mil de una vez. Kyle votó en contra. Nathan a favor.</p>
                <p>Cuatro a tres: ganó el sí. Así entró el club al mundo del narcotráfico, bajo las órdenes de un cartel mexicano llamado "Patrón" que les ofreció doscientos mil mensuales a cambio de establecer una célula permanente en Los Santos. Las grietas internas ya comenzaban a formarse.</p>
              </div>
              <div className="hist-img-col">
                <div className="hist-img-overlay" />
                <img src={HISTORY_IMAGES[1]} alt="Historia 2019" loading="lazy" decoding="async" />
                <div className="img-year">2019</div>
              </div>
            </div>
            <div className="hist-block">
              <div className="hist-text">
                <div className="hist-year-tag">2021-2022</div>
                <h3>Episodio 3 — El Precio del Poder</h3>
                <p>Alice Monterrey llevaba semanas reuniéndose con agentes del DEA. Patrón lo descubrió y les dio 24 horas. Nathan apretó el gatillo antes de que Kyle pudiera reaccionar. El operativo federal fracasó porque ya los habían avisado, pero el daño interno fue brutal.</p>
                <p>Sasha murió acribillado en una emboscada en el puerto, defendiendo el último punto de distribución. Kyle dejó una nota bajo la puerta de Nathan: <em>"Lo siento, hermano. El juego se puso demasiado peligroso."</em> Y desapareció. Nathan quedó solo, con dos miembros y una ciudad entera que quería verlo muerto.</p>
              </div>
              <div className="hist-img-col">
                <div className="hist-img-overlay" />
                <img src={HISTORY_IMAGES[2]} alt="Historia 2021-22" loading="lazy" decoding="async" />
                <div className="img-year">2021-22</div>
              </div>
            </div>
            <div className="hist-block rev">
              <div className="hist-text">
                <div className="hist-year-tag">2027</div>
                <h3>Episodio 4 — Renacimiento</h3>
                <p>Cinco años después, Nathan tenía 28 años y un taller de mecánica que perdía dinero cada mes. Llegó Manuel Carrillo, representante de la Familia Carrillo Fuentes, con una propuesta diferente: recursos y contactos, pero con reglas claras — nada de drogas en las calles, nada de guerra innecesaria, nada que lastime civiles.</p>
                <p>Nathan reclutó seis personas cuidadosamente, incluyendo a su propio hijo Camilo. Sin juramentos de sangre ni gritos de conquista. Solo seis parches sobre una mesa de trabajo y la determinación de construir algo que valiera la pena proteger. Mongrel's MC renació en Los Santos. La historia apenas comienza.</p>
              </div>
              <div className="hist-img-col">
                <div className="hist-img-overlay" />
                <img src={HISTORY_IMAGES[3]} alt="Historia 2027" loading="lazy" decoding="async" />
                <div className="img-year">2027</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ══ MIEMBROS ACTIVOS ══ */}
      <section id="miembros" className="sec sec-dark">
        <div className="container">
          <div className="sec-eye">Registro criminal · LSPD División Crimen Organizado</div>
          <h2 className="sec-title">Miembros Activos</h2>
          <div className="sec-rule" />
          <p className="board-desc">Caso #SA-2024-0847 · En curso · {MEMBERS.length} sujetos identificados</p>
        </div>
        <div className="board-container">
          <div className="board-scene">
            <div className="board-frame">
              <div className="cork-surface">
                <div className="police-header">
                  <div className="pd-badge">Dpto. Policía · San Andreas PD · División Crimen Organizado</div>
                  <div className="pd-case">Caso #SA-2024-0847 · MONGRELS MC · En curso · Clasificado</div>
                </div>
                <div className="conf-stamp">
                  <span>Confidencial</span>
                  <small>San Andreas PD</small>
                </div>

                {/* Strings SVG */}
                <svg className="board-strings-svg" viewBox="0 0 1260 820" preserveAspectRatio="none">
                  <g stroke="#8B1525" strokeWidth="1.2" opacity="0.55" fill="none">
                    <line x1="96" y1="140" x2="302" y2="135" />
                    <line x1="302" y1="135" x2="508" y2="142" />
                    <line x1="508" y1="142" x2="714" y2="138" />
                    <line x1="714" y1="138" x2="920" y2="140" />
                    <line x1="920" y1="140" x2="1126" y2="135" />
                    <line x1="96" y1="410" x2="302" y2="405" />
                    <line x1="302" y1="405" x2="508" y2="412" />
                    <line x1="508" y1="412" x2="714" y2="408" />
                    <line x1="714" y1="408" x2="920" y2="410" />
                    <line x1="920" y1="410" x2="1126" y2="405" />
                    <line x1="96" y1="140" x2="96" y2="410" />
                    <line x1="1126" y1="135" x2="1126" y2="405" />
                    <line x1="508" y1="142" x2="508" y2="412" />
                    <line x1="302" y1="135" x2="508" y2="412" />
                    <line x1="714" y1="138" x2="508" y2="412" />
                    <line x1="920" y1="140" x2="714" y2="408" />
                    <line x1="1126" y1="135" x2="920" y2="410" />
                    <line x1="96" y1="140" x2="302" y2="405" />
                    <line x1="302" y1="135" x2="96" y2="410" />
                    <line x1="714" y1="138" x2="920" y2="410" />
                    <line x1="302" y1="405" x2="96" y2="140" opacity="0.3" />
                    <line x1="920" y1="410" x2="1126" y2="600" opacity="0.4" />
                    <line x1="508" y1="412" x2="302" y2="600" opacity="0.3" />
                  </g>
                </svg>

                <div className="board-grid">
                  {MEMBERS.map((m) => (
                    <div
                      key={m.id}
                      className={`bcard bcard-${m.id}`}
                      onClick={() => setActiveMember(m)}
                      onMouseEnter={() => preloadPhoto(m.foto)}
                      onTouchStart={() => preloadPhoto(m.foto)}
                      title={`Ver ficha de ${m.alias}`}
                    >
                      <div className={`pushpin ${m.pin}`} />
                      <div className="photo-wrap">
                        <div className="photo-img">
                          <div className="ev-num">#{String(m.id).padStart(2, '0')}</div>
                          {m.foto && (
                            <img
                              src={m.foto}
                              alt={m.alias}
                              loading="lazy"
                              decoding="async"
                              width={160}
                              height={213}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                            />
                          )}
                        </div>
                        <div className="photo-caption">
                          <div className="p-name">{m.alias}</div>
                          <div className="p-role">{m.role}</div>
                        </div>
                      </div>
                      <div className="bcard-hover-label">Ver ficha →</div>
                    </div>
                  ))}
                </div>

                {/* Stickies */}
                <div className="sticky sy" style={{ bottom: 20, left: 30, transform: 'rotate(-3.5deg)' }}>
                  {MEMBERS.length} sujetos<br />identificados<br />activos en S.A.
                </div>
                <div className="sticky sb" style={{ bottom: 130, left: 170, transform: 'rotate(2.2deg)' }}>
                  Vínculos<br />con tráfico<br />¿confirmar?
                </div>
                <div className="sticky sp" style={{ bottom: 80, left: 320, transform: 'rotate(-1.5deg)' }}>
                  Clubhouse<br />sin ubicar<br />→ seguimiento
                </div>
                <div className="sticky so" style={{ bottom: 110, left: 470, transform: 'rotate(3deg)' }}>
                  Pres. = líder<br />operativo<br />Nyx / Morales
                </div>
                <div className="sticky sg" style={{ bottom: 90, left: 620, transform: 'rotate(-2deg)' }}>
                  Activos<br />desde 2015<br />alta peligrosidad
                </div>

                {/* Doc paper */}
                <div className="doc-paper" style={{ bottom: 16, right: 280, transform: 'rotate(-2.5deg)' }}>
                  <div className="doc-title">Informe #0847</div>
                  Organización MC<br />San Andreas región<br />Estado: <strong>ACTIVO</strong><br />Miembros: {MEMBERS.length}<br />Riesgo: Alto<br />Prioridad: MÁXIMA
                </div>

                {/* Map */}
                <div className="board-map" style={{ bottom: 16, right: 36 }}>
                  <img src="fotos/Sede.png" alt="Sede" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ══ POR QUÉ NOSOTROS ══ */}
      <section id="porque" className="sec sec-alt">
        <div className="container">
          <div className="sec-eye">Nuestra propuesta</div>
          <h2 className="sec-title">¿Por qué<br />nosotros?</h2>
          <div className="sec-rule" />
          <p className="porque-intro">
            No somos simplemente un grupo de amigos con motocicletas. Somos una organización con jerarquía, normas claras y un universo propio. Eso es lo que nos distingue.
          </p>
          <div className="porque-grid">
            <div className="porque-card">
              <div className="porque-num">01</div>
              <div className="porque-icon">⛓</div>
              <h3>Hermandad auténtica</h3>
              <p>Contamos con una estructura definida, rangos con verdadero peso, rituales de ingreso y un código interno pudiendo entrar pero no salir.</p>
            </div>
            <div className="porque-card">
              <div className="porque-num">02</div>
              <div className="porque-icon">🔥</div>
              <h3>Rol criminal sólido</h3>
              <p>Extorsiones, tráfico, control de territorio, alianzas y traiciones ejecutadas dentro de un marco consistente. Operamos con lógica interna, continuidad y consecuencias.</p>
            </div>
            <div className="porque-card">
              <div className="porque-num">03</div>
              <div className="porque-icon">🏍</div>
              <h3>Cultura MC completa</h3>
              <p>Parches, rutas organizadas de forma periódica, clubhouse, ceremonias y un lenguaje propio. Una experiencia fiel a lo que representa un MC.</p>
            </div>
            <div className="porque-card">
              <div className="porque-num">04</div>
              <div className="porque-icon">🗺</div>
              <h3>Impacto en el servidor</h3>
              <p>Cada acción que realizamos tiene la intención de crear la interacción entre múltiples facciones. Somos un eje que dinamiza el submundo de San Andreas.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ══ IDEAS DE ROL ══ */}
      <section id="ideas" className="sec">
        <div className="container">
          <div className="sec-eye">Propuestas de actividad · FiveM RP</div>
          <h2 className="sec-title">Ideas de Rol</h2>
          <div className="sec-rule" />
          <p className="ideas-intro">
            Escenarios concretos que el club puede generar en el servidor — involucrando civiles, fuerzas del orden, organizaciones rivales y aliados.
          </p>
          <div className="ideas-grid">
            {IDEAS.map((idea) => (
              <div key={idea.num} className={`idea-card ${idea.color}`}>
                <div className="idea-header">
                  <div className="idea-num">{idea.num}</div>
                  <div className="idea-nivel">{idea.nivel}</div>
                </div>
                <h3 className="idea-titulo">{idea.titulo}</h3>
                <p className="idea-desc">{idea.desc}</p>
                <div className="idea-footer-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ══ POSTULACIÓN ══ */}
      <section id="postulacion" className="sec sec-alt">
        <div className="container">
          <div className="sec-eye">Postulación al servidor · FiveM</div>
          <h2 className="sec-title">Ficha de<br />Postulación</h2>
          <div className="sec-rule" />
          <p className="post-header-note">Mongrels MC postula como organización de Motorcycle Club en el servidor, ofreciendo dinámica criminal y social auténtica en San Andreas.</p>
          <div className="post-cards">
            <div className="pcard">
              <div className="pcard-num">01 · TIPO DE LOCAL</div>
              <div className="pcard-title">Motorcycle Club</div>
              <p>Fraternidad de motociclistas organizada de forma jerárquica, con actividades que combinan tanto el rol social como el ámbito criminal, buscando una integración equilibrada entre ambos. Cuenta con una sede estable tipo, realiza rutas planificadas y mantiene presencia activa en el submundo de San Andreas.</p>
            </div>
            <div className="pcard">
              <div className="pcard-num">02 · UBICACIÓN</div>
              <div className="pcard-title">Sede del Club</div>
              <p>Proyectamos establecer nuestro clubhouse en Mirror Park, Los Santos, aprovechando su entorno residencial y su identidad urbana característica dentro de la ciudad. La sede contemplará un espacio funcional con garaje para motocicletas, bar interno y sala de reuniones, buscando integrarse de forma discreta con el sector mientras se mantiene la esencia del club. Se consideran además propuestas de mapeo externo que potencien su estética y coherencia con la identidad del MC.</p>
            </div>
            <div className="pcard full">
              <div className="pcard-num">03 · CONTRIBUCIÓN AL SERVIDOR</div>
              <div className="pcard-title">Aporte a la comunidad</div>
              <ul>
                <li>Actividad criminal estructurada: operaciones de tráfico, protección y conflictos territoriales que impulsan una actividad constante entre policías, rivales y aliados.</li>
                <li>Rutas y encuentros multitudinarios: se organizan rutas y encuentros, tanto en carretera como en el clubhouse, orientados a convocar e integrar a distintos actores de la comunidad.</li>
                <li>Flujo económico alternativo: se brindan distintos servicios —como acuerdos, cobros de extorsión, entre otros— que aportan dinamismo a la actividad delictual.</li>
                <li>Cultura biker integral: desarrollo de prácticas propias del mundo MC, incluyendo códigos, jerarquías, rituales y actividades tanto en el ámbito civil como delictual, reforzando la identidad del club.</li>
                <li>Rol social: Local como punto de encuentro, bar encubierto y escenario para instancias abiertas que fomentan la participación comunitaria.</li>
              </ul>
            </div>
            <div className="pcard">
              <div className="pcard-num">04 · PROYECCIÓN Y OBJETIVOS</div>
              <div className="pcard-title">Visión y metas</div>
              <ul>
                <li><strong style={{ color: 'var(--white2)' }}>Corto plazo:</strong> consolidar nuestra sede y afirmar presencia territorial, estableciendo las bases operativas del club.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Mediano plazo:</strong> consolidar el control de zonas clave y estructurar una membresía activa y alineada a los códigos del club.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Largo plazo:</strong> convertirse en un MC reconocido y respetado, con territorio definido, historia propia y peso dentro del equilibrio de la ciudad.</li>
              </ul>
            </div>
            <div className="pcard">
              <div className="pcard-num">05 · JEFATURA Y JERARQUÍA</div>
              <div className="pcard-title">Estructura interna</div>
              <div className="hier-table">
                {([
                  ['President', 'Máxima autoridad del MC. Quien mantiene unido al club y representa su voz oficial.'],
                  ['Vice President', 'Mano derecha de la Presidenta.'],
                  ['Sergeant at Arms', 'Es el responsable del orden, la disciplina y la seguridad.'],
                  ['Secretary', 'Administrador y encargado del orden interno.'],
                  ['Treasurer', 'Encargado de las finanzas.'],
                  ['Road Captain', 'Marca el paso y vela por la seguridad en las rutas.'],
                  ['Members', 'Miembro activo del club.'],
                  ['Prospect', 'En período de prueba del MC. Sin voto.'],
                ] as [string, string][]).map(([rank, desc]) => (
                  <div key={rank} className="hier-row">
                    <div className="hier-rank">{rank}</div>
                    <div className="hier-desc">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pcard full">
              <div className="pcard-num">06 · Menú de servicios</div>
              <div className="pcard-title">Actividades del club</div>
              <ul>
                <li><strong style={{ color: 'var(--white2)' }}>Bar clandestino en el clubhouse</strong> — punto neurálgico para el rol social y reuniones.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Servicios de protección</strong> — escoltas, vigilancia de locales, cobro de &ldquo;seguros&rdquo;.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Tráfico y logística</strong> — transporte de mercancía sensible por rutas establecidas.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Rides organizados</strong> — eventos públicos de motos abiertos a toda la comunidad.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Taller mecánico (fachada legal)</strong> — venta de piezas y motos como cobertura.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ══ GALERÍA ══ */}
      <section id="galeria" className="sec">
        <div className="container">
          <div className="sec-eye">Momentos</div>
          <h2 className="sec-title">Galería</h2>
          <div className="sec-rule" />
          <div className="gal-mosaic">
            {GALLERY_IMAGES.map((src, index) => (
              <div
                key={src}
                className={`gcell gc${index + 1}`}
              >
                <img src={src} alt={`Galería ${index + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="mc-footer">
        <div className="footer-top-rule" />
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand-col">
              <Image src="/logo.png" alt="Mongrels MC" width={64} height={64} className="footer-logo" />
              <div>
                <div className="footer-brand-name">Mongrels <span>MC</span></div>
                <div className="footer-brand-sub">Sede San Andreas · FiveM RP</div>
              </div>
            </div>
            <div className="footer-nav-col">
              <div className="footer-nav-title">Navegación</div>
              <a href="#historia">Historia</a>
              <a href="#miembros">Miembros Activos</a>
              <a href="#porque">¿Por qué nosotros?</a>
              <a href="#ideas">Ideas de Rol</a>
              <a href="#postulacion">Postulación</a>
              <a href="#galeria">Galería</a>
            </div>
            <div className="footer-patch-col">
              <Image src="/fotos/1porcent.png" alt="1% ER" width={76} height={96} className="footer-one-pct" />
              <div className="footer-socials">
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-rule-line" />
            <div className="footer-copy">
              &ldquo;Vive Rápido, Muere Joven&rdquo; &nbsp;·&nbsp; © 2026 Mongrels MC &nbsp;·&nbsp; San Andreas · FiveM RP
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}