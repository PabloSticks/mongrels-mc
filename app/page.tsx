import Image from 'next/image'

const MEMBERS = [
  { id: 1,  alias: 'Nyx',       role: 'President',        pin: 'pin-red' , foto: 'fotos/presiwekita.png'    },
  { id: 2,  alias: 'Nahuel',    role: 'Vice President',   pin: 'pin-red', foto: 'fotos/vice.png'    },
  { id: 3,  alias: 'Ecko',      role: 'Sgt. at Arms',     pin: 'pin-yellow', foto: 'fotos/exko.png' },
  { id: 4,  alias: 'Aka',       role: 'Sgt. at Arms',   pin: 'pin-yellow', foto: 'fotos/wekita.png' },
  { id: 5,  alias: 'Pato',      role: 'Road Captain',   pin: 'pin-yellow', foto: 'fotos/pato.png' },
  { id: 6,  alias: 'Kayn',      role: 'Treasurer',      pin: 'pin-white', foto: 'fotos/camilitoxxx1369.png'  },
  { id: 7,  alias: 'Iris',      role: 'Secretary',      pin: 'pin-white', foto: 'fotos/iris.png'  },
  { id: 8,  alias: 'K.',        role: 'Loyal',         pin: 'pin-blue', foto: 'fotos/k..png'   },
  { id: 9,  alias: 'Fufe',      role: 'Member',         pin: 'pin-blue', foto: 'fotos/fufexxx.png'   },
  { id: 10, alias: 'Kai',       role: 'Member',         pin: 'pin-blue', foto: 'fotos/maricon.png'   },
  { id: 11, alias: 'Draco',     role: 'Prospect',         pin: 'pin-blue', foto: 'fotos/draco.png'   },
  { id: 12, alias: 'Pulguita',  role: 'Prospect',       pin: 'pin-white', foto: 'fotos/pulgon.png' },
]

export default function Home() {
  return (
    <>
      {/* ══ NAV ══ */}
      <nav className="mc-nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-brand">
            <Image src="/logo.png" alt="Mongrels MC" width={42} height={42} />
            <div className="nav-brand-text">
              <div className="nav-brand-name">Mongrels <span>MC</span></div>
              <div className="nav-brand-sub">Sede San Andreas · FiveM RP</div>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#historia">Historia</a></li>
            <li><a href="#miembros">La Manada</a></li>
            <li><a href="#postulacion">Postulación</a></li>
            <li><a href="#galeria">Galería</a></li>
          </ul>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-texture" />
        <div className="hero-watermark">MC</div>
        <div className="hero-content">
          <Image src="/logo.png" alt="Mongrels MC" width={220} height={220} className="hero-logo" />
          <div className="hero-kicker">San Andreas · FiveM Roleplay</div>
          <h1 className="hero-title">Mongrels <em>MC</em></h1>
          <div className="hero-tagline">&ldquo;Vive Rápido, Muere Joven&rdquo;</div>
          <div className="hero-rule">
            <div className="hero-rule-line" />
            <div className="hero-rule-icon" />
            <div className="hero-rule-line" />
          </div>
          <div className="hero-chips">
            <div className="hero-chip hl">Motorcycle Club</div>
            <div className="hero-chip">12 Miembros</div>
            <div className="hero-chip">Sede San Andreas</div>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
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
                <h3>El nacimiento de la manada</h3>
                <p>Mongrels MC no nació en una oficina ni en un club de lujo. Nació en el asfalto, entre humo y aceite, cuando un puñado de hermanos decidió que la libertad no se pedía — se tomaba. No éramos los más refinados. Éramos los mongrels: los que no encajan, los que no se doblegan, los que viven de acuerdo a sus propias reglas.</p>
                <p>Desde el primer ride, el pacto fue claro: lealtad absoluta o nada. Un hermano que entra, entra para quedarse.</p>
              </div>
              <div className="hist-img-col hist-img-col-placeholder">
                <div className="img-year">2015</div>
              </div>
            </div>
            <div className="hist-block rev">
              <div className="hist-text">
                <h3>Forjados en San Andreas</h3>
                <p>Kilómetro a kilómetro, el escudo del perro encadenado fue ganando peso en las calles de San Andreas. Cada ruta, cada disputa, cada acuerdo sellado a mano — todo fue construyendo la reputación de una hermandad que no pide permiso.</p>
                <p>Hoy somos 12. No muchos, pero los que están, están de verdad. Sin caretas, sin medias tintas. Mongrels o nada.</p>
              </div>
              <div className="hist-img-col hist-img-col-placeholder">
                <div className="img-year">HOY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ══ DETECTIVE BOARD ══ */}
      <section id="miembros" className="sec">
        <div className="container">
          <div className="sec-eye">Registro criminal · Dpto. Policía San Andreas</div>
          <h2 className="sec-title">La Manada</h2>
          <div className="sec-rule" />
        </div>
        <div className="container" style={{ maxWidth: 1300, marginTop: 48 }}>
          <div className="board-scene">
            <div className="board-frame">
              <div className="cork-surface">
                <div className="police-header">
                  <div className="pd-badge">Dpto. Policía · San Andreas PD · División Crimen Organizado</div>
                  <div className="pd-case">Caso #SA-2024-0847 · MONGRELS MC · En curso</div>
                </div>
                <div className="conf-stamp">
                  <span>Confidencial</span>
                  <small>San Andreas PD</small>
                </div>
                <svg className="board-strings-svg" viewBox="0 0 1220 780" preserveAspectRatio="none">
                  <g stroke="#8B1525" strokeWidth="1.4" opacity="0.6" fill="none">
                    <line x1="96"  y1="130" x2="290" y2="125"/>
                    <line x1="290" y1="125" x2="484" y2="132"/>
                    <line x1="484" y1="132" x2="678" y2="128"/>
                    <line x1="678" y1="128" x2="872" y2="130"/>
                    <line x1="872" y1="130" x2="1066" y2="125"/>
                    <line x1="96"  y1="390" x2="290" y2="385"/>
                    <line x1="290" y1="385" x2="484" y2="392"/>
                    <line x1="484" y1="392" x2="678" y2="388"/>
                    <line x1="678" y1="388" x2="872" y2="390"/>
                    <line x1="872" y1="390" x2="1066" y2="385"/>
                    <line x1="96"  y1="130" x2="96"  y2="390"/>
                    <line x1="1066" y1="125" x2="1066" y2="385"/>
                    <line x1="290" y1="125" x2="484" y2="392"/>
                    <line x1="678" y1="128" x2="484" y2="392"/>
                    <line x1="872" y1="130" x2="678" y2="388"/>
                    <line x1="1066" y1="125" x2="872" y2="390"/>
                    <line x1="96"  y1="130" x2="290" y2="385"/>
                    <line x1="290" y1="125" x2="96"  y2="390"/>
                    <line x1="872" y1="390" x2="1060" y2="580"/>
                  </g>
                </svg>
                <div className="board-grid" style={{ marginTop: 60 }}>
                  {MEMBERS.map((m) => (
                    <div key={m.id} className="bcard">
                      <div className={`pushpin ${m.pin}`} />
                      <div className="photo-wrap">
                        <div className={`photo-img ${!m.foto ? 'photo-img-placeholder' : ''}`}>
                          <div className="ev-num">#{String(m.id).padStart(2, '0')}</div>
                          {m.foto && <img src={m.foto} alt={m.alias} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} />}
                        </div>
                        <div className="photo-caption">
                          <div className="p-name">{m.alias}</div>
                          <div className="p-role">{m.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="sticky sy" style={{ bottom: 20, left: 40, transform: 'rotate(-3.5deg)', zIndex: 9 }}>12 sujetos<br />identificados<br />activos en S.A.</div>
                <div className="sticky sb" style={{ bottom: 120, left: 170, transform: 'rotate(2deg)', zIndex: 9 }}>Vínculos<br />con tráfico<br />¿confirmar?</div>
                <div className="sticky sp" style={{ bottom: 90, left: 310, transform: 'rotate(-1.5deg)', zIndex: 9 }}>Clubhouse<br />sin ubicar</div>
                <div className="sticky so" style={{ bottom: 108, left: 450, transform: 'rotate(3deg)', zIndex: 9 }}>Pres. = líder<br />operativo</div>
                <div className="sticky sg" style={{ bottom: 96, left: 590, transform: 'rotate(-2deg)', zIndex: 9 }}>Activos<br />desde 2015</div>
                <div className="doc-paper" style={{ bottom: 16, right: 300, transform: 'rotate(-2.5deg)' }}>
                  <div className="doc-title">Informe #0847</div>
                  Organización MC<br />San Andreas region<br />Estado: <strong>ACTIVO</strong><br />Miembros: 12<br />Riesgo: Alto<br />Seguimiento: Sí
                </div>
                <div className="board-map" style={{ bottom: 16, right: 40 }}>
                  <div className="pushpin pin-red" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                </div>
              </div>
            </div>
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
              <div className="pcard-num">01 · Tipo de local</div>
              <div className="pcard-title">Motorcycle Club</div>
              <p>Organización de tipo <strong style={{ color: 'var(--white2)' }}>Motorcycle Club (MC)</strong> — hermandad de motociclistas con estructura jerárquica, actividades de rol social y criminal. Sede física con clubhouse, rutas organizadas y presencia en el submundo de San Andreas.</p>
            </div>
            <div className="pcard">
              <div className="pcard-num">02 · Ubicación</div>
              <div className="pcard-title">Sede del Club</div>
              <p>Buscamos establecer nuestro <strong style={{ color: 'var(--white2)' }}>clubhouse</strong> en zona industrial o periférica de Los Santos — espacio con garaje para motos, bar interno y sala de reuniones. Abiertos a propuesta de mapeo externo acorde a la identidad del club.</p>
            </div>
            <div className="pcard full">
              <div className="pcard-num">03 · Contribución al servidor</div>
              <div className="pcard-title">Aporte a la comunidad</div>
              <ul>
                <li>Dinamismo criminal organizado: tráfico, protección, disputas de territorio — genera roleplay activo para policías, rivales y aliados.</li>
                <li>Rides y concentraciones masivos: eventos que involucran toda la comunidad — civiles, mecánicos, prensa, fuerzas del orden.</li>
                <li>Red de economía paralela: contratos, extorsiones, servicios clandestinos que nutren el submundo del servidor.</li>
                <li>Cultura MC auténtica: vestimenta, jerga, rituales de ingreso, rangos y protocolos que enriquecen la inmersión.</li>
                <li>Rol social: el clubhouse como punto de encuentro, bar clandestino y espacio de eventos para toda la comunidad.</li>
              </ul>
            </div>
            <div className="pcard">
              <div className="pcard-num">04 · Proyección y objetivos</div>
              <div className="pcard-title">Visión y metas</div>
              <ul>
                <li><strong style={{ color: 'var(--white2)' }}>Corto plazo:</strong> consolidar sede, protocolos internos y primeras alianzas.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Mediano plazo:</strong> ganar territorio, ampliar membresía con prospects.</li>
                <li><strong style={{ color: 'var(--white2)' }}>Largo plazo:</strong> organización de referencia con lore propio y eventos recurrentes.</li>
              </ul>
            </div>
            <div className="pcard">
              <div className="pcard-num">05 · Jefatura y jerarquía</div>
              <div className="pcard-title">Estructura interna</div>
              <div className="hier-table">
                {([
                  ['President',            'Máxima autoridad. Decisiones estratégicas y representación.'],
                  ['Vice President',       'Soporte al President. Mando en su ausencia.'],
                  ['Sgt. at Arms',         'Seguridad y disciplina. Brazo ejecutor del club.'],
                  ['Road Captain',         'Logística de rutas y rides.'],
                  ['Treasurer / Secretary','Finanzas y registros del club.'],
                  ['Members',              'Hermanos plenos con parche completo.'],
                  ['Prospect',             'En período de prueba. Sin voto ni parche.'],
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
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <Image src="/logo.png" alt="Mongrels MC" width={54} height={54} style={{ opacity: 0.6 }} />
              <div>
                <div className="footer-brand-name">Mongrels MC</div>
                <div className="footer-brand-sub">Sede San Andreas · FiveM RP</div>
              </div>
            </div>
            <div className="footer-copy">&ldquo;Vive Rápido, Muere Joven&rdquo; &nbsp;·&nbsp; © 2026 Mongrels MC</div>
            <div className="footer-socials">
              <a href="#" className="fsoc" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" className="fsoc" aria-label="Discord">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
              </a>
              <a href="#" className="fsoc" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.189 1.618 6.006L0 24l6.156-1.594A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.93a9.936 9.936 0 0 1-5.058-1.382l-.363-.215-3.757.983.999-3.666-.237-.376A9.96 9.96 0 0 1 2.07 12C2.07 6.48 6.48 2.07 12 2.07S21.93 6.48 21.93 12 17.52 21.93 12 21.93z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}