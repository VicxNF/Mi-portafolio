import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      gap: '3rem',
      flexWrap: 'wrap',
      padding: '2rem 0',
      background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
    }}>
      {/* Columna izquierda: texto */}
      <div style={{ maxWidth: 500, minWidth: 300 }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'left', color: '#fff' }}>
          Victor Manuel Navarro Fermín
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: '#21e6c1', marginBottom: '1.5rem', textAlign: 'left' }}>
          Ingeniero en Computación | Desarrollador Web Full Stack
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#e0e0e0', marginBottom: '2rem', textAlign: 'left' }}>
          Apasionado por la tecnología y el desarrollo de soluciones innovadoras. Experiencia en desarrollo web, aplicaciones y trabajo en equipo.
        </p>
        {/* Iconos de redes sociales */}
        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/victor-manuel-navarro-fermin/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
          </a>
          <a href="mailto:victor.navarro.fermin@gmail.com" title="Correo">
            <Image src="/email.svg" alt="Correo" width={28} height={28} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Image src="/github.svg" alt="GitHub" width={28} height={28} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter">
            <Image src="/twitter.svg" alt="Twitter" width={28} height={28} />
          </a>
          {/* Puedes agregar más iconos aquí */}
        </div>
      </div>
      {/* Columna derecha: foto de perfil */}
      <div style={{ minWidth: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          border: '6px solid #f3f3f3',
          width: 220,
          height: 220,
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            src="/profile-example.jpg"
            alt="Foto de perfil"
            width={220}
            height={220}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
