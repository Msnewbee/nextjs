import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/loby">Loby</Link>
            <Link href="/vidio">Vidio</Link>
            <Link href="/kontak">Kontak</Link>
        </nav>
    );
}
