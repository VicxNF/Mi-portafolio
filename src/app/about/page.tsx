import Image from "next/image";

export default function About() {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
      padding: '3rem 1rem',
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.10)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 900,
        width: '100%',
        padding: '2.5rem',
        gap: '2.5rem',
        flexWrap: 'wrap',
      }}>
        {/* Foto de perfil circular */}
        <div style={{ minWidth: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            src="/profile-example.jpg"
            alt="Foto de perfil"
            width={320}
            height={320}
            style={{
              objectFit: 'cover',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              border: '4px solid #fff',
              background: '#fff',
            }}
          />
        </div>
        {/* Bloque de información */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <h1 style={{ color: '#fff', fontSize: '2.1rem', fontWeight: 700, marginBottom: '0.7rem', letterSpacing: '0.5px' }}>
            Sobre mí
          </h1>
          <h2 style={{ color: '#6ee7b7', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.2rem', letterSpacing: '0.2px' }}>
            Ingeniero en Informática | Gestión de proyectos | Desarrollo Web
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            marginBottom: '1.5rem',
            color: '#e0e0e0',
            fontSize: '1.05rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}>
            <li><span style={{marginRight:8}}>👤</span><b>Nombre:</b> Victor Manuel Navarro Fermín</li>
            <li><span style={{marginRight:8}}>📧</span><b>Email:</b> <a href="mailto:victor.navarro.fermin@gmail.com" style={{ color: '#6ee7b7', textDecoration: 'none' }}>victor.navarro.fermin@gmail.com</a></li>
            <li><span style={{marginRight:8}}>💻</span><b>Stack:</b> Python, HTML, React, Angular, Scrum</li>
            <li><span style={{marginRight:8}}>🌐</span><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/victor-manuel-navarro-fermin/" target="_blank" rel="noopener noreferrer" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Perfil</a></li>
            <li><span style={{marginRight:8}}>📍</span><b>Ciudad:</b> Santiago, Chile</li>
            <li><span style={{marginRight:8}}>🎓</span><b>Certificación:</b> SFPC (Scrum Foundation Professional Certificate)</li>
          </ul>
          <p style={{ color: '#f3f3f3', fontSize: '1.08rem', lineHeight: 1.7, background: 'rgba(0,0,0,0.10)', borderRadius: 8, padding: '1rem 1.2rem' }}>
            Ingeniero en Informática con formación en gestión de proyectos y riesgos, aplicando metodologías ágiles como Scrum. Poseo experiencia en programación con lenguajes como Python, HTML, React y Angular. Me caracterizo por ser proactivo, organizado y con una alta capacidad de trabajo en equipo. Busco oportunidades que me permitan aplicar mis conocimientos, seguir aprendiendo y contribuir con soluciones tecnológicas que generen impacto real. En mi tiempo libre disfruto de la música, el animé, el manga y el fútbol, pasatiempos que enriquecen mi creatividad y pensamiento crítico.
          </p>
        </div>
      </div>
    </section>
  );
}
