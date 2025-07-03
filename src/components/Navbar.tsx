import Link from 'next/link';

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
    <Link href="/">Inicio</Link>
    <Link href="/about">Sobre mí</Link>
    <Link href="/experience">Experiencia</Link>
    <Link href="/skills">Habilidades</Link>
    <Link href="/projects">Proyectos</Link>
    <Link href="/contact">Contacto</Link>
  </nav>
);

export default Navbar;
