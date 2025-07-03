const skills = [
  {
    categoria: "Frontend",
    color: "#21e6c1",
    items: [
      { nombre: "React.js", nivel: 3 },
      { nombre: "Next.js", nivel: 3 },
      { nombre: "HTML / CSS", nivel: 5 },
      { nombre: "Angular", nivel: 4 }
    ]
  },
  {
    categoria: "Backend",
    color: "#6ee7b7",
    items: [
      { nombre: "Python", nivel: 5 },
      { nombre: "Django REST framework", nivel: 4 }
    ]
  },
  {
    categoria: "Herramientas",
    color: "#a78bfa",
    items: [
      { nombre: "Microsoft Power BI", nivel: 3 }
    ]
  }
];

function SkillLevel({ nivel, max = 5 }: { nivel: number; max?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 3, marginLeft: 12 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 11,
            height: 11,
            borderRadius: '50%',
            background: i < nivel ? '#21e6c1' : '#232526',
            display: 'inline-block',
            border: '1.5px solid #21e6c1',
            opacity: i < nivel ? 1 : 0.35,
            transition: 'background 0.2s',
          }}
        />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section style={{
      minHeight: '80vh',
      background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
      padding: '3rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 'bold', marginBottom: 8, letterSpacing: 1, textAlign: 'center' }}>
        <span style={{ fontSize: '2rem', marginRight: 8 }}>🧠</span>Habilidades
      </h1>
      <p style={{ color: '#b2dfdb', fontSize: '1.1rem', marginBottom: '2.5rem', textAlign: 'center' }}>
        Explora mis habilidades y competencias técnicas
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2.5rem',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 1100,
      }}>
        {skills.map((cat, idx) => (
          <div key={idx} style={{
            background: 'rgba(35,37,38,0.97)',
            borderRadius: 18,
            boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)',
            padding: '2rem 2.2rem',
            minWidth: 240,
            maxWidth: 270,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}>
            <h2 style={{
              color: cat.color,
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: 10,
              letterSpacing: 0.5,
              textShadow: '0 1px 2px #23252644',
            }}>{cat.categoria}</h2>
            <hr style={{ border: 'none', borderTop: '1.5px solid #232526', margin: '0 0 0.7rem 0' }} />
            {cat.items.map((skill, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', fontSize: '1.08rem', fontWeight: 500 }}>
                <span>{skill.nombre}</span>
                <SkillLevel nivel={skill.nivel} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
