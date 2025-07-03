import Image from "next/image";

const experiencias = [
  {
    empresa: "ACL",
    logo: "/acl-logo.png", // Debes agregar este logo en la carpeta public
    puesto: "Desarrollador de front-end",
    tipo: "Contrato de prácticas",
    periodo: "dic. 2024 - feb. 2025 · 3 meses",
    ubicacion: "Providencia, Región Metropolitana de Santiago, Chile · En remoto",
    descripcion: "Desarrollador Frontend y Backend en sistema de gestión de vacantes y profesionales.",
    tecnologias: ["React.js", "Next.js"],
  },
  {
    empresa: "Duoc UC",
    logo: "/duocuc-logo.png", // Debes agregar este logo en la carpeta public
    puesto: "Ingeniero de proyecto",
    tipo: "Temporal",
    periodo: "ago. 2024 - dic. 2024 · 5 meses",
    ubicacion: "San Joaquín, Región Metropolitana de Santiago, Chile · Híbrido",
    descripcion: "Proyecto de título (Capstone) presentado ante la comisión del Instituto Profesional DuocUC. Se creó un proyecto informático para ayudar a las juntas de vecinos. Yo trabajé como desarrollador front-end, implementando funcionalidades clave y colaborando en la integración del sistema.",
    tecnologias: ["Gestión de proyectos", "Python"],
  },
];

export default function Experience() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1rem', background: 'linear-gradient(120deg, #232526 0%, #414345 100%)', borderRadius: 18 }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2.5rem', color: '#fff' }}>Experiencia</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiencias.map((exp, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px 0 rgba(31,38,135,0.07)',
            padding: '2rem',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <div style={{ minWidth: 64, minHeight: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src={exp.logo} alt={exp.empresa + ' logo'} width={64} height={64} style={{ borderRadius: 12, background: '#f3f3f3', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#000' }}>{exp.puesto}</h2>
              <div style={{ color: '#666', fontSize: '1.05rem', marginBottom: 4 }}>
                <b>{exp.empresa}</b> · {exp.tipo}
              </div>
              <div style={{ color: '#888', fontSize: '0.98rem', marginBottom: 2 }}>{exp.periodo}</div>
              <div style={{ color: '#888', fontSize: '0.98rem', marginBottom: 8 }}>{exp.ubicacion}</div>
              <p style={{ color: '#333', marginBottom: 8 }}>{exp.descripcion}</p>
              <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {exp.tecnologias.map((tech, i) => (
                  <span key={i} style={{
                    background: '#232526',
                    color: '#fff',
                    borderRadius: 8,
                    padding: '0.25rem 0.7rem',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
