'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
      nacimiento: '24·JUL·2002', lugar: 'DALLAS', clasificacion: 'ALTO RIESGO',
      altura: '1.65 m', peso: '60 kg', ojos: 'Verdes', cabello: 'Castaño rojizo',
      historia: `Amelia llegó a la ciudad sin rumbo claro, pero en Mongrel’s MC encontró algo que no sabía que le faltaba: una familia real.
Dentro del club dejó de fingir, creciendo hasta convertirse en Tesorera, donde aprendió a manejar dinero, riesgos y silencios peligrosos.
Con el tiempo asumió el liderazgo como Presidenta, cargando decisiones difíciles y la pérdida de compañeros que marcaron al MC.
Mongrel’s dejó de ser un grupo y se transformó en su hogar, su identidad y su motivo para seguir adelante.
Cada golpe fortaleció su carácter y su forma de liderar, volviéndola más estratégica y firme.
Pero los negocios comenzaron a caer, y la ciudad dejó de ser segura para ellos.
El MC tomó una decisión clave: irse para sobrevivir.
Amelia, para proteger a los suyos, dejó atrás su nombre y todo lo que la vinculaba al pasado.
Aun así, no partió sola… partió con su MC, con su familia, con quienes habían resistido todo junto a ella.
Y desde cero, en una nueva ciudad, comenzarán a levantar Mongrel’s otra vez como un legado que nadie volvería a derribar`,
      antecedentes: [
        { fecha: '07·MAR·2022', desc: 'Tenencia ilegal de armas asociada a propiedades y espacios donde se han encontrado armas sin registro. No se acredita posesión directa.', badge: 'Armas', tipo: 'dark' },
        { fecha: '11·OCT·2024', desc: 'Disputa territorial con organización rival. Detenida, liberada sin cargos.', badge: 'Violencia', tipo: 'red' },
      ]
    }
  },
  {
    id: 2, alias: 'Nahuel', role: 'Vice President', pin: 'pin-red', foto: 'fotos/Nahuel.png',
    ficha: {
      nombre: 'Emilio', apellido: 'Schmidt', dni: '19.304.817',
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
      historia: 'Jack Ortiz, nacido el 13 de octubre de 1998, creció bajo la crianza firme de su madre en un entorno donde el respeto y el control eran fundamentales. Desde niño fue observador y tranquilo, aprendiendo a no confiar fácilmente y a actuar solo cuando era necesario. Durante su adolescencia comenzó a pasar más tiempo en la calle, donde formó su carácter. A los 17 años dio sus primeros pasos en el mundo delictual, participando en robos menores y trabajos discretos, destacando por su calma y precisión al actuar. Con el tiempo se involucró en encargos más organizados, desarrollando habilidades en mecánica y resolución de problemas. Su forma directa y eficiente de actuar le dio el apodo “Ecko”. Hoy busca consolidar su lugar dentro de Mongrel’s MC, ganarse el respeto desde abajo y construir su propio nombre sin depender de nadie.',
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
Con 20 años, trabajando en el taller Mongrel’s, logró ganarse la confianza del grupo.
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
      nacimiento: '04·MAY·2006', lugar: 'San Andreas', clasificacion: 'ALTO RIESGO',
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
    id: 8, alias: 'K.', role: 'Loyal', pin: 'pin-blue', foto: 'fotos/k..png',
    ficha: {
      nombre: 'DESCONOCIDO', apellido: 'DESCONOCIDO', dni: '— SIN REGISTRO —',
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
      nombre: 'Felipe', apellido: 'Urra', dni: '22.193.047',
      nacimiento: '19·JUN·1996', lugar: 'Los Santos, S.A.', clasificacion: 'RIESGO MEDIO',
      altura: '1.76 m', peso: '78 kg', ojos: 'Marrones', cabello: 'Oscuro',
      historia: '"Fufe" es miembro activo con parche completo. Participó en múltiples operaciones de protección y logística del club. Leal a la directiva sin cuestionamientos. Brazo ejecutor en disputas menores del MC contra organizaciones rivales.',
      antecedentes: [
        { fecha: '16·JUL·2020', desc: 'Detenido en control preventivo portando arma sin documentación válida.', badge: 'Armas', tipo: 'dark' },
        { fecha: '04·DIC·2022', desc: 'Riña con integrantes de organización rival en bar del sector Hawick.', badge: 'Violencia', tipo: 'red' },
      ]
    }
  },
  {
    id: 10, alias: 'Kai', role: 'Member', pin: 'pin-blue', foto: 'fotos/Kai.png',
    ficha: {
      nombre: 'Kai', apellido: 'Restrepo', dni: '27.854.199',
      nacimiento: '05·MAR·2002', lugar: 'Vespucci, S.A.', clasificacion: 'BAJO RIESGO',
      altura: '1.72 m', peso: '69 kg', ojos: 'Oscuros', cabello: 'Negro',
      historia: 'El miembro más joven con parche completo. "Kai" probó su lealtad durante el período de prospect con eficiencia notable. Se sospecha de su participación en actividades de inteligencia e infiltración para el MC en otras organizaciones del submundo.',
      antecedentes: [
        { fecha: '11·MAR·2023', desc: 'Detenido por alteración del orden público en sector céntrico. Liberado sin cargos.', badge: 'Orden Público', tipo: 'gray' },
      ]
    }
  },
  {
    id: 11, alias: 'Draco', role: 'Prospect', pin: 'pin-blue', foto: 'fotos/draco.png',
    ficha: {
      nombre: 'Rodrigo', apellido: 'Espinoza', dni: '28.441.003',
      nacimiento: '14·NOV·2003', lugar: 'Strawberry, S.A.', clasificacion: 'BAJO RIESGO',
      altura: '1.81 m', peso: '82 kg', ojos: 'Oscuros', cabello: 'Negro',
      historia: '"Draco" se encuentra en período de prospect, demostrando su valía ante el club. Historial previo limpio, lo que genera desconfianza entre algunos miembros veteranos. Actualmente bajo vigilancia constante del consejo interno.',
      antecedentes: [
        { fecha: '20·ABR·2024', desc: 'Primera detención: presente en escena de disputa vinculada al MC. Liberado.', badge: 'Testigo', tipo: 'gray' },
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
    titulo: 'Ride & Cobra',
    desc: 'El club organiza un ride por Los Santos exigiendo cuota de protección a locales en la ruta. Civiles, mecánicos, prensa y policías involucrados por igual.',
  },
  {
    num: '02', nivel: 'CRIMINAL', color: 'idea-criminal',
    titulo: 'Guerra de Territorio',
    desc: 'Conflicto activo con otra organización por control de zona industrial. Negociación, ultimátums, y si falla, respuesta directa sobre el terreno.',
  },
  {
    num: '03', nivel: 'INTERNO', color: 'idea-interno',
    titulo: 'El Infiltrado',
    desc: 'Un miembro sospecha que hay un informante en el club. Tensión interna, interrogatorios, traiciones. El consejo debe encontrar al topo antes que la LSPD actúe.',
  },
  {
    num: '04', nivel: 'CRIMINAL', color: 'idea-criminal',
    titulo: 'Ruta del Norte',
    desc: 'Operativo de transporte de cargamento sensible por las rutas del condado. Pato lidera la logística. Un punto de control policial amenaza toda la operación.',
  },
  {
    num: '05', nivel: 'SOCIAL', color: 'idea-social',
    titulo: 'Initiation',
    desc: 'Un nuevo aspirante debe completar pruebas definidas por el consejo para ganarse el parche. Cada miembro puede sumarse al proceso como evaluador o complicarle la vida.',
  },
  {
    num: '06', nivel: 'POLÍTICO', color: 'idea-politico',
    titulo: 'Cumbre de Clanes',
    desc: 'Reunión entre MCs rivales para negociar tratado o declarar guerra abierta. La presidenta negocia. El Sgt. at Arms vigila. Un movimiento en falso lo cambia todo.',
  },
]

/* ═══════════════════════════════════════════════
   FICHA MODAL COMPONENT
═══════════════════════════════════════════════ */
function FichaModal({ member, onClose }: { member: Member; onClose: () => void }) {
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
                  ? <img src={member.foto} alt={member.alias} />
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
}

/* ═══════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════ */
export default function Home() {
  const [activeMember, setActiveMember] = useState<Member | null>(null)

  return (
    <>
      {activeMember && <FichaModal member={activeMember} onClose={() => setActiveMember(null)} />}

      {/* ══ NAV ══ */}
      <nav className="mc-nav">
        <div className="nav-accent-left" />
        <div className="nav-inner">
          <a href="#hero" className="nav-brand">
            <div className="nav-one-pct">
              <Image src="/fotos/1porcent.png" alt="1%" width={28} height={36} className="nav-one-pct-img" />
            </div>
            <Image src="/logo.png" alt="Mongrels MC" width={40} height={40} className="nav-logo-img" />
            <div className="nav-brand-text">
              <div className="nav-brand-name">Mongrels <span>MC</span></div>
              <div className="nav-brand-sub">Sede San Andreas · FiveM RP</div>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#historia"><Image src="/fotos/1porcent.png" alt="1%" width={22} height={28} className="nav-link-icon" />Historia</a></li>
            <li><a href="#miembros"><Image src="/fotos/1porcent.png" alt="1%" width={22} height={28} className="nav-link-icon" />Miembros</a></li>
            <li><a href="#porque"><Image src="/fotos/1porcent.png" alt="1%" width={22} height={28} className="nav-link-icon" />¿Por qué?</a></li>
            <li><a href="#ideas"><Image src="/fotos/1porcent.png" alt="1%" width={22} height={28} className="nav-link-icon" />Ideas de Rol</a></li>
            <li><a href="#postulacion"><Image src="/fotos/1porcent.png" alt="1%" width={22} height={28} className="nav-link-icon" />Postulación</a></li>
            <li><a href="#galeria"><Image src="/fotos/1porcent.png" alt="1%" width={22} height={28} className="nav-link-icon" />Galería</a></li>
          </ul>
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
          <Image src="/logo.png" alt="Mongrels MC" width={200} height={200} className="hero-logo" />
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
              <div className="hist-img-col hist-img-col-placeholder">
                <div className="hist-img-overlay" />
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
              <div className="hist-img-col hist-img-col-placeholder">
                <div className="hist-img-overlay" />
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
              <div className="hist-img-col hist-img-col-placeholder">
                <div className="hist-img-overlay" />
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
              <div className="hist-img-col hist-img-col-placeholder">
                <div className="hist-img-overlay" />
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
                    {/* row 1 horizontal */}
                    <line x1="96" y1="140" x2="302" y2="135" />
                    <line x1="302" y1="135" x2="508" y2="142" />
                    <line x1="508" y1="142" x2="714" y2="138" />
                    <line x1="714" y1="138" x2="920" y2="140" />
                    <line x1="920" y1="140" x2="1126" y2="135" />
                    {/* row 2 horizontal */}
                    <line x1="96" y1="410" x2="302" y2="405" />
                    <line x1="302" y1="405" x2="508" y2="412" />
                    <line x1="508" y1="412" x2="714" y2="408" />
                    <line x1="714" y1="408" x2="920" y2="410" />
                    <line x1="920" y1="410" x2="1126" y2="405" />
                    {/* verticals */}
                    <line x1="96" y1="140" x2="96" y2="410" />
                    <line x1="1126" y1="135" x2="1126" y2="405" />
                    <line x1="508" y1="142" x2="508" y2="412" />
                    {/* diagonals */}
                    <line x1="302" y1="135" x2="508" y2="412" />
                    <line x1="714" y1="138" x2="508" y2="412" />
                    <line x1="920" y1="140" x2="714" y2="408" />
                    <line x1="1126" y1="135" x2="920" y2="410" />
                    <line x1="96" y1="140" x2="302" y2="405" />
                    <line x1="302" y1="135" x2="96" y2="410" />
                    {/* extra crossing */}
                    <line x1="714" y1="138" x2="920" y2="410" />
                    <line x1="302" y1="405" x2="96" y2="140" opacity="0.3" />
                    <line x1="920" y1="410" x2="1126" y2="600" opacity="0.4" />
                    <line x1="508" y1="412" x2="302" y2="600" opacity="0.3" />
                  </g>
                </svg>

                {/* Board grid */}
                <div className="board-grid">
                  {MEMBERS.map((m) => (
                    <div
                      key={m.id}
                      className={`bcard bcard-${m.id}`}
                      onClick={() => setActiveMember(m)}
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
                  <img src="fotos/Sede.png" alt="Sede" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
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
            No somos un grupo de amigos con motos. Somos una organización con estructura, protocolo y lore propio.
            Esto es lo que nos diferencia.
          </p>
          <div className="porque-grid">
            <div className="porque-card">
              <div className="porque-num">01</div>
              <div className="porque-icon">⛓</div>
              <h3>Hermandad real</h3>
              <p>Jerarquía definida, rangos con significado real, ceremonia de ingreso y código interno. Cada hermano que entra, entra de verdad.</p>
            </div>
            <div className="porque-card">
              <div className="porque-num">02</div>
              <div className="porque-icon">🔥</div>
              <h3>Rol criminal auténtico</h3>
              <p>Extorsión, tráfico, territorio, acuerdos y traiciones. Generamos drama real que activa el roleplay de policías, rivales y civiles.</p>
            </div>
            <div className="porque-card">
              <div className="porque-num">03</div>
              <div className="porque-icon">🏍</div>
              <h3>Cultura MC completa</h3>
              <p>Parches, rides organizados, clubhouse, ceremonias y jerga propia. La experiencia de un Motorcycle Club de verdad.</p>
            </div>
            <div className="porque-card">
              <div className="porque-num">04</div>
              <div className="porque-icon">🗺</div>
              <h3>Impacto en el servidor</h3>
              <p>Cada operación que hacemos activa el roleplay de múltiples facciones. Somos el motor que mueve el submundo de San Andreas.</p>
            </div>
          </div>
          <div className="porque-bottom">
            <div className="porque-bottom-line" />
            <div className="porque-quote">&ldquo;No pedimos permiso. No pedimos disculpas.&rdquo;</div>
            <div className="porque-bottom-line" />
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
            <div className="gcell gc1 gcell-placeholder" />
            <div className="gcell gc2 gcell-placeholder" />
            <div className="gcell gc3 gcell-placeholder" />
            <div className="gcell gc4 gcell-placeholder" />
            <div className="gcell gc5 gcell-placeholder" />
            <div className="gcell gc6 gcell-placeholder" />
            <div className="gcell gc7 gcell-placeholder" />
            <div className="gcell gc8 gcell-placeholder" />
            <div className="gcell gc9 gcell-placeholder" />
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
              <svg viewBox="0 0 60 76" width="48" height="60" className="footer-one-pct">
                <polygon points="30,2 58,18 58,58 30,74 2,58 2,18" fill="none" stroke="#6B0F1A" strokeWidth="3" />
                <polygon points="30,6 54,20 54,56 30,70 6,56 6,20" fill="none" stroke="#6B0F1A" strokeWidth="1" opacity="0.4" />
                <text x="30" y="40" textAnchor="middle" fontSize="14" fontFamily="Oswald,sans-serif" fontWeight="700" fill="#6B0F1A" letterSpacing="0">1%</text>
                <text x="30" y="56" textAnchor="middle" fontSize="11" fontFamily="Oswald,sans-serif" fontWeight="700" fill="#6B0F1A" letterSpacing="3">ER</text>
              </svg>
              <div className="footer-socials">
                <a href="#" className="fsoc" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" className="fsoc" aria-label="Discord">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                </a>
                <a href="#" className="fsoc" aria-label="WhatsApp">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.189 1.618 6.006L0 24l6.156-1.594A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.93a9.936 9.936 0 0 1-5.058-1.382l-.363-.215-3.757.983.999-3.666-.237-.376A9.96 9.96 0 0 1 2.07 12C2.07 6.48 6.48 2.07 12 2.07S21.93 6.48 21.93 12 17.52 21.93 12 21.93z" />
                  </svg>
                </a>
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